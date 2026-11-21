import React, { useState } from 'react';
import {
  CheckCircle2,
  CloudSun,
  Compass,
  Eye,
  Lightbulb,
  MapPin,
  RotateCcw,
  Sparkles,
  Trophy,
  Utensils,
  Volume2,
  XCircle,
} from 'lucide-react';
import type { ParagraphBlank } from '../data/pages1to20Data';
import {
  type DialogueChoiceOption,
  type DialogueGapLine,
  U17_CANTEEN_PRESETS,
  U17_TASK10_WRITING,
  U17_TASK1_ODD,
  U17_TASK2_P128,
  U17_TASK2_P129,
  U17_TASK3_DEFS,
  U17_TASK4_TOM_READING,
  U17_TASK5_LINES,
  U17_TASK5_OPTIONS,
  U17_TASK6_LUCY_BLANKS,
  U17_TASK7_THU_MC,
  U17_TASK8_PICTURES,
  U17_TASK9_ORDERS,
  U17_VOCAB_PAGE126,
  U17_VOCAB_PAGE127,
  U18_CITY_FORECASTS,
  U18_SEASON_CARDS,
  U18_TASK10_WRITING,
  U18_TASK1_PHONETICS,
  U18_TASK2_ODD,
  U18_TASK3_DEFS,
  U18_TASK4_AUSTRALIA_READING,
  U18_TASK5_P139,
  U18_TASK5_P140,
  U18_TASK6_WEATHER_BLANKS,
  U18_TASK7_PICTURES,
  U18_TASK8_BLANKS,
  U18_TASK8_WORD_BANK,
  U18_TASK9_ORDERS,
  U18_VOCAB_PAGE134,
  U18_VOCAB_PAGE135,
  U19_LANDMARK_PRESETS,
  U19_TASK1_ODD,
  U19_TASK2_MC,
  U19_TASK3_P146,
  U19_VOCAB_PAGE143,
  U19_VOCAB_PAGE144,
  U19_VOCAB_PAGE145,
} from '../data/pages126to146Data';
import { playFeedbackTone, speakEnglish } from '../utils/speech';
import {
  ChoiceExerciseBlock,
  GuidedWritingBlock,
  PictureFillBlock,
  SentenceOrderBlock,
  TrueFalseReadingBlock,
  VocabCardsGrid,
} from './PageExerciseWidgets';
import {
  FoodQuantityDiagram,
  LandmarkComparisonDiagram,
  MiniPictureIcon,
  WeatherSeasonsDiagram,
} from './PageVisuals';

interface Pages126To146ViewProps {
  activePage: number;
  completedTaskIds: string[];
  onCompleteTask: (taskId: string) => void;
  muted: boolean;
}

/* =========================================================
   HELPER 1: DIALOGUE SENTENCE FILL BLOCK (PAGE 131 · TASK 5)
   ========================================================= */
