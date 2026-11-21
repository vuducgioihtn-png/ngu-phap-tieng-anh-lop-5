import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  Eye,
  FileText,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  FREQUENCY_LADDER,
  PAGES_1_TO_20_INDEX,
  U1_ADDRESS_NOTES,
  U1_TASK10_WRITING,
  U1_TASK1_ODD,
  U1_TASK2_DEFS,
  U1_TASK3_MC,
  U1_TASK4_READING,
  U1_TASK5_DIALOGUE,
  U1_TASK6_LOOK_WRITE,
  U1_TASK7_ORDERS_P7,
  U1_TASK7_ORDERS_P8,
  U1_TASK8_PARAGRAPH_BLANKS,
  U1_TASK9_MISTAKES,
  U1_VOCAB_PAGE2,
  U1_VOCAB_PAGE3,
  U2_TASK10_WRITING,
  U2_TASK1_PHONETICS,
  U2_TASK2_MC,
  U2_TASK3_DEFS,
  U2_TASK4_READING,
  U2_TASK5_DIALOGUE,
  U2_TASK6_DIALOGUE_BLANKS,
  U2_TASK6_DIALOGUE_WORDS,
  U2_TASK7_JOE_BLANKS,
  U2_TASK8_PICTURES,
  U2_TASK9_ORDERS,
  U2_VOCAB_PAGE10,
  U2_VOCAB_PAGE11,
  U3_PAGE20_MATCH_RIDDLES,
  U3_VOCAB_PAGE18,
  U3_VOCAB_PAGE19,
} from '../data/pages1to20Data';
import { PAGES_21_TO_41_INDEX } from '../data/pages21to41Data';
import { PAGES_42_TO_62_INDEX } from '../data/pages42to62Data';
import {
  PAGES_63_TO_83_INDEX,
  PageMeta83,
} from '../data/pages63to83Data';
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
import { Pages21To41View } from './Pages21To41View';
import { Pages42To62View } from './Pages42To62View';
import { Pages63To83View } from './Pages63To83View';
import {
  CalendarCheckVisual,
  FrequencyPositionDiagram,
  MiniPictureIcon,
  PrepositionDiagram,
} from './PageVisuals';

interface Pages1To20StudioProps {
  completedTaskIds: string[];
  onCompleteTask: (taskId: string) => void;
  onOpenPdfAtPage: (page: number) => void;
  onBackDashboard: () => void;
  muted: boolean;
}

const ALL_PAGES_INDEX: PageMeta83[] = [
  ...PAGES_1_TO_20_INDEX,
  ...PAGES_21_TO_41_INDEX,
  ...PAGES_42_TO_62_INDEX,
  ...PAGES_63_TO_83_INDEX,
];

const CHAPTER_GROUPS = [
  { id: 'all', label: 'Trang 1–83', pages: Array.from({ length: 83 }, (_, i) => i + 1) },
  { id: 'u1', label: 'Unit 1 (2–9)', pages: [2, 3, 4, 5, 6, 7, 8, 9] },
  { id: 'u2', label: 'Unit 2 (10–17)', pages: [10, 11, 12, 13, 14, 15, 16, 17] },
  { id: 'u3', label: 'Unit 3 (18–24)', pages: [18, 19, 20, 21, 22, 23, 24] },
  { id: 'u4', label: 'Unit 4 (24–33)', pages: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33] },
  { id: 'u5', label: 'Unit 5 (34–39)', pages: [34, 35, 36, 37, 38, 39] },
  { id: 'u6', label: 'Unit 6 (40–47)', pages: [40, 41, 42, 43, 44, 45, 46, 47] },
  { id: 'u7', label: 'Unit 7 (47–54)', pages: [47, 48, 49, 50, 51, 52, 53, 54] },
  { id: 'u8', label: 'Unit 8 (54–60)', pages: [54, 55, 56, 57, 58, 59, 60] },
  { id: 'u9', label: 'Unit 9 (61–68)', pages: [61, 62, 63, 64, 65, 66, 67, 68] },
  { id: 'u10', label: 'Unit 10 (69–78)', pages: [69, 70, 71, 72, 73, 74, 75, 76, 77, 78] },
  { id: 'u11', label: 'Unit 11 (78–83)', pages: [78, 79, 80, 81, 82, 83] },
];

const PAST_VERB_PAIRS = [
  { base: 'go', past: 'went', vi: 'đi', ex: 'I went to Ha Long Bay.' },
  { base: 'have', past: 'had', vi: 'có', ex: 'We had a great holiday.' },
  { base: 'swim', past: 'swam', vi: 'bơi', ex: 'He swam in the sea.' },
  { base: 'eat', past: 'ate', vi: 'ăn', ex: 'They ate delicious seafood.' },
  { base: 'visit', past: 'visited', vi: 'thăm', ex: 'She visited Hue Imperial City.' },
  { base: 'get', past: 'got', vi: 'đến / nhận', ex: 'How did you get there?' },
];

const TRANSPORT_OPTIONS = [
  { key: 'train', label: 'Tàu hỏa', phrase: 'by train', sentence: 'I went to my hometown by train.' },
  { key: 'plane', label: 'Máy bay', phrase: 'by plane', sentence: 'She went to Phu Quoc Island by plane.' },
  { key: 'ship', label: 'Tàu thuyền', phrase: 'by boat / ship', sentence: 'We went to the island by boat.' },
  { key: 'underground', label: 'Tàu điện ngầm', phrase: 'by underground', sentence: 'He went to the city centre by underground.' },
  { key: 'motorbike', label: 'Xe máy', phrase: 'by motorbike', sentence: 'My dad went to work by motorbike.' },
];

