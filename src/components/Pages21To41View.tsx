import React, { useState } from 'react';
import {
  CheckCircle2,
  Eye,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  U3_TASK10_WRITING,
  U3_TASK2_READING_TF,
  U3_TASK2_WORDS,
  U3_TASK3_DIALOGUE,
  U3_TASK4_LINDA_BLANKS,
  U3_TASK5_ODD,
  U3_TASK6_PHONETICS,
  U3_TASK7_STRESS,
  U3_TASK8_MC,
  U3_TASK9_ORDERS,
  U4_TASK1_ODD,
  U4_TASK2_MATCH,
  U4_TASK3_READING,
  U4_TASK4_QA,
  U4_TASK4_VERBS,
  U4_TASK5_BLANKS,
  U4_TASK5_BOOKFAIR_WORDS,
  U4_TASK6_LOOK_WRITE,
  U4_TASK7_ORDERS,
  U4_TASK8_WRITING,
  U4_VOCAB_PAGE24,
  U4_VOCAB_PAGE25,
  U4_VOCAB_PAGE26,
  U5_TASK1_ODD,
  U5_TASK2_MATCH,
  U5_TASK3_MC,
  U5_TASK4_READING,
  U5_TASK5_LOOK_WRITE,
  U5_TASK6_CAMP_BLANKS,
  U5_TASK7_WH_ITEMS,
  U5_TASK7_WH_WORDS,
  U5_TASK8_ORDERS_P38,
  U5_TASK8_ORDERS_P39,
  U5_TASK9_WRITING,
  U5_VOCAB_PAGE34,
  U6_VOCAB_PAGE40,
  U6_VOCAB_PAGE41,
} from '../data/pages21to41Data';
import { playFeedbackTone, speakEnglish } from '../utils/speech';
import {
  ChoiceExerciseBlock,
  DialogueOrderBlock,
  GuidedWritingBlock,
  PairMatchBlock,
  PictureFillBlock,
  SentenceOrderBlock,
  TrueFalseReadingBlock,
  VocabCardsGrid,
} from './PageExerciseWidgets';
import { MiniPictureIcon, TenseTimelineDiagram, YesNoDidDiagram } from './PageVisuals';

interface Pages21To41ViewProps {
  activePage: number;
  completedTaskIds: string[];
  onCompleteTask: (taskId: string) => void;
  muted: boolean;
}

const DID_BUILDER_SUBJECTS = [
  { key: 'you', ask: 'you', ans: 'I', vi: 'bạn → mình' },
  { key: 'he', ask: 'he', ans: 'he', vi: 'cậu ấy' },
  { key: 'she', ask: 'she', ans: 'she', vi: 'cô ấy' },
  { key: 'they', ask: 'they', ans: 'they', vi: 'họ' },
];

const DID_BUILDER_ACTIONS = [
  { key: 'party', text: 'go to the party', vi: 'đi dự tiệc' },
  { key: 'funfair', text: 'go to the funfair', vi: 'đi hội chợ vui chơi' },
  { key: 'cartoon', text: 'watch a cartoon', vi: 'xem phim hoạt hình' },
  { key: 'hide', text: 'play hide-and-seek', vi: 'chơi trốn tìm' },
  { key: 'bookfair', text: 'enjoy the book fair', vi: 'thích hội sách' },
];

const FUTURE_PLACES = [
  { key: 'home', phrase: 'at home', prep: 'AT', vi: 'ở nhà', icon: 'home', activity: 'do my homework and watch cartoons' },
  { key: 'beach', phrase: 'on the beach', prep: 'ON', vi: 'trên bãi biển', icon: 'beach', activity: 'build sandcastles and fly a kite' },
  { key: 'sea', phrase: 'by the sea', prep: 'BY', vi: 'bên bờ biển', icon: 'sea', activity: 'swim in the sea and eat seafood' },
  { key: 'mountains', phrase: 'in the mountains', prep: 'IN', vi: 'trên vùng núi', icon: 'mountains', activity: 'have a picnic and explore nature' },
  { key: 'countryside', phrase: 'in the countryside', prep: 'IN', vi: 'ở vùng quê', icon: 'village', activity: 'visit my grandparents' },
];

const U6_SUBJECT_PICKS = [
  { en: 'Maths', vi: 'Toán' },
  { en: 'Vietnamese', vi: 'Tiếng Việt' },
  { en: 'English', vi: 'Tiếng Anh' },
  { en: 'Science', vi: 'Khoa học' },
  { en: 'IT', vi: 'Tin học' },
  { en: 'Music', vi: 'Âm nhạc' },
  { en: 'Art', vi: 'Mỹ thuật' },
  { en: 'PE', vi: 'Thể dục' },
];