const DialogueSentenceFillBlock: React.FC<{
  title: string;
  instruction: string;
  options: DialogueChoiceOption[];
  lines: DialogueGapLine[];
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ title, instruction, options, lines, completedTaskIds, onCompleteTask, muted }) => {
  const [selectedMap, setSelectedMap] = useState<Record<string, string>>({});
  const [activeBlankId, setActiveBlankId] = useState<string>(
    lines.find((l) => l.blankNumber === 1)?.id ?? ''
  );

  const pickLetter = (line: DialogueGapLine, letter: string) => {
    if (!line.correctLetter) return;
    setSelectedMap((prev) => ({ ...prev, [line.id]: letter }));
    const isRight = letter === line.correctLetter;
    playFeedbackTone(isRight ? 'correct' : 'wrong', muted);
    if (isRight) {
      onCompleteTask(line.id);
      const nextUnfilled = lines.find(
        (l) => l.blankNumber && l.id !== line.id && selectedMap[l.id] !== l.correctLetter
      );
      if (nextUnfilled) setActiveBlankId(nextUnfilled.id);
    }
  };

  const revealAll = () => {
    const next: Record<string, string> = {};
    lines.forEach((l) => {
      if (l.correctLetter) next[l.id] = l.correctLetter;
    });
    setSelectedMap(next);
  };

  const playFullDialogue = () => {
    const fullText = lines
      .map((l) => {
        if (l.fixedText) return l.fixedText;
        const opt = options.find((o) => o.letter === l.correctLetter);
        return opt?.text ?? '';
      })
      .filter(Boolean)
      .join(' ');
    speakEnglish(fullText, 0.88);
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{instruction}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={playFullDialogue}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-800 text-xs font-semibold cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            Nghe trọn hội thoại
          </button>
          <button
            type="button"
            onClick={revealAll}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-semibold cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            Xem đáp án
          </button>
          <button
            type="button"
            onClick={() => setSelectedMap({})}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Làm lại
          </button>
        </div>
      </div>

      {/* 5 Candidate Sentences Bank */}
      <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-4 space-y-2.5">
        <p className="text-xs font-extrabold uppercase tracking-wider text-amber-900">
          Kho 5 câu cần điền (Bấm chọn vị trí trống (1)–(5) bên dưới rồi bấm câu thích hợp)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {options.map((opt) => {
            const usedRight = lines.some(
              (l) => l.correctLetter === opt.letter && selectedMap[l.id] === opt.letter
            );
            return (
              <button
                key={opt.letter}
                type="button"
                onClick={() => {
                  const target =
                    lines.find((l) => l.id === activeBlankId && l.blankNumber) ??
                    lines.find((l) => l.blankNumber && selectedMap[l.id] !== l.correctLetter);
                  if (target) pickLetter(target, opt.letter);
                }}
                className={`text-left p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                  usedRight
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    : 'bg-white border-amber-200 hover:border-amber-500 text-slate-900'
                }`}
              >
                <span className="w-6 h-6 rounded-lg bg-amber-500 text-white text-xs font-extrabold flex items-center justify-center shrink-0 uppercase">
                  {opt.letter}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold">{opt.text}</p>
                  <p className="text-xs text-slate-500">{opt.textVi}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dialogue Lines */}
      <div className="space-y-3">
        {lines.map((line) => {
          const isMinh = line.speaker === 'Minh';
          if (line.fixedText) {
            return (
              <div
                key={line.id}
                className={`p-3.5 rounded-2xl border flex items-start justify-between gap-3 ${
                  isMinh ? 'bg-sky-50/60 border-sky-200' : 'bg-emerald-50/60 border-emerald-200'
                }`}
              >
                <div className="space-y-0.5">
                  <p className="text-sm text-slate-900">
                    <strong className={isMinh ? 'text-sky-800' : 'text-emerald-800'}>
                      {line.speaker}:
                    </strong>{' '}
                    {line.fixedText}
                  </p>
                  {line.fixedVi && <p className="text-xs text-slate-500">{line.fixedVi}</p>}
                </div>
                <button
                  type="button"
                  onClick={() => speakEnglish(line.fixedText!, 0.9)}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-sky-700 cursor-pointer shrink-0"
                  aria-label="Nghe câu thoại"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          }

          const picked = selectedMap[line.id];
          const pickedOpt = options.find((o) => o.letter === picked);
          const isRight = picked === line.correctLetter;
          const isWrong = Boolean(picked) && !isRight;
          const done = completedTaskIds.includes(line.id);
          const isActive = activeBlankId === line.id;

          return (
            <div
              key={line.id}
              onClick={() => setActiveBlankId(line.id)}
              className={`p-4 rounded-2xl border-2 space-y-2.5 transition-all cursor-pointer ${
                isRight
                  ? 'bg-emerald-50/70 border-emerald-300'
                  : isWrong
                  ? 'bg-rose-50/70 border-rose-300'
                  : isActive
                  ? 'bg-amber-50/50 border-sky-500'
                  : 'bg-slate-50/70 border-dashed border-slate-300'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <strong className="text-sm text-sky-800">{line.speaker}:</strong>
                  <span className="px-2 py-0.5 rounded-lg bg-sky-600 text-white text-xs font-extrabold">
                    ({line.blankNumber})
                  </span>
                  {pickedOpt ? (
                    <span className="text-sm font-bold text-slate-900">
                      {pickedOpt.letter}. {pickedOpt.text}
                    </span>
                  ) : (
                    <span className="text-sm text-slate-500 italic">
                      Bấm chọn chữ a–e bên cạnh hoặc từ khung vàng phía trên...
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1">
                  {options.map((o) => (
                    <button
                      key={o.letter}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        pickLetter(line, o.letter);
                      }}
                      className={`w-7 h-7 rounded-lg text-xs font-extrabold uppercase cursor-pointer transition-colors ${
                        picked === o.letter
                          ? isRight
                            ? 'bg-emerald-600 text-white'
                            : 'bg-rose-600 text-white'
                          : 'bg-white border border-slate-300 text-slate-700 hover:border-sky-500'
                      }`}
                    >
                      {o.letter}
                    </button>
                  ))}
                </div>
              </div>

              {(isRight || isWrong || done) && line.explanation && (
                <p
                  className={`text-xs flex items-start gap-1.5 ${
                    isWrong ? 'text-rose-800' : 'text-emerald-800'
                  }`}
                >
                  {isWrong ? (
                    <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-rose-600" />
                  ) : (
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-600" />
                  )}
                  <span>
                    {isWrong
                      ? 'Chưa hợp ngữ cảnh câu thoại! Đọc kỹ câu ngay trước và sau chỗ trống nhé.'
                      : line.explanation}
                  </span>
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* =========================================================
   HELPER 2: INLINE PICTURE CLOZE (P.131 LUCY & P.140 WEATHER)
   ========================================================= */
const InlinePictureCloze: React.FC<{
  taskId: string;
  title: string;
  subtitle: string;
  segments: string[];
  blanks: ParagraphBlank[];
  exampleBadge?: { label: string; iconKey: string };
  fullAudioText: string;
  translationVi: string;
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({
  taskId,
  title,
  subtitle,
  segments,
  blanks,
  exampleBadge,
  fullAudioText,
  translationVi,
  onCompleteTask,
  muted,
}) => {
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState<boolean | null>(null);
  const [showVi, setShowVi] = useState(false);

  const checkAll = () => {
    const allRight = blanks.every((b) =>
      b.answers.some((a) => a.toLowerCase() === (inputs[b.index] ?? '').trim().toLowerCase())
    );
    setChecked(allRight);
    playFeedbackTone(allRight ? 'celebrate' : 'wrong', muted);
    if (allRight) onCompleteTask(taskId);
  };

  const revealAll = () => {
    const next: Record<number, string> = {};
    blanks.forEach((b) => {
      next[b.index] = b.answers[0];
    });
    setInputs(next);
    setChecked(true);
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => speakEnglish(fullAudioText, 0.88)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-800 text-xs font-semibold cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            Nghe đoạn mẫu
          </button>
          <button
            type="button"
            onClick={() => setShowVi((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            {showVi ? 'Ẩn dịch' : 'Xem dịch tiếng Việt'}
          </button>
        </div>
      </div>

      {/* Picture Clue Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {exampleBadge && (
          <div className="rounded-xl bg-emerald-50/70 border border-emerald-200 p-2.5 flex flex-col items-center text-center gap-1">
            <MiniPictureIcon iconKey={exampleBadge.iconKey} className="w-11 h-11" />
            <span className="text-[11px] font-extrabold text-emerald-800">
              (0) {exampleBadge.label}
            </span>
          </div>
        )}
        {blanks.map((b) => (
          <div
            key={b.id}
            className="rounded-xl bg-slate-50 border border-slate-200 p-2.5 flex flex-col items-center text-center gap-1"
          >
            <MiniPictureIcon iconKey={b.iconKey ?? 'book'} className="w-11 h-11" />
            <span className="text-[11px] font-bold text-slate-700">
              ({b.index}) {b.hint}
            </span>
          </div>
        ))}
      </div>

      {/* Paragraph with inline inputs */}
      <div className="rounded-2xl bg-sky-50/40 border border-sky-200 p-4 sm:p-5 text-sm sm:text-base leading-loose text-slate-900">
        {segments.map((seg, i) => {
          const blank = blanks[i];
          const val = blank ? inputs[blank.index] ?? '' : '';
          const isCorrect =
            blank &&
            checked !== null &&
            blank.answers.some((a) => a.toLowerCase() === val.trim().toLowerCase());
          const isWrong = blank && checked !== null && !isCorrect;

          return (
            <React.Fragment key={i}>
              <span>{seg}</span>
              {blank && (
                <span className="inline-flex items-center gap-1 mx-1 align-middle">
                  <span className="text-xs font-extrabold text-sky-700">({blank.index})</span>
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => {
                      setInputs((prev) => ({ ...prev, [blank.index]: e.target.value }));
                      setChecked(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') checkAll();
                    }}
                    placeholder="..."
                    className={`w-28 sm:w-32 px-2 py-0.5 rounded-lg border-2 text-center text-sm font-bold bg-white focus:outline-none ${
                      isCorrect
                        ? 'border-emerald-500 text-emerald-800 bg-emerald-50'
                        : isWrong
                        ? 'border-rose-500 text-rose-800 bg-rose-50'
                        : 'border-sky-300 text-sky-900 focus:border-sky-600'
                    }`}
                  />
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {showVi && (
        <div className="rounded-xl bg-amber-50/80 border border-amber-200 p-3.5 text-xs sm:text-sm text-amber-950 leading-relaxed">
          <strong>Bản dịch tham khảo:</strong> {translationVi}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={checkAll}
          className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs sm:text-sm font-bold cursor-pointer"
        >
          Kiểm tra đoạn văn
        </button>
        <button
          type="button"
          onClick={revealAll}
          className="px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-semibold cursor-pointer"
        >
          Xem đáp án
        </button>
        <button
          type="button"
          onClick={() => {
            setInputs({});
            setChecked(null);
          }}
          className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
        >
          Làm lại
        </button>

        {checked === true && (
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700">
            <CheckCircle2 className="w-4 h-4" />
            Xuất sắc! Em đã điền chính xác toàn bộ chỗ trống.
          </span>
        )}
        {checked === false && (
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-rose-700">
            <XCircle className="w-4 h-4" />
            Còn ô viền đỏ chưa đúng, xem lại hình gợi ý phía trên nhé!
          </span>
        )}
      </div>
    </section>
  );
};

/* =========================================================
   HELPER 3: WORD BANK PARAGRAPH BLOCK (PAGE 142 · TASK 8)
   ========================================================= */
const WordBankParagraphBlock: React.FC<{
  taskId: string;
  title: string;
  instruction: string;
  wordBank: string[];
  segments: string[];
  blanks: ParagraphBlank[];
  fullAudioText: string;
  translationVi: string;
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({
  taskId,
  title,
  instruction,
  wordBank,
  segments,
  blanks,
  fullAudioText,
  translationVi,
  onCompleteTask,
  muted,
}) => {
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [focusedIdx, setFocusedIdx] = useState<number>(1);
  const [checked, setChecked] = useState<boolean | null>(null);
  const [showVi, setShowVi] = useState(false);

  const pickWord = (w: string) => {
    setInputs((prev) => ({ ...prev, [focusedIdx]: w }));
    setChecked(null);
    const nextBlank = blanks.find((b) => b.index > focusedIdx && !inputs[b.index]);
    if (nextBlank) setFocusedIdx(nextBlank.index);
  };

  const checkAll = () => {
    const allRight = blanks.every((b) =>
      b.answers.some((a) => a.toLowerCase() === (inputs[b.index] ?? '').trim().toLowerCase())
    );
    setChecked(allRight);
    playFeedbackTone(allRight ? 'celebrate' : 'wrong', muted);
    if (allRight) onCompleteTask(taskId);
  };

  const revealAll = () => {
    const next: Record<number, string> = {};
    blanks.forEach((b) => {
      next[b.index] = b.answers[0];
    });
    setInputs(next);
    setChecked(true);
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{instruction}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => speakEnglish(fullAudioText, 0.88)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-800 text-xs font-semibold cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            Nghe đoạn mẫu
          </button>
          <button
            type="button"
            onClick={() => setShowVi((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            {showVi ? 'Ẩn dịch' : 'Xem dịch'}
          </button>
        </div>
      </div>

      {/* Clickable 8-word bank */}
      <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-4 space-y-2">
        <p className="text-xs font-extrabold uppercase tracking-wider text-amber-900">
          Kho 8 từ gợi ý (Chỉ dùng 5 từ phù hợp · Bấm chọn ô trống rồi bấm từ bên dưới)
        </p>
        <div className="flex flex-wrap gap-2">
          {wordBank.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => pickWord(w)}
              className="px-3.5 py-1.5 rounded-xl bg-white border border-amber-300 hover:bg-amber-100 text-slate-900 text-sm font-bold cursor-pointer transition-colors"
            >
              {w}
            </button>
          ))}
        </div>
      </div>

      {/* Inline paragraph */}
      <div className="rounded-2xl bg-sky-50/40 border border-sky-200 p-4 sm:p-5 text-sm sm:text-base leading-loose text-slate-900">
        {segments.map((seg, i) => {
          const blank = blanks[i];
          const val = blank ? inputs[blank.index] ?? '' : '';
          const isCorrect =
            blank &&
            checked !== null &&
            blank.answers.some((a) => a.toLowerCase() === val.trim().toLowerCase());
          const isWrong = blank && checked !== null && !isCorrect;
          const isFocused = blank && focusedIdx === blank.index;

          return (
            <React.Fragment key={i}>
              <span>{seg}</span>
              {blank && (
                <span className="inline-flex items-center gap-1 mx-1 align-middle">
                  <span className="text-xs font-extrabold text-sky-700">({blank.index})</span>
                  <input
                    type="text"
                    value={val}
                    onFocus={() => setFocusedIdx(blank.index)}
                    onChange={(e) => {
                      setInputs((prev) => ({ ...prev, [blank.index]: e.target.value }));
                      setChecked(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') checkAll();
                    }}
                    placeholder="..."
                    className={`w-28 px-2 py-0.5 rounded-lg border-2 text-center text-sm font-bold bg-white focus:outline-none ${
                      isCorrect
                        ? 'border-emerald-500 text-emerald-800 bg-emerald-50'
                        : isWrong
                        ? 'border-rose-500 text-rose-800 bg-rose-50'
                        : isFocused
                        ? 'border-sky-600 text-sky-900'
                        : 'border-sky-300 text-sky-900'
                    }`}
                  />
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {showVi && (
        <div className="rounded-xl bg-amber-50/80 border border-amber-200 p-3.5 text-xs sm:text-sm text-amber-950 leading-relaxed">
          <strong>Bản dịch tham khảo:</strong> {translationVi}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={checkAll}
          className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs sm:text-sm font-bold cursor-pointer"
        >
          Kiểm tra bài điền từ
        </button>
        <button
          type="button"
          onClick={revealAll}
          className="px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-semibold cursor-pointer"
        >
          Xem đáp án
        </button>
        <button
          type="button"
          onClick={() => {
            setInputs({});
            setChecked(null);
            setFocusedIdx(1);
          }}
          className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
        >
          Làm lại
        </button>
        {checked === true && (
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700">
            <CheckCircle2 className="w-4 h-4" />
            Tuyệt vời! 5/5 từ chính xác hoàn toàn.
          </span>
        )}
        {checked === false && (
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-rose-700">
            <XCircle className="w-4 h-4" />
            Kiểm tra lại các ô viền đỏ nhé!
          </span>
        )}
      </div>
    </section>
  );
};

/* =========================================================
   MAIN COMPONENT: PAGES 126 -> 146 VIEW
   ========================================================= */
export const Pages126To146View: React.FC<Pages126To146ViewProps> = ({
  activePage,
  completedTaskIds,
  onCompleteTask,
  muted,
}) => {
  // Interactive State: Page 127 School Canteen Builder
  const [selectedCanteen, setSelectedCanteen] = useState(U17_CANTEEN_PRESETS[0]);

  // Interactive State: Page 136 Viet Nam Weather Forecast & 4 Seasons Studio
  const [selectedCity, setSelectedCity] = useState(U18_CITY_FORECASTS[0]);
  const [selectedSeason, setSelectedSeason] = useState(U18_SEASON_CARDS[0]);

  // Interactive State: Page 145 Viet Nam Landmark Explorer
  const [selectedLandmark, setSelectedLandmark] = useState(U19_LANDMARK_PRESETS[0]);

  return (
    <div className="space-y-6">
      {/* =========================================================
          PAGE 126: UNIT 17 OPENING & VOCAB PART 1 (17 WORDS)
         ========================================================= */}
      {activePage === 126 && (
        <div className="space-y-6">
          <section className="bg-white border border-amber-200 rounded-3xl p-6 sm:p-7 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700">
                  Unit 17 · Trang 126 – 133 · Đồ ăn, Đồ uống & Đơn vị đo lường
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                  What would you like to eat?
                </h2>
                <p className="text-sm text-slate-600">
                  Bạn muốn ăn gì nào? — Học 28 từ vựng chuẩn sách giáo khoa, 6 đơn vị đựng đồ ăn/đồ uống & phân biệt chắc chắn <strong>How much / How many</strong>.
                </p>
              </div>
              <button
                type="button"
                onClick={() => speakEnglish('What would you like to eat? I would like a bowl of noodles, please.', 0.9)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold cursor-pointer shrink-0"
              >
                <Volume2 className="w-4 h-4" />
                Nghe câu chủ đề
              </button>
            </div>
          </section>

          <VocabCardsGrid
            words={U17_VOCAB_PAGE126}
            title="Từ vựng Trang 126 (17 từ · Bấm loa nghe chuẩn & loa rùa nghe chậm)"
          />
        </div>
      )}

      {/* =========================================================
          PAGE 127: 11 VOCAB + GRAMMAR 1 & 2 + CANTEEN BUILDER
         ========================================================= */}
      {activePage === 127 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U17_VOCAB_PAGE127}
            title="11 từ vựng còn lại của Unit 17 (Trang 127 · Trọn bộ 28 từ Unit 17)"
          />

          <FoodQuantityDiagram />

          {/* Grammar Boxes 1 & 2 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white border border-amber-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-base text-slate-900">
                  1. Hỏi muốn ăn / uống gì (Lịch sự)
                </h3>
                <button
                  type="button"
                  onClick={() =>
                    speakEnglish(
                      "What would you like to eat? I'd like a bowl of noodles, please. What would you like to drink? I'd like a glass of apple juice, please.",
                      0.88
                    )
                  }
                  className="p-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 cursor-pointer"
                  aria-label="Nghe mẫu câu 1"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <div className="rounded-xl bg-amber-50/70 border border-amber-200 p-3.5 text-sm space-y-1.5">
                <p className="font-bold text-amber-950">
                  What would + S + like to eat / drink?
                </p>
                <p className="font-bold text-emerald-800">
                  → S + would like (&apos;d like) + đơn vị + of + món, please.
                </p>
              </div>
              <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5">
                <li>
                  • <strong>What would you like to eat?</strong> — I&apos;d like <strong>a packet of biscuits</strong>, please.
                </li>
                <li>
                  • <strong>What would she like to drink?</strong> — She&apos;d like <strong>a carton of milk</strong>.
                </li>
              </ul>
            </div>

            <div className="bg-white border border-sky-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-base text-slate-900">
                  2. Hỏi số lượng ăn / uống hằng ngày
                </h3>
                <button
                  type="button"
                  onClick={() =>
                    speakEnglish(
                      'How much water do you drink every day? I drink three bottles. How many bananas do you eat every day? I eat two bananas.',
                      0.88
                    )
                  }
                  className="p-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 cursor-pointer"
                  aria-label="Nghe mẫu câu 2"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <div className="rounded-xl bg-sky-50/70 border border-sky-200 p-3.5 text-sm space-y-1.5">
                <p className="font-bold text-sky-950">
                  How much + N (không đếm được) + do/does + S + eat/drink?
                </p>
                <p className="font-bold text-emerald-800">
                  How many + N (số nhiều) + do/does + S + eat/drink?
                </p>
              </div>
              <p className="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
                <strong>Lưu ý sửa lỗi in sách:</strong> Trong sách trang 128 có câu in nhầm <em>“How many rice”</em> — chuẩn ngữ pháp tiếng Anh bắt buộc là <strong>How much rice</strong> (vì rice không đếm được)!
              </p>
            </div>
          </section>

          {/* Interactive School Canteen Order & Quantity Builder */}
          <section className="bg-white border border-amber-200 rounded-3xl p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700 inline-flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5" />
                  Xưởng gọi món Căng tin tương tác · Unit 17
                </p>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Chọn 1 món ở Căng tin để luyện gọi món & hỏi How much / How many
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {U17_CANTEEN_PRESETS.map((item) => {
                const active = selectedCanteen.id === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSelectedCanteen(item);
                      speakEnglish(item.orderAnswer, 0.9);
                    }}
                    className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      active
                        ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-200'
                        : 'bg-slate-50/70 border-slate-200 hover:border-amber-300'
                    }`}
                  >
                    <MiniPictureIcon iconKey={item.iconKey} className="w-12 h-12" />
                    <span className="text-xs font-extrabold text-slate-900">{item.phrase}</span>
                    <span className="text-[11px] text-slate-500">
                      {item.containerVi} {item.foodVi}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-extrabold uppercase text-amber-800">
                    Mẫu 1 · Gọi món ({selectedCanteen.kind === 'eat' ? 'Đồ ăn' : 'Đồ uống'})
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      speakEnglish(`${selectedCanteen.orderQuestion} ${selectedCanteen.orderAnswer}`, 0.88)
                    }
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-amber-200 text-amber-900 text-xs font-semibold cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    Nghe
                  </button>
                </div>
                <p className="text-sm font-semibold text-slate-700">{selectedCanteen.orderQuestion}</p>
                <p className="text-base font-extrabold text-slate-900">{selectedCanteen.orderAnswer}</p>
              </div>

              <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-extrabold uppercase text-sky-800">
                    Mẫu 2 · Hỏi lượng hằng ngày ({selectedCanteen.countableType === 'much' ? 'HOW MUCH' : 'HOW MANY'})
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      speakEnglish(
                        `${selectedCanteen.quantityQuestion} ${selectedCanteen.quantityAnswer}`,
                        0.88
                      )
                    }
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-sky-200 text-sky-900 text-xs font-semibold cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    Nghe
                  </button>
                </div>
                <p className="text-sm font-semibold text-slate-700">{selectedCanteen.quantityQuestion}</p>
                <p className="text-base font-extrabold text-slate-900">{selectedCanteen.quantityAnswer}</p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-xs sm:text-sm text-emerald-950 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Mẹo nhớ nhanh:</strong> {selectedCanteen.tip}
              </span>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 128: UNIT 17 TASK 1 (ODD) & TASK 2 (Q1–8)
         ========================================================= */}
      {activePage === 128 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 1 · Circle the odd one out (5 câu · Trang 128)"
            instruction="Chọn 1 từ khác nhóm nghĩa với 3 từ còn lại và xem giải thích tiếng Việt ngay."
            items={U17_TASK1_ODD}
            speakOptions
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
          <ChoiceExerciseBlock
            title="Task 2 · Choose the best answer (Phần 1 · Câu 1–8 · Trang 128)"
            instruction="Chọn đáp án đúng nhất A, B, C hoặc D. (Câu 8 đã hiệu đính chuẩn: Watermelon là fruit!)."
            items={U17_TASK2_P128}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 129: UNIT 17 TASK 2 (Q9–17)
         ========================================================= */}
      {activePage === 129 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 2 · Choose the best answer (Phần 2 · Câu 9–17 · Trang 129)"
            instruction="Hoàn thành 9 câu trắc nghiệm tiếp theo về a/an/some, danh từ đếm được và giới từ."
            items={U17_TASK2_P129}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 130: UNIT 17 TASK 3 (5 DEFS) & TASK 4 (TOM T/F)
         ========================================================= */}
      {activePage === 130 && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-4 flex items-center gap-3">
            <MiniPictureIcon iconKey="bowl" className="w-12 h-12 shrink-0" />
            <div className="text-xs sm:text-sm text-amber-950">
              <strong>Ví dụ mẫu (0):</strong> Food in the form of long, thin strips → <strong>noodles</strong> (mì sợi).
            </div>
          </div>

          <PictureFillBlock
            title="Task 3 · Read and write the words (5 câu đố thực phẩm · Trang 130)"
            instruction="Đọc định nghĩa tiếng Anh kết hợp quan sát tranh minh họa để viết đúng tên món ăn / đồ uống."
            items={U17_TASK3_DEFS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <TrueFalseReadingBlock
            title={U17_TASK4_TOM_READING.title}
            passage={U17_TASK4_TOM_READING.passage}
            passageVi={U17_TASK4_TOM_READING.passageVi}
            example="0. Tom never misses breakfast. → True (Tom luôn ăn sáng mỗi ngày)."
            statements={U17_TASK4_TOM_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 131: UNIT 17 TASK 5 (MINH-LYLY) & TASK 6 (LUCY)
         ========================================================= */}
      {activePage === 131 && (
        <div className="space-y-6">
          <DialogueSentenceFillBlock
            title="Task 5 · Complete the dialogue (Hội thoại Minh & LyLy · Trang 131)"
            instruction="Chọn 5 câu (a–e) để hoàn thành cuộc trò chuyện gọi đồ ăn và đồ uống giữa Minh và LyLy."
            options={U17_TASK5_OPTIONS}
            lines={U17_TASK5_LINES}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <InlinePictureCloze
            taskId="p131-u17t6-all"
            title="Task 6 · Look at the pictures and complete the text (Bạn Lucy thích đồ ngọt · Trang 131)"
            subtitle="Quan sát 5 hình minh họa để điền từ thích hợp vào câu chuyện của Lucy."
            exampleBadge={{ label: 'countryside', iconKey: 'park' }}
            segments={[
              'This is Lucy. She lives with her parents in the (0) countryside. She likes sweet things very much. In the morning, she has two packets of ',
              ' and a glass of ',
              ' for breakfast. After lunch, she eats ',
              ' of chocolate. In the afternoon, she eats a big ',
              '. After dinner, she eats a packet of candy. Yesterday, she had a terrible ',
              '. The dentist said that she should eat sweet things only twice a week, and brush her teeth after meals.',
            ]}
            blanks={U17_TASK6_LUCY_BLANKS}
            fullAudioText="This is Lucy. She lives with her parents in the countryside. She likes sweet things very much. In the morning, she has two packets of biscuits and a glass of milk for breakfast. After lunch, she eats a bar of chocolate. In the afternoon, she eats a big cake. After dinner, she eats a packet of candy. Yesterday, she had a terrible toothache. The dentist said that she should eat sweet things only twice a week, and brush her teeth after meals."
            translationVi="Đây là Lucy. Bạn ấy sống cùng bố mẹ ở vùng quê. Bạn ấy rất thích đồ ngọt. Buổi sáng, bạn ấy ăn hai gói bánh quy và uống một cốc sữa cho bữa sáng. Sau bữa trưa, bạn ấy ăn một thanh sô-cô-la. Buổi chiều, bạn ấy ăn một chiếc bánh kem lớn. Sau bữa tối, bạn ấy ăn một gói kẹo. Hôm qua bạn ấy bị đau răng khủng khiếp. Nha sĩ dặn bạn ấy chỉ nên ăn đồ ngọt 2 lần một tuần và đánh răng sau các bữa ăn."
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 132: UNIT 17 TASK 7 (THU MC) & TASK 8 (CONTAINERS)
         ========================================================= */}
      {activePage === 132 && (
        <div className="space-y-6">
          <section className="bg-white border border-sky-200 rounded-2xl p-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display font-bold text-lg text-slate-900">
                Đoạn văn bài Task 7 · Bữa ăn hằng ngày của Thu (Trang 132)
              </h3>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    "Hi! My name's Thu. I'm in grade 5. My sister and I eat our breakfast at school. She likes some noodles and a hot drink. I would like some bread and some milk. We don't have lunch at school. We have lunch at home. We have rice, chicken, cabbage and some apples for lunch. Apple is my favorite fruit.",
                    0.88
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-800 text-xs font-semibold cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Nghe đoạn văn mẫu
              </button>
            </div>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed bg-sky-50/50 border border-sky-100 rounded-xl p-4">
              Hi! My name&apos;s Thu. I&apos;m in grade 5. My sister and I <strong>(1) _____</strong> our breakfast at school. She <strong>(2) _____</strong> some noodles and a hot drink. I <strong>(3) _____</strong> some bread and some milk. We don&apos;t have lunch at school. We have lunch at home. We have rice, chicken, cabbage and some apples <strong>(4) _____</strong> lunch. Apple is my <strong>(5) _____</strong> fruit.
            </p>
          </section>

          <ChoiceExerciseBlock
            title="Task 7 · Read and choose the best word (5 câu · Trang 132)"
            instruction="Chọn từ đúng nhất cho 5 chỗ trống trong bài giới thiệu của bạn Thu."
            items={U17_TASK7_THU_MC}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <PictureFillBlock
            title="Task 8 · Look at the pictures and write the missing words (5 câu · Trang 132)"
            instruction="Nhìn tranh viết đúng từ chỉ đơn vị đựng (chú ý thêm -s khi số lượng từ 2 trở lên!)."
            items={U17_TASK8_PICTURES}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 133: UNIT 17 TASK 9 (ORDERS) & TASK 10 (WRITING)
         ========================================================= */}
      {activePage === 133 && (
        <div className="space-y-6">
          <SentenceOrderBlock
            title="Task 9 · Put the words in order (Sắp xếp 5 câu chuẩn · Trang 133)"
            instruction="Bấm lần lượt từng thẻ từ để xếp thành câu hỏi và câu trả lời hoàn chỉnh."
            items={U17_TASK9_ORDERS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <GuidedWritingBlock
            id="p133-u17t10-write"
            title="Task 10 · Write about your eating and drinking habits (Trang 133)"
            instruction="Trả lời 5 câu hỏi gợi ý bên dưới để tạo đoạn văn ngắn về món ăn và đồ uống hằng ngày của em."
            prompts={U17_TASK10_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 134: UNIT 18 OPENING & VOCAB PART 1 (20 WORDS)
         ========================================================= */}
      {activePage === 134 && (
        <div className="space-y-6">
          <section className="bg-white border border-sky-200 rounded-3xl p-6 sm:p-7 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
                  Unit 18 · Trang 134 – 143 · Dự báo Thời tiết & Bốn mùa trong năm
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                  What will the weather be like tomorrow?
                </h2>
                <p className="text-sm text-slate-600">
                  Thời tiết ngày mai sẽ như thế nào? — Nắm vững 28 từ vựng thời tiết & bốn mùa, thì tương lai <strong>will be</strong> và bản tin thời tiết 3 miền Việt Nam.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish("What will the weather be like tomorrow? It'll be cool and sunny.", 0.9)
                }
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-bold cursor-pointer shrink-0"
              >
                <Volume2 className="w-4 h-4" />
                Nghe câu chủ đề
              </button>
            </div>
          </section>

          <VocabCardsGrid
            words={U18_VOCAB_PAGE134}
            title="Từ vựng Trang 134 (20 từ · Thời tiết, nhiệt độ & 4 mùa)"
          />
        </div>
      )}

      {/* =========================================================
          PAGE 135: UNIT 18 VOCAB PART 2 (8 WORDS) + GRAMMAR 1 & 2
         ========================================================= */}
      {activePage === 135 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U18_VOCAB_PAGE135}
            title="8 từ vựng cuối của Unit 18 (Trang 135 · Trọn bộ 28 từ Unit 18)"
          />

          <WeatherSeasonsDiagram />

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white border border-sky-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-base text-slate-900">
                  1. Hỏi dự báo thời tiết ngày mai
                </h3>
                <button
                  type="button"
                  onClick={() =>
                    speakEnglish(
                      "What will the weather be like tomorrow? It'll be cold and snowy.",
                      0.88
                    )
                  }
                  className="p-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 cursor-pointer"
                  aria-label="Nghe mẫu câu dự báo"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <div className="rounded-xl bg-sky-50/70 border border-sky-200 p-3.5 text-sm space-y-1">
                <p className="font-bold text-sky-950">What will the weather be like tomorrow?</p>
                <p className="font-bold text-emerald-800">→ It&apos;ll be (It will be) + tính từ thời tiết.</p>
              </div>
              <p className="text-xs text-slate-600">
                Ví dụ: <strong>It&apos;ll be hot and sunny tomorrow.</strong> (Ngày mai trời sẽ nóng và có nắng.)
              </p>
            </div>

            <div className="bg-white border border-emerald-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-base text-slate-900">
                  2. Hỏi đặc điểm từng mùa ở nước bạn
                </h3>
                <button
                  type="button"
                  onClick={() =>
                    speakEnglish(
                      "What's spring like in your country? It's usually warm. There are lots of flowers.",
                      0.88
                    )
                  }
                  className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 cursor-pointer"
                  aria-label="Nghe mẫu câu mùa"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <div className="rounded-xl bg-emerald-50/70 border border-emerald-200 p-3.5 text-sm space-y-1">
                <p className="font-bold text-emerald-950">What&apos;s + mùa + like in your country?</p>
                <p className="font-bold text-sky-800">→ It&apos;s usually + tính từ. There is/are ...</p>
              </div>
              <p className="text-xs text-slate-600">
                Ví dụ: <strong>What&apos;s winter like in your country?</strong> — It&apos;s usually cold. There is a lot of wind.
              </p>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 136: GRAMMAR 3–4 + INTERACTIVE WEATHER & SEASONS STUDIO
         ========================================================= */}
      {activePage === 136 && (
        <div className="space-y-6">
          {/* Grammar 3 & 4 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white border border-amber-200 rounded-2xl p-5 space-y-2.5">
              <h3 className="font-display font-bold text-base text-slate-900">
                3. Hỏi mùa yêu thích & số mùa trong năm
              </h3>
              <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
                <li>
                  • <strong>What&apos;s your favourite season?</strong> → It&apos;s autumn. / I like autumn because it&apos;s cool.
                </li>
                <li>
                  • <strong>How many seasons are there in Viet Nam?</strong> → There are four seasons in the North and two seasons in the South.
                </li>
              </ul>
            </div>

            <div className="bg-white border border-sky-200 rounded-2xl p-5 space-y-2.5">
              <h3 className="font-display font-bold text-base text-slate-900">
                4. Hỏi thời tiết & hoạt động trong từng mùa
              </h3>
              <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
                <li>
                  • <strong>What&apos;s the weather like in + mùa?</strong> → It&apos;s hot and sunny in summer.
                </li>
                <li>
                  • <strong>What do you usually do in + mùa?</strong> → I usually go swimming in summer.
                </li>
              </ul>
            </div>
          </section>

          {/* Interactive 1: Viet Nam Weather Forecast TV Studio */}
          <section className="bg-white border border-sky-200 rounded-3xl p-5 sm:p-6 space-y-5">
            <div className="space-y-1">
              <p className="text-xs font-extrabold uppercase tracking-wider text-sky-700 inline-flex items-center gap-1.5">
                <CloudSun className="w-4 h-4" />
                Trạm Dự báo Thời tiết Việt Nam · Tương tác
              </p>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Chọn 1 thành phố để nghe bản tin dự báo ngày mai (“It will be...”)
              </h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {U18_CITY_FORECASTS.map((city) => {
                const active = selectedCity.id === city.id;
                return (
                  <button
                    key={city.id}
                    type="button"
                    onClick={() => {
                      setSelectedCity(city);
                      speakEnglish(city.forecastSentence, 0.88);
                    }}
                    className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                      active
                        ? 'bg-sky-50 border-sky-500 ring-2 ring-sky-200'
                        : 'bg-slate-50/70 border-slate-200 hover:border-sky-300'
                    }`}
                  >
                    <MiniPictureIcon iconKey={city.iconKey} className="w-12 h-12 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-extrabold text-slate-900 truncate">{city.cityVi}</p>
                      <p className="text-xs font-bold text-sky-700">{city.temp}</p>
                      <p className="text-[11px] text-slate-500 truncate">{city.adjectives}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="rounded-2xl bg-slate-900 text-white p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <MiniPictureIcon iconKey={selectedCity.iconKey} className="w-14 h-14 shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-sky-300">
                      {selectedCity.regionVi} · {selectedCity.temp}
                    </p>
                    <p className="font-display text-lg sm:text-xl font-extrabold">
                      {selectedCity.forecastSentence}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => speakEnglish(selectedCity.forecastSentence, 0.88)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  Đọc bản tin
                </button>
              </div>
              <p className="text-sm text-sky-100">{selectedCity.forecastSentenceVi}</p>
              <p className="text-xs text-amber-200 border-t border-white/10 pt-2.5">
                <strong>Lời khuyên:</strong> {selectedCity.adviceVi}
              </p>
            </div>
          </section>

          {/* Interactive 2: 4 Seasons Explorer */}
          <section className="bg-white border border-emerald-200 rounded-3xl p-5 sm:p-6 space-y-4">
            <h3 className="font-display font-bold text-lg text-slate-900">
              Khám phá 4 mùa trong năm & Hoạt động yêu thích
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
              {U18_SEASON_CARDS.map((s) => {
                const active = selectedSeason.id === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setSelectedSeason(s);
                      speakEnglish(`${s.question} ${s.answer}`, 0.88);
                    }}
                    className={`p-3 rounded-2xl border flex items-center gap-2.5 text-left transition-all cursor-pointer ${
                      active
                        ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-200'
                        : 'bg-slate-50 border-slate-200 hover:border-emerald-300'
                    }`}
                  >
                    <MiniPictureIcon iconKey={s.iconKey} className="w-11 h-11 shrink-0" />
                    <div>
                      <p className="text-sm font-extrabold text-slate-900">{s.seasonEn}</p>
                      <p className="text-xs text-slate-500">{s.seasonVi}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="rounded-2xl bg-emerald-50/60 border border-emerald-200 p-4 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-bold text-emerald-950">{selectedSeason.question}</p>
                <button
                  type="button"
                  onClick={() =>
                    speakEnglish(`${selectedSeason.answer} ${selectedSeason.activity}`, 0.88)
                  }
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white border border-emerald-200 text-emerald-800 text-xs font-semibold cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Nghe miêu tả
                </button>
              </div>
              <p className="text-base font-extrabold text-slate-900">{selectedSeason.answer}</p>
              <p className="text-xs text-slate-600">{selectedSeason.answerVi}</p>
              <p className="text-sm font-semibold text-sky-900 pt-2 border-t border-emerald-200/80">
                Hoạt động thường làm: {selectedSeason.activity}
              </p>
              <p className="text-xs text-slate-600">{selectedSeason.activityVi}</p>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 137: UNIT 18 TASK 1 (PHONETICS) & TASK 2 (ODD)
         ========================================================= */}
      {activePage === 137 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 1 · Choose the word whose underlined part is pronounced differently (5 câu · Trang 137)"
            instruction="Bấm vào loa bên cạnh từng đáp án để nghe so sánh phần nguyên âm trong ngoặc vuông [ ]!"
            items={U18_TASK1_PHONETICS}
            speakOptions
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
          <ChoiceExerciseBlock
            title="Task 2 · Odd one out (5 câu · Trang 137)"
            instruction="Tìm 1 từ khác loại với 3 từ còn lại (mùa, môn thể thao, động từ, danh từ, tính từ)."
            items={U18_TASK2_ODD}
            speakOptions
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 138: UNIT 18 TASK 3 (DEFS) & TASK 4 (AUSTRALIA T/F)
         ========================================================= */}
      {activePage === 138 && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 flex items-center gap-3">
            <MiniPictureIcon iconKey="forecast" className="w-12 h-12 shrink-0" />
            <div className="text-xs sm:text-sm text-sky-950">
              <strong>Ví dụ mẫu (0):</strong> A statement about what the weather will be like → <strong>forecast</strong> (dự báo thời tiết).
            </div>
          </div>

          <PictureFillBlock
            title="Task 3 · Read and write the words (5 câu đố thời tiết · Trang 138)"
            instruction="Đọc định nghĩa tiếng Anh kết hợp hình minh họa để viết đúng từ thời tiết / mùa."
            items={U18_TASK3_DEFS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <TrueFalseReadingBlock
            title={U18_TASK4_AUSTRALIA_READING.title}
            passage={U18_TASK4_AUSTRALIA_READING.passage}
            passageVi={U18_TASK4_AUSTRALIA_READING.passageVi}
            example="0. Australia has different types of weather. → True."
            statements={U18_TASK4_AUSTRALIA_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 139: UNIT 18 TASK 5 (Q1–13)
         ========================================================= */}
      {activePage === 139 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 5 · Choose the best answer (Phần 1 · Câu 1–13 · Trang 139)"
            instruction="Tổng ôn thì hiện tại tiếp diễn, trạng từ tần suất, How often / How many và thời tiết các mùa."
            items={U18_TASK5_P139}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 140: UNIT 18 TASK 5 (Q14–20) & TASK 6 (WEATHER CLOZE)
         ========================================================= */}
      {activePage === 140 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 5 · Choose the best answer (Phần 2 · Câu 14–20 · Trang 140)"
            instruction="Hoàn tất 7 câu trắc nghiệm còn lại của Task 5."
            items={U18_TASK5_P140}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <InlinePictureCloze
            taskId="p140-u18t6-all"
            title="Task 6 · Look at the pictures and complete the weather forecast (Trang 140)"
            subtitle="Quan sát 5 biểu tượng thời tiết ở Sa Pa, Hà Nội và Đà Nẵng để hoàn thành bản tin dự báo."
            exampleBadge={{ label: 'forecast', iconKey: 'forecast' }}
            segments={[
              'Good evening and welcome to the weather (0) forecast. What will the weather be like tomorrow? Well, in Sa Pa, it will be ',
              ' and very cold. In Ha Noi, it will be a warm but wet ',
              ' day. There will be heavy ',
              ' at night. The weather will be fine tomorrow in Da Nang. The temperature is between 22 to 26°C. It will be a ',
              ' day with lots of ',
              '.',
            ]}
            blanks={U18_TASK6_WEATHER_BLANKS}
            fullAudioText="Good evening and welcome to the weather forecast. What will the weather be like tomorrow? Well, in Sa Pa, it will be snowy and very cold. In Ha Noi, it will be a warm but wet spring day. There will be heavy rain at night. The weather will be fine tomorrow in Da Nang. The temperature is between 22 to 26 degrees Celsius. It will be a cool day with lots of clouds."
            translationVi="Chào buổi tối và mừng quý vị đến với bản tin dự báo thời tiết. Thời tiết ngày mai sẽ ra sao? Ở Sa Pa trời sẽ có tuyết và rất lạnh. Ở Hà Nội sẽ là một ngày xuân ấm áp nhưng ẩm ướt, đêm có mưa lớn. Ngày mai thời tiết ở Đà Nẵng đẹp, nhiệt độ từ 22 đến 26°C, trời mát mẻ và có nhiều mây."
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 141: UNIT 18 TASK 7 (5 WEATHER PICTURES)
         ========================================================= */}
      {activePage === 141 && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 flex items-center gap-3">
            <MiniPictureIcon iconKey="rainy" className="w-12 h-12 shrink-0" />
            <div className="text-xs sm:text-sm text-sky-950">
              <strong>Ví dụ mẫu (0):</strong> There is a lot of <strong>rain</strong> in summer. (Có rất nhiều mưa vào mùa hè.)
            </div>
          </div>

          <PictureFillBlock
            title="Task 7 · Look at the pictures and complete the sentences (5 câu · Trang 141)"
            instruction="Nhìn kỹ từng biểu tượng thời tiết để điền đúng tính từ hoặc danh từ số nhiều."
            items={U18_TASK7_PICTURES}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 142: UNIT 18 TASK 8 (WORD BANK) & TASK 9 (ORDERS)
         ========================================================= */}
      {activePage === 142 && (
        <div className="space-y-6">
          <WordBankParagraphBlock
            taskId="p142-u18t8-all"
            title="Task 8 · Fill in each blank with ONE suitable word from the box (Trang 142)"
            instruction="Chọn 5 từ phù hợp trong kho 8 từ để hoàn thành bài viết về mùa thu và mùa hè."
            wordBank={U18_TASK8_WORD_BANK}
            segments={[
              'My ',
              ' season is the fall. I like walking and I often walk in the parks near our house. I like the ',
              ' of the trees in the fall: brown, yellow, orange and red. I love summer, too. It’s always hot in my country. I go ',
              ' every day, and I like going out with ',
              ' friends in the long, warm evenings. I don’t often stay at home in the summer! I sometimes go to the beach ',
              ' my family for two weeks in August.',
            ]}
            blanks={U18_TASK8_BLANKS}
            fullAudioText="My favorite season is the fall. I like walking and I often walk in the parks near our house. I like the colors of the trees in the fall: brown, yellow, orange and red. I love summer, too. It's always hot in my country. I go swimming every day, and I like going out with my friends in the long, warm evenings. I don't often stay at home in the summer! I sometimes go to the beach with my family for two weeks in August."
            translationVi="Mùa yêu thích của mình là mùa thu. Mình thích đi bộ và thường dạo trong các công viên gần nhà. Mình yêu màu sắc của cây cối vào mùa thu: nâu, vàng, cam và đỏ. Mình cũng yêu mùa hè nữa. Đất nước mình mùa hè luôn nóng. Mình đi bơi mỗi ngày và thích đi chơi với bạn bè vào những buổi tối dài ấm áp. Mình ít khi ở nhà vào mùa hè! Thỉnh thoảng mình đi biển cùng gia đình hai tuần vào tháng 8."
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <SentenceOrderBlock
            title="Task 9 · Put the words in order (Sắp xếp 5 câu chuẩn · Trang 142)"
            instruction="Ghép các thẻ từ bị xáo trộn thành câu hỏi và câu miêu tả thời tiết chuẩn xác."
            items={U18_TASK9_ORDERS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 143: UNIT 18 TASK 10 (WRITING) & UNIT 19 OPENING
         ========================================================= */}
      {activePage === 143 && (
        <div className="space-y-6">
          <GuidedWritingBlock
            id="p143-u18t10-write"
            title="Unit 18 · Task 10: Write about the weather and seasons in your hometown (Trang 143)"
            instruction="Trả lời 5 câu hỏi gợi ý để tự viết đoạn văn giới thiệu các mùa và thời tiết ở quê hương em."
            prompts={U18_TASK10_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          {/* Unit 19 Opening Banner */}
          <section className="bg-white border border-emerald-200 rounded-3xl p-6 sm:p-7 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                  Mở đầu Unit 19 · Trang 143 – 146 · Danh lam thắng cảnh Việt Nam
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Which place would you like to visit?
                </h2>
                <p className="text-sm text-slate-600">
                  Bạn muốn ghé thăm địa điểm nào? — Khám phá 28 từ vựng danh thắng & mẫu câu khen ấn tượng <strong>more ... than I expected</strong>!
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    "Which place would you like to visit, Thien Mu Pagoda or Trang Tien Bridge? I'd like to visit Thien Mu Pagoda.",
                    0.88
                  )
                }
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold cursor-pointer shrink-0"
              >
                <Volume2 className="w-4 h-4" />
                Nghe câu chủ đề
              </button>
            </div>
          </section>

          <VocabCardsGrid
            words={U19_VOCAB_PAGE143}
            title="2 từ mở đầu Unit 19 trên Trang 143 (Đã sửa chuẩn nghĩa pagoda = ngôi chùa)"
          />
        </div>
      )}

      {/* =========================================================
          PAGE 144: UNIT 19 VOCABULARY (25 WORDS)
         ========================================================= */}
      {activePage === 144 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U19_VOCAB_PAGE144}
            title="Từ vựng Unit 19 · Trang 144 (25 từ · Danh thắng, địa điểm & tính từ cảm nhận)"
          />
        </div>
      )}

      {/* =========================================================
          PAGE 145: FINAL VOCAB + GRAMMAR 1–3 + LANDMARK EXPLORER + TASK 1
         ========================================================= */}
      {activePage === 145 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U19_VOCAB_PAGE145}
            title="Từ vựng cuối cùng của Unit 19 (Trang 145 · Trọn bộ 28 từ Unit 19)"
          />

          <LandmarkComparisonDiagram />

          {/* Grammar 1, 2, 3 Compact Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-emerald-200 rounded-2xl p-4 space-y-2">
              <p className="text-xs font-extrabold uppercase text-emerald-700">Mẫu 1 · Chọn 1 trong 2 nơi</p>
              <p className="text-sm font-bold text-slate-900">
                Which place would you like to visit, A or B?
              </p>
              <p className="text-xs text-emerald-800 font-semibold">
                → I&apos;d like to visit + A / B.
              </p>
            </div>
            <div className="bg-white border border-sky-200 rounded-2xl p-4 space-y-2">
              <p className="text-xs font-extrabold uppercase text-sky-700">Mẫu 2 · Hỏi đã đi đâu</p>
              <p className="text-sm font-bold text-slate-900">
                Where did you go last weekend?
              </p>
              <p className="text-xs text-sky-800 font-semibold">
                → I went to + địa điểm (quá khứ của go là went).
              </p>
            </div>
            <div className="bg-white border border-amber-200 rounded-2xl p-4 space-y-2">
              <p className="text-xs font-extrabold uppercase text-amber-700">Mẫu 3 · Khen hơn mong đợi</p>
              <p className="text-sm font-bold text-slate-900">
                What do you think of + địa điểm?
              </p>
              <p className="text-xs text-amber-900 font-semibold">
                → It&apos;s more attractive / bigger than I expected.
              </p>
            </div>
          </section>

          {/* Interactive Viet Nam Landmark Explorer */}
          <section className="bg-white border border-emerald-200 rounded-3xl p-5 sm:p-6 space-y-5">
            <div className="space-y-1">
              <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 inline-flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                Xưởng Khám phá Danh thắng Việt Nam · Unit 19
              </p>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Bấm chọn 1 địa danh nổi tiếng để luyện ghép câu hỏi chọn & câu khen “hơn mình tưởng”
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {U19_LANDMARK_PRESETS.map((lm) => {
                const active = selectedLandmark.id === lm.id;
                return (
                  <button
                    key={lm.id}
                    type="button"
                    onClick={() => {
                      setSelectedLandmark(lm);
                      speakEnglish(`${lm.thinkQuestion} ${lm.thinkAnswer}`, 0.88);
                    }}
                    className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      active
                        ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-200'
                        : 'bg-slate-50/70 border-slate-200 hover:border-emerald-300'
                    }`}
                  >
                    <MiniPictureIcon iconKey={lm.iconKey} className="w-12 h-12" />
                    <span className="text-xs font-extrabold text-slate-900">{lm.placeVi}</span>
                    <span className="text-[11px] text-slate-500 inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      {lm.cityVi}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-extrabold uppercase text-emerald-800">
                    Hội thoại 1 · Lựa chọn A hay B
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      speakEnglish(`${selectedLandmark.whichQuestion} ${selectedLandmark.whichAnswer}`, 0.88)
                    }
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-emerald-200 text-emerald-900 text-xs font-semibold cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    Nghe
                  </button>
                </div>
                <p className="text-sm font-semibold text-slate-700">{selectedLandmark.whichQuestion}</p>
                <p className="text-base font-extrabold text-slate-900">{selectedLandmark.whichAnswer}</p>
              </div>

              <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-extrabold uppercase text-sky-800">
                    Hội thoại 2 · Cảm nhận ({selectedLandmark.adjComparative})
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      speakEnglish(`${selectedLandmark.thinkQuestion} ${selectedLandmark.thinkAnswer}`, 0.88)
                    }
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-sky-200 text-sky-900 text-xs font-semibold cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    Nghe
                  </button>
                </div>
                <p className="text-sm font-semibold text-slate-700">{selectedLandmark.thinkQuestion}</p>
                <p className="text-base font-extrabold text-slate-900">{selectedLandmark.thinkAnswer}</p>
                <p className="text-xs text-slate-600">{selectedLandmark.thinkAnswerVi}</p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-xs sm:text-sm text-amber-950 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Ghi nhớ ngữ pháp:</strong> {selectedLandmark.tip}
              </span>
            </div>
          </section>

          <ChoiceExerciseBlock
            title="Task 1 · Odd one out (5 câu · Trang 145)"
            instruction="Chọn 1 từ khác loại về từ loại hoặc nhóm nghĩa trong mỗi câu."
            items={U19_TASK1_ODD}
            speakOptions
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 146: UNIT 19 TASK 2 (6 MC), TASK 3 (Q1–2) & CELEBRATION
         ========================================================= */}
      {activePage === 146 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 2 · Choose the best answer (6 câu · Trang 146)"
            instruction="Chọn đáp án đúng nhất để ôn so sánh hơn (more attractive), quá khứ (were), tương lai (will visit) và would like to visit."
            items={U19_TASK2_MC}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 flex items-center gap-3">
            <MiniPictureIcon iconKey="bridge" className="w-12 h-12 shrink-0" />
            <div className="text-xs sm:text-sm text-emerald-950">
              <strong>Ví dụ mẫu Task 3 (0):</strong> It is built over a river, road, or railway to allow people and vehicles to cross → <strong>bridge</strong> (cây cầu).
            </div>
          </div>

          <PictureFillBlock
            title="Task 3 · Read and write the words (Phần 1 trên Trang 146 · Câu 1–2)"
            instruction="Đọc định nghĩa tiếng Anh kết hợp hình minh họa để viết đúng tên địa điểm (Câu 3–5 nằm ở trang 147)."
            items={U19_TASK3_P146}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          {/* Completion Celebration Banner for Pages 1 -> 146 */}
          <section className="bg-emerald-600 text-white rounded-3xl p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-100 inline-flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-amber-300" />
                Chạm mốc hoàn thành Trang 1 → Trang 146!
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold">
                Tuyệt vời! Em đã chinh phục trọn vẹn Unit 1 → Unit 19 (553 từ vựng chuẩn sách)
              </h3>
              <p className="text-sm text-emerald-50 max-w-2xl">
                Toàn bộ 146 trang đầu tiên đã được đồng bộ đầy đủ với Xưởng gọi món Căng tin (Unit 17), Trạm Dự báo Thời tiết Việt Nam (Unit 18) và Xưởng Danh thắng Việt Nam (Unit 19). Hãy ghé Đấu trường IOE để thử sức ngay!
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/15 border border-white/25 text-sm font-bold shrink-0">
              <Sparkles className="w-4 h-4 text-amber-300" />
              553 từ đã đồng bộ
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
