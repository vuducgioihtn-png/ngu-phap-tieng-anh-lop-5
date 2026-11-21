import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  Compass,
  Eye,
  Lightbulb,
  MapPin,
  RotateCcw,
  Sparkles,
  Trophy,
  Volume2,
  XCircle,
} from 'lucide-react';
import type { ParagraphBlank } from '../data/pages1to20Data';
import type { MistakeItem } from '../data/pages84to104Data';
import {
  type PastVerbRow,
  type WordBankClozeItem,
  U14_STORY_CRITIC_PRESETS,
  U14_TASK1_ODD,
  U14_TASK2_PAST_VERBS,
  U14_TASK3_MC,
  U14_TASK4_STARFRUIT_READING,
  U14_TASK5_HARE_BLANKS,
  U14_TASK6_P108,
  U14_TASK6_P109,
  U14_TASK7_ORDERS,
  U14_TASK8_CLOZE,
  U14_TASK8_WORD_BANK,
  U14_TASK9_WRITING,
  U14_VOCAB_PAGE105,
  U14_VOCAB_PAGE106,
  U15_DREAM_JOB_PRESETS,
  U15_TASK1_ODD,
  U15_TASK2_MC,
  U15_TASK3_DEFS,
  U15_TASK4_JIM_READING,
  U15_TASK5_MISTAKES,
  U15_TASK6_LE_BLANKS,
  U15_TASK7_PICTURES,
  U15_TASK8_P116,
  U15_TASK8_P117,
  U15_TASK9_WRITING,
  U15_VOCAB_PAGE111,
  U15_VOCAB_PAGE112,
  U16_NEIGHBORHOOD_PLACES,
  U16_TASK1_ODD,
  U16_TASK2_P121,
  U16_TASK2_P122,
  U16_TASK3_PLACE_MATCH,
  U16_TASK4_SCHOOL_READING,
  U16_TASK5_CONDAO_BLANKS,
  U16_TASK6_PICTURES,
  U16_TASK7_P124,
  U16_TASK7_P125,
  U16_TASK8_WRITING,
  U16_VOCAB_PAGE118,
  U16_VOCAB_PAGE119,
} from '../data/pages105to125Data';
import { playFeedbackTone, speakEnglish } from '../utils/speech';
import {
  ChoiceExerciseBlock,
  GuidedWritingBlock,
  PairMatchBlock,
  PictureFillBlock,
  SentenceOrderBlock,
  TrueFalseReadingBlock,
  VocabCardsGrid,
} from './PageExerciseWidgets';
import {
  DirectionsPlaceDiagram,
  FutureDreamJobDiagram,
  MiniPictureIcon,
  StoryOpinionDiagram,
} from './PageVisuals';

interface Pages105To125ViewProps {
  activePage: number;
  completedTaskIds: string[];
  onCompleteTask: (taskId: string) => void;
  muted: boolean;
}

/* =========================================================
   HELPER 1: PAST VERB TABLE BLOCK (PAGE 107 · TASK 2)
   ========================================================= */
