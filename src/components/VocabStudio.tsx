import React, { useMemo, useState } from 'react';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Ear,
  Grid2x2,
  Layers,
  Lightbulb,
  RotateCw,
  Turtle,
  Volume2,
  XCircle,
} from 'lucide-react';
import type { UnitData, VocabItem } from '../types/curriculum';
import { playFeedbackTone, speakEnglish } from '../utils/speech';

interface VocabStudioProps {
  unit: UnitData;
  masteredVocabIds: string[];
  onToggleMastered: (vocabId: string) => void;
  onAwardStar: (amount: number) => void;
  muted: boolean;
}

type VocabMode = 'flashcard' | 'grid' | 'listen';

export const VocabStudio: React.FC<VocabStudioProps> = ({
  unit,
  masteredVocabIds,
  onToggleMastered,
  onAwardStar,
  muted,
}) => {
  const [mode, setMode] = useState<VocabMode>('flashcard');
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Listen & Pick mini-game state
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const masteredSet = useMemo(() => new Set(masteredVocabIds), [masteredVocabIds]);

  // Reset indices cleanly if unit changes
  React.useEffect(() => {
    setCardIndex(0);
    setIsFlipped(false);
    setQuizIndex(0);
    setSelectedWordId(null);
    setQuizScore(0);
    setQuizFinished(false);
  }, [unit.id]);

  const currentCard: VocabItem = unit.vocab[cardIndex] ?? unit.vocab[0];
  const masteredCount = unit.vocab.filter((v) => masteredSet.has(v.id)).length;

  const goCard = (delta: number) => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev + delta + unit.vocab.length) % unit.vocab.length);
  };

  // Build deterministic 4 options for Listen & Pick game
  const quizItems = useMemo(() => unit.vocab.slice(0, Math.min(8, unit.vocab.length)), [unit.vocab]);
  const activeQuizTarget = quizItems[quizIndex];

  const quizOptions = useMemo(() => {
    if (!activeQuizTarget) return [];
    const others = unit.vocab.filter((v) => v.id !== activeQuizTarget.id);
    // Deterministic rotation based on quizIndex + unit.id so it feels varied without jitter on re-render
    const start = (quizIndex * 3 + unit.id) % Math.max(1, others.length);
    const distractors: VocabItem[] = [];
    for (let i = 0; i < Math.min(3, others.length); i++) {
      distractors.push(others[(start + i) % others.length]);
    }
    const combined = [activeQuizTarget, ...distractors];
    // Deterministic shuffle
    return combined.sort((a, b) => {
      const ha = (a.word.charCodeAt(0) + quizIndex * 7) % 19;
      const hb = (b.word.charCodeAt(0) + quizIndex * 7) % 19;
      return ha - hb;
    });
  }, [activeQuizTarget, unit.vocab, quizIndex, unit.id]);

  const handlePickListenOption = (picked: VocabItem) => {
    if (selectedWordId || !activeQuizTarget) return;
    setSelectedWordId(picked.id);
    if (picked.id === activeQuizTarget.id) {
      setQuizScore((s) => s + 1);
      playFeedbackTone('correct', muted);
      onAwardStar(1);
    } else {
      playFeedbackTone('wrong', muted);
    }
  };

  const handleNextListen = () => {
    if (quizIndex + 1 >= quizItems.length) {
      setQuizFinished(true);
      playFeedbackTone('celebrate', muted);
    } else {
      const nextIdx = quizIndex + 1;
      setQuizIndex(nextIdx);
      setSelectedWordId(null);
      speakEnglish(quizItems[nextIdx].word, 0.92);
    }
  };

  const restartListenGame = () => {
    setQuizIndex(0);
    setSelectedWordId(null);
    setQuizScore(0);
    setQuizFinished(false);
    if (quizItems[0]) {
      speakEnglish(quizItems[0].word, 0.92);
    }
  };

  return (
    <div className="space-y-6">
      {/* Sub-mode switcher + quiet progress metadata */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200 self-start">
          {[
            { id: 'flashcard' as const, label: 'Thẻ lật thông minh', icon: Layers },
            { id: 'grid' as const, label: 'Bảng từ vựng', icon: Grid2x2 },
            { id: 'listen' as const, label: 'Nghe & Chọn', icon: Ear },
          ].map((m) => {
            const Icon = m.icon;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => {
                  setMode(m.id);
                  if (m.id === 'listen' && quizItems[quizIndex]) {
                    speakEnglish(quizItems[quizIndex].word, 0.92);
                  }
                }}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  mode === m.id
                    ? 'bg-white text-sky-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                {m.label}
              </button>
            );
          })}
        </div>

        <p className="text-sm text-slate-600 font-medium tabular-nums">
          Đã thuộc <strong className="text-emerald-700">{masteredCount}/{unit.vocab.length}</strong> từ của Unit {unit.id}
        </p>
      </div>

      {/* Mode 1: Two-Zone Flashcard Stage */}
      {mode === 'flashcard' && currentCard && (
        <div className="max-w-2xl mx-auto space-y-5">
          <div className="flex items-center justify-between text-sm text-slate-500 font-medium tabular-nums">
            <span>Thẻ {cardIndex + 1} / {unit.vocab.length}</span>
            <span>Nhấn vào thẻ để xem nghĩa và câu ví dụ</span>
          </div>

          {/* 2-Zone Interactive Card */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
            {/* Clickable Card Body */}
            <div
              onClick={() => setIsFlipped((f) => !f)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsFlipped((f) => !f);
                }
              }}
              className="p-8 sm:p-10 min-h-[280px] flex flex-col items-center justify-center text-center cursor-pointer select-none transition-colors hover:bg-slate-50/60"
            >
              {!isFlipped ? (
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">
                    Mặt trước · Từ loại ({currentCard.pos})
                  </p>
                  <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                    {currentCard.word}
                  </h3>
                  <p className="font-mono text-base sm:text-lg text-slate-500">
                    {currentCard.ipa}
                  </p>
                  <p className="text-sm text-slate-400 pt-2 inline-flex items-center gap-1.5">
                    <RotateCw className="w-4 h-4" />
                    Chạm để lật xem nghĩa tiếng Việt
                  </p>
                </div>
              ) : (
                <div className="space-y-5 w-full max-w-lg">
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                    Nghĩa tiếng Việt & Câu ví dụ
                  </p>
                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-emerald-700">
                      {currentCard.meaning}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 font-mono">
                      {currentCard.word} · {currentCard.ipa}
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left space-y-1.5">
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-semibold text-slate-900 text-base leading-snug">
                        “{currentCard.example}”
                      </p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          speakEnglish(currentCard.example, 0.92);
                        }}
                        className="p-2 rounded-lg bg-white border border-slate-200 text-sky-600 hover:bg-sky-50 shrink-0 cursor-pointer"
                        aria-label="Nghe câu ví dụ"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-slate-600">{currentCard.exampleVi}</p>
                  </div>

                  {currentCard.memoryTip && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-left flex items-start gap-2.5 text-sm text-amber-900">
                      <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>Mẹo nhớ nhanh:</strong> {currentCard.memoryTip}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Dedicated Bottom Action Bar (Zone 2) */}
            <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => speakEnglish(currentCard.word, 0.95)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  Đọc chuẩn
                </button>
                <button
                  type="button"
                  onClick={() => speakEnglish(currentCard.word, 0.68)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-sm font-semibold transition-colors cursor-pointer"
                >
                  <Turtle className="w-4 h-4 text-sky-600" />
                  Đọc chậm
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  const wasMastered = masteredSet.has(currentCard.id);
                  onToggleMastered(currentCard.id);
                  if (!wasMastered) {
                    playFeedbackTone('correct', muted);
                  }
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                  masteredSet.has(currentCard.id)
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-emerald-400 hover:text-emerald-700'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                {masteredSet.has(currentCard.id) ? 'Đã thuộc từ này' : 'Đánh dấu đã thuộc'}
              </button>
            </div>
          </div>

          {/* Card Navigation */}
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => goCard(-1)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              Từ trước
            </button>

            <div className="flex items-center gap-1.5 overflow-x-auto py-1">
              {unit.vocab.map((v, idx) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => {
                    setCardIndex(idx);
                    setIsFlipped(false);
                  }}
                  aria-label={`Chuyển đến từ ${idx + 1}: ${v.word}`}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === cardIndex
                      ? 'w-7 bg-sky-600'
                      : masteredSet.has(v.id)
                      ? 'w-2.5 bg-emerald-500'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goCard(1)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm cursor-pointer"
            >
              Từ tiếp theo
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Mode 2: Visual Grid View */}
      {mode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {unit.vocab.map((item) => {
            const isMastered = masteredSet.has(item.id);
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl p-5 border transition-colors flex flex-col justify-between gap-3 ${
                  isMastered ? 'border-emerald-300 bg-emerald-50/30' : 'border-slate-200'
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-display font-bold text-xl text-slate-900">
                        {item.word}
                      </h4>
                      <p className="font-mono text-xs text-slate-500">
                        {item.ipa} · ({item.pos})
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => speakEnglish(item.word, 0.92)}
                      className="p-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 transition-colors cursor-pointer shrink-0"
                      aria-label={`Nghe phát âm từ ${item.word}`}
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="font-semibold text-emerald-700 text-base pt-1">{item.meaning}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.example}</p>
                  <p className="text-xs text-slate-500">{item.exampleVi}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => speakEnglish(item.example, 0.92)}
                    className="text-xs font-semibold text-sky-700 hover:text-sky-800 cursor-pointer"
                  >
                    Nghe cả câu
                  </button>
                  <button
                    type="button"
                    onClick={() => onToggleMastered(item.id)}
                    className={`inline-flex items-center gap-1 text-xs font-semibold cursor-pointer ${
                      isMastered ? 'text-emerald-700' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    {isMastered ? 'Đã thuộc' : 'Chưa thuộc'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Mode 3: Listen & Pick Mini-game */}
      {mode === 'listen' && (
        <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          {quizFinished ? (
            <div className="text-center space-y-4 py-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Xuất sắc! Hoàn thành thử thách Nghe & Chọn
              </h3>
              <p className="text-slate-600 text-base">
                Bạn trả lời đúng <strong className="text-emerald-700 tabular-nums">{quizScore}/{quizItems.length}</strong> từ vựng và nhận được thêm sao thưởng!
              </p>
              <button
                type="button"
                onClick={restartListenGame}
                className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm cursor-pointer"
              >
                Chơi lại thử thách
              </button>
            </div>
          ) : activeQuizTarget ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-sm text-slate-500 font-medium tabular-nums">
                <span>Câu nghe {quizIndex + 1} / {quizItems.length}</span>
                <span>Điểm hiện tại: <strong className="text-emerald-700">{quizScore}</strong></span>
              </div>

              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 text-center space-y-4">
                <p className="text-sm font-semibold text-sky-800">
                  Nhấn loa để nghe phát âm, sau đó chọn nghĩa tiếng Việt đúng:
                </p>
                <div className="flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => speakEnglish(activeQuizTarget.word, 0.92)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold cursor-pointer shadow-xs"
                  >
                    <Volume2 className="w-5 h-5" />
                    Nghe từ vựng
                  </button>
                  <button
                    type="button"
                    onClick={() => speakEnglish(activeQuizTarget.word, 0.65)}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-sky-100 text-sky-800 border border-sky-200 font-semibold text-sm cursor-pointer"
                  >
                    <Turtle className="w-4 h-4" />
                    Nghe chậm
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quizOptions.map((option) => {
                  const isPicked = selectedWordId === option.id;
                  const isRight = option.id === activeQuizTarget.id;
                  let btnStyle = 'bg-white border-slate-200 hover:border-sky-400 text-slate-800';
                  if (selectedWordId) {
                    if (isRight) {
                      btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900';
                    } else if (isPicked) {
                      btnStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                    } else {
                      btnStyle = 'bg-slate-50 border-slate-200 text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={option.id}
                      type="button"
                      disabled={Boolean(selectedWordId)}
                      onClick={() => handlePickListenOption(option)}
                      className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer disabled:cursor-default ${btnStyle}`}
                    >
                      <div className="font-semibold text-base">{option.meaning}</div>
                      {selectedWordId && (
                        <div className="text-xs font-mono mt-1 opacity-80">
                          {option.word} ({option.ipa})
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedWordId && (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    {selectedWordId === activeQuizTarget.id ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span className="text-emerald-700">
                          Chính xác! “{activeQuizTarget.word}” nghĩa là {activeQuizTarget.meaning}.
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        <span className="text-rose-700">
                          Chưa đúng! Đáp án là “{activeQuizTarget.word}” ({activeQuizTarget.meaning}).
                        </span>
                      </>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleNextListen}
                    className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shrink-0 cursor-pointer"
                  >
                    {quizIndex + 1 >= quizItems.length ? 'Xem kết quả' : 'Câu tiếp theo'}
                  </button>
                </div>
              )}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};
