import React, { useMemo, useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  Languages,
  ListChecks,
  RotateCcw,
  Shuffle,
  Volume2,
  XCircle,
} from 'lucide-react';
import type { UnitData, WordOrderTask } from '../types/curriculum';
import { playFeedbackTone, speakEnglish } from '../utils/speech';

interface WorkbookPracticeProps {
  unit: UnitData;
  completedTaskIds: string[];
  onCompleteTask: (taskId: string) => void;
  muted: boolean;
}

type PracticeTab = 'choices' | 'reading' | 'reorder';

const CATEGORY_LABELS: Record<'odd_one_out' | 'choice' | 'mistake', string> = {
  odd_one_out: 'Tìm từ khác loại',
  choice: 'Chọn đáp án đúng',
  mistake: 'Tìm lỗi sai',
};

function normalizeSentence(str: string): string {
  return str
    .trim()
    .replace(/\s+([?.!,])/g, '$1')
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

const WordOrderCard: React.FC<{
  task: WordOrderTask;
  index: number;
  alreadyCompleted: boolean;
  onComplete: () => void;
  muted: boolean;
}> = ({ task, index, alreadyCompleted, onComplete, muted }) => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  React.useEffect(() => {
    setSelectedIndices([]);
    setStatus('idle');
  }, [task.id]);

  const builtSentence = selectedIndices
    .map((idx) => task.words[idx])
    .join(' ')
    .replace(/\s+([?.!,])/g, '$1');

  const handleToggleWord = (wordIdx: number) => {
    if (status === 'correct') return;
    setStatus('idle');
    setSelectedIndices((prev) =>
      prev.includes(wordIdx) ? prev.filter((i) => i !== wordIdx) : [...prev, wordIdx]
    );
  };

  const handleCheck = () => {
    if (selectedIndices.length !== task.words.length) return;
    if (normalizeSentence(builtSentence) === normalizeSentence(task.answer)) {
      setStatus('correct');
      playFeedbackTone('correct', muted);
      onComplete();
    } else {
      setStatus('wrong');
      playFeedbackTone('wrong', muted);
    }
  };

  const handleReset = () => {
    setSelectedIndices([]);
    setStatus('idle');
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-slate-800">
          Câu {index + 1}. Sắp xếp các từ thành câu hoàn chỉnh
        </p>
        {alreadyCompleted && (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
            <CheckCircle2 className="w-4 h-4" />
            Đã hoàn thành
          </span>
        )}
      </div>

      {/* Answer Drop Area */}
      <div
        className={`min-h-[58px] rounded-xl border-2 border-dashed p-3 flex flex-wrap items-center gap-2 transition-colors ${
          status === 'correct'
            ? 'bg-emerald-50 border-emerald-400'
            : status === 'wrong'
            ? 'bg-rose-50 border-rose-300'
            : 'bg-slate-50 border-slate-300'
        }`}
      >
        {selectedIndices.length === 0 ? (
          <span className="text-sm text-slate-400">
            Chạm vào từng mảnh từ bên dưới theo đúng thứ tự câu...
          </span>
        ) : (
          selectedIndices.map((wIdx) => (
            <button
              key={`placed-${wIdx}`}
              type="button"
              onClick={() => handleToggleWord(wIdx)}
              className="px-3 py-1.5 rounded-lg bg-white border border-sky-300 text-slate-900 font-semibold text-sm shadow-2xs hover:bg-rose-50 hover:border-rose-300 cursor-pointer"
            >
              {task.words[wIdx]}
            </button>
          ))
        )}
      </div>

      {/* Available Word Bank */}
      <div className="flex flex-wrap gap-2">
        {task.words.map((word, wIdx) => {
          const isUsed = selectedIndices.includes(wIdx);
          return (
            <button
              key={`bank-${wIdx}`}
              type="button"
              disabled={isUsed}
              onClick={() => handleToggleWord(wIdx)}
              className={`px-3.5 py-2 rounded-xl border text-sm font-semibold transition-all ${
                isUsed
                  ? 'bg-slate-100 border-slate-200 text-slate-300 cursor-default'
                  : 'bg-white border-slate-300 text-slate-800 hover:border-sky-500 hover:bg-sky-50 cursor-pointer'
              }`}
            >
              {word}
            </button>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-2.5 pt-1">
        <button
          type="button"
          disabled={selectedIndices.length !== task.words.length || status === 'correct'}
          onClick={handleCheck}
          className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:bg-slate-200 disabled:text-slate-400 text-white text-sm font-semibold transition-colors cursor-pointer disabled:cursor-not-allowed"
        >
          Kiểm tra câu
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-semibold cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Làm lại
        </button>
      </div>

      {/* Feedback Banner */}
      {status !== 'idle' && (
        <div
          className={`rounded-xl p-4 border text-sm space-y-1.5 ${
            status === 'correct'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
              : 'bg-rose-50 border-rose-200 text-rose-950'
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-semibold">
              {status === 'correct' ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Chính xác! {task.answer}</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Chưa đúng thứ tự. Gợi ý: {task.explanation}</span>
                </>
              )}
            </div>
            {status === 'correct' && (
              <button
                type="button"
                onClick={() => speakEnglish(task.answer, 0.92)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-emerald-200 text-emerald-700 text-xs font-semibold cursor-pointer shrink-0"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Nghe câu
              </button>
            )}
          </div>
          {status === 'correct' && (
            <p className="text-emerald-800">
              Nghĩa: {task.meaning} — {task.explanation}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export const WorkbookPractice: React.FC<WorkbookPracticeProps> = ({
  unit,
  completedTaskIds,
  onCompleteTask,
  muted,
}) => {
  const [subTab, setSubTab] = useState<PracticeTab>('choices');
  const [selectedChoices, setSelectedChoices] = useState<Record<string, number>>({});
  const [selectedReading, setSelectedReading] = useState<Record<string, boolean>>({});
  const [showTranslation, setShowTranslation] = useState(false);

  const completedSet = useMemo(() => new Set(completedTaskIds), [completedTaskIds]);

  React.useEffect(() => {
    setSelectedChoices({});
    setSelectedReading({});
    setShowTranslation(false);
  }, [unit.id]);

  const handleSelectChoice = (taskId: string, optionIdx: number, correctIdx: number) => {
    if (selectedChoices[taskId] !== undefined) return;
    setSelectedChoices((prev) => ({ ...prev, [taskId]: optionIdx }));
    if (optionIdx === correctIdx) {
      playFeedbackTone('correct', muted);
      onCompleteTask(taskId);
    } else {
      playFeedbackTone('wrong', muted);
    }
  };

  const handleSelectReading = (stmtId: string, pickedTrue: boolean, actualTrue: boolean) => {
    if (selectedReading[stmtId] !== undefined) return;
    setSelectedReading((prev) => ({ ...prev, [stmtId]: pickedTrue }));
    if (pickedTrue === actualTrue) {
      playFeedbackTone('correct', muted);
      onCompleteTask(stmtId);
    } else {
      playFeedbackTone('wrong', muted);
    }
  };

  return (
    <div className="space-y-6">
      {/* Sub-tab Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex flex-wrap rounded-xl bg-slate-100 p-1 border border-slate-200">
          {[
            { id: 'choices' as const, label: `Trắc nghiệm (${unit.workbookChoices.length})`, icon: ListChecks },
            { id: 'reading' as const, label: `Đọc hiểu Đúng/Sai (${unit.reading.statements.length})`, icon: BookOpen },
            { id: 'reorder' as const, label: `Sắp xếp câu (${unit.wordOrders.length})`, icon: Shuffle },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSubTab(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  subTab === tab.id
                    ? 'bg-white text-sky-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <p className="text-sm text-slate-500 font-medium">
          Bài tập tổng hợp theo sách Luyện chuyên sâu trang {unit.pdfPageStart}
        </p>
      </div>

      {/* Sub-tab 1: Multiple Choice / Odd One Out / Mistake */}
      {subTab === 'choices' && (
        <div className="space-y-4">
          {unit.workbookChoices.map((task, idx) => {
            const picked = selectedChoices[task.id];
            const isAnswered = picked !== undefined;
            const isCorrect = picked === task.correctIndex;

            return (
              <div
                key={task.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
                      Câu {idx + 1} · {CATEGORY_LABELS[task.category]}
                    </p>
                    <h4 className="font-semibold text-base sm:text-lg text-slate-900 mt-1">
                      {task.prompt}
                    </h4>
                  </div>
                  {completedSet.has(task.id) && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                      Đạt
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {task.options.map((opt, optIdx) => {
                    const letter = String.fromCharCode(65 + optIdx);
                    let optClass =
                      'bg-white border-slate-200 text-slate-800 hover:border-sky-400 hover:bg-sky-50/40';
                    if (isAnswered) {
                      if (optIdx === task.correctIndex) {
                        optClass = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold';
                      } else if (optIdx === picked) {
                        optClass = 'bg-rose-50 border-rose-400 text-rose-950';
                      } else {
                        optClass = 'bg-slate-50 border-slate-200 text-slate-400';
                      }
                    }

                    return (
                      <button
                        key={`${task.id}-${optIdx}`}
                        type="button"
                        disabled={isAnswered}
                        onClick={() => handleSelectChoice(task.id, optIdx, task.correctIndex)}
                        className={`px-4 py-3 rounded-xl border-2 text-left text-sm sm:text-base transition-all flex items-center gap-3 cursor-pointer disabled:cursor-default ${optClass}`}
                      >
                        <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                          {letter}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <div
                    className={`rounded-xl p-4 border text-sm flex items-start gap-2.5 ${
                      isCorrect
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                        : 'bg-rose-50 border-rose-200 text-rose-950'
                    }`}
                  >
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="font-semibold">
                        {isCorrect
                          ? 'Chính xác! Làm tốt lắm!'
                          : `Chưa đúng. Đáp án đúng là ${String.fromCharCode(65 + task.correctIndex)}. ${task.options[task.correctIndex]}`}
                      </p>
                      <p className="mt-0.5 opacity-90">{task.explanation}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Sub-tab 2: Reading True / False */}
      {subTab === 'reading' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Reading Passage */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display font-bold text-xl text-slate-900">
                {unit.reading.title}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => speakEnglish(unit.reading.passage, 0.9)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  Nghe bài đọc
                </button>
                <button
                  type="button"
                  onClick={() => setShowTranslation((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
                >
                  <Languages className="w-4 h-4" />
                  {showTranslation ? 'Ẩn dịch' : 'Xem dịch TV'}
                </button>
              </div>
            </div>

            <p className="text-slate-800 text-base leading-8 font-normal">
              {unit.reading.passage}
            </p>

            {showTranslation && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-950 leading-relaxed">
                <p className="font-semibold text-amber-900 mb-1">Bản dịch tiếng Việt:</p>
                <p>{unit.reading.passageVi}</p>
              </div>
            )}
          </div>

          {/* Statements */}
          <div className="lg:col-span-6 space-y-3.5">
            {unit.reading.statements.map((stmt, idx) => {
              const picked = selectedReading[stmt.id];
              const isAnswered = picked !== undefined;
              const isRight = picked === stmt.isTrue;

              return (
                <div
                  key={stmt.id}
                  className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">
                      {idx + 1}. {stmt.text}
                    </p>
                    {completedSet.has(stmt.id) && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    )}
                  </div>

                  <div className="flex items-center gap-2.5">
                    {[
                      { val: true, label: 'Đúng (True)' },
                      { val: false, label: 'Sai (False)' },
                    ].map((btn) => {
                      let style = 'bg-white border-slate-200 text-slate-700 hover:border-sky-400';
                      if (isAnswered) {
                        if (btn.val === stmt.isTrue) {
                          style = 'bg-emerald-50 border-emerald-500 text-emerald-900';
                        } else if (btn.val === picked) {
                          style = 'bg-rose-50 border-rose-400 text-rose-900';
                        } else {
                          style = 'bg-slate-50 border-slate-200 text-slate-400';
                        }
                      }

                      return (
                        <button
                          key={String(btn.val)}
                          type="button"
                          disabled={isAnswered}
                          onClick={() => handleSelectReading(stmt.id, btn.val, stmt.isTrue)}
                          className={`flex-1 py-2.5 px-3 rounded-xl border-2 text-sm font-semibold transition-colors cursor-pointer disabled:cursor-default ${style}`}
                        >
                          {btn.label}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <p
                      className={`text-sm font-medium flex items-start gap-2 ${
                        isRight ? 'text-emerald-700' : 'text-rose-700'
                      }`}
                    >
                      {isRight ? (
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      )}
                      <span>{stmt.explanation}</span>
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sub-tab 3: Word Reordering */}
      {subTab === 'reorder' && (
        <div className="space-y-4">
          {unit.wordOrders.map((task, idx) => (
            <WordOrderCard
              key={task.id}
              task={task}
              index={idx}
              alreadyCompleted={completedSet.has(task.id)}
              onComplete={() => onCompleteTask(task.id)}
              muted={muted}
            />
          ))}
        </div>
      )}
    </div>
  );
};
