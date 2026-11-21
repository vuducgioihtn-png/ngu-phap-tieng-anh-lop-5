import React, { useState } from 'react';
import { Lightbulb, Sparkles, Volume2 } from 'lucide-react';
import type { FormulaPart, GrammarPoint, UnitData } from '../types/curriculum';
import { speakEnglish } from '../utils/speech';

interface GrammarStudioProps {
  unit: UnitData;
}

const ROLE_STYLES: Record<FormulaPart['role'], { bg: string; label: string; text: string }> = {
  wh: { bg: 'bg-sky-50 border-sky-200', label: 'text-sky-700', text: 'text-sky-950' },
  aux: { bg: 'bg-amber-50 border-amber-200', label: 'text-amber-700', text: 'text-amber-950' },
  subject: { bg: 'bg-emerald-50 border-emerald-200', label: 'text-emerald-700', text: 'text-emerald-950' },
  verb: { bg: 'bg-rose-50 border-rose-200', label: 'text-rose-700', text: 'text-rose-950' },
  object: { bg: 'bg-slate-50 border-slate-200', label: 'text-slate-600', text: 'text-slate-900' },
  prep: { bg: 'bg-cyan-50 border-cyan-200', label: 'text-cyan-700', text: 'text-cyan-950' },
  time: { bg: 'bg-indigo-50 border-indigo-200', label: 'text-indigo-700', text: 'text-indigo-950' },
};

const GrammarCard: React.FC<{ point: GrammarPoint; index: number }> = ({ point, index }) => {
  const [selectedChoiceIdx, setSelectedChoiceIdx] = useState(0);
  const activeChoice = point.builder?.choices[selectedChoiceIdx];

  return (
    <article className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
      {/* Heading */}
      <div className="space-y-1.5">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
          Trọng tâm ngữ pháp {index + 1}
        </p>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
          {point.title}
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{point.summary}</p>
      </div>

      {/* Color-coded Visual Formula Blocks */}
      <div className="space-y-2">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Công thức trực quan
        </p>
        <div className="flex flex-wrap items-stretch gap-2.5">
          {point.formula.map((part, idx) => {
            const style = ROLE_STYLES[part.role];
            return (
              <div
                key={`${point.id}-f-${idx}`}
                className={`rounded-2xl border px-4 py-3 min-w-[110px] ${style.bg}`}
              >
                <div className={`text-[11px] font-semibold uppercase tracking-wide ${style.label}`}>
                  {part.label}
                </div>
                <div className={`font-display font-bold text-base sm:text-lg mt-0.5 ${style.text}`}>
                  {part.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Examples with Speak Button */}
      <div className="space-y-2.5">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Ví dụ mẫu (Nhấn loa để nghe phát âm)
        </p>
        <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
          {point.examples.map((ex, i) => (
            <div
              key={`${point.id}-ex-${i}`}
              className="p-4 flex items-start justify-between gap-4 bg-white hover:bg-slate-50/70 transition-colors"
            >
              <div className="space-y-1">
                <p className="font-semibold text-slate-900 text-base">{ex.en}</p>
                <p className="text-sm text-slate-600">{ex.vi}</p>
              </div>
              <button
                type="button"
                onClick={() => speakEnglish(ex.en.replace(/—/g, '. '), 0.92)}
                className="p-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 shrink-0 cursor-pointer"
                aria-label="Nghe câu ví dụ"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Sentence Builder */}
      {point.builder && activeChoice && (
        <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-sky-900 font-semibold text-sm">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>{point.builder.prompt}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {point.builder.choices.map((c, idx) => (
              <button
                key={c.subject}
                type="button"
                onClick={() => {
                  setSelectedChoiceIdx(idx);
                  speakEnglish(c.example, 0.92);
                }}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold border transition-colors cursor-pointer ${
                  selectedChoiceIdx === idx
                    ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-sky-300'
                }`}
              >
                {c.subject}
              </button>
            ))}
          </div>

          <div className="bg-white border border-sky-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-mono text-sky-700 font-medium">
                Mẫu áp dụng: {activeChoice.pattern}
              </p>
              <p className="font-display font-bold text-lg text-slate-900">
                {activeChoice.example}
              </p>
              <p className="text-sm text-slate-600">{activeChoice.meaning}</p>
              <p className="text-xs font-medium text-emerald-700 pt-1">
                Lưu ý: {activeChoice.note}
              </p>
            </div>
            <button
              type="button"
              onClick={() => speakEnglish(activeChoice.example, 0.92)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold shrink-0 self-start sm:self-center cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
              Nghe câu
            </button>
          </div>
        </div>
      )}

      {/* Clean Grammar Tip (No thick left accent border) */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-sm text-amber-950">
        <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="font-semibold">Mẹo ghi nhớ dễ thuộc:</strong> {point.tip}
        </p>
      </div>
    </article>
  );
};

export const GrammarStudio: React.FC<GrammarStudioProps> = ({ unit }) => {
  return (
    <div className="space-y-6">
      {unit.grammar.map((point, idx) => (
        <GrammarCard key={point.id} point={point} index={idx} />
      ))}
    </div>
  );
};
