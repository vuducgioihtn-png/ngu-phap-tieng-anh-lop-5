import React, { useState } from 'react';
import {
  ArrowUpRight,
  Award,
  BookCheck,
  CheckCircle2,
  Compass,
  Eye,
  Globe2,
  HelpCircle,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Trophy,
  Turtle,
  Volume2,
  XCircle,
} from 'lucide-react';
import type { ParagraphBlank } from '../data/pages1to20Data';
import {
  ANSWER_KEY_PAGES_158_167,
  U19_TASK3_PART2_DEFS,
  U19_TASK4_READING,
  U19_TASK5_DIALOGUE,
  U19_TASK6_TAM_BLANKS,
  U19_TASK7_PART1_P148,
  U19_TASK7_PART2_P149,
  U19_TASK8_ORDERS,
  U19_TASK9_WRITING,
  U20_CITY_VS_COUNTRY_DUELS,
  U20_IRREGULAR_COMPARATIVES,
  U20_TASK10_ORDERS,
  U20_TASK11_NGA_CHOICES,
  U20_TASK11_NGA_PASSAGE,
  U20_TASK12_WRITING,
  U20_TASK1_ODD,
  U20_TASK2_MISTAKES,
  U20_TASK3_DEFS,
  U20_TASK4_COMPARATIVE_TABLE,
  U20_TASK5_READING,
  U20_TASK6_DIALOGUE,
  U20_TASK7_INTONATION,
  U20_TASK8_KATE_BLANKS,
  U20_TASK9_WORLD_CITIES,
  U20_VOCAB_COMPARATIVE_CORE,
  U20_VOCAB_PAGE150,
  U20_VOCAB_PAGE151,
  U20_WORLD_CITY_FACTS,
  type AnswerKeyUnitBlock,
} from '../data/pages147to167Data';
import { playFeedbackTone, speakEnglish } from '../utils/speech';
import {
  ChoiceExerciseBlock,
  DialogueOrderBlock,
  GuidedWritingBlock,
  PictureFillBlock,
  SentenceOrderBlock,
  TrueFalseReadingBlock,
  VocabCardsGrid,
} from './PageExerciseWidgets';
import { ComparativeMasterDiagram, MiniPictureIcon } from './PageVisuals';

interface Pages147To167ViewProps {
  activePage: number;
  completedTaskIds: string[];
  onCompleteTask: (taskId: string) => void;
  onJumpToPage: (page: number) => void;
  muted: boolean;
}

/* =========================================================
   HELPER 1: INLINE PICTURE CLOZE (PAGES 148 & 155)
   ========================================================= */
interface ClozeSegment {
  text?: string;
  exampleWord?: string;
  exampleIcon?: string;
  blankIndex?: number;
}