export const Pages21To41View: React.FC<Pages21To41ViewProps> = ({
  activePage,
  completedTaskIds,
  onCompleteTask,
  muted,
}) => {
  // Page 21: Alex Hoi An 5 word-bank blanks
  const [alexInputs, setAlexInputs] = useState<Record<number, string>>({});
  const [alexChecked, setAlexChecked] = useState<boolean | null>(null);

  // Page 22: Linda Ha Long Bay 5 picture blanks
  const [lindaInputs, setLindaInputs] = useState<Record<number, string>>({});
  const [lindaChecked, setLindaChecked] = useState<boolean | null>(null);

  // Page 26: Interactive Did you...? Builder
  const [didSubj, setDidSubj] = useState(DID_BUILDER_SUBJECTS[0]);
  const [didAction, setDidAction] = useState(DID_BUILDER_ACTIONS[0]);
  const [didYes, setDidYes] = useState(true);

  // Page 29: Peter's birthday 12 past verbs
  const [peterInputs, setPeterInputs] = useState<Record<number, string>>({});
  const [peterChecked, setPeterChecked] = useState<boolean | null>(null);

  // Page 30: Toggle reference passage for Peter's Q&A
  const [showPeterRef, setShowPeterRef] = useState(false);

  // Page 31: Book Fair 5 blanks
  const [bookfairInputs, setBookfairInputs] = useState<Record<number, string>>({});
  const [bookfairChecked, setBookfairChecked] = useState<boolean | null>(null);

  // Page 35: Future Weekend Planner
  const [futureSubj, setFutureSubj] = useState<{ ask: string; short: string; vi: string }>({
    ask: 'you',
    short: "I'll",
    vi: 'mình',
  });
  const [futureTime, setFutureTime] = useState('this weekend');
  const [futurePlace, setFuturePlace] = useState(FUTURE_PLACES[2]);

  // Page 38: Summer Camp 5 blanks
  const [campInputs, setCampInputs] = useState<Record<number, string>>({});
  const [campChecked, setCampChecked] = useState<boolean | null>(null);

  // Page 41: Unit 6 Favourite subjects picker
  const [likedSubjects, setLikedSubjects] = useState<string[]>(['Maths', 'IT']);
  const [u6YesNoSubj, setU6YesNoSubj] = useState<'she' | 'he' | 'they'>('she');

  /* Check helpers */
  const checkAlex = () => {
    const expected = ['different', 'visited', 'coach', 'museum', 'ate'];
    const ok = expected.every(
      (ans, idx) => (alexInputs[idx + 1] ?? '').trim().toLowerCase() === ans
    );
    setAlexChecked(ok);
    playFeedbackTone(ok ? 'celebrate' : 'wrong', muted);
    if (ok) onCompleteTask('p21-u3t2-cloze');
  };

  const checkLinda = () => {
    const ok = U3_TASK4_LINDA_BLANKS.every((b) =>
      b.answers.some((a) => a.toLowerCase() === (lindaInputs[b.index] ?? '').trim().toLowerCase())
    );
    setLindaChecked(ok);
    playFeedbackTone(ok ? 'celebrate' : 'wrong', muted);
    if (ok) onCompleteTask('p22-u3t4-all');
  };

  const checkPeter = () => {
    const ok = U4_TASK4_VERBS.every(
      (v) => (peterInputs[v.idx] ?? '').trim().toLowerCase() === v.answer.toLowerCase()
    );
    setPeterChecked(ok);
    playFeedbackTone(ok ? 'celebrate' : 'wrong', muted);
    if (ok) onCompleteTask('p29-u4t4-verbs');
  };

  const checkBookfair = () => {
    const ok = U4_TASK5_BLANKS.every((b) =>
      b.answers.some((a) => a.toLowerCase() === (bookfairInputs[b.index] ?? '').trim().toLowerCase())
    );
    setBookfairChecked(ok);
    playFeedbackTone(ok ? 'celebrate' : 'wrong', muted);
    if (ok) onCompleteTask('p31-u4t5-all');
  };

  const checkCamp = () => {
    const ok = U5_TASK6_CAMP_BLANKS.every((b) =>
      b.answers.some((a) => a.toLowerCase() === (campInputs[b.index] ?? '').trim().toLowerCase())
    );
    setCampChecked(ok);
    playFeedbackTone(ok ? 'celebrate' : 'wrong', muted);
    if (ok) onCompleteTask('p38-u5t6-all');
  };

  const toggleLikedSubject = (sub: string) => {
    setLikedSubjects((prev) => {
      if (prev.includes(sub)) {
        return prev.length > 1 ? prev.filter((s) => s !== sub) : prev;
      }
      return [...prev.slice(-2), sub];
    });
  };

  const renderInlineInput = (
    val: string,
    onChange: (next: string) => void,
    placeholder: string,
    widthClass = 'w-28'
  ) => (
    <input
      type="text"
      value={val}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`inline-block ${widthClass} mx-1 px-2.5 py-1 rounded-lg bg-white border border-sky-300 text-sm font-bold text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500`}
    />
  );

  return (
    <div className="space-y-6">
      {/* =========================================================
          PAGE 21: UNIT 3 TASK 2 (ALEX IN HOI AN) & TASK 3 (DIALOGUE)
         ========================================================= */}
      {activePage === 21 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Task 2 (Trang 21 · Phần A) · Điền 5 từ vào bài đọc về Alex ở Hội An
                </h3>
                <p className="text-sm text-slate-600">
                  Chọn đúng từ trong khung màu vàng điền vào các chỗ trống (1)–(5). Từ (0) <strong>parents</strong> đã điền mẫu.
                </p>
              </div>
              <button
                type="button"
                onClick={() => speakEnglish(U3_TASK2_READING_TF.passage, 0.88)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Nghe toàn bài
              </button>
            </div>

            <div className="flex flex-wrap gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200">
              {U3_TASK2_WORDS.map((w) => (
                <span
                  key={w}
                  className="px-3 py-1 rounded-lg bg-white border border-amber-300 text-sm font-bold text-amber-950"
                >
                  {w}
                </span>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-900 leading-loose">
              Alex is my penfriend. He lives with his <strong className="text-emerald-700">(0) parents</strong> in Da Nang. He likes visiting
              {renderInlineInput(alexInputs[1] ?? '', (v) => { setAlexInputs((p) => ({ ...p, 1: v })); setAlexChecked(null); }, '(1)')}
              places and meeting people. Last summer, he
              {renderInlineInput(alexInputs[2] ?? '', (v) => { setAlexInputs((p) => ({ ...p, 2: v })); setAlexChecked(null); }, '(2)')}
              Hoi An Ancient Town. It is a small town in central Viet Nam. Alex went there by
              {renderInlineInput(alexInputs[3] ?? '', (v) => { setAlexInputs((p) => ({ ...p, 3: v })); setAlexChecked(null); }, '(3)')}
              . He visited many places like Hoi An
              {renderInlineInput(alexInputs[4] ?? '', (v) => { setAlexInputs((p) => ({ ...p, 4: v })); setAlexChecked(null); }, '(4)')}
              of History and Culture, and Japanese Bridge. He
              {renderInlineInput(alexInputs[5] ?? '', (v) => { setAlexInputs((p) => ({ ...p, 5: v })); setAlexChecked(null); }, '(5)', 'w-20')}
              delicious food and swam in the sea. Alex had a good time there.
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={checkAlex}
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold cursor-pointer"
              >
                Kiểm tra 5 chỗ trống
              </button>
              <button
                type="button"
                onClick={() => {
                  setAlexInputs({ 1: 'different', 2: 'visited', 3: 'coach', 4: 'Museum', 5: 'ate' });
                  setAlexChecked(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-sm font-semibold cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                Điền đáp án chuẩn
              </button>
              <button
                type="button"
                onClick={() => {
                  setAlexInputs({});
                  setAlexChecked(null);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Làm lại
              </button>
              {completedTaskIds.includes('p21-u3t2-cloze') && (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 ml-auto">
                  <CheckCircle2 className="w-4 h-4" />
                  Đã hoàn thành
                </span>
              )}
            </div>

            {alexChecked !== null && (
              <div
                className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm border ${
                  alexChecked
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}
              >
                {alexChecked ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <p>
                  {alexChecked
                    ? 'Xuất sắc! (1) different places, (2) visited, (3) by coach, (4) Museum, (5) ate delicious food đều chính xác!'
                    : 'Một vài ô chưa khớp. Gợi ý: (1) khác nhau, (2) đã thăm, (3) xe khách, (4) Bảo tàng, (5) quá khứ của eat.'}
                </p>
              </div>
            )}
          </section>

          <TrueFalseReadingBlock
            title="Task 2 (Trang 21 · Phần B) · Đọc hiểu Đúng / Sai (Câu 6–10)"
            passage={U3_TASK2_READING_TF.passage}
            passageVi={U3_TASK2_READING_TF.passageVi}
            example={U3_TASK2_READING_TF.example}
            statements={U3_TASK2_READING_TF.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <DialogueOrderBlock
            id="p21-u3t3-all"
            title="Task 3 (Trang 21) · Sắp xếp hội thoại giữa Phong và Mai về kỳ nghỉ"
            instruction="Câu 0 [D] đã cho sẵn. Bấm lần lượt 4 lượt thoại còn lại theo đúng mạch hỏi đáp."
            items={U3_TASK3_DIALOGUE}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 22: UNIT 3 TASK 4, 5, 6, 7 & TASK 8 Q1
         ========================================================= */}
      {activePage === 22 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Task 4 (Trang 22) · Nhìn 5 tranh gợi ý và điền từ về chuyến đi Vịnh Hạ Long của Linda
                </h3>
                <p className="text-sm text-slate-600">
                  Xem 5 hình minh họa tương ứng với các số (1)–(5) rồi gõ từ tiếng Anh vào đoạn văn bên dưới.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    'Last summer, Linda went to Ha Long Bay in Viet Nam with her family. First, they went to Ha Noi by plane. Then they went to Ha Long Bay by coach. They swam in the sea and ate seafood. They enjoyed their trip very much.',
                    0.88
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Nghe bài hoàn chỉnh
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {U3_TASK4_LINDA_BLANKS.map((b) => (
                <div
                  key={b.id}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center text-center gap-1.5"
                >
                  <span className="text-xs font-extrabold text-sky-700">Hình ({b.index})</span>
                  <MiniPictureIcon iconKey={b.iconKey ?? 'bay'} className="w-12 h-12" />
                  <span className="text-[11px] text-slate-600">{b.hint}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-sky-50/40 border border-sky-200 text-sm sm:text-base text-slate-900 leading-loose">
              Last summer, Linda went to Ha Long
              {renderInlineInput(lindaInputs[1] ?? '', (v) => { setLindaInputs((p) => ({ ...p, 1: v })); setLindaChecked(null); }, '(1)', 'w-24')}
              in Viet Nam with her family. First, they went to Ha Noi by
              {renderInlineInput(lindaInputs[2] ?? '', (v) => { setLindaInputs((p) => ({ ...p, 2: v })); setLindaChecked(null); }, '(2)', 'w-24')}
              . Then they went to Ha Long Bay by
              {renderInlineInput(lindaInputs[3] ?? '', (v) => { setLindaInputs((p) => ({ ...p, 3: v })); setLindaChecked(null); }, '(3)', 'w-24')}
              . They
              {renderInlineInput(lindaInputs[4] ?? '', (v) => { setLindaInputs((p) => ({ ...p, 4: v })); setLindaChecked(null); }, '(4)', 'w-24')}
              in the sea and ate
              {renderInlineInput(lindaInputs[5] ?? '', (v) => { setLindaInputs((p) => ({ ...p, 5: v })); setLindaChecked(null); }, '(5)', 'w-28')}
              . They enjoyed their trip very much.
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={checkLinda}
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold cursor-pointer"
              >
                Kiểm tra bài điền
              </button>
              <button
                type="button"
                onClick={() => {
                  setLindaInputs({ 1: 'Bay', 2: 'plane', 3: 'coach', 4: 'swam', 5: 'seafood' });
                  setLindaChecked(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-sm font-semibold cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                Điền đáp án chuẩn
              </button>
              {completedTaskIds.includes('p22-u3t4-all') && (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 ml-auto">
                  <CheckCircle2 className="w-4 h-4" />
                  Đã hoàn thành
                </span>
              )}
            </div>

            {lindaChecked !== null && (
              <div
                className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm border ${
                  lindaChecked
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}
              >
                {lindaChecked ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <p>
                  {lindaChecked
                    ? 'Tuyệt vời! Cả 5 từ (1) Bay, (2) plane, (3) coach, (4) swam, (5) seafood đều chính xác!'
                    : 'Chưa khớp hết rồi. Chú ý câu (4) dùng quá khứ của swim là “swam” nhé!'}
                </p>
              </div>
            )}
          </section>

          <ChoiceExerciseBlock
            title="Task 5 (Trang 22) · Odd one out (Chọn từ khác loại)"
            instruction="Tìm 1 từ khác nhóm từ loại hoặc chủ đề so với 3 từ còn lại."
            items={U3_TASK5_ODD}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <ChoiceExerciseBlock
            title="Task 6 (Trang 22) · Chọn từ có phần gạch chân phát âm khác"
            instruction="Bấm vào nút loa nhỏ bên cạnh từng phương án để nghe rõ sự khác nhau trước khi chọn nhé!"
            items={U3_TASK6_PHONETICS}
            speakOptions
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <ChoiceExerciseBlock
            title="Task 7 (Trang 22) · Chọn từ có trọng âm chính khác"
            instruction="Lắng nghe âm tiết nào được đọc mạnh và cao giọng hơn (dấu nháy ' nằm trước âm tiết nhấn trọng âm)."
            items={U3_TASK7_STRESS}
            speakOptions
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <ChoiceExerciseBlock
            title="Task 8 (Trang 22 · Câu 1) · Chọn đáp án đúng"
            instruction="Câu 1 nằm ở cuối Trang 22, các câu 2–5 tiếp nối ở Trang 23."
            items={U3_TASK8_MC.slice(0, 1)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 23: UNIT 3 TASK 8 (Q2–5) & TASK 9 (SENTENCE ORDER)
         ========================================================= */}
      {activePage === 23 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 8 (Trang 23 · Câu 2–5) · Trắc nghiệm ngữ pháp quá khứ đơn"
            instruction="Hoàn thành 4 câu trắc nghiệm tiếp theo của Unit 3."
            items={U3_TASK8_MC.slice(1)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <SentenceOrderBlock
            title="Task 9 (Trang 23) · Sắp xếp từ thành câu hoàn chỉnh"
            instruction="Bấm lần lượt từng thẻ từ để ghép thành câu hỏi và câu trả lời về kỳ nghỉ."
            items={U3_TASK9_ORDERS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 24: UNIT 3 TASK 10 WRITING + UNIT 4 OPENING
         ========================================================= */}
      {activePage === 24 && (
        <div className="space-y-6">
          <GuidedWritingBlock
            id="p24-u3t10-write"
            title="Task 10 (Trang 24) · Viết đoạn văn ngắn kể về kỳ nghỉ vừa qua của em"
            instruction="Trả lời lần lượt 5 câu hỏi gợi ý để tự ghép thành đoạn văn hoàn chỉnh và nghe máy đọc lại bài viết của em."
            prompts={U3_TASK10_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <section className="bg-rose-50/70 border border-rose-200 rounded-3xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-rose-700">
                  Mở đầu Unit 4 · Trang 24
                </p>
                <h3 className="font-display font-extrabold text-2xl text-slate-900">
                  Unit 4: Did you go to the party?
                </h3>
                <p className="text-sm text-slate-700">
                  Chủ đề: <strong>Bữa tiệc sinh nhật & Lễ hội</strong> — Học cách hỏi đáp Có/Không ở quá khứ đơn (<em>Did you...?</em>) và kể lại các hoạt động vui nhộn.
                </p>
              </div>
              <MiniPictureIcon iconKey="birthday" className="w-16 h-16 shrink-0" />
            </div>

            <VocabCardsGrid
              words={U4_VOCAB_PAGE24}
              title="2 từ vựng mở đầu Unit 4 (Trang 24)"
            />
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 25: UNIT 4 CORE VOCABULARY (25 WORDS)
         ========================================================= */}
      {activePage === 25 && (
        <div className="space-y-6">
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <p className="text-sm text-rose-950">
              <strong>Mẹo nhớ nhanh 25 từ Unit 4 (Trang 25):</strong> Lọc theo 5 nhóm quen thuộc (<em>Tiệc & Lễ hội, Hoạt động, Đồ ăn & Quà tặng, Giải trí & Sách, Miêu tả</em>) rồi bấm nút Loa & Rùa để luyện đọc chuẩn nhé!
            </p>
          </div>
          <VocabCardsGrid
            words={U4_VOCAB_PAGE25}
            title="25 từ vựng cốt lõi Unit 4 (Trang 25)"
          />
        </div>
      )}

      {/* =========================================================
          PAGE 26: UNIT 4 VOCAB (END) + DID YOU...? BUILDER
         ========================================================= */}
      {activePage === 26 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U4_VOCAB_PAGE26}
            title="3 từ vựng cuối bảng từ Unit 4 (Trang 26)"
          />

          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <h3 className="font-display font-bold text-xl text-slate-900">
              Ngữ pháp 1 (Trang 26) · Câu hỏi Có / Không ở Quá khứ đơn (Did + S + V?)
            </h3>
            <YesNoDidDiagram />
          </section>

          {/* Interactive Did you...? Sentence Builder */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Xưởng ghép câu hỏi “Did ...?” tương tác (Trang 26)
              </h3>
              <p className="text-sm text-slate-600">
                Chọn chủ ngữ, hoạt động và câu trả lời Có/Không để thấy ngay cách <strong>Did</strong> giữ động từ luôn nguyên mẫu!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase text-slate-500">1. Chọn chủ ngữ</p>
                <div className="flex flex-wrap gap-2">
                  {DID_BUILDER_SUBJECTS.map((s) => (
                    <button
                      key={s.key}
                      type="button"
                      onClick={() => setDidSubj(s)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer ${
                        didSubj.key === s.key
                          ? 'bg-rose-600 border-rose-600 text-white'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-rose-300'
                      }`}
                    >
                      {s.ask} ({s.vi})
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold uppercase text-slate-500">2. Chọn hoạt động (nguyên mẫu)</p>
                <div className="flex flex-wrap gap-2">
                  {DID_BUILDER_ACTIONS.map((a) => (
                    <button
                      key={a.key}
                      type="button"
                      onClick={() => setDidAction(a)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer ${
                        didAction.key === a.key
                          ? 'bg-sky-600 border-sky-600 text-white'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-sky-300'
                      }`}
                    >
                      {a.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase">3. Trả lời:</span>
              <button
                type="button"
                onClick={() => setDidYes(true)}
                className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                  didYes ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                Yes (Có)
              </button>
              <button
                type="button"
                onClick={() => setDidYes(false)}
                className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                  !didYes ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                No (Không)
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="font-display font-extrabold text-base sm:text-lg text-slate-900">
                  A: Did <span className="text-rose-700">{didSubj.ask}</span>{' '}
                  <span className="text-sky-700">{didAction.text}</span>?
                </p>
                <p className="font-display font-extrabold text-base sm:text-lg text-emerald-800">
                  B: {didYes ? `Yes, ${didSubj.ans} did.` : `No, ${didSubj.ans} didn't.`}
                </p>
                <p className="text-xs text-slate-600">
                  Nghĩa: Có phải {didSubj.ask === 'you' ? 'bạn' : didSubj.vi} đã {didAction.vi} không? — {didYes ? 'Có.' : 'Không.'}
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    `Did ${didSubj.ask} ${didAction.text}? ${
                      didYes ? `Yes, ${didSubj.ans} did.` : `No, ${didSubj.ans} didn't.`
                    }`,
                    0.88
                  )
                }
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold cursor-pointer shrink-0"
              >
                <Volume2 className="w-4 h-4" />
                Nghe hội thoại mẫu
              </button>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 27: UNIT 4 GRAMMAR PATTERNS (4 PATTERNS)
         ========================================================= */}
      {activePage === 27 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                4 mẫu câu giao tiếp trọng tâm Unit 4 (Trang 27)
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Bấm vào từng câu ví dụ để nghe phát âm chuẩn và ghi nhớ cách đổi động từ sang Quá khứ đơn.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  tag: 'Mẫu 2 · Hỏi hoạt động ở bữa tiệc',
                  formula: 'What did + S + do + at the party?',
                  reply: 'S + V2/-ed (ate / drank / sang / danced / played)...',
                  en: 'What did you do at the party? — We ate nice food and drink, sang and danced happily.',
                  vi: 'Bạn đã làm gì ở bữa tiệc? — Chúng mình ăn uống ngon, hát và nhảy múa vui vẻ.',
                  tone: 'bg-rose-50/70 border-rose-200',
                },
                {
                  tag: 'Mẫu 3 · Hỏi ngày sinh nhật trong quá khứ',
                  formula: 'When was + your / his / her + birthday?',
                  reply: 'It was + yesterday / last Sunday / on 15th May.',
                  en: "When was Peter's birthday party? — It was last Thursday.",
                  vi: 'Tiệc sinh nhật Peter diễn ra khi nào? — Vào thứ Năm tuần trước.',
                  tone: 'bg-sky-50/70 border-sky-200',
                },
                {
                  tag: 'Mẫu 4 · Hỏi ai đó đã ở đâu (was / were)',
                  formula: 'Where + was (I/he/she) / were (you/we/they) + thời gian?',
                  reply: 'S + was / were + địa điểm.',
                  en: 'Where were you yesterday? — I was at home with my parents.',
                  vi: 'Hôm qua bạn đã ở đâu? — Mình ở nhà cùng bố mẹ.',
                  tone: 'bg-amber-50/70 border-amber-200',
                },
                {
                  tag: 'Mẫu 5 · Hỏi đã tặng món quà gì (give → gave)',
                  formula: 'What present did you give + him / her?',
                  reply: 'I gave + him / her + tên món quà.',
                  en: 'What present did you give Peter? — I gave him a robot.',
                  vi: 'Bạn đã tặng quà gì cho Peter? — Mình tặng cậu ấy một chú rô-bốt.',
                  tone: 'bg-emerald-50/70 border-emerald-200',
                },
              ].map((card) => (
                <div key={card.tag} className={`rounded-2xl border p-4 space-y-2.5 ${card.tone}`}>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                    {card.tag}
                  </p>
                  <p className="font-display font-extrabold text-sm sm:text-base text-slate-900">
                    {card.formula}
                  </p>
                  <p className="text-xs font-semibold text-slate-700">→ {card.reply}</p>
                  <button
                    type="button"
                    onClick={() => speakEnglish(card.en.replace('—', ''), 0.88)}
                    className="w-full text-left p-3 rounded-xl bg-white border border-slate-200 hover:border-sky-400 space-y-1 cursor-pointer"
                  >
                    <span className="inline-flex items-start gap-1.5 text-xs sm:text-sm font-bold text-slate-900">
                      <Volume2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      {card.en}
                    </span>
                    <p className="text-xs text-slate-600 pl-5">{card.vi}</p>
                  </button>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
                Bảng động từ bất quy tắc siêu hay thi trong Unit 4
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {[
                  { v1: 'eat', v2: 'ate', vi: 'ăn' },
                  { v1: 'drink', v2: 'drank', vi: 'uống' },
                  { v1: 'sing', v2: 'sang', vi: 'hát' },
                  { v1: 'give', v2: 'gave', vi: 'tặng' },
                  { v1: 'buy', v2: 'bought', vi: 'mua' },
                  { v1: 'go', v2: 'went', vi: 'đi' },
                ].map((v) => (
                  <button
                    key={v.v1}
                    type="button"
                    onClick={() => speakEnglish(`${v.v1}, ${v.v2}`, 0.85)}
                    className="p-3 rounded-xl bg-white border border-slate-200 hover:border-rose-400 text-center space-y-0.5 cursor-pointer"
                  >
                    <p className="text-xs text-slate-500 font-semibold">{v.v1} →</p>
                    <p className="font-display font-extrabold text-base text-rose-700">{v.v2}</p>
                    <p className="text-[11px] text-slate-600">{v.vi}</p>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 28: UNIT 4 TASK 1 (ODD ONE OUT) & TASK 2 (MATCH)
         ========================================================= */}
      {activePage === 28 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 1 (Trang 28) · Odd one out (Chọn từ khác loại)"
            instruction="Chú ý phân biệt giữa động từ thêm -ed và bất quy tắc, cũng như từ chỉ quá khứ và hiện tại."
            items={U4_TASK1_ODD}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <PairMatchBlock
            title="Task 2 (Trang 28) · Đọc định nghĩa tiếng Anh và nối với hình minh họa đúng"
            instruction="Câu 0 (Picnic) đã nối mẫu. Chọn một định nghĩa bên trái rồi bấm vào thẻ hình tương ứng bên phải."
            items={U4_TASK2_MATCH}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 29: UNIT 4 TASK 3 (READING) & TASK 4 (12 PAST VERBS)
         ========================================================= */}
      {activePage === 29 && (
        <div className="space-y-6">
          <TrueFalseReadingBlock
            title="Task 3 (Trang 29) · Đọc hiểu về kỳ nghỉ của Linda và John (True / False)"
            passage={U4_TASK3_READING.passage}
            passageVi={U4_TASK3_READING.passageVi}
            example={U4_TASK3_READING.example}
            statements={U4_TASK3_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Task 4 (Trang 29 · Phần 1) · Chia 12 động từ sang Quá khứ đơn (Tiệc sinh nhật Peter)
                </h3>
                <p className="text-sm text-slate-600">
                  Gõ dạng quá khứ đơn (V2 hoặc V-ed) của từng động từ trong ngoặc. Ví dụ: (go) → <strong>went</strong>.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    "Last Thursday, I went to Peter's birthday party. His mother bought a lot of fruits, cakes and candies. I gave him a robot. Peter was very happy with my gift. We enjoyed the party very much. We listened to music and danced happily. We drank fruit juice and coke. We ate all the food. We also played some games. The party ended at 8 p.m. We were really happy.",
                    0.86
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Nghe câu chuyện
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-200 text-sm sm:text-base text-slate-900 leading-loose">
              Last Thursday, I {renderInlineInput(peterInputs[1] ?? '', (v) => { setPeterInputs((p) => ({ ...p, 1: v })); setPeterChecked(null); }, '1. (go)', 'w-24')}
              to Peter’s birthday party. His mother {renderInlineInput(peterInputs[2] ?? '', (v) => { setPeterInputs((p) => ({ ...p, 2: v })); setPeterChecked(null); }, '2. (buy)', 'w-24')}
              a lot of fruits, cakes and candies. I {renderInlineInput(peterInputs[3] ?? '', (v) => { setPeterInputs((p) => ({ ...p, 3: v })); setPeterChecked(null); }, '3. (give)', 'w-24')}
              him a robot. Peter {renderInlineInput(peterInputs[4] ?? '', (v) => { setPeterInputs((p) => ({ ...p, 4: v })); setPeterChecked(null); }, '4. (be)', 'w-24')}
              very happy with my gift. We {renderInlineInput(peterInputs[5] ?? '', (v) => { setPeterInputs((p) => ({ ...p, 5: v })); setPeterChecked(null); }, '5. (enjoy)', 'w-28')}
              the party very much. We {renderInlineInput(peterInputs[6] ?? '', (v) => { setPeterInputs((p) => ({ ...p, 6: v })); setPeterChecked(null); }, '6. (listen)', 'w-28')}
              to music and {renderInlineInput(peterInputs[7] ?? '', (v) => { setPeterInputs((p) => ({ ...p, 7: v })); setPeterChecked(null); }, '7. (dance)', 'w-28')}
              happily. We {renderInlineInput(peterInputs[8] ?? '', (v) => { setPeterInputs((p) => ({ ...p, 8: v })); setPeterChecked(null); }, '8. (drink)', 'w-24')}
              fruit juice and coke. We {renderInlineInput(peterInputs[9] ?? '', (v) => { setPeterInputs((p) => ({ ...p, 9: v })); setPeterChecked(null); }, '9. (eat)', 'w-24')}
              all the food. We also {renderInlineInput(peterInputs[10] ?? '', (v) => { setPeterInputs((p) => ({ ...p, 10: v })); setPeterChecked(null); }, '10. (play)', 'w-28')}
              some games. The party {renderInlineInput(peterInputs[11] ?? '', (v) => { setPeterInputs((p) => ({ ...p, 11: v })); setPeterChecked(null); }, '11. (end)', 'w-24')}
              at 8 p.m. We {renderInlineInput(peterInputs[12] ?? '', (v) => { setPeterInputs((p) => ({ ...p, 12: v })); setPeterChecked(null); }, '12. (be)', 'w-24')}
              really happy.
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={checkPeter}
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold cursor-pointer"
              >
                Kiểm tra 12 động từ
              </button>
              <button
                type="button"
                onClick={() => {
                  const filled: Record<number, string> = {};
                  U4_TASK4_VERBS.forEach((v) => {
                    filled[v.idx] = v.answer;
                  });
                  setPeterInputs(filled);
                  setPeterChecked(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-sm font-semibold cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                Điền đáp án chuẩn
              </button>
              <button
                type="button"
                onClick={() => {
                  setPeterInputs({});
                  setPeterChecked(null);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Làm lại
              </button>
              {completedTaskIds.includes('p29-u4t4-verbs') && (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 ml-auto">
                  <CheckCircle2 className="w-4 h-4" />
                  Đã hoàn thành
                </span>
              )}
            </div>

            {peterChecked !== null && (
              <div
                className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm border ${
                  peterChecked
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}
              >
                {peterChecked ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <p>
                  {peterChecked
                    ? 'Quá đỉnh! Em đã chia đúng toàn bộ 12 động từ quá khứ đơn (went, bought, gave, was, enjoyed, listened, danced, drank, ate, played, ended, were).'
                    : 'Có một vài động từ chưa đúng chính tả. Lưu ý: Peter (số ít) dùng was, We (số nhiều) dùng were; dance đã có -e nên chỉ thêm -d (danced).'}
                </p>
              </div>
            )}
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 30: UNIT 4 TASK 4 (10 COMPREHENSION Q&A)
         ========================================================= */}
      {activePage === 30 && (
        <div className="space-y-6">
          <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-bold text-sky-900">
                Cần xem lại bài đọc sinh nhật Peter (Trang 29) để trả lời 10 câu hỏi?
              </p>
              <button
                type="button"
                onClick={() => setShowPeterRef((v) => !v)}
                className="px-3 py-1.5 rounded-xl bg-white border border-sky-300 text-sky-800 text-xs font-semibold cursor-pointer"
              >
                {showPeterRef ? 'Ẩn bài đọc' : 'Mở bài đọc tham khảo'}
              </button>
            </div>
            {showPeterRef && (
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed pt-2 border-t border-sky-200">
                Last Thursday, I (Linh) went to Peter’s birthday party. His mother bought a lot of fruits, cakes and candies. I gave him a robot. Peter was very happy with my gift. We enjoyed the party very much. We listened to music and danced happily. We drank fruit juice and coke. We ate all the food. We also played some games. The party ended at 8 p.m. We were really happy.
              </p>
            )}
          </div>

          <ChoiceExerciseBlock
            title="Task 4 (Trang 30 · Phần 2) · Trả lời 10 câu hỏi về tiệc sinh nhật Peter"
            instruction="Đọc kỹ câu hỏi (When / What / Did / Was) rồi chọn đáp án chính xác nhất theo nội dung bài đọc."
            items={U4_TASK4_QA}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 31: UNIT 4 TASK 5 (BOOK FAIR) & TASK 6 Q1
         ========================================================= */}
      {activePage === 31 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Task 5 (Trang 31) · Điền từ vào câu chuyện đi Hội sách (Book Fair) cùng Jack
                </h3>
                <p className="text-sm text-slate-600">
                  Dùng 5 từ đúng trong khung (có 1 từ thừa) kết hợp 5 hình gợi ý để hoàn thành bài.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    'Last weekend, I went to the Book Fair with my classmate Jack. First, we went to a bookstall and bought some Doraemon comic books. Then we took photographs of the books and our favourite characters. At noon, we had lunch at a restaurant nearby. We really enjoyed the Book Fair.',
                    0.88
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Nghe toàn bài
              </button>
            </div>

            <div className="flex flex-wrap gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200">
              {U4_TASK5_BOOKFAIR_WORDS.map((w) => (
                <span
                  key={w}
                  className="px-3 py-1 rounded-lg bg-white border border-amber-300 text-sm font-bold text-amber-950"
                >
                  {w}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {U4_TASK5_BLANKS.map((b) => (
                <div
                  key={b.id}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center text-center gap-1.5"
                >
                  <span className="text-xs font-extrabold text-sky-700">Ô ({b.index})</span>
                  <MiniPictureIcon iconKey={b.iconKey ?? 'bay'} className="w-12 h-12" />
                  <span className="text-[11px] text-slate-600">{b.hint}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-900 leading-loose">
              Last weekend, I went to the Book Fair with my classmate Jack. First, we went to a
              {renderInlineInput(bookfairInputs[1] ?? '', (v) => { setBookfairInputs((p) => ({ ...p, 1: v })); setBookfairChecked(null); }, '(1)')}
              and
              {renderInlineInput(bookfairInputs[2] ?? '', (v) => { setBookfairInputs((p) => ({ ...p, 2: v })); setBookfairChecked(null); }, '(2)', 'w-24')}
              some Doraemon comic
              {renderInlineInput(bookfairInputs[3] ?? '', (v) => { setBookfairInputs((p) => ({ ...p, 3: v })); setBookfairChecked(null); }, '(3)', 'w-24')}
              . Then we took
              {renderInlineInput(bookfairInputs[4] ?? '', (v) => { setBookfairInputs((p) => ({ ...p, 4: v })); setBookfairChecked(null); }, '(4)', 'w-32')}
              of the books and our favourite characters. At noon, we
              {renderInlineInput(bookfairInputs[5] ?? '', (v) => { setBookfairInputs((p) => ({ ...p, 5: v })); setBookfairChecked(null); }, '(5)', 'w-20')}
              lunch at a restaurant nearby. We really enjoyed the Book Fair.
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={checkBookfair}
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold cursor-pointer"
              >
                Kiểm tra bài Book Fair
              </button>
              <button
                type="button"
                onClick={() => {
                  setBookfairInputs({ 1: 'bookstall', 2: 'bought', 3: 'books', 4: 'photographs', 5: 'had' });
                  setBookfairChecked(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-sm font-semibold cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                Điền đáp án chuẩn
              </button>
              {completedTaskIds.includes('p31-u4t5-all') && (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 ml-auto">
                  <CheckCircle2 className="w-4 h-4" />
                  Đã hoàn thành
                </span>
              )}
            </div>

            {bookfairChecked !== null && (
              <div
                className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm border ${
                  bookfairChecked
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}
              >
                {bookfairChecked ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <p>
                  {bookfairChecked
                    ? 'Chính xác! (1) bookstall, (2) bought, (3) books, (4) photographs, (5) had lunch.'
                    : 'Kiểm tra lại chính tả của 5 ô nhé: take photographs (chụp ảnh), had lunch (ăn trưa).'}
                </p>
              </div>
            )}
          </section>

          <PictureFillBlock
            title="Task 6 (Trang 31 · Câu 1) · Nhìn hình và điền từ"
            instruction="Câu 1 nằm cuối Trang 31; các câu 2–4 tiếp tục ở Trang 32."
            items={U4_TASK6_LOOK_WRITE.slice(0, 1)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 32: UNIT 4 TASK 6 (Q2–4) & TASK 7 (ORDER 4 QUESTIONS)
         ========================================================= */}
      {activePage === 32 && (
        <div className="space-y-6">
          <PictureFillBlock
            title="Task 6 (Trang 32 · Câu 2–4) · Look and write"
            instruction="Nhìn hình minh họa (đĩa CD, nước ép, nhảy múa) rồi điền đúng từ tiếng Anh."
            items={U4_TASK6_LOOK_WRITE.slice(1)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <SentenceOrderBlock
            title="Task 7 (Trang 32) · Sắp xếp từ thành 4 câu hỏi về bữa tiệc"
            instruction="Bấm lần lượt các thẻ từ để hoàn thành 4 câu hỏi giao tiếp cực hay gặp trong đề thi."
            items={U4_TASK7_ORDERS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 33: UNIT 4 TASK 8 WRITING + UNIT 5 OPENING BANNER
         ========================================================= */}
      {activePage === 33 && (
        <div className="space-y-6">
          <GuidedWritingBlock
            id="p33-u4t8-write"
            title="Task 8 (Trang 33) · Viết đoạn văn ngắn kể về tiệc sinh nhật của một người bạn"
            instruction="Điền câu trả lời cho 5 câu hỏi gợi ý để tự tạo bài viết tiếng Anh chuẩn ngữ pháp quá khứ đơn."
            prompts={U4_TASK8_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <section className="bg-teal-50/70 border border-teal-200 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-extrabold uppercase tracking-wider text-teal-800">
                Mở đầu Unit 5 · Cuối Trang 33 → Trang 34
              </p>
              <h3 className="font-display font-extrabold text-2xl text-slate-900">
                Unit 5: Where will you be this weekend?
              </h3>
              <p className="text-sm text-slate-700">
                Sẵn sàng bước sang <strong>Thì Tương lai đơn (will / ’ll)</strong> để nói về kế hoạch cuối tuần đi biển, khám phá hang động và xây lâu đài cát!
              </p>
            </div>
            <MiniPictureIcon iconKey="beach" className="w-16 h-16 shrink-0" />
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 34: UNIT 5 ALL 23 VOCABULARY WORDS
         ========================================================= */}
      {activePage === 34 && (
        <div className="space-y-6">
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            <p className="text-sm text-teal-950">
              <strong>Mẹo học 23 từ Unit 5 (Trang 34):</strong> Nhóm theo <em>Biển & Đảo</em> (beach, sea, island, bay, sand, sandcastle, seafood) và <em>Hoạt động</em> (swim, explore, sunbathe, build) sẽ giúp em nhớ trọn bộ chỉ trong 5 phút!
            </p>
          </div>
          <VocabCardsGrid
            words={U5_VOCAB_PAGE34}
            title="23 từ vựng đầy đủ Unit 5 (Trang 34)"
          />
        </div>
      )}

      {/* =========================================================
          PAGE 35: UNIT 5 FUTURE SIMPLE GRAMMAR + TASK 1 (Q1–3)
         ========================================================= */}
      {activePage === 35 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Ngữ pháp Unit 5 (Trang 35) · So sánh 3 thì & Thì Tương lai đơn (will / ’ll)
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Nhìn sơ đồ trục thời gian để phân biệt ngay Quá khứ (<strong>did</strong>), Hiện tại (<strong>do/does</strong>) và Tương lai (<strong>will</strong>).
              </p>
            </div>

            <TenseTimelineDiagram />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-2">
                <p className="text-xs font-extrabold uppercase text-teal-800">
                  3 công thức Tương lai đơn quan trọng nhất
                </p>
                <ul className="text-sm text-slate-800 space-y-1.5">
                  <li>
                    <strong>1. Hỏi sẽ ở đâu:</strong> Where + <strong>will</strong> + S + <strong>be</strong> + thời gian?
                  </li>
                  <li>
                    <strong>2. Hỏi sẽ làm gì:</strong> What + <strong>will</strong> + S + <strong>do</strong> + ...?
                  </li>
                  <li>
                    <strong>3. Trả lời dự đoán:</strong> I think + S + <strong>will (’ll)</strong> + V nguyên mẫu.
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                <p className="text-xs font-extrabold uppercase text-amber-800">
                  Bảng viết tắt ’ll & Giới từ địa điểm
                </p>
                <p className="text-xs sm:text-sm text-slate-800">
                  <strong>Viết tắt:</strong> I’ll = I will · We’ll = We will · He’ll = He will · She’ll = She will · They’ll = They will · <strong>won’t = will not</strong>
                </p>
                <p className="text-xs sm:text-sm text-slate-800">
                  <strong>Giới từ chuẩn:</strong> <strong>at</strong> home · <strong>on</strong> the beach · <strong>by</strong> the sea · <strong>in</strong> the mountains / countryside
                </p>
              </div>
            </div>
          </section>

          {/* Interactive Weekend Future Planner */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Lập kế hoạch cuối tuần bằng thì Tương lai đơn (will / ’ll)
              </h3>
              <p className="text-sm text-slate-600">
                Chọn người, thời gian tương lai và địa điểm để tự động ghép cặp hỏi đáp chuẩn mẫu Trang 35!
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { ask: 'you', short: "I'll", vi: 'mình' },
                { ask: 'Mai', short: "She'll", vi: 'Mai' },
                { ask: 'Hung', short: "He'll", vi: 'Hùng' },
                { ask: 'they', short: "They'll", vi: 'họ' },
              ].map((s) => (
                <button
                  key={s.ask}
                  type="button"
                  onClick={() => setFutureSubj(s)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer ${
                    futureSubj.ask === s.ask
                      ? 'bg-teal-600 border-teal-600 text-white'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  {s.ask} → {s.short}
                </button>
              ))}
              {['this weekend', 'tomorrow', 'next Sunday', 'next month'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setFutureTime(t)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer ${
                    futureTime === t
                      ? 'bg-sky-600 border-sky-600 text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {FUTURE_PLACES.map((pl) => (
                <button
                  key={pl.key}
                  type="button"
                  onClick={() => setFuturePlace(pl)}
                  className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 cursor-pointer transition-all ${
                    futurePlace.key === pl.key
                      ? 'bg-teal-50 border-teal-500 ring-1 ring-teal-200'
                      : 'bg-white border-slate-200 hover:border-teal-300'
                  }`}
                >
                  <MiniPictureIcon iconKey={pl.icon} className="w-11 h-11" />
                  <span className="text-xs font-extrabold text-slate-900">{pl.phrase}</span>
                  <span className="text-[11px] font-semibold text-teal-700">Dùng {pl.prep}</span>
                </button>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="font-display font-extrabold text-base text-slate-900">
                  A: Where will {futureSubj.ask} be {futureTime}?
                </p>
                <p className="font-display font-extrabold text-base text-teal-800">
                  B: I think {futureSubj.short} be {futurePlace.phrase}. {futureSubj.short} {futurePlace.activity}.
                </p>
                <p className="text-xs text-slate-600">
                  Nghĩa: {futureTime} {futureSubj.vi} sẽ ở đâu? — Mình nghĩ {futureSubj.vi} sẽ ở {futurePlace.vi}.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    `Where will ${futureSubj.ask} be ${futureTime}? I think ${futureSubj.short} be ${futurePlace.phrase}. ${futureSubj.short} ${futurePlace.activity}.`,
                    0.88
                  )
                }
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold cursor-pointer shrink-0"
              >
                <Volume2 className="w-4 h-4" />
                Nghe kế hoạch
              </button>
            </div>
          </section>

          <ChoiceExerciseBlock
            title="Task 1 (Trang 35 · Câu 1–3) · Odd one out (Chọn từ khác loại)"
            instruction="Câu 1–3 nằm cuối Trang 35; câu 4–5 ở đầu Trang 36."
            items={U5_TASK1_ODD.slice(0, 3)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 36: UNIT 5 TASK 1 (Q4–5), TASK 2 (8 MATCH), TASK 3 & 4
         ========================================================= */}
      {activePage === 36 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 1 (Trang 36 · Câu 4–5) · Odd one out (tiếp theo)"
            instruction="Hoàn thành 2 câu cuối của Task 1."
            items={U5_TASK1_ODD.slice(3)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <PairMatchBlock
            title="Task 2 (Trang 36) · Read and match (Nối 8 câu hỏi – đáp Tương lai đơn)"
            instruction="Chọn một câu hỏi bên trái, chú ý chủ ngữ (you/Mai/Hung/Tom and Peter) và từ hỏi (Where/What/Will/Why) rồi bấm câu trả lời tương ứng bên phải."
            items={U5_TASK2_MATCH}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <ChoiceExerciseBlock
            title="Task 3 (Trang 36) · Chọn đáp án đúng (Multiple Choice)"
            instruction="Ôn cụm từ cố định: at Ha Long Bay, take a boat trip, by train, Where will you go."
            items={U5_TASK3_MC}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <TrueFalseReadingBlock
            title="Task 4 (Trang 36) · Đọc hiểu về chuyến đi Nghệ An thăm quê Bác Hồ của Vinh"
            passage={U5_TASK4_READING.passage}
            passageVi={U5_TASK4_READING.passageVi}
            example={U5_TASK4_READING.example}
            statements={U5_TASK4_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 37: UNIT 5 TASK 5 (5 ILLUSTRATED SENTENCES)
         ========================================================= */}
      {activePage === 37 && (
        <div className="space-y-6">
          <PictureFillBlock
            title="Task 5 (Trang 37) · Look and write (Nhìn 5 tranh viết từ địa điểm cuối tuần)"
            instruction="Quan sát từng bức tranh minh họa (hang động, biển, bãi biển, dãy núi Ba Vì, ngôi nhà) rồi gõ đúng danh từ tiếng Anh."
            items={U5_TASK5_LOOK_WRITE}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 38: UNIT 5 TASK 6 (SUMMER CAMP), TASK 7 (WH-), TASK 8 Q1
         ========================================================= */}
      {activePage === 38 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Task 6 (Trang 38) · Nhìn 5 tranh và điền từ vào bài Trại hè (Summer Camp)
                </h3>
                <p className="text-sm text-slate-600">
                  Xem 5 hình gợi ý rồi hoàn thành kế hoạch trại hè của lớp bằng thì Tương lai đơn.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    'Next month, our class will go on a summer camp. On the first day, we will explore a tropical forest. On the second day, we will visit a nursing home and sing for the old people. On the last day, we will take a boat trip and swim in the sea. I think we will have a wonderful summer camp.',
                    0.88
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Nghe toàn bài
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {U5_TASK6_CAMP_BLANKS.map((b) => (
                <div
                  key={b.id}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center text-center gap-1.5"
                >
                  <span className="text-xs font-extrabold text-teal-700">Hình ({b.index})</span>
                  <MiniPictureIcon iconKey={b.iconKey ?? 'bay'} className="w-12 h-12" />
                  <span className="text-[11px] text-slate-600">{b.hint}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-teal-50/40 border border-teal-200 text-sm sm:text-base text-slate-900 leading-loose">
              Next month, our class will go on a summer camp. On the first day, we will explore a tropical
              {renderInlineInput(campInputs[1] ?? '', (v) => { setCampInputs((p) => ({ ...p, 1: v })); setCampChecked(null); }, '(1)', 'w-24')}
              . On the second day, we will visit a nursing
              {renderInlineInput(campInputs[2] ?? '', (v) => { setCampInputs((p) => ({ ...p, 2: v })); setCampChecked(null); }, '(2)', 'w-24')}
              and sing for the old people. On the last day, we will take a
              {renderInlineInput(campInputs[3] ?? '', (v) => { setCampInputs((p) => ({ ...p, 3: v })); setCampChecked(null); }, '(3)', 'w-24')}
              trip and swim in the
              {renderInlineInput(campInputs[4] ?? '', (v) => { setCampInputs((p) => ({ ...p, 4: v })); setCampChecked(null); }, '(4)', 'w-20')}
              . I think we will have a wonderful
              {renderInlineInput(campInputs[5] ?? '', (v) => { setCampInputs((p) => ({ ...p, 5: v })); setCampChecked(null); }, '(5)', 'w-28')}
              camp.
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={checkCamp}
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold cursor-pointer"
              >
                Kiểm tra bài Summer Camp
              </button>
              <button
                type="button"
                onClick={() => {
                  setCampInputs({ 1: 'forest', 2: 'home', 3: 'boat', 4: 'sea', 5: 'summer' });
                  setCampChecked(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-sm font-semibold cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                Điền đáp án chuẩn
              </button>
              {completedTaskIds.includes('p38-u5t6-all') && (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 ml-auto">
                  <CheckCircle2 className="w-4 h-4" />
                  Đã hoàn thành
                </span>
              )}
            </div>

            {campChecked !== null && (
              <div
                className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm border ${
                  campChecked
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}
              >
                {campChecked ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <p>
                  {campChecked
                    ? 'Xuất sắc! (1) tropical forest, (2) nursing home, (3) boat trip, (4) sea, (5) summer camp.'
                    : 'Hãy xem kỹ 5 gợi ý phía trên nhé: nursing home (viện dưỡng lão), boat trip (chuyến thuyền).'}
                </p>
              </div>
            )}
          </section>

          {/* WH-Question cheat strip */}
          <section className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 space-y-2">
            <p className="text-xs font-extrabold uppercase tracking-wider text-amber-900">
              Bí kíp chọn 7 từ để hỏi WH- (Task 7 · Trang 38)
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-slate-800">
              {U5_TASK7_WH_WORDS.map((wh) => {
                const mapVi: Record<string, string> = {
                  What: 'Cái gì / Làm gì',
                  Where: 'Ở đâu',
                  When: 'Khi nào (ngày/tuần)',
                  Who: 'Ai (tên người)',
                  Why: 'Tại sao (Because...)',
                  How: 'Bằng cách nào (by bus...)',
                  'What time': 'Mấy giờ (at 8 o’clock)',
                };
                return (
                  <span
                    key={wh}
                    className="px-2.5 py-1.5 rounded-xl bg-white border border-amber-200 font-semibold"
                  >
                    <strong className="text-sky-800">{wh}</strong> = {mapVi[wh]}
                  </span>
                );
              })}
            </div>
          </section>

          <ChoiceExerciseBlock
            title="Task 7 (Trang 38) · Chọn từ để hỏi WH- phù hợp với câu trả lời (8 câu)"
            instruction="Đọc kỹ câu trả lời sau dấu gạch ngang (—) để tìm ra từ để hỏi chính xác nhất."
            items={U5_TASK7_WH_ITEMS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <SentenceOrderBlock
            title="Task 8 (Trang 38 · Câu 1) · Sắp xếp từ thành câu"
            instruction="Câu 1 nằm cuối Trang 38; các câu 2–4 tiếp tục ở Trang 39."
            items={U5_TASK8_ORDERS_P38}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 39: UNIT 5 TASK 8 (Q2–4) & TASK 9 (WRITING)
         ========================================================= */}
      {activePage === 39 && (
        <div className="space-y-6">
          <SentenceOrderBlock
            title="Task 8 (Trang 39 · Câu 2–4) · Sắp xếp 3 câu Tương lai đơn"
            instruction="Bấm lần lượt các thẻ từ để hoàn thiện câu hỏi và câu kể dùng will / ’ll."
            items={U5_TASK8_ORDERS_P39}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <GuidedWritingBlock
            id="p39-u5t9-write"
            title="Task 9 (Trang 39) · Viết đoạn văn kể về kỳ nghỉ sắp tới của em"
            instruction="Trả lời 5 câu hỏi gợi ý dùng thì Tương lai đơn (will) để tạo thành đoạn văn kế hoạch kỳ nghỉ."
            prompts={U5_TASK9_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 40: UNIT 6 OPENING + 15 VOCAB WORDS (SUBJECTS)
         ========================================================= */}
      {activePage === 40 && (
        <div className="space-y-6">
          <section className="bg-sky-50/70 border border-sky-200 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
                Mở đầu Unit 6 · Trang 40
              </p>
              <h3 className="font-display font-extrabold text-2xl text-slate-900">
                Unit 6: How many lessons do you have today?
              </h3>
              <p className="text-sm text-slate-700">
                Chủ đề: <strong>Môn học & Thời khóa biểu</strong> — Làm chủ tên toàn bộ các môn học tiểu học và cách hỏi đáp số tiết học mỗi ngày.
              </p>
            </div>
            <MiniPictureIcon iconKey="school" className="w-16 h-16 shrink-0" />
          </section>

          <VocabCardsGrid
            words={U6_VOCAB_PAGE40}
            title="15 từ vựng Môn học & Trường lớp Unit 6 (Trang 40)"
          />
        </div>
      )}

      {/* =========================================================
          PAGE 41: UNIT 6 VOCAB (PART 2) + GRAMMAR 1 FAVOURITE SUBJECTS
         ========================================================= */}
      {activePage === 41 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U6_VOCAB_PAGE41}
            title="8 từ vựng Thời khóa biểu Unit 6 (Trang 41)"
          />

          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Ngữ pháp 1 (Trang 41) · Hỏi đáp môn học yêu thích
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Luyện ngay cả 2 dạng câu hỏi: hỏi mở <strong>What lessons do you like?</strong> và hỏi Có/Không <strong>Do / Does ... like ...?</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-2">
                <p className="text-xs font-extrabold uppercase text-sky-700">
                  Dạng 1 · Hỏi bạn thích môn học nào?
                </p>
                <p className="font-display font-extrabold text-base text-slate-900">
                  What lessons do you like?
                </p>
                <p className="text-sm font-semibold text-emerald-800">
                  → I like + tên môn học (vd: I like Maths and IT.)
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                <p className="text-xs font-extrabold uppercase text-emerald-700">
                  Dạng 2 · Hỏi Có / Không (Do / Does)
                </p>
                <p className="text-sm font-bold text-slate-900">
                  • <strong>Does</strong> he / she like + môn học? → Yes, he/she does. / No, he/she doesn’t.
                </p>
                <p className="text-sm font-bold text-slate-900">
                  • <strong>Do</strong> you / they like + môn học? → Yes, I/they do. / No, I/they don’t.
                </p>
              </div>
            </div>

            {/* Interactive Favourite Subject Picker */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
                Thử chọn các môn học em thích (tối đa 3 môn) để ghép câu nói tiếng Anh:
              </p>

              <div className="flex flex-wrap gap-2">
                {U6_SUBJECT_PICKS.map((sub) => {
                  const picked = likedSubjects.includes(sub.en);
                  return (
                    <button
                      key={sub.en}
                      type="button"
                      onClick={() => toggleLikedSubject(sub.en)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                        picked
                          ? 'bg-sky-600 border-sky-600 text-white'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-sky-300'
                      }`}
                    >
                      {sub.en} ({sub.vi})
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-bold text-slate-600">Đổi chủ ngữ hỏi Yes/No:</span>
                {(['she', 'he', 'they'] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setU6YesNoSubj(s)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                      u6YesNoSubj === s
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white border border-slate-200 text-slate-700'
                    }`}
                  >
                    {s === 'she' ? 'She (Does)' : s === 'he' ? 'He (Does)' : 'They (Do)'}
                  </button>
                ))}
              </div>

              {(() => {
                const listText =
                  likedSubjects.length === 1
                    ? likedSubjects[0]
                    : `${likedSubjects.slice(0, -1).join(', ')} and ${likedSubjects[likedSubjects.length - 1]}`;
                const aux = u6YesNoSubj === 'they' ? 'Do' : 'Does';
                const shortAns = u6YesNoSubj === 'they' ? 'Yes, they do.' : `Yes, ${u6YesNoSubj} does.`;
                const mainSubject = likedSubjects[0];
                const fullSpeak = `What lessons do you like? I like ${listText}. ${aux} ${u6YesNoSubj} like ${mainSubject}? ${shortAns}`;

                return (
                  <div className="p-4 rounded-2xl bg-white border border-sky-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1 text-sm">
                      <p className="font-bold text-slate-900">
                        • What lessons do you like? → <span className="text-sky-700">I like {listText}.</span>
                      </p>
                      <p className="font-bold text-slate-900">
                        • {aux} {u6YesNoSubj} like {mainSubject}? →{' '}
                        <span className="text-emerald-700">{shortAns}</span>
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => speakEnglish(fullSpeak, 0.88)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold cursor-pointer shrink-0"
                    >
                      <Volume2 className="w-4 h-4" />
                      Nghe câu của em
                    </button>
                  </div>
                );
              })()}
            </div>
          </section>

          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-amber-950">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-display font-bold text-base">
                Chúc mừng em đã khám phá trọn bộ Trang 1 → Trang 41!
              </p>
              <p className="text-sm text-amber-900">
                Em đã hoàn thành chi tiết toàn bộ Unit 1, Unit 2, Unit 3, Unit 4, Unit 5 và mở đầu Unit 6 với 159 từ vựng phát âm chuẩn cùng hàng chục bài tập tương tác.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
