import React, { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  Eye,
  HeartPulse,
  HelpCircle,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Stethoscope,
  Trophy,
  Volume2,
  XCircle,
} from 'lucide-react';
import type { ParagraphBlank } from '../data/pages1to20Data';
import {
  PastSentenceTask,
  ShouldChoiceItem,
  U9_TASK10_WRITING,
  U9_TASK11_ANIMAL_SHOWCASE,
  U9_TASK1_LETTERS,
  U9_TASK2_MATCH,
  U9_TASK3_READING,
  U9_TASK3_SHOWS,
  U9_TASK4_DIALOGUE,
  U9_TASK5A_BLANKS,
  U9_TASK5A_WORDBANK,
  U9_TASK5B_BLANKS,
  U9_TASK5B_WORDBANK,
  U9_TASK6_ZOO_BLANKS,
  U9_TASK7_LOOK_WRITE,
  U9_TASK8_ORDERS_P66,
  U9_TASK8_ORDERS_P67,
  U9_TASK9_PAST_SENTENCES,
  U10_TASK10_WRITING,
  U10_TASK1_ODD,
  U10_TASK2_MISTAKES,
  U10_TASK3_EVENTS_MATCH,
  U10_TASK4_READING,
  U10_TASK5_MC_P74,
  U10_TASK5_MC_P75,
  U10_TASK6_SPORTS_BLANKS,
  U10_TASK7_LOOK_WRITE,
  U10_TASK8_ORDERS_P76,
  U10_TASK8_ORDERS_P77,
  U10_TASK9_TRANSLATE,
  U10_VOCAB_PAGE69,
  U10_VOCAB_PAGE70,
  U11_CLINIC_PRESETS,
  U11_TASK1_ODD,
  U11_TASK2_HEALTH_DEFS,
  U11_TASK3_SHOULD_P82,
  U11_TASK3_SHOULD_P83,
  U11_TASK4_READING,
  U11_TASK5_LETTERS,
  U11_VOCAB_PAGE78,
  U11_VOCAB_PAGE79,
  U11_VOCAB_PAGE80,
} from '../data/pages63to83Data';
import { playFeedbackTone, speakEnglish } from '../utils/speech';
import {
  ChoiceExerciseBlock,
  DialogueOrderBlock,
  GuidedWritingBlock,
  MissingLettersBlock,
  PairMatchBlock,
  PictureFillBlock,
  SentenceOrderBlock,
  TrueFalseReadingBlock,
  VocabCardsGrid,
} from './PageExerciseWidgets';
import {
  BeGoingToDiagram,
  HealthAdviceDiagram,
  MiniPictureIcon,
} from './PageVisuals';

interface Pages63To83ViewProps {
  activePage: number;
  completedTaskIds: string[];
  onCompleteTask: (taskId: string) => void;
  muted: boolean;
}

/* =========================================================
   HELPER 1: PAST SIMPLE SENTENCE BUILDER (UNIT 9 TASK 9)
   ========================================================= */
