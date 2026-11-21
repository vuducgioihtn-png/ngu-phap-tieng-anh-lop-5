import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const IOE_SYSTEM_INSTRUCTION = `Bạn là Chuyên gia ra đề thi IOE (Olympic Tiếng Anh trên Internet) và Trạng Nguyên Tiếng Anh tại Việt Nam, am hiểu sâu sắc chương trình Giáo dục phổ thông 2018 và Tiếng Anh lớp 5.

Khi người dùng yêu cầu tạo đề cho [Khối lớp 5], [Chủ đề / Unit] và [Số lượng câu], bạn phải tạo ra bộ câu hỏi chất lượng cao, sinh động, phù hợp học sinh lớp 5, phân bổ đều 4 dạng bài:
1. FILL_BLANK: Điền chữ cái còn thiếu trong từ vựng (ví dụ: "Điền chữ cái còn thiếu: h o m e _ o w n (quê hương)" với correct_answer là "t", hoặc điền 1 từ/giới từ/động từ vào chỗ trống "___" trong câu ngắn với correct_answer là 1 từ chuẩn xác).
2. REARRANGE: Sắp xếp các từ/cụm từ bị xáo trộn trong mảng "segments" thành câu hoàn chỉnh đúng ngữ pháp (dấu câu cuối câu nằm gọn trong correct_answer, ví dụ "Where do you live?").
3. LISTEN_CHOICE: Câu hỏi nghe hiểu — trường "audio_script" chứa 1 câu hoặc hội thoại ngắn bằng tiếng Anh để phát âm thanh, "question_text" hỏi câu hỏi nghe hiểu, "options" có đúng 4 lựa chọn A, B, C, D rõ ràng (không cần tiền tố "A. " trong text, chỉ ghi nội dung đáp án), "correct_answer" khớp chính xác với 1 trong 4 phần tử trong "options".
4. MATCHING: Đúng 4 cặp từ vựng Tiếng Anh - Nghĩa Tiếng Việt hoặc Câu hỏi - Câu trả lời giao tiếp trong trường "pairs" (mỗi phần tử gồm {"left": "...", "right": "..."}).

Mọi câu hỏi đều phải có trường "explanation" giải thích ngắn gọn, thân thiện, dễ hiểu bằng tiếng Việt cho học sinh lớp 5 (nêu rõ cấu trúc câu hoặc nghĩa của từ).
Trả về JSON Array chuẩn xác theo schema.`;

async function startServer() {
  const app = express();
  app.use(express.json());

  app.post("/api/generate-ioe", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          error: "Chưa cấu hình khóa API Gemini trên máy chủ. Bạn vẫn có thể luyện bộ đề IOE có sẵn cho cả 20 Unit ngay lập tức.",
        });
      }

      const unitTitle = typeof req.body?.unitTitle === "string" ? req.body.unitTitle.trim() : "Unit 1: What's your address?";
      const rawCount = Number(req.body?.count);
      const count = Number.isFinite(rawCount) && rawCount >= 4 && rawCount <= 12 ? Math.floor(rawCount) : 8;
      const focusVocab = Array.isArray(req.body?.vocabHints) ? req.body.vocabHints.slice(0, 12).join(", ") : "";

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const prompt = `Hãy tạo bộ ${count} câu hỏi luyện thi IOE / Trạng Nguyên Tiếng Anh Lớp 5 cho chủ đề: "${unitTitle}".
${focusVocab ? `Ưu tiên sử dụng từ vựng trọng tâm của bài: ${focusVocab}.` : ""}
Phân bổ đều cả 4 dạng bài: FILL_BLANK, REARRANGE, LISTEN_CHOICE, MATCHING.
Đảm bảo không trùng lặp ý tưởng, ngôn ngữ chính xác, thân thiện với học sinh lớp 5.`;

      const response = await ai.models.generateContent({
        model: "gemini-4-hydrogen",
        contents: prompt,
        config: {
          systemInstruction: IOE_SYSTEM_INSTRUCTION,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                grade: { type: Type.INTEGER },
                unit: { type: Type.STRING },
                type: { type: Type.STRING },
                question_text: { type: Type.STRING },
                audio_script: { type: Type.STRING, nullable: true },
                options: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  nullable: true,
                },
                segments: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  nullable: true,
                },
                pairs: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      left: { type: Type.STRING },
                      right: { type: Type.STRING },
                    },
                    required: ["left", "right"],
                  },
                  nullable: true,
                },
                correct_answer: { type: Type.STRING },
                explanation: { type: Type.STRING },
              },
              required: ["id", "grade", "unit", "type", "question_text", "correct_answer", "explanation"],
            },
          },
        },
      });

      const rawText = (response.text ?? "[]").trim();
      const parsed = JSON.parse(rawText);

      if (!Array.isArray(parsed) || parsed.length === 0) {
        return res.status(502).json({
          error: "Không nhận được bộ câu hỏi hợp lệ. Vui lòng thử lại.",
        });
      }

      return res.json({ questions: parsed });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Đã xảy ra lỗi khi tạo bộ đề.";
      console.error("Error generating IOE quiz:", err);
      return res.status(500).json({
        error: `Không thể tạo đề mới lúc này (${message}). Hãy thử lại hoặc dùng bộ đề có sẵn.`,
      });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`BrightStep 5 server running at http://localhost:${PORT}`);
  });
}

startServer();