const PastVerbTableBlock: React.FC<{
  title: string;
  instruction: string;
  rows: PastVerbRow[];
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ title, instruction, rows, completedTaskIds, onCompleteTask, muted }) => {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [statusMap, setStatusMap] = useState<Record<string, 'correct' | 'wrong'>>({});

  const checkRow = (row: PastVerbRow) => {
    const val = (inputs[row.id] ?? '').trim().toLowerCase();
    if (!val) return;
    const isRight = val === row.past.toLowerCase();
    setStatusMap((prev) => ({ ...prev, [row.id]: isRight ? 'correct' : 'wrong' }));
    playFeedbackTone(isRight ? 'correct' : 'wrong', muted);
    if (isRight) onCompleteTask(row.id);
  };

  const revealAll = () => {
    const nextIn: Record<string, string> = {};
    const nextSt: Record<string, 'correct' | 'wrong'> = {};
    rows.forEach((r) => {
      nextIn[r.id] = r.past;
      nextSt[r.id] = 'correct';
    });
    setInputs(nextIn);
    setStatusMap(nextSt);
  };

  const resetAll = () => {
    setInputs({});
    setStatusMap({});
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{instruction}</p>
        </div>
        <div className="flex items-center gap-2">
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
            onClick={resetAll}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Làm lại
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {rows.map((row) => {
          const st = statusMap[row.id];
          const done = completedTaskIds.includes(row.id);
          return (
            <div
              key={row.id}
              className={`p-3.5 rounded-2xl border space-y-2 transition-colors ${
                st === 'correct'
                  ? 'bg-emerald-50/70 border-emerald-300'
                  : st === 'wrong'
                  ? 'bg-rose-50/70 border-rose-300'
                  : 'bg-slate-50/70 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-sky-100 text-sky-800 text-xs font-extrabold flex items-center justify-center tabular-nums">
                    {row.number}
                  </span>
                  <span className="font-display font-extrabold text-base text-slate-900">
                    {row.base}
                  </span>
                  <span className="text-xs text-slate-500">({row.meaningVi})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                      row.kind === 'regular'
                        ? 'bg-sky-100 text-sky-800'
                        : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {row.kind === 'regular' ? 'Có quy tắc' : 'Bất quy tắc'}
                  </span>
                  <button
                    type="button"
                    onClick={() => speakEnglish(`${row.base}, ${row.past}`, 0.85)}
                    className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-sky-50 text-sky-700 cursor-pointer"
                    aria-label={`Nghe cặp động từ ${row.base} - ${row.past}`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 shrink-0">Quá khứ (V2):</span>
                <input
                  type="text"
                  value={inputs[row.id] ?? ''}
                  onChange={(e) => {
                    setInputs((prev) => ({ ...prev, [row.id]: e.target.value }));
                    setStatusMap((prev) => {
                      const next = { ...prev };
                      delete next[row.id];
                      return next;
                    });
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') checkRow(row);
                  }}
                  placeholder="Gõ dạng quá khứ..."
                  className="flex-1 min-w-0 px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button
                  type="button"
                  onClick={() => checkRow(row)}
                  className="px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold cursor-pointer shrink-0"
                >
                  Kiểm tra
                </button>
              </div>

              {(st || done) && (
                <p
                  className={`text-xs flex items-start gap-1.5 ${
                    st === 'wrong' ? 'text-rose-800' : 'text-emerald-800'
                  }`}
                >
                  {st === 'wrong' ? (
                    <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-rose-600" />
                  ) : (
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-600" />
                  )}
                  <span>
                    {st === 'wrong'
                      ? `Chưa chính xác! Gợi ý: ${row.tip}`
                      : `Đúng rồi: ${row.base} → ${row.past}. ${row.tip}`}
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
   HELPER 2: WORD BANK CLOZE BLOCK (PAGE 110 · TASK 8)
   ========================================================= */
const WordBankClozeBlock: React.FC<{
  title: string;
  instruction: string;
  wordBank: string[];
  items: WordBankClozeItem[];
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ title, instruction, wordBank, items, completedTaskIds, onCompleteTask, muted }) => {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [statusMap, setStatusMap] = useState<Record<string, 'correct' | 'wrong'>>({});
  const [focusedId, setFocusedId] = useState<string>(items[0]?.id ?? '');

  const checkItem = (item: WordBankClozeItem) => {
    const val = (inputs[item.id] ?? '').trim().toLowerCase();
    if (!val) return;
    const isRight = item.answers.some((a) => a.toLowerCase() === val);
    setStatusMap((prev) => ({ ...prev, [item.id]: isRight ? 'correct' : 'wrong' }));
    playFeedbackTone(isRight ? 'correct' : 'wrong', muted);
    if (isRight) onCompleteTask(item.id);
  };

  const pickFromBank = (word: string) => {
    const targetId =
      focusedId ||
      items.find((it) => statusMap[it.id] !== 'correct')?.id ||
      items[0]?.id;
    if (!targetId) return;
    setInputs((prev) => ({ ...prev, [targetId]: word }));
    setStatusMap((prev) => {
      const next = { ...prev };
      delete next[targetId];
      return next;
    });
  };

  const revealAll = () => {
    const nextIn: Record<string, string> = {};
    const nextSt: Record<string, 'correct' | 'wrong'> = {};
    items.forEach((it) => {
      nextIn[it.id] = it.answers[0];
      nextSt[it.id] = 'correct';
    });
    setInputs(nextIn);
    setStatusMap(nextSt);
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{instruction}</p>
        </div>
        <div className="flex items-center gap-2">
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
            onClick={() => {
              setInputs({});
              setStatusMap({});
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Làm lại
          </button>
        </div>
      </div>

      {/* Clickable 14-word bank */}
      <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 space-y-2">
        <p className="text-xs font-extrabold uppercase tracking-wider text-sky-800">
          Kho 14 từ gợi ý (Bấm chọn ô trống rồi bấm từ bên dưới — nhớ chia quá khứ/số nhiều nếu cần!)
        </p>
        <div className="flex flex-wrap gap-2">
          {wordBank.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => pickFromBank(w)}
              className="px-3 py-1.5 rounded-xl bg-white border border-sky-200 hover:border-sky-500 hover:bg-sky-100 text-slate-900 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
            >
              {w}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const st = statusMap[item.id];
          const done = completedTaskIds.includes(item.id);
          const isFocused = focusedId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setFocusedId(item.id)}
              className={`p-4 rounded-2xl border space-y-2.5 transition-colors ${
                st === 'correct'
                  ? 'bg-emerald-50/70 border-emerald-300'
                  : st === 'wrong'
                  ? 'bg-rose-50/70 border-rose-300'
                  : isFocused
                  ? 'bg-sky-50/40 border-sky-400'
                  : 'bg-slate-50/70 border-slate-200'
              }`}
            >
              <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-medium text-slate-900 leading-relaxed">
                <span className="font-extrabold text-sky-700">{item.number}.</span>
                <span>{item.before}</span>
                <input
                  type="text"
                  value={inputs[item.id] ?? ''}
                  onFocus={() => setFocusedId(item.id)}
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
                  placeholder="..."
                  className="w-36 px-2.5 py-1 rounded-lg bg-white border-2 border-sky-300 text-center text-sm font-bold text-sky-900 focus:outline-none focus:border-sky-600"
                />
                <span>{item.after}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => checkItem(item)}
                  className="px-3 py-1 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold cursor-pointer"
                >
                  Kiểm tra câu {item.number}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    speakEnglish(`${item.before} ${item.answers[0]} ${item.after}`, 0.88)
                  }
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-white border border-slate-200 hover:bg-sky-50 text-sky-700 text-xs font-semibold cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Nghe câu chuẩn
                </button>
                {done && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Đã hoàn thành
                  </span>
                )}
              </div>

              {st && (
                <p
                  className={`text-xs flex items-start gap-1.5 ${
                    st === 'correct' ? 'text-emerald-800' : 'text-rose-800'
                  }`}
                >
                  {st === 'correct' ? (
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-600" />
                  ) : (
                    <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-rose-600" />
                  )}
                  <span>
                    {st === 'correct'
                      ? `Chính xác! ${item.explanation}`
                      : `Chưa đúng rồi! Gợi ý từ trong khung: "${item.bankWord}" (lưu ý chia đúng dạng thì/số nhiều nếu cần).`}
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
   HELPER 3: FIND & REWRITE MISTAKE BLOCK (PAGE 115 · TASK 5)
   ========================================================= */
const SentenceMistakeFixBlock: React.FC<{
  title: string;
  instruction: string;
  items: MistakeItem[];
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ title, instruction, items, completedTaskIds, onCompleteTask, muted }) => {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [statusMap, setStatusMap] = useState<Record<string, 'correct' | 'wrong'>>({});
  const [hintOpen, setHintOpen] = useState<Record<string, boolean>>({});

  const normalize = (s: string) =>
    s
      .trim()
      .toLowerCase()
      .replace(/[’‘]/g, "'")
      .replace(/\s+/g, ' ');

  const checkItem = (item: MistakeItem) => {
    const val = normalize(inputs[item.id] ?? '');
    if (!val) return;
    const isRight = item.corrections.some((c) => normalize(c) === val);
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

      <div className="space-y-3.5">
        {items.map((item) => {
          const st = statusMap[item.id];
          const done = completedTaskIds.includes(item.id);
          return (
            <div
              key={item.id}
              className={`p-4 rounded-2xl border space-y-3 transition-colors ${
                st === 'correct'
                  ? 'bg-emerald-50/70 border-emerald-300'
                  : st === 'wrong'
                  ? 'bg-rose-50/60 border-rose-300'
                  : 'bg-slate-50/70 border-slate-200'
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <p className="text-sm sm:text-base font-bold text-slate-900">
                  <span className="text-rose-600 mr-1.5">Câu {item.number} (có lỗi):</span>
                  {item.sentence}
                </p>
                {done && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Đã sửa đúng
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
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
                  placeholder="Viết lại câu đúng hoàn chỉnh..."
                  className="flex-1 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => checkItem(item)}
                    className="px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold cursor-pointer"
                  >
                    Kiểm tra
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setHintOpen((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                    }
                    className="px-3 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-semibold cursor-pointer"
                  >
                    Gợi ý lỗi
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setInputs((prev) => ({ ...prev, [item.id]: item.correctedSentence }));
                      setStatusMap((prev) => ({ ...prev, [item.id]: 'correct' }));
                    }}
                    className="px-3 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold cursor-pointer"
                  >
                    Đáp án
                  </button>
                  <button
                    type="button"
                    onClick={() => speakEnglish(item.correctedSentence, 0.9)}
                    className="p-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 cursor-pointer"
                    aria-label={`Nghe câu đúng số ${item.number}`}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {hintOpen[item.id] && (
                <p className="text-xs text-amber-950 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
                  <strong>Chỗ sai cần sửa:</strong> “{item.wrongPart}” — hãy kiểm tra cấu trúc ngữ pháp của câu này nhé!
                </p>
              )}

              {st && (
                <p
                  className={`text-xs flex items-start gap-1.5 ${
                    st === 'correct' ? 'text-emerald-800' : 'text-rose-800'
                  }`}
                >
                  {st === 'correct' ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                  ) : (
                    <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                  )}
                  <span>
                    {st === 'correct'
                      ? `Xuất sắc! ${item.explanation}`
                      : `Chưa chuẩn rồi! Hãy chú ý phần "${item.wrongPart}". Đáp án chuẩn: ${item.correctedSentence}`}
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
   HELPER 4: INLINE PICTURE CLOZE (PAGES 108, 115, 123)
   ========================================================= */
const InlinePictureCloze: React.FC<{
  taskId: string;
  title: string;
  instruction: string;
  blanks: ParagraphBlank[];
  segments: string[];
  fullAudioText: string;
  translationVi: string;
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({
  taskId,
  title,
  instruction,
  blanks,
  segments,
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

  const revealAll = () => {
    const next: Record<number, string> = {};
    blanks.forEach((b) => {
      next[b.index] = b.answers[0];
    });
    setInputs(next);
    setChecked(true);
  };

  const done = completedTaskIds.includes(taskId);

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
            {showVi ? 'Ẩn dịch' : 'Dịch tiếng Việt'}
          </button>
        </div>
      </div>

      {/* Picture hint cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {blanks.map((b) => (
          <div
            key={b.id}
            className="rounded-2xl bg-slate-50 border border-slate-200 p-3 flex flex-col items-center text-center gap-2"
          >
            <span className="text-xs font-extrabold text-sky-700">Tranh ({b.index})</span>
            <MiniPictureIcon iconKey={b.iconKey ?? 'book'} className="w-12 h-12" />
            <p className="text-[11px] text-slate-600 leading-snug">{b.hint}</p>
          </div>
        ))}
      </div>

      {/* Passage with inline inputs */}
      <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/50 border border-sky-200 text-sm sm:text-base text-slate-900 leading-loose font-medium">
        {segments.map((seg, i) => {
          const blank = blanks[i];
          const val = blank ? inputs[blank.index] ?? '' : '';
          const isBlankRight =
            blank && checked !== null
              ? blank.answers.some((a) => a.toLowerCase() === val.trim().toLowerCase())
              : null;
          return (
            <React.Fragment key={i}>
              <span>{seg}</span>
              {blank && (
                <span className="inline-flex items-center gap-1 mx-1 align-baseline">
                  <span className="text-xs font-extrabold text-sky-700">({blank.index})</span>
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => {
                      setInputs((prev) => ({ ...prev, [blank.index]: e.target.value }));
                      setChecked(null);
                    }}
                    placeholder="..."
                    className={`w-28 sm:w-32 px-2 py-0.5 rounded-lg border-2 text-center text-sm font-bold focus:outline-none ${
                      isBlankRight === true
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                        : isBlankRight === false
                        ? 'bg-rose-50 border-rose-500 text-rose-900'
                        : 'bg-white border-sky-300 text-sky-900 focus:border-sky-600'
                    }`}
                  />
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {showVi && (
        <p className="text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-3.5 leading-relaxed">
          <strong>Dịch nghĩa:</strong> {translationVi}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={handleCheck}
          className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs sm:text-sm font-bold cursor-pointer"
        >
          Kiểm tra cả đoạn
        </button>
        <button
          type="button"
          onClick={revealAll}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-semibold cursor-pointer"
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
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Làm lại
        </button>
        {done && (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
            <CheckCircle2 className="w-4 h-4" />
            Đã hoàn thành xuất sắc
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
              ? 'Tuyệt vời! Em đã điền chính xác toàn bộ các chỗ trống theo tranh!'
              : 'Một vài ô màu đỏ chưa đúng chính tả. Em xem lại gợi ý dưới mỗi hình rồi sửa nhé!'}
          </p>
        </div>
      )}
    </section>
  );
};

/* =========================================================
   MAIN COMPONENT: PAGES 105 -> 125
   ========================================================= */
export const Pages105To125View: React.FC<Pages105To125ViewProps> = ({
  activePage,
  completedTaskIds,
  onCompleteTask,
  muted,
}) => {
  // Page 106: Interactive Story & Character Critic Studio
  const [selectedStory, setSelectedStory] = useState(U14_STORY_CRITIC_PRESETS[0]);

  // Page 113: Interactive Dream Job Explorer
  const [selectedJob, setSelectedJob] = useState(U15_DREAM_JOB_PRESETS[0]);

  // Page 120: Interactive Neighborhood Map Explorer
  const [selectedPlace, setSelectedPlace] = useState(U16_NEIGHBORHOOD_PLACES[0]);

  return (
    <div className="space-y-6">
      {/* ==================== PAGE 105 ==================== */}
      {activePage === 105 && (
        <div className="space-y-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <p className="text-sm text-emerald-950">
              <strong>Trang 105 · Kho báu từ vựng cổ tích (25 từ):</strong> Em hãy bấm lọc từng nhóm <em>Nhân vật & Bối cảnh</em>, <em>Truyện Cây khế & Quạ Cáo</em>, <em>Cảm xúc & Tính cách</em> để nhớ theo chùm truyện thật nhanh!
            </p>
          </div>
          <VocabCardsGrid
            words={U14_VOCAB_PAGE105}
            title="25 từ vựng cốt lõi Unit 14 — Phần 2 (Trang 105)"
          />
        </div>
      )}

      {/* ==================== PAGE 106 ==================== */}
      {activePage === 106 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U14_VOCAB_PAGE106}
            title="4 từ vựng cuối Unit 14 (Trang 106 · Tổng đủ 48 từ Unit 14)"
          />

          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Ngữ pháp Unit 14 · Kể diễn biến & Nhận xét nhân vật (Trang 106)
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Nắm chắc 4 từ nối trình tự <strong>First → Then → Next → In the end</strong> và 3 câu hỏi chuẩn khi nói về câu chuyện em thích.
              </p>
            </div>
            <StoryOpinionDiagram />
          </section>

          {/* Interactive Story & Character Critic Studio */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Xưởng Bình Luận Nhân Vật Cổ Tích Tương Tác
                </h3>
                <p className="text-sm text-slate-600">
                  Chọn một nhân vật bên dưới để luyện mẫu hỏi <strong>What do you think of...?</strong> và nghe tóm tắt truyện!
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(`${selectedStory.question} ${selectedStory.answer}`, 0.88)
                }
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Nghe hội thoại mẫu
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {U14_STORY_CRITIC_PRESETS.map((preset) => {
                const active = preset.id === selectedStory.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setSelectedStory(preset)}
                    className={`p-3 rounded-2xl border text-left flex flex-col items-center text-center gap-2 transition-all cursor-pointer ${
                      active
                        ? 'bg-emerald-50 border-emerald-500 ring-1 ring-emerald-200'
                        : 'bg-slate-50/70 border-slate-200 hover:border-emerald-300'
                    }`}
                  >
                    <MiniPictureIcon iconKey={preset.iconKey} className="w-12 h-12" />
                    <div>
                      <p className="text-xs font-extrabold text-slate-900">{preset.characterVi}</p>
                      <p className="text-[11px] text-slate-500">{preset.storyVi}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 space-y-2">
                <p className="text-xs font-extrabold uppercase text-sky-800">
                  Hội thoại hỏi cảm nghĩ về {selectedStory.characterEn}
                </p>
                <p className="text-sm font-bold text-slate-900">A: {selectedStory.question}</p>
                <p className="text-base font-extrabold text-emerald-700">B: {selectedStory.answer}</p>
                <p className="text-xs text-slate-600">→ {selectedStory.answerVi}</p>
              </div>
              <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-4 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-extrabold uppercase text-amber-900">
                    Tóm tắt nhanh ({selectedStory.storyEn})
                  </p>
                  <button
                    type="button"
                    onClick={() => speakEnglish(selectedStory.summary, 0.88)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-amber-300 text-amber-900 text-xs font-semibold cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    Nghe
                  </button>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
                  {selectedStory.summary}
                </p>
                <p className="text-xs text-slate-600">{selectedStory.summaryVi}</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ==================== PAGE 107 ==================== */}
      {activePage === 107 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 1 · Chọn từ khác loại (Odd one out · Trang 107)"
            instruction="Chọn 1 từ khác loại về từ loại hoặc nhóm nghĩa so với 3 từ còn lại."
            items={U14_TASK1_ODD}
            speakOptions
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <PastVerbTableBlock
            title="Task 2 · Đổi 10 động từ sang thì Quá khứ đơn (V1 → V2 · Trang 107)"
            instruction="Gõ dạng quá khứ của từng động từ. Chú ý đặc biệt câu 6 (read → read nhưng đọc là /red/)!"
            rows={U14_TASK2_PAST_VERBS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <ChoiceExerciseBlock
            title="Task 3 · Khoanh tròn đáp án đúng (Multiple Choice · Trang 107)"
            instruction="Chọn phương án chính xác nhất để hoàn thành 5 câu về truyện cổ tích."
            items={U14_TASK3_MC}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* ==================== PAGE 108 ==================== */}
      {activePage === 108 && (
        <div className="space-y-6">
          <TrueFalseReadingBlock
            title={`Task 4 · Đọc hiểu Đúng / Sai: ${U14_TASK4_STARFRUIT_READING.title} (Trang 107–108)`}
            passage={U14_TASK4_STARFRUIT_READING.passage}
            passageVi={U14_TASK4_STARFRUIT_READING.passageVi}
            example="0. The elder brother got more land than his brother. → True (Người anh nhận nhiều đất hơn người em)."
            statements={U14_TASK4_STARFRUIT_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <InlinePictureCloze
            taskId="p108-u14t5-all"
            title="Task 5 · Nhìn tranh điền 5 từ hoàn thành truyện Thỏ và Rùa (Trang 108)"
            instruction="Quan sát 5 tranh gợi ý rồi điền từ tiếng Anh thích hợp vào từng chỗ trống (Câu mẫu 0: race)."
            blanks={U14_TASK5_HARE_BLANKS}
            segments={[
              'One day, there was a (0) race between a hare and a tortoise. First, the',
              'ran very fast and soon passed the tortoise. Then he stopped and fell',
              'under a tree. The tortoise walked and walked very slowly. And he passed the sleeping hare. In the end, he passed the finish',
              '. The',
              'cheered loudly for the',
              '. The hare woke up and began to run again, but it was too late.',
            ]}
            fullAudioText="One day, there was a race between a hare and a tortoise. First, the hare ran very fast and soon passed the tortoise. Then he stopped and fell asleep under a tree. The tortoise walked and walked very slowly. And he passed the sleeping hare. In the end, he passed the finish line. The animals cheered loudly for the winner. The hare woke up and began to run again, but it was too late."
            translationVi="Một ngày nọ, có một cuộc đua giữa Thỏ và Rùa. Đầu tiên, chú Thỏ chạy rất nhanh và sớm vượt qua Rùa. Sau đó Thỏ dừng lại và ngủ thiếp đi dưới một gốc cây. Chú Rùa cứ bước đi chậm rãi không ngừng và vượt qua chú Thỏ đang ngủ. Cuối cùng, Rùa đã vượt qua vạch đích. Muôn loài reo hò vang dội chúc mừng người chiến thắng. Thỏ tỉnh dậy chạy tiếp nhưng đã quá muộn."
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <PictureFillBlock
            title="Task 6 (Phần 1) · Nhìn tranh viết tên nhân vật (Trang 108)"
            instruction="Ví dụ mẫu: An Tiem was hard-working. Nhìn tranh câu 1 và điền tên con vật khôn ngoan:"
            items={U14_TASK6_P108}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* ==================== PAGE 109 ==================== */}
      {activePage === 109 && (
        <div className="space-y-6">
          <PictureFillBlock
            title="Task 6 (Câu 2–5) · Nhìn tranh gọi tên nhân vật cổ tích (Trang 109)"
            instruction="Hoàn thành 4 câu miêu tả tính cách nhân vật quen thuộc trong truyện dân gian."
            items={U14_TASK6_P109}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <SentenceOrderBlock
            title="Task 7 · Sắp xếp từ thành 5 câu hỏi hoàn chỉnh (Trang 109)"
            instruction="Bấm lần lượt các thẻ từ để ghép thành câu hỏi chuẩn ngữ pháp về truyện cổ tích."
            items={U14_TASK7_ORDERS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* ==================== PAGE 110 ==================== */}
      {activePage === 110 && (
        <div className="space-y-6">
          <WordBankClozeBlock
            title="Task 8 · Chọn từ trong khung 14 từ điền vào 10 câu (Trang 109–110)"
            instruction="Có 14 từ gợi ý (dư 4 từ). Chú ý chia thì quá khứ hoặc tính từ -ed cho các câu 6 (ordered), 7 (exchanged), 8 (surprised) nhé!"
            wordBank={U14_TASK8_WORD_BANK}
            items={U14_TASK8_CLOZE}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <GuidedWritingBlock
            id="p110-u14t9-writing"
            title="Task 9 · Viết về câu chuyện cổ tích em yêu thích nhất (Trang 110)"
            instruction="Trả lời 5 câu hỏi gợi ý để hoàn thành bài viết tiếng Anh giới thiệu truyện yêu thích của em."
            prompts={U14_TASK9_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* ==================== PAGE 111 ==================== */}
      {activePage === 111 && (
        <div className="space-y-6">
          <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
                Mở đầu Unit 15 · Trang 111
              </p>
              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900">
                What would you like to be in the future?
              </h2>
              <p className="text-sm text-slate-700">
                Chủ đề <strong>Nghề nghiệp mơ ước</strong>: Em sẽ học 35 từ vựng nghề nghiệp & vũ trụ cùng mẫu câu nói về ước mơ lớn lên.
              </p>
            </div>
            <MiniPictureIcon iconKey="pilot" className="w-16 h-16 shrink-0" />
          </div>

          <VocabCardsGrid
            words={U15_VOCAB_PAGE111}
            title="19 từ vựng nghề nghiệp Unit 15 — Phần 1 (Trang 111)"
          />
        </div>
      )}

      {/* ==================== PAGE 112 ==================== */}
      {activePage === 112 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U15_VOCAB_PAGE112}
            title="16 từ vựng công việc & vũ trụ Unit 15 — Phần 2 (Trang 112 · Tổng 35 từ)"
          />

          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Ngữ pháp 1 · Hỏi nghề nghiệp trong tương lai (Trang 112)
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Dùng <strong>would like to be</strong> để diễn đạt mong muốn lịch sự và ước mơ tương lai.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    "What would you like to be in the future? I'd like to be an architect.",
                    0.88
                  )
                }
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Nghe mẫu câu
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 space-y-2">
                <p className="text-xs font-extrabold uppercase text-sky-800">Công thức hỏi & trả lời</p>
                <p className="font-bold text-slate-900">
                  What would + S (you/he/she/they) + like to be in the future?
                </p>
                <p className="font-bold text-emerald-800">
                  → S + would like to be (’d like to be) + a/an + nghề nghiệp.
                </p>
                <p className="text-xs text-slate-600">
                  Lưu ý viết tắt: I would like = <strong>I’d like</strong> · He would like = <strong>He’d like</strong> · She would like = <strong>She’d like</strong>.
                </p>
              </div>

              <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-4 space-y-2">
                <p className="text-xs font-extrabold uppercase text-amber-900">
                  Bảng nhớ nhanh mạo từ A vs AN trước nghề nghiệp
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white rounded-xl p-2.5 border border-amber-200">
                    <p className="font-extrabold text-amber-800 mb-1">Dùng AN (u, e, o, a, i)</p>
                    <ul className="space-y-0.5 text-slate-700 font-semibold">
                      <li>• an architect</li>
                      <li>• an astronaut</li>
                      <li>• an engineer</li>
                      <li>• an accountant</li>
                      <li>• an artist</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-2.5 border border-sky-200">
                    <p className="font-extrabold text-sky-800 mb-1">Dùng A (phụ âm)</p>
                    <ul className="space-y-0.5 text-slate-700 font-semibold">
                      <li>• a pilot</li>
                      <li>• a teacher</li>
                      <li>• a doctor / a nurse</li>
                      <li>• a writer / a farmer</li>
                      <li>• a policeman</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ==================== PAGE 113 ==================== */}
      {activePage === 113 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Ngữ pháp 2 · Hỏi lý do chọn nghề (Why would you like to be...?)
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Kết hợp trọn bộ 2 mẫu câu <strong>What</strong> & <strong>Why — Because</strong> của Unit 15.
              </p>
            </div>
            <FutureDreamJobDiagram />
          </section>

          {/* Interactive Dream Job Explorer */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Xưởng Khám Phá 6 Nghề Nghiệp Mơ Ước
                </h3>
                <p className="text-sm text-slate-600">
                  Chọn 1 nghề bên dưới để xem mạo từ <strong>a/an</strong>, nơi làm việc và nghe trọn cặp câu hỏi – đáp!
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    `${selectedJob.questionWhat} ${selectedJob.answerWhat} ${selectedJob.questionWhy} ${selectedJob.answerWhy}`,
                    0.88
                  )
                }
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Nghe trọn bộ hội thoại
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {U15_DREAM_JOB_PRESETS.map((job) => {
                const active = job.id === selectedJob.id;
                return (
                  <button
                    key={job.id}
                    type="button"
                    onClick={() => setSelectedJob(job)}
                    className={`p-3 rounded-2xl border flex flex-col items-center text-center gap-2 transition-all cursor-pointer ${
                      active
                        ? 'bg-sky-50 border-sky-500 ring-1 ring-sky-200'
                        : 'bg-slate-50/70 border-slate-200 hover:border-sky-300'
                    }`}
                  >
                    <MiniPictureIcon iconKey={job.iconKey} className="w-12 h-12" />
                    <div>
                      <p className="text-xs font-extrabold text-slate-900">
                        {job.article} {job.jobEn}
                      </p>
                      <p className="text-[11px] text-slate-500">{job.jobVi}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 space-y-2">
                <p className="text-xs font-extrabold uppercase text-sky-800">1. Hỏi nghề mơ ước</p>
                <p className="text-sm font-bold text-slate-900">A: {selectedJob.questionWhat}</p>
                <p className="text-base font-extrabold text-sky-800">B: {selectedJob.answerWhat}</p>
                <p className="text-xs text-slate-600">
                  Nơi làm việc: <strong>{selectedJob.workplace}</strong> ({selectedJob.workplaceVi})
                </p>
              </div>
              <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 space-y-2">
                <p className="text-xs font-extrabold uppercase text-emerald-800">2. Hỏi lý do</p>
                <p className="text-sm font-bold text-slate-900">A: {selectedJob.questionWhy}</p>
                <p className="text-base font-extrabold text-emerald-800">B: {selectedJob.answerWhy}</p>
                <p className="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1.5">
                  <strong>Mẹo nhớ:</strong> {selectedJob.tip}
                </p>
              </div>
            </div>
          </section>

          <ChoiceExerciseBlock
            title="Task 1 · Chọn từ khác loại (Odd one out · Trang 113)"
            instruction="Chọn 1 từ khác loại về từ loại (động từ / danh từ) hoặc chủ đề nghề nghiệp."
            items={U15_TASK1_ODD}
            speakOptions
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <ChoiceExerciseBlock
            title="Task 2 · Khoanh tròn đáp án đúng (6 câu · Trang 113)"
            instruction="Luyện mẫu câu What/Where/Why would you like to... và động từ nguyên mẫu sau like to."
            items={U15_TASK2_MC}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* ==================== PAGE 114 ==================== */}
      {activePage === 114 && (
        <div className="space-y-6">
          <PictureFillBlock
            title="Task 3 · Đọc mô tả và nhìn hình viết tên 5 nghề nghiệp (Trang 113–114)"
            instruction="Ví dụ mẫu 0: They work in a factory. → workers. Hãy đoán 5 nghề nghiệp bên dưới nhé!"
            items={U15_TASK3_DEFS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <TrueFalseReadingBlock
            title={`Task 4 · Đọc hiểu Đúng / Sai: ${U15_TASK4_JIM_READING.title} (Trang 114)`}
            passage={U15_TASK4_JIM_READING.passage}
            passageVi={U15_TASK4_JIM_READING.passageVi}
            example="0. Jim writes to his grandmother. → False (Jim viết thư gửi ông nội — Dear Grandpa!)."
            statements={U15_TASK4_JIM_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* ==================== PAGE 115 ==================== */}
      {activePage === 115 && (
        <div className="space-y-6">
          <SentenceMistakeFixBlock
            title="Task 5 · Tìm lỗi sai trong mỗi câu và viết lại cho đúng (Trang 114–115)"
            instruction="Mỗi câu có 1 lỗi ngữ pháp rất hay gặp khi thi lớp 5. Em hãy viết lại trọn câu đúng nhé!"
            items={U15_TASK5_MISTAKES}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <InlinePictureCloze
            taskId="p115-u15t6-all"
            title="Task 6 · Nhìn tranh điền 5 từ hoàn thành ước mơ của bạn Lê (Trang 115)"
            instruction="Câu mẫu (0): architect. Quan sát 5 hình minh họa ngôi trường mơ ước rồi điền từ chính xác!"
            blanks={U15_TASK6_LE_BLANKS}
            segments={[
              "Hi, I'm Le. I'm 10 years old. Let me tell you about my dream. I'd like to be an (0) architect in the future because I'd like to design schools very much. Look at this picture. This is a nice",
              'for primary children. There are many',
              'in this building. There is also a beautiful',
              'with a lot of books for children. After school, the children can play football with their friends in the school',
              'or swim in a modern swimming',
              '.',
            ]}
            fullAudioText="Hi, I'm Le. I'm 10 years old. Let me tell you about my dream. I'd like to be an architect in the future because I'd like to design schools very much. Look at this picture. This is a nice school for primary children. There are many classrooms in this building. There is also a beautiful library with a lot of books for children. After school, the children can play football with their friends in the school playground or swim in a modern swimming pool."
            translationVi="Xin chào, mình là Lê, 10 tuổi. Để mình kể cho bạn về ước mơ của mình nhé. Mình muốn trở thành kiến trúc sư trong tương lai vì mình rất thích thiết kế trường học. Nhìn bức tranh này xem. Đây là một ngôi trường xinh đẹp cho học sinh tiểu học. Có rất nhiều phòng học trong tòa nhà này. Còn có một thư viện thật đẹp với nhiều sách cho thiếu nhi. Sau giờ học, các bạn nhỏ có thể đá bóng cùng bạn ở sân chơi trường hoặc bơi ở hồ bơi hiện đại."
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* ==================== PAGE 116 ==================== */}
      {activePage === 116 && (
        <div className="space-y-6">
          <PictureFillBlock
            title="Task 7 · Nhìn tranh điền 5 nghề nghiệp mơ ước (Trang 116)"
            instruction="Ví dụ mẫu: He’d like to be a good farmer. Điền 1 từ phù hợp với từng bức tranh nhé!"
            items={U15_TASK7_PICTURES}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <SentenceOrderBlock
            title="Task 8 (Câu 1–2) · Sắp xếp từ thành câu hỏi nghề nghiệp (Trang 116)"
            instruction="Bấm lần lượt các thẻ từ để hoàn thành 2 câu hỏi về ước mơ khi lớn lên."
            items={U15_TASK8_P116}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* ==================== PAGE 117 ==================== */}
      {activePage === 117 && (
        <div className="space-y-6">
          <SentenceOrderBlock
            title="Task 8 (Câu 3–5) · Sắp xếp từ về nghề nghiệp mơ ước (Trang 117)"
            instruction="Hoàn tất 3 câu sắp xếp cuối cùng của Unit 15."
            items={U15_TASK8_P117}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <GuidedWritingBlock
            id="p117-u15t9-writing"
            title="Task 9 · Viết đoạn văn ngắn kể về nghề nghiệp mơ ước của em (Trang 117)"
            instruction="Trả lời 5 câu hỏi gợi ý để tạo thành đoạn văn tiếng Anh giới thiệu ước mơ tương lai của em."
            prompts={U15_TASK9_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* ==================== PAGE 118 ==================== */}
      {activePage === 118 && (
        <div className="space-y-6">
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-extrabold uppercase tracking-wider text-indigo-700">
                Mở đầu Unit 16 · Trang 118
              </p>
              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900">
                Where is the post office?
              </h2>
              <p className="text-sm text-slate-700">
                Chủ đề <strong>Địa điểm & Chỉ đường trong thành phố</strong>: 28 từ vựng, hệ thống giới từ chỉ vị trí & mẫu câu hỏi đường bằng <strong>can</strong>.
              </p>
            </div>
            <MiniPictureIcon iconKey="postoffice" className="w-16 h-16 shrink-0" />
          </div>

          <VocabCardsGrid
            words={U16_VOCAB_PAGE118}
            title="19 từ vựng địa điểm & vị trí Unit 16 — Phần 1 (Trang 118)"
          />
        </div>
      )}

      {/* ==================== PAGE 119 ==================== */}
      {activePage === 119 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U16_VOCAB_PAGE119}
            title="9 từ vựng chỉ đường & phương tiện Unit 16 — Phần 2 (Trang 119 · Tổng 28 từ)"
          />

          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Ngữ pháp 1 (Phần 1) · Hệ thống giới từ chỉ nơi chốn (Trang 119)
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Phân biệt cực trực quan các nhóm giới từ dễ nhầm: <strong>at / in / on</strong>, <strong>above / over</strong>, <strong>in front of / in the front of / opposite</strong>.
              </p>
            </div>

            <DirectionsPlaceDiagram />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {[
                {
                  title: 'AT · IN · ON',
                  color: 'bg-sky-50 border-sky-200',
                  lines: [
                    'at: tại 1 điểm cụ thể (at the bus stop, at home)',
                    'in: bên trong không gian (in the box, in Pink Street)',
                    'on: tiếp xúc bề mặt (on the table, on the corner)',
                  ],
                },
                {
                  title: 'ABOVE vs OVER (Ở trên, không chạm)',
                  color: 'bg-amber-50 border-amber-200',
                  lines: [
                    'above: cao hơn theo phương thẳng (above the clouds)',
                    'over: che phủ hoặc băng qua bên trên (The cat jumped over the fence)',
                  ],
                },
                {
                  title: 'IN FRONT OF vs IN THE FRONT OF vs OPPOSITE',
                  color: 'bg-emerald-50 border-emerald-200',
                  lines: [
                    'in front of: phía trước bên ngoài (in front of the school)',
                    'in the front of: phần đầu bên trong (in the front of the car)',
                    'opposite: đối diện qua đường (opposite the bakery)',
                  ],
                },
              ].map((card) => (
                <div key={card.title} className={`rounded-2xl border p-3.5 space-y-1.5 ${card.color}`}>
                  <p className="font-extrabold text-slate-900">{card.title}</p>
                  {card.lines.map((l) => (
                    <p key={l} className="text-slate-700 leading-relaxed">
                      • {l}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* ==================== PAGE 120 ==================== */}
      {activePage === 120 && (
        <div className="space-y-6">
          {/* Grammar Part 2 + Modal Verb CAN */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <h3 className="font-display font-bold text-xl text-slate-900">
              Ngữ pháp 1 (Phần 2) & Động từ khiếm khuyết CAN (Trang 120)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                <p className="text-xs font-extrabold uppercase text-slate-700">
                  Giới từ vị trí mở rộng (behind · at the end of · near)
                </p>
                <ul className="space-y-1.5 text-slate-700">
                  <li>
                    • <strong>behind</strong>: phía sau bên ngoài (<em>behind my house</em>) ↔ <strong>at the back of</strong>: phía cuối bên trong.
                  </li>
                  <li>
                    • <strong>at the end of</strong>: ở cuối con đường (<em>at the end of the street</em>).
                  </li>
                  <li>
                    • <strong>near / by / next to / close to</strong>: gần, sát cạnh (nhớ: <strong>near</strong> KHÔNG có to, <strong>next to</strong> PHẢI có to!).
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 space-y-2">
                <p className="text-xs font-extrabold uppercase text-sky-800">
                  Cấu trúc động từ khiếm khuyết CAN (có thể)
                </p>
                <ul className="space-y-1.5 text-slate-800">
                  <li>
                    <strong>(+) Khẳng định:</strong> S + <strong>can</strong> + V (nguyên mẫu) → <em>You can walk for 5 minutes.</em>
                  </li>
                  <li>
                    <strong>(-) Phủ định:</strong> S + <strong>cannot / can’t</strong> + V → <em>He can’t swim.</em>
                  </li>
                  <li>
                    <strong>(?) Nghi vấn:</strong> <strong>Can</strong> + S + V? / <strong>How can I get to...?</strong>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Interactive Neighborhood Map & Direction Simulator */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <Compass className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    Bản Đồ Khu Phố & Mô Phỏng Hỏi Đường Tương Tác
                  </h3>
                  <p className="text-sm text-slate-600">
                    Bấm chọn 1 địa điểm trên bản đồ để xem giới từ vị trí chuẩn và nghe cách hỏi – chỉ đường!
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    `${selectedPlace.whereQuestion} ${selectedPlace.whereAnswer} ${selectedPlace.howQuestion} ${selectedPlace.howAnswer}`,
                    0.88
                  )
                }
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Nghe chỉ đường tới {selectedPlace.nameEn}
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {U16_NEIGHBORHOOD_PLACES.map((place) => {
                const active = place.id === selectedPlace.id;
                return (
                  <button
                    key={place.id}
                    type="button"
                    onClick={() => setSelectedPlace(place)}
                    className={`p-3 rounded-2xl border flex flex-col items-center text-center gap-2 transition-all cursor-pointer ${
                      active
                        ? 'bg-indigo-50 border-indigo-500 ring-1 ring-indigo-200'
                        : 'bg-slate-50/70 border-slate-200 hover:border-indigo-300'
                    }`}
                  >
                    <MiniPictureIcon iconKey={place.iconKey} className="w-12 h-12" />
                    <div>
                      <p className="text-xs font-extrabold text-slate-900">{place.nameEn}</p>
                      <p className="text-[11px] text-slate-500">{place.nameVi}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-indigo-50/70 border border-indigo-200 p-4 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold uppercase text-indigo-800">
                    <MapPin className="w-3.5 h-3.5" />
                    1. Hỏi vị trí ({selectedPlace.prepositionHighlight})
                  </span>
                  <span className="text-xs font-semibold text-slate-600">
                    {selectedPlace.streetLabel}
                  </span>
                </div>
                <p className="text-sm font-bold text-slate-900">A: {selectedPlace.whereQuestion}</p>
                <p className="text-base font-extrabold text-indigo-800">
                  B: {selectedPlace.whereAnswer}
                </p>
                <p className="text-xs text-slate-600">→ {selectedPlace.whereAnswerVi}</p>
              </div>

              <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 space-y-2">
                <p className="text-xs font-extrabold uppercase text-emerald-800">
                  2. Hỏi đường đi (How can I get to...?)
                </p>
                <p className="text-sm font-bold text-slate-900">A: {selectedPlace.howQuestion}</p>
                <p className="text-base font-extrabold text-emerald-800">
                  B: {selectedPlace.howAnswer}
                </p>
                <p className="text-xs text-slate-600">→ {selectedPlace.howAnswerVi}</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ==================== PAGE 121 ==================== */}
      {activePage === 121 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3">
            <h3 className="font-display font-bold text-lg text-slate-900">
              3 cách dùng quan trọng của CAN trong tiếng Anh (Trang 121)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div className="rounded-2xl bg-sky-50 border border-sky-200 p-3.5 space-y-1">
                <p className="font-extrabold text-sky-900">1. Nói khả năng hiện tại</p>
                <p className="text-slate-700">
                  <em>I can swim and ride a bike.</em> (Mình biết bơi và đi xe đạp.)
                </p>
              </div>
              <div className="rounded-2xl bg-amber-50 border border-amber-200 p-3.5 space-y-1">
                <p className="font-extrabold text-amber-900">2. Chỉ đường & phương án có thể làm</p>
                <p className="text-slate-700">
                  <em>You can take a coach or go by plane.</em> (Bạn có thể đi xe khách hoặc máy bay.)
                </p>
              </div>
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-3.5 space-y-1">
                <p className="font-extrabold text-emerald-900">3. Xin phép thân mật (Can/Could I...?)</p>
                <p className="text-slate-700">
                  <em>Can I borrow your map? / Could I sit here?</em> (Lịch sự hơn dùng Could I...?)
                </p>
              </div>
            </div>
          </section>

          <ChoiceExerciseBlock
            title="Task 1 · Chọn từ khác loại (Odd one out · Trang 121)"
            instruction="Chọn 1 từ khác loại về từ loại hoặc chủ đề địa điểm / hướng đi."
            items={U16_TASK1_ODD}
            speakOptions
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <ChoiceExerciseBlock
            title="Task 2 (Câu 1–6) · Khoanh tròn đáp án đúng (Trang 121)"
            instruction="Chú ý các cụm cố định: far from, next to, How far, opposite (không có to)!"
            items={U16_TASK2_P121}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* ==================== PAGE 122 ==================== */}
      {activePage === 122 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 2 (Câu 7–8) · Hoàn tất bài trắc nghiệm giới từ & động từ can (Trang 122)"
            instruction="Chọn đáp án chuẩn cho 2 câu cuối của Task 2."
            items={U16_TASK2_P122}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <PairMatchBlock
            title="Task 3 · Nối 6 địa điểm với mô tả công dụng tương ứng (Trang 122)"
            instruction="Câu 1 (Bus stop → d) đã làm mẫu. Chọn 1 địa điểm cột trái rồi bấm thẻ mô tả tương ứng bên phải!"
            items={U16_TASK3_PLACE_MATCH}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* ==================== PAGE 123 ==================== */}
      {activePage === 123 && (
        <div className="space-y-6">
          <TrueFalseReadingBlock
            title={`Task 4 · Đọc hiểu Đúng / Sai: ${U16_TASK4_SCHOOL_READING.title} (Trang 123)`}
            passage={U16_TASK4_SCHOOL_READING.passage}
            passageVi={U16_TASK4_SCHOOL_READING.passageVi}
            example="0. My new school is very far from my house. → False (not very far from my house)."
            statements={U16_TASK4_SCHOOL_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <InlinePictureCloze
            taskId="p123-u16t5-all"
            title="Task 5 · Nhìn tranh điền 5 từ hoàn thành hành trình tới Đảo Côn Đảo (Trang 123)"
            instruction="Câu mẫu (0): island. Quan sát 5 hình minh họa phương tiện & tốc độ rồi điền từ thích hợp!"
            blanks={U16_TASK5_CONDAO_BLANKS}
            segments={[
              'Con Dao is a beautiful (0) island in the South of Viet Nam. From Ha Noi you can',
              'to Ho Chi Minh City. It takes about one hour and forty-five minutes. From there, there are two ways to go to Con Dao: you can take a',
              'to Vung Tau, and then take a',
              'to Con Dao. It takes around twelve hours. Or you can go by',
              ". It's only a forty-five minute flight. It is",
              'but more expensive.',
            ]}
            fullAudioText="Con Dao is a beautiful island in the South of Viet Nam. From Ha Noi you can fly to Ho Chi Minh City. It takes about one hour and forty-five minutes. From there, there are two ways to go to Con Dao: you can take a coach to Vung Tau, and then take a boat to Con Dao. It takes around twelve hours. Or you can go by plane. It's only a forty-five minute flight. It is faster but more expensive."
            translationVi="Côn Đảo là một hòn đảo xinh đẹp ở miền Nam Việt Nam. Từ Hà Nội bạn có thể bay vào TP. Hồ Chí Minh, mất khoảng 1 giờ 45 phút. Từ đó có hai cách ra Côn Đảo: bạn có thể đi xe khách đến Vũng Tàu rồi đi tàu thủy ra Côn Đảo, mất khoảng 12 tiếng. Hoặc bạn có thể đi bằng máy bay, chuyến bay chỉ mất 45 phút — nhanh hơn nhưng đắt hơn."
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* ==================== PAGE 124 ==================== */}
      {activePage === 124 && (
        <div className="space-y-6">
          <PictureFillBlock
            title="Task 6 · Nhìn tranh điền 5 từ chỉ địa điểm & vị trí (Trang 124)"
            instruction="Ví dụ mẫu: There is a supermarket next to my school. Điền 1 từ chính xác cho từng tranh nhé!"
            items={U16_TASK6_PICTURES}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <SentenceOrderBlock
            title="Task 7 (Câu 1) · Sắp xếp từ thành câu hỏi đường lịch sự (Trang 124)"
            instruction="Bấm lần lượt các thẻ từ để hỏi đường tới bảo tàng thật lịch sự với Excuse me."
            items={U16_TASK7_P124}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* ==================== PAGE 125 ==================== */}
      {activePage === 125 && (
        <div className="space-y-6">
          <SentenceOrderBlock
            title="Task 7 (Câu 2–5) · Sắp xếp 4 câu chỉ vị trí & thời gian di chuyển (Trang 125)"
            instruction="Hoàn tất trọn bộ bài tập sắp xếp câu của Unit 16."
            items={U16_TASK7_P125}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <GuidedWritingBlock
            id="p125-u16t8-writing"
            title="Task 8 · Viết đoạn văn ngắn giới thiệu vị trí & đường đến trường của em (Trang 125)"
            instruction="Trả lời 5 câu hỏi gợi ý để tự viết một đoạn văn hoàn chỉnh kể về ngôi trường và đường đi học hằng ngày."
            prompts={U16_TASK8_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          {/* Completion Milestone Celebration Banner */}
          <section className="rounded-3xl bg-gradient-to-r from-sky-600 via-indigo-600 to-emerald-600 p-6 sm:p-7 text-white shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <p className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-200">
                  <Sparkles className="w-4 h-4" />
                  Cán mốc xuất sắc · Trang 1 → Trang 125
                </p>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl">
                  Chúc mừng em đã hoàn thành trọn vẹn 125 trang sách (Unit 1 → Unit 16)!
                </h3>
                <p className="text-sm text-sky-100 max-w-2xl leading-relaxed">
                  Em vừa chinh phục tổng cộng <strong>469 từ vựng chuẩn sách</strong>, sơ đồ kể chuyện cổ tích (Unit 14), ước mơ nghề nghiệp <em>would like to be</em> (Unit 15) và bản đồ chỉ đường thành phố (Unit 16).
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0 bg-white/15 backdrop-blur px-4 py-3 rounded-2xl border border-white/25">
                <Trophy className="w-8 h-8 text-amber-300" />
                <div>
                  <p className="text-xs text-sky-100 font-semibold">Tiến độ sách</p>
                  <p className="font-display font-extrabold text-lg tabular-nums">125 / 125 trang</p>
                </div>
              </div>
            </div>
          </section>

          <div className="flex items-center gap-2 text-xs text-slate-500 justify-center">
            <BookOpen className="w-4 h-4 text-sky-600" />
            <span>Em có thể chuyển sang Đấu trường IOE hoặc Luyện Từ Vựng để củng cố 469 từ đã học bất cứ lúc nào!</span>
          </div>
        </div>
      )}
    </div>
  );
};
