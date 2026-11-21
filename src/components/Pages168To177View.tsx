import React, { useState } from 'react';
import {
  ArrowUpRight,
  Award,
  BookOpenCheck,
  Compass,
  Lightbulb,
  Sparkles,
  Trophy,
  Turtle,
  Volume2,
} from 'lucide-react';
import {
  ANSWER_KEY_PAGES_168_177,
  GRAND_REVIEW_QUIZ_U11_U20,
  PAGE_MEMORY_RECAPS_168_177,
  SEMESTER_2_CHEAT_SHEET,
  type PageMemoryRecap,
} from '../data/pages168to177Data';
import { speakEnglish } from '../utils/speech';
import { ChoiceExerciseBlock } from './PageExerciseWidgets';
import { AnswerKeyVaultSection } from './Pages147To167View';

interface Pages168To177ViewProps {
  activePage: number;
  completedTaskIds: string[];
  onCompleteTask: (taskId: string) => void;
  onJumpToPage: (page: number) => void;
  muted: boolean;
}

const RECAP_ACCENT_STYLES: Record<
  PageMemoryRecap['accent'],
  { card: string; tag: string; formulaBg: string; btn: string }
> = {
  pink: {
    card: 'bg-pink-50/55 border-pink-200',
    tag: 'text-pink-800',
    formulaBg: 'bg-white border-pink-200 text-pink-950',
    btn: 'bg-pink-600 hover:bg-pink-700 text-white',
  },
  amber: {
    card: 'bg-amber-50/55 border-amber-200',
    tag: 'text-amber-900',
    formulaBg: 'bg-white border-amber-200 text-amber-950',
    btn: 'bg-amber-600 hover:bg-amber-700 text-white',
  },
  sky: {
    card: 'bg-sky-50/55 border-sky-200',
    tag: 'text-sky-800',
    formulaBg: 'bg-white border-sky-200 text-sky-950',
    btn: 'bg-sky-600 hover:bg-sky-700 text-white',
  },
  emerald: {
    card: 'bg-emerald-50/55 border-emerald-200',
    tag: 'text-emerald-800',
    formulaBg: 'bg-white border-emerald-200 text-emerald-950',
    btn: 'bg-emerald-600 hover:bg-emerald-700 text-white',
  },
  indigo: {
    card: 'bg-indigo-50/55 border-indigo-200',
    tag: 'text-indigo-800',
    formulaBg: 'bg-white border-indigo-200 text-indigo-950',
    btn: 'bg-indigo-600 hover:bg-indigo-700 text-white',
  },
  teal: {
    card: 'bg-teal-50/55 border-teal-200',
    tag: 'text-teal-800',
    formulaBg: 'bg-white border-teal-200 text-teal-950',
    btn: 'bg-teal-600 hover:bg-teal-700 text-white',
  },
};

