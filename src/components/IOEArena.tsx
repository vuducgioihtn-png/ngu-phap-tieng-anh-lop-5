import React, { useMemo, useState } from 'react';
import {
  CheckCircle2,
  Ear,
  Link2,
  Loader2,
  PencilLine,
  RefreshCw,
  RotateCcw,
  Shuffle,
  Sparkles,
  Trophy,
  Turtle,
  Volume2,
  XCircle,
} from 'lucide-react';
import type { IOEQuestion, IOEQuestionType, UnitData } from '../types/curriculum';
import { playFeedbackTone, speakEnglish } from '../utils/speech';

interface IOEArenaProps {
  units: UnitData[];
  selectedUnitId: number;
  onChangeUnitId: (unitId: number) => void;
  onFinishRound: (unitId: number, scorePercent: number, starsEarned: number) => void;
  muted: boolean;
}

const TYPE_META: Record<IOEQuestionType, { label: string; icon: React.ComponentType<{ className?: string }> }> = {
  FILL_BLANK: { label: 'Điền từ / chữ cái', icon: PencilLine },
  REARRANGE: { label: 'Sắp xếp câu', icon: Shuffle },
  LISTEN_CHOICE: { label: 'Nghe hiểu A-B-C-D', icon: Ear },
  MATCHING: { label: 'Ghép 4 cặp tương ứng', icon: Link2 },
};