const InlinePictureCloze: React.FC<{
  taskId: string;
  title: string;
  instruction: string;
  segments: ClozeSegment[];
  blanks: ParagraphBlank[];
  fullAudioText: string;
  translationVi: string;
  note?: string;
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({
  taskId,
  title,
  instruction,
  segments,
  blanks,
  fullAudioText,
  translationVi,
  note,
  completedTaskIds,
  onCompleteTask,
  muted,
}) => {
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState<boolean | null>(null);
  const [showVi, setShowVi] = useState(false);

  const isBlankRight = (b: ParagraphBlank) =>
    b.answers.some((a) => a.toLowerCase() === (inputs[b.index] ?? '').trim().toLowerCase());

  const handleCheck = () => {
    const allRight = blanks.every(isBlankRight);
    setChecked(allRight);
    playFeedbackTone(allRight ? 'celebrate' : 'wrong', muted);
    if (allRight) onCompleteTask(taskId);
  };

  const handleReveal = () => {
    const filled: Record<number, string> = {};
    blanks.forEach((b) => {
      filled[b.index] = b.answers[0];
    });
    setInputs(filled);
    setChecked(true);
  };

  const isDone = completedTaskIds.includes(taskId);

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{instruction}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => speakEnglish(fullAudioText, 0.88)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            Nghe cả đoạn
          </button>
          <button
            type="button"
            onClick={() => setShowVi((v) => !v)}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
          >
            {showVi ? 'Ẩn dịch' : 'Xem dịch'}
          </button>
          {isDone && (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
              <CheckCircle2 className="w-4 h-4" />
              Hoàn thành
            </span>
          )}
        </div>
      </div>

      {/* Picture Clue Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 bg-slate-50 border border-slate-200 rounded-2xl p-3.5">
        {blanks.map((b) => (
          <div
            key={b.id}
            className="bg-white rounded-xl border border-slate-200 p-2.5 flex items-center gap-2.5"
          >
            <MiniPictureIcon iconKey={b.iconKey ?? 'book'} className="w-11 h-11 shrink-0" />
            <div className="min-w-0">
              <p className="text-xs font-extrabold text-sky-700">Chỗ trống ({b.index})</p>
              <p className="text-[11px] text-slate-600 leading-snug">{b.hint}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Cloze Paragraph */}
      <div className="rounded-2xl bg-sky-50/40 border border-sky-100 p-4 sm:p-5 text-sm sm:text-base text-slate-800 leading-loose">
        {segments.map((seg, i) => {
          if (seg.text) return <span key={i}>{seg.text}</span>;
          if (seg.exampleWord) {
            return (
              <span
                key={i}
                className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 rounded-lg bg-emerald-100 text-emerald-900 font-bold align-middle"
              >
                {seg.exampleIcon && (
                  <MiniPictureIcon iconKey={seg.exampleIcon} className="w-5 h-5" />
                )}
                <span>(0) {seg.exampleWord}</span>
              </span>
            );
          }
          if (seg.blankIndex !== undefined) {
            const blank = blanks.find((b) => b.index === seg.blankIndex);
            if (!blank) return null;
            const right = checked !== null ? isBlankRight(blank) : null;
            return (
              <span
                key={i}
                className="inline-flex items-center gap-1 mx-1 align-middle"
              >
                <span className="text-xs font-extrabold text-sky-700">({blank.index})</span>
                <input
                  type="text"
                  value={inputs[blank.index] ?? ''}
                  onChange={(e) => {
                    setInputs((prev) => ({ ...prev, [blank.index]: e.target.value }));
                    setChecked(null);
                  }}
                  placeholder="..."
                  className={`w-28 sm:w-32 px-2.5 py-1 rounded-lg border text-sm font-bold focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    right === true
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-800'
                      : right === false
                      ? 'bg-rose-50 border-rose-400 text-rose-800'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </span>
            );
          }
          return null;
        })}
      </div>

      {showVi && (
        <div className="rounded-xl bg-amber-50/80 border border-amber-200 p-4 text-sm text-amber-950 leading-relaxed">
          <p className="font-bold text-amber-900 mb-1">Bản dịch dễ hiểu:</p>
          <p>{translationVi}</p>
        </div>
      )}

      {note && (
        <p className="text-xs text-slate-500 italic">Lưu ý: {note}</p>
      )}

      <div className="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={handleCheck}
          className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold cursor-pointer"
        >
          Kiểm tra cả đoạn
        </button>
        <button
          type="button"
          onClick={() => {
            setInputs({});
            setChecked(null);
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Làm lại
        </button>
        <button
          type="button"
          onClick={handleReveal}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-sm font-semibold cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          Hiện đáp án
        </button>
      </div>

      {checked !== null && (
        <div
          className={`flex items-start gap-2.5 rounded-xl p-3.5 text-sm border ${
            checked
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : 'bg-rose-50 border-rose-200 text-rose-900'
          }`}
        >
          {checked ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          )}
          <p>
            {checked
              ? 'Xuất sắc! Em đã điền chính xác toàn bộ 5 từ theo tranh. Bấm "Nghe cả đoạn" để luyện đọc trôi chảy nhé!'
              : 'Có ô đang tô đỏ chưa khớp. Em nhìn lại khung tranh gợi ý ở trên hoặc chú ý số ít / số nhiều nhé!'}
          </p>
        </div>
      )}
    </section>
  );
};

/* =========================================================
   HELPER 2: CITY VS. COUNTRYSIDE COMPARISON DUEL (PAGE 151)
   ========================================================= */
const CityVsCountryDuelStudio: React.FC = () => {
  const [selectedId, setSelectedId] = useState(U20_CITY_VS_COUNTRY_DUELS[0].id);
  const duel =
    U20_CITY_VS_COUNTRY_DUELS.find((d) => d.id === selectedId) ?? U20_CITY_VS_COUNTRY_DUELS[0];

  return (
    <section className="bg-gradient-to-br from-teal-50/80 via-white to-sky-50/70 border border-teal-200 rounded-3xl p-5 sm:p-6 space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
            Xưởng So Sánh Tương Tác · Unit 20
          </p>
          <h3 className="font-display text-xl font-extrabold text-slate-900">
            Đấu trường Thành phố vs. Nông thôn (Which one is ...?)
          </h3>
          <p className="text-sm text-slate-600">
            Bấm chọn từng cặp tính từ bên dưới để nghe mẫu câu hỏi – đáp so sánh hơn cực chuẩn!
          </p>
        </div>
        <button
          type="button"
          onClick={() => speakEnglish(`${duel.question} ${duel.answer}`, 0.88)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold cursor-pointer self-start shrink-0"
        >
          <Volume2 className="w-4 h-4" />
          Nghe cặp hỏi – đáp
        </button>
      </div>

      {/* Selector buttons */}
      <div className="flex flex-wrap gap-2">
        {U20_CITY_VS_COUNTRY_DUELS.map((item) => {
          const active = item.id === duel.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setSelectedId(item.id);
                speakEnglish(item.comparative, 0.9);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                active
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-teal-400'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Duel Arena */}
      <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
        <div
          className={`md:col-span-4 rounded-2xl p-4 border-2 flex items-center gap-3.5 ${
            duel.winner === 'A'
              ? 'bg-emerald-50/70 border-emerald-400'
              : 'bg-white border-slate-200'
          }`}
        >
          <MiniPictureIcon iconKey={duel.iconA} className="w-14 h-14 shrink-0" />
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase text-slate-500">Lựa chọn A</p>
            <p className="font-display font-extrabold text-base text-slate-900">{duel.placeA}</p>
            {duel.winner === 'A' && (
              <p className="text-xs font-bold text-emerald-700 inline-flex items-center gap-1 mt-1">
                <Trophy className="w-3.5 h-3.5" />
                {duel.comparative}!
              </p>
            )}
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col items-center justify-center text-center py-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
            {duel.adjType === 'short' ? 'Tính từ ngắn (-er)' : 'Tính từ dài (more ...)'}
          </span>
          <div className="mt-1 px-4 py-2 rounded-2xl bg-slate-900 text-white font-display font-extrabold text-base">
            {duel.baseAdj} → <span className="text-amber-300">{duel.comparative}</span>
          </div>
        </div>

        <div
          className={`md:col-span-4 rounded-2xl p-4 border-2 flex items-center gap-3.5 ${
            duel.winner === 'B'
              ? 'bg-emerald-50/70 border-emerald-400'
              : 'bg-white border-slate-200'
          }`}
        >
          <MiniPictureIcon iconKey={duel.iconB} className="w-14 h-14 shrink-0" />
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase text-slate-500">Lựa chọn B</p>
            <p className="font-display font-extrabold text-base text-slate-900">{duel.placeB}</p>
            {duel.winner === 'B' && (
              <p className="text-xs font-bold text-emerald-700 inline-flex items-center gap-1 mt-1">
                <Trophy className="w-3.5 h-3.5" />
                {duel.comparative}!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Spoken Q&A Card */}
      <div className="bg-white rounded-2xl border border-teal-200 p-4 sm:p-5 space-y-2.5">
        <div className="flex items-start gap-2.5">
          <button
            type="button"
            onClick={() => speakEnglish(duel.question, 0.88)}
            className="p-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 shrink-0 cursor-pointer"
            aria-label="Nghe câu hỏi"
          >
            <Volume2 className="w-4 h-4" />
          </button>
          <div>
            <p className="text-xs font-bold uppercase text-sky-700">Câu hỏi (Hỏi lựa chọn 1 trong 2):</p>
            <p className="font-display font-bold text-base text-slate-900">{duel.question}</p>
          </div>
        </div>

        <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => speakEnglish(duel.answer, 0.88)}
            className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 shrink-0 cursor-pointer"
            aria-label="Nghe câu trả lời"
          >
            <Volume2 className="w-4 h-4" />
          </button>
          <div>
            <p className="text-xs font-bold uppercase text-emerald-700">Câu trả lời mẫu:</p>
            <p className="font-display font-bold text-base text-slate-900">{duel.answer}</p>
            <p className="text-xs text-slate-600 mt-0.5">{duel.answerVi}</p>
          </div>
        </div>

        <div className="flex items-start gap-2 rounded-xl bg-amber-50 border border-amber-200 px-3.5 py-2.5 text-xs text-amber-950">
          <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span><strong>Mẹo nhớ nhanh:</strong> {duel.ruleTip}</span>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   HELPER 3: FIND & CORRECT MISTAKES BLOCK (PAGE 153 TASK 2)
   ========================================================= */
const ComparativeMistakeBlock: React.FC<{
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ completedTaskIds, onCompleteTask, muted }) => {
  const [mistakeInputs, setMistakeInputs] = useState<Record<string, string>>({});
  const [fixInputs, setFixInputs] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, 'correct' | 'wrong'>>({});
  const [hintsOpen, setHintsOpen] = useState<Record<string, boolean>>({});

  const checkOne = (id: string) => {
    const item = U20_TASK2_MISTAKES.find((m) => m.id === id);
    if (!item) return;
    const mVal = (mistakeInputs[id] ?? '').trim().toLowerCase();
    const fVal = (fixInputs[id] ?? '').trim().toLowerCase();
    const mOk = item.acceptedMistakes.some((a) => a.toLowerCase() === mVal);
    const fOk = item.acceptedCorrections.some((a) => a.toLowerCase() === fVal);
    const ok = mOk && fOk;
    setChecked((prev) => ({ ...prev, [id]: ok ? 'correct' : 'wrong' }));
    playFeedbackTone(ok ? 'correct' : 'wrong', muted);
    if (ok) onCompleteTask(id);
  };

  const revealOne = (id: string) => {
    const item = U20_TASK2_MISTAKES.find((m) => m.id === id);
    if (!item) return;
    setMistakeInputs((prev) => ({ ...prev, [id]: item.mistakeWord }));
    setFixInputs((prev) => ({ ...prev, [id]: item.correction }));
    setChecked((prev) => ({ ...prev, [id]: 'correct' }));
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="space-y-1">
        <h3 className="font-display font-bold text-lg text-slate-900">
          Task 2 (Trang 153): Find and correct the mistakes (Tìm và sửa lỗi sai)
        </h3>
        <p className="text-sm text-slate-600">
          Mỗi câu có 1 lỗi sai kinh điển khi viết câu so sánh hơn. Gõ từ bị sai vào ô trái và cách sửa đúng vào ô phải!
        </p>
      </div>

      <div className="space-y-3.5">
        {U20_TASK2_MISTAKES.map((item) => {
          const status = checked[item.id];
          const isDone = completedTaskIds.includes(item.id);
          return (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-50/80 border border-slate-200 p-4 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-display font-bold text-base text-slate-900">{item.sentence}</p>
                {isDone && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4" />
                    Đã sửa chuẩn
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center">
                <div className="sm:col-span-4">
                  <label className="block text-[11px] font-bold text-rose-700 uppercase mb-1">
                    Từ bị sai / thiếu
                  </label>
                  <input
                    type="text"
                    value={mistakeInputs[item.id] ?? ''}
                    onChange={(e) => {
                      setMistakeInputs((prev) => ({ ...prev, [item.id]: e.target.value }));
                      setChecked((prev) => {
                        const n = { ...prev };
                        delete n[item.id];
                        return n;
                      });
                    }}
                    placeholder="VD: beautiful"
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div className="sm:col-span-5">
                  <label className="block text-[11px] font-bold text-emerald-700 uppercase mb-1">
                    Sửa thành đúng
                  </label>
                  <input
                    type="text"
                    value={fixInputs[item.id] ?? ''}
                    onChange={(e) => {
                      setFixInputs((prev) => ({ ...prev, [item.id]: e.target.value }));
                      setChecked((prev) => {
                        const n = { ...prev };
                        delete n[item.id];
                        return n;
                      });
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') checkOne(item.id);
                    }}
                    placeholder="VD: more beautiful"
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div className="sm:col-span-3 flex items-end gap-2 pt-4">
                  <button
                    type="button"
                    onClick={() => checkOne(item.id)}
                    className="flex-1 px-3 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold cursor-pointer"
                  >
                    Kiểm tra
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs">
                <button
                  type="button"
                  onClick={() =>
                    setHintsOpen((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                  }
                  className="inline-flex items-center gap-1 text-slate-600 hover:text-sky-700 font-semibold cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  Gợi ý
                </button>
                <button
                  type="button"
                  onClick={() => revealOne(item.id)}
                  className="inline-flex items-center gap-1 text-slate-600 hover:text-amber-700 font-semibold cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Xem đáp án
                </button>
                <button
                  type="button"
                  onClick={() => speakEnglish(item.correctSentence, 0.9)}
                  className="inline-flex items-center gap-1 text-sky-700 hover:text-sky-800 font-semibold cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Nghe câu đúng
                </button>
              </div>

              {hintsOpen[item.id] && (
                <p className="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                  Gợi ý: {item.hint}
                </p>
              )}

              {status && (
                <div
                  className={`flex items-start gap-2 rounded-xl px-3 py-2.5 text-xs border ${
                    status === 'correct'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-rose-50 border-rose-200 text-rose-900'
                  }`}
                >
                  {status === 'correct' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-0.5">
                    <p>
                      {status === 'correct'
                        ? `Chuẩn xác! Câu đúng: "${item.correctSentence}"`
                        : 'Chưa khớp hoàn toàn. Em xem lại gợi ý hoặc bấm Xem đáp án để nắm chắc quy tắc nhé!'}
                    </p>
                    {status === 'correct' && <p className="text-emerald-800">{item.explanation}</p>}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* =========================================================
   HELPER 4: 12-ADJECTIVE COMPARATIVE TABLE (PAGE 154 TASK 4)
   ========================================================= */
const ComparativeTableBlock: React.FC<{
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ completedTaskIds, onCompleteTask, muted }) => {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<boolean | null>(null);

  const isRowRight = (id: string, answer: string) =>
    (inputs[id] ?? '').trim().toLowerCase() === answer.toLowerCase();

  const handleCheckAll = () => {
    const allRight = U20_TASK4_COMPARATIVE_TABLE.every((r) => isRowRight(r.id, r.answer));
    setChecked(allRight);
    playFeedbackTone(allRight ? 'celebrate' : 'wrong', muted);
    if (allRight) onCompleteTask('p154-u20t4-all');
  };

  const handleRevealAll = () => {
    const next: Record<string, string> = {};
    U20_TASK4_COMPARATIVE_TABLE.forEach((r) => {
      next[r.id] = r.answer;
    });
    setInputs(next);
    setChecked(true);
  };

  const isDone = completedTaskIds.includes('p154-u20t4-all');

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="space-y-1">
          <h3 className="font-display font-bold text-lg text-slate-900">
            Task 4 (Trang 154): Hoàn thành bảng 12 tính từ so sánh hơn
          </h3>
          <p className="text-sm text-slate-600">
            Gõ dạng so sánh hơn của từng tính từ (ví dụ: <strong>Long → longer</strong>, <strong>Beautiful → more beautiful</strong>).
          </p>
        </div>
        {isDone && (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 shrink-0">
            <CheckCircle2 className="w-4 h-4" />
            Hoàn thành 12/12
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {U20_TASK4_COMPARATIVE_TABLE.map((row, idx) => {
          const ok = checked !== null ? isRowRight(row.id, row.answer) : null;
          return (
            <div
              key={row.id}
              className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 flex items-center justify-between gap-3"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 tabular-nums w-5">
                    {idx + 1}.
                  </span>
                  <span className="font-display font-extrabold text-base text-slate-900">
                    {row.base}
                  </span>
                  <span className="text-xs text-slate-500">({row.meaningVi})</span>
                </div>
                <p className="text-[11px] font-semibold text-teal-700 pl-7">{row.ruleTag}</p>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <input
                  type="text"
                  value={inputs[row.id] ?? ''}
                  onChange={(e) => {
                    setInputs((prev) => ({ ...prev, [row.id]: e.target.value }));
                    setChecked(null);
                  }}
                  placeholder="so sánh hơn..."
                  className={`w-36 sm:w-40 px-3 py-1.5 rounded-lg border text-sm font-bold focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    ok === true
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-800'
                      : ok === false
                      ? 'bg-rose-50 border-rose-400 text-rose-800'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => speakEnglish(`${row.base}, ${row.answer}`, 0.88)}
                  className="p-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 cursor-pointer"
                  aria-label={`Nghe ${row.answer}`}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={handleCheckAll}
          className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold cursor-pointer"
        >
          Kiểm tra cả 12 từ
        </button>
        <button
          type="button"
          onClick={() => {
            setInputs({});
            setChecked(null);
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Làm lại
        </button>
        <button
          type="button"
          onClick={handleRevealAll}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-sm font-semibold cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          Hiện đáp án
        </button>
      </div>

      {checked !== null && (
        <div
          className={`flex items-start gap-2 rounded-xl p-3 text-sm border ${
            checked
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : 'bg-rose-50 border-rose-200 text-rose-900'
          }`}
        >
          {checked ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          )}
          <p>
            {checked
              ? 'Quá đỉnh! Em đã chinh phục trọn vẹn 12/12 dạng so sánh hơn chuẩn sách giáo khoa!'
              : 'Một vài ô đang tô đỏ chưa đúng chính tả (chú ý gấp đôi g ở bigger, đổi y → ier ở happier/noisier/busier và thêm "more" cho tính từ dài).'}
          </p>
        </div>
      )}
    </section>
  );
};

/* =========================================================
   HELPER 5: INTONATION STUDIO FOR "OR" QUESTIONS (PAGE 155)
   ========================================================= */
const IntonationChoiceStudio: React.FC<{
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ completedTaskIds, onCompleteTask, muted }) => {
  const [practicedIds, setPracticedIds] = useState<string[]>([]);

  const handlePractice = (id: string, sentence: string, rate: number) => {
    speakEnglish(sentence, rate);
    if (!practicedIds.includes(id)) {
      const next = [...practicedIds, id];
      setPracticedIds(next);
      if (next.length === U20_TASK7_INTONATION.length) {
        playFeedbackTone('celebrate', muted);
        onCompleteTask('p155-u20t7-all');
      }
    }
  };

  const isDone = completedTaskIds.includes('p155-u20t7-all');

  return (
    <section className="bg-gradient-to-br from-indigo-50/70 via-white to-sky-50/60 border border-indigo-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="space-y-1">
          <p className="text-xs font-extrabold uppercase tracking-wider text-indigo-700">
            Task 7 (Trang 155) · Xưởng Ngữ Điệu Câu Hỏi Lựa Chọn "OR"
          </p>
          <h3 className="font-display font-bold text-lg text-slate-900">
            Quy tắc ngữ điệu vàng: Xuống (↘) · Lên (↗) · Xuống (↘)
          </h3>
          <p className="text-sm text-slate-600">
            Trong câu hỏi có <strong>or</strong>, em lên giọng ở lựa chọn thứ nhất (↗) và hạ giọng ở lựa chọn cuối cùng (↘). Bấm nghe đủ 4 câu để hoàn thành nhé!
          </p>
        </div>
        {isDone && (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 shrink-0">
            <CheckCircle2 className="w-4 h-4" />
            Đã luyện đủ 4 câu
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {U20_TASK7_INTONATION.map((item, idx) => {
          const done = practicedIds.includes(item.id);
          return (
            <div
              key={item.id}
              className={`rounded-2xl p-4 border transition-colors space-y-2.5 ${
                done ? 'bg-emerald-50/50 border-emerald-300' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-display font-bold text-base text-slate-900 leading-relaxed">
                  <span className="text-slate-400 mr-1.5">{idx + 1}.</span>
                  <span>{item.prefix}</span>{' '}
                  <span className="text-rose-600 font-extrabold">↘</span>{' '}
                  <span className="text-emerald-700 underline decoration-emerald-400 decoration-2 underline-offset-4">
                    {item.choiceA}
                  </span>{' '}
                  <span className="text-emerald-600 font-extrabold">↗</span>{' '}
                  <span className="text-slate-500">or</span>{' '}
                  <span className="text-sky-700 underline decoration-sky-400 decoration-2 underline-offset-4">
                    {item.choiceB}
                  </span>{' '}
                  <span className="text-rose-600 font-extrabold">↘</span>
                </p>
              </div>
              <p className="text-xs text-slate-600">{item.meaningVi}</p>
              <p className="text-xs text-indigo-800 bg-indigo-50 rounded-lg px-2.5 py-1.5">
                {item.tip}
              </p>
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => handlePractice(item.id, item.fullSentence, 0.88)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Nghe chuẩn
                </button>
                <button
                  type="button"
                  onClick={() => handlePractice(item.id, item.fullSentence, 0.65)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-semibold cursor-pointer"
                >
                  <Turtle className="w-3.5 h-3.5" />
                  Nghe chậm
                </button>
                {done && (
                  <span className="text-xs font-bold text-emerald-700 ml-auto">✓ Đã luyện</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* =========================================================
   HELPER 6: ANSWER KEY VAULT CARD (PAGES 158 -> 167)
   ========================================================= */
const ACCENT_MAP: Record<
  AnswerKeyUnitBlock['accent'],
  { border: string; headerBg: string; titleText: string; btn: string; numBg: string }
> = {
  sky: {
    border: 'border-sky-200',
    headerBg: 'bg-sky-50/80',
    titleText: 'text-sky-900',
    btn: 'bg-sky-600 hover:bg-sky-700 text-white',
    numBg: 'bg-sky-100 text-sky-800',
  },
  amber: {
    border: 'border-amber-200',
    headerBg: 'bg-amber-50/80',
    titleText: 'text-amber-950',
    btn: 'bg-amber-600 hover:bg-amber-700 text-white',
    numBg: 'bg-amber-100 text-amber-900',
  },
  emerald: {
    border: 'border-emerald-200',
    headerBg: 'bg-emerald-50/80',
    titleText: 'text-emerald-950',
    btn: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    numBg: 'bg-emerald-100 text-emerald-900',
  },
  rose: {
    border: 'border-rose-200',
    headerBg: 'bg-rose-50/80',
    titleText: 'text-rose-950',
    btn: 'bg-rose-600 hover:bg-rose-700 text-white',
    numBg: 'bg-rose-100 text-rose-900',
  },
  teal: {
    border: 'border-teal-200',
    headerBg: 'bg-teal-50/80',
    titleText: 'text-teal-950',
    btn: 'bg-teal-600 hover:bg-teal-700 text-white',
    numBg: 'bg-teal-100 text-teal-900',
  },
  indigo: {
    border: 'border-indigo-200',
    headerBg: 'bg-indigo-50/80',
    titleText: 'text-indigo-950',
    btn: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    numBg: 'bg-indigo-100 text-indigo-900',
  },
  cyan: {
    border: 'border-cyan-200',
    headerBg: 'bg-cyan-50/80',
    titleText: 'text-cyan-950',
    btn: 'bg-cyan-600 hover:bg-cyan-700 text-white',
    numBg: 'bg-cyan-100 text-cyan-900',
  },
  pink: {
    border: 'border-pink-200',
    headerBg: 'bg-pink-50/80',
    titleText: 'text-pink-950',
    btn: 'bg-pink-600 hover:bg-pink-700 text-white',
    numBg: 'bg-pink-100 text-pink-900',
  },
};

export const AnswerKeyVaultSection: React.FC<{
  page: number;
  onJumpToPage: (page: number) => void;
  customBlocks?: AnswerKeyUnitBlock[];
}> = ({ page, onJumpToPage, customBlocks }) => {
  const blocks = customBlocks ?? ANSWER_KEY_PAGES_158_167[page] ?? [];

  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-violet-50/70 border border-violet-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <BookCheck className="w-6 h-6 text-violet-700 shrink-0 mt-0.5" />
          <div>
            <p className="font-display font-extrabold text-base text-violet-950">
              Kho Đáp Án Chuẩn & Tổng Ôn Nhanh — Trang {page}
            </p>
            <p className="text-xs sm:text-sm text-violet-900">
              Đối chiếu đáp án chính xác theo sách in, bấm loa nghe lại câu mẫu hoặc quay về trang bài học gốc để làm lại!
            </p>
          </div>
        </div>
      </div>

      {blocks.map((block) => {
        const theme = ACCENT_MAP[block.accent];
        return (
          <section
            key={block.id}
            className={`bg-white border ${theme.border} rounded-3xl overflow-hidden shadow-xs`}
          >
            <div
              className={`${theme.headerBg} px-5 py-4 border-b ${theme.border} flex flex-col sm:flex-row sm:items-center justify-between gap-3`}
            >
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Đáp án chuẩn · {block.pageRangeNote}
                </p>
                <h3 className={`font-display text-lg sm:text-xl font-extrabold ${theme.titleText}`}>
                  {block.unitTitle}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => onJumpToPage(block.jumpPage)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold cursor-pointer self-start sm:self-auto shrink-0 ${theme.btn}`}
              >
                Về trang bài học gốc (Tr. {block.jumpPage})
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              {block.tasks.map((task, tIdx) => (
                <div
                  key={tIdx}
                  className="rounded-2xl bg-slate-50/70 border border-slate-200 p-4 space-y-2.5"
                >
                  <p className="font-display font-bold text-sm text-slate-900">
                    {task.taskLabel}
                  </p>

                  {task.summaryType === 'chips' && (
                    <div className="flex flex-wrap gap-2">
                      {task.items.map((it, i) => (
                        <div
                          key={i}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-semibold ${
                            it.highlight
                              ? 'bg-amber-50 border-amber-300 text-amber-950'
                              : 'bg-white border-slate-200 text-slate-800'
                          }`}
                        >
                          {it.num && (
                            <span
                              className={`px-1.5 py-0.5 rounded-md text-[11px] font-extrabold ${theme.numBg}`}
                            >
                              {it.num}
                            </span>
                          )}
                          <span>{it.text}</span>
                          {it.speak && (
                            <button
                              type="button"
                              onClick={() => speakEnglish(it.speak!, 0.9)}
                              className="p-1 rounded-md hover:bg-sky-50 text-sky-600 cursor-pointer"
                              aria-label={`Nghe ${it.speak}`}
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {task.summaryType === 'sentences' && (
                    <div className="space-y-1.5">
                      {task.items.map((it, i) => (
                        <div
                          key={i}
                          className={`flex items-center justify-between gap-2 px-3 py-2 rounded-xl border text-sm ${
                            it.highlight
                              ? 'bg-amber-50 border-amber-300 text-amber-950'
                              : 'bg-white border-slate-200 text-slate-800'
                          }`}
                        >
                          <div className="flex items-baseline gap-2">
                            {it.num && (
                              <span
                                className={`px-1.5 py-0.5 rounded-md text-[11px] font-extrabold shrink-0 ${theme.numBg}`}
                              >
                                {it.num}
                              </span>
                            )}
                            <span className="font-semibold">{it.text}</span>
                          </div>
                          {it.speak && (
                            <button
                              type="button"
                              onClick={() => speakEnglish(it.speak!, 0.88)}
                              className="p-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 shrink-0 cursor-pointer"
                              aria-label={`Nghe câu ${it.num}`}
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {task.summaryType === 'writing' && (
                    <p className="text-sm text-slate-600 italic">{task.items[0]?.text}</p>
                  )}

                  {task.note && (
                    <div className="flex items-start gap-2 rounded-xl bg-amber-50 border border-amber-200 px-3 py-2 text-xs text-amber-950">
                      <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{task.note}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

/* =========================================================
   MAIN COMPONENT: PAGES 147 -> 167
   ========================================================= */
export const Pages147To167View: React.FC<Pages147To167ViewProps> = ({
  activePage,
  completedTaskIds,
  onCompleteTask,
  onJumpToPage,
  muted,
}) => {
  const [showNgaVi, setShowNgaVi] = useState(false);

  return (
    <div className="space-y-6">
      {/* ==================== TRANG 147 ==================== */}
      {activePage === 147 && (
        <>
          <PictureFillBlock
            title="Task 3 (tiếp · Trang 147): Đọc định nghĩa tiếng Anh và viết tên địa điểm (Câu 3–5)"
            instruction="Nối tiếp câu 1–2 ở Trang 146, em hãy đọc mô tả và nhìn hình minh họa để viết đúng tên 3 địa điểm quen thuộc."
            items={U19_TASK3_PART2_DEFS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <TrueFalseReadingBlock
            title={U19_TASK4_READING.title}
            passage={U19_TASK4_READING.passage}
            passageVi={U19_TASK4_READING.passageVi}
            example={U19_TASK4_READING.example}
            statements={U19_TASK4_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <DialogueOrderBlock
            id="p147-u19t5-all"
            title="Task 5 (Trang 147): Sắp xếp hội thoại Hoa & Phong về chuyến đi Ninh Bình (Chùa Bái Đính)"
            instruction="Bấm lần lượt các câu nói theo đúng thứ tự hội thoại (Câu 0 đã có sẵn)."
            items={U19_TASK5_DIALOGUE}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </>
      )}

      {/* ==================== TRANG 148 ==================== */}
      {activePage === 148 && (
        <>
          <InlinePictureCloze
            taskId="p148-u19t6-all"
            title="Task 6 (Trang 148): Nhìn tranh điền 5 từ kể về chuyến đi TP. Hồ Chí Minh của Tâm"
            instruction="Quan sát biểu tượng lịch, Chợ Bến Thành, đồ ăn ngon, Công viên nước Đầm Sen và vở kịch để hoàn chỉnh đoạn văn!"
            blanks={U19_TASK6_TAM_BLANKS}
            segments={[
              { text: 'Tam went to Ho Chi Minh City last ' },
              { exampleWord: 'week', exampleIcon: 'calendar' },
              { text: '. It was her first time to the city, so she spent the whole ' },
              { blankIndex: 1 },
              { text: ' to see it. First, she went to Ben Thanh ' },
              { blankIndex: 2 },
              { text: ' and tried a lot of delicious ' },
              { blankIndex: 3 },
              { text: '. Then she visited Dam Sen Water ' },
              { blankIndex: 4 },
              { text: ' and had a lot of fun there. Finally, she watched a ' },
              { blankIndex: 5 },
              {
                text: ' in the City Theatre. She really enjoyed her trip because Ho Chi Minh City was more exciting than she expected.',
              },
            ]}
            fullAudioText="Tam went to Ho Chi Minh City last week. It was her first time to the city, so she spent the whole weekend to see it. First, she went to Ben Thanh Market and tried a lot of delicious food. Then she visited Dam Sen Water Park and had a lot of fun there. Finally, she watched a play in the City Theatre. She really enjoyed her trip because Ho Chi Minh City was more exciting than she expected."
            translationVi="Tuần trước Tâm đã đi TP. Hồ Chí Minh. Đó là lần đầu tiên bạn ấy đến thành phố nên đã dành cả cuối tuần để tham quan. Đầu tiên, bạn ấy đi Chợ Bến Thành và thưởng thức rất nhiều món ăn ngon. Tiếp theo, bạn ấy đến Công viên nước Đầm Sen và vui chơi thỏa thích. Cuối cùng, bạn ấy xem một vở kịch tại Nhà hát Thành phố. Bạn ấy rất thích chuyến đi vì TP. Hồ Chí Minh sôi động hơn bạn ấy tưởng tượng."
            note='Đã tự động sửa 2 lỗi chính tả của bản in gốc ("excting" → "exciting", "a lot fun" → "a lot of fun").'
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <PictureFillBlock
            title="Task 7 (phần 1 · Trang 148): Nhìn tranh danh thắng điền từ (Câu 1–3)"
            instruction="Ví dụ mẫu: In summer, I often play badminton in Thong Nhat Park. Em hãy hoàn thiện 3 câu về Huế, khu chợ sáng và Cầu Nhật Tân nhé!"
            items={U19_TASK7_PART1_P148}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </>
      )}

      {/* ==================== TRANG 149 ==================== */}
      {activePage === 149 && (
        <>
          <PictureFillBlock
            title="Task 7 (phần 2 · Trang 149): Hoàn thiện 2 danh thắng còn lại (Câu 4–5)"
            instruction="Nhìn tranh Đền Hoa Lư và Làng hoa Nhật Tân để điền từ thích hợp."
            items={U19_TASK7_PART2_P149}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <SentenceOrderBlock
            title="Task 8 (Trang 149): Sắp xếp các từ bị xáo trộn thành 5 câu đúng (Unit 19)"
            instruction="Bấm chọn lần lượt từng thẻ từ để ghép thành câu tiếng Anh hoàn chỉnh rồi bấm Kiểm tra."
            items={U19_TASK8_ORDERS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <GuidedWritingBlock
            id="p149-u19t9-writing"
            title="Task 9 (Trang 149–150): Viết 5 câu về kỳ nghỉ của em"
            instruction="Trả lời lần lượt 5 câu hỏi gợi ý về kỳ nghỉ gần nhất và kế hoạch kỳ nghỉ sắp tới của em (gồm cả câu 4–5 ở đầu Trang 150)."
            prompts={U19_TASK9_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </>
      )}

      {/* ==================== TRANG 150 ==================== */}
      {activePage === 150 && (
        <>
          <section className="bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/70 border border-teal-200 rounded-3xl p-6 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <p className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
                  BÀI HỌC CUỐI CÙNG CỦA CHƯƠNG TRÌNH LỚP 5 · UNIT 20
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Which one is more exciting, life in the city or life in the countryside?
                </h2>
                <p className="text-sm sm:text-base text-slate-700">
                  Cuộc sống ở thành phố hay cuộc sống ở nông thôn sôi động hơn? — Làm chủ trọn vẹn <strong>So sánh hơn</strong> với cả tính từ ngắn và tính từ dài!
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <MiniPictureIcon iconKey="city" className="w-14 h-14" />
                <span className="font-display font-extrabold text-teal-700 text-sm">VS</span>
                <MiniPictureIcon iconKey="village" className="w-14 h-14" />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-teal-100">
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    'Which one is more exciting, life in the city or life in the countryside?',
                    0.86
                  )
                }
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Nghe tiêu đề Unit 20
              </button>
              <span className="text-xs text-slate-600">
                (Đã tự động sửa lỗi in "OF LIFE" → "OR LIFE" và phiên âm street "/striːt/")
              </span>
            </div>
          </section>

          <VocabCardsGrid
            title="Từ vựng Trang 150 (17 từ nền tảng về Địa chỉ, Thành phố & Nông thôn)"
            words={U20_VOCAB_PAGE150}
          />
        </>
      )}

      {/* ==================== TRANG 151 ==================== */}
      {activePage === 151 && (
        <>
          <VocabCardsGrid
            title="Từ vựng Trang 151 — Phần A (8 tính từ miêu tả nơi chốn)"
            words={U20_VOCAB_PAGE151}
          />

          <VocabCardsGrid
            title="Từ vựng Trọng tâm Unit 20 — Phần B (12 từ So sánh hơn & Đọc hiểu cốt lõi)"
            words={U20_VOCAB_COMPARATIVE_CORE}
          />

          <CityVsCountryDuelStudio />
        </>
      )}

      {/* ==================== TRANG 152 ==================== */}
      {activePage === 152 && (
        <>
          <section className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-5">
            <div className="space-y-1">
              <p className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
                Ngữ pháp Tổng hợp Trang 152 · Unit 20
              </p>
              <h2 className="font-display text-2xl font-extrabold text-slate-900">
                Bí kíp thành thạo So sánh hơn (Tính từ ngắn, Tính từ dài & Ngoại lệ)
              </h2>
              <p className="text-sm text-slate-600">
                Chỉ cần nhớ 4 khung màu dưới đây, em sẽ không bao giờ nhầm giữa thêm <strong>-er</strong> và thêm <strong>more</strong> nữa!
              </p>
            </div>

            <ComparativeMasterDiagram />

            {/* Irregular & Special Adjectives Table */}
            <div className="space-y-3 pt-2">
              <h3 className="font-display font-bold text-lg text-slate-900">
                Bảng tính từ bất quy tắc & đặc biệt cần thuộc lòng
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {U20_IRREGULAR_COMPARATIVES.map((row) => (
                  <div
                    key={row.base}
                    className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display font-extrabold text-base text-slate-900">
                        {row.base}
                      </span>
                      <button
                        type="button"
                        onClick={() => speakEnglish(row.ex, 0.88)}
                        className="p-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 cursor-pointer"
                        aria-label={`Nghe ví dụ ${row.comp}`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500">Nghĩa: {row.meaning}</p>
                    <p className="text-sm font-extrabold text-teal-700">→ {row.comp}</p>
                    <p className="text-xs text-slate-700 italic">{row.ex}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ==================== TRANG 153 ==================== */}
      {activePage === 153 && (
        <>
          <ChoiceExerciseBlock
            title="Task 1 (Trang 153): Odd one out (Chọn 1 từ khác loại)"
            instruction="Quan sát thật kỹ từ loại (tính từ, danh từ, động từ, từ nối) và loại tính từ (ngắn / dài) để chọn đáp án chuẩn xác."
            items={U20_TASK1_ODD}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <ComparativeMistakeBlock
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </>
      )}

      {/* ==================== TRANG 154 ==================== */}
      {activePage === 154 && (
        <>
          <PictureFillBlock
            title="Task 3 (Trang 154): Read and match definitions (Nhìn tranh & định nghĩa viết từ)"
            instruction="Ví dụ mẫu: a farm animal with thick wool → sheep. Em hãy viết 5 từ vựng chủ đề thành phố – nông thôn bên dưới!"
            items={U20_TASK3_DEFS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <ComparativeTableBlock
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <TrueFalseReadingBlock
            title={U20_TASK5_READING.title}
            passage={U20_TASK5_READING.passage}
            passageVi={U20_TASK5_READING.passageVi}
            example={U20_TASK5_READING.example}
            statements={U20_TASK5_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </>
      )}

      {/* ==================== TRANG 155 ==================== */}
      {activePage === 155 && (
        <>
          <DialogueOrderBlock
            id="p155-u20t6-all"
            title="Task 6 (Trang 155): Sắp xếp hội thoại Lan & Phong so sánh Nha Trang và Gold Coast"
            instruction="Bấm chọn các lời thoại theo thứ tự hợp lý giữa Lan và Phong (Câu 0 đã được ghim sẵn)."
            items={U20_TASK6_DIALOGUE}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <IntonationChoiceStudio
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <InlinePictureCloze
            taskId="p155-u20t8-all"
            title="Task 8 (Trang 155): Nhìn tranh hoàn thành bài đọc về Kate ở Sydney & Brooklyn"
            instruction="Điền 5 danh từ theo hình (chú ý số nhiều: banks, jams, grandparents, kilometres, goods)!"
            blanks={U20_TASK8_KATE_BLANKS}
            segments={[
              { text: 'Kate lives in an ' },
              { exampleWord: 'apartment', exampleIcon: 'tower' },
              { text: ' in Sydney. It is a modern city. It has a lot of buildings, shops and ' },
              { blankIndex: 1 },
              { text: '. There are often traffic ' },
              { blankIndex: 2 },
              {
                text: ' during the rush hours. The city is noisy and expensive. But Kate likes living here because life is exciting. At weekends, she often visits her ',
              },
              { blankIndex: 3 },
              { text: ' in Brooklyn, a small town about fifty ' },
              { blankIndex: 4 },
              { text: ' from Sydney. There are not many people and shops there. The ' },
              { blankIndex: 5 },
              {
                text: " are much cheaper. There isn't much traffic. Kate's grandparents enjoy living there because the people are friendly.",
              },
            ]}
            fullAudioText="Kate lives in an apartment in Sydney. It is a modern city. It has a lot of buildings, shops and banks. There are often traffic jams during the rush hours. The city is noisy and expensive. But Kate likes living here because life is exciting. At weekends, she often visits her grandparents in Brooklyn, a small town about fifty kilometres from Sydney. There are not many people and shops there. The goods are much cheaper. There isn't much traffic. Kate's grandparents enjoy living there because the people are friendly."
            translationVi="Kate sống trong một căn hộ ở Sydney. Đó là một thành phố hiện đại với nhiều tòa nhà, cửa hàng và ngân hàng. Thường xuyên có tắc đường vào giờ cao điểm. Thành phố ồn ào và đắt đỏ, nhưng Kate thích sống ở đây vì cuộc sống rất sôi động. Cuối tuần, bạn ấy thường thăm ông bà ở Brooklyn, một thị trấn nhỏ cách Sydney khoảng 50 km. Ở đó không có nhiều người và cửa hàng. Hàng hóa rẻ hơn nhiều và không có nhiều xe cộ. Ông bà của Kate thích sống ở đó vì mọi người rất thân thiện."
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </>
      )}

      {/* ==================== TRANG 156 ==================== */}
      {activePage === 156 && (
        <>
          {/* Interactive World Cities Explorer */}
          <section className="bg-gradient-to-br from-sky-50/80 via-white to-teal-50/70 border border-sky-200 rounded-3xl p-5 sm:p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Globe2 className="w-6 h-6 text-sky-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
                  Bản đồ Du lịch Thế giới · Trang 156
                </p>
                <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
                  Khám phá 5 thành phố & quốc gia trước khi làm Task 9
                </h2>
                <p className="text-sm text-slate-600">
                  Bấm vào từng biểu tượng danh thắng để nghe câu so sánh tiếng Anh chuẩn xác!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {U20_WORLD_CITY_FACTS.map((city) => (
                <button
                  key={city.id}
                  type="button"
                  onClick={() => speakEnglish(city.comparisonSentence, 0.88)}
                  className="text-left bg-white hover:border-sky-400 border border-slate-200 rounded-2xl p-4 space-y-2 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <MiniPictureIcon iconKey={city.iconKey} className="w-12 h-12 shrink-0" />
                    <div className="min-w-0">
                      <p className="font-display font-extrabold text-base text-slate-900">
                        {city.city}
                      </p>
                      <p className="text-xs font-semibold text-sky-700">{city.country}</p>
                      <p className="text-[11px] text-slate-500">{city.landmark}</p>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-slate-800 inline-flex items-start gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                    <span>{city.comparisonSentence}</span>
                  </p>
                  <p className="text-xs text-slate-600">{city.comparisonVi}</p>
                </button>
              ))}
            </div>
          </section>

          <PictureFillBlock
            title="Task 9 (Trang 156): Nhìn tranh danh thắng viết tên thành phố / quốc gia"
            instruction="Ví dụ mẫu: The Sydney Opera House is more beautiful than the Ha Noi Opera House. Em hãy gõ tên Paris, Singapore, Bangkok, Tokyo, Australia vào đúng câu nhé!"
            items={U20_TASK9_WORLD_CITIES}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </>
      )}

      {/* ==================== TRANG 157 ==================== */}
      {activePage === 157 && (
        <>
          <SentenceOrderBlock
            title="Task 10 (Trang 157): Sắp xếp 5 câu so sánh thành phố chuẩn ngữ pháp"
            instruction="Bấm chọn lần lượt các thẻ từ để hoàn thiện câu so sánh hơn giữa các thành phố lớn."
            items={U20_TASK10_ORDERS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          {/* Task 11 Passage + Multiple Choice */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-lg text-slate-900">
                  {U20_TASK11_NGA_PASSAGE.title}
                </h3>
                <p className="text-xs text-slate-500">{U20_TASK11_NGA_PASSAGE.note}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => speakEnglish(U20_TASK11_NGA_PASSAGE.passage, 0.88)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Nghe bài đọc
                </button>
                <button
                  type="button"
                  onClick={() => setShowNgaVi((v) => !v)}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
                >
                  {showNgaVi ? 'Ẩn dịch' : 'Xem dịch'}
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-emerald-50/50 border border-emerald-200 p-4 text-sm sm:text-base text-slate-800 leading-relaxed">
              {U20_TASK11_NGA_PASSAGE.passage}
            </div>

            {showNgaVi && (
              <div className="rounded-xl bg-amber-50/80 border border-amber-200 p-4 text-sm text-amber-950 leading-relaxed">
                {U20_TASK11_NGA_PASSAGE.passageVi}
              </div>
            )}
          </section>

          <ChoiceExerciseBlock
            title="Câu hỏi trắc nghiệm Task 11 (Chọn a hoặc b theo bài đọc của Nga)"
            instruction="Chọn phương án đúng dựa vào thông tin Nga kể về làng quê Vĩnh Phúc và Thủ đô Hà Nội."
            items={U20_TASK11_NGA_CHOICES}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </>
      )}

      {/* ==================== TRANG 158 ==================== */}
      {activePage === 158 && (
        <>
          <GuidedWritingBlock
            id="p158-u20t12-writing"
            title="Task 12 (Trang 158): Viết 5 câu so sánh quê hương em với Hà Nội hoặc TP. Hồ Chí Minh"
            instruction="Bài tập cuối cùng khép lại trọn bộ 20 Unit Tiếng Anh Lớp 5! Hãy trả lời 5 câu hỏi gợi ý bằng tiếng Anh thật tự tin nhé."
            prompts={U20_TASK12_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 flex items-center gap-3 text-emerald-950">
            <Award className="w-6 h-6 text-emerald-600 shrink-0" />
            <p className="text-sm font-semibold">
              Chúc mừng em đã hoàn thành trọn vẹn <strong>Unit 1 → Unit 20</strong>! Từ nửa dưới Trang 158 trở đi là <strong>Kho Đáp án Chuẩn & Tổng ôn nhanh</strong> để em tự đối chiếu và củng cố kiến thức.
            </p>
          </div>

          <AnswerKeyVaultSection page={158} onJumpToPage={onJumpToPage} />
        </>
      )}

      {/* ==================== TRANG 159 -> TRANG 166 ==================== */}
      {activePage >= 159 && activePage <= 166 && (
        <AnswerKeyVaultSection page={activePage} onJumpToPage={onJumpToPage} />
      )}

      {/* ==================== TRANG 167 (TRANSITION TO PAGES 168-177) ==================== */}
      {activePage === 167 && (
        <>
          <AnswerKeyVaultSection page={167} onJumpToPage={onJumpToPage} />

          <section className="rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-sky-700 text-white p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <p className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-200">
                  <Sparkles className="w-4 h-4" />
                  Hoàn tất Kho Đáp án Học kỳ 1 (Unit 1 → Unit 10)
                </p>
                <h2 className="font-display text-xl sm:text-2xl font-extrabold leading-tight">
                  Tiếp tục khám phá Kho Đáp án & Tổng ôn Học kỳ 2 (Trang 168 → Trang 177)
                </h2>
                <p className="text-sm text-sky-100 max-w-2xl">
                  Mở tiếp Trang 168 để đối chiếu trọn bộ đáp án Unit 11 → Unit 20, nghe lại câu mẫu, xem Mẹo ghi nhớ siêu tốc từng trang và chinh phục Thử thách Tổng kết ở Trang 177!
                </p>
              </div>
              <button
                type="button"
                onClick={() => onJumpToPage(168)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-indigo-900 hover:bg-sky-50 font-bold text-sm cursor-pointer shrink-0 self-start md:self-auto"
              >
                Mở tiếp Trang 168
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