const PastSentenceBuilderBlock: React.FC<{
  title: string;
  instruction: string;
  items: PastSentenceTask[];
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ title, instruction, items, completedTaskIds, onCompleteTask, muted }) => {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [statusMap, setStatusMap] = useState<Record<string, 'correct' | 'wrong'>>({});

  const normalize = (s: string) =>
    s
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/\.+$/, '')
      .toLowerCase();

  const checkItem = (item: PastSentenceTask) => {
    const val = normalize(inputs[item.id] ?? '');
    if (!val) return;
    const isRight = item.answers.some((a) => normalize(a) === val);
    setStatusMap((prev) => ({ ...prev, [item.id]: isRight ? 'correct' : 'wrong' }));
    playFeedbackTone(isRight ? 'correct' : 'wrong', muted);
    if (isRight) onCompleteTask(item.id);
  };

  const revealItem = (item: PastSentenceTask) => {
    setInputs((prev) => ({ ...prev, [item.id]: item.answers[0] }));
    setStatusMap((prev) => ({ ...prev, [item.id]: 'correct' }));
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="space-y-1">
        <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{instruction}</p>
      </div>

      <div className="space-y-3.5">
        {items.map((item) => {
          const status = statusMap[item.id];
          const done = completedTaskIds.includes(item.id);

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
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="space-y-0.5">
                  <p className="font-mono font-bold text-sm sm:text-base text-slate-900">
                    {item.cue}
                  </p>
                  <p className="text-xs text-slate-600">
                    Nghĩa: {item.cueVi} ·{' '}
                    <span className="font-semibold text-amber-800">Mẹo: {item.verbNote}</span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => speakEnglish(item.answers[0], 0.9)}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-sky-50 text-sky-700 cursor-pointer shrink-0"
                  aria-label="Nghe câu hoàn chỉnh"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
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
                  placeholder="Viết lại câu hoàn chỉnh ở thì Quá khứ đơn..."
                  className="flex-1 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                    onClick={() => revealItem(item)}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-white border border-slate-200 hover:bg-amber-50 text-slate-700 text-xs font-semibold cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Đáp án
                  </button>
                </div>
              </div>

              {status === 'correct' && (
                <p className="text-xs text-emerald-800 font-medium flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item.explanation}</span>
                </p>
              )}
              {status === 'wrong' && (
                <p className="text-xs text-rose-800 font-medium flex items-start gap-1.5">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>Chưa khớp rồi! Chú ý chia động từ quá khứ ({item.verbNote}) rồi thử lại nhé.</span>
                </p>
              )}
              {done && !status && (
                <p className="text-xs text-emerald-700 font-bold inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Đã hoàn thành
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
   HELPER 2: SHOULD / SHOULDN'T TOGGLE BLOCK (UNIT 11 TASK 3)
   ========================================================= */
const ShouldChoiceBlock: React.FC<{
  title: string;
  instruction: string;
  items: ShouldChoiceItem[];
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ title, instruction, items, completedTaskIds, onCompleteTask, muted }) => {
  const [picks, setPicks] = useState<Record<string, 'should' | "shouldn't">>({});
  const [secondPicks, setSecondPicks] = useState<Record<string, 'should' | "shouldn't">>({});

  const handlePick = (item: ShouldChoiceItem, choice: 'should' | "shouldn't", slot: 1 | 2) => {
    if (slot === 1) {
      setPicks((prev) => ({ ...prev, [item.id]: choice }));
      const ok1 = choice === item.answer;
      const ok2 = !item.secondAnswer || secondPicks[item.id] === item.secondAnswer;
      playFeedbackTone(ok1 ? 'correct' : 'wrong', muted);
      if (ok1 && ok2) onCompleteTask(item.id);
    } else {
      setSecondPicks((prev) => ({ ...prev, [item.id]: choice }));
      const ok1 = picks[item.id] === item.answer;
      const ok2 = choice === item.secondAnswer;
      playFeedbackTone(ok2 ? 'correct' : 'wrong', muted);
      if (ok1 && ok2) onCompleteTask(item.id);
    }
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="space-y-1">
        <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{instruction}</p>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const p1 = picks[item.id];
          const p2 = secondPicks[item.id];
          const hasSecond = Boolean(item.secondAnswer);
          const isFullyCorrect =
            p1 === item.answer && (!hasSecond || p2 === item.secondAnswer);
          const hasWrong =
            (p1 && p1 !== item.answer) || (hasSecond && p2 && p2 !== item.secondAnswer);
          const done = completedTaskIds.includes(item.id) || isFullyCorrect;

          const fullSentence = hasSecond
            ? `${item.before} ${item.answer} ${item.after} ${item.secondAnswer} ${item.secondBlankAfter ?? ''}`
            : `${item.before} ${item.answer} ${item.after}`;

          return (
            <div
              key={item.id}
              className={`p-4 rounded-2xl border space-y-2.5 transition-colors ${
                isFullyCorrect
                  ? 'bg-emerald-50/70 border-emerald-300'
                  : hasWrong
                  ? 'bg-rose-50/60 border-rose-300'
                  : 'bg-slate-50/70 border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="text-sm sm:text-base font-medium text-slate-900 leading-relaxed flex flex-wrap items-center gap-1.5">
                  <span className="font-extrabold text-sky-700">{item.number}.</span>
                  <span>{item.before}</span>
                  <span className="inline-flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200">
                    {(['should', "shouldn't"] as const).map((opt) => {
                      const active = p1 === opt;
                      const correctOpt = opt === item.answer;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handlePick(item, opt, 1)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition-colors cursor-pointer ${
                            active
                              ? correctOpt
                                ? 'bg-emerald-600 text-white'
                                : 'bg-rose-600 text-white'
                              : 'text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </span>
                  <span>{item.after}</span>

                  {hasSecond && (
                    <>
                      <span className="inline-flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200">
                        {(['should', "shouldn't"] as const).map((opt) => {
                          const active = p2 === opt;
                          const correctOpt = opt === item.secondAnswer;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => handlePick(item, opt, 2)}
                              className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition-colors cursor-pointer ${
                                active
                                  ? correctOpt
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-rose-600 text-white'
                                  : 'text-slate-700 hover:bg-slate-100'
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </span>
                      <span>{item.secondBlankAfter}</span>
                    </>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => speakEnglish(fullSentence, 0.9)}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-sky-50 text-sky-700 cursor-pointer shrink-0"
                  aria-label={`Nghe câu ${item.number}`}
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {(isFullyCorrect || hasWrong) && (
                <p
                  className={`text-xs font-medium flex items-start gap-1.5 ${
                    isFullyCorrect ? 'text-emerald-800' : 'text-rose-800'
                  }`}
                >
                  {isFullyCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <span>{item.explanation}</span>
                </p>
              )}

              {done && !isFullyCorrect && !hasWrong && (
                <p className="text-xs text-emerald-700 font-bold inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Đã hoàn thành
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
   HELPER 3: INLINE PICTURE CLOZE PASSAGE (P65 & P75)
   ========================================================= */
const InlinePictureCloze: React.FC<{
  taskId: string;
  title: string;
  instruction: string;
  segments: string[];
  blanks: ParagraphBlank[];
  fullAudioText: string;
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
  completedTaskIds,
  onCompleteTask,
  muted,
}) => {
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState<boolean | null>(null);
  const [showHints, setShowHints] = useState(false);

  const checkAll = () => {
    const ok = blanks.every((b) =>
      b.answers.some((a) => a.toLowerCase() === (inputs[b.index] ?? '').trim().toLowerCase())
    );
    setChecked(ok);
    playFeedbackTone(ok ? 'celebrate' : 'wrong', muted);
    if (ok) onCompleteTask(taskId);
  };

  const revealAll = () => {
    const filled: Record<number, string> = {};
    blanks.forEach((b) => {
      filled[b.index] = b.answers[0];
    });
    setInputs(filled);
    setChecked(true);
  };

  const resetAll = () => {
    setInputs({});
    setChecked(null);
  };

  const isDone = completedTaskIds.includes(taskId);

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{instruction}</p>
        </div>
        <button
          type="button"
          onClick={() => speakEnglish(fullAudioText, 0.88)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-xs font-semibold cursor-pointer"
        >
          <Volume2 className="w-4 h-4" />
          Nghe toàn bộ đoạn văn
        </button>
      </div>

      {/* Picture clues row */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {blanks.map((b) => (
          <div
            key={b.id}
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200"
          >
            <MiniPictureIcon iconKey={b.iconKey ?? 'panda'} className="w-10 h-10 shrink-0" />
            <div className="min-w-0">
              <p className="text-xs font-extrabold text-sky-700">Ô ({b.index})</p>
              {showHints && <p className="text-[11px] text-slate-600 leading-tight">{b.hint}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Passage with inline inputs */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-800 leading-9">
        {segments.map((seg, idx) => {
          const blank = blanks[idx];
          const val = blank ? (inputs[blank.index] ?? '') : '';
          const blankCorrect =
            blank &&
            checked !== null &&
            blank.answers.some((a) => a.toLowerCase() === val.trim().toLowerCase());

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
                    className={`w-28 sm:w-32 px-2.5 py-0.5 rounded-lg border text-sm font-bold focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                      checked === null
                        ? 'bg-white border-slate-300 text-slate-900'
                        : blankCorrect
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                        : 'bg-rose-50 border-rose-500 text-rose-800'
                    }`}
                  />
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={checkAll}
          className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs sm:text-sm font-semibold cursor-pointer"
        >
          Kiểm tra cả đoạn
        </button>
        <button
          type="button"
          onClick={() => setShowHints((s) => !s)}
          className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-semibold cursor-pointer"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          {showHints ? 'Ẩn gợi ý' : 'Xem gợi ý'}
        </button>
        <button
          type="button"
          onClick={revealAll}
          className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          Xem đáp án
        </button>
        <button
          type="button"
          onClick={resetAll}
          className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-semibold cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Làm lại
        </button>
        {(checked === true || isDone) && (
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 ml-auto">
            <CheckCircle2 className="w-4 h-4" /> Chính xác hoàn toàn!
          </span>
        )}
        {checked === false && (
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-rose-700 ml-auto">
            <XCircle className="w-4 h-4" /> Một số ô màu đỏ chưa đúng, em kiểm tra lại nhé!
          </span>
        )}
      </div>
    </section>
  );
};

/* =========================================================
   MAIN COMPONENT: PAGES 63 -> 83
   ========================================================= */
export const Pages63To83View: React.FC<Pages63To83ViewProps> = ({
  activePage,
  completedTaskIds,
  onCompleteTask,
  muted,
}) => {
  // Page 65 Task 5A & 5B state
  const [t5aInputs, setT5aInputs] = useState<Record<number, string>>({});
  const [t5aChecked, setT5aChecked] = useState<boolean | null>(null);
  const [t5bInputs, setT5bInputs] = useState<Record<number, string>>({});
  const [t5bChecked, setT5bChecked] = useState<boolean | null>(null);

  // Page 68 Task 11 Zoo Animal Showcase
  const [selectedAnimalKey, setSelectedAnimalKey] = useState<string>('panda');

  // Page 71 Sports Day Plan Builder
  const [planSubj, setPlanSubj] = useState<'I' | 'Mai' | 'Nam and Phong' | 'We'>('I');
  const [planEvent, setPlanEvent] = useState<string>('Sports Day');
  const [planAct, setPlanAct] = useState<string>('play badminton');

  // Page 81 Doctor's Clinic Advice Builder
  const [clinicId, setClinicId] = useState<string>('toothache');

  const checkWordBank = (
    blanks: ParagraphBlank[],
    inputs: Record<number, string>,
    setChecked: React.Dispatch<React.SetStateAction<boolean | null>>,
    taskId: string
  ) => {
    const ok = blanks.every((b) =>
      b.answers.some((a) => a.toLowerCase() === (inputs[b.index] ?? '').trim().toLowerCase())
    );
    setChecked(ok);
    playFeedbackTone(ok ? 'celebrate' : 'wrong', muted);
    if (ok) onCompleteTask(taskId);
  };

  // Computed Sports Day plan strings (Page 71)
  const beVerb = planSubj === 'I' ? 'am' : planSubj === 'Mai' ? 'is' : 'are';
  const beNeg = planSubj === 'I' ? 'am not' : planSubj === 'Mai' ? "isn't" : "aren't";
  const askSubj = planSubj === 'I' ? 'are you' : planSubj === 'Mai' ? 'is Mai' : `are ${planSubj.toLowerCase() === 'we' ? 'you' : planSubj}`;
  const planQuestion = `What ${askSubj} going to do on ${planEvent}?`;
  const planAnswer = `${planSubj} ${beVerb} going to ${planAct} on ${planEvent}.`;
  const planNegative = `${planSubj} ${beNeg} going to stay at home on ${planEvent}.`;

  const activeAnimal =
    U9_TASK11_ANIMAL_SHOWCASE.find((a) => a.key === selectedAnimalKey) ??
    U9_TASK11_ANIMAL_SHOWCASE[0];

  const activeClinic =
    U11_CLINIC_PRESETS.find((c) => c.id === clinicId) ?? U11_CLINIC_PRESETS[0];

  return (
    <div className="space-y-6">
      {/* =========================================================
          PAGE 63: UNIT 9 GRAMMAR 3 + TASK 1 (10 LETTERS) + TASK 2 (10 MATCH)
         ========================================================= */}
      {activePage === 63 && (
        <div className="space-y-6">
          <section className="bg-cyan-50/70 border border-cyan-200 rounded-2xl p-5 sm:p-6 space-y-3">
            <p className="text-xs font-extrabold uppercase tracking-wider text-cyan-800">
              Ngữ pháp 3 (Trang 63) · Hỏi thời điểm đi sở thú trong quá khứ
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm font-extrabold">
              <span className="px-3 py-1.5 rounded-xl bg-cyan-700 text-white">When</span>
              <span>+</span>
              <span className="px-3 py-1.5 rounded-xl bg-sky-600 text-white">did</span>
              <span>+</span>
              <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800">
                you / they
              </span>
              <span>+</span>
              <span className="px-3 py-1.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-950">
                go to the zoo?
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <button
                type="button"
                onClick={() =>
                  speakEnglish('When did you go to the zoo? I went there yesterday morning.', 0.9)
                }
                className="text-left p-3.5 rounded-xl bg-white border border-cyan-200 hover:bg-cyan-50/50 cursor-pointer"
              >
                <p className="text-sm font-bold text-slate-900">
                  🔊 When did you go to the zoo? — I went there yesterday morning.
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Bạn đi sở thú khi nào? — Mình đi sáng hôm qua.
                </p>
              </button>
              <button
                type="button"
                onClick={() =>
                  speakEnglish('When did they go to the zoo? They went there at 8 a.m. last Sunday.', 0.9)
                }
                className="text-left p-3.5 rounded-xl bg-white border border-cyan-200 hover:bg-cyan-50/50 cursor-pointer"
              >
                <p className="text-sm font-bold text-slate-900">
                  🔊 When did they go to the zoo? — They went there at 8 a.m. last Sunday.
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Họ đi sở thú khi nào? — Họ đến đó lúc 8 giờ sáng Chủ nhật tuần trước.
                </p>
              </button>
            </div>
          </section>

          <MissingLettersBlock
            title="Task 1 (Trang 63) · Hoàn thành 10 từ vựng Động vật & Trạng từ Unit 9"
            instruction="Bấm loa để nghe từ hoàn chỉnh, sau đó gõ đầy đủ cả từ tiếng Anh chuẩn chính tả."
            items={U9_TASK1_LETTERS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <PairMatchBlock
            title="Task 2 (Trang 63) · Nối 10 câu hỏi và câu trả lời về chuyến đi Sở thú"
            instruction="Chọn 1 câu hỏi ở cột trái rồi bấm vào câu trả lời tương ứng ở cột phải (j → e)."
            items={U9_TASK2_MATCH}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 64: UNIT 9 TASK 3 (TIMETABLE + T/F) & TASK 4 (DIALOGUE)
         ========================================================= */}
      {activePage === 64 && (
        <div className="space-y-6">
          {/* Visual Zoo Show Timetable */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                  Bảng lịch biểu diễn trực quan · Saturday’s Shows (Trang 64)
                </p>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Lịch xem biểu diễn Thứ Bảy tại Sở thú & Giá vé
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl">
                <Clock className="w-3.5 h-3.5 text-sky-600" />
                3 khung giờ diễn
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {U9_TASK3_SHOWS.map((show) => (
                <div
                  key={show.name}
                  className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200 flex items-start gap-3"
                >
                  <MiniPictureIcon iconKey={show.iconKey} className="w-12 h-12 shrink-0" />
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-display font-extrabold text-sm text-slate-900">
                        {show.name}
                      </p>
                      <span className="px-2 py-0.5 rounded-lg bg-sky-600 text-white text-xs font-extrabold tabular-nums">
                        {show.time}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700">{show.desc}</p>
                    <p className="text-[11px] text-slate-500">{show.descVi}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-slate-100 text-xs">
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <span className="font-semibold text-slate-700">Trẻ dưới 3 tuổi (&lt; 3 years)</span>
                <strong className="text-emerald-700 font-extrabold">FREE (Miễn phí)</strong>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                <span className="font-semibold text-slate-700">Trẻ em (3 – 15 years)</span>
                <strong className="text-amber-900 font-extrabold">£17</strong>
              </div>
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between">
                <span className="font-semibold text-slate-700">Người lớn (Adults)</span>
                <strong className="text-slate-900 font-extrabold">£25</strong>
              </div>
            </div>
          </section>

          <TrueFalseReadingBlock
            title="Task 3 (Trang 64) · Đọc bảng lịch biểu diễn và chọn True (Đúng) / False (Sai)"
            passage={U9_TASK3_READING.passage}
            passageVi={U9_TASK3_READING.passageVi}
            example={U9_TASK3_READING.example}
            statements={U9_TASK3_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <DialogueOrderBlock
            id="p64-u9t4-all"
            title="Task 4 (Trang 64) · Sắp xếp đoạn hội thoại của cô Nga và các bạn học sinh"
            instruction="Lượt 0 [C] đã cho sẵn. Em hãy chọn lần lượt các lượt thoại 1 → 2 → 3 → 4 cho đúng mạch chuyện tham quan sở thú."
            items={U9_TASK4_DIALOGUE}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 65: UNIT 9 TASK 5A, TASK 5B & TASK 6 (ZOO PASSAGE)
         ========================================================= */}
      {activePage === 65 && (
        <div className="space-y-6">
          {/* Task 5A */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Task 5A (Trang 65) · Điền từ gợi ý vào 6 chỗ trống hỏi đáp về Sở thú
                </h3>
                <p className="text-sm text-slate-600">
                  Dùng 6 từ trong khung bên dưới để điền vào đúng chỗ trống (1)–(6).
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    'Where did you go last week? I went to the zoo. How did you go to the zoo? I went there by bus. What did you see at the zoo? I saw a lot of animals.',
                    0.9
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" /> Nghe hội thoại
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200">
              <span className="text-xs font-bold text-amber-900 mr-1">Kho từ gợi ý:</span>
              {U9_TASK5A_WORDBANK.map((w) => (
                <span
                  key={w}
                  className="px-2.5 py-1 rounded-lg bg-white border border-amber-300 text-xs font-extrabold text-slate-800"
                >
                  {w}
                </span>
              ))}
            </div>

            <div className="space-y-2.5 text-sm sm:text-base text-slate-800 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              {[
                { idx: 1, pre: '1. ', post: ' did you go last week?' },
                { idx: 2, pre: '2. I went to the ', post: '.' },
                { idx: 3, pre: '3. ', post: ' did you go to the zoo?' },
                { idx: 4, pre: '4. I went there by ', post: '.' },
                { idx: 5, pre: '5. ', post: ' did you see at the zoo?' },
                { idx: 6, pre: '6. I saw a lot of ', post: '.' },
              ].map((row) => {
                const blank = U9_TASK5A_BLANKS[row.idx - 1];
                const val = t5aInputs[row.idx] ?? '';
                const ok =
                  t5aChecked !== null &&
                  blank.answers.some((a) => a.toLowerCase() === val.trim().toLowerCase());
                return (
                  <div key={row.idx} className="flex flex-wrap items-center gap-1.5">
                    <span className="font-semibold">{row.pre}</span>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => {
                        setT5aInputs((p) => ({ ...p, [row.idx]: e.target.value }));
                        setT5aChecked(null);
                      }}
                      placeholder={`(${row.idx})`}
                      className={`w-28 px-2.5 py-1 rounded-lg border text-sm font-bold focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                        t5aChecked === null
                          ? 'bg-white border-slate-300'
                          : ok
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                          : 'bg-rose-50 border-rose-500 text-rose-800'
                      }`}
                    />
                    <span>{row.post}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  checkWordBank(U9_TASK5A_BLANKS, t5aInputs, setT5aChecked, 'p65-u9t5a-all')
                }
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold cursor-pointer"
              >
                Kiểm tra Task 5A
              </button>
              <button
                type="button"
                onClick={() => {
                  const f: Record<number, string> = {};
                  U9_TASK5A_BLANKS.forEach((b) => {
                    f[b.index] = b.answers[0];
                  });
                  setT5aInputs(f);
                  setT5aChecked(true);
                }}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" /> Đáp án
              </button>
              {(t5aChecked === true || completedTaskIds.includes('p65-u9t5a-all')) && (
                <span className="text-xs font-bold text-emerald-700 inline-flex items-center gap-1 ml-auto">
                  <CheckCircle2 className="w-4 h-4" /> Tuyệt vời! Đúng hết 6/6 chỗ trống.
                </span>
              )}
            </div>
          </section>

          {/* Task 5B */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Task 5B (Trang 65) · Hoàn thành đoạn hội thoại về chú voi con
                </h3>
                <p className="text-sm text-slate-600">
                  Chọn đúng 6 từ gợi ý điền vào hội thoại giữa bạn A và bạn B.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    "I didn't see you yesterday. Where did you go? I went to the zoo. What did you see there? I saw some animals. I enjoyed looking at the baby elephant. What was it like? It was very big. What did it do when you were there? It moved slowly and quietly.",
                    0.88
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" /> Nghe hội thoại
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-emerald-50 border border-emerald-200">
              <span className="text-xs font-bold text-emerald-900 mr-1">Kho từ gợi ý:</span>
              {U9_TASK5B_WORDBANK.map((w) => (
                <span
                  key={w}
                  className="px-2.5 py-1 rounded-lg bg-white border border-emerald-300 text-xs font-extrabold text-slate-800"
                >
                  {w}
                </span>
              ))}
            </div>

            <div className="space-y-2.5 text-sm sm:text-base text-slate-800 bg-slate-50 p-4 rounded-2xl border border-slate-200 leading-8">
              {[
                { idx: 1, pre: "A: I didn't see you yesterday. Where did you ", post: '?' },
                { idx: 2, pre: 'B: I went to the ', post: '.' },
                { idx: 3, pre: 'A: What did you see there?  B: I saw some ', post: '. I enjoyed looking at the baby elephant.' },
                { idx: 4, pre: 'A: What was it ', post: '?' },
                { idx: 5, pre: 'B: It was very ', post: '.' },
                { idx: 6, pre: 'A: What did it do when you were there?  B: It moved ', post: ' and quietly.' },
              ].map((row) => {
                const blank = U9_TASK5B_BLANKS[row.idx - 1];
                const val = t5bInputs[row.idx] ?? '';
                const ok =
                  t5bChecked !== null &&
                  blank.answers.some((a) => a.toLowerCase() === val.trim().toLowerCase());
                return (
                  <div key={row.idx} className="flex flex-wrap items-center gap-1.5">
                    <span>{row.pre}</span>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => {
                        setT5bInputs((p) => ({ ...p, [row.idx]: e.target.value }));
                        setT5bChecked(null);
                      }}
                      placeholder={`(${row.idx})`}
                      className={`w-28 px-2.5 py-0.5 rounded-lg border text-sm font-bold focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                        t5bChecked === null
                          ? 'bg-white border-slate-300'
                          : ok
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                          : 'bg-rose-50 border-rose-500 text-rose-800'
                      }`}
                    />
                    <span>{row.post}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  checkWordBank(U9_TASK5B_BLANKS, t5bInputs, setT5bChecked, 'p65-u9t5b-all')
                }
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold cursor-pointer"
              >
                Kiểm tra Task 5B
              </button>
              <button
                type="button"
                onClick={() => {
                  const f: Record<number, string> = {};
                  U9_TASK5B_BLANKS.forEach((b) => {
                    f[b.index] = b.answers[0];
                  });
                  setT5bInputs(f);
                  setT5bChecked(true);
                }}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" /> Đáp án
              </button>
              {(t5bChecked === true || completedTaskIds.includes('p65-u9t5b-all')) && (
                <span className="text-xs font-bold text-emerald-700 inline-flex items-center gap-1 ml-auto">
                  <CheckCircle2 className="w-4 h-4" /> Xuất sắc! Đúng hết 6/6 chỗ trống.
                </span>
              )}
            </div>
          </section>

          {/* Task 6 Complete Passage (spans pp. 65-66 in PDF, placed cleanly here) */}
          <InlinePictureCloze
            taskId="p65-u9t6-all"
            title="Task 6 (Trang 65–66) · Nhìn 5 hình minh họa và điền vào đoạn văn Chuyến đi Sở thú"
            instruction="Quan sát 5 hình động vật gợi ý (nhớ chia động từ quá khứ -ed ở ô 1, 2 và danh từ số nhiều ở ô 3, 4!)."
            segments={[
              'Last Sunday, my class went to the zoo. It was a sunny day. We saw a lot of wild (0) animals. Big tigers ',
              ' loudly. A baby elephant ',
              ' water with its trunk. It looked happy. Three ',
              ' were so noisy on the tree. The ',
              ' moved so quietly. In the end, we had a lot of fun at the ',
              ' show. It was a great trip to the zoo.',
            ]}
            blanks={U9_TASK6_ZOO_BLANKS}
            fullAudioText="Last Sunday, my class went to the zoo. It was a sunny day. We saw a lot of wild animals. Big tigers roared loudly. A baby elephant sprayed water with its trunk. It looked happy. Three monkeys were so noisy on the tree. The pythons moved so quietly. In the end, we had a lot of fun at the penguin show. It was a great trip to the zoo."
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 66: UNIT 9 TASK 7 (5 PICTURES) & TASK 8 Q1
         ========================================================= */}
      {activePage === 66 && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-sm text-sky-950">
            <strong>Ví dụ mẫu (Trang 66):</strong> We visited <strong>London Zoo</strong> last week. (Nhớ chú ý số ít <em>A peacock / A panda</em> và số nhiều <em>Two tigers / some gorillas / kangaroos</em> nhé!)
          </div>

          <PictureFillBlock
            title="Task 7 (Trang 66) · Look and write (Nhìn 5 hình động vật điền tên chính xác)"
            instruction="Nhìn hình minh họa từng loài vật và gõ đúng dạng số ít / số nhiều vào ô trống."
            items={U9_TASK7_LOOK_WRITE}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <SentenceOrderBlock
            title="Task 8 (Trang 66 · Câu 1) · Sắp xếp từ thành câu hỏi hoàn chỉnh"
            instruction="Bấm vào từng thẻ từ theo đúng trật tự để tạo thành câu hỏi với Where did...?"
            items={U9_TASK8_ORDERS_P66}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 67: UNIT 9 TASK 8 (Q2-8) & TASK 9 (Q1-2)
         ========================================================= */}
      {activePage === 67 && (
        <div className="space-y-6">
          <SentenceOrderBlock
            title="Task 8 (Trang 67 · Câu 2–8) · Sắp xếp 7 câu về Động vật Sở thú & Trạng từ"
            instruction="Ghép các từ bị xáo trộn thành câu hỏi và câu kể chuẩn ngữ pháp thì Quá khứ đơn."
            items={U9_TASK8_ORDERS_P67}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <PastSentenceBuilderBlock
            title="Task 9 (Trang 67 · Câu 1–2) · Viết câu hoàn chỉnh ở thì Quá khứ đơn"
            instruction="Chuyển động từ trong gợi ý sang dạng Quá khứ đơn (V-ed hoặc V2 bất quy tắc) rồi viết thành câu đầy đủ."
            items={U9_TASK9_PAST_SENTENCES.slice(0, 2)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 68: UNIT 9 TASK 9 (Q3-5), TASK 10 WRITING & TASK 11 SHOWCASE
         ========================================================= */}
      {activePage === 68 && (
        <div className="space-y-6">
          <PastSentenceBuilderBlock
            title="Task 9 (Trang 68 · Câu 3–5) · Tiếp tục viết câu Quá khứ đơn"
            instruction="Hoàn thành 3 câu cuối của Task 9 — nhớ quy tắc go → went và study → studied!"
            items={U9_TASK9_PAST_SENTENCES.slice(2)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <GuidedWritingBlock
            id="p68-u9t10-write"
            title="Task 10 (Trang 68) · Viết về chuyến đi Sở thú cùng người bạn thân của em"
            instruction="Trả lời 4 câu hỏi gợi ý bên dưới để ghép thành một đoạn văn tiếng Anh hoàn chỉnh và bấm nghe lại bài viết của em."
            prompts={U9_TASK10_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          {/* Task 11 Interactive Favorite Zoo Animal Showcase */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-extrabold uppercase tracking-wider text-cyan-700">
                Task 11 (Trang 68) · Góc sáng tạo Sở thú
              </p>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Chọn loài vật em yêu thích nhất ở Sở thú & luyện nói câu miêu tả
              </h3>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {U9_TASK11_ANIMAL_SHOWCASE.map((ani) => {
                const active = ani.key === activeAnimal.key;
                return (
                  <button
                    key={ani.key}
                    type="button"
                    onClick={() => {
                      setSelectedAnimalKey(ani.key);
                      speakEnglish(ani.sentence, 0.9);
                    }}
                    className={`p-2 rounded-2xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      active
                        ? 'bg-cyan-50 border-cyan-500 ring-1 ring-cyan-200'
                        : 'bg-slate-50 border-slate-200 hover:border-cyan-300'
                    }`}
                  >
                    <MiniPictureIcon iconKey={ani.key} className="w-11 h-11" />
                    <span className="text-[11px] font-bold text-slate-800">{ani.nameEn}</span>
                  </button>
                );
              })}
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-cyan-50/60 border border-cyan-200 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <MiniPictureIcon iconKey={activeAnimal.key} className="w-20 h-20 shrink-0" />
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-display font-extrabold text-xl text-slate-900">
                    {activeAnimal.nameEn} ({activeAnimal.nameVi})
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-lg bg-cyan-700 text-white text-xs font-bold">
                    {activeAnimal.adverbPhrase}
                  </span>
                </div>
                <p className="text-sm sm:text-base font-bold text-slate-900">
                  “{activeAnimal.sentence}”
                </p>
                <p className="text-xs sm:text-sm text-slate-600">{activeAnimal.sentenceVi}</p>
                <p className="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-xl px-3 py-1.5 inline-block">
                  <strong>Sự thật thú vị:</strong> {activeAnimal.funFact}
                </p>
              </div>
              <button
                type="button"
                onClick={() => speakEnglish(activeAnimal.sentence, 0.88)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white text-xs font-bold cursor-pointer shrink-0"
              >
                <Volume2 className="w-4 h-4" /> Nghe câu mẫu
              </button>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 69: UNIT 10 OPENING & VOCAB PART 1 (11 WORDS)
         ========================================================= */}
      {activePage === 69 && (
        <div className="space-y-6">
          <section className="bg-rose-50/70 border border-rose-200 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-rose-700">
                Mở đầu Unit 10 (Trang 69) · Sự kiện & Ngày hội ở trường
              </p>
              <h2 className="font-display text-2xl font-extrabold text-slate-900">
                Unit 10: When will Sports Day be?
              </h2>
              <p className="text-sm text-slate-700">
                Chủ đề hào hứng nhất năm học: hỏi khi nào diễn ra <strong>Sports Day, Teachers’ Day, Independence Day, Children’s Day</strong> và lập kế hoạch thi đấu với <strong>be going to</strong>!
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <MiniPictureIcon iconKey="sportsday" className="w-14 h-14" />
              <MiniPictureIcon iconKey="musicfest" className="w-14 h-14" />
            </div>
          </section>

          <VocabCardsGrid
            words={U10_VOCAB_PAGE69}
            title="11 từ vựng Ngày lễ, Sự kiện & Sân bãi (Trang 69)"
          />
        </div>
      )}

      {/* =========================================================
          PAGE 70: UNIT 10 VOCAB PART 2 (11 WORDS) & GRAMMAR 1A–1B
         ========================================================= */}
      {activePage === 70 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U10_VOCAB_PAGE70}
            title="11 từ vựng Môn thể thao & Thi đấu (Trang 70)"
          />

          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <h3 className="font-display font-bold text-xl text-slate-900">
              Ngữ pháp 1a & 1b (Trang 70) · Nói dự định tương lai với “be going to + V”
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2.5">
                <p className="text-xs font-extrabold uppercase text-emerald-800">
                  1a. Thể khẳng định (+) · S + am / is / are + going to + V
                </p>
                <button
                  type="button"
                  onClick={() =>
                    speakEnglish(
                      'I am going to play football on Sports Day. Mai is going to play badminton.',
                      0.9
                    )
                  }
                  className="w-full text-left p-3 rounded-xl bg-white border border-emerald-200 hover:bg-emerald-50/40 text-sm cursor-pointer"
                >
                  <p className="font-bold text-slate-900">
                    🔊 I <u>am going to play</u> football on Sports Day.
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Mình dự định đá bóng vào Ngày hội Thể thao.
                  </p>
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2.5">
                <p className="text-xs font-extrabold uppercase text-rose-800">
                  1b. Thể phủ định (-) · S + am / is / are + not + going to + V
                </p>
                <button
                  type="button"
                  onClick={() =>
                    speakEnglish(
                      "He isn't going to play table tennis. They aren't going to stay at home.",
                      0.9
                    )
                  }
                  className="w-full text-left p-3 rounded-xl bg-white border border-rose-200 hover:bg-rose-50/40 text-sm cursor-pointer"
                >
                  <p className="font-bold text-slate-900">
                    🔊 He <u>isn’t going to play</u> table tennis.
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Cậu ấy không dự định chơi bóng bàn. (is not = isn’t · are not = aren’t)
                  </p>
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 71: BE GOING TO DIAGRAM + INTERACTIVE SPORTS DAY PLANNER
         ========================================================= */}
      {activePage === 71 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Ngữ pháp 1c (Trang 71) · Sơ đồ trọn bộ cấu trúc “be going to”
              </h3>
              <p className="text-sm text-slate-600 mt-0.5">
                Xem cả 3 dạng Khẳng định – Phủ định – Câu hỏi và mẹo đặc biệt với động từ <strong>go / come</strong>.
              </p>
            </div>
            <BeGoingToDiagram />
          </section>

          {/* Interactive Sports Day Plan Builder */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-rose-700">
                  Xưởng ghép câu trực quan · Trang 71
                </p>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Lập kế hoạch tham gia Ngày hội của trường em
                </h3>
              </div>
              <button
                type="button"
                onClick={() => speakEnglish(`${planQuestion} ${planAnswer}`, 0.9)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Nghe cặp hỏi – đáp
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">1. Chọn chủ ngữ (S)</label>
                <div className="flex flex-wrap gap-1.5">
                  {(['I', 'Mai', 'Nam and Phong', 'We'] as const).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setPlanSubj(s)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer ${
                        planSubj === s
                          ? 'bg-sky-600 border-sky-600 text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">2. Chọn ngày lễ / sự kiện</label>
                <div className="flex flex-wrap gap-1.5">
                  {['Sports Day', "Teachers' Day", "Children's Day", 'the music festival'].map(
                    (ev) => (
                      <button
                        key={ev}
                        type="button"
                        onClick={() => setPlanEvent(ev)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer ${
                          planEvent === ev
                            ? 'bg-rose-600 border-rose-600 text-white'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {ev}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">3. Chọn hoạt động dự định</label>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'play badminton',
                    'play football',
                    'play table tennis',
                    'play the violin',
                    'sing English songs',
                  ].map((act) => (
                    <button
                      key={act}
                      type="button"
                      onClick={() => setPlanAct(act)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer ${
                        planAct === act
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {act}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 space-y-1">
                <span className="text-[11px] font-extrabold uppercase text-sky-700">Câu hỏi (?)</span>
                <p className="text-sm font-bold text-slate-900">{planQuestion}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                <span className="text-[11px] font-extrabold uppercase text-emerald-700">Trả lời (+)</span>
                <p className="text-sm font-bold text-slate-900">{planAnswer}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 space-y-1">
                <span className="text-[11px] font-extrabold uppercase text-rose-700">Phủ định (-)</span>
                <p className="text-sm font-bold text-slate-900">{planNegative}</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 72: GRAMMAR 2 + TASK 1 (ODD ONE OUT) + TASK 2 (Q1)
         ========================================================= */}
      {activePage === 72 && (
        <div className="space-y-6">
          <section className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 space-y-3">
            <p className="text-xs font-extrabold uppercase tracking-wider text-amber-900">
              Ngữ pháp 2 (Trang 72) · Hỏi ai đó dự định làm gì trong sự kiện
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm font-extrabold">
              <span className="px-3 py-1.5 rounded-xl bg-amber-600 text-white">What</span>
              <span>+</span>
              <span className="px-3 py-1.5 rounded-xl bg-sky-600 text-white">is / are</span>
              <span>+</span>
              <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800">
                S (you / Phong / they)
              </span>
              <span>+</span>
              <span className="px-3 py-1.5 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-950">
                going to do on Sports Day?
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700">
              Ví dụ: <strong>What are you going to do on Sports Day?</strong> → I’m going to play basketball.
            </p>
          </section>

          <ChoiceExerciseBlock
            title="Task 1 (Trang 72) · Odd one out (Chọn 1 từ khác loại)"
            instruction="Đọc kỹ 4 phương án và chọn 1 từ khác loại về nghĩa hoặc ngữ pháp."
            items={U10_TASK1_ODD}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <ChoiceExerciseBlock
            title="Task 2 (Trang 72 · Câu 1) · Tìm lỗi sai trong câu"
            instruction="Chọn phần gạch chân bị sai ngữ pháp trong câu dưới đây."
            items={U10_TASK2_MISTAKES.slice(0, 1)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 73: TASK 2 (Q2-6 MISTAKES) & TASK 3 (5 SCHOOL EVENTS MATCH)
         ========================================================= */}
      {activePage === 73 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 2 (Trang 73 · Câu 2–6) · Tìm lỗi sai ngữ pháp"
            instruction="Áp dụng các quy tắc: be going to + V, Would you like to + V, like + V-ing, want + to V để tìm lỗi sai."
            items={U10_TASK2_MISTAKES.slice(1)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <PairMatchBlock
            title="Task 3 (Trang 73) · Nối mô tả với đúng 5 Ngày lễ / Sự kiện ở trường"
            instruction="Câu 0 (Sports Day) đã nối mẫu. Em hãy bấm chọn từng mô tả bên trái rồi chọn đúng thẻ ngày lễ bên phải."
            items={U10_TASK3_EVENTS_MATCH}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 74: TASK 4 (TIM'S MUSIC FESTIVAL) & TASK 5 (Q1-10)
         ========================================================= */}
      {activePage === 74 && (
        <div className="space-y-6">
          <TrueFalseReadingBlock
            title="Task 4 (Trang 74) · Đọc hiểu về Liên hoan Âm nhạc trường của Tim (True / False)"
            passage={U10_TASK4_READING.passage}
            passageVi={U10_TASK4_READING.passageVi}
            example={U10_TASK4_READING.example}
            statements={U10_TASK4_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <ChoiceExerciseBlock
            title="Task 5 (Trang 74 · Câu 1–10) · Chọn đáp án đúng nhất"
            instruction="Luyện nhuần nhuyễn When/Where, will, be going to và các ngày lễ lớn của Unit 10."
            items={U10_TASK5_MC_P74}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 75: TASK 5 (Q11-20) & TASK 6 (SPORTS DAY PICTURE CLOZE)
         ========================================================= */}
      {activePage === 75 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 5 (Trang 75 · Câu 11–20) · Tiếp tục chọn đáp án đúng nhất"
            instruction="Hoàn thành 10 câu trắc nghiệm tiếp theo để nắm chắc trọn bộ kiến thức Unit 10."
            items={U10_TASK5_MC_P75}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <InlinePictureCloze
            taskId="p75-u10t6-all"
            title="Task 6 (Trang 75–76) · Nhìn 5 hình minh họa và điền vào đoạn văn Ngày hội Thể thao"
            instruction="Quan sát 5 biểu tượng (Hội thao, Bơi, Bóng đá, Cầu lông, Chiếc cúp chiến thắng) để điền từ chính xác."
            segments={[
              'I love all of the events at my (0) school, but I like ',
              ' Day the best. It will be next weekend at the school sports centre. The pupils in my class are going to take part in this event. I like swimming so I’m going to ',
              '. Nam and Hung are going to play in a ',
              ' match. Hoa and Mai are going to play ',
              '. We are practising hard for the sports event. And we hope that we’ll ',
              ' the competitions.',
            ]}
            blanks={U10_TASK6_SPORTS_BLANKS}
            fullAudioText="I love all of the events at my school, but I like Sports Day the best. It will be next weekend at the school sports centre. The pupils in my class are going to take part in this event. I like swimming so I'm going to swim. Nam and Hung are going to play in a football match. Hoa and Mai are going to play badminton. We are practising hard for the sports event. And we hope that we'll win the competitions."
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 76: TASK 7 (4 PICTURES) & TASK 8 (Q1)
         ========================================================= */}
      {activePage === 76 && (
        <div className="space-y-6">
          <PictureFillBlock
            title="Task 7 (Trang 76) · Look and write (Nhìn 4 hình ngày lễ & nhạc cụ điền từ)"
            instruction="Quan sát hình ảnh ngày 20/11, đàn vĩ cầm, ngày 1/6 và cờ đỏ sao vàng 2/9 để điền từ đúng."
            items={U10_TASK7_LOOK_WRITE}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <SentenceOrderBlock
            title="Task 8 (Trang 76 · Câu 1) · Sắp xếp từ thành câu hỏi tương lai"
            instruction="Ghép các từ bị xáo trộn thành câu hỏi với When will...?"
            items={U10_TASK8_ORDERS_P76}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 77: TASK 8 (Q2-10) & TASK 9 (TRANSLATE Q1-2)
         ========================================================= */}
      {activePage === 77 && (
        <div className="space-y-6">
          <SentenceOrderBlock
            title="Task 8 (Trang 77 · Câu 2–10) · Sắp xếp 9 câu chuẩn ngữ pháp Unit 10"
            instruction="Bấm lần lượt từng thẻ từ để hoàn thiện 9 câu về Ngày hội Thể thao, Ngày Nhà giáo và Liên hoan âm nhạc."
            items={U10_TASK8_ORDERS_P77}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <ChoiceExerciseBlock
            title="Task 9 (Trang 77 · Câu 1–2) · Dịch câu sang Tiếng Anh"
            instruction="Chọn bản dịch Tiếng Anh chính xác nhất về ngữ pháp và ngữ nghĩa."
            items={U10_TASK9_TRANSLATE.slice(0, 2)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 78: U10 TASK 9 Q3, TASK 10 WRITING + UNIT 11 OPENING (6 VOCAB)
         ========================================================= */}
      {activePage === 78 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 9 (Trang 78 · Câu 3) · Dịch câu sang Tiếng Anh"
            instruction="Hoàn thành câu dịch cuối cùng của Unit 10."
            items={U10_TASK9_TRANSLATE.slice(2)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <GuidedWritingBlock
            id="p78-u10t10-write"
            title="Task 10 (Trang 78) · Viết về một sự kiện sắp tới ở trường em"
            instruction="Hoàn thành 4 câu trả lời gợi ý để tạo đoạn văn giới thiệu Sports Day hoặc Music Festival tại trường em."
            prompts={U10_TASK10_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          {/* Unit 11 Opening Banner */}
          <section className="bg-rose-50/70 border border-rose-200 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-rose-700">
                Mở đầu Học kì 2 · Unit 11 (Trang 78)
              </p>
              <h2 className="font-display text-2xl font-extrabold text-slate-900">
                Unit 11: What’s the matter with you?
              </h2>
              <p className="text-sm text-slate-700">
                Học cách hỏi thăm sức khỏe, gọi tên các căn bệnh thường gặp (sốt, đau đầu, đau răng, đau họng...) và đưa lời khuyên với <strong>should / shouldn’t</strong>.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <MiniPictureIcon iconKey="fever" className="w-14 h-14" />
              <MiniPictureIcon iconKey="dentist" className="w-14 h-14" />
            </div>
          </section>

          <VocabCardsGrid
            words={U11_VOCAB_PAGE78}
            title="6 từ vựng mở đầu Unit 11 (Trang 78)"
          />
        </div>
      )}

      {/* =========================================================
          PAGE 79: UNIT 11 FULL 25 VOCABULARY WORDS
         ========================================================= */}
      {activePage === 79 && (
        <div className="space-y-6">
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <p className="text-sm text-rose-950">
              <strong>Mẹo nhớ nhanh 25 từ Trang 79:</strong> Hãy bấm lọc theo nhóm <strong>“Bệnh có đuôi -ache”</strong> (toothache, earache, stomach ache, backache) — ghép <em>bộ phận cơ thể + ache</em> là thuộc ngay 4 từ chỉ trong 10 giây!
            </p>
          </div>
          <VocabCardsGrid
            words={U11_VOCAB_PAGE79}
            title="25 từ vựng Sức khỏe, Triệu chứng & Chăm sóc cơ thể (Trang 79)"
          />
        </div>
      )}

      {/* =========================================================
          PAGE 80: UNIT 11 VOCAB (2 WORDS) + GRAMMAR 1 & 2 DIAGRAM
         ========================================================= */}
      {activePage === 80 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U11_VOCAB_PAGE80}
            title="2 từ vựng bổ sung Unit 11 (Trang 80)"
          />

          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex items-center gap-2">
              <HeartPulse className="w-5 h-5 text-rose-600" />
              <h3 className="font-display font-bold text-xl text-slate-900">
                Ngữ pháp 1 & 2 (Trang 80) · Hỏi thăm sức khỏe & Lời khuyên should / shouldn’t
              </h3>
            </div>
            <HealthAdviceDiagram />
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 81: INTERACTIVE DOCTOR'S CLINIC + TASK 1 (Q1-3)
         ========================================================= */}
      {activePage === 81 && (
        <div className="space-y-6">
          {/* Interactive Doctor's Clinic Advice Builder */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-rose-700 inline-flex items-center gap-1.5">
                  <Stethoscope className="w-4 h-4" />
                  Ngữ pháp 3 · Phòng khám Bác sĩ tương tác (Trang 81)
                </p>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Chọn 1 triệu chứng để xem & nghe trọn bộ hội thoại Khuyên sức khỏe
                </h3>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    `What's the matter with you? I have ${activeClinic.article} ${activeClinic.symptomEn}. You should ${activeClinic.shouldDo}. You shouldn't ${activeClinic.shouldntDo}. ${activeClinic.response}`,
                    0.88
                  )
                }
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Nghe cả đoạn khám bệnh
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {U11_CLINIC_PRESETS.map((preset) => {
                const active = preset.id === activeClinic.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setClinicId(preset.id)}
                    className={`p-3 rounded-2xl border flex flex-col items-center text-center gap-1.5 transition-all cursor-pointer ${
                      active
                        ? 'bg-rose-50 border-rose-500 ring-1 ring-rose-200'
                        : 'bg-slate-50 border-slate-200 hover:border-rose-300'
                    }`}
                  >
                    <MiniPictureIcon iconKey={preset.iconKey} className="w-12 h-12" />
                    <span className="text-xs font-extrabold text-slate-900 capitalize">
                      {preset.symptomEn}
                    </span>
                    <span className="text-[11px] text-slate-500">{preset.symptomVi}</span>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-2">
                <p className="text-xs font-extrabold uppercase text-sky-800">
                  1. Hỏi & Báo triệu chứng
                </p>
                <p className="text-sm font-bold text-slate-900">
                  👨‍⚕️ Doctor: What’s the matter with you?
                </p>
                <p className="text-sm font-bold text-rose-800">
                  🧒 Patient: I have {activeClinic.article} <u>{activeClinic.symptomEn}</u>. (Cháu bị {activeClinic.symptomVi}.)
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                <p className="text-xs font-extrabold uppercase text-emerald-800">
                  2. Kê lời khuyên & Đáp lễ lịch sự
                </p>
                <p className="text-xs sm:text-sm font-bold text-emerald-900">
                  ✅ You <strong>should</strong> {activeClinic.shouldDo}. <span className="font-normal text-slate-600">({activeClinic.shouldDoVi})</span>
                </p>
                <p className="text-xs sm:text-sm font-bold text-rose-900">
                  ❌ You <strong>shouldn’t</strong> {activeClinic.shouldntDo}. <span className="font-normal text-slate-600">({activeClinic.shouldntDoVi})</span>
                </p>
                <p className="text-xs font-extrabold text-sky-800 pt-1 border-t border-emerald-200">
                  💬 Đáp lại: {activeClinic.response}
                </p>
              </div>
            </div>
          </section>

          <ChoiceExerciseBlock
            title="Task 1 (Trang 81 · Câu 1–3) · Odd one out (Chọn từ khác loại)"
            instruction="Phân biệt từ chỉ bệnh (danh từ), tính từ và động từ để tìm từ khác loại."
            items={U11_TASK1_ODD.slice(0, 3)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 82: TASK 1 (Q4-5), TASK 2 (5 HEALTH WORDS) & TASK 3 (Q1-13)
         ========================================================= */}
      {activePage === 82 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 1 (Trang 82 · Câu 4–5) · Odd one out (tiếp theo)"
            instruction="Hoàn thành 2 câu cuối của bài chọn từ khác loại."
            items={U11_TASK1_ODD.slice(3)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-sm text-rose-950">
            <strong>Ví dụ mẫu Task 2 (Trang 82):</strong> It’s a pain in your tooth. → <strong>toothache</strong> (đau răng).
          </div>

          <PictureFillBlock
            title="Task 2 (Trang 82) · Look and write (Nhìn 5 hình & mô tả để viết từ sức khỏe)"
            instruction="Đọc lời giải thích ngắn, nhìn hình minh họa và viết từ tiếng Anh tương ứng."
            items={U11_TASK2_HEALTH_DEFS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <ShouldChoiceBlock
            title="Task 3 (Trang 82 · Câu 1–13) · Chọn “should” (nên) hay “shouldn’t” (không nên)"
            instruction="Bấm trực tiếp vào nút should hoặc shouldn't trong từng câu để kiểm tra ngay và nghe phát âm chuẩn."
            items={U11_TASK3_SHOULD_P82}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 83: TASK 3 (Q14-18), TASK 4 (MAY'S TOOTHACHE) & TASK 5 (27 WORDS)
         ========================================================= */}
      {activePage === 83 && (
        <div className="space-y-6">
          <ShouldChoiceBlock
            title="Task 3 (Trang 83 · Câu 14–18) · Hoàn thành chọn “should / shouldn’t”"
            instruction="Chú ý câu 15 có hai ô chọn trong cùng một câu em nhé!"
            items={U11_TASK3_SHOULD_P83}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <TrueFalseReadingBlock
            title="Task 4 (Trang 83) · Đọc hiểu câu chuyện bé May bị đau răng (True / False)"
            passage={U11_TASK4_READING.passage}
            passageVi={U11_TASK4_READING.passageVi}
            example={U11_TASK4_READING.example}
            statements={U11_TASK4_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <MissingLettersBlock
            title="Task 5 (Trang 83) · Thử thách chính tả 27 từ cốt lõi (Điền chữ cái còn thiếu)"
            instruction="Bấm loa để nghe phát âm, xem nghĩa tiếng Việt và gõ đầy đủ cả từ đúng chính tả."
            items={U11_TASK5_LETTERS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          {/* Completion Celebration Banner */}
          <section className="bg-emerald-50 border border-emerald-300 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Trophy className="w-6 h-6" />
              </span>
              <div className="space-y-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 inline-flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Hoàn thành trọn vẹn 83 trang đầu tiên!
                </p>
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900">
                  Chúc mừng em đã chinh phục từ Trang 1 đến Trang 83 (Unit 1 → Unit 11)!
                </h3>
                <p className="text-sm text-slate-700">
                  Em đã làm chủ <strong>300 từ vựng</strong>, sơ đồ ngữ pháp <strong>Quá khứ đơn · Tương lai gần (be going to) · Lời khuyên sức khỏe (should / shouldn’t)</strong> cùng hàng trăm câu thực hành trực quan.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
