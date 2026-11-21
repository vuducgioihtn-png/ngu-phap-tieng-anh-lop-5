import React, { useState } from 'react';
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  Eye,
  Lightbulb,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Trophy,
  Volume2,
  XCircle,
} from 'lucide-react';
import type { ParagraphBlank } from '../data/pages1to20Data';
import {
  type ImperativeRewriteItem,
  type LeaveOneOutItem,
  type MistakeItem,
  type ReadingQAItem,
  type VerbFormItem,
  U11_TASK10_JIM,
  U11_TASK11_WRITING,
  U11_TASK5_PAGE84,
  U11_TASK6_MISTAKES,
  U11_TASK7_SAM_BLANKS,
  U11_TASK8_P85,
  U11_TASK8_P86,
  U11_TASK9_P86,
  U11_TASK9_P87,
  U12_MAYBE_QUIZ,
  U12_SAFETY_SCENES,
  U12_TASK10_REWRITE,
  U12_TASK11_WRITING,
  U12_TASK1_MATCH,
  U12_TASK2_LETTERS,
  U12_TASK3_DEFS,
  U12_TASK4_MIKE_READING,
  U12_TASK5_FALLING_PASSAGE,
  U12_TASK5_QA,
  U12_TASK6_VERBS,
  U12_TASK7_SUMMER_BLANKS,
  U12_TASK8_PICTURES,
  U12_TASK9_P95,
  U12_TASK9_P96,
  U12_VOCAB_PAGE88,
  U12_VOCAB_PAGE89,
  U13_ACTIVITY_PRESETS,
  U13_FAMILY_PRESETS,
  U13_TASK1_ODD,
  U13_TASK2_P100,
  U13_TASK2_P99,
  U13_TASK3_DEFS,
  U13_TASK4_FISHING_READING,
  U13_TASK5_P101,
  U13_TASK5_P102,
  U13_TASK6_SUMMER_BLANKS,
  U13_TASK7_P102,
  U13_TASK7_P103,
  U13_TASK8_WRITING,
  U13_VOCAB_PAGE97,
  U13_VOCAB_PAGE98,
  U14_VOCAB_PAGE104,
  U14_WATERMELON_STORY_STEPS,
} from '../data/pages84to104Data';
import { playFeedbackTone, speakEnglish } from '../utils/speech';
import {
  ChoiceExerciseBlock,
  GuidedWritingBlock,
  MissingLettersBlock,
  PairMatchBlock,
  PictureFillBlock,
  SentenceOrderBlock,
  TrueFalseReadingBlock,
  VocabCardsGrid,
} from './PageExerciseWidgets';
import {
  FreeTimeGrammarDiagram,
  MiniPictureIcon,
  SafetyImperativeDiagram,
} from './PageVisuals';

interface Pages84To104ViewProps {
  activePage: number;
  completedTaskIds: string[];
  onCompleteTask: (taskId: string) => void;
  muted: boolean;
}

/* =========================================================
   HELPER 1: FIND & CORRECT MISTAKES BLOCK (PAGE 84)
   ========================================================= */
const MistakeCorrectBlock: React.FC<{
  title: string;
  instruction: string;
  items: MistakeItem[];
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ title, instruction, items, completedTaskIds, onCompleteTask, muted }) => {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [statusMap, setStatusMap] = useState<Record<string, 'correct' | 'wrong'>>({});
  const [revealedWrong, setRevealedWrong] = useState<Record<string, boolean>>({});

  const checkFix = (item: MistakeItem) => {
    const val = (inputs[item.id] ?? '').trim().toLowerCase().replace(/\s+/g, ' ');
    if (!val) return;
    const isRight =
      item.corrections.some((c) => c.toLowerCase() === val) ||
      item.correctedSentence.toLowerCase().replace(/[?.!]/g, '') === val.replace(/[?.!]/g, '');
    setStatusMap((prev) => ({ ...prev, [item.id]: isRight ? 'correct' : 'wrong' }));
    playFeedbackTone(isRight ? 'correct' : 'wrong', muted);
    if (isRight) onCompleteTask(item.id);
  };

  const revealFix = (item: MistakeItem) => {
    setRevealedWrong((prev) => ({ ...prev, [item.id]: true }));
    setInputs((prev) => ({ ...prev, [item.id]: item.corrections[0] }));
    setStatusMap((prev) => ({ ...prev, [item.id]: 'correct' }));
  };

  const renderHighlighted = (sentence: string, wrongPart: string, showHighlight: boolean) => {
    if (!showHighlight) return sentence;
    const idx = sentence.toLowerCase().indexOf(wrongPart.toLowerCase());
    if (idx === -1) return sentence;
    const before = sentence.slice(0, idx);
    const match = sentence.slice(idx, idx + wrongPart.length);
    const after = sentence.slice(idx + wrongPart.length);
    return (
      <>
        {before}
        <span className="px-1.5 py-0.5 rounded-md bg-rose-100 text-rose-800 line-through decoration-rose-600 decoration-2 font-extrabold">
          {match}
        </span>
        {after}
      </>
    );
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="space-y-1">
        <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{instruction}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {items.map((item) => {
          const status = statusMap[item.id];
          const done = completedTaskIds.includes(item.id);
          const showWrong = Boolean(revealedWrong[item.id] || status !== undefined);

          return (
            <div
              key={item.id}
              className={`p-4 rounded-2xl border space-y-2.5 transition-colors ${
                status === 'correct'
                  ? 'bg-emerald-50/70 border-emerald-300'
                  : status === 'wrong'
                  ? 'bg-rose-50/60 border-rose-300'
                  : 'bg-slate-50/70 border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                  <span className="font-extrabold text-sky-700 mr-1.5">{item.number}.</span>
                  {renderHighlighted(item.sentence, item.wrongPart, showWrong)}
                </p>
                <button
                  type="button"
                  onClick={() => speakEnglish(item.correctedSentence, 0.9)}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-sky-50 text-sky-700 cursor-pointer shrink-0"
                  title="Nghe câu đúng"
                  aria-label={`Nghe câu đúng số ${item.number}`}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <input
                  type="text"
                  value={inputs[item.id] ?? ''}
                  onChange={(e) => {
                    setInputs((prev) => ({ ...prev, [item.id]: e.target.value }));
                    setStatusMap((prev) => {
                      const next = { ...prev };
                      delete next[item.id];
                      return next;
                    });
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') checkFix(item);
                  }}
                  placeholder="Gõ từ sửa lại cho đúng..."
                  className="flex-1 min-w-0 px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button
                  type="button"
                  onClick={() => checkFix(item)}
                  className="px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold cursor-pointer shrink-0"
                >
                  Sửa
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setRevealedWrong((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                    }
                    className="text-amber-800 hover:text-amber-900 font-semibold cursor-pointer"
                  >
                    {revealedWrong[item.id] ? 'Ẩn chỗ sai' : 'Chỉ ra từ sai'}
                  </button>
                  <button
                    type="button"
                    onClick={() => revealFix(item)}
                    className="inline-flex items-center gap-1 text-slate-600 hover:text-sky-700 font-semibold cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Đáp án
                  </button>
                </div>
                {done && (
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Đã sửa đúng
                  </span>
                )}
              </div>

              {status && (
                <div
                  className={`rounded-xl px-3 py-2 text-xs border space-y-0.5 ${
                    status === 'correct'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-rose-50 border-rose-200 text-rose-900'
                  }`}
                >
                  <p>
                    <strong>{status === 'correct' ? 'Chính xác! ' : 'Chưa đúng rồi! '}</strong>
                    {status === 'correct'
                      ? item.explanation
                      : `Từ sai là "${item.wrongPart}". Thử sửa lại từ này nhé!`}
                  </p>
                  {status === 'correct' && (
                    <p className="font-bold text-emerald-800">→ {item.correctedSentence}</p>
                  )}
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
   HELPER 2: INLINE PICTURE CLOZE PARAGRAPH (PP. 85, 94, 102)
   ========================================================= */
const InlinePictureCloze: React.FC<{
  taskId: string;
  title: string;
  instruction: string;
  segments: string[];
  blanks: ParagraphBlank[];
  fullAudioText: string;
  translationVi: string;
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
  completedTaskIds,
  onCompleteTask,
  muted,
}) => {
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState<boolean | null>(null);
  const [showVi, setShowVi] = useState(false);

  const handleCheck = () => {
    const allRight = blanks.every((b) =>
      b.answers.some((a) => a.toLowerCase() === (inputs[b.index] ?? '').trim().toLowerCase())
    );
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
            onClick={() => speakEnglish(fullAudioText, 0.88)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            Nghe đoạn hoàn chỉnh
          </button>
          <button
            type="button"
            onClick={() => setShowVi((v) => !v)}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
          >
            {showVi ? 'Ẩn bản dịch' : 'Xem dịch tiếng Việt'}
          </button>
        </div>
      </div>

      {/* Visual icon cues */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {blanks.map((b) => (
          <div
            key={b.index}
            className="flex flex-col items-center text-center gap-1.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200"
          >
            <MiniPictureIcon iconKey={b.iconKey ?? 'book'} className="w-11 h-11" />
            <span className="text-[11px] font-bold text-slate-700 leading-snug">
              ({b.index}) {b.hint}
            </span>
          </div>
        ))}
      </div>

      {/* Inline paragraph with blanks */}
      <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/50 border border-sky-200 text-sm sm:text-base text-slate-900 leading-loose">
        {segments.map((seg, idx) => {
          const blank = blanks[idx];
          const val = blank ? inputs[blank.index] ?? '' : '';
          const isBlankRight =
            blank && checked !== null
              ? blank.answers.some((a) => a.toLowerCase() === val.trim().toLowerCase())
              : null;

          return (
            <React.Fragment key={idx}>
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
                    placeholder="..."
                    className={`w-28 sm:w-32 px-2.5 py-1 rounded-lg border text-sm font-bold text-center focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                      isBlankRight === true
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-900'
                        : isBlankRight === false
                        ? 'bg-rose-50 border-rose-400 text-rose-900'
                        : 'bg-white border-sky-300 text-slate-900'
                    }`}
                  />
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {showVi && (
        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-sm text-amber-950 leading-relaxed">
          <strong>Bản dịch tiếng Việt:</strong> {translationVi}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={handleCheck}
          className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold cursor-pointer"
        >
          Kiểm tra bài điền
        </button>
        <button
          type="button"
          onClick={handleReveal}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-sm font-semibold cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          Xem đáp án
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
        {completedTaskIds.includes(taskId) && (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 ml-auto">
            <CheckCircle2 className="w-4 h-4" />
            Hoàn thành
          </span>
        )}
      </div>

      {checked !== null && (
        <div
          className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm border ${
            checked
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : 'bg-rose-50 border-rose-200 text-rose-900'
          }`}
        >
          {checked ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          )}
          <p>
            {checked
              ? 'Xuất sắc! Em đã điền chính xác toàn bộ chỗ trống dựa theo tranh minh họa.'
              : 'Một vài ô viền đỏ chưa khớp. Em nhìn lại tranh gợi ý phía trên hoặc kiểm tra chính tả số ít/số nhiều nhé!'}
          </p>
        </div>
      )}
    </section>
  );
};