function cleanCompare(val: string): string {
  return val
    .trim()
    .replace(/\s+([?.!,])/g, '$1')
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

export const IOEArena: React.FC<IOEArenaProps> = ({
  units,
  selectedUnitId,
  onChangeUnitId,
  onFinishRound,
  muted,
}) => {
  const currentUnit = units.find((u) => u.id === selectedUnitId) ?? units[0];

  const [questions, setQuestions] = useState<IOEQuestion[]>(currentUnit.ioeQuestions);
  const [questionCount, setQuestionCount] = useState<4 | 8 | 12>(4);
  const [isGenerating, setIsGenerating] = useState(false);
  const [genError, setGenError] = useState<string | null>(null);
  const [sourceLabel, setSourceLabel] = useState<string>('Bộ đề tiêu chuẩn theo Unit');

  // Round progress state
  const [qIndex, setQIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isRoundFinished, setIsRoundFinished] = useState(false);

  // Per-question interactive answer state
  const [submitted, setSubmitted] = useState(false);
  const [isCurrentCorrect, setIsCurrentCorrect] = useState(false);

  // FILL_BLANK
  const [blankInput, setBlankInput] = useState('');
  // REARRANGE
  const [rearrangePicked, setRearrangePicked] = useState<number[]>([]);
  // LISTEN_CHOICE
  const [pickedOption, setPickedOption] = useState<string | null>(null);
  // MATCHING
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matchedLefts, setMatchedLefts] = useState<string[]>([]);
  const [matchWrongPair, setMatchWrongPair] = useState<string | null>(null);
  const [matchMistakes, setMatchMistakes] = useState(0);

  // Sync built-in questions whenever user switches unit
  React.useEffect(() => {
    setQuestions(currentUnit.ioeQuestions);
    setSourceLabel(`Bộ đề chuẩn Unit ${currentUnit.id}`);
    setGenError(null);
    resetRoundState();
  }, [currentUnit.id]);

  const resetPerQuestionState = () => {
    setSubmitted(false);
    setIsCurrentCorrect(false);
    setBlankInput('');
    setRearrangePicked([]);
    setPickedOption(null);
    setSelectedLeft(null);
    setMatchedLefts([]);
    setMatchWrongPair(null);
    setMatchMistakes(0);
  };

  const resetRoundState = () => {
    setQIndex(0);
    setCorrectCount(0);
    setIsRoundFinished(false);
    resetPerQuestionState();
  };

  const activeQ: IOEQuestion | undefined = questions[qIndex];

  // Deterministic shuffled right column for MATCHING questions
  const shuffledRightPairs = useMemo(() => {
    if (!activeQ?.pairs) return [];
    return [...activeQ.pairs].sort((a, b) => {
      const ha = (a.right.charCodeAt(0) * 13 + qIndex * 5) % 29;
      const hb = (b.right.charCodeAt(0) * 13 + qIndex * 5) % 29;
      return ha - hb;
    });
  }, [activeQ, qIndex]);

  const handleGenerateFreshQuiz = async () => {
    setIsGenerating(true);
    setGenError(null);
    try {
      const res = await fetch('/api/generate-ioe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          unitTitle: `Unit ${currentUnit.id}: ${currentUnit.title}`,
          count: questionCount,
          vocabHints: currentUnit.vocab.map((v) => v.word),
        }),
      });
      const data = await res.json();
      if (!res.ok || !Array.isArray(data.questions) || data.questions.length === 0) {
        throw new Error(data.error || 'Không thể tạo bộ đề lúc này.');
      }

      setQuestions(data.questions as IOEQuestion[]);
      setSourceLabel(`Đề luyện mới (${data.questions.length} câu · 4 dạng IOE)`);
      resetRoundState();
    } catch (err) {
      setGenError(
        err instanceof Error
          ? err.message
          : 'Không thể kết nối máy chủ tạo đề. Bạn vẫn có thể làm ngay bộ đề chuẩn của Unit.'
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const finalizeQuestion = (passed: boolean) => {
    setSubmitted(true);
    setIsCurrentCorrect(passed);
    if (passed) {
      setCorrectCount((c) => c + 1);
      playFeedbackTone('correct', muted);
    } else {
      playFeedbackTone('wrong', muted);
    }
  };

  const handleSubmitFillBlank = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeQ || submitted || !blankInput.trim()) return;
    const passed = cleanCompare(blankInput) === cleanCompare(activeQ.correct_answer);
    finalizeQuestion(passed);
  };

  const handleSubmitRearrange = () => {
    if (!activeQ?.segments || submitted || rearrangePicked.length !== activeQ.segments.length) return;
    const assembled = rearrangePicked
      .map((i) => activeQ.segments![i])
      .join(' ')
      .replace(/\s+([?.!,])/g, '$1');
    const passed = cleanCompare(assembled) === cleanCompare(activeQ.correct_answer);
    finalizeQuestion(passed);
  };

  const handlePickListenChoice = (opt: string) => {
    if (!activeQ || submitted) return;
    setPickedOption(opt);
    const passed = cleanCompare(opt) === cleanCompare(activeQ.correct_answer);
    finalizeQuestion(passed);
  };

  const handleSelectMatchRight = (rightText: string) => {
    if (!activeQ?.pairs || !selectedLeft || submitted) return;
    const matchedPair = activeQ.pairs.find(
      (p) => p.left === selectedLeft && p.right === rightText
    );
    if (matchedPair) {
      const nextMatched = [...matchedLefts, selectedLeft];
      setMatchedLefts(nextMatched);
      setSelectedLeft(null);
      setMatchWrongPair(null);
      playFeedbackTone('correct', muted);

      if (nextMatched.length === activeQ.pairs.length) {
        finalizeQuestion(matchMistakes <= 1);
      }
    } else {
      setMatchMistakes((m) => m + 1);
      setMatchWrongPair(rightText);
      playFeedbackTone('wrong', muted);
      setTimeout(() => setMatchWrongPair(null), 500);
    }
  };

  const handleNextQuestion = () => {
    if (qIndex + 1 >= questions.length) {
      setIsRoundFinished(true);
      const scorePercent = Math.round((correctCount / Math.max(1, questions.length)) * 100);
      const stars = Math.max(1, Math.round((correctCount / Math.max(1, questions.length)) * 5));
      playFeedbackTone('celebrate', muted);
      onFinishRound(currentUnit.id, scorePercent, stars);
    } else {
      setQIndex((prev) => prev + 1);
      resetPerQuestionState();
    }
  };

  const ActiveTypeMeta = activeQ ? TYPE_META[activeQ.type] ?? TYPE_META.FILL_BLANK : TYPE_META.FILL_BLANK;
  const ActiveTypeIcon = ActiveTypeMeta.icon;

  return (
    <div className="space-y-6">
      {/* Control Bar: Unit Selector + Question Count + Generate Fresh Quiz */}
      <section className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Đấu trường IOE & Trạng Nguyên Tiếng Anh Lớp 5
            </p>
            <h2 className="font-display text-2xl font-bold text-slate-900 mt-0.5">
              Luyện đủ 4 dạng bài thi chuẩn
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Điền từ · Sắp xếp câu · Nghe hiểu phát âm · Ghép 4 cặp từ vựng
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <select
              value={currentUnit.id}
              onChange={(e) => onChangeUnitId(Number(e.target.value))}
              aria-label="Chọn bài học luyện IOE"
              className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 max-w-[260px]"
            >
              {units.map((u) => (
                <option key={u.id} value={u.id}>
                  Unit {u.id}: {u.titleVi}
                </option>
              ))}
            </select>

            <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200">
              {([4, 8, 12] as const).map((cnt) => (
                <button
                  key={cnt}
                  type="button"
                  onClick={() => setQuestionCount(cnt)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                    questionCount === cnt
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cnt} câu
                </button>
              ))}
            </div>

            <button
              type="button"
              disabled={isGenerating}
              onClick={handleGenerateFreshQuiz}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white text-sm font-semibold transition-colors cursor-pointer shadow-xs"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Đang biên soạn đề...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Tạo bộ đề mới
                </>
              )}
            </button>
          </div>
        </div>

        {genError && (
          <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-900">
            {genError}
          </div>
        )}
      </section>

      {/* Main Arena Stage */}
      {isRoundFinished ? (
        <section className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 text-center space-y-5 shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
            <Trophy className="w-9 h-9" />
          </div>
          <div className="space-y-1">
            <h3 className="font-display text-3xl font-extrabold text-slate-900">
              Hoàn thành vòng thi IOE!
            </h3>
            <p className="text-slate-600 text-base">
              Chủ đề: <strong>Unit {currentUnit.id} — {currentUnit.title}</strong>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto py-2">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
              <p className="text-xs font-semibold text-emerald-700 uppercase">Số câu đúng</p>
              <p className="font-display text-3xl font-extrabold text-emerald-800 tabular-nums mt-1">
                {correctCount}/{questions.length}
              </p>
            </div>
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4">
              <p className="text-xs font-semibold text-sky-700 uppercase">Độ chính xác</p>
              <p className="font-display text-3xl font-extrabold text-sky-800 tabular-nums mt-1">
                {Math.round((correctCount / Math.max(1, questions.length)) * 100)}%
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={resetRoundState}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-sm cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              Làm lại bộ đề này
            </button>
            <button
              type="button"
              disabled={isGenerating}
              onClick={handleGenerateFreshQuiz}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Thử bộ đề mới ({questionCount} câu)
            </button>
          </div>
        </section>
      ) : activeQ ? (
        <section className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          {/* Top Progress Meta */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5 font-semibold text-sky-700">
                <ActiveTypeIcon className="w-4 h-4" />
                {ActiveTypeMeta.label}
              </span>
              <span className="tabular-nums font-medium">
                {sourceLabel} · Câu <strong className="text-slate-900">{qIndex + 1}/{questions.length}</strong> · Đúng <strong className="text-emerald-700">{correctCount}</strong>
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-sky-600 transition-all duration-300"
                style={{ width: `${((qIndex + (submitted ? 1 : 0)) / Math.max(1, questions.length)) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Stem */}
          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            {activeQ.question_text}
          </h3>

          {/* Type 1: FILL_BLANK */}
          {activeQ.type === 'FILL_BLANK' && (
            <form onSubmit={handleSubmitFillBlank} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={blankInput}
                  disabled={submitted}
                  onChange={(e) => setBlankInput(e.target.value)}
                  placeholder="Nhập từ hoặc chữ cái còn thiếu..."
                  autoFocus
                  className="flex-1 px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-sky-500 focus:outline-none text-base font-semibold text-slate-900 bg-slate-50/50 disabled:bg-slate-100"
                />
                {!submitted && (
                  <button
                    type="submit"
                    disabled={!blankInput.trim()}
                    className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-semibold text-sm cursor-pointer disabled:cursor-not-allowed"
                  >
                    Kiểm tra đáp án
                  </button>
                )}
              </div>
            </form>
          )}

          {/* Type 2: REARRANGE */}
          {activeQ.type === 'REARRANGE' && activeQ.segments && (
            <div className="space-y-4">
              <div
                className={`min-h-[64px] rounded-2xl border-2 border-dashed p-3.5 flex flex-wrap items-center gap-2 ${
                  submitted
                    ? isCurrentCorrect
                      ? 'bg-emerald-50 border-emerald-400'
                      : 'bg-rose-50 border-rose-300'
                    : 'bg-slate-50 border-slate-300'
                }`}
              >
                {rearrangePicked.length === 0 ? (
                  <span className="text-sm text-slate-400">
                    Chạm lần lượt vào các mảnh từ bên dưới để ghép thành câu đúng...
                  </span>
                ) : (
                  rearrangePicked.map((segIdx) => (
                    <button
                      key={`picked-${segIdx}`}
                      type="button"
                      disabled={submitted}
                      onClick={() =>
                        setRearrangePicked((prev) => prev.filter((idx) => idx !== segIdx))
                      }
                      className="px-3.5 py-2 rounded-xl bg-white border border-sky-300 text-slate-900 font-semibold text-sm shadow-2xs cursor-pointer disabled:cursor-default"
                    >
                      {activeQ.segments![segIdx]}
                    </button>
                  ))
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {activeQ.segments.map((seg, idx) => {
                  const used = rearrangePicked.includes(idx);
                  return (
                    <button
                      key={`seg-${idx}`}
                      type="button"
                      disabled={used || submitted}
                      onClick={() => setRearrangePicked((prev) => [...prev, idx])}
                      className={`px-3.5 py-2 rounded-xl border text-sm font-semibold transition-all ${
                        used
                          ? 'bg-slate-100 border-slate-200 text-slate-300 cursor-default'
                          : 'bg-white border-slate-300 text-slate-800 hover:border-sky-500 hover:bg-sky-50 cursor-pointer'
                      }`}
                    >
                      {seg}
                    </button>
                  );
                })}
              </div>

              {!submitted && (
                <div className="flex items-center gap-2.5 pt-1">
                  <button
                    type="button"
                    disabled={rearrangePicked.length !== activeQ.segments.length}
                    onClick={handleSubmitRearrange}
                    className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-semibold text-sm cursor-pointer disabled:cursor-not-allowed"
                  >
                    Kiểm tra câu
                  </button>
                  <button
                    type="button"
                    onClick={() => setRearrangePicked([])}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm font-semibold cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Xếp lại
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Type 3: LISTEN_CHOICE */}
          {activeQ.type === 'LISTEN_CHOICE' && (
            <div className="space-y-5">
              {activeQ.audio_script && (
                <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-sky-900">
                      Bấm nút loa để nghe đoạn tiếng Anh:
                    </p>
                    {submitted && (
                      <p className="text-sm text-sky-800 mt-1 italic">
                        Lời thoại: “{activeQ.audio_script}”
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => speakEnglish(activeQ.audio_script!, 0.92)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                      Nghe chuẩn
                    </button>
                    <button
                      type="button"
                      onClick={() => speakEnglish(activeQ.audio_script!, 0.68)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white border border-sky-200 text-sky-800 text-sm font-semibold cursor-pointer"
                    >
                      <Turtle className="w-4 h-4" />
                      Nghe chậm
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(activeQ.options ?? []).map((opt, idx) => {
                  const letter = String.fromCharCode(65 + idx);
                  const isCorrectOpt = cleanCompare(opt) === cleanCompare(activeQ.correct_answer);
                  const isPicked = pickedOption === opt;
                  let style =
                    'bg-white border-slate-200 text-slate-800 hover:border-sky-400 hover:bg-sky-50/40';
                  if (submitted) {
                    if (isCorrectOpt) {
                      style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold';
                    } else if (isPicked) {
                      style = 'bg-rose-50 border-rose-400 text-rose-950';
                    } else {
                      style = 'bg-slate-50 border-slate-200 text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={`opt-${idx}`}
                      type="button"
                      disabled={submitted}
                      onClick={() => handlePickListenChoice(opt)}
                      className={`p-4 rounded-2xl border-2 text-left flex items-center gap-3 transition-all cursor-pointer disabled:cursor-default ${style}`}
                    >
                      <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {letter}
                      </span>
                      <span className="text-sm sm:text-base">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Type 4: MATCHING */}
          {activeQ.type === 'MATCHING' && activeQ.pairs && (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                Bước 1: Chọn một ô bên trái. Bước 2: Chạm ô tương ứng bên phải để ghép đôi (đã ghép{' '}
                <strong className="text-emerald-700 tabular-nums">
                  {matchedLefts.length}/{activeQ.pairs.length}
                </strong>{' '}
                cặp).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="space-y-2.5">
                  {activeQ.pairs.map((pair) => {
                    const isMatched = matchedLefts.includes(pair.left);
                    const isSelected = selectedLeft === pair.left;
                    return (
                      <button
                        key={`left-${pair.left}`}
                        type="button"
                        disabled={isMatched || submitted}
                        onClick={() => setSelectedLeft(pair.left)}
                        className={`w-full p-3.5 rounded-xl border-2 text-left font-semibold text-sm sm:text-base transition-all flex items-center justify-between gap-2 cursor-pointer disabled:cursor-default ${
                          isMatched
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-800'
                            : isSelected
                            ? 'bg-sky-50 border-sky-600 text-sky-950 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-800 hover:border-sky-300'
                        }`}
                      >
                        <span>{pair.left}</span>
                        {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Right Column */}
                <div className="space-y-2.5">
                  {shuffledRightPairs.map((pair) => {
                    const isMatched = matchedLefts.includes(pair.left);
                    const isWrongFlash = matchWrongPair === pair.right;
                    return (
                      <button
                        key={`right-${pair.right}`}
                        type="button"
                        disabled={isMatched || !selectedLeft || submitted}
                        onClick={() => handleSelectMatchRight(pair.right)}
                        className={`w-full p-3.5 rounded-xl border-2 text-left font-medium text-sm sm:text-base transition-all flex items-center justify-between gap-2 ${
                          isMatched
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-800 cursor-default'
                            : isWrongFlash
                            ? 'bg-rose-50 border-rose-500 text-rose-900'
                            : selectedLeft
                            ? 'bg-white border-amber-300 text-slate-800 hover:bg-amber-50 cursor-pointer'
                            : 'bg-slate-50 border-slate-200 text-slate-500 cursor-default'
                        }`}
                      >
                        <span>{pair.right}</span>
                        {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Explanation + Next Button */}
          {submitted && (
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <div
                className={`rounded-2xl p-4 border text-sm space-y-1.5 ${
                  isCurrentCorrect
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                    : 'bg-rose-50 border-rose-200 text-rose-950'
                }`}
              >
                <div className="flex items-center gap-2 font-bold">
                  {isCurrentCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Chính xác! Tuyệt vời!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      <span>
                        Chưa chính xác!
                        {activeQ.type !== 'MATCHING' ? ` Đáp án chuẩn: ${activeQ.correct_answer}` : ''}
                      </span>
                    </>
                  )}
                </div>
                <p className="leading-relaxed">
                  <strong>Giải thích:</strong> {activeQ.explanation}
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm cursor-pointer shadow-xs"
                >
                  {qIndex + 1 >= questions.length ? 'Hoàn thành & Xem điểm' : 'Câu tiếp theo'}
                </button>
              </div>
            </div>
          )}
        </section>
      ) : null}
    </div>
  );
};