export const Pages168To177View: React.FC<Pages168To177ViewProps> = ({
  activePage,
  completedTaskIds,
  onCompleteTask,
  onJumpToPage,
  muted,
}) => {
  const [selectedCheatUnit, setSelectedCheatUnit] = useState<number>(11);

  const pageBlocks = ANSWER_KEY_PAGES_168_177[activePage] ?? [];
  const pageRecaps = PAGE_MEMORY_RECAPS_168_177[activePage] ?? [];
  const activeCheat =
    SEMESTER_2_CHEAT_SHEET.find((item) => item.unit === selectedCheatUnit) ??
    SEMESTER_2_CHEAT_SHEET[0];
  const cheatStyle = RECAP_ACCENT_STYLES[activeCheat.accent];

  return (
    <div className="space-y-6">
      {/* 1. Kho Đáp án Chuẩn Trang 168 -> 177 */}
      <AnswerKeyVaultSection
        page={activePage}
        onJumpToPage={onJumpToPage}
        customBlocks={pageBlocks}
      />

      {/* 2. Mẹo Ghi Nhớ Siêu Tốc theo từng trang */}
      {pageRecaps.length > 0 && (
        <section className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xs">
          <div className="space-y-1">
            <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700 inline-flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              Ghi nhớ siêu tốc · Trang {activePage}
            </p>
            <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900">
              Ôn lại công thức cốt lõi ngay sau khi dò đáp án
            </h3>
          </div>

          <div
            className={`grid grid-cols-1 ${
              pageRecaps.length > 1 ? 'lg:grid-cols-2' : ''
            } gap-4`}
          >
            {pageRecaps.map((recap) => {
              const style = RECAP_ACCENT_STYLES[recap.accent];
              return (
                <div
                  key={recap.id}
                  className={`rounded-2xl border p-4 sm:p-5 space-y-3 ${style.card}`}
                >
                  <div className="space-y-1">
                    <p className={`text-xs font-extrabold uppercase tracking-wider ${style.tag}`}>
                      {recap.unitTag}
                    </p>
                    <h4 className="font-display font-bold text-base sm:text-lg text-slate-900">
                      {recap.title}
                    </h4>
                  </div>

                  <div
                    className={`rounded-xl border px-3.5 py-2.5 font-display font-bold text-sm ${style.formulaBg}`}
                  >
                    {recap.formula}
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed">{recap.tipVi}</p>

                  <div className="rounded-xl bg-white/90 border border-slate-200 p-3.5 space-y-2">
                    <p className="font-semibold text-sm text-slate-900">{recap.exampleEn}</p>
                    <p className="text-xs text-slate-600">{recap.exampleVi}</p>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => speakEnglish(recap.exampleEn, 0.9)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${style.btn}`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        Nghe chuẩn
                      </button>
                      <button
                        type="button"
                        onClick={() => speakEnglish(recap.exampleEn, 0.68)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-semibold cursor-pointer"
                      >
                        <Turtle className="w-3.5 h-3.5" />
                        Nghe chậm
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 3. TRANG 177 GRAND FINALE: BẢN ĐỒ CÔNG THỨC HK2 + THỬ THÁCH 10 CÂU + CHỨNG NHẬN 100% SÁCH */}
      {activePage === 177 && (
        <>
          {/* Bản đồ Công thức Tổng ôn Học kỳ 2 (Unit 11 -> Unit 20) */}
          <section className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-5 shadow-xs">
            <div className="space-y-1">
              <p className="text-xs font-extrabold uppercase tracking-wider text-teal-700 inline-flex items-center gap-1.5">
                <BookOpenCheck className="w-4 h-4" />
                Tổng kết Trang 177 · Sổ tay Công thức Học kỳ 2
              </p>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
                Bản đồ Tổng ôn 10 Unit Học kỳ 2 (Unit 11 → Unit 20)
              </h2>
              <p className="text-sm text-slate-600">
                Bấm chọn từng Unit bên dưới để xem ngay công thức vàng, từ khóa trọng tâm, nghe câu mẫu và quay về ôn bài học gốc chỉ bằng 1 chạm!
              </p>
            </div>

            {/* 10 Unit Selector Tabs */}
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Chọn Unit Học kỳ 2">
              {SEMESTER_2_CHEAT_SHEET.map((item) => {
                const isSelected = item.unit === selectedCheatUnit;
                return (
                  <button
                    key={item.unit}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedCheatUnit(item.unit)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer tabular-nums ${
                      isSelected
                        ? 'bg-teal-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    Unit {item.unit}
                  </button>
                );
              })}
            </div>

            {/* Selected Unit Detail Card */}
            <div className={`rounded-2xl border p-5 sm:p-6 space-y-4 ${cheatStyle.card}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className={`text-xs font-extrabold uppercase tracking-wider ${cheatStyle.tag}`}>
                    Unit {activeCheat.unit} · {activeCheat.titleVi}
                  </p>
                  <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900">
                    {activeCheat.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => onJumpToPage(activeCheat.jumpPage)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold cursor-pointer self-start sm:self-auto shrink-0 ${cheatStyle.btn}`}
                >
                  Ôn lại Unit {activeCheat.unit} (Tr. {activeCheat.jumpPage})
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div
                className={`rounded-xl border px-4 py-3 font-display font-bold text-sm sm:text-base ${cheatStyle.formulaBg}`}
              >
                {activeCheat.formula}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="rounded-xl bg-white/90 border border-slate-200 p-4 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Từ khóa trọng tâm
                  </p>
                  <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                    {activeCheat.keyWords}
                  </p>
                  <p className="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                    <strong>Mẹo đi thi:</strong> {activeCheat.goldenTip}
                  </p>
                </div>

                <div className="rounded-xl bg-white/90 border border-slate-200 p-4 flex flex-col justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      Câu mẫu chuẩn phát âm
                    </p>
                    <p className="font-semibold text-sm sm:text-base text-slate-900">
                      {activeCheat.exampleEn}
                    </p>
                    <p className="text-xs text-slate-600">{activeCheat.exampleVi}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => speakEnglish(activeCheat.exampleEn, 0.9)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${cheatStyle.btn}`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      Nghe chuẩn
                    </button>
                    <button
                      type="button"
                      onClick={() => speakEnglish(activeCheat.exampleEn, 0.68)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-semibold cursor-pointer"
                    >
                      <Turtle className="w-3.5 h-3.5" />
                      Nghe chậm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Thử thách Chinh phục Học kỳ 2 (10 câu chọn lọc Unit 11 -> 20) */}
          <ChoiceExerciseBlock
            title="Thử thách Chinh phục Học kỳ 2 (10 câu tinh hoa từ Unit 11 → Unit 20)"
            instruction="Mỗi câu đại diện cho 1 điểm ngữ pháp dễ ra thi nhất của từng Unit Học kỳ 2. Hoàn thành trọn vẹn 10/10 câu để nhận danh hiệu Siêu Sao Tiếng Anh Lớp 5!"
            items={GRAND_REVIEW_QUIZ_U11_U20}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          {/* Grand Completion Certificate Banner (100% cuốn sách: Trang 1 -> Trang 177) */}
          <section className="rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-sky-700 text-white p-6 sm:p-8 space-y-5 shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2.5">
                <p className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-200">
                  <Trophy className="w-4 h-4" />
                  Hoàn thành 100% trọn bộ cuốn sách · Trang 1 → Trang 177
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight">
                  Chúc mừng em đã chinh phục trọn vẹn 177/177 trang sách Tiếng Anh Lớp 5!
                </h2>
                <p className="text-sm sm:text-base text-sky-50 max-w-2xl leading-relaxed">
                  Trang <strong>177</strong> là trang cuối cùng của sách <em>Luyện chuyên sâu Ngữ pháp & Từ vựng Tiếng Anh Lớp 5</em>. Em đã nắm trong tay trọn bộ <strong>20/20 Unit</strong>, <strong>578 từ vựng chuẩn phát âm</strong>, hàng chục sơ đồ ngữ pháp tương tác và <strong>Kho Đáp án đầy đủ từ Unit 1 đến Unit 20</strong>!
                </p>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs sm:text-sm font-semibold text-amber-100">
                  <span className="inline-flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-300" />
                    20 / 20 Unit hoàn chỉnh
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    578 từ vựng đồng bộ
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>177 / 177 trang PDF số hóa</span>
                </div>
              </div>

              <div className="shrink-0 grid grid-cols-2 lg:grid-cols-1 gap-2">
                <button
                  type="button"
                  onClick={() => onJumpToPage(1)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-teal-900 hover:bg-sky-50 font-bold text-sm cursor-pointer"
                >
                  <Compass className="w-4 h-4" />
                  Về Bản đồ Trang 1
                </button>
                <button
                  type="button"
                  onClick={() => onJumpToPage(2)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs cursor-pointer"
                >
                  Ôn từ Unit 1 (Tr. 2)
                </button>
                <button
                  type="button"
                  onClick={() => onJumpToPage(78)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs cursor-pointer"
                >
                  Ôn từ Unit 11 (Tr. 78)
                </button>
                <button
                  type="button"
                  onClick={() => onJumpToPage(158)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs cursor-pointer"
                >
                  Mở Kho Đáp án (Tr. 158)
                </button>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