/* =========================================================
   HELPER 3: READING COMPREHENSION Q&A BLOCK (PAGE 93)
   ========================================================= */
const ReadingQABlock: React.FC<{
  title: string;
  passageEn: string;
  passageVi: string;
  questions: ReadingQAItem[];
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ title, passageEn, passageVi, questions, completedTaskIds, onCompleteTask, muted }) => {
  const [showVi, setShowVi] = useState(false);
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [statusMap, setStatusMap] = useState<Record<string, 'correct' | 'wrong'>>({});

  const checkAnswer = (q: ReadingQAItem) => {
    const val = (inputs[q.id] ?? '').trim().toLowerCase();
    if (!val) return;
    const matched = q.keywords.every((kw) => val.includes(kw.toLowerCase()));
    setStatusMap((prev) => ({ ...prev, [q.id]: matched ? 'correct' : 'wrong' }));
    playFeedbackTone(matched ? 'correct' : 'wrong', muted);
    if (matched) onCompleteTask(q.id);
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => speakEnglish(passageEn.replace(/\n/g, ' '), 0.88)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            Nghe bài đọc
          </button>
          <button
            type="button"
            onClick={() => setShowVi((v) => !v)}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
          >
            {showVi ? 'Ẩn dịch' : 'Xem dịch tiếng Việt'}
          </button>
        </div>
      </div>

      <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 sm:p-5 space-y-3">
        <p className="text-slate-900 text-sm sm:text-base leading-relaxed font-medium whitespace-pre-line">
          {passageEn}
        </p>
        {showVi && (
          <p className="text-sm text-slate-700 leading-relaxed pt-3 border-t border-amber-200 whitespace-pre-line">
            <strong>Dịch nghĩa:</strong> {passageVi}
          </p>
        )}
      </div>

      <div className="space-y-3.5">
        {questions.map((q) => {
          const status = statusMap[q.id];
          const done = completedTaskIds.includes(q.id);

          return (
            <div
              key={q.id}
              className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-2.5"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm sm:text-base font-bold text-slate-900">
                    {q.number}. {q.question}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{q.questionVi}</p>
                </div>
                {done && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                    Đã hoàn thành
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <input
                  type="text"
                  value={inputs[q.id] ?? ''}
                  onChange={(e) => {
                    setInputs((prev) => ({ ...prev, [q.id]: e.target.value }));
                    setStatusMap((prev) => {
                      const next = { ...prev };
                      delete next[q.id];
                      return next;
                    });
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') checkAnswer(q);
                  }}
                  placeholder="Viết câu trả lời bằng tiếng Anh..."
                  className="flex-1 px-3 py-2 rounded-xl bg-white border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => checkAnswer(q)}
                    className="px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold cursor-pointer"
                  >
                    Kiểm tra
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setInputs((prev) => ({ ...prev, [q.id]: q.modelAnswer }));
                      setStatusMap((prev) => ({ ...prev, [q.id]: 'correct' }));
                    }}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-semibold cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Gợi ý mẫu
                  </button>
                  <button
                    type="button"
                    onClick={() => speakEnglish(q.modelAnswer, 0.9)}
                    className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-sky-50 text-sky-700 cursor-pointer"
                    aria-label="Nghe câu trả lời mẫu"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {status && (
                <div
                  className={`rounded-xl px-3 py-2 text-xs border ${
                    status === 'correct'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-rose-50 border-rose-200 text-rose-900'
                  }`}
                >
                  <p>
                    <strong>{status === 'correct' ? 'Tuyệt vời! ' : 'Gần đúng rồi! '}</strong>
                    {q.explanation}
                  </p>
                  <p className="font-bold text-slate-900 mt-0.5">Câu chuẩn: {q.modelAnswer}</p>
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
   HELPER 4: VERB FORM CONJUGATION BLOCK (PAGE 94)
   ========================================================= */
const VerbFormBlock: React.FC<{
  title: string;
  instruction: string;
  items: VerbFormItem[];
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ title, instruction, items, completedTaskIds, onCompleteTask, muted }) => {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [statusMap, setStatusMap] = useState<Record<string, 'correct' | 'wrong'>>({});

  const checkItem = (item: VerbFormItem) => {
    const blanks = item.parts
      .map((p, idx) => ({ p, key: `${item.id}-${idx}` }))
      .filter((x) => Boolean(x.p.answers));
    const allRight = blanks.every(({ p, key }) => {
      const val = (inputs[key] ?? '').trim().toLowerCase().replace(/\s+/g, ' ');
      return (p.answers ?? []).some((a) => a.toLowerCase() === val);
    });
    setStatusMap((prev) => ({ ...prev, [item.id]: allRight ? 'correct' : 'wrong' }));
    playFeedbackTone(allRight ? 'correct' : 'wrong', muted);
    if (allRight) onCompleteTask(item.id);
  };

  const revealItem = (item: VerbFormItem) => {
    const next: Record<string, string> = {};
    item.parts.forEach((p, idx) => {
      if (p.answers) next[`${item.id}-${idx}`] = p.answers[0];
    });
    setInputs((prev) => ({ ...prev, ...next }));
    setStatusMap((prev) => ({ ...prev, [item.id]: 'correct' }));
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="space-y-1">
        <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{instruction}</p>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const status = statusMap[item.id];
          const done = completedTaskIds.includes(item.id);

          return (
            <div
              key={item.id}
              className={`p-4 rounded-2xl border space-y-2.5 ${
                status === 'correct'
                  ? 'bg-emerald-50/70 border-emerald-300'
                  : status === 'wrong'
                  ? 'bg-rose-50/60 border-rose-300'
                  : 'bg-slate-50/70 border-slate-200'
              }`}
            >
              <div className="flex flex-wrap items-center gap-y-2 text-sm sm:text-base font-medium text-slate-900 leading-relaxed">
                <span className="font-extrabold text-sky-700 mr-1.5">{item.number}.</span>
                {item.parts.map((part, pIdx) => {
                  const key = `${item.id}-${pIdx}`;
                  return (
                    <React.Fragment key={key}>
                      <span>{part.text}</span>
                      {part.answers && (
                        <span className="inline-flex items-center gap-1 mx-1">
                          <span className="text-xs font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded-md">
                            ({part.verbCue})
                          </span>
                          <input
                            type="text"
                            value={inputs[key] ?? ''}
                            onChange={(e) => {
                              setInputs((prev) => ({ ...prev, [key]: e.target.value }));
                              setStatusMap((prev) => {
                                const next = { ...prev };
                                delete next[item.id];
                                return next;
                              });
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') checkItem(item);
                            }}
                            placeholder="chia từ..."
                            className="w-28 sm:w-32 px-2.5 py-1 rounded-lg bg-white border border-slate-300 text-sm font-bold text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                          />
                        </span>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => checkItem(item)}
                  className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold cursor-pointer"
                >
                  Kiểm tra
                </button>
                <button
                  type="button"
                  onClick={() => revealItem(item)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Đáp án
                </button>
                <button
                  type="button"
                  onClick={() => speakEnglish(item.fullSentence, 0.9)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 font-semibold cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Nghe câu đúng
                </button>
                {done && (
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-bold ml-auto">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Đã hoàn thành
                  </span>
                )}
              </div>

              {status && (
                <p
                  className={`text-xs rounded-xl px-3 py-2 border ${
                    status === 'correct'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-rose-50 border-rose-200 text-rose-900'
                  }`}
                >
                  <strong>{status === 'correct' ? 'Chính xác! ' : 'Chưa đúng thì! '}</strong>
                  {item.explanation}
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
   HELPER 5: IMPERATIVE POSITIVE <-> NEGATIVE FLIP (PAGE 96)
   ========================================================= */
const ImperativeFlipBlock: React.FC<{
  title: string;
  instruction: string;
  items: ImperativeRewriteItem[];
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ title, instruction, items, completedTaskIds, onCompleteTask, muted }) => {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [statusMap, setStatusMap] = useState<Record<string, 'correct' | 'wrong'>>({});

  const norm = (s: string) => s.trim().toLowerCase().replace(/[.!]+$/, '').replace(/\s+/g, ' ');

  const checkItem = (item: ImperativeRewriteItem) => {
    const val = norm(inputs[item.id] ?? '');
    if (!val) return;
    const isRight = item.answers.some((a) => norm(a) === val);
    setStatusMap((prev) => ({ ...prev, [item.id]: isRight ? 'correct' : 'wrong' }));
    playFeedbackTone(isRight ? 'correct' : 'wrong', muted);
    if (isRight) onCompleteTask(item.id);
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="space-y-1">
        <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{instruction}</p>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const status = statusMap[item.id];
          const done = completedTaskIds.includes(item.id);
          return (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-2.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-sm sm:text-base font-bold text-slate-900">
                    {item.number}. {item.original}
                  </p>
                  <p className="text-xs text-amber-800 font-medium">{item.originalVi}</p>
                </div>
                <span
                  className={`text-xs font-extrabold px-2.5 py-1 rounded-lg ${
                    item.direction === 'to-negative'
                      ? 'bg-rose-100 text-rose-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  {item.direction === 'to-negative' ? '+ → − (Thêm Don’t)' : '− → + (Bỏ Don’t)'}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <input
                  type="text"
                  value={inputs[item.id] ?? ''}
                  onChange={(e) => {
                    setInputs((prev) => ({ ...prev, [item.id]: e.target.value }));
                    setStatusMap((prev) => {
                      const next = { ...prev };
                      delete next[item.id];
                      return next;
                    });
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') checkItem(item);
                  }}
                  placeholder="Viết lại câu mệnh lệnh sau khi đổi..."
                  className="flex-1 px-3 py-2 rounded-xl bg-white border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => checkItem(item)}
                    className="px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold cursor-pointer"
                  >
                    Kiểm tra
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setInputs((prev) => ({ ...prev, [item.id]: item.answers[0] }));
                      setStatusMap((prev) => ({ ...prev, [item.id]: 'correct' }));
                    }}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-semibold cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Đáp án
                  </button>
                  <button
                    type="button"
                    onClick={() => speakEnglish(item.answers[0], 0.9)}
                    className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-sky-50 text-sky-700 cursor-pointer"
                    aria-label="Nghe câu sau khi đổi"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {done && !status && (
                <p className="text-xs font-bold text-emerald-700 inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Đã hoàn thành
                </p>
              )}

              {status && (
                <p
                  className={`text-xs rounded-xl px-3 py-2 border ${
                    status === 'correct'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-rose-50 border-rose-200 text-rose-900'
                  }`}
                >
                  <strong>{status === 'correct' ? 'Tuyệt vời! ' : 'Chưa đúng rồi! '}</strong>
                  {item.explanation}
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
   HELPER 6: LEAVE ONE OUT (CLICK EXTRA LETTER GAME, PP. 99-100)
   ========================================================= */
const LeaveOneOutBlock: React.FC<{
  title: string;
  instruction: string;
  items: LeaveOneOutItem[];
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ title, instruction, items, completedTaskIds, onCompleteTask, muted }) => {
  const [clickedMap, setClickedMap] = useState<Record<string, number>>({});

  const handleTapChar = (item: LeaveOneOutItem, charIdx: number) => {
    setClickedMap((prev) => ({ ...prev, [item.id]: charIdx }));
    const isRight = charIdx === item.extraIndex;
    playFeedbackTone(isRight ? 'correct' : 'wrong', muted);
    if (isRight) onCompleteTask(item.id);
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="space-y-1">
        <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{instruction}</p>
      </div>

      <div className="space-y-3.5">
        {items.map((item) => {
          const picked = clickedMap[item.id];
          const isSolved = picked === item.extraIndex || completedTaskIds.includes(item.id);
          const chars = item.wordWithExtra.split('');

          return (
            <div
              key={item.id}
              className={`p-4 rounded-2xl border space-y-3 transition-colors ${
                isSolved ? 'bg-emerald-50/70 border-emerald-300' : 'bg-slate-50/80 border-slate-200'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <MiniPictureIcon iconKey={item.iconKey} className="w-12 h-12 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-sky-700">
                      Câu {item.number} · Nghĩa: {item.meaningVi}
                    </p>
                    <p className="text-xs text-slate-500">
                      Bấm trực tiếp vào <strong>1 chữ cái bị thừa</strong> để xóa đi nhé!
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => speakEnglish(item.correctWord, 0.88)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:bg-sky-50 text-sky-700 text-xs font-semibold cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Nghe từ đúng
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {chars.map((ch, idx) => {
                  if (ch === ' ') {
                    return <span key={idx} className="w-4" aria-hidden="true" />;
                  }
                  const isExtra = idx === item.extraIndex;
                  const isPickedWrong = picked === idx && !isExtra;
                  const isRemoved = isSolved && isExtra;

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={isSolved}
                      onClick={() => handleTapChar(item, idx)}
                      className={`w-9 h-10 rounded-xl border text-base font-extrabold transition-all ${
                        isRemoved
                          ? 'bg-rose-100 border-rose-300 text-rose-700 line-through scale-90 opacity-60'
                          : isPickedWrong
                          ? 'bg-rose-500 border-rose-600 text-white'
                          : isSolved
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'bg-white border-slate-300 text-slate-900 hover:border-sky-500 hover:bg-sky-50 cursor-pointer'
                      }`}
                    >
                      {ch}
                    </button>
                  );
                })}
              </div>

              {isSolved && (
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900 bg-emerald-100/70 rounded-xl px-3 py-2 border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Chính xác! Từ đúng là <strong>{item.correctWord}</strong> — {item.tip}
                  </span>
                </div>
              )}

              {picked !== undefined && picked !== item.extraIndex && !isSolved && (
                <p className="text-xs text-rose-800 font-semibold inline-flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5 shrink-0" />
                  Chữ “{chars[picked]}” là chữ cần thiết đấy! Thử bấm loa nghe rồi tìm chữ thừa nhé.
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
   MAIN PAGES 84 -> 104 VIEW
   ========================================================= */
export const Pages84To104View: React.FC<Pages84To104ViewProps> = ({
  activePage,
  completedTaskIds,
  onCompleteTask,
  muted,
}) => {
  // Page 90: Interactive Home Safety Simulator
  const [selectedScene, setSelectedScene] = useState(U12_SAFETY_SCENES[0]);

  // Page 99: Interactive Family Free Time Builder
  const [selectedFamily, setSelectedFamily] = useState(U13_FAMILY_PRESETS[0]);
  const [selectedActivity, setSelectedActivity] = useState(U13_ACTIVITY_PRESETS[0]);

  // Page 104: Interactive Watermelon Storyboard
  const [activeStoryStep, setActiveStoryStep] = useState(1);

  return (
    <div className="space-y-6">
      {/* =========================================================
          PAGE 84: UNIT 11 TASK 5 (3 FINAL WORDS) + TASK 6 (18 MISTAKES)
         ========================================================= */}
      {activePage === 84 && (
        <div className="space-y-6">
          <MissingLettersBlock
            title="Task 5 (Trang 84 · 3 từ cuối 10, 20, 30) · Hoàn thành chính tả Unit 11"
            instruction="Điền chữ cái còn thiếu cho 3 từ cuối của bảng chính tả Unit 11 (scratch, both, knee)."
            items={U11_TASK5_PAGE84}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-950">
              <strong>Bí kíp săn lỗi sai Trang 84:</strong> Đọc kỹ 4 điểm hay bị bẫy nhất: (1) Mạo từ <strong>a / an</strong> (<em>an earache, a fever</em>), (2) Sau <strong>should / shouldn’t / can’t / doesn’t</strong> động từ luôn nguyên mẫu, (3) Quá khứ <strong>last night</strong> (<em>had, ate, didn’t</em>), (4) Nghĩa ngược <strong>should ↔ shouldn’t</strong>!
            </p>
          </div>

          <MistakeCorrectBlock
            title="Task 6 (Trang 84 · 18 câu) · Find the mistakes and correct them"
            instruction="Tìm lỗi sai trong từng câu rồi gõ từ sửa đúng vào ô (có thể bấm “Chỉ ra từ sai” nếu cần gợi ý)."
            items={U11_TASK6_MISTAKES}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 85: UNIT 11 TASK 7 (SAM'S FEVER) + TASK 8 (Q1-4)
         ========================================================= */}
      {activePage === 85 && (
        <div className="space-y-6">
          <InlinePictureCloze
            taskId="p85-u11t7-sam"
            title="Task 7 (Trang 84–85) · Đọc tranh điền 6 từ hoàn thành chuyện bé Sam bị sốt"
            instruction="Nhìn 6 biểu tượng gợi ý và điền từ tiếng Anh phù hợp vào từng chỗ trống (Câu mẫu 0: sunny)."
            segments={[
              'It was (0) sunny and hot yesterday. In the afternoon, my little brother Sam played ',
              ' with his friends in the playground. Later at night, Sam had a ',
              '. This morning, my mum took him to the ',
              '. The doctor said that he ',
              ' take a rest and eat a lot of ',
              ' like bananas, apples and grapes. He should not ',
              ' cold water and eat ice-cream.',
            ]}
            blanks={U11_TASK7_SAM_BLANKS}
            fullAudioText="It was sunny and hot yesterday. In the afternoon, my little brother Sam played football with his friends in the playground. Later at night, Sam had a fever. This morning, my mum took him to the hospital. The doctor said that he should take a rest and eat a lot of fruits like bananas, apples and grapes. He should not drink cold water and eat ice-cream."
            translationVi="Hôm qua trời nắng và nóng. Buổi chiều, em trai nhỏ Sam của mình chơi đá bóng với các bạn ở sân chơi. Tối muộn, Sam bị sốt. Sáng nay, mẹ đưa em ấy đến bệnh viện. Bác sĩ nói rằng em nên nghỉ ngơi và ăn nhiều hoa quả như chuối, táo và nho. Em không nên uống nước lạnh và ăn kem."
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <PictureFillBlock
            title="Task 8 (Trang 85 · Câu 1–4) · Look and write"
            instruction="Câu mẫu: She has a stomach ache. Hãy nhìn tranh và điền tên bệnh / lời khuyên đúng vào 4 câu dưới đây."
            items={U11_TASK8_P85}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 86: UNIT 11 TASK 8 (Q5) + TASK 9 (Q1-9)
         ========================================================= */}
      {activePage === 86 && (
        <div className="space-y-6">
          <PictureFillBlock
            title="Task 8 (Trang 86 · Câu 5) · Hoàn thành bài nhìn tranh viết câu"
            instruction="Điền 1 động từ nguyên mẫu thích hợp sau shouldn’t."
            items={U11_TASK8_P86}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <SentenceOrderBlock
            title="Task 9 (Trang 86 · Câu 1–9) · Put the words in order"
            instruction="Câu mẫu: I don't feel very well today. Bấm lần lượt từng thẻ từ để ghép 9 câu chuẩn ngữ pháp Unit 11."
            items={U11_TASK9_P86}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 87: UNIT 11 TASK 9 (Q10) + TASK 10 (JIM) + TASK 11 (WRITING)
         ========================================================= */}
      {activePage === 87 && (
        <div className="space-y-6">
          <SentenceOrderBlock
            title="Task 9 (Trang 87 · Câu 10) · Hoàn tất bài sắp xếp từ"
            instruction="Sắp xếp câu hỏi cuối cùng của Task 9."
            items={U11_TASK9_P87}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <section className="bg-sky-50/70 border border-sky-200 rounded-2xl p-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display font-bold text-lg text-slate-900">
                Đoạn văn Task 10 (Trang 87) · Một ngày lạnh giá của bạn Jim
              </h3>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    'Yesterday was a terribly cold day but Jim went out without warm clothes, so he had a bad fever. His mother took him to the doctor. The doctor gave him some aspirins and said, You should wear warm clothes and you should not go out. I think you will get better soon.',
                    0.88
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-sky-200 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Nghe đoạn văn hoàn chỉnh
              </button>
            </div>
            <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-medium">
              Yesterday <strong>(1) _____</strong> a terribly cold day but Jim <strong>(2) _____</strong> out without warm clothes, so he <strong>(3) _____</strong> a bad fever. His mother took him to the doctor. The doctor gave him <strong>(4) _____</strong> aspirins and said “You should <strong>(5) _____</strong> warm clothes and you shouldn’t go out. I think you will get better soon.”
            </p>
          </section>

          <ChoiceExerciseBlock
            title="Task 10 (Trang 87 · 5 câu) · Choose the correct answer A, B, C or D"
            instruction="Chọn đáp án đúng để điền vào 5 chỗ trống của đoạn văn phía trên."
            items={U11_TASK10_JIM}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <GuidedWritingBlock
            id="p87-u11t11-writing"
            title="Task 11 (Trang 87) · Viết về vấn đề sức khỏe của một người bạn và lời khuyên"
            instruction="Hoàn thành 5 câu gợi ý (hoặc bấm “Điền gợi ý mẫu”) để tạo đoạn văn chuẩn Unit 11 và nghe phát âm."
            prompts={U11_TASK11_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 88: UNIT 12 OPENING + 20 VOCAB WORDS
         ========================================================= */}
      {activePage === 88 && (
        <div className="space-y-6">
          <section className="bg-amber-50/80 border border-amber-200 rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
                Mở đầu Unit 12 · Trang 88 – 97
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                Don’t ride your bike too fast!
              </h2>
              <p className="text-sm text-slate-700">
                Chủ đề <strong>An toàn trong nhà & Phòng tránh tai nạn</strong>: học 32 từ vựng cốt lõi, câu mệnh lệnh ngăn cản <strong>Don’t + V!</strong> và cảnh báo hậu quả với <strong>Because you may + V</strong>.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <MiniPictureIcon iconKey="knife" className="w-12 h-12" />
              <MiniPictureIcon iconKey="stove" className="w-12 h-12" />
              <MiniPictureIcon iconKey="bike" className="w-12 h-12" />
            </div>
          </section>

          <VocabCardsGrid
            words={U12_VOCAB_PAGE88}
            title="20 từ vựng An toàn & Tai nạn (Trang 88 · Phần 1/2)"
          />
        </div>
      )}

      {/* =========================================================
          PAGE 89: UNIT 12 VOCAB PART 2 (12 WORDS) + GRAMMAR 1A-1B
         ========================================================= */}
      {activePage === 89 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U12_VOCAB_PAGE89}
            title="12 từ vựng Phòng tránh tai nạn (Trang 89 · Phần 2/2)"
          />

          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Ngữ pháp 1a & 1b (Trang 89) · Câu mệnh lệnh Khẳng định & Phủ định
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Câu mệnh lệnh dùng để <strong>ra lệnh, yêu cầu, hướng dẫn hoặc ngăn cản</strong> ai đó làm việc gì.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 space-y-3">
                <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                  1a. Khẳng định (+) · Bảo ai làm gì
                </p>
                <p className="font-display font-extrabold text-lg text-slate-900">
                  Động từ nguyên mẫu (V) + (O)!
                </p>
                <div className="space-y-2">
                  {[
                    { en: 'Open the door!', vi: 'Mở cửa ra!' },
                    { en: 'Sit down, please!', vi: 'Mời ngồi xuống!' },
                    { en: 'Be quiet!', vi: 'Hãy giữ trật tự!' },
                  ].map((ex) => (
                    <button
                      key={ex.en}
                      type="button"
                      onClick={() => speakEnglish(ex.en, 0.9)}
                      className="w-full text-left p-2.5 rounded-xl bg-white border border-emerald-100 hover:border-emerald-400 flex items-center justify-between gap-2 cursor-pointer"
                    >
                      <span className="text-sm">
                        <strong className="text-slate-900">{ex.en}</strong>{' '}
                        <span className="text-xs text-slate-500">({ex.vi})</span>
                      </span>
                      <Volume2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-4 space-y-3">
                <p className="text-xs font-extrabold uppercase tracking-wider text-rose-800">
                  1b. Phủ định (-) · Ngăn cản đừng làm gì
                </p>
                <p className="font-display font-extrabold text-lg text-slate-900">
                  Don’t (Do not) + V nguyên mẫu + (O)!
                </p>
                <div className="space-y-2">
                  {[
                    { en: "Don't play with the knife!", vi: 'Đừng nghịch dao!' },
                    { en: "Don't ride your bike too fast!", vi: 'Đừng đạp xe quá nhanh!' },
                    { en: "Don't touch the stove! — OK, I won't.", vi: 'Đừng chạm vào bếp! — Vâng, em sẽ không làm thế.' },
                  ].map((ex) => (
                    <button
                      key={ex.en}
                      type="button"
                      onClick={() => speakEnglish(ex.en, 0.9)}
                      className="w-full text-left p-2.5 rounded-xl bg-white border border-rose-100 hover:border-rose-400 flex items-center justify-between gap-2 cursor-pointer"
                    >
                      <span className="text-sm">
                        <strong className="text-slate-900">{ex.en}</strong>{' '}
                        <span className="text-xs text-slate-500">({ex.vi})</span>
                      </span>
                      <Volume2 className="w-4 h-4 text-rose-600 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 90: SAFETY DIAGRAM + INTERACTIVE HOME SAFETY SIMULATOR
         ========================================================= */}
      {activePage === 90 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Ngữ pháp 2 & 3a (Trang 90) · Sơ đồ Cảnh báo An toàn với “may”
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Kết hợp câu ngăn cản <strong>Don’t + V!</strong>, câu hỏi lý do <strong>Why shouldn’t I...?</strong> và cảnh báo <strong>Because you may + V</strong>.
              </p>
            </div>
            <SafetyImperativeDiagram />
          </section>

          {/* Interactive Home Safety Warning Simulator */}
          <section className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Trạm Mô phỏng An toàn Trong nhà (Bấm chọn tình huống!)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Chọn 1 trong 6 tình huống nguy hiểm để thực hành trọn hội thoại 4 bước và nghe phát âm chuẩn.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    `${selectedScene.warning} ${selectedScene.whyQuestion} ${selectedScene.consequence} ${selectedScene.reply}`,
                    0.88
                  )
                }
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Nghe cả hội thoại
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {U12_SAFETY_SCENES.map((scene) => {
                const active = scene.id === selectedScene.id;
                return (
                  <button
                    key={scene.id}
                    type="button"
                    onClick={() => {
                      setSelectedScene(scene);
                      speakEnglish(scene.warning, 0.9);
                    }}
                    className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-2 transition-all cursor-pointer ${
                      active
                        ? 'bg-amber-50 border-amber-500 ring-1 ring-amber-200'
                        : 'bg-slate-50/70 border-slate-200 hover:border-amber-300'
                    }`}
                  >
                    <MiniPictureIcon iconKey={scene.iconKey} className="w-12 h-12" />
                    <span className="text-xs font-bold text-slate-900">{scene.labelVi}</span>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200 space-y-2">
                <p className="text-xs font-extrabold uppercase text-rose-700 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Bước 1 · Người lớn nhắc nhở
                </p>
                <p className="font-display font-bold text-lg text-slate-900">
                  “{selectedScene.warning}”
                </p>
                <button
                  type="button"
                  onClick={() => speakEnglish(selectedScene.warning, 0.9)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 hover:text-rose-900 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Nghe câu cảnh báo
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200 space-y-2">
                <p className="text-xs font-extrabold uppercase text-sky-700">
                  Bước 2 · Em hỏi lý do
                </p>
                <p className="font-display font-bold text-lg text-slate-900">
                  “{selectedScene.whyQuestion}”
                </p>
                <button
                  type="button"
                  onClick={() => speakEnglish(selectedScene.whyQuestion, 0.9)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-900 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Nghe câu hỏi
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
                <p className="text-xs font-extrabold uppercase text-amber-800">
                  Bước 3 · Giải thích hậu quả với “may”
                </p>
                <p className="font-display font-bold text-lg text-slate-900">
                  “{selectedScene.consequence}”
                </p>
                <p className="text-xs text-slate-600">{selectedScene.consequenceVi}</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
                <p className="text-xs font-extrabold uppercase text-emerald-800">
                  Bước 4 · Em đồng ý & hứa an toàn
                </p>
                <p className="font-display font-bold text-lg text-emerald-900">
                  “{selectedScene.reply}”
                </p>
                <p className="text-xs text-slate-600">Vâng, em/con sẽ không làm thế đâu ạ.</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 91: 3 USES OF "MAY" + "MAYBE" VS "MAY BE"
         ========================================================= */}
      {activePage === 91 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <h3 className="font-display font-bold text-xl text-slate-900">
              Ngữ pháp 3b (Trang 91) · 3 cách dùng quan trọng của động từ khuyết thiếu “may”
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 space-y-2">
                <p className="text-xs font-extrabold uppercase text-sky-800">
                  1. Xin phép lịch sự
                </p>
                <p className="font-bold text-slate-900 text-sm">May I + V nguyên mẫu...?</p>
                <button
                  type="button"
                  onClick={() => speakEnglish('May I go out, teacher? Yes, you may.', 0.9)}
                  className="w-full text-left p-2.5 rounded-xl bg-white border border-sky-100 text-xs space-y-1 cursor-pointer hover:border-sky-400"
                >
                  <p className="font-bold text-sky-900">🔊 May I go out, teacher?</p>
                  <p className="text-slate-600">Em xin phép ra ngoài được không ạ? → Yes, you may.</p>
                </button>
              </div>

              <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-4 space-y-2">
                <p className="text-xs font-extrabold uppercase text-amber-800">
                  2. Phỏng đoán khả năng xảy ra
                </p>
                <p className="font-bold text-slate-900 text-sm">S + may / may not + V</p>
                <button
                  type="button"
                  onClick={() => speakEnglish('Look at the dark clouds. It may rain soon.', 0.9)}
                  className="w-full text-left p-2.5 rounded-xl bg-white border border-amber-100 text-xs space-y-1 cursor-pointer hover:border-amber-400"
                >
                  <p className="font-bold text-amber-950">🔊 It may rain soon.</p>
                  <p className="text-slate-600">Trời có thể sắp mưa đấy. / You may fall off your bike.</p>
                </button>
              </div>

              <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 space-y-2">
                <p className="text-xs font-extrabold uppercase text-emerald-800">
                  3. Diễn đạt lời chúc tốt đẹp
                </p>
                <p className="font-bold text-slate-900 text-sm">May + S + V nguyên mẫu!</p>
                <button
                  type="button"
                  onClick={() => speakEnglish('May all your dreams come true!', 0.9)}
                  className="w-full text-left p-2.5 rounded-xl bg-white border border-emerald-100 text-xs space-y-1 cursor-pointer hover:border-emerald-400"
                >
                  <p className="font-bold text-emerald-900">🔊 May all your dreams come true!</p>
                  <p className="text-slate-600">Chúc mọi ước mơ của bạn đều trở thành hiện thực!</p>
                </button>
              </div>
            </div>
          </section>

          {/* Maybe vs May be visual comparison */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <h3 className="font-display font-bold text-xl text-slate-900">
              Phân biệt siêu dễ: “maybe” (viết liền) vs “may be” (viết tách)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-indigo-50/70 border border-indigo-200 p-4 space-y-2">
                <p className="font-display font-extrabold text-xl text-indigo-900">
                  maybe <span className="text-xs font-bold text-indigo-700">(Trạng từ = Perhaps: có lẽ)</span>
                </p>
                <p className="text-sm text-slate-700">
                  Thường đứng <strong>đầu câu</strong>, phía sau đã có sẵn chủ ngữ và động từ chính.
                </p>
                <p className="text-xs font-semibold bg-white rounded-xl p-3 border border-indigo-100 text-slate-800">
                  Ví dụ: <strong className="text-indigo-700">Maybe</strong> she will come tomorrow. (Có lẽ ngày mai cô ấy sẽ đến.)
                </p>
              </div>

              <div className="rounded-2xl bg-teal-50/70 border border-teal-200 p-4 space-y-2">
                <p className="font-display font-extrabold text-xl text-teal-900">
                  may be <span className="text-xs font-bold text-teal-700">(Động từ: có thể là / có thể ở)</span>
                </p>
                <p className="text-sm text-slate-700">
                  Đứng <strong>ngay sau chủ ngữ</strong> để làm động từ chính của câu (trước tính từ, danh từ hoặc nơi chốn).
                </p>
                <p className="text-xs font-semibold bg-white rounded-xl p-3 border border-teal-100 text-slate-800">
                  Ví dụ: He <strong className="text-teal-700">may be</strong> at home now. (Có thể bây giờ cậu ấy đang ở nhà.)
                </p>
              </div>
            </div>
          </section>

          <ChoiceExerciseBlock
            title="Luyện nhanh Trang 91 · Chọn “maybe” hay “may be”?"
            instruction="Áp dụng quy tắc viết liền / viết tách vừa học để làm đúng cả 4 câu dưới đây nhé!"
            items={U12_MAYBE_QUIZ}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 92: UNIT 12 TASK 1 (MATCH 5) + TASK 2 (12 LETTERS)
         ========================================================= */}
      {activePage === 92 && (
        <div className="space-y-6">
          <PairMatchBlock
            title="Task 1 (Trang 92) · Match the sentences"
            instruction="Chọn 1 câu cảnh báo / câu hỏi bên trái rồi bấm câu đáp tương ứng bên phải."
            items={U12_TASK1_MATCH}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <MissingLettersBlock
            title="Task 2 (Trang 92 · 12 từ) · Write the missing letters"
            instruction="Điền hoàn chỉnh 12 từ vựng cốt lõi của Unit 12 (bấm loa nghe phát âm khi cần)."
            items={U12_TASK2_LETTERS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 93: UNIT 12 TASK 3 + TASK 4 (MIKE) + TASK 5 (FALLING QA)
         ========================================================= */}
      {activePage === 93 && (
        <div className="space-y-6">
          <PictureFillBlock
            title="Task 3 (Trang 92–93) · Look, read and write the correct word/phrase"
            instruction="Câu mẫu: You go up a tree or mountain → climb. Nhìn 5 hình tai nạn và điền cụm từ tương ứng."
            items={U12_TASK3_DEFS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <TrueFalseReadingBlock
            title="Task 4 (Trang 93) · Đọc chuyện Mike nghịch diêm & chọn True / False"
            passage={U12_TASK4_MIKE_READING.passage}
            passageVi={U12_TASK4_MIKE_READING.passageVi}
            example={U12_TASK4_MIKE_READING.example}
            statements={U12_TASK4_MIKE_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <ReadingQABlock
            title="Task 5 (Trang 93) · Đọc mẹo phòng tránh ngã cho em nhỏ & trả lời 4 câu hỏi"
            passageEn={U12_TASK5_FALLING_PASSAGE.en}
            passageVi={U12_TASK5_FALLING_PASSAGE.vi}
            questions={U12_TASK5_QA}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 94: UNIT 12 TASK 6 (8 VERBS) + TASK 7 (SUMMER SAFETY)
         ========================================================= */}
      {activePage === 94 && (
        <div className="space-y-6">
          <VerbFormBlock
            title="Task 6 (Trang 94 · 8 câu) · Give the correct form of the verbs in brackets"
            instruction="Chú ý dấu hiệu thời gian (Don't, at present, yesterday, Look!, tomorrow, three times a week, Last Monday) để chia đúng động từ."
            items={U12_TASK6_VERBS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <InlinePictureCloze
            taskId="p94-u12t7-summer"
            title="Task 7 (Trang 94) · Điền 5 từ theo tranh: Mẹo giữ an toàn mùa hè"
            instruction="Quan sát 5 hình minh họa và điền từ đúng (Câu mẫu 0: play)."
            segments={[
              "Summer is coming, here are some tips to keep your children safe. First, don't let them (0) play alone near water like a lake or a swimming pool. They may ",
              ' into the water. Second, never let them ',
              ' trees. They may fall down and ',
              " their arms or legs. Third, don't let them play with dangerous things like ",
              ' or matches. They may cut themselves or get a ',
              '.',
            ]}
            blanks={U12_TASK7_SUMMER_BLANKS}
            fullAudioText="Summer is coming, here are some tips to keep your children safe. First, don't let them play alone near water like a lake or a swimming pool. They may fall into the water. Second, never let them climb trees. They may fall down and break their arms or legs. Third, don't let them play with dangerous things like knives or matches. They may cut themselves or get a burn."
            translationVi="Mùa hè đang tới, đây là vài mẹo giữ an toàn cho trẻ em. Thứ nhất, đừng để trẻ chơi một mình gần nước như hồ hay bể bơi, trẻ có thể ngã xuống nước. Thứ hai, không bao giờ để trẻ trèo cây vì trẻ có thể ngã xuống và gãy tay hoặc chân. Thứ ba, đừng để trẻ nghịch đồ nguy hiểm như dao hay diêm vì trẻ có thể bị đứt tay hoặc bị bỏng."
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 95: UNIT 12 TASK 8 (5 PICTURES) + TASK 9 (Q1-2)
         ========================================================= */}
      {activePage === 95 && (
        <div className="space-y-6">
          <PictureFillBlock
            title="Task 8 (Trang 95 · 5 câu) · Look and write"
            instruction="Câu mẫu: Don't touch the stove. Nhìn 5 tranh tình huống nguy hiểm và điền từ thích hợp."
            items={U12_TASK8_PICTURES}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <SentenceOrderBlock
            title="Task 9 (Trang 95 · Câu 1–2) · Put the words in order"
            instruction="Bắt đầu luyện sắp xếp câu cảnh báo Unit 12 với 2 câu đầu tiên."
            items={U12_TASK9_P95}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 96: UNIT 12 TASK 9 (Q3-8) + TASK 10 (IMPERATIVE FLIP)
         ========================================================= */}
      {activePage === 96 && (
        <div className="space-y-6">
          <SentenceOrderBlock
            title="Task 9 (Trang 96 · Câu 3–8) · Tiếp tục sắp xếp từ thành câu đúng"
            instruction="Bấm lần lượt các thẻ từ để hoàn thiện 6 câu tiếp theo của Unit 12."
            items={U12_TASK9_P96}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <ImperativeFlipBlock
            title="Task 10 (Trang 96 · 5 câu) · Rewrite positive ↔ negative imperatives"
            instruction="Chuyển câu mệnh lệnh khẳng định sang phủ định (thêm Don’t) và ngược lại (bỏ Don’t)."
            items={U12_TASK10_REWRITE}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 97: UNIT 12 TASK 11 WRITING + UNIT 13 OPENING & 12 VOCAB
         ========================================================= */}
      {activePage === 97 && (
        <div className="space-y-6">
          <GuidedWritingBlock
            id="p97-u12t11-writing"
            title="Task 11 (Trang 97) · Hoàn thành Unit 12: Viết 5 lời khuyên an toàn cho trẻ em"
            instruction="Giải thích lý do không nên làm 5 hành động nguy hiểm bằng mẫu “because they may + V”."
            prompts={U12_TASK11_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <section className="bg-sky-50/80 border border-sky-200 rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
                Mở đầu Unit 13 · Trang 97 – 103
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                What do you do in your free time?
              </h2>
              <p className="text-sm text-slate-700">
                Chủ đề <strong>Hoạt động thời gian rảnh</strong>: trọn bộ 26 từ vựng giải trí, quy tắc <strong>go + V-ing / do karate</strong> và cách hỏi sở thích từng thành viên trong gia đình.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <MiniPictureIcon iconKey="surfing" className="w-12 h-12" />
              <MiniPictureIcon iconKey="karate" className="w-12 h-12" />
              <MiniPictureIcon iconKey="fishing" className="w-12 h-12" />
            </div>
          </section>

          <VocabCardsGrid
            words={U13_VOCAB_PAGE97}
            title="12 từ vựng Thời gian rảnh (Trang 97 · Phần 1/2)"
          />
        </div>
      )}

      {/* =========================================================
          PAGE 98: UNIT 13 VOCAB PART 2 (14 WORDS) + GRAMMAR DIAGRAM
         ========================================================= */}
      {activePage === 98 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U13_VOCAB_PAGE98}
            title="14 từ vựng Giải trí & Hoạt động ngoài trời (Trang 98 · Phần 2/2)"
          />

          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Ngữ pháp 1 & 2 (Trang 98) · Sơ đồ hỏi hoạt động lúc rảnh & 3 nhóm động từ
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Chỉ cần nắm chắc quy tắc <strong>do/does</strong> và 3 nhóm động từ <strong>go + V-ing / do karate / động từ riêng</strong> là làm gọn toàn bộ bài tập Unit 13!
              </p>
            </div>
            <FreeTimeGrammarDiagram />
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 99: FAMILY FREE TIME BUILDER + TASK 1 (ODD) + TASK 2 (Q1-2)
         ========================================================= */}
      {activePage === 99 && (
        <div className="space-y-6">
          {/* Interactive Family Free Time Builder */}
          <section className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
                  Ngữ pháp 3 (Trang 99) · Xưởng ghép câu Sở thích Gia đình
                </p>
                <h3 className="font-display font-bold text-xl text-slate-900 mt-0.5">
                  Chọn 1 thành viên + 1 hoạt động để xem động từ & tính từ sở hữu tự động đổi!
                </h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  const q = `What ${selectedFamily.aux} ${selectedFamily.subjectQ} do in ${selectedFamily.possessiveQ} free time?`;
                  const a = `${selectedFamily.subjectA} often ${
                    selectedFamily.isThirdSingular ? selectedActivity.third : selectedActivity.base
                  }.`;
                  speakEnglish(`${q} ${a}`, 0.88);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Nghe cặp hỏi – đáp
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs font-bold text-slate-500 mb-2">1. Chọn người muốn hỏi:</p>
                <div className="flex flex-wrap gap-2">
                  {U13_FAMILY_PRESETS.map((fam) => (
                    <button
                      key={fam.id}
                      type="button"
                      onClick={() => setSelectedFamily(fam)}
                      className={`px-3.5 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        selectedFamily.id === fam.id
                          ? 'bg-sky-600 border-sky-600 text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-sky-400'
                      }`}
                    >
                      {fam.labelVi}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-500 mb-2">2. Chọn hoạt động lúc rảnh:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                  {U13_ACTIVITY_PRESETS.map((act) => (
                    <button
                      key={act.id}
                      type="button"
                      onClick={() => setSelectedActivity(act)}
                      className={`p-2.5 rounded-2xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                        selectedActivity.id === act.id
                          ? 'bg-emerald-50 border-emerald-500 ring-1 ring-emerald-200'
                          : 'bg-slate-50/70 border-slate-200 hover:border-emerald-300'
                      }`}
                    >
                      <MiniPictureIcon iconKey={act.iconKey} className="w-11 h-11" />
                      <span className="text-xs font-bold text-slate-800">{act.labelVi}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live color-coded Q&A result */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-1.5">
                <p className="text-xs font-extrabold uppercase text-sky-700">Câu hỏi chuẩn:</p>
                <p className="font-display font-bold text-lg text-slate-900">
                  What{' '}
                  <span className="px-1.5 py-0.5 rounded-md bg-sky-600 text-white">
                    {selectedFamily.aux}
                  </span>{' '}
                  {selectedFamily.subjectQ} do in{' '}
                  <span className="px-1.5 py-0.5 rounded-md bg-amber-200 text-amber-950">
                    {selectedFamily.possessiveQ}
                  </span>{' '}
                  free time?
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5">
                <p className="text-xs font-extrabold uppercase text-emerald-800">Câu trả lời chuẩn:</p>
                <p className="font-display font-bold text-lg text-slate-900">
                  {selectedFamily.subjectA} often{' '}
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-600 text-white">
                    {selectedFamily.isThirdSingular ? selectedActivity.third : selectedActivity.base}
                  </span>
                  .
                </p>
                <p className="text-xs text-emerald-900">
                  {selectedFamily.isThirdSingular
                    ? `Chủ ngữ "${selectedFamily.subjectA}" số ít → động từ chia thành "${selectedActivity.third}"!`
                    : 'Chủ ngữ "I" → giữ nguyên động từ nguyên mẫu!'}
                </p>
              </div>
            </div>
          </section>

          <ChoiceExerciseBlock
            title="Task 1 (Trang 99 · 5 câu) · Odd one out"
            instruction="Chọn 1 từ khác loại so với 3 từ còn lại."
            items={U13_TASK1_ODD}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <LeaveOneOutBlock
            title="Task 2 (Trang 99 · Câu 1–2) · Leave one unnecessary letter out"
            instruction="Mỗi từ dưới đây có 1 chữ cái bị viết thừa. Bấm thẳng vào chữ cái thừa để xóa nó đi!"
            items={U13_TASK2_P99}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 100: UNIT 13 TASK 2 (Q3-5) + TASK 3 (5 LEISURE DEFS)
         ========================================================= */}
      {activePage === 100 && (
        <div className="space-y-6">
          <LeaveOneOutBlock
            title="Task 2 (Trang 100 · Câu 3–5) · Tiếp tục trò chơi bỏ 1 chữ cái thừa"
            instruction="Tìm và bấm xóa 1 chữ cái bị thừa trong 3 từ tiếp theo nhé!"
            items={U13_TASK2_P100}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <PictureFillBlock
            title="Task 3 (Trang 100 · 5 câu) · Look, read and write"
            instruction="Câu mẫu: You wear special boots to move on ice or ground → skating. Đọc mô tả + nhìn hình và viết 1 từ tiếng Anh."
            items={U13_TASK3_DEFS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 101: UNIT 13 TASK 4 (FISHING T/F) + TASK 5 (Q1-4)
         ========================================================= */}
      {activePage === 101 && (
        <div className="space-y-6">
          <TrueFalseReadingBlock
            title="Task 4 (Trang 100–101) · Đọc hiểu: Sở thích câu cá cùng Bố"
            passage={U13_TASK4_FISHING_READING.passage}
            passageVi={U13_TASK4_FISHING_READING.passageVi}
            example={U13_TASK4_FISHING_READING.example}
            statements={U13_TASK4_FISHING_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <PictureFillBlock
            title="Task 5 (Trang 101 · Câu 1–4) · Look and write"
            instruction="Câu mẫu: I like swimming. Nhìn tranh minh họa và điền từ còn thiếu cho 4 câu dưới đây."
            items={U13_TASK5_P101}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 102: UNIT 13 TASK 5 (Q5) + TASK 6 (SUMMER HOLIDAY) + TASK 7 (Q1)
         ========================================================= */}
      {activePage === 102 && (
        <div className="space-y-6">
          <PictureFillBlock
            title="Task 5 (Trang 102 · Câu 5) · Hoàn thành bài nhìn tranh viết từ"
            instruction="Điền phương tiện quen thuộc em đạp đi học mỗi ngày."
            items={U13_TASK5_P102}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <InlinePictureCloze
            taskId="p102-u13t6-summer"
            title="Task 6 (Trang 102) · Đọc tranh điền 5 từ hoàn thành đoạn văn Kỳ nghỉ hè"
            instruction="Câu mẫu (0): school. Chú ý dạng động từ sau like (V-ing), sau can (V nguyên mẫu) và go + V-ing."
            segments={[
              'Summer holiday is great. We do not go to (0) school and we can do a lot of things. I like ',
              ". I go to the swimming pool three times a week. My brother Nick can't swim but he can ",
              ' very well. He often goes skating with his friends in their free time. When our ',
              ' are free at the weekend, we often go ',
              ' in the neighbourhood. Mom prepares a lot of delicious ',
              '. We can fish and enjoy our meal outdoors.',
            ]}
            blanks={U13_TASK6_SUMMER_BLANKS}
            fullAudioText="Summer holiday is great. We do not go to school and we can do a lot of things. I like swimming. I go to the swimming pool three times a week. My brother Nick can't swim but he can skate very well. He often goes skating with his friends in their free time. When our parents are free at the weekend, we often go fishing in the neighbourhood. Mom prepares a lot of delicious food. We can fish and enjoy our meal outdoors."
            translationVi="Kỳ nghỉ hè thật tuyệt vời. Chúng mình không phải đi học và có thể làm rất nhiều việc. Mình thích bơi lội và đi bể bơi ba lần một tuần. Anh trai Nick không biết bơi nhưng anh trượt pa-tanh rất giỏi. Anh thường đi trượt pa-tanh cùng bạn vào lúc rảnh. Khi bố mẹ rảnh cuối tuần, cả nhà mình thường đi câu cá quanh khu dân cư. Mẹ chuẩn bị rất nhiều đồ ăn ngon. Cả nhà vừa câu cá vừa thưởng thức bữa ăn ngoài trời."
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <SentenceOrderBlock
            title="Task 7 (Trang 102 · Câu 1) · Put the words in order"
            instruction="Bắt đầu bài sắp xếp từ Unit 13 với câu hỏi quen thuộc nhất của bài!"
            items={U13_TASK7_P102}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 103: UNIT 13 TASK 7 (Q2-5) + TASK 8 (GUIDED WRITING)
         ========================================================= */}
      {activePage === 103 && (
        <div className="space-y-6">
          <SentenceOrderBlock
            title="Task 7 (Trang 103 · Câu 2–5) · Hoàn thành bài sắp xếp từ Unit 13"
            instruction="Bấm lần lượt các thẻ từ để ghép 4 câu hoàn chỉnh."
            items={U13_TASK7_P103}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <GuidedWritingBlock
            id="p103-u13t8-writing"
            title="Task 8 (Trang 103) · Viết về thời gian rảnh của em và bố mẹ"
            instruction="Trả lời 5 câu hỏi gợi ý để tạo đoạn văn tiếng Anh thật tự nhiên về sở thích lúc rảnh của em."
            prompts={U13_TASK8_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 104: UNIT 14 OPENING + 19 VOCAB + WATERMELON STORYBOARD
         ========================================================= */}
      {activePage === 104 && (
        <div className="space-y-6">
          <section className="bg-emerald-50/80 border border-emerald-200 rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                Mở đầu Unit 14 · Trang 104
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                What happened in the story?
              </h2>
              <p className="text-sm text-slate-700">
                Bước vào thế giới truyện cổ tích với <strong>19 từ vựng Sự tích Quả dưa hấu (Mai An Tiêm)</strong> và 4 từ nối kể chuyện cực quan trọng: <strong>First → Then → Next → In the end</strong>.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <MiniPictureIcon iconKey="watermelon" className="w-12 h-12" />
              <MiniPictureIcon iconKey="seeds" className="w-12 h-12" />
              <MiniPictureIcon iconKey="princess" className="w-12 h-12" />
            </div>
          </section>

          <VocabCardsGrid
            words={U14_VOCAB_PAGE104}
            title="19 từ vựng mở đầu Unit 14: Sự tích Quả dưa hấu (Trang 104)"
          />

          {/* Interactive 4-Step Watermelon Storyboard */}
          <section className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Bảng kể chuyện 4 bước: Sự tích Quả dưa hấu (Mai An Tiêm)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Bấm lần lượt từng bước để nhớ ngay 4 từ nối <strong>First → Then → Next → In the end</strong>!
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    U14_WATERMELON_STORY_STEPS.map((s) => `${s.connector} ${s.sentenceEn}`).join(' '),
                    0.86
                  )
                }
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Nghe kể cả câu chuyện
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {U14_WATERMELON_STORY_STEPS.map((item) => {
                const isActive = item.step === activeStoryStep;
                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => {
                      setActiveStoryStep(item.step);
                      speakEnglish(`${item.connector} ${item.sentenceEn}`, 0.88);
                    }}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer space-y-2 ${
                      isActive
                        ? 'bg-emerald-50 border-emerald-500 ring-1 ring-emerald-200'
                        : 'bg-slate-50/70 border-slate-200 hover:border-emerald-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-xs font-extrabold">
                        Bước {item.step} · {item.connector}
                      </span>
                      <MiniPictureIcon iconKey={item.iconKey} className="w-10 h-10 shrink-0" />
                    </div>
                    <p className="text-xs font-bold text-emerald-900">{item.connectorVi}</p>
                    <p className="text-xs text-slate-700 leading-relaxed">{item.sentenceEn}</p>
                  </button>
                );
              })}
            </div>

            {(() => {
              const current = U14_WATERMELON_STORY_STEPS.find((s) => s.step === activeStoryStep)!;
              return (
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <p className="text-xs font-extrabold uppercase text-amber-800">
                      Bước {current.step} · {current.connector} ({current.connectorVi})
                    </p>
                    <p className="font-display font-bold text-lg text-slate-900">
                      {current.connector} {current.sentenceEn}
                    </p>
                    <p className="text-sm text-slate-700">{current.sentenceVi}</p>
                    <p className="text-xs text-emerald-800 font-semibold">
                      Từ vựng Trang 104 vừa áp dụng: {current.highlightWords.join(' · ')}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => speakEnglish(`${current.connector} ${current.sentenceEn}`, 0.88)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-amber-300 hover:bg-amber-100 text-amber-950 text-xs font-bold cursor-pointer shrink-0 self-start sm:self-center"
                  >
                    <Volume2 className="w-4 h-4" />
                    Nghe bước {current.step}
                  </button>
                </div>
              );
            })()}
          </section>

          {/* Completion Celebration Banner for Pages 1–104 */}
          <section className="bg-emerald-50 border border-emerald-300 rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <span className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Trophy className="w-6 h-6" />
              </span>
              <div className="space-y-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Chúc mừng em đã hoàn thành trọn bộ Trang 1 → Trang 104!
                </p>
                <h3 className="font-display font-extrabold text-xl text-slate-900">
                  Vững vàng từ Unit 1 đến Unit 13 & sẵn sàng chinh phục Unit 14!
                </h3>
                <p className="text-sm text-slate-700">
                  Em đã làm chủ <strong>377 từ vựng</strong>, sơ đồ ngữ pháp trực quan, Trạm Mô phỏng An toàn, Xưởng Sở thích Gia đình và hàng trăm câu bài tập tương tác. Hãy thử sức thêm ở Đấu trường IOE để săn thêm sao nhé!
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
