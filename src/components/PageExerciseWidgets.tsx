import React, { useMemo, useState } from 'react';
import {
  CheckCircle2,
  Eye,
  HelpCircle,
  RotateCcw,
  Sparkles,
  Turtle,
  Volume2,
  XCircle,
} from 'lucide-react';
import type {
  DialogueOrderItem,
  FillItem,
  GuidedWritingPrompt,
  OrderSentenceItem,
  PageVocabWord,
  QuizChoiceItem,
} from '../data/pages1to20Data';
import type { PairMatchItem } from '../data/pages21to41Data';
import type { LetterFillItem } from '../data/pages42to62Data';
import { playFeedbackTone, speakEnglish } from '../utils/speech';
import { CalendarCheckVisual, MiniPictureIcon } from './PageVisuals';

/* =========================================================
   1. VOCABULARY CARDS GRID (GROUPED, AUDIO + MEMORY TIPS)
   ========================================================= */
export const VocabCardsGrid: React.FC<{
  words: PageVocabWord[];
  title?: string;
}> = ({ words, title }) => {
  const [activeGroup, setActiveGroup] = useState<string>('Tất cả');

  const groups = useMemo(() => {
    const unique = Array.from(new Set(words.map((w) => w.group)));
    return ['Tất cả', ...unique];
  }, [words]);

  const visibleWords = useMemo(
    () => (activeGroup === 'Tất cả' ? words : words.filter((w) => w.group === activeGroup)),
    [words, activeGroup]
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {title && (
          <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
        )}
        {groups.length > 2 && (
          <div className="flex flex-wrap gap-1.5">
            {groups.map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setActiveGroup(g)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  activeGroup === g
                    ? 'bg-sky-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleWords.map((item) => (
          <div
            key={item.word}
            className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between gap-3 hover:border-sky-300 transition-colors"
          >
            <div className="space-y-1.5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-display font-extrabold text-lg text-slate-900">
                      {item.word}
                    </span>
                    <span className="text-xs font-semibold text-sky-700">({item.pos})</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">{item.ipa}</p>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => speakEnglish(item.word, 0.92)}
                    className="p-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 cursor-pointer"
                    aria-label={`Nghe từ ${item.word}`}
                    title="Nghe chuẩn"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => speakEnglish(item.word, 0.65)}
                    className="p-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 cursor-pointer"
                    aria-label={`Nghe chậm từ ${item.word}`}
                    title="Nghe chậm"
                  >
                    <Turtle className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-base font-bold text-emerald-700">{item.meaning}</p>

              <div className="pt-2 border-t border-slate-100 space-y-1">
                <button
                  type="button"
                  onClick={() => speakEnglish(item.example, 0.9)}
                  className="text-left text-xs text-slate-800 hover:text-sky-700 font-medium inline-flex items-start gap-1.5 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                  <span>{item.example}</span>
                </button>
                <p className="text-xs text-slate-500 pl-5">{item.exampleVi}</p>
              </div>
            </div>

            {item.tip && (
              <p className="text-xs bg-amber-50 text-amber-900 rounded-xl px-3 py-2 border border-amber-200/80">
                <strong>Mẹo nhớ:</strong> {item.tip}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================
   2. CHOICE / ODD ONE OUT / PHONETICS / MISTAKE BLOCK
   ========================================================= */
export const ChoiceExerciseBlock: React.FC<{
  title: string;
  instruction: string;
  items: QuizChoiceItem[];
  speakOptions?: boolean;
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({
  title,
  instruction,
  items,
  speakOptions = false,
  completedTaskIds,
  onCompleteTask,
  muted,
}) => {
  const [selectedMap, setSelectedMap] = useState<Record<string, number>>({});

  const handleSelect = (item: QuizChoiceItem, idx: number) => {
    setSelectedMap((prev) => ({ ...prev, [item.id]: idx }));
    const isRight = idx === item.correctIndex;
    playFeedbackTone(isRight ? 'correct' : 'wrong', muted);
    if (isRight) onCompleteTask(item.id);
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="space-y-1">
        <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{instruction}</p>
      </div>

      <div className="space-y-4">
        {items.map((item) => {
          const picked = selectedMap[item.id];
          const answered = picked !== undefined;
          const isCorrect = picked === item.correctIndex;
          const alreadyDone = completedTaskIds.includes(item.id);

          return (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/90 space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm sm:text-base font-semibold text-slate-900">
                  {item.prompt}
                </p>
                {alreadyDone && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                    Đã hoàn thành
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {item.options.map((opt, idx) => {
                  const isSelected = picked === idx;
                  const isRightOpt = idx === item.correctIndex;
                  const cleanSpeakWord = opt.replace(/\s*\(.*?\)/g, '').replace(/^[A-D]\.\s*/, '');

                  let style =
                    'bg-white border-slate-200 text-slate-800 hover:border-sky-400 hover:bg-sky-50/40';
                  if (answered) {
                    if (isRightOpt) {
                      style = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                    } else if (isSelected) {
                      style = 'bg-rose-50 border-rose-400 text-rose-900';
                    } else {
                      style = 'bg-white border-slate-200 text-slate-500';
                    }
                  }

                  return (
                    <div key={opt} className="flex items-stretch gap-1">
                      <button
                        type="button"
                        onClick={() => handleSelect(item, idx)}
                        className={`flex-1 text-left px-3.5 py-2.5 rounded-xl border text-sm transition-colors cursor-pointer ${style}`}
                      >
                        <span className="font-bold mr-1.5 text-slate-500">
                          {String.fromCharCode(65 + idx)}.
                        </span>
                        {opt}
                      </button>
                      {speakOptions && (
                        <button
                          type="button"
                          onClick={() => speakEnglish(cleanSpeakWord, 0.8)}
                          className="px-2.5 rounded-xl bg-white border border-slate-200 hover:bg-sky-50 text-sky-700 cursor-pointer"
                          aria-label={`Nghe phát âm ${cleanSpeakWord}`}
                          title="Nghe phát âm từ này"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              {answered && (
                <div
                  className={`flex items-start gap-2 rounded-xl px-3.5 py-2.5 text-sm border ${
                    isCorrect
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-rose-50 border-rose-200 text-rose-900'
                  }`}
                >
                  {isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <p>
                    <strong>{isCorrect ? 'Chính xác! ' : 'Chưa đúng rồi! '}</strong>
                    {item.explanation}
                  </p>
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
   3. PICTURE-CLUE FILL IN THE BLANK BLOCK
   ========================================================= */
export const PictureFillBlock: React.FC<{
  title: string;
  instruction: string;
  items: FillItem[];
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ title, instruction, items, completedTaskIds, onCompleteTask, muted }) => {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, 'correct' | 'wrong'>>({});
  const [hintsOpen, setHintsOpen] = useState<Record<string, boolean>>({});

  const checkItem = (item: FillItem) => {
    const val = (inputs[item.id] ?? '').trim().toLowerCase();
    if (!val) return;
    const isRight = item.answers.some((a) => a.toLowerCase() === val);
    setChecked((prev) => ({ ...prev, [item.id]: isRight ? 'correct' : 'wrong' }));
    playFeedbackTone(isRight ? 'correct' : 'wrong', muted);
    if (isRight) onCompleteTask(item.id);
  };

  const revealItem = (item: FillItem) => {
    setInputs((prev) => ({ ...prev, [item.id]: item.answers[0] }));
    setChecked((prev) => ({ ...prev, [item.id]: 'correct' }));
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="space-y-1">
        <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{instruction}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => {
          const status = checked[item.id];
          const isDone = completedTaskIds.includes(item.id);
          const fullSentence = `${item.before.replace(/^\d+\.\s*/, '')}${item.answers[0]}${item.after ?? ''}`;

          return (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200 flex flex-col justify-between gap-3"
            >
              <div className="flex items-start gap-3.5">
                {item.iconKey === 'calendar7' ? (
                  <div className="shrink-0 space-y-1">
                    <CalendarCheckVisual checkedCount={7} compact />
                    <p className="text-[11px] text-center font-semibold text-emerald-700">
                      Đủ 7/7 ngày
                    </p>
                  </div>
                ) : item.iconKey === 'calendar1' ? (
                  <div className="shrink-0 space-y-1">
                    <CalendarCheckVisual checkedCount={1} specificDayIndex={3} compact />
                    <p className="text-[11px] text-center font-semibold text-amber-700">
                      1 ngày (Thứ 5)
                    </p>
                  </div>
                ) : (
                  <MiniPictureIcon iconKey={item.iconKey} className="w-14 h-14 shrink-0" />
                )}

                <div className="space-y-2 flex-1 min-w-0">
                  <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                    {item.before}
                    {item.after !== undefined && (
                      <span className="inline-block px-2 mx-1 border-b-2 border-sky-400 text-sky-700 font-bold">
                        {inputs[item.id] ? inputs[item.id] : '_____'}
                      </span>
                    )}
                    {item.after ?? ''}
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    <input
                      type="text"
                      value={inputs[item.id] ?? ''}
                      onChange={(e) => {
                        setInputs((prev) => ({ ...prev, [item.id]: e.target.value }));
                        setChecked((prev) => {
                          const next = { ...prev };
                          delete next[item.id];
                          return next;
                        });
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') checkItem(item);
                      }}
                      placeholder="Gõ đáp án tiếng Anh..."
                      className="flex-1 min-w-[140px] px-3 py-2 rounded-xl bg-white border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    <button
                      type="button"
                      onClick={() => checkItem(item)}
                      className="px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold cursor-pointer"
                    >
                      Kiểm tra
                    </button>
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
                      onClick={() => revealItem(item)}
                      className="inline-flex items-center gap-1 text-slate-600 hover:text-amber-700 font-semibold cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Xem đáp án
                    </button>
                    <button
                      type="button"
                      onClick={() => speakEnglish(item.after ? fullSentence : item.answers[0], 0.9)}
                      className="inline-flex items-center gap-1 text-sky-700 hover:text-sky-800 font-semibold cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      Nghe đọc
                    </button>
                    {isDone && (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Đã đúng
                      </span>
                    )}
                  </div>

                  {hintsOpen[item.id] && (
                    <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1.5">
                      Gợi ý: {item.hint}
                    </p>
                  )}
                </div>
              </div>

              {status && (
                <div
                  className={`flex items-start gap-2 rounded-xl px-3 py-2 text-xs border ${
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
                  <p>
                    <strong>{status === 'correct' ? 'Tuyệt vời! ' : 'Thử lại nhé! '}</strong>
                    {status === 'correct'
                      ? item.explanation
                      : `Gợi ý: ${item.hint}`}
                  </p>
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
   4. TRUE / FALSE READING COMPREHENSION BLOCK
   ========================================================= */
export const TrueFalseReadingBlock: React.FC<{
  title: string;
  passage: string;
  passageVi: string;
  example: string;
  statements: { id: string; text: string; isTrue: boolean; explanation: string }[];
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({
  title,
  passage,
  passageVi,
  example,
  statements,
  completedTaskIds,
  onCompleteTask,
  muted,
}) => {
  const [showVi, setShowVi] = useState(false);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  const pick = (st: { id: string; isTrue: boolean }, val: boolean) => {
    setAnswers((prev) => ({ ...prev, [st.id]: val }));
    const right = val === st.isTrue;
    playFeedbackTone(right ? 'correct' : 'wrong', muted);
    if (right) onCompleteTask(st.id);
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => speakEnglish(passage, 0.9)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            Nghe bài đọc
          </button>
          <button
            type="button"
            onClick={() => speakEnglish(passage, 0.68)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-semibold cursor-pointer"
          >
            <Turtle className="w-3.5 h-3.5" />
            Đọc chậm
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

      <div className="bg-sky-50/60 border border-sky-200 rounded-2xl p-4 sm:p-5 space-y-3">
        <p className="text-slate-900 text-base leading-relaxed font-medium">{passage}</p>
        {showVi && (
          <p className="text-sm text-slate-700 leading-relaxed pt-3 border-t border-sky-200">
            <strong>Dịch nghĩa:</strong> {passageVi}
          </p>
        )}
      </div>

      <p className="text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5">
        Câu mẫu: {example}
      </p>

      <div className="space-y-3">
        {statements.map((st) => {
          const picked = answers[st.id];
          const answered = picked !== undefined;
          const isRight = picked === st.isTrue;
          const done = completedTaskIds.includes(st.id);

          return (
            <div
              key={st.id}
              className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-2.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-sm sm:text-base font-medium text-slate-900">{st.text}</p>
                <div className="flex items-center gap-2 shrink-0">
                  {[
                    { val: true, label: 'True (Đúng)' },
                    { val: false, label: 'False (Sai)' },
                  ].map((btn) => {
                    const active = picked === btn.val;
                    let cls = 'bg-white border-slate-200 text-slate-700 hover:border-sky-400';
                    if (answered && active) {
                      cls = isRight
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'bg-rose-600 border-rose-600 text-white';
                    }
                    return (
                      <button
                        key={String(btn.val)}
                        type="button"
                        onClick={() => pick(st, btn.val)}
                        className={`px-3.5 py-1.5 rounded-xl border text-xs font-bold transition-colors cursor-pointer ${cls}`}
                      >
                        {btn.label}
                      </button>
                    );
                  })}
                  {done && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                </div>
              </div>

              {answered && (
                <p
                  className={`text-xs rounded-xl px-3 py-2 border ${
                    isRight
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-rose-50 border-rose-200 text-rose-900'
                  }`}
                >
                  <strong>{isRight ? 'Chính xác! ' : 'Chưa đúng! '}</strong>
                  {st.explanation}
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
   5. CONVERSATION ORDERING BLOCK (TASK 5)
   ========================================================= */
export const DialogueOrderBlock: React.FC<{
  id: string;
  title: string;
  instruction: string;
  items: DialogueOrderItem[];
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ id, title, instruction, items, completedTaskIds, onCompleteTask, muted }) => {
  const starter = items.find((i) => i.correctStep === 0)!;
  const remaining = items.filter((i) => i.correctStep > 0);
  const [chosenKeys, setChosenKeys] = useState<string[]>([]);
  const [checked, setChecked] = useState<boolean | null>(null);
  const [showVi, setShowVi] = useState(false);

  const toggleKey = (key: string) => {
    setChecked(null);
    if (chosenKeys.includes(key)) {
      setChosenKeys((prev) => prev.filter((k) => k !== key));
    } else {
      setChosenKeys((prev) => [...prev, key]);
    }
  };

  const handleCheck = () => {
    const ordered = [starter, ...chosenKeys.map((k) => items.find((i) => i.key === k)!)];
    const isRight =
      chosenKeys.length === remaining.length &&
      ordered.every((item, idx) => item.correctStep === idx);
    setChecked(isRight);
    playFeedbackTone(isRight ? 'correct' : 'wrong', muted);
    if (isRight) onCompleteTask(id);
  };

  const handleShowSolution = () => {
    const sorted = [...remaining]
      .sort((a, b) => a.correctStep - b.correctStep)
      .map((i) => i.key);
    setChosenKeys(sorted);
    setChecked(true);
  };

  const speakFullDialogue = () => {
    const sorted = [...items].sort((a, b) => a.correctStep - b.correctStep);
    speakEnglish(sorted.map((s) => s.text).join(' '), 0.9);
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
            onClick={speakFullDialogue}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            Nghe hội thoại chuẩn
          </button>
          <button
            type="button"
            onClick={() => setShowVi((v) => !v)}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
          >
            {showVi ? 'Ẩn dịch' : 'Hiện dịch'}
          </button>
        </div>
      </div>

      {/* Step 0 pinned */}
      <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 flex items-start gap-3">
        <span className="w-7 h-7 rounded-lg bg-sky-600 text-white text-xs font-extrabold flex items-center justify-center shrink-0">
          0
        </span>
        <div className="text-sm">
          <p className="font-semibold text-slate-900">
            <span className="text-sky-700 mr-1.5">[{starter.key}] {starter.speaker}:</span>
            {starter.text}
          </p>
          {showVi && <p className="text-xs text-slate-600 mt-0.5">{starter.textVi}</p>}
        </div>
      </div>

      {/* Clickable cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {remaining.map((item) => {
          const orderIdx = chosenKeys.indexOf(item.key);
          const isPicked = orderIdx !== -1;

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => toggleKey(item.key)}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                isPicked
                  ? 'bg-emerald-50 border-emerald-400'
                  : 'bg-slate-50/80 border-slate-200 hover:border-sky-400'
              }`}
            >
              <span
                className={`w-7 h-7 rounded-lg text-xs font-extrabold flex items-center justify-center shrink-0 ${
                  isPicked ? 'bg-emerald-600 text-white' : 'bg-white border border-slate-300 text-slate-500'
                }`}
              >
                {isPicked ? orderIdx + 1 : '?'}
              </span>
              <div className="text-sm">
                <p className="font-semibold text-slate-900">
                  <span className="text-sky-700 mr-1.5">[{item.key}] {item.speaker}:</span>
                  {item.text}
                </p>
                {showVi && <p className="text-xs text-slate-600 mt-0.5">{item.textVi}</p>}
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={handleCheck}
          disabled={chosenKeys.length < remaining.length}
          className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-45 text-white text-sm font-semibold cursor-pointer disabled:cursor-not-allowed"
        >
          Kiểm tra thứ tự ({chosenKeys.length}/{remaining.length})
        </button>
        <button
          type="button"
          onClick={() => {
            setChosenKeys([]);
            setChecked(null);
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Làm lại
        </button>
        <button
          type="button"
          onClick={handleShowSolution}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-sm font-semibold cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          Xem đáp án
        </button>
        {completedTaskIds.includes(id) && (
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
              ? 'Chính xác tuyệt đối! Thứ tự hội thoại rất tự nhiên. Nhấn “Nghe hội thoại chuẩn” để luyện nói theo nhé.'
              : 'Thứ tự chưa khớp lắm. Hãy chú ý câu hỏi ở lượt trước sẽ dẫn ngay đến câu trả lời ở lượt kế tiếp nhé!'}
          </p>
        </div>
      )}
    </section>
  );
};

/* =========================================================
   6. CLICK-TO-ORDER SENTENCE TILES BLOCK
   ========================================================= */
export const SentenceOrderBlock: React.FC<{
  title: string;
  instruction: string;
  items: OrderSentenceItem[];
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ title, instruction, items, completedTaskIds, onCompleteTask, muted }) => {
  const [selectedIndices, setSelectedIndices] = useState<Record<string, number[]>>({});
  const [statusMap, setStatusMap] = useState<Record<string, 'correct' | 'wrong'>>({});

  const normalize = (s: string) =>
    s
      .toLowerCase()
      .replace(/\s+([?.!])/g, '$1')
      .replace(/[?.!]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  const handleToggleTile = (itemId: string, idx: number) => {
    setStatusMap((prev) => {
      const next = { ...prev };
      delete next[itemId];
      return next;
    });
    setSelectedIndices((prev) => {
      const cur = prev[itemId] ?? [];
      return {
        ...prev,
        [itemId]: cur.includes(idx) ? cur.filter((x) => x !== idx) : [...cur, idx],
      };
    });
  };

  const handleCheck = (item: OrderSentenceItem) => {
    const picked = selectedIndices[item.id] ?? [];
    const built = picked.map((i) => item.words[i]).join(' ');
    const nBuilt = normalize(built);
    const nAnswer = normalize(item.answer);
    // Allow adjective swap "small and quiet" === "quiet and small"
    const isRight =
      nBuilt === nAnswer ||
      nBuilt === nAnswer.replace('quiet and small', 'small and quiet');

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

      <div className="space-y-4">
        {items.map((item, idx) => {
          const picked = selectedIndices[item.id] ?? [];
          const builtText = picked.map((i) => item.words[i]).join(' ').replace(/\s+([?.!])/g, '$1');
          const status = statusMap[item.id];
          const done = completedTaskIds.includes(item.id);

          return (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-3"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-slate-600">
                  Câu {idx + 1} · Nghĩa: <span className="text-sky-700">{item.meaning}</span>
                </span>
                {done && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Đã hoàn thành
                  </span>
                )}
              </div>

              {/* Drop zone */}
              <div className="min-h-[44px] px-3.5 py-2 rounded-xl bg-white border-2 border-dashed border-slate-300 flex flex-wrap items-center gap-1.5">
                {picked.length === 0 ? (
                  <span className="text-xs text-slate-400">
                    Bấm lần lượt các thẻ từ bên dưới để ghép thành câu hoàn chỉnh...
                  </span>
                ) : (
                  picked.map((wordIdx) => (
                    <button
                      key={`${item.id}-picked-${wordIdx}`}
                      type="button"
                      onClick={() => handleToggleTile(item.id, wordIdx)}
                      className="px-2.5 py-1 rounded-lg bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700 cursor-pointer"
                    >
                      {item.words[wordIdx]}
                    </button>
                  ))
                )}
              </div>

              {/* Available shuffled word tiles */}
              <div className="flex flex-wrap gap-2">
                {item.words.map((w, wIdx) => {
                  const used = picked.includes(wIdx);
                  return (
                    <button
                      key={`${item.id}-tile-${wIdx}`}
                      type="button"
                      disabled={used}
                      onClick={() => handleToggleTile(item.id, wIdx)}
                      className={`px-3 py-1.5 rounded-xl border text-sm font-semibold transition-all ${
                        used
                          ? 'bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed'
                          : 'bg-white border-slate-300 text-slate-800 hover:border-sky-500 hover:bg-sky-50 cursor-pointer'
                      }`}
                    >
                      {w}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  disabled={picked.length < item.words.length}
                  onClick={() => handleCheck(item)}
                  className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-45 text-white text-xs font-semibold cursor-pointer disabled:cursor-not-allowed"
                >
                  Kiểm tra câu
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedIndices((prev) => ({ ...prev, [item.id]: [] }));
                    setStatusMap((prev) => {
                      const next = { ...prev };
                      delete next[item.id];
                      return next;
                    });
                  }}
                  className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold cursor-pointer"
                >
                  Xếp lại
                </button>
                <button
                  type="button"
                  onClick={() => speakEnglish(item.answer, 0.9)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Nghe đáp án
                </button>
              </div>

              {status && (
                <div
                  className={`flex items-start gap-2 rounded-xl px-3.5 py-2.5 text-xs border ${
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
                      <strong>{status === 'correct' ? 'Xuất sắc! ' : 'Chưa đúng trật tự rồi! '}</strong>
                      {status === 'correct'
                        ? `${builtText} — Công thức: ${item.explanation}`
                        : `Gợi ý công thức: ${item.explanation} · Đáp án chuẩn: ${item.answer}`}
                    </p>
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
   7. GUIDED WRITING BUILDER (TASK 10)
   ========================================================= */
export const GuidedWritingBlock: React.FC<{
  id: string;
  title: string;
  instruction: string;
  prompts: GuidedWritingPrompt[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ id, title, instruction, prompts, onCompleteTask, muted }) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);

  const assembled = prompts
    .map((p) => {
      const val = (values[p.id] ?? '').trim();
      if (!val) return '';
      const raw = `${p.starter} ${val}`.trim();
      return raw.endsWith('.') ? raw : `${raw}.`;
    })
    .filter(Boolean)
    .join(' ');

  const fillSamples = () => {
    const next: Record<string, string> = {};
    prompts.forEach((p) => {
      next[p.id] = p.sample;
    });
    setValues(next);
  };

  const handleSave = () => {
    setSaved(true);
    playFeedbackTone('celebrate', muted);
    onCompleteTask(id);
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{instruction}</p>
        </div>
        <button
          type="button"
          onClick={fillSamples}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-semibold cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          Điền gợi ý mẫu
        </button>
      </div>

      <div className="space-y-3">
        {prompts.map((p) => (
          <div
            key={p.id}
            className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200 space-y-2"
          >
            <p className="text-xs font-bold text-sky-700">{p.question}</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-sm font-semibold text-slate-800 whitespace-nowrap">
                {p.starter}
              </span>
              <input
                type="text"
                value={values[p.id] ?? ''}
                onChange={(e) => {
                  setValues((prev) => ({ ...prev, [p.id]: e.target.value }));
                  setSaved(false);
                }}
                placeholder={p.placeholder}
                className="flex-1 px-3 py-2 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Đoạn văn tiếng Anh hoàn chỉnh của em
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={!assembled}
              onClick={() => speakEnglish(assembled, 0.88)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-emerald-300 hover:bg-emerald-100 disabled:opacity-40 text-emerald-800 text-xs font-semibold cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5" />
              Nghe bài viết của em
            </button>
            <button
              type="button"
              disabled={!assembled}
              onClick={handleSave}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white text-xs font-semibold cursor-pointer"
            >
              {saved ? 'Đã lưu sao thưởng!' : 'Hoàn thành bài viết'}
            </button>
          </div>
        </div>
        <p className="text-sm sm:text-base font-medium text-slate-900 leading-relaxed min-h-[28px]">
          {assembled || 'Hãy điền các câu phía trên hoặc bấm “Điền gợi ý mẫu” để xem đoạn văn nhé!'}
        </p>
      </div>
    </section>
  );
};

/* =========================================================
   8. INTERACTIVE PAIR MATCHING BLOCK (IMAGES OR Q&A)
   ========================================================= */
export const PairMatchBlock: React.FC<{
  title: string;
  instruction: string;
  items: PairMatchItem[];
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ title, instruction, items, completedTaskIds, onCompleteTask, muted }) => {
  const initialMatches = useMemo(() => {
    const map: Record<string, string> = {};
    items.forEach((it) => {
      if (it.isExample) map[it.id] = it.rightKey;
    });
    return map;
  }, [items]);

  const [matches, setMatches] = useState<Record<string, string>>(initialMatches);
  const [selectedLeftId, setSelectedLeftId] = useState<string | null>(() => {
    const first = items.find((it) => !it.isExample);
    return first ? first.id : null;
  });
  const [feedback, setFeedback] = useState<{ ok: boolean; text: string } | null>(null);

  // Deterministic shuffled right column so answers aren't aligned 1-to-1
  const rightCards = useMemo(() => {
    const sorted = [...items].sort((a, b) => a.rightKey.localeCompare(b.rightKey));
    return sorted;
  }, [items]);

  const hasIcons = items.some((it) => Boolean(it.iconKey));

  const handlePickRight = (rightKey: string) => {
    if (!selectedLeftId) return;
    const leftItem = items.find((it) => it.id === selectedLeftId);
    if (!leftItem || leftItem.isExample) return;

    if (leftItem.rightKey === rightKey) {
      const next = { ...matches, [leftItem.id]: rightKey };
      setMatches(next);
      const allDone = items.every((it) => Boolean(next[it.id]));
      playFeedbackTone(allDone ? 'celebrate' : 'correct', muted);
      onCompleteTask(leftItem.id);
      setFeedback({
        ok: true,
        text: `Chính xác! "${leftItem.left}" ↔ "${leftItem.rightLabel}"`,
      });
      const nextUnmatched = items.find((it) => !next[it.id]);
      setSelectedLeftId(nextUnmatched ? nextUnmatched.id : null);
    } else {
      playFeedbackTone('wrong', muted);
      setFeedback({
        ok: false,
        text: leftItem.leftVi
          ? `Chưa khớp rồi! Gợi ý nghĩa: "${leftItem.leftVi}" — em thử chọn thẻ khác nhé.`
          : 'Chưa khớp rồi! Hãy đọc kỹ chủ ngữ (you/Mai/Hung/they) và từ để hỏi (Where/What/Why/Will) rồi thử lại nhé.',
      });
    }
  };

  const handleReset = () => {
    setMatches(initialMatches);
    const first = items.find((it) => !it.isExample);
    setSelectedLeftId(first ? first.id : null);
    setFeedback(null);
  };

  const matchedCount = Object.keys(matches).length;

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{instruction}</p>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Nối lại
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* Left column */}
        <div className="lg:col-span-7 space-y-2.5">
          {items.map((item) => {
            const isMatched = Boolean(matches[item.id]);
            const isSelected = selectedLeftId === item.id;
            const done = completedTaskIds.includes(item.id) || isMatched;

            return (
              <div
                key={item.id}
                className={`p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                  isMatched
                    ? 'bg-emerald-50 border-emerald-300'
                    : isSelected
                    ? 'bg-sky-50 border-sky-500 ring-1 ring-sky-200'
                    : 'bg-slate-50/70 border-slate-200 hover:border-sky-300'
                }`}
              >
                <button
                  type="button"
                  disabled={isMatched}
                  onClick={() => setSelectedLeftId(item.id)}
                  className="text-left flex-1 space-y-0.5 cursor-pointer disabled:cursor-default"
                >
                  <p className="text-sm font-bold text-slate-900">{item.left}</p>
                  {item.leftVi && <p className="text-xs text-slate-600">{item.leftVi}</p>}
                  {isMatched && (
                    <p className="text-xs font-bold text-emerald-700 pt-1 inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Đã nối: {item.rightLabel}
                    </p>
                  )}
                </button>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => speakEnglish(item.left.replace(/^\d+\s*(\(Mẫu\))?\.\s*/, ''), 0.9)}
                    className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-sky-50 text-sky-700 cursor-pointer"
                    aria-label="Nghe câu bên trái"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                  {!isMatched && (
                    <button
                      type="button"
                      onClick={() => setSelectedLeftId(item.id)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                        isSelected
                          ? 'bg-sky-600 text-white'
                          : 'bg-white border border-slate-200 text-slate-700'
                      }`}
                    >
                      {isSelected ? 'Đang chọn →' : 'Chọn'}
                    </button>
                  )}
                  {done && isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right column */}
        <div
          className={`lg:col-span-5 ${
            hasIcons ? 'grid grid-cols-2 gap-3' : 'space-y-2.5'
          }`}
        >
          {rightCards.map((card) => {
            const used = Object.values(matches).includes(card.rightKey);
            return (
              <button
                key={card.rightKey}
                type="button"
                disabled={used || !selectedLeftId}
                onClick={() => handlePickRight(card.rightKey)}
                className={`w-full rounded-xl border transition-all ${
                  hasIcons
                    ? 'p-3.5 flex flex-col items-center text-center gap-2'
                    : 'p-3.5 text-left flex items-center justify-between gap-2'
                } ${
                  used
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800 opacity-75'
                    : 'bg-white border-slate-200 hover:border-sky-500 hover:bg-sky-50/40 text-slate-900 cursor-pointer'
                }`}
              >
                {hasIcons && card.iconKey && (
                  <MiniPictureIcon iconKey={card.iconKey} className="w-14 h-14" />
                )}
                <span className="text-xs sm:text-sm font-bold leading-snug">
                  {card.rightLabel}
                </span>
                {used && (
                  <span className="text-[11px] font-bold text-emerald-700 shrink-0">
                    ✓ Đã nối
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {feedback && (
        <div
          className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm border ${
            feedback.ok
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : 'bg-rose-50 border-rose-200 text-rose-900'
          }`}
        >
          {feedback.ok ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          )}
          <p>{feedback.text}</p>
        </div>
      )}

      {matchedCount === items.length && (
        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-2 text-amber-950 text-sm font-semibold">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Xuất sắc! Em đã ghép chính xác toàn bộ {items.length} cặp.</span>
        </div>
      )}
    </section>
  );
};

/* =========================================================
   9. MISSING LETTERS SPELLING BLOCK (UNITS 7 & 8)
   ========================================================= */
export const MissingLettersBlock: React.FC<{
  title: string;
  instruction: string;
  items: LetterFillItem[];
  completedTaskIds: string[];
  onCompleteTask: (id: string) => void;
  muted: boolean;
}> = ({ title, instruction, items, completedTaskIds, onCompleteTask, muted }) => {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [statusMap, setStatusMap] = useState<Record<string, 'correct' | 'wrong'>>({});
  const [hintsOpen, setHintsOpen] = useState<Record<string, boolean>>({});

  const checkWord = (item: LetterFillItem) => {
    const val = (inputs[item.id] ?? '').trim().toLowerCase();
    if (!val) return;
    const isRight = item.answers.some((a) => a.toLowerCase() === val);
    setStatusMap((prev) => ({ ...prev, [item.id]: isRight ? 'correct' : 'wrong' }));
    playFeedbackTone(isRight ? 'correct' : 'wrong', muted);
    if (isRight) onCompleteTask(item.id);
  };

  const revealWord = (item: LetterFillItem) => {
    setInputs((prev) => ({ ...prev, [item.id]: item.answers[0] }));
    setStatusMap((prev) => ({ ...prev, [item.id]: 'correct' }));
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="space-y-1">
        <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{instruction}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {items.map((item, idx) => {
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
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-mono font-extrabold text-base tracking-widest text-slate-900">
                    {idx + 1}. {item.pattern}
                  </p>
                  <p className="text-xs font-semibold text-sky-800 mt-0.5">
                    Nghĩa: {item.meaningVi}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => speakEnglish(item.answers[0], 0.85)}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-sky-50 text-sky-700 cursor-pointer shrink-0"
                  aria-label={`Nghe phát âm từ số ${idx + 1}`}
                  title="Nghe phát âm từ hoàn chỉnh"
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
                    if (e.key === 'Enter') checkWord(item);
                  }}
                  placeholder="Gõ cả từ đúng..."
                  className="flex-1 min-w-0 px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button
                  type="button"
                  onClick={() => checkWord(item)}
                  className="px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold cursor-pointer shrink-0"
                >
                  Kiểm tra
                </button>
              </div>

              <div className="flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-3">
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
                    onClick={() => revealWord(item)}
                    className="inline-flex items-center gap-1 text-slate-600 hover:text-amber-700 font-semibold cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Đáp án
                  </button>
                </div>
                {done && (
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Đúng
                  </span>
                )}
              </div>

              {hintsOpen[item.id] && (
                <p className="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1.5">
                  {item.hint}
                </p>
              )}

              {status === 'wrong' && (
                <p className="text-xs text-rose-800 font-medium inline-flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5 shrink-0" />
                  Chưa đúng chính tả. Thử bấm loa nghe hoặc xem gợi ý nhé!
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