export const Pages1To20Studio: React.FC<Pages1To20StudioProps> = ({
  completedTaskIds,
  onCompleteTask,
  onOpenPdfAtPage,
  onBackDashboard,
  muted,
}) => {
  const [activePage, setActivePage] = useState<number>(1);
  const [chapterFilter, setChapterFilter] = useState<string>('all');

  // Interactive Address Builder (Page 3)
  const [addrNum, setAddrNum] = useState('35');
  const [addrStreet, setAddrStreet] = useState('Hang Bai Street');
  const [addrWard, setAddrWard] = useState('Tan Dinh Ward');
  const [addrDistrict, setAddrDistrict] = useState('Hoan Kiem District');
  const [addrCity, setAddrCity] = useState('Ha Noi City');

  // Page 8: Task 8 Jack paragraph state
  const [jackInputs, setJackInputs] = useState<Record<number, string>>({});
  const [jackChecked, setJackChecked] = useState<boolean | null>(null);

  // Page 15: Task 6 Adam & Susan dialogue blanks state
  const [adamInputs, setAdamInputs] = useState<Record<number, string>>({});
  const [adamChecked, setAdamChecked] = useState<boolean | null>(null);

  // Page 16: Task 7 Joe paragraph state
  const [joeInputs, setJoeInputs] = useState<Record<number, string>>({});
  const [joeChecked, setJoeChecked] = useState<boolean | null>(null);

  // Page 19: Interactive Past Verb flip state
  const [flippedVerbs, setFlippedVerbs] = useState<Record<string, boolean>>({});

  // Page 20: Interactive transport builder & Task 1 matcher
  const [selectedTransport, setSelectedTransport] = useState(TRANSPORT_OPTIONS[0]);
  const [selectedRiddleId, setSelectedRiddleId] = useState<string | null>('p20-r1');
  const [riddleMatches, setRiddleMatches] = useState<Record<string, string>>({
    'p20-r0': 'train',
  });
  const [riddleFeedback, setRiddleFeedback] = useState<{ ok: boolean; msg: string } | null>(null);

  const pageMeta = ALL_PAGES_INDEX[activePage - 1];
  const visiblePages =
    CHAPTER_GROUPS.find((c) => c.id === chapterFilter)?.pages ?? CHAPTER_GROUPS[0].pages;

  const goToPage = (p: number) => {
    const clamped = Math.max(1, Math.min(83, p));
    setActivePage(clamped);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* Helper: Check Jack Paragraph (Page 8) */
  const checkJackParagraph = () => {
    const allRight = U1_TASK8_PARAGRAPH_BLANKS.every((b) =>
      b.answers.some((a) => a.toLowerCase() === (jackInputs[b.index] ?? '').trim().toLowerCase())
    );
    setJackChecked(allRight);
    playFeedbackTone(allRight ? 'celebrate' : 'wrong', muted);
    if (allRight) onCompleteTask('p8-u1t8-all');
  };

  /* Helper: Check Adam & Susan Dialogue (Page 15) */
  const checkAdamDialogue = () => {
    const allRight = U2_TASK6_DIALOGUE_BLANKS.every((b, idx) =>
      b.answers.some((a) => a.toLowerCase() === (adamInputs[idx] ?? '').trim().toLowerCase())
    );
    setAdamChecked(allRight);
    playFeedbackTone(allRight ? 'celebrate' : 'wrong', muted);
    if (allRight) onCompleteTask('p15-u2t6-all');
  };

  /* Helper: Check Joe Paragraph (Page 16) */
  const checkJoeParagraph = () => {
    const allRight = U2_TASK7_JOE_BLANKS.every((b) =>
      b.answers.some((a) => a.toLowerCase() === (joeInputs[b.index] ?? '').trim().toLowerCase())
    );
    setJoeChecked(allRight);
    playFeedbackTone(allRight ? 'celebrate' : 'wrong', muted);
    if (allRight) onCompleteTask('p16-u2t7-all');
  };

  /* Helper: Page 20 Transport Matching */
  const handlePickTransportCard = (vehicleKey: string) => {
    if (!selectedRiddleId) return;
    const riddle = U3_PAGE20_MATCH_RIDDLES.find((r) => r.id === selectedRiddleId);
    if (!riddle || riddle.isExample) return;

    if (riddle.answerKey === vehicleKey) {
      const next = { ...riddleMatches, [riddle.id]: vehicleKey };
      setRiddleMatches(next);
      playFeedbackTone('correct', muted);
      onCompleteTask(riddle.id);
      setRiddleFeedback({
        ok: true,
        msg: `Chính xác! "${riddle.clue}" → ${riddle.label}`,
      });
      // Advance to next unmatched riddle
      const nextUnmatched = U3_PAGE20_MATCH_RIDDLES.find((r) => !next[r.id]);
      setSelectedRiddleId(nextUnmatched ? nextUnmatched.id : null);
    } else {
      playFeedbackTone('wrong', muted);
      setRiddleFeedback({
        ok: false,
        msg: `Chưa khớp rồi! Đọc lại gợi ý tiếng Việt: "${riddle.clueVi}" nhé.`,
      });
    }
  };

  const builtAddress = `It's ${addrNum} ${addrStreet}, ${addrWard}, ${addrDistrict}, ${addrCity}.`;

  return (
    <div className="space-y-6 pb-16">
      {/* Top Studio Header & 1–20 Page Navigator */}
      <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBackDashboard}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-sky-700 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại trang chủ
          </button>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenPdfAtPage(activePage)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-sky-600" />
              Xem trang {activePage} bản PDF gốc
            </button>
          </div>
        </div>

        {/* Chapter filter + Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Trang {activePage} / 83 · {pageMeta.sectionTag}
            </p>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {pageMeta.title}
            </h1>
            <p className="text-sm text-slate-600">{pageMeta.subtitle}</p>
          </div>

          <div className="inline-flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 self-start">
            {CHAPTER_GROUPS.map((grp) => (
              <button
                key={grp.id}
                type="button"
                onClick={() => {
                  setChapterFilter(grp.id);
                  if (!grp.pages.includes(activePage)) {
                    setActivePage(grp.pages[0]);
                  }
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  chapterFilter === grp.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {grp.label}
              </button>
            ))}
          </div>
        </div>

        {/* Page Number Strip (1..20) */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
          <button
            type="button"
            disabled={activePage <= 1}
            onClick={() => goToPage(activePage - 1)}
            className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-35 cursor-pointer disabled:cursor-not-allowed shrink-0"
            aria-label="Trang trước"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5 overflow-x-auto py-1 flex-1">
            {visiblePages.map((p) => {
              const meta = ALL_PAGES_INDEX[p - 1];
              const isActive = p === activePage;
              const unitTint =
                meta.unit === 1
                  ? 'border-sky-200 text-sky-800 hover:bg-sky-50'
                  : meta.unit === 2
                  ? 'border-amber-200 text-amber-900 hover:bg-amber-50'
                  : meta.unit === 3
                  ? 'border-emerald-200 text-emerald-800 hover:bg-emerald-50'
                  : meta.unit === 4
                  ? 'border-rose-200 text-rose-800 hover:bg-rose-50'
                  : meta.unit === 5
                  ? 'border-teal-200 text-teal-800 hover:bg-teal-50'
                  : meta.unit === 6
                  ? 'border-indigo-200 text-indigo-800 hover:bg-indigo-50'
                  : meta.unit === 7
                  ? 'border-emerald-200 text-emerald-900 hover:bg-emerald-50'
                  : meta.unit === 8
                  ? 'border-amber-200 text-amber-900 hover:bg-amber-50'
                  : meta.unit === 9
                  ? 'border-cyan-200 text-cyan-900 hover:bg-cyan-50'
                  : meta.unit === 10
                  ? 'border-rose-200 text-rose-800 hover:bg-rose-50'
                  : meta.unit === 11
                  ? 'border-pink-200 text-pink-900 hover:bg-pink-50'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50';

              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => goToPage(p)}
                  title={`Trang ${p}: ${meta.title}`}
                  className={`min-w-[40px] h-9 px-2.5 rounded-xl border text-xs font-bold tabular-nums transition-all cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-sky-600 border-sky-600 text-white shadow-xs'
                      : `bg-white ${unitTint}`
                  }`}
                >
                  Tr.{p}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            disabled={activePage >= 83}
            onClick={() => goToPage(activePage + 1)}
            className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-35 cursor-pointer disabled:cursor-not-allowed shrink-0"
            aria-label="Trang tiếp theo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* =========================================================
          PAGE CONTENT SWITCH (TRANG 1 -> TRANG 20)
         ========================================================= */}

      {/* PAGE 1: COVER & VISUAL LEARNING MAP */}
      {activePage === 1 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Sách Luyện chuyên sâu Ngữ pháp & Từ vựng Tiếng Anh Lớp 5 · Tập 1
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Bản đồ học trọn vẹn Trang 1 → Trang 83
                </h2>
                <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
                  Mỗi trang sách đã được chuyển hóa thành thẻ từ vựng có âm thanh hai tốc độ, sơ đồ ngữ pháp trực quan và toàn bộ bài tập tương tác chấm điểm ngay lập tức.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 shrink-0 self-start">
                <button
                  type="button"
                  onClick={() => goToPage(2)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-bold cursor-pointer"
                >
                  Bắt đầu Trang 2
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => goToPage(63)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold cursor-pointer"
                >
                  Học ngay Trang 63–83
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Unit 1 Card */}
              <div className="rounded-2xl border border-sky-200 bg-sky-50/50 p-5 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-sky-700 uppercase">Trang 2 – 9</span>
                    <MiniPictureIcon iconKey="tower" className="w-11 h-11" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Unit 1: What’s your address?
                  </h3>
                  <p className="text-sm text-slate-700">
                    <strong>24 từ vựng</strong> nhà ở & địa chỉ · Sơ đồ <strong>ON / IN / AT</strong> · Bảng đổi Phường/Quận · <strong>10 bài tập</strong> tương tác.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => goToPage(2)}
                  className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold cursor-pointer"
                >
                  Học Unit 1 (Trang 2)
                </button>
              </div>

              {/* Unit 2 Card */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-amber-800 uppercase">Trang 10 – 17</span>
                    <MiniPictureIcon iconKey="sun" className="w-11 h-11" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Unit 2: I always get up early.
                  </h3>
                  <p className="text-sm text-slate-700">
                    <strong>31 từ vựng</strong> sinh hoạt hằng ngày · Thước đo 7 ngày <strong>always → never</strong> · <strong>How often...?</strong> · <strong>10 bài tập</strong>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => goToPage(10)}
                  className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold cursor-pointer"
                >
                  Học Unit 2 (Trang 10)
                </button>
              </div>

              {/* Unit 3 Card */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-emerald-800 uppercase">Trang 18 – 24</span>
                    <MiniPictureIcon iconKey="plane" className="w-11 h-11" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Unit 3: Where did you go on holiday?
                  </h3>
                  <p className="text-sm text-slate-700">
                    <strong>28 từ vựng</strong> kỳ nghỉ & phương tiện · Thẻ lật Quá khứ đơn · Đầy đủ <strong>Task 1–10</strong> (Alex ở Hội An, Linda ở Hạ Long, ngữ âm & trọng âm).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => goToPage(18)}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold cursor-pointer"
                >
                  Học Unit 3 (Trang 18)
                </button>
              </div>

              {/* Unit 4 Card */}
              <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-5 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-rose-800 uppercase">Trang 24 – 33</span>
                    <MiniPictureIcon iconKey="birthday" className="w-11 h-11" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Unit 4: Did you go to the party?
                  </h3>
                  <p className="text-sm text-slate-700">
                    <strong>30 từ vựng</strong> sinh nhật & lễ hội · Xưởng ghép câu <strong>Did you...?</strong> · <strong>Task 1–8</strong> (Chia 12 động từ sinh nhật Peter, Hội sách Book Fair).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => goToPage(24)}
                  className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold cursor-pointer"
                >
                  Học Unit 4 (Trang 24)
                </button>
              </div>

              {/* Unit 5 Card */}
              <div className="rounded-2xl border border-teal-200 bg-teal-50/50 p-5 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-teal-800 uppercase">Trang 34 – 39</span>
                    <MiniPictureIcon iconKey="beach" className="w-11 h-11" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Unit 5: Where will you be this weekend?
                  </h3>
                  <p className="text-sm text-slate-700">
                    <strong>23 từ vựng</strong> biển đảo & cuối tuần · Sơ đồ 3 thì <strong>did / do / will</strong> · <strong>Task 1–9</strong> (Nối 8 câu, Nghệ An, Summer Camp, 7 từ WH-).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => goToPage(34)}
                  className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold cursor-pointer"
                >
                  Học Unit 5 (Trang 34)
                </button>
              </div>

              {/* Unit 6 Card */}
              <div className="rounded-2xl border border-indigo-200 bg-indigo-50/50 p-5 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-indigo-800 uppercase">Trang 40 – 47</span>
                    <MiniPictureIcon iconKey="school" className="w-11 h-11" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Unit 6: How many lessons do you have?
                  </h3>
                  <p className="text-sm text-slate-700">
                    <strong>23 từ vựng</strong> môn học & thời khóa biểu · Xưởng ghép câu <strong>How many / How often</strong> · Trọn bộ <strong>Task 1–8</strong> (Minh, Jill ở TP.HCM).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => goToPage(40)}
                  className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold cursor-pointer"
                >
                  Học Unit 6 (Trang 40)
                </button>
              </div>

              {/* Unit 7 Card */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-emerald-800 uppercase">Trang 47 – 54</span>
                    <MiniPictureIcon iconKey="listen" className="w-11 h-11" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Unit 7: How do you learn English?
                  </h3>
                  <p className="text-sm text-slate-700">
                    <strong>29 từ vựng</strong> 4 kỹ năng Tiếng Anh · Xưởng <strong>practise V-ing & Why–Because</strong> · Đầy đủ <strong>Task 1–9</strong> (Akiko, Linh/Lee/John, ngữ âm).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => goToPage(47)}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold cursor-pointer"
                >
                  Học Unit 7 (Trang 47)
                </button>
              </div>

              {/* Unit 8 Card */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-amber-800 uppercase">Trang 54 – 60</span>
                    <MiniPictureIcon iconKey="lamp" className="w-11 h-11" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Unit 8: What are you reading?
                  </h3>
                  <p className="text-sm text-slate-700">
                    <strong>24 từ vựng</strong> truyện cổ tích & tính cách · Bộ khám phá <strong>6 nhân vật cổ tích</strong> · Trọn bộ <strong>Task 1–10</strong> (Doraemon, Cinderella, Bill).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => goToPage(54)}
                  className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold cursor-pointer"
                >
                  Học Unit 8 (Trang 54)
                </button>
              </div>

              {/* Unit 9 Full Card */}
              <div className="rounded-2xl border border-cyan-200 bg-cyan-50/50 p-5 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-cyan-800 uppercase">Trang 61 – 68</span>
                    <MiniPictureIcon iconKey="panda" className="w-11 h-11" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Unit 9: What did you see at the zoo?
                  </h3>
                  <p className="text-sm text-slate-700">
                    <strong>33 từ vựng</strong> động vật & trạng từ đuôi <strong>-ly</strong> · Trọn bộ <strong>Task 1–11</strong> (Lịch biểu diễn Sở thú, cô Nga, viết câu Quá khứ & bộ sưu tập 8 loài vật).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => goToPage(61)}
                  className="w-full py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white text-sm font-semibold cursor-pointer"
                >
                  Học Unit 9 (Trang 61)
                </button>
              </div>

              {/* Unit 10 Full Card */}
              <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-5 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-rose-800 uppercase">Trang 69 – 78</span>
                    <MiniPictureIcon iconKey="sportsday" className="w-11 h-11" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Unit 10: When will Sports Day be?
                  </h3>
                  <p className="text-sm text-slate-700">
                    <strong>22 từ vựng</strong> ngày lễ & thể thao · Sơ đồ <strong>be going to</strong> + xưởng lập kế hoạch · Trọn bộ <strong>Task 1–10</strong> (20 câu trắc nghiệm, Liên hoan Âm nhạc).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => goToPage(69)}
                  className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold cursor-pointer"
                >
                  Học Unit 10 (Trang 69)
                </button>
              </div>

              {/* Unit 11 Card */}
              <div className="rounded-2xl border border-pink-200 bg-pink-50/50 p-5 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-pink-800 uppercase">Trang 78 – 83</span>
                    <MiniPictureIcon iconKey="fever" className="w-11 h-11" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Unit 11: What’s the matter with you?
                  </h3>
                  <p className="text-sm text-slate-700">
                    <strong>33 từ vựng</strong> sức khỏe & bệnh lý · <strong>Phòng khám Bác sĩ tương tác</strong> (should / shouldn’t) · <strong>Task 1–5</strong> (18 câu lời khuyên, bé May đau răng, 27 từ chính tả).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => goToPage(78)}
                  className="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold cursor-pointer"
                >
                  Học Unit 11 (Trang 78)
                </button>
              </div>
            </div>
          </section>

          {/* Compact 83-page directory */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <h3 className="font-display font-bold text-lg text-slate-900">
              Mục lục nhanh từng trang (Trang 1 – Trang 83)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {ALL_PAGES_INDEX.map((item) => (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => goToPage(item.page)}
                  className="text-left p-3 rounded-xl border border-slate-200 hover:border-sky-400 hover:bg-sky-50/40 transition-colors flex items-center gap-3 cursor-pointer"
                >
                  <span className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 font-extrabold text-sm flex items-center justify-center shrink-0 tabular-nums">
                    {item.page}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate">{item.title}</p>
                    <p className="text-xs text-slate-500 truncate">{item.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* PAGE 2: UNIT 1 VOCABULARY PART 1 (17 WORDS) */}
      {activePage === 2 && (
        <div className="space-y-6">
          <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <p className="text-sm text-sky-950">
              <strong>Cách học nhanh Trang 2:</strong> Bấm nút <strong>Loa</strong> để nghe phát âm chuẩn, bấm <strong>Rùa</strong> để nghe chậm từng âm tiết, rồi đọc to câu ví dụ theo nhé!
            </p>
          </div>
          <VocabCardsGrid
            words={U1_VOCAB_PAGE2}
            title="17 từ vựng cốt lõi Unit 1 (Trang 2)"
          />
        </div>
      )}

      {/* PAGE 3: UNIT 1 VOCAB PART 2 + ON/IN/AT DIAGRAM + ADDRESS BUILDER */}
      {activePage === 3 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U1_VOCAB_PAGE3}
            title="7 tính từ miêu tả nơi ở (Trang 3)"
          />

          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Ngữ pháp 1 · Phân biệt giới từ ON / IN / AT bằng hình ảnh
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Chỉ cần nhớ 3 bức tranh này là em không bao giờ chọn nhầm giới từ địa chỉ nữa!
              </p>
            </div>
            <PrepositionDiagram />
          </section>

          {/* Interactive Address Builder */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Thực hành ghép địa chỉ Tiếng Anh (Nhỏ → Lớn)
                </h3>
                <p className="text-sm text-slate-600">
                  Thứ tự luôn là: <strong>Số nhà → Tên đường → Phường/Xã → Quận/Huyện → Thành phố/Tỉnh</strong>.
                </p>
              </div>
              <button
                type="button"
                onClick={() => speakEnglish(builtAddress, 0.9)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Nghe địa chỉ vừa ghép
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-1">1. Số nhà</label>
                <select
                  value={addrNum}
                  onChange={(e) => setAddrNum(e.target.value)}
                  className="w-full px-2.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold"
                >
                  <option value="35">35</option>
                  <option value="12">12</option>
                  <option value="56">56</option>
                  <option value="108">108</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-1">2. Đường</label>
                <select
                  value={addrStreet}
                  onChange={(e) => setAddrStreet(e.target.value)}
                  className="w-full px-2.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold"
                >
                  <option value="Hang Bai Street">Hang Bai Street</option>
                  <option value="Nguyen Trai Street">Nguyen Trai Street</option>
                  <option value="Lac Long Quan Street">Lac Long Quan Street</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-1">3. Phường</label>
                <select
                  value={addrWard}
                  onChange={(e) => setAddrWard(e.target.value)}
                  className="w-full px-2.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold"
                >
                  <option value="Tan Dinh Ward">Tan Dinh Ward</option>
                  <option value="Ward 3">Ward 3</option>
                  <option value="Ben Nghe Quarter">Ben Nghe Quarter</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-1">4. Quận/Huyện</label>
                <select
                  value={addrDistrict}
                  onChange={(e) => setAddrDistrict(e.target.value)}
                  className="w-full px-2.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold"
                >
                  <option value="Hoan Kiem District">Hoan Kiem District</option>
                  <option value="District 1">District 1</option>
                  <option value="Tan Phu District">Tan Phu District</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-1">5. Thành phố/Tỉnh</label>
                <select
                  value={addrCity}
                  onChange={(e) => setAddrCity(e.target.value)}
                  className="w-full px-2.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold"
                >
                  <option value="Ha Noi City">Ha Noi City</option>
                  <option value="Ho Chi Minh City">Ho Chi Minh City</option>
                  <option value="Quang Binh Province">Quang Binh Province</option>
                </select>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-base font-bold text-sky-950">
              {builtAddress}
            </div>
          </section>
        </div>
      )}

      {/* PAGE 4: ADDRESS TABLE + GRAMMAR QUESTIONS + TASK 1 (Q1-2) */}
      {activePage === 4 && (
        <div className="space-y-6">
          {/* Ward / District / Province Table */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <h3 className="font-display font-bold text-lg text-slate-900">
              Bảng quy đổi Phường · Quận · Huyện · Tỉnh sang Tiếng Anh (Trang 4)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {U1_ADDRESS_NOTES.map((row) => (
                <div
                  key={row.en}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3"
                >
                  <div>
                    <p className="text-xs text-slate-500">{row.vi}</p>
                    <p className="font-bold text-slate-900 text-sm">{row.en}</p>
                    <p className="text-xs text-sky-700 mt-0.5">{row.note}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => speakEnglish(row.en, 0.9)}
                    className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-sky-50 text-sky-700 cursor-pointer shrink-0"
                    aria-label={`Nghe ${row.en}`}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* 2 Core Sentence Patterns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <section className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
              <p className="text-xs font-bold uppercase text-sky-700">Mẫu câu 1 · Hỏi địa chỉ</p>
              <p className="font-display font-extrabold text-lg text-slate-900">
                What’s + your / his / her + address?
              </p>
              <p className="text-sm text-emerald-700 font-semibold">
                → It’s + số nhà + tên đường / làng...
              </p>
              <button
                type="button"
                onClick={() =>
                  speakEnglish("What's your address? It's 105 Hoa Binh Lane.", 0.9)
                }
                className="w-full text-left p-3 rounded-xl bg-sky-50 border border-sky-200 hover:bg-sky-100/70 text-sm cursor-pointer"
              >
                <span className="font-bold text-slate-900">
                  🔊 What’s your address? — It’s 105 Hoa Binh Lane.
                </span>
                <span className="block text-xs text-slate-600 mt-0.5">
                  Địa chỉ của bạn là gì? — Số 105 ngõ Hòa Bình.
                </span>
              </button>
            </section>

            <section className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
              <p className="text-xs font-bold uppercase text-amber-800">Mẫu câu 2 · Hỏi nơi sinh sống</p>
              <p className="font-display font-extrabold text-lg text-slate-900">
                Where + do / does + S + live?
              </p>
              <p className="text-sm text-emerald-700 font-semibold">
                → I / We / They live... · He / She lives... (thêm s!)
              </p>
              <button
                type="button"
                onClick={() =>
                  speakEnglish('Where does he live? He lives on the sixth floor of Xuan Mai Tower.', 0.9)
                }
                className="w-full text-left p-3 rounded-xl bg-amber-50 border border-amber-200 hover:bg-amber-100/70 text-sm cursor-pointer"
              >
                <span className="font-bold text-slate-900">
                  🔊 Where does he live? — He lives on the 6th floor of Xuan Mai Tower.
                </span>
                <span className="block text-xs text-slate-600 mt-0.5">
                  Cậu ấy sống ở đâu? — Cậu ấy sống ở tầng 6 tòa tháp Xuân Mai.
                </span>
              </button>
            </section>
          </div>

          <ChoiceExerciseBlock
            title="Task 1 (Trang 4 · Câu 1–2) · Odd one out"
            instruction="Chọn 1 từ khác loại so với 3 từ còn lại."
            items={U1_TASK1_ODD.slice(0, 2)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* PAGE 5: TASK 1 (Q3-5), TASK 2 (4 DEFS), TASK 3 (7 MC) */}
      {activePage === 5 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 1 (Trang 5 · Câu 3–5) · Odd one out"
            instruction="Tiếp tục chọn từ khác loại để hoàn thành trọn vẹn Task 1."
            items={U1_TASK1_ODD.slice(2)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
          <PictureFillBlock
            title="Task 2 (Trang 5) · Look, read and write"
            instruction="Nhìn hình minh họa, đọc lời mô tả và viết 1 từ tiếng Anh chính xác."
            items={U1_TASK2_DEFS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
          <ChoiceExerciseBlock
            title="Task 3 (Trang 5) · Choose the best answer"
            instruction="Chọn đáp án A, B, C hoặc D phù hợp nhất để điền vào chỗ trống."
            items={U1_TASK3_MC}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* PAGE 6: TASK 4 (PHONG READING), TASK 5 (TONY DIALOGUE), TASK 6 (ITEM 1) */}
      {activePage === 6 && (
        <div className="space-y-6">
          <TrueFalseReadingBlock
            title="Task 4 (Trang 6) · Đọc đoạn văn về bạn Phong và chọn True / False"
            passage={U1_TASK4_READING.passage}
            passageVi={U1_TASK4_READING.passageVi}
            example={U1_TASK4_READING.example}
            statements={U1_TASK4_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
          <DialogueOrderBlock
            id="p6-u1t5-all"
            title="Task 5 (Trang 6) · Sắp xếp đoạn hội thoại giữa Tony và cô Hà"
            instruction="Câu 0 [C] đã cho sẵn. Em hãy bấm lần lượt 4 câu còn lại theo đúng trình tự (1 → 2 → 3 → 4)."
            items={U1_TASK5_DIALOGUE}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
          <PictureFillBlock
            title="Task 6 (Trang 6 · Câu 1) · Look and write"
            instruction="Nhìn hình minh họa và điền từ còn thiếu."
            items={U1_TASK6_LOOK_WRITE.slice(0, 1)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* PAGE 7: TASK 6 (ITEMS 2-4) & TASK 7 (SENTENCES 1-7) */}
      {activePage === 7 && (
        <div className="space-y-6">
          <PictureFillBlock
            title="Task 6 (Trang 7 · Câu 2–4) · Look and write"
            instruction="Hoàn thành 3 câu nhìn hình điền từ còn lại của Task 6."
            items={U1_TASK6_LOOK_WRITE.slice(1)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
          <SentenceOrderBlock
            title="Task 7 (Trang 7 · Câu 1–7) · Sắp xếp từ thành câu đúng"
            instruction="Bấm vào từng thẻ từ theo đúng trật tự để tạo thành câu hỏi và câu trả lời hoàn chỉnh."
            items={U1_TASK7_ORDERS_P7}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* PAGE 8: TASK 7 (SENTENCES 8-10) & TASK 8 (JACK PARAGRAPH) */}
      {activePage === 8 && (
        <div className="space-y-6">
          <SentenceOrderBlock
            title="Task 7 (Trang 8 · Câu 8–10) · Sắp xếp 3 câu cuối"
            instruction="Hoàn thành nốt 3 câu cuối của Task 7 nhé!"
            items={U1_TASK7_ORDERS_P8}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          {/* Task 8: Jack from Canada Cloze Paragraph */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Task 8 (Trang 8) · Hoàn thành đoạn văn kể về bạn Jack
                </h3>
                <p className="text-sm text-slate-600">
                  Nhìn 5 hình gợi ý bên dưới rồi điền 5 từ tiếng Anh vào đúng chỗ trống (1) – (5).
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    'My new friend is Jack. He comes from Canada. He lived in a house in the mountains. Now he lives with his family in Ha Noi. His address is 48 Tran Hung Dao Street. They live in a big and pretty flat on the 18th floor of Blue Sky Tower. It is far from the city centre, so Jack goes to school by bus.',
                    0.88
                  )
                }
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Nghe toàn bài mẫu
              </button>
            </div>

            {/* 5 Visual Clues */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {U1_TASK8_PARAGRAPH_BLANKS.map((b) => (
                <div
                  key={b.id}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center text-center gap-1.5"
                >
                  <MiniPictureIcon iconKey={b.iconKey ?? 'city'} className="w-12 h-12" />
                  <span className="text-xs font-extrabold text-sky-700">Ô ({b.index})</span>
                  <span className="text-xs text-slate-600">{b.hint}</span>
                </div>
              ))}
            </div>

            {/* Interactive Paragraph */}
            <div className="p-5 rounded-2xl bg-sky-50/50 border border-sky-200 text-base leading-loose text-slate-900 font-medium">
              My new friend is Jack. He comes from Canada. He lived in a house in the{' '}
              <input
                type="text"
                value={jackInputs[1] ?? ''}
                onChange={(e) => {
                  setJackInputs((p) => ({ ...p, 1: e.target.value }));
                  setJackChecked(null);
                }}
                placeholder="(1)"
                className="w-28 px-2 py-0.5 mx-1 rounded-lg bg-white border border-sky-300 text-sm font-bold text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              . Now he lives with his family in Ha Noi. His{' '}
              <input
                type="text"
                value={jackInputs[2] ?? ''}
                onChange={(e) => {
                  setJackInputs((p) => ({ ...p, 2: e.target.value }));
                  setJackChecked(null);
                }}
                placeholder="(2)"
                className="w-24 px-2 py-0.5 mx-1 rounded-lg bg-white border border-sky-300 text-sm font-bold text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />{' '}
              is 48, Tran Hung Dao Street. They live in a big and pretty flat on the 18th floor of Blue Sky{' '}
              <input
                type="text"
                value={jackInputs[3] ?? ''}
                onChange={(e) => {
                  setJackInputs((p) => ({ ...p, 3: e.target.value }));
                  setJackChecked(null);
                }}
                placeholder="(3)"
                className="w-24 px-2 py-0.5 mx-1 rounded-lg bg-white border border-sky-300 text-sm font-bold text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              . It is far from the city{' '}
              <input
                type="text"
                value={jackInputs[4] ?? ''}
                onChange={(e) => {
                  setJackInputs((p) => ({ ...p, 4: e.target.value }));
                  setJackChecked(null);
                }}
                placeholder="(4)"
                className="w-24 px-2 py-0.5 mx-1 rounded-lg bg-white border border-sky-300 text-sm font-bold text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              , so Jack goes to{' '}
              <input
                type="text"
                value={jackInputs[5] ?? ''}
                onChange={(e) => {
                  setJackInputs((p) => ({ ...p, 5: e.target.value }));
                  setJackChecked(null);
                }}
                placeholder="(5)"
                className="w-24 px-2 py-0.5 mx-1 rounded-lg bg-white border border-sky-300 text-sm font-bold text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />{' '}
              by bus.
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={checkJackParagraph}
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold cursor-pointer"
              >
                Kiểm tra 5 ô trống
              </button>
              <button
                type="button"
                onClick={() => {
                  setJackInputs({ 1: 'mountains', 2: 'address', 3: 'Tower', 4: 'centre', 5: 'school' });
                  setJackChecked(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-sm font-semibold cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                Điền đáp án chuẩn
              </button>
            </div>

            {jackChecked !== null && (
              <div
                className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm border ${
                  jackChecked
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}
              >
                {jackChecked ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <p>
                  {jackChecked
                    ? 'Tuyệt vời! Cả 5 từ (1) mountains, (2) address, (3) Tower, (4) centre, (5) school đều chính xác.'
                    : 'Một vài ô chưa khớp rồi. Em xem lại chính tả của 5 gợi ý phía trên hoặc bấm “Điền đáp án chuẩn” để kiểm tra nhé!'}
                </p>
              </div>
            )}
          </section>
        </div>
      )}

      {/* PAGE 9: TASK 9 (MISTAKES) & TASK 10 (WRITING) */}
      {activePage === 9 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 9 (Trang 9) · Tìm lỗi sai trong câu (Find the mistake)"
            instruction="Chọn phần gạch chân [A, B, C hoặc D] bị viết sai ngữ pháp."
            items={U1_TASK9_MISTAKES}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
          <GuidedWritingBlock
            id="p9-u1t10-write"
            title="Task 10 (Trang 9) · Viết đoạn văn ngắn giới thiệu về một người bạn của em"
            instruction="Trả lời lần lượt 5 câu hỏi gợi ý để tự ghép thành đoạn văn tiếng Anh hoàn chỉnh."
            prompts={U1_TASK10_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* PAGE 10: UNIT 2 VOCABULARY PART 1 (17 WORDS) */}
      {activePage === 10 && (
        <div className="space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-950">
              <strong>Mẹo học Unit 2 (Trang 10):</strong> Học các động từ sinh hoạt theo đúng đồng hồ một ngày của em: <em>get up → wash the face → brush the teeth → have breakfast → go to school → have lunch → have dinner → watch television</em>!
            </p>
          </div>
          <VocabCardsGrid
            words={U2_VOCAB_PAGE10}
            title="17 từ vựng sinh hoạt hằng ngày Unit 2 (Trang 10)"
          />
        </div>
      )}

      {/* PAGE 11: UNIT 2 VOCAB PART 2 (14 WORDS) + FREQUENCY LADDER */}
      {activePage === 11 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U2_VOCAB_PAGE11}
            title="14 từ vựng mở rộng Unit 2 (Trang 11)"
          />

          {/* Interactive 7-day Frequency Ladder */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Thước đo 7 ngày · Trạng từ chỉ tần suất (Trang 11)
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Nhìn số ngày được tích xanh trong tuần để ghi nhớ ngay độ thường xuyên từ <strong>always (7/7)</strong> xuống <strong>never (0/7)</strong>.
              </p>
            </div>

            <div className="space-y-3">
              {FREQUENCY_LADDER.map((lvl) => (
                <div
                  key={lvl.word}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3 min-w-[210px]">
                    <span className={`w-3 h-10 rounded-full ${lvl.color} shrink-0`} />
                    <div>
                      <p className="font-display font-extrabold text-base text-slate-900">
                        {lvl.word}{' '}
                        <span className="text-xs font-bold text-slate-500">({lvl.percent}%)</span>
                      </p>
                      <p className="text-xs font-semibold text-emerald-700">{lvl.vi}</p>
                    </div>
                  </div>

                  <CalendarCheckVisual checkedCount={lvl.days} compact />

                  <button
                    type="button"
                    onClick={() => speakEnglish(lvl.example, 0.9)}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-sky-400 text-xs font-semibold text-slate-800 cursor-pointer text-left"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>{lvl.example}</span>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* PAGE 12: POSITION RULES & DAILY ROUTINE QUESTIONS */}
      {activePage === 12 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <h3 className="font-display font-bold text-xl text-slate-900">
              Vị trí đặt trạng từ chỉ tần suất (Trang 12)
            </h3>
            <FrequencyPositionDiagram />
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-sm text-rose-900">
              <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <p>
                <strong>Lưu ý quan trọng tránh mất điểm:</strong> Không bao giờ ghép chung động từ <strong>to be (am/is/are)</strong> với động từ thường!
                <br />
                Sai: <span className="line-through">I am always get up early.</span> → Đúng:{' '}
                <strong className="text-emerald-800">I always get up early.</strong>
              </p>
            </div>
          </section>

          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <h3 className="font-display font-bold text-xl text-slate-900">
              Mẫu câu hỏi ai đó làm gì vào buổi/thứ nào (Trang 12)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-2">
                <p className="text-xs font-bold uppercase text-sky-700">Công thức hỏi & trả lời</p>
                <p className="font-bold text-slate-900">
                  What + do / does + S + do + in the morning / on Sunday?
                </p>
                <p className="text-sm text-slate-700">
                  → S + (always/usually/often) + V(s/es)...
                </p>
                <button
                  type="button"
                  onClick={() =>
                    speakEnglish(
                      'What do you do in the morning? I always brush my teeth and have breakfast.',
                      0.9
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900 cursor-pointer pt-1"
                >
                  <Volume2 className="w-4 h-4" />
                  Nghe ví dụ 1
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                <p className="text-xs font-bold uppercase text-amber-800">
                  Mẹo phân biệt giới từ IN và ON
                </p>
                <ul className="text-sm text-slate-800 space-y-1.5">
                  <li>
                    <strong>IN</strong> + buổi trong ngày: <em>in the morning, in the afternoon, in the evening</em>
                  </li>
                  <li>
                    <strong>ON</strong> + thứ trong tuần: <em>on Monday, on Sunday, on Fridays</em>
                  </li>
                  <li>
                    <strong>AT</strong> + giờ / đêm: <em>at 6 o’clock, at night</em>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* PAGE 13: HOW OFTEN + TASK 1 (PHONETICS WITH AUDIO!) */}
      {activePage === 13 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <h3 className="font-display font-bold text-xl text-slate-900">
              Mẫu câu hỏi tần suất “How often...?” (Trang 13)
            </h3>
            <p className="text-sm text-slate-600">
              Công thức: <strong>How often + do / does + S + V?</strong> (Ai đó làm việc này bao nhiêu lần?)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { label: '1 lần / tuần', en: 'once a week', note: 'KHÔNG nói one time!' },
                { label: '2 lần / tuần', en: 'twice a week', note: 'KHÔNG nói two times!' },
                { label: '3 lần / tuần', en: 'three times a week', note: 'Từ 3 lần thêm "times"' },
                { label: 'Mỗi ngày', en: 'every day', note: 'Đặt ở cuối câu' },
              ].map((card) => (
                <button
                  key={card.en}
                  type="button"
                  onClick={() => speakEnglish(card.en, 0.9)}
                  className="text-left p-4 rounded-2xl bg-sky-50/60 border border-sky-200 hover:bg-sky-100/70 transition-colors space-y-1 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-700">{card.label}</span>
                    <Volume2 className="w-3.5 h-3.5 text-sky-600" />
                  </div>
                  <p className="font-display font-extrabold text-base text-slate-900">{card.en}</p>
                  <p className="text-xs text-slate-600">{card.note}</p>
                </button>
              ))}
            </div>
          </section>

          <ChoiceExerciseBlock
            title="Task 1 (Trang 13) · Tìm từ có phần gạch chân phát âm khác"
            instruction="Bấm vào nút loa nhỏ bên cạnh từng từ để nghe thật rõ sự khác nhau trước khi chọn nhé!"
            items={U2_TASK1_PHONETICS}
            speakOptions
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* PAGE 14: TASK 2 (MC) & TASK 3 (ITEMS 1-3) */}
      {activePage === 14 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 2 (Trang 14) · Choose the best answer"
            instruction="Ôn luyện chia động từ hiện tại đơn (get/gets, watch/watches) và giới từ thời gian."
            items={U2_TASK2_MC}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
          <PictureFillBlock
            title="Task 3 (Trang 14 · Câu 1–3) · Look, read and write"
            instruction="Nhìn tranh/lịch gợi ý, đọc giải thích và điền từ/cụm từ đúng."
            items={U2_TASK3_DEFS.slice(0, 3)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* PAGE 15: TASK 3 (ITEM 4), TASK 4 (DAISY), TASK 5 (NAM), TASK 6 (ADAM & SUSAN) */}
      {activePage === 15 && (
        <div className="space-y-6">
          <PictureFillBlock
            title="Task 3 (Trang 15 · Câu 4) · Look, read and write"
            instruction="Hoàn thành câu cuối của Task 3."
            items={U2_TASK3_DEFS.slice(3)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
          <TrueFalseReadingBlock
            title="Task 4 (Trang 15) · Đọc đoạn văn về một ngày của Daisy"
            passage={U2_TASK4_READING.passage}
            passageVi={U2_TASK4_READING.passageVi}
            example={U2_TASK4_READING.example}
            statements={U2_TASK4_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
          <DialogueOrderBlock
            id="p15-u2t5-all"
            title="Task 5 (Trang 15) · Sắp xếp hội thoại giữa Nam và thầy Tuấn"
            instruction="Câu 0 [C] đã cho sẵn. Bấm lần lượt 4 lượt thoại còn lại theo đúng thứ tự."
            items={U2_TASK5_DIALOGUE}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          {/* Task 6: Adam & Susan Word-Bank Dialogue */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Task 6 (Trang 15) · Điền 6 từ trong khung vào hội thoại Adam & Susan
              </h3>
              <p className="text-sm text-slate-600">
                Mỗi từ trong khung dưới đây được dùng đúng 1 lần:
              </p>
            </div>

            <div className="flex flex-wrap gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200">
              {U2_TASK6_DIALOGUE_WORDS.map((w) => (
                <span
                  key={w}
                  className="px-3 py-1 rounded-lg bg-white border border-amber-300 text-sm font-bold text-amber-950"
                >
                  {w}
                </span>
              ))}
            </div>

            <div className="space-y-2.5 text-sm sm:text-base text-slate-900 bg-slate-50 p-4 rounded-2xl border border-slate-200 leading-relaxed">
              <p>
                <strong>Adam:</strong> Hi, Susan. What{' '}
                <input
                  type="text"
                  value={adamInputs[0] ?? ''}
                  onChange={(e) => {
                    setAdamInputs((p) => ({ ...p, 0: e.target.value }));
                    setAdamChecked(null);
                  }}
                  placeholder="(1)"
                  className="w-20 px-2 py-0.5 rounded-lg bg-white border border-sky-300 font-bold text-sky-900 text-sm"
                />{' '}
                you doing?
              </p>
              <p>
                <strong>Susan:</strong> I’m{' '}
                <input
                  type="text"
                  value={adamInputs[1] ?? ''}
                  onChange={(e) => {
                    setAdamInputs((p) => ({ ...p, 1: e.target.value }));
                    setAdamChecked(null);
                  }}
                  placeholder="(2)"
                  className="w-24 px-2 py-0.5 rounded-lg bg-white border border-sky-300 font-bold text-sky-900 text-sm"
                />{' '}
                dinner.
              </p>
              <p>
                <strong>Adam:</strong> Do you usually cook{' '}
                <input
                  type="text"
                  value={adamInputs[2] ?? ''}
                  onChange={(e) => {
                    setAdamInputs((p) => ({ ...p, 2: e.target.value }));
                    setAdamChecked(null);
                  }}
                  placeholder="(3)"
                  className="w-20 px-2 py-0.5 rounded-lg bg-white border border-sky-300 font-bold text-sky-900 text-sm"
                />{' '}
                school?
              </p>
              <p>
                <strong>Susan:</strong> Yes, I do. My mother often comes home{' '}
                <input
                  type="text"
                  value={adamInputs[3] ?? ''}
                  onChange={(e) => {
                    setAdamInputs((p) => ({ ...p, 3: e.target.value }));
                    setAdamChecked(null);
                  }}
                  placeholder="(4)"
                  className="w-20 px-2 py-0.5 rounded-lg bg-white border border-sky-300 font-bold text-sky-900 text-sm"
                />{' '}
                so I help her cook dinner.
              </p>
              <p>
                <strong>Adam:</strong> How{' '}
                <input
                  type="text"
                  value={adamInputs[4] ?? ''}
                  onChange={(e) => {
                    setAdamInputs((p) => ({ ...p, 4: e.target.value }));
                    setAdamChecked(null);
                  }}
                  placeholder="(5)"
                  className="w-20 px-2 py-0.5 rounded-lg bg-white border border-sky-300 font-bold text-sky-900 text-sm"
                />{' '}
                do you go shopping?
              </p>
              <p>
                <strong>Susan:</strong>{' '}
                <input
                  type="text"
                  value={adamInputs[5] ?? ''}
                  onChange={(e) => {
                    setAdamInputs((p) => ({ ...p, 5: e.target.value }));
                    setAdamChecked(null);
                  }}
                  placeholder="(6)"
                  className="w-20 px-2 py-0.5 rounded-lg bg-white border border-sky-300 font-bold text-sky-900 text-sm"
                />{' '}
                a week.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={checkAdamDialogue}
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold cursor-pointer"
              >
                Kiểm tra 6 chỗ trống
              </button>
              <button
                type="button"
                onClick={() => {
                  setAdamInputs({ 0: 'are', 1: 'cooking', 2: 'after', 3: 'late', 4: 'often', 5: 'Twice' });
                  setAdamChecked(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-sm font-semibold cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                Điền đáp án chuẩn
              </button>
            </div>

            {adamChecked !== null && (
              <div
                className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm border ${
                  adamChecked
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}
              >
                {adamChecked ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <p>
                  {adamChecked
                    ? 'Chính xác cả 6 ô: (1) are · (2) cooking · (3) after · (4) late · (5) often · (6) Twice.'
                    : 'Vẫn còn ô chưa đúng vị trí. Hãy kiểm tra lại ngữ cảnh từng câu hỏi đáp nhé!'}
                </p>
              </div>
            )}
          </section>
        </div>
      )}

      {/* PAGE 16: TASK 7 (JOE'S DAY) & TASK 8 (ITEMS 1-3) */}
      {activePage === 16 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Task 7 (Trang 16) · Hoàn thành đoạn văn một ngày của bạn Joe
                </h3>
                <p className="text-sm text-slate-600">
                  Đọc gợi ý của 5 ô (1)–(5) rồi điền từ thích hợp vào câu chuyện của Joe.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    'Hi, I am Joe. I always get up at six o clock in the morning. I brush my teeth and do morning exercise. After breakfast, I go to school by bus. Twice a week, I go to the sports centre and play basketball with my friends after school. In the evening, I do my homework and watch TV. I usually go to bed at 10 o clock.',
                    0.88
                  )
                }
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Nghe toàn bài mẫu
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {U2_TASK7_JOE_BLANKS.map((b) => (
                <div key={b.id} className="p-3 rounded-xl bg-amber-50/60 border border-amber-200 text-center">
                  <p className="text-xs font-extrabold text-amber-800">Ô ({b.index})</p>
                  <p className="text-xs text-slate-700 mt-1">{b.hint}</p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-base leading-loose text-slate-900 font-medium">
              Hi, I am Joe. I always get up at six o’clock in the morning. I brush my teeth and do morning{' '}
              <input
                type="text"
                value={joeInputs[1] ?? ''}
                onChange={(e) => {
                  setJoeInputs((p) => ({ ...p, 1: e.target.value }));
                  setJoeChecked(null);
                }}
                placeholder="(1)"
                className="w-24 px-2 py-0.5 mx-1 rounded-lg bg-white border border-sky-300 text-sm font-bold text-sky-900"
              />
              . After breakfast, I go to school by bus. Twice a week, I go to the sports centre and play{' '}
              <input
                type="text"
                value={joeInputs[2] ?? ''}
                onChange={(e) => {
                  setJoeInputs((p) => ({ ...p, 2: e.target.value }));
                  setJoeChecked(null);
                }}
                placeholder="(2)"
                className="w-28 px-2 py-0.5 mx-1 rounded-lg bg-white border border-sky-300 text-sm font-bold text-sky-900"
              />{' '}
              with my friends after school. In the evening, I do my{' '}
              <input
                type="text"
                value={joeInputs[3] ?? ''}
                onChange={(e) => {
                  setJoeInputs((p) => ({ ...p, 3: e.target.value }));
                  setJoeChecked(null);
                }}
                placeholder="(3)"
                className="w-28 px-2 py-0.5 mx-1 rounded-lg bg-white border border-sky-300 text-sm font-bold text-sky-900"
              />{' '}
              and watch TV. I usually go to{' '}
              <input
                type="text"
                value={joeInputs[4] ?? ''}
                onChange={(e) => {
                  setJoeInputs((p) => ({ ...p, 4: e.target.value }));
                  setJoeChecked(null);
                }}
                placeholder="(4)"
                className="w-20 px-2 py-0.5 mx-1 rounded-lg bg-white border border-sky-300 text-sm font-bold text-sky-900"
              />{' '}
              at{' '}
              <input
                type="text"
                value={joeInputs[5] ?? ''}
                onChange={(e) => {
                  setJoeInputs((p) => ({ ...p, 5: e.target.value }));
                  setJoeChecked(null);
                }}
                placeholder="(5)"
                className="w-16 px-2 py-0.5 mx-1 rounded-lg bg-white border border-sky-300 text-sm font-bold text-sky-900"
              />{' '}
              o’clock.
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={checkJoeParagraph}
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold cursor-pointer"
              >
                Kiểm tra bài của Joe
              </button>
              <button
                type="button"
                onClick={() => {
                  setJoeInputs({ 1: 'exercise', 2: 'basketball', 3: 'homework', 4: 'bed', 5: '10' });
                  setJoeChecked(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-sm font-semibold cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                Điền đáp án chuẩn
              </button>
            </div>

            {joeChecked !== null && (
              <div
                className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm border ${
                  joeChecked
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}
              >
                {joeChecked ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <p>
                  {joeChecked
                    ? 'Xuất sắc! 5 đáp án chuẩn: (1) exercise · (2) basketball · (3) homework · (4) bed · (5) 10.'
                    : 'Chưa đúng hết 5 ô rồi. Xem lại gợi ý phía trên nhé!'}
                </p>
              </div>
            )}
          </section>

          <PictureFillBlock
            title="Task 8 (Trang 16 · Câu 1–3) · Nhìn lịch & hình minh họa điền 1 từ"
            instruction="Đếm số ngày tích xanh trên lịch hoặc nhìn tranh để điền từ chính xác (nhớ chia động từ với Nancy nhé!)."
            items={U2_TASK8_PICTURES.slice(0, 3)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* PAGE 17: TASK 8 (ITEM 4), TASK 9 (4 ORDERS), TASK 10 (WRITING) */}
      {activePage === 17 && (
        <div className="space-y-6">
          <PictureFillBlock
            title="Task 8 (Trang 17 · Câu 4) · Look and write"
            instruction="Hoàn thành câu cuối của Task 8."
            items={U2_TASK8_PICTURES.slice(3)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
          <SentenceOrderBlock
            title="Task 9 (Trang 17) · Sắp xếp từ thành câu hoàn chỉnh"
            instruction="Ghép 4 câu hỏi và trả lời về thói quen hằng ngày."
            items={U2_TASK9_ORDERS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
          <GuidedWritingBlock
            id="p17-u2t10-write"
            title="Task 10 (Trang 17) · Viết đoạn văn về bạn thân của em"
            instruction="Trả lời 5 câu hỏi gợi ý để tạo thành bài viết hoàn chỉnh về thói quen của bạn thân."
            prompts={U2_TASK10_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* PAGE 18: UNIT 3 VOCAB PART 1 (17 WORDS) */}
      {activePage === 18 && (
        <div className="space-y-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-start gap-3">
            <Compass className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-sm text-emerald-950">
              <strong>Mở đầu Unit 3 (Trang 18):</strong> Chủ đề <em>Where did you go on holiday?</em> đưa em đi du lịch khắp Việt Nam — từ <strong>Ha Long Bay</strong>, <strong>Hue Imperial City</strong>, <strong>Hoi An Ancient Town</strong> đến <strong>Phu Quoc Island</strong>!
            </p>
          </div>
          <VocabCardsGrid
            words={U3_VOCAB_PAGE18}
            title="17 từ vựng kỳ nghỉ & địa điểm du lịch Unit 3 (Trang 18)"
          />
        </div>
      )}

      {/* PAGE 19: UNIT 3 VOCAB PART 2 (11 WORDS) + PAST TENSE CARDS + GRAMMAR */}
      {activePage === 19 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U3_VOCAB_PAGE19}
            title="11 từ vựng phương tiện & gia đình Unit 3 (Trang 19)"
          />

          {/* Interactive Past Tense Flip Cards */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Thẻ lật động từ Quá khứ đơn (Bấm để lật từ Hiện tại → Quá khứ)
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Khi kể về kỳ nghỉ đã qua (last summer / last weekend), động từ phải chuyển sang thì Quá khứ đơn!
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {PAST_VERB_PAIRS.map((v) => {
                const flipped = !!flippedVerbs[v.base];
                return (
                  <button
                    key={v.base}
                    type="button"
                    onClick={() => {
                      setFlippedVerbs((p) => ({ ...p, [v.base]: !p[v.base] }));
                      speakEnglish(flipped ? v.base : v.past, 0.9);
                    }}
                    className={`p-4 rounded-2xl border text-center transition-all cursor-pointer space-y-1 ${
                      flipped
                        ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                        : 'bg-slate-50 border-slate-200 hover:border-sky-400 text-slate-900'
                    }`}
                  >
                    <p className={`text-[11px] font-bold uppercase ${flipped ? 'text-emerald-100' : 'text-slate-500'}`}>
                      {flipped ? 'Quá khứ (V2)' : 'Hiện tại (V1)'}
                    </p>
                    <p className="font-display font-extrabold text-xl">
                      {flipped ? v.past : v.base}
                    </p>
                    <p className={`text-xs ${flipped ? 'text-emerald-50' : 'text-slate-600'}`}>
                      {v.vi}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Page 19 Grammar Patterns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <section className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
              <p className="text-xs font-bold uppercase text-sky-700">
                Mẫu câu 1 · Hỏi đã đi đâu vào kỳ nghỉ
              </p>
              <p className="font-display font-extrabold text-lg text-slate-900">
                Where did + S + go + on holiday?
              </p>
              <p className="text-sm font-semibold text-emerald-700">
                → S + went to + địa điểm.
              </p>
              <button
                type="button"
                onClick={() =>
                  speakEnglish('Where did you go on holiday? I went to Ha Long Bay.', 0.9)
                }
                className="w-full text-left p-3 rounded-xl bg-sky-50 border border-sky-200 text-sm cursor-pointer"
              >
                <strong>🔊 Where did you go on holiday? — I went to Ha Long Bay.</strong>
                <span className="block text-xs text-slate-600 mt-0.5">
                  Chú ý: Có “did” thì dùng “go”, trả lời không có “did” đổi “go → went”!
                </span>
              </button>
            </section>

            <section className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
              <p className="text-xs font-bold uppercase text-emerald-700">
                Mẫu câu 2 · Hỏi đã làm gì vào kỳ nghỉ
              </p>
              <p className="font-display font-extrabold text-lg text-slate-900">
                What did + S + do + on holiday?
              </p>
              <p className="text-sm font-semibold text-emerald-700">
                → S + V(quá khứ)...
              </p>
              <button
                type="button"
                onClick={() =>
                  speakEnglish('What did you do on holiday? I went on a trip with my family.', 0.9)
                }
                className="w-full text-left p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-sm cursor-pointer"
              >
                <strong>🔊 What did you do on holiday? — I went on a trip with my family.</strong>
                <span className="block text-xs text-slate-600 mt-0.5">
                  Cụm cố định: “go on a trip” → quá khứ là “went on a trip”.
                </span>
              </button>
            </section>
          </div>
        </div>
      )}

      {/* PAGE 20: HOW DID YOU GET THERE + INTERACTIVE TRANSPORT BUILDER + TASK 1 MATCHING */}
      {activePage === 20 && (
        <div className="space-y-6">
          {/* Interactive Transport Grammar Builder */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-emerald-700">Ngữ pháp Trang 20</p>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Hỏi phương tiện: How did you get there? → I went by + phương tiện
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Quy tắc vàng: Dùng <strong>by</strong> đặt trực tiếp trước tên phương tiện (KHÔNG thêm <em>a / the</em>: <strong>by train</strong>, không nói <em>by a train</em>).
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(`How did you get there? ${selectedTransport.sentence}`, 0.9)
                }
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Nghe hỏi & đáp
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {TRANSPORT_OPTIONS.map((t) => {
                const active = selectedTransport.key === t.key;
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => {
                      setSelectedTransport(t);
                      speakEnglish(t.phrase, 0.9);
                    }}
                    className={`p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all cursor-pointer ${
                      active
                        ? 'bg-emerald-50 border-emerald-500 ring-1 ring-emerald-300'
                        : 'bg-slate-50 border-slate-200 hover:border-sky-400'
                    }`}
                  >
                    <MiniPictureIcon iconKey={t.key} className="w-12 h-12" />
                    <span className="text-xs font-extrabold text-slate-900">{t.phrase}</span>
                    <span className="text-[11px] text-slate-600">{t.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-sm sm:text-base text-emerald-950 font-semibold">
              Q: How did you get there? &nbsp;→&nbsp; A: {selectedTransport.sentence}
            </div>
          </section>

          {/* Page 20 Task 1: Interactive 5-Riddle Transport Matcher */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Task 1 (Trang 20) · Đọc câu đố và ghép với hình phương tiện tương ứng
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Bước 1: Bấm chọn 1 câu mô tả bên trái. Bước 2: Bấm vào hình phương tiện đúng bên phải! (Câu 0 đã ghép mẫu sẵn).
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setRiddleMatches({ 'p20-r0': 'train' });
                  setSelectedRiddleId('p20-r1');
                  setRiddleFeedback(null);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Chơi lại
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
              {/* Left: 5 Clues */}
              <div className="lg:col-span-7 space-y-2.5">
                {U3_PAGE20_MATCH_RIDDLES.map((r) => {
                  const matchedKey = riddleMatches[r.id];
                  const isSelected = selectedRiddleId === r.id;
                  return (
                    <button
                      key={r.id}
                      type="button"
                      disabled={Boolean(matchedKey)}
                      onClick={() => {
                        setSelectedRiddleId(r.id);
                        setRiddleFeedback(null);
                        speakEnglish(r.clue.replace(/^\d+.*?\. /, ''), 0.9);
                      }}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                        matchedKey
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                          : isSelected
                          ? 'bg-sky-50 border-sky-500 ring-2 ring-sky-200 cursor-pointer'
                          : 'bg-slate-50 border-slate-200 hover:border-sky-400 cursor-pointer'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <p className="text-sm sm:text-base font-bold text-slate-900">{r.clue}</p>
                        <p className="text-xs text-slate-600">{r.clueVi}</p>
                      </div>
                      {matchedKey ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                          {r.label}
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-sky-700 shrink-0">
                          {isSelected ? 'Đang chọn →' : 'Chọn câu'}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Right: 5 Transport Picture Cards */}
              <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
                {[
                  { key: 'motorbike', label: 'Motorbike' },
                  { key: 'train', label: 'Train (Mẫu 0)' },
                  { key: 'plane', label: 'Plane' },
                  { key: 'underground', label: 'Underground' },
                  { key: 'ship', label: 'Ship / Boat' },
                ].map((card) => {
                  const used = Object.values(riddleMatches).includes(card.key);
                  return (
                    <button
                      key={card.key}
                      type="button"
                      disabled={used || !selectedRiddleId}
                      onClick={() => handlePickTransportCard(card.key)}
                      className={`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all ${
                        used
                          ? 'bg-emerald-50 border-emerald-300 opacity-75'
                          : 'bg-white border-slate-200 hover:border-sky-500 hover:bg-sky-50/40 cursor-pointer'
                      }`}
                    >
                      <MiniPictureIcon iconKey={card.key} className="w-16 h-16" />
                      <span className="text-xs font-extrabold text-slate-900">{card.label}</span>
                      {used && (
                        <span className="text-[11px] font-bold text-emerald-700">✓ Đã nối</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {riddleFeedback && (
              <div
                className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm border ${
                  riddleFeedback.ok
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}
              >
                {riddleFeedback.ok ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <p>{riddleFeedback.msg}</p>
              </div>
            )}

            {Object.keys(riddleMatches).length === U3_PAGE20_MATCH_RIDDLES.length && (
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-wrap items-center justify-between gap-3 text-amber-950 font-semibold text-sm">
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
                  Chúc mừng em hoàn thành Trang 20! Tiếp tục chinh phục Trang 21–41 (Unit 3, 4, 5 & 6) nhé!
                </span>
                <button
                  type="button"
                  onClick={() => goToPage(21)}
                  className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold cursor-pointer"
                >
                  Sang Trang 21 →
                </button>
              </div>
            )}
          </section>
        </div>
      )}

      {/* PAGES 21 -> 41 DELEGATED VIEW */}
      {activePage >= 21 && activePage <= 41 && (
        <Pages21To41View
          activePage={activePage}
          completedTaskIds={completedTaskIds}
          onCompleteTask={onCompleteTask}
          muted={muted}
        />
      )}

      {/* PAGES 42 -> 62 DELEGATED VIEW */}
      {activePage >= 42 && activePage <= 62 && (
        <Pages42To62View
          activePage={activePage}
          completedTaskIds={completedTaskIds}
          onCompleteTask={onCompleteTask}
          muted={muted}
        />
      )}

      {/* PAGES 63 -> 83 DELEGATED VIEW */}
      {activePage >= 63 && (
        <Pages63To83View
          activePage={activePage}
          completedTaskIds={completedTaskIds}
          onCompleteTask={onCompleteTask}
          muted={muted}
        />
      )}

      {/* Bottom Prev / Next Page Bar */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          type="button"
          disabled={activePage <= 1}
          onClick={() => goToPage(activePage - 1)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 text-sm font-semibold text-slate-700 cursor-pointer disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
          Trang trước {activePage > 1 ? `(Tr. ${activePage - 1})` : ''}
        </button>

        <span className="text-xs font-bold text-slate-500 tabular-nums hidden sm:inline-flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-sky-600" />
          Trang {activePage} / 83
        </span>

        <button
          type="button"
          disabled={activePage >= 83}
          onClick={() => goToPage(activePage + 1)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-40 text-sm font-semibold text-white cursor-pointer disabled:cursor-not-allowed"
        >
          Trang tiếp {activePage < 83 ? `(Tr. ${activePage + 1})` : ''}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
