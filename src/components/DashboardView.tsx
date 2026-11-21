import React, { useMemo, useState } from 'react';
import { ArrowRight, BookOpenCheck, Search, Sparkles, Star, Trophy } from 'lucide-react';
import type { StudentProgress, UnitData } from '../types/curriculum';
import { TOTAL_VOCAB_COUNT } from '../data/curriculum';
import { HeroStudyScene, UnitIllustration } from './UnitIllustration';

interface DashboardViewProps {
  units: UnitData[];
  progress: StudentProgress;
  onSelectUnit: (unitId: number, initialTab?: 'vocab' | 'grammar' | 'workbook' | 'ioe') => void;
  onOpenPages1To20: () => void;
  onOpenIOE: () => void;
  onOpenPdf: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  units,
  progress,
  onSelectUnit,
  onOpenPages1To20,
  onOpenIOE,
  onOpenPdf,
}) => {
  const [semesterFilter, setSemesterFilter] = useState<'all' | 1 | 2>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const masteredSet = useMemo(() => new Set(progress.masteredVocabIds), [progress.masteredVocabIds]);
  const completedSet = useMemo(() => new Set(progress.completedTaskIds), [progress.completedTaskIds]);

  const activeUnit = units.find((u) => u.id === progress.lastActiveUnitId) ?? units[0];

  const filteredUnits = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return units.filter((u) => {
      if (semesterFilter !== 'all' && u.semester !== semesterFilter) return false;
      if (!q) return true;
      return (
        u.title.toLowerCase().includes(q) ||
        u.titleVi.toLowerCase().includes(q) ||
        `unit ${u.id}`.includes(q) ||
        `bài ${u.id}`.includes(q) ||
        u.vocab.some((v) => v.word.toLowerCase().includes(q) || v.meaning.toLowerCase().includes(q))
      );
    });
  }, [units, semesterFilter, searchQuery]);

  const getUnitStats = (unit: UnitData) => {
    const vocabMastered = unit.vocab.filter((v) => masteredSet.has(v.id)).length;
    const totalTasks =
      unit.workbookChoices.length + unit.reading.statements.length + unit.wordOrders.length;
    const completedTasks =
      unit.workbookChoices.filter((c) => completedSet.has(c.id)).length +
      unit.reading.statements.filter((s) => completedSet.has(s.id)).length +
      unit.wordOrders.filter((w) => completedSet.has(w.id)).length;

    const totalItems = unit.vocab.length + totalTasks;
    const doneItems = vocabMastered + completedTasks;
    const percent = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;

    return { vocabMastered, completedTasks, totalTasks, percent };
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Banner */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-sm font-semibold text-sky-700 tracking-wide">
              Tiếng Anh Lớp 5 · 20 Unit theo sách Luyện chuyên sâu
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-slate-900 leading-tight">
              Học Tiếng Anh Lớp 5 trực quan, nghe chuẩn và nhớ lâu mỗi ngày
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              Từ thẻ từ vựng có phát âm hai tốc độ, công thức ngữ pháp ghép câu sinh động đến bài tập sách và đấu trường luyện thi IOE 4 dạng chuẩn.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={onOpenPages1To20}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm sm:text-base transition-colors shadow-sm cursor-pointer"
              >
                Học chi tiết Trang 1–177
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onSelectUnit(activeUnit.id, 'vocab')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 font-semibold text-sm sm:text-base transition-colors cursor-pointer"
              >
                Học tiếp Unit {activeUnit.id}
              </button>
              <button
                type="button"
                onClick={onOpenIOE}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-semibold text-sm sm:text-base transition-colors cursor-pointer"
              >
                <Trophy className="w-4 h-4 text-amber-600" />
                Đấu trường IOE
              </button>
              <button
                type="button"
                onClick={onOpenPdf}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-100 font-semibold text-sm transition-colors cursor-pointer"
              >
                Sách PDF gốc
              </button>
            </div>

            {/* Quiet inline progress summary (zero pill boxes) */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                <strong className="text-slate-900 tabular-nums">{progress.totalStars}</strong> sao thưởng
              </span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <BookOpenCheck className="w-4 h-4 text-emerald-600" />
                <strong className="text-slate-900 tabular-nums">
                  {progress.masteredVocabIds.length}/{TOTAL_VOCAB_COUNT}
                </strong>{' '}
                từ vựng đã thuộc
              </span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <strong className="text-slate-900 tabular-nums">{progress.completedTaskIds.length}</strong> câu bài tập hoàn thành
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroStudyScene className="w-full max-w-md mx-auto h-auto" />
          </div>
        </div>
      </section>

      {/* Featured Pages 1–177 Detailed Studio Banner */}
      <section className="bg-sky-50/70 border border-sky-200 rounded-3xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Hoàn thiện 100% cuốn sách · 20/20 Unit & Đáp án Unit 1–20
          </p>
          <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
            Chế độ học từng trang trực quan: Trang 1 → Trang 177
          </h2>
          <p className="text-sm text-slate-700">
            Đầy đủ 578 từ vựng phát âm hai tốc độ, sơ đồ ngữ pháp trực quan cả 20 Unit, Kho Đáp án chuẩn Unit 1–20 có Mẹo ghi nhớ siêu tốc từng trang, Bản đồ Tổng ôn Học kỳ 2 và Thử thách 10 câu cuối sách ở Trang 177.
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenPages1To20}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-bold whitespace-nowrap transition-colors shadow-xs cursor-pointer shrink-0"
        >
          Mở học từng trang (Tr. 1–177)
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Curriculum Roadmap Section */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Lộ trình 20 bài học Lớp 5
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Chọn bất kỳ Unit nào để học từ vựng, xem bảng ngữ pháp trực quan và làm bài thực hành.
            </p>
          </div>

          {/* Controls: Semester segmented tabs + Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div
              className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200"
              role="tablist"
              aria-label="Lọc theo học kì"
            >
              {[
                { id: 'all' as const, label: 'Tất cả (20)' },
                { id: 1 as const, label: 'Học kì 1' },
                { id: 2 as const, label: 'Học kì 2' },
              ].map((tab) => (
                <button
                  key={String(tab.id)}
                  type="button"
                  role="tab"
                  aria-selected={semesterFilter === tab.id}
                  onClick={() => setSemesterFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    semesterFilter === tab.id
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm Unit hoặc từ vựng..."
                aria-label="Tìm Unit hoặc từ vựng"
                className="w-full sm:w-56 pl-9 pr-3.5 py-2 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>
        </div>

        {/* Unit Cards Grid */}
        {filteredUnits.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
            <p className="text-slate-700 font-semibold">Không tìm thấy bài học phù hợp với "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSemesterFilter('all');
              }}
              className="mt-3 text-sm font-semibold text-sky-600 hover:text-sky-700 cursor-pointer"
            >
              Xem lại toàn bộ 20 bài
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredUnits.map((unit) => {
              const stats = getUnitStats(unit);
              const isCurrent = unit.id === progress.lastActiveUnitId;
              return (
                <button
                  key={unit.id}
                  type="button"
                  onClick={() => onSelectUnit(unit.id, 'vocab')}
                  className={`group text-left bg-white rounded-2xl p-5 border transition-all cursor-pointer flex flex-col justify-between gap-4 hover:shadow-md hover:border-sky-300 ${
                    isCurrent ? 'border-sky-400 ring-1 ring-sky-200' : 'border-slate-200'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <UnitIllustration unitId={unit.id} className="w-12 h-12 shrink-0" />
                      <div className="text-right text-xs text-slate-500 font-medium tabular-nums">
                        <span className="font-semibold text-slate-700">Unit {unit.id}</span>
                        <span className="mx-1.5 text-slate-300">·</span>
                        <span>HK{unit.semester}</span>
                        <span className="mx-1.5 text-slate-300">·</span>
                        <span>Tr. {unit.pdfPageStart}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                        {unit.title}
                      </h3>
                      <p className="text-sm font-medium text-sky-700 mt-0.5">{unit.titleVi}</p>
                      <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {unit.goal}
                      </p>
                    </div>
                  </div>

                  {/* Footer progress */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs text-slate-600 tabular-nums">
                      <span>
                        {stats.vocabMastered}/{unit.vocab.length} từ · {stats.completedTasks}/{stats.totalTasks} bài tập
                      </span>
                      <span className="font-semibold text-slate-800">{stats.percent}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                        style={{ width: `${stats.percent}%` }}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
