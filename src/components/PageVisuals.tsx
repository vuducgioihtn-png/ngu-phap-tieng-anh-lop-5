import React from 'react';

interface MiniPictureIconProps {
  iconKey: string;
  className?: string;
}

const DAYS_LABEL = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

export const CalendarCheckVisual: React.FC<{
  checkedCount: number;
  specificDayIndex?: number;
  compact?: boolean;
}> = ({ checkedCount, specificDayIndex, compact = false }) => {
  return (
    <div
      className={`inline-grid grid-cols-7 gap-1 bg-slate-50 border border-slate-200 rounded-xl ${
        compact ? 'p-1.5' : 'p-2.5'
      }`}
      aria-label={`Lịch tuần: ${checkedCount} trên 7 ngày`}
    >
      {DAYS_LABEL.map((day, idx) => {
        const isChecked =
          typeof specificDayIndex === 'number'
            ? idx === specificDayIndex
            : idx < checkedCount;
        return (
          <div
            key={day}
            className={`flex flex-col items-center justify-center rounded-lg border ${
              compact ? 'w-7 py-1' : 'w-9 py-1.5'
            } ${
              isChecked
                ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                : 'bg-white border-slate-200 text-slate-400'
            }`}
          >
            <span className="text-[10px] font-bold leading-none">{day}</span>
            <span className="mt-1 text-xs font-extrabold leading-none">
              {isChecked ? '✓' : '·'}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export const PrepositionDiagram: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* ON */}
      <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-display font-extrabold text-xl text-sky-800">ON</span>
          <span className="text-xs font-semibold text-sky-700">Trên bề mặt · Tầng nhà · Đảo</span>
        </div>
        <svg viewBox="0 0 180 96" className="w-full h-24 rounded-xl bg-white border border-sky-100">
          {/* Building floors */}
          <rect x="20" y="18" width="54" height="64" rx="6" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
          <line x1="20" y1="39" x2="74" y2="39" stroke="#38BDF8" strokeWidth="1.5" />
          <line x1="20" y1="60" x2="74" y2="60" stroke="#38BDF8" strokeWidth="1.5" />
          <rect x="24" y="42" width="46" height="15" rx="3" fill="#0284C7" />
          <text x="47" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="700">
            2nd floor
          </text>
          {/* Ball ON box */}
          <rect x="108" y="48" width="46" height="34" rx="5" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2" />
          <circle cx="131" cy="36" r="11" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
          <text x="131" y="69" textAnchor="middle" fill="#0369A1" fontSize="10" fontWeight="700">
            ON
          </text>
        </svg>
        <p className="text-xs text-slate-700 leading-relaxed">
          <strong>on</strong> the first floor (ở tầng 1) · <strong>on</strong> a quiet island (trên đảo) · <strong>on</strong> Ngo Quyen Street
        </p>
      </div>

      {/* IN */}
      <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-display font-extrabold text-xl text-emerald-800">IN</span>
          <span className="text-xs font-semibold text-emerald-700">Bên trong · Làng · Quận · TP</span>
        </div>
        <svg viewBox="0 0 180 96" className="w-full h-24 rounded-xl bg-white border border-emerald-100">
          {/* City boundary */}
          <rect x="16" y="14" width="70" height="68" rx="12" fill="#ECFDF5" stroke="#059669" strokeWidth="2" strokeDasharray="4 3" />
          <rect x="28" y="44" width="16" height="28" rx="2" fill="#10B981" />
          <rect x="48" y="30" width="18" height="42" rx="2" fill="#059669" />
          <text x="51" y="25" textAnchor="middle" fill="#047857" fontSize="9" fontWeight="700">
            Ha Noi
          </text>
          {/* Ball IN box */}
          <rect x="108" y="28" width="48" height="52" rx="6" fill="#D1FAE5" stroke="#059669" strokeWidth="2" />
          <circle cx="132" cy="54" r="12" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
          <text x="132" y="22" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="700">
            IN
          </text>
        </svg>
        <p className="text-xs text-slate-700 leading-relaxed">
          <strong>in</strong> Ha Noi · <strong>in</strong> Hoan Kiem District · <strong>in</strong> a small village · <strong>in</strong> the mountains
        </p>
      </div>

      {/* AT */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-display font-extrabold text-xl text-amber-800">AT</span>
          <span className="text-xs font-semibold text-amber-800">Địa chỉ có số nhà cụ thể</span>
        </div>
        <svg viewBox="0 0 180 96" className="w-full h-24 rounded-xl bg-white border border-amber-100">
          {/* House with exact number plate */}
          <polygon points="48,18 18,46 78,46" fill="#F59E0B" />
          <rect x="24" y="46" width="48" height="36" rx="3" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
          <rect x="34" y="54" width="28" height="16" rx="3" fill="#B45309" />
          <text x="48" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">
            No. 35
          </text>
          {/* Map Pin */}
          <path
            d="M132 22 C121 22 113 30 113 40 C113 54 132 76 132 76 C132 76 151 54 151 40 C151 30 143 22 132 22 Z"
            fill="#F59E0B"
            stroke="#B45309"
            strokeWidth="2"
          />
          <circle cx="132" cy="40" r="6" fill="#FFFFFF" />
        </svg>
        <p className="text-xs text-slate-700 leading-relaxed">
          <strong>at</strong> 35 Hang Bai Street · <strong>at</strong> 12 Lac Long Quan Street (cứ có <strong>số nhà</strong> là dùng AT!)
        </p>
      </div>
    </div>
  );
};

export const FrequencyPositionDiagram: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
          Quy tắc 1 · Đứng TRƯỚC động từ thường
        </p>
        <div className="flex flex-wrap items-center gap-2 text-sm font-bold">
          <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800">
            Chủ ngữ (I / She)
          </span>
          <span className="text-emerald-600">+</span>
          <span className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white">
            always / usually / often
          </span>
          <span className="text-emerald-600">+</span>
          <span className="px-3 py-1.5 rounded-xl bg-sky-100 border border-sky-300 text-sky-900">
            Động từ (get up / watches)
          </span>
        </div>
        <p className="text-sm text-slate-700">
          Ví dụ: <strong>I usually get up</strong> at six o’clock.
        </p>
      </div>

      <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-4 space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-sky-800">
          Quy tắc 2 · Đứng SAU động từ “to be”
        </p>
        <div className="flex flex-wrap items-center gap-2 text-sm font-bold">
          <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800">
            Chủ ngữ (He / She)
          </span>
          <span className="text-sky-600">+</span>
          <span className="px-3 py-1.5 rounded-xl bg-sky-600 text-white">
            am / is / are
          </span>
          <span className="text-sky-600">+</span>
          <span className="px-3 py-1.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-900">
            always / never
          </span>
        </div>
        <p className="text-sm text-slate-700">
          Ví dụ: <strong>He is always</strong> a good pupil.
        </p>
      </div>
    </div>
  );
};

export const YesNoDidDiagram: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-4 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-rose-800">
            Câu hỏi Có / Không (Quá khứ đơn)
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm font-bold">
            <span className="px-3 py-1.5 rounded-xl bg-rose-600 text-white">Did</span>
            <span className="text-rose-600">+</span>
            <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800">
              S (you / he / they)
            </span>
            <span className="text-rose-600">+</span>
            <span className="px-3 py-1.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-950">
              V nguyên mẫu (go / enjoy)
            </span>
            <span className="text-rose-600">?</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            Ví dụ: <strong>Did you go</strong> to the party? (Bạn có đi dự tiệc không?)
          </p>
        </div>

        <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Cách trả lời ngắn chuẩn xác
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-xs font-bold">
                CÓ
              </span>
              <span className="font-bold text-slate-900">Yes, S + did.</span>
              <span className="text-xs text-slate-600">(Yes, I did. / Yes, they did.)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-rose-600 text-white text-xs font-bold">
                KHÔNG
              </span>
              <span className="font-bold text-slate-900">No, S + didn’t.</span>
              <span className="text-xs text-slate-600">(didn’t = did not)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950">
        <strong>Quy tắc vàng cần nhớ:</strong> Đã mượn trợ động từ <strong>Did</strong> thì động từ chính trả về <strong>nguyên mẫu (V1)</strong>!
        <span className="ml-2 line-through text-rose-700">Did you went?</span> →{' '}
        <strong className="text-emerald-800">Did you go?</strong>
      </div>
    </div>
  );
};

export const TenseTimelineDiagram: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Past */}
        <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-rose-700">
              ← Quá khứ đơn
            </span>
            <span className="text-xs font-bold text-rose-800">Unit 3 & 4</span>
          </div>
          <p className="font-display font-extrabold text-lg text-slate-900">
            did · was/were · V2/-ed
          </p>
          <p className="text-xs text-slate-700">
            <strong>Dấu hiệu:</strong> yesterday, last Sunday, last summer
          </p>
          <p className="text-xs font-semibold text-rose-900 bg-white rounded-xl px-3 py-2 border border-rose-100">
            I <strong>went</strong> to Ha Long Bay yesterday.
          </p>
        </div>

        {/* Present */}
        <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
              ● Hiện tại đơn
            </span>
            <span className="text-xs font-bold text-amber-900">Unit 1 & 2</span>
          </div>
          <p className="font-display font-extrabold text-lg text-slate-900">
            do/does · am/is/are · V(s/es)
          </p>
          <p className="text-xs text-slate-700">
            <strong>Dấu hiệu:</strong> every day, always, usually, often
          </p>
          <p className="text-xs font-semibold text-amber-950 bg-white rounded-xl px-3 py-2 border border-amber-100">
            I <strong>usually get up</strong> at 6 o’clock.
          </p>
        </div>

        {/* Future */}
        <div className="rounded-2xl bg-teal-50/70 border border-teal-300 p-4 space-y-2 ring-1 ring-teal-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-teal-800">
              Tương lai đơn →
            </span>
            <span className="text-xs font-bold text-teal-900">Unit 5 (Mới!)</span>
          </div>
          <p className="font-display font-extrabold text-lg text-slate-900">
            will / ’ll + V nguyên mẫu
          </p>
          <p className="text-xs text-slate-700">
            <strong>Dấu hiệu:</strong> tomorrow, this weekend, next month
          </p>
          <p className="text-xs font-semibold text-teal-950 bg-white rounded-xl px-3 py-2 border border-teal-100">
            I <strong>will swim</strong> in the sea tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export const PresentContinuousDiagram: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-4 space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
            Hỏi đang đọc gì (Hiện tại tiếp diễn)
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm font-bold">
            <span className="px-3 py-1.5 rounded-xl bg-amber-600 text-white">What</span>
            <span className="text-amber-700">+</span>
            <span className="px-3 py-1.5 rounded-xl bg-sky-600 text-white">am / is / are</span>
            <span className="text-amber-700">+</span>
            <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800">
              you / he / she
            </span>
            <span className="text-amber-700">+</span>
            <span className="px-3 py-1.5 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-950">
              reading?
            </span>
          </div>
          <div className="text-xs text-slate-700 space-y-1 bg-white rounded-xl p-3 border border-amber-100">
            <p>
              • What <strong>are you</strong> reading? → I<strong>’m reading</strong> <em>The Fox and the Crow</em>.
            </p>
            <p>
              • What <strong>is she</strong> reading? → She<strong>’s reading</strong> <em>Cinderella</em>.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-indigo-50/70 border border-indigo-200 p-4 space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-indigo-800">
            Phân biệt “What’s he like?” vs “What does he like?”
          </p>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-white border border-indigo-100">
              <p className="font-bold text-indigo-900">
                1. What’s Tam <u>like</u>? (Tấm có <em>tính cách</em> thế nào?)
              </p>
              <p className="text-slate-600 mt-0.5">
                → She’s <strong>gentle and kind</strong>. (Trả lời bằng tính từ chỉ tính cách!)
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200">
              <p className="font-bold text-slate-900">
                2. What does Tam <u>like</u>? (Tấm <em>thích</em> gì?)
              </p>
              <p className="text-slate-600 mt-0.5">
                → She likes reading fairy tales. (Có trợ ĐT <strong>does</strong> → like = thích!)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ZooAdverbDiagram: React.FC = () => {
  const pairs = [
    { adj: 'loud', adjVi: 'to tiếng', adv: 'loudly', advVi: 'một cách ầm ĩ', ex: 'roared loudly' },
    { adj: 'slow', adjVi: 'chậm chạp', adv: 'slowly', advVi: 'một cách chậm rãi', ex: 'ate slowly' },
    { adj: 'quiet', adjVi: 'yên lặng', adv: 'quietly', advVi: 'một cách êm ái', ex: 'moved quietly' },
    { adj: 'quick', adjVi: 'nhanh nhẹn', adv: 'quickly', advVi: 'một cách nhanh chóng', ex: 'jumped quickly' },
    { adj: 'beautiful', adjVi: 'xinh đẹp', adv: 'beautifully', advVi: 'một cách tuyệt đẹp', ex: 'danced beautifully' },
  ];

  return (
    <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 sm:p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
            Công thức biến Tính từ thành Trạng từ chỉ cách thức (Unit 9)
          </p>
          <p className="text-sm text-slate-700 mt-0.5">
            Thêm đuôi <strong className="text-emerald-800">-ly</strong> sau tính từ để miêu tả <strong>con vật làm hành động như thế nào</strong>!
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 text-xs font-extrabold">
          <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800">
            Tính từ (Adj)
          </span>
          <span className="text-emerald-700">+</span>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white">-ly</span>
          <span className="text-emerald-700">=</span>
          <span className="px-2.5 py-1 rounded-lg bg-amber-100 border border-amber-300 text-amber-950">
            Trạng từ (Adv)
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
        {pairs.map((p) => (
          <div
            key={p.adj}
            className="bg-white rounded-xl border border-emerald-200/80 p-3 space-y-1.5"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-600">{p.adj}</span>
              <span className="text-emerald-600 font-bold">→</span>
              <span className="font-extrabold text-emerald-800">{p.adv}</span>
            </div>
            <p className="text-[11px] text-slate-500">{p.advVi}</p>
            <p className="text-xs font-semibold text-sky-800 bg-sky-50 rounded-lg px-2 py-1">
              {p.ex}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BeGoingToDiagram: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 space-y-2.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
            1. Khẳng định (+) · Dự định làm gì
          </p>
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-extrabold">
            <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800">
              S
            </span>
            <span>+</span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white">
              am / is / are
            </span>
            <span>+</span>
            <span className="px-2.5 py-1 rounded-lg bg-amber-100 border border-amber-300 text-amber-950">
              going to + V
            </span>
          </div>
          <p className="text-xs text-slate-700 bg-white rounded-xl p-2.5 border border-emerald-100">
            • I <strong>am going to play</strong> football.
            <br />• Mai <strong>is going to sing</strong> a song.
          </p>
        </div>

        <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-4 space-y-2.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-rose-800">
            2. Phủ định (-) · Không định làm
          </p>
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-extrabold">
            <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800">
              S
            </span>
            <span>+</span>
            <span className="px-2.5 py-1 rounded-lg bg-rose-600 text-white">
              be + not
            </span>
            <span>+</span>
            <span className="px-2.5 py-1 rounded-lg bg-amber-100 border border-amber-300 text-amber-950">
              going to + V
            </span>
          </div>
          <p className="text-xs text-slate-700 bg-white rounded-xl p-2.5 border border-rose-100">
            • He <strong>isn’t going to play</strong> chess.
            <br />• We <strong>aren’t going to stay</strong> home.
          </p>
        </div>

        <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 space-y-2.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-sky-800">
            3. Câu hỏi (?) · Có định làm không?
          </p>
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-extrabold">
            <span className="px-2.5 py-1 rounded-lg bg-sky-600 text-white">
              Is / Are
            </span>
            <span>+</span>
            <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800">
              S
            </span>
            <span>+</span>
            <span className="px-2.5 py-1 rounded-lg bg-amber-100 border border-amber-300 text-amber-950">
              going to + V?
            </span>
          </div>
          <p className="text-xs text-slate-700 bg-white rounded-xl p-2.5 border border-sky-100">
            • <strong>Are</strong> you <strong>going to play</strong> badminton?
            <br />→ Yes, I <strong>am</strong>. / No, I <strong>am not</strong>.
          </p>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950">
        <strong>Mẹo nhớ siêu hay (Trang 71):</strong> Với hai động từ <strong>go</strong> và <strong>come</strong>, ta dùng luôn Hiện tại tiếp diễn cho gọn (không cần lặp <em>going to go</em>):
        <span className="ml-1.5 font-bold text-sky-900">
          I’m going on vacation this summer. · She’s coming this evening.
        </span>
      </div>
    </div>
  );
};

export const HealthAdviceDiagram: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Asking & Answering illness */}
        <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-4 space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-rose-800">
            Bước 1 · Hỏi thăm & Trả lời triệu chứng bệnh
          </p>
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-extrabold">
            <span className="px-2.5 py-1 rounded-lg bg-rose-600 text-white">
              What’s the matter with
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800">
              you / him / her?
            </span>
          </div>
          <div className="bg-white rounded-xl p-3 border border-rose-100 text-xs space-y-1.5 text-slate-700">
            <p>
              • I / We / They <strong>have</strong> + a/an + tên bệnh
            </p>
            <p>
              • He / She / Nam <strong>has</strong> + a/an + tên bệnh
            </p>
            <p className="text-rose-800 font-semibold pt-1 border-t border-rose-100">
              Chú ý: <strong>an</strong> earache (bắt đầu bằng e) · <strong>a</strong> fever / headache / toothache / sore throat
            </p>
          </div>
        </div>

        {/* Giving Advice with should / shouldn't */}
        <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
            Bước 2 · Khuyên NÊN (should) / KHÔNG NÊN (shouldn’t)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="bg-white rounded-xl p-2.5 border border-emerald-200 space-y-1">
              <span className="inline-block px-2 py-0.5 rounded-md bg-emerald-600 text-white font-bold">
                should + V (NÊN)
              </span>
              <p className="font-semibold text-slate-800">
                You <strong>should</strong> go to the dentist.
              </p>
              <p className="text-emerald-800 font-bold">→ Yes, I will. Thanks.</p>
            </div>
            <div className="bg-white rounded-xl p-2.5 border border-rose-200 space-y-1">
              <span className="inline-block px-2 py-0.5 rounded-md bg-rose-600 text-white font-bold">
                shouldn’t + V (KHÔNG NÊN)
              </span>
              <p className="font-semibold text-slate-800">
                You <strong>shouldn’t</strong> eat sweets.
              </p>
              <p className="text-rose-800 font-bold">→ OK, I won’t. Thanks.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-xs sm:text-sm text-sky-950">
        <strong>Quy tắc vàng Unit 11:</strong> Sau <strong>should / shouldn’t</strong>, động từ luôn ở dạng <strong>nguyên mẫu (không thêm s/es/to/ing)</strong>. Ví dụ: <span className="line-through text-rose-700">He should goes</span> → <strong className="text-emerald-800">He should go</strong>.
      </div>
    </div>
  );
};

export const MiniPictureIcon: React.FC<MiniPictureIconProps> = ({
  iconKey,
  className = 'w-14 h-14',
}) => {
  switch (iconKey) {
    case 'tower':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <rect x="20" y="10" width="24" height="44" rx="3" fill="#0284C7" />
          <rect x="25" y="16" width="5" height="5" rx="1" fill="#BAE6FD" />
          <rect x="34" y="16" width="5" height="5" rx="1" fill="#BAE6FD" />
          <rect x="25" y="25" width="5" height="5" rx="1" fill="#BAE6FD" />
          <rect x="34" y="25" width="5" height="5" rx="1" fill="#BAE6FD" />
          <rect x="25" y="34" width="5" height="5" rx="1" fill="#BAE6FD" />
          <rect x="34" y="34" width="5" height="5" rx="1" fill="#BAE6FD" />
          <rect x="29" y="45" width="6" height="9" rx="1" fill="#FEF3C7" />
          <line x1="32" y1="5" x2="32" y2="10" stroke="#0369A1" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'lane':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <path d="M25 54 L29 14 L35 14 L39 54 Z" fill="#64748B" />
          <line x1="32" y1="18" x2="32" y2="50" stroke="#F8FAFC" strokeWidth="2" strokeDasharray="4 4" />
          <rect x="10" y="26" width="14" height="22" rx="2" fill="#F59E0B" />
          <rect x="40" y="26" width="14" height="22" rx="2" fill="#D97706" />
        </svg>
      );
    case 'street':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <path d="M12 54 L24 22 L40 22 L52 54 Z" fill="#475569" />
          <line x1="32" y1="26" x2="32" y2="50" stroke="#FACC15" strokeWidth="2.5" strokeDasharray="5 4" />
          <rect x="8" y="12" width="14" height="20" rx="2" fill="#38BDF8" />
          <rect x="42" y="14" width="14" height="18" rx="2" fill="#0284C7" />
        </svg>
      );
    case 'village':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <path d="M6 46 Q20 34 36 44 T58 42 L58 56 L6 56 Z" fill="#34D399" />
          <polygon points="32,18 16,32 48,32" fill="#EA580C" />
          <rect x="20" y="32" width="24" height="18" rx="2" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
          <rect x="29" y="39" width="6" height="11" fill="#92400E" />
          <circle cx="14" cy="36" r="6" fill="#059669" />
        </svg>
      );
    case 'address':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <rect x="10" y="18" width="44" height="28" rx="5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="2" />
          <text x="32" y="31" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">
            No. 35
          </text>
          <text x="32" y="41" textAnchor="middle" fill="#BAE6FD" fontSize="7" fontWeight="700">
            STREET
          </text>
        </svg>
      );
    case 'mountains':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <polygon points="8,50 26,18 44,50" fill="#059669" />
          <polygon points="24,50 42,22 58,50" fill="#10B981" />
          <polygon points="26,18 21,27 31,27" fill="#FFFFFF" />
          <circle cx="48" cy="16" r="5" fill="#FBBF24" />
        </svg>
      );
    case 'flat':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#F0F9FF" />
          <rect x="12" y="16" width="40" height="36" rx="4" fill="#38BDF8" stroke="#0284C7" strokeWidth="2" />
          <rect x="17" y="21" width="12" height="10" rx="2" fill="#FFFFFF" />
          <rect x="35" y="21" width="12" height="10" rx="2" fill="#FFFFFF" />
          <rect x="17" y="36" width="12" height="10" rx="2" fill="#FEF3C7" />
          <rect x="35" y="36" width="12" height="16" rx="2" fill="#0369A1" />
        </svg>
      );
    case 'city':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EFF6FF" />
          <rect x="10" y="28" width="12" height="26" rx="2" fill="#60A5FA" />
          <rect x="25" y="14" width="14" height="40" rx="2" fill="#2563EB" />
          <rect x="42" y="22" width="12" height="32" rx="2" fill="#3B82F6" />
          <rect x="29" y="20" width="6" height="4" fill="#DBEAFE" />
          <rect x="29" y="28" width="6" height="4" fill="#DBEAFE" />
          <rect x="29" y="36" width="6" height="4" fill="#DBEAFE" />
        </svg>
      );
    case 'school':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <polygon points="32,12 12,26 52,26" fill="#DC2626" />
          <rect x="14" y="26" width="36" height="26" rx="2" fill="#FFFFFF" stroke="#D97706" strokeWidth="2" />
          <rect x="27" y="36" width="10" height="16" rx="1" fill="#F59E0B" />
          <circle cx="32" cy="21" r="3" fill="#FEF3C7" />
        </svg>
      );
    case 'sun':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFFBEB" />
          <circle cx="32" cy="34" r="12" fill="#F59E0B" />
          <path d="M10 46 Q32 38 54 46 L54 54 L10 54 Z" fill="#34D399" />
          <line x1="32" y1="12" x2="32" y2="18" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          <line x1="16" y1="20" x2="20" y2="24" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          <line x1="48" y1="20" x2="44" y2="24" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'calendar7':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <rect x="10" y="14" width="44" height="38" rx="6" fill="#FFFFFF" stroke="#059669" strokeWidth="2" />
          <rect x="10" y="14" width="44" height="11" rx="4" fill="#059669" />
          <text x="32" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="700">
            7/7 NGÀY
          </text>
          <text x="32" y="42" textAnchor="middle" fill="#047857" fontSize="14" fontWeight="800">
            ✓✓✓✓
          </text>
        </svg>
      );
    case 'calendar1':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF7ED" />
          <rect x="10" y="14" width="44" height="38" rx="6" fill="#FFFFFF" stroke="#EA580C" strokeWidth="2" />
          <rect x="10" y="14" width="44" height="11" rx="4" fill="#EA580C" />
          <text x="32" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="700">
            1/7 NGÀY
          </text>
          <text x="32" y="42" textAnchor="middle" fill="#C2410C" fontSize="14" fontWeight="800">
            1 × ✓
          </text>
        </svg>
      );
    case 'homework':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EFF6FF" />
          <rect x="14" y="12" width="32" height="40" rx="4" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
          <line x1="20" y1="22" x2="40" y2="22" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="20" y1="30" x2="38" y2="30" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="20" y1="38" x2="34" y2="38" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M40 42 L52 30 L56 34 L44 46 L38 48 Z" fill="#F59E0B" />
        </svg>
      );
    case 'partner':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#F0FDF4" />
          <circle cx="22" cy="24" r="7" fill="#0EA5E9" />
          <path d="M12 46 C12 36 32 36 32 46" fill="#38BDF8" />
          <circle cx="42" cy="24" r="7" fill="#10B981" />
          <path d="M32 46 C32 36 52 36 52 46" fill="#34D399" />
          <rect x="23" y="44" width="18" height="8" rx="2" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
        </svg>
      );
    case 'bike':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <circle cx="18" cy="42" r="9" fill="none" stroke="#0369A1" strokeWidth="3" />
          <circle cx="46" cy="42" r="9" fill="none" stroke="#0369A1" strokeWidth="3" />
          <path d="M18 42 L30 28 L42 28 L46 42 M30 28 L34 42 L18 42" fill="none" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="26" y1="24" x2="34" y2="24" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'train':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <rect x="8" y="22" width="48" height="22" rx="6" fill="#0284C7" />
          <rect x="14" y="27" width="9" height="8" rx="2" fill="#E0F2FE" />
          <rect x="27" y="27" width="9" height="8" rx="2" fill="#E0F2FE" />
          <rect x="40" y="27" width="10" height="8" rx="2" fill="#FEF3C7" />
          <circle cx="18" cy="46" r="4" fill="#334155" />
          <circle cx="32" cy="46" r="4" fill="#334155" />
          <circle cx="46" cy="46" r="4" fill="#334155" />
          <line x1="6" y1="52" x2="58" y2="52" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'plane':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EFF6FF" />
          <path d="M12 36 L52 24 L54 29 L16 42 Z" fill="#2563EB" />
          <path d="M26 30 L34 14 L40 16 L35 28 Z" fill="#60A5FA" />
          <path d="M28 38 L38 48 L43 46 L35 35 Z" fill="#1D4ED8" />
          <path d="M12 36 L10 28 L15 27 L17 34 Z" fill="#93C5FD" />
        </svg>
      );
    case 'ship':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFEFF" />
          <rect x="22" y="18" width="20" height="14" rx="3" fill="#FFFFFF" stroke="#0891B2" strokeWidth="2" />
          <rect x="28" y="12" width="8" height="6" rx="1" fill="#F59E0B" />
          <path d="M10 32 L54 32 L46 46 L18 46 Z" fill="#0E7490" />
          <path d="M8 50 Q16 45 24 50 T40 50 T56 50" fill="none" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'underground':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#F1F5F9" />
          <path d="M10 52 L10 28 A22 22 0 0 1 54 28 L54 52 Z" fill="#334155" />
          <rect x="18" y="24" width="28" height="22" rx="6" fill="#0EA5E9" />
          <rect x="22" y="28" width="20" height="8" rx="2" fill="#E0F2FE" />
          <circle cx="24" cy="41" r="2.5" fill="#FACC15" />
          <circle cx="40" cy="41" r="2.5" fill="#FACC15" />
          <line x1="16" y1="52" x2="48" y2="52" stroke="#94A3B8" strokeWidth="2.5" />
        </svg>
      );
    case 'motorbike':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF2F2" />
          <circle cx="18" cy="44" r="8" fill="none" stroke="#334155" strokeWidth="3.5" />
          <circle cx="46" cy="44" r="8" fill="none" stroke="#334155" strokeWidth="3.5" />
          <path d="M18 44 L28 32 L44 32 L46 44" fill="none" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M36 24 L43 24 L46 32" fill="none" stroke="#991B1B" strokeWidth="3" strokeLinecap="round" />
          <rect x="22" y="28" width="12" height="5" rx="2" fill="#1E293B" />
        </svg>
      );
    case 'bay':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFEFF" />
          <path d="M10 38 Q16 18 24 38 Z" fill="#0D9488" />
          <path d="M26 38 Q36 14 44 38 Z" fill="#0F766E" />
          <path d="M44 38 Q50 24 56 38 Z" fill="#14B8A6" />
          <rect x="6" y="38" width="52" height="18" rx="4" fill="#06B6D4" />
          <path d="M10 46 Q18 42 26 46 T42 46 T54 46" fill="none" stroke="#E0F2FE" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'coach':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF7ED" />
          <rect x="8" y="20" width="48" height="24" rx="6" fill="#EA580C" />
          <rect x="13" y="25" width="9" height="9" rx="2" fill="#FFEDD5" />
          <rect x="25" y="25" width="9" height="9" rx="2" fill="#FFEDD5" />
          <rect x="37" y="25" width="14" height="9" rx="2" fill="#FEF3C7" />
          <circle cx="19" cy="46" r="5" fill="#1E293B" />
          <circle cx="45" cy="46" r="5" fill="#1E293B" />
          <circle cx="19" cy="46" r="2" fill="#CBD5E1" />
          <circle cx="45" cy="46" r="2" fill="#CBD5E1" />
        </svg>
      );
    case 'swim':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <circle cx="40" cy="24" r="6" fill="#F59E0B" />
          <path d="M16 34 Q28 24 38 34" fill="none" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
          <path d="M8 42 Q16 37 24 42 T40 42 T56 42" fill="none" stroke="#0EA5E9" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M8 50 Q16 45 24 50 T40 50 T56 50" fill="none" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'seafood':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF1F2" />
          <ellipse cx="32" cy="34" rx="17" ry="10" fill="#FB7185" />
          <polygon points="48,34 57,26 57,42" fill="#E11D48" />
          <circle cx="22" cy="32" r="2.2" fill="#FFFFFF" />
          <circle cx="22" cy="32" r="1" fill="#0F172A" />
          <path d="M28 28 Q32 34 28 40" fill="none" stroke="#FFE4E6" strokeWidth="2" />
          <path d="M35 28 Q39 34 35 40" fill="none" stroke="#FFE4E6" strokeWidth="2" />
        </svg>
      );
    case 'picnic':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <path d="M12 46 L52 46 L56 54 L8 54 Z" fill="#EF4444" />
          <rect x="20" y="28" width="24" height="18" rx="4" fill="#D97706" />
          <path d="M24 28 Q32 14 40 28" fill="none" stroke="#92400E" strokeWidth="3" />
          <line x1="20" y1="36" x2="44" y2="36" stroke="#FEF3C7" strokeWidth="2" />
          <circle cx="16" cy="40" r="4" fill="#22C55E" />
        </svg>
      );
    case 'birthday':
    case 'party':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF1F2" />
          <rect x="14" y="32" width="36" height="20" rx="5" fill="#F43F5E" />
          <path d="M14 37 Q20 42 26 37 T38 37 T50 37" fill="none" stroke="#FFE4E6" strokeWidth="3" />
          <rect x="23" y="21" width="4" height="11" rx="1" fill="#38BDF8" />
          <rect x="30" y="19" width="4" height="13" rx="1" fill="#FBBF24" />
          <rect x="37" y="21" width="4" height="11" rx="1" fill="#34D399" />
          <circle cx="25" cy="18" r="2.5" fill="#F97316" />
          <circle cx="32" cy="16" r="2.5" fill="#F97316" />
          <circle cx="39" cy="18" r="2.5" fill="#F97316" />
        </svg>
      );
    case 'cartoon':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EFF6FF" />
          <rect x="10" y="16" width="44" height="32" rx="6" fill="#1E293B" />
          <rect x="14" y="20" width="36" height="24" rx="3" fill="#38BDF8" />
          <circle cx="32" cy="32" r="8" fill="#FACC15" />
          <circle cx="29" cy="30" r="1.5" fill="#0F172A" />
          <circle cx="35" cy="30" r="1.5" fill="#0F172A" />
          <path d="M29 35 Q32 38 35 35" fill="none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="24" y="49" width="16" height="4" rx="2" fill="#475569" />
        </svg>
      );
    case 'flower':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FDF2F8" />
          <line x1="32" y1="34" x2="32" y2="54" stroke="#16A34A" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="32" cy="20" r="7" fill="#EC4899" />
          <circle cx="42" cy="27" r="7" fill="#F472B6" />
          <circle cx="22" cy="27" r="7" fill="#F472B6" />
          <circle cx="26" cy="36" r="7" fill="#EC4899" />
          <circle cx="38" cy="36" r="7" fill="#EC4899" />
          <circle cx="32" cy="28" r="6" fill="#FACC15" />
        </svg>
      );
    case 'funfair':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <circle cx="32" cy="28" r="15" fill="none" stroke="#0284C7" strokeWidth="3" />
          <line x1="32" y1="13" x2="32" y2="43" stroke="#38BDF8" strokeWidth="2" />
          <line x1="17" y1="28" x2="47" y2="28" stroke="#38BDF8" strokeWidth="2" />
          <circle cx="32" cy="13" r="3.5" fill="#F43F5E" />
          <circle cx="47" cy="28" r="3.5" fill="#F59E0B" />
          <circle cx="17" cy="28" r="3.5" fill="#10B981" />
          <path d="M22 52 L32 30 L42 52" fill="none" stroke="#0369A1" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );
    case 'bookstall':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <path d="M10 24 L14 14 L50 14 L54 24 Z" fill="#EA580C" />
          <rect x="14" y="24" width="36" height="28" rx="3" fill="#FFFFFF" stroke="#D97706" strokeWidth="2" />
          <rect x="19" y="30" width="7" height="16" rx="1" fill="#0284C7" />
          <rect x="28" y="30" width="7" height="16" rx="1" fill="#10B981" />
          <rect x="37" y="30" width="7" height="16" rx="1" fill="#F43F5E" />
        </svg>
      );
    case 'books':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <rect x="14" y="16" width="12" height="34" rx="2" fill="#0284C7" />
          <rect x="28" y="12" width="12" height="38" rx="2" fill="#10B981" />
          <rect x="42" y="20" width="10" height="30" rx="2" fill="#F59E0B" />
          <line x1="17" y1="24" x2="23" y2="24" stroke="#E0F2FE" strokeWidth="2" />
          <line x1="31" y1="20" x2="37" y2="20" stroke="#ECFDF5" strokeWidth="2" />
        </svg>
      );
    case 'camera':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#F1F5F9" />
          <rect x="22" y="16" width="16" height="7" rx="2" fill="#475569" />
          <rect x="10" y="21" width="44" height="28" rx="6" fill="#1E293B" />
          <circle cx="32" cy="35" r="9" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="2.5" />
          <circle cx="46" cy="27" r="2.5" fill="#FACC15" />
        </svg>
      );
    case 'gift':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF1F2" />
          <rect x="14" y="24" width="36" height="28" rx="4" fill="#E11D48" />
          <rect x="12" y="20" width="40" height="8" rx="2" fill="#FB7185" />
          <rect x="29" y="20" width="6" height="32" fill="#FACC15" />
          <circle cx="26" cy="16" r="4" fill="none" stroke="#FACC15" strokeWidth="3" />
          <circle cx="38" cy="16" r="4" fill="none" stroke="#FACC15" strokeWidth="3" />
        </svg>
      );
    case 'cd':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EEF2FF" />
          <circle cx="32" cy="32" r="20" fill="#6366F1" />
          <circle cx="32" cy="32" r="14" fill="#A5B4FC" />
          <circle cx="32" cy="32" r="5" fill="#FFFFFF" />
          <path d="M22 22 L28 28 M36 36 L42 42" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'juice':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFFBEB" />
          <path d="M20 22 L44 22 L40 52 L24 52 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
          <path d="M35 22 L40 10 L46 10" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
          <circle cx="22" cy="22" r="6" fill="#FBBF24" stroke="#EA580C" strokeWidth="2" />
        </svg>
      );
    case 'dance':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FDF2F8" />
          <circle cx="26" cy="20" r="6" fill="#EC4899" />
          <path d="M26 26 L26 40 L18 52 M26 40 L34 50 M16 32 L26 30 L38 24" fill="none" stroke="#DB2777" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M46 18 L46 30 M46 18 L54 15 L54 27" fill="none" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="44" cy="30" r="2.5" fill="#0284C7" />
          <circle cx="52" cy="27" r="2.5" fill="#0284C7" />
        </svg>
      );
    case 'cave':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#F1F5F9" />
          <path d="M8 52 L18 18 L46 18 L56 52 Z" fill="#64748B" />
          <path d="M20 52 C20 30 44 30 44 52 Z" fill="#0F172A" />
          <path d="M26 33 L28 40 L30 33 M35 33 L37 39 L39 33" fill="#94A3B8" />
        </svg>
      );
    case 'sea':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <circle cx="46" cy="18" r="6" fill="#FBBF24" />
          <rect x="6" y="30" width="52" height="26" rx="6" fill="#0284C7" />
          <path d="M10 38 Q18 33 26 38 T42 38 T54 38" fill="none" stroke="#BAE6FD" strokeWidth="3" strokeLinecap="round" />
          <path d="M10 47 Q18 42 26 47 T42 47 T54 47" fill="none" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'beach':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <rect x="6" y="30" width="52" height="12" fill="#38BDF8" />
          <path d="M6 40 Q32 34 58 44 L58 56 L6 56 Z" fill="#F59E0B" />
          <path d="M18 46 Q22 26 24 22" fill="none" stroke="#92400E" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 22 Q16 18 12 24 M24 22 Q32 16 36 22 M24 22 Q24 12 18 12" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" />
          <circle cx="48" cy="18" r="6" fill="#F97316" />
        </svg>
      );
    case 'home':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <polygon points="32,12 10,32 54,32" fill="#EA580C" />
          <rect x="16" y="32" width="32" height="22" rx="3" fill="#FFFFFF" stroke="#D97706" strokeWidth="2" />
          <rect x="27" y="40" width="10" height="14" rx="1" fill="#F59E0B" />
          <rect x="20" y="36" width="5" height="5" rx="1" fill="#38BDF8" />
          <rect x="39" y="36" width="5" height="5" rx="1" fill="#38BDF8" />
        </svg>
      );
    case 'forest':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <rect x="19" y="42" width="4" height="12" fill="#78350F" />
          <polygon points="21,16 10,42 32,42" fill="#16A34A" />
          <rect x="41" y="40" width="5" height="14" fill="#78350F" />
          <polygon points="43,12 30,40 56,40" fill="#15803D" />
        </svg>
      );
    case 'summer':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFFBEB" />
          <polygon points="32,18 12,50 52,50" fill="#0EA5E9" />
          <polygon points="32,32 24,50 40,50" fill="#0369A1" />
          <circle cx="48" cy="18" r="6" fill="#F59E0B" />
        </svg>
      );
    case 'science':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <path d="M26 14 L38 14 L38 24 L48 46 Q50 52 44 52 L20 52 Q14 52 16 46 L26 24 Z" fill="#FFFFFF" stroke="#059669" strokeWidth="2.5" />
          <path d="M21 38 L43 38 L46 47 Q47 50 43 50 L21 50 Q17 50 18 47 Z" fill="#34D399" />
          <circle cx="28" cy="44" r="2.2" fill="#ECFDF5" />
          <circle cx="36" cy="42" r="1.8" fill="#ECFDF5" />
          <line x1="24" y1="14" x2="40" y2="14" stroke="#047857" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'weekday5':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EEF2FF" />
          <rect x="8" y="14" width="48" height="38" rx="6" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="2" />
          <rect x="8" y="14" width="48" height="11" rx="4" fill="#4F46E5" />
          <text x="32" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="700">
            T2 – T6
          </text>
          <text x="32" y="42" textAnchor="middle" fill="#3730A3" fontSize="13" fontWeight="800">
            5 NGÀY
          </text>
        </svg>
      );
    case 'calendar2':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <rect x="10" y="14" width="44" height="38" rx="6" fill="#FFFFFF" stroke="#D97706" strokeWidth="2" />
          <rect x="10" y="14" width="44" height="11" rx="4" fill="#D97706" />
          <text x="32" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="700">
            2/7 NGÀY
          </text>
          <text x="32" y="42" textAnchor="middle" fill="#B45309" fontSize="13" fontWeight="800">
            2 × ✓
          </text>
        </svg>
      );
    case 'saturday':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#F0F9FF" />
          <rect x="10" y="14" width="44" height="38" rx="6" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
          <rect x="10" y="14" width="44" height="11" rx="4" fill="#0284C7" />
          <text x="32" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="700">
            THỨ BẢY
          </text>
          <text x="32" y="42" textAnchor="middle" fill="#0369A1" fontSize="14" fontWeight="800">
            SAT
          </text>
        </svg>
      );
    case 'english':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EFF6FF" />
          <rect x="10" y="14" width="44" height="36" rx="6" fill="#2563EB" />
          <text x="32" y="34" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="800">
            A B C
          </text>
          <text x="32" y="45" textAnchor="middle" fill="#BFDBFE" fontSize="7.5" fontWeight="700">
            ENGLISH
          </text>
        </svg>
      );
    case 'maths':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF7ED" />
          <rect x="10" y="14" width="44" height="36" rx="6" fill="#EA580C" />
          <text x="32" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">
            1 + 2 = 3
          </text>
          <text x="32" y="44" textAnchor="middle" fill="#FFEDD5" fontSize="8" fontWeight="700">
            MATHS
          </text>
        </svg>
      );
    case 'comic':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <rect x="14" y="12" width="36" height="40" rx="4" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
          <rect x="18" y="16" width="13" height="14" rx="2" fill="#BAE6FD" />
          <rect x="33" y="16" width="13" height="14" rx="2" fill="#FEF3C7" />
          <rect x="18" y="33" width="28" height="14" rx="2" fill="#DCFCE7" />
          <circle cx="24" cy="23" r="3.5" fill="#0284C7" />
          <circle cx="39" cy="23" r="3.5" fill="#F59E0B" />
        </svg>
      );
    case 'talk':
    case 'speak':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <path d="M12 18 H40 A6 6 0 0 1 46 24 V34 A6 6 0 0 1 40 40 H24 L15 47 V40 H12 A6 6 0 0 1 6 34 V24 A6 6 0 0 1 12 18 Z" fill="#10B981" />
          <text x="26" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">
            Hi!
          </text>
          <circle cx="48" cy="42" r="7" fill="#059669" />
          <circle cx="48" cy="40" r="2.2" fill="#FFFFFF" />
        </svg>
      );
    case 'say':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <circle cx="24" cy="34" r="10" fill="#F59E0B" />
          <path d="M38 22 H52 A4 4 0 0 1 56 26 V34 A4 4 0 0 1 52 38 H42 L36 42 V38 H38 A4 4 0 0 1 34 34 V26 A4 4 0 0 1 38 22 Z" fill="#0284C7" />
          <line x1="40" y1="28" x2="50" y2="28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="40" y1="33" x2="47" y2="33" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'listen':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EFF6FF" />
          <path d="M16 36 V32 A16 16 0 0 1 48 32 V36" fill="none" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
          <rect x="12" y="32" width="9" height="16" rx="4" fill="#0284C7" />
          <rect x="43" y="32" width="9" height="16" rx="4" fill="#0284C7" />
        </svg>
      );
    case 'read':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <path d="M12 20 Q22 16 32 22 Q42 16 52 20 V46 Q42 42 32 48 Q22 42 12 46 Z" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.5" />
          <line x1="32" y1="22" x2="32" y2="48" stroke="#0284C7" strokeWidth="2" />
          <line x1="17" y1="28" x2="27" y2="28" stroke="#7DD3FC" strokeWidth="2" strokeLinecap="round" />
          <line x1="17" y1="34" x2="27" y2="34" stroke="#7DD3FC" strokeWidth="2" strokeLinecap="round" />
          <line x1="37" y1="28" x2="47" y2="28" stroke="#7DD3FC" strokeWidth="2" strokeLinecap="round" />
          <line x1="37" y1="34" x2="47" y2="34" stroke="#7DD3FC" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'write':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFFBEB" />
          <rect x="14" y="14" width="30" height="36" rx="4" fill="#FFFFFF" stroke="#D97706" strokeWidth="2" />
          <line x1="20" y1="24" x2="36" y2="24" stroke="#FCD34D" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="20" y1="32" x2="34" y2="32" stroke="#FCD34D" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M36 42 L50 28 L55 33 L41 47 L34 49 Z" fill="#EA580C" />
        </svg>
      );
    case 'notebook':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <rect x="16" y="12" width="34" height="40" rx="5" fill="#10B981" />
          <rect x="20" y="16" width="26" height="32" rx="3" fill="#FFFFFF" />
          <circle cx="16" cy="20" r="2.2" fill="#065F46" />
          <circle cx="16" cy="32" r="2.2" fill="#065F46" />
          <circle cx="16" cy="44" r="2.2" fill="#065F46" />
          <line x1="24" y1="25" x2="42" y2="25" stroke="#6EE7B7" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="24" y1="33" x2="40" y2="33" stroke="#6EE7B7" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'kitchen':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF7ED" />
          <rect x="12" y="28" width="40" height="22" rx="3" fill="#FB923C" />
          <rect x="16" y="33" width="14" height="12" rx="2" fill="#FFEDD5" />
          <rect x="34" y="33" width="14" height="12" rx="2" fill="#FED7AA" />
          <rect x="18" y="18" width="12" height="10" rx="2" fill="#64748B" />
          <path d="M22 14 Q24 10 26 14" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'sing':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FDF2F8" />
          <path d="M24 42 V18 L46 14 V38" fill="none" stroke="#DB2777" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="43" r="6" fill="#EC4899" />
          <circle cx="42" cy="39" r="6" fill="#EC4899" />
        </svg>
      );
    case 'dwarfs':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFFBEB" />
          <polygon points="32,12 16,32 48,32" fill="#EF4444" />
          <circle cx="32" cy="38" r="10" fill="#FDE68A" />
          <circle cx="28" cy="36" r="1.5" fill="#1E293B" />
          <circle cx="36" cy="36" r="1.5" fill="#1E293B" />
          <path d="M24 44 Q32 54 40 44" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          <text x="50" y="20" textAnchor="middle" fill="#B45309" fontSize="12" fontWeight="800">
            7
          </text>
        </svg>
      );
    case 'crow':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#F1F5F9" />
          <ellipse cx="30" cy="36" rx="14" ry="10" fill="#1E293B" />
          <circle cx="42" cy="26" r="7" fill="#0F172A" />
          <polygon points="48,25 56,28 48,30" fill="#F59E0B" />
          <circle cx="43" cy="24" r="1.5" fill="#FFFFFF" />
          <path d="M16 36 L8 42 L18 42 Z" fill="#334155" />
        </svg>
      );
    case 'lamp':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <path d="M16 36 Q32 24 48 34 L54 28 L52 38 Q34 50 18 42 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
          <rect x="24" y="44" width="16" height="5" rx="2" fill="#D97706" />
          <path d="M14 34 Q8 34 10 40 Q12 44 18 40" fill="none" stroke="#B45309" strokeWidth="2.5" />
          <circle cx="46" cy="18" r="3" fill="#38BDF8" />
          <circle cx="38" cy="14" r="2" fill="#0EA5E9" />
        </svg>
      );
    case 'funny':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF9C3" />
          <circle cx="32" cy="32" r="18" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
          <circle cx="26" cy="28" r="2.2" fill="#1E293B" />
          <circle cx="38" cy="28" r="2.2" fill="#1E293B" />
          <path d="M23 36 Q32 45 41 36 Z" fill="#EF4444" />
        </svg>
      );
    case 'library':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EEF2FF" />
          <polygon points="32,12 10,24 54,24" fill="#4F46E5" />
          <rect x="14" y="24" width="36" height="26" rx="2" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="2" />
          <rect x="20" y="29" width="6" height="16" rx="1" fill="#818CF8" />
          <rect x="29" y="29" width="6" height="16" rx="1" fill="#38BDF8" />
          <rect x="38" y="29" width="6" height="16" rx="1" fill="#F59E0B" />
        </svg>
      );
    case 'animals':
    case 'zoo':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <path d="M12 50 V26 A20 20 0 0 1 52 26 V50" fill="none" stroke="#059669" strokeWidth="4" />
          <rect x="18" y="18" width="28" height="11" rx="3" fill="#059669" />
          <text x="32" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800">
            ZOO
          </text>
          <circle cx="32" cy="40" r="7" fill="#F59E0B" />
          <circle cx="29.5" cy="39" r="1.2" fill="#0F172A" />
          <circle cx="34.5" cy="39" r="1.2" fill="#0F172A" />
        </svg>
      );
    case 'meat':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF1F2" />
          <ellipse cx="32" cy="33" rx="18" ry="13" fill="#E11D48" />
          <ellipse cx="32" cy="33" rx="13" ry="8.5" fill="#FB7185" />
          <circle cx="26" cy="33" r="4" fill="#FFF1F2" />
        </svg>
      );
    case 'story':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FDF2F8" />
          <rect x="14" y="12" width="36" height="40" rx="5" fill="#DB2777" />
          <rect x="20" y="16" width="26" height="32" rx="3" fill="#FCE7F3" />
          <polygon points="33,22 35,27 40,27 36,30 37,35 33,32 29,35 30,30 26,27 31,27" fill="#F59E0B" />
        </svg>
      );
    case 'elephant':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <circle cx="18" cy="30" r="9" fill="#94A3B8" />
          <circle cx="46" cy="30" r="9" fill="#94A3B8" />
          <circle cx="32" cy="32" r="14" fill="#64748B" />
          <path d="M32 36 Q32 50 40 48" fill="none" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
          <circle cx="27" cy="29" r="2" fill="#FFFFFF" />
          <circle cx="37" cy="29" r="2" fill="#FFFFFF" />
          <circle cx="27" cy="29" r="1" fill="#0F172A" />
          <circle cx="37" cy="29" r="1" fill="#0F172A" />
        </svg>
      );
    case 'tiger':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF7ED" />
          <circle cx="18" cy="20" r="6" fill="#EA580C" />
          <circle cx="46" cy="20" r="6" fill="#EA580C" />
          <circle cx="32" cy="34" r="16" fill="#F97316" />
          <line x1="28" y1="20" x2="28" y2="25" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="36" y1="20" x2="36" y2="25" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="26" cy="32" r="2" fill="#0F172A" />
          <circle cx="38" cy="32" r="2" fill="#0F172A" />
          <polygon points="32,35 29,39 35,39" fill="#1E293B" />
        </svg>
      );
    case 'monkey':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <circle cx="15" cy="32" r="6" fill="#92400E" />
          <circle cx="49" cy="32" r="6" fill="#92400E" />
          <circle cx="32" cy="32" r="15" fill="#B45309" />
          <ellipse cx="32" cy="37" rx="11" ry="8" fill="#FDE68A" />
          <circle cx="27" cy="29" r="2" fill="#0F172A" />
          <circle cx="37" cy="29" r="2" fill="#0F172A" />
          <path d="M27 39 Q32 43 37 39" fill="none" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'panda':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <circle cx="18" cy="20" r="6.5" fill="#0F172A" />
          <circle cx="46" cy="20" r="6.5" fill="#0F172A" />
          <circle cx="32" cy="34" r="16" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <ellipse cx="25" cy="32" rx="4.5" ry="5.5" fill="#0F172A" />
          <ellipse cx="39" cy="32" rx="4.5" ry="5.5" fill="#0F172A" />
          <circle cx="25" cy="31" r="1.4" fill="#FFFFFF" />
          <circle cx="39" cy="31" r="1.4" fill="#FFFFFF" />
          <ellipse cx="32" cy="39" rx="3" ry="2" fill="#0F172A" />
        </svg>
      );
    case 'peacock':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFEFF" />
          <path d="M10 42 A22 22 0 0 1 54 42 Z" fill="#0D9488" />
          <circle cx="20" cy="31" r="3" fill="#FACC15" />
          <circle cx="32" cy="24" r="3" fill="#FACC15" />
          <circle cx="44" cy="31" r="3" fill="#FACC15" />
          <ellipse cx="32" cy="44" rx="6" ry="8" fill="#0284C7" />
          <circle cx="32" cy="33" r="5" fill="#0369A1" />
          <polygon points="36,33 41,35 36,36" fill="#F59E0B" />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <path d="M12 44 C12 30 28 30 28 40 C28 48 44 48 44 34 C44 22 30 22 22 24" fill="none" stroke="#16A34A" strokeWidth="7" strokeLinecap="round" />
          <circle cx="20" cy="24" r="5" fill="#15803D" />
          <circle cx="18.5" cy="22.5" r="1.3" fill="#FEF08A" />
          <path d="M15 25 L10 27 M13 26 L10 24" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'penguin':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <ellipse cx="32" cy="36" rx="14" ry="18" fill="#1E293B" />
          <ellipse cx="32" cy="39" rx="9" ry="13" fill="#FFFFFF" />
          <circle cx="27" cy="25" r="2" fill="#FFFFFF" />
          <circle cx="37" cy="25" r="2" fill="#FFFFFF" />
          <circle cx="27" cy="25" r="1" fill="#0F172A" />
          <circle cx="37" cy="25" r="1" fill="#0F172A" />
          <polygon points="28,28 36,28 32,33" fill="#F59E0B" />
          <ellipse cx="25" cy="53" rx="4.5" ry="2.2" fill="#F59E0B" />
          <ellipse cx="39" cy="53" rx="4.5" ry="2.2" fill="#F59E0B" />
        </svg>
      );
    case 'gorilla':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#F1F5F9" />
          <circle cx="16" cy="32" r="5.5" fill="#334155" />
          <circle cx="48" cy="32" r="5.5" fill="#334155" />
          <circle cx="32" cy="32" r="16" fill="#1E293B" />
          <ellipse cx="32" cy="36" rx="11" ry="9" fill="#475569" />
          <circle cx="26" cy="29" r="2.2" fill="#FFFFFF" />
          <circle cx="38" cy="29" r="2.2" fill="#FFFFFF" />
          <circle cx="26" cy="29" r="1.2" fill="#0F172A" />
          <circle cx="38" cy="29" r="1.2" fill="#0F172A" />
          <path d="M26 40 Q32 43 38 40" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'kangaroo':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <ellipse cx="26" cy="18" rx="3" ry="8" fill="#B45309" transform="rotate(-15 26 18)" />
          <ellipse cx="36" cy="18" rx="3" ry="8" fill="#B45309" transform="rotate(15 36 18)" />
          <ellipse cx="31" cy="28" rx="10" ry="8" fill="#D97706" />
          <ellipse cx="32" cy="43" rx="11" ry="11" fill="#D97706" />
          <path d="M25 43 Q32 49 39 43" fill="#FDE68A" />
          <circle cx="28" cy="27" r="1.8" fill="#0F172A" />
          <circle cx="35" cy="27" r="1.8" fill="#0F172A" />
          <circle cx="31" cy="31" r="2" fill="#78350F" />
        </svg>
      );
    case 'sportsday':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF1F2" />
          <path d="M20 14 H44 V26 C44 34 38 40 32 40 C26 40 20 34 20 26 Z" fill="#F59E0B" />
          <path d="M20 18 H13 C13 26 16 30 20 30 M44 18 H51 C51 26 48 30 44 30" fill="none" stroke="#D97706" strokeWidth="3" />
          <rect x="29" y="40" width="6" height="9" fill="#D97706" />
          <rect x="21" y="49" width="22" height="5" rx="2" fill="#B45309" />
          <polygon points="32,19 34,24 39,24 35,27 36,32 32,29 28,32 29,27 25,24 30,24" fill="#FEF3C7" />
        </svg>
      );
    case 'teachersday':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FDF2F8" />
          <rect x="10" y="14" width="44" height="28" rx="4" fill="#047857" stroke="#92400E" strokeWidth="3" />
          <text x="32" y="28" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">
            20/11
          </text>
          <text x="32" y="37" textAnchor="middle" fill="#A7F3D0" fontSize="7" fontWeight="700">
            THANKS!
          </text>
          <circle cx="46" cy="48" r="6" fill="#EC4899" />
          <circle cx="46" cy="48" r="2.5" fill="#FACC15" />
          <line x1="38" y1="54" x2="43" y2="50" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'musicfest':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EEF2FF" />
          <path d="M24 44 V20 L46 14 V38" fill="none" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="44" r="6" fill="#4F46E5" />
          <circle cx="42" cy="38" r="6" fill="#6366F1" />
          <polygon points="14,14 15.5,18 19.5,18 16.5,20.5 17.5,24.5 14,22 10.5,24.5 11.5,20.5 8.5,18 12.5,18" fill="#F59E0B" />
        </svg>
      );
    case 'childrensday':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <ellipse cx="22" cy="24" rx="8" ry="10" fill="#F43F5E" />
          <ellipse cx="38" cy="20" rx="8" ry="10" fill="#F59E0B" />
          <ellipse cx="46" cy="30" rx="7" ry="9" fill="#10B981" />
          <path d="M22 34 Q24 45 28 54 M38 30 Q36 42 33 54 M46 39 Q42 46 36 54" fill="none" stroke="#475569" strokeWidth="1.8" />
          <text x="22" y="27" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800">
            1/6
          </text>
        </svg>
      );
    case 'independenceday':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF2F2" />
          <line x1="14" y1="12" x2="14" y2="54" stroke="#64748B" strokeWidth="3.5" strokeLinecap="round" />
          <rect x="16" y="14" width="38" height="26" rx="3" fill="#DC2626" />
          <polygon points="35,19 37,25 43,25 38,28.5 40,34.5 35,31 30,34.5 32,28.5 27,25 33,25" fill="#FACC15" />
          <text x="35" y="51" textAnchor="middle" fill="#B91C1C" fontSize="9.5" fontWeight="800">
            2 / 9
          </text>
        </svg>
      );
    case 'football':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <circle cx="32" cy="32" r="19" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
          <polygon points="32,23 39,28 36,36 28,36 25,28" fill="#0F172A" />
          <line x1="32" y1="13" x2="32" y2="23" stroke="#0F172A" strokeWidth="2" />
          <line x1="39" y1="28" x2="49" y2="24" stroke="#0F172A" strokeWidth="2" />
          <line x1="25" y1="28" x2="15" y2="24" stroke="#0F172A" strokeWidth="2" />
          <line x1="36" y1="36" x2="43" y2="46" stroke="#0F172A" strokeWidth="2" />
          <line x1="28" y1="36" x2="21" y2="46" stroke="#0F172A" strokeWidth="2" />
        </svg>
      );
    case 'badminton':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#F0F9FF" />
          <ellipse cx="26" cy="24" rx="11" ry="14" fill="#E0F2FE" stroke="#0284C7" strokeWidth="3" transform="rotate(-30 26 24)" />
          <line x1="33" y1="35" x2="48" y2="52" stroke="#0369A1" strokeWidth="4" strokeLinecap="round" />
          <polygon points="46,16 54,26 42,28" fill="#FFFFFF" stroke="#64748B" strokeWidth="1.5" />
          <circle cx="44" cy="28" r="3.5" fill="#EF4444" />
        </svg>
      );
    case 'trophy':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFFBEB" />
          <path d="M19 14 H45 V28 C45 36 39 42 32 42 C25 42 19 36 19 28 Z" fill="#F59E0B" />
          <rect x="29" y="42" width="6" height="7" fill="#D97706" />
          <rect x="20" y="49" width="24" height="5" rx="2" fill="#92400E" />
          <text x="32" y="31" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800">
            #1
          </text>
        </svg>
      );
    case 'violin':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF7ED" />
          <ellipse cx="28" cy="40" rx="12" ry="10" fill="#B45309" />
          <ellipse cx="33" cy="28" rx="8.5" ry="7" fill="#D97706" />
          <line x1="37" y1="22" x2="49" y2="10" stroke="#78350F" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="14" y1="24" x2="52" y2="44" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'fever':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF2F2" />
          <rect x="26" y="10" width="12" height="32" rx="6" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2.5" />
          <circle cx="32" cy="44" r="9" fill="#EF4444" />
          <rect x="29.5" y="18" width="5" height="24" rx="2.5" fill="#EF4444" />
          <text x="49" y="24" textAnchor="middle" fill="#B91C1C" fontSize="10" fontWeight="800">
            39°C
          </text>
        </svg>
      );
    case 'dentist':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFEFF" />
          <path d="M20 20 C20 13 30 13 32 18 C34 13 44 13 44 20 C44 30 41 48 36 48 C34 48 33 40 32 40 C31 40 30 48 28 48 C23 48 20 30 20 20 Z" fill="#FFFFFF" stroke="#0891B2" strokeWidth="2.5" />
          <path d="M27 25 L31 29 L38 22" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'soreeye':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF1F2" />
          <path d="M10 32 Q32 14 54 32 Q32 50 10 32 Z" fill="#FFFFFF" stroke="#E11D48" strokeWidth="2.5" />
          <circle cx="32" cy="32" r="8" fill="#FB7185" />
          <circle cx="32" cy="32" r="4" fill="#1E293B" />
          <line x1="16" y1="32" x2="22" y2="30" stroke="#E11D48" strokeWidth="1.5" />
          <line x1="42" y1="30" x2="48" y2="32" stroke="#E11D48" strokeWidth="1.5" />
        </svg>
      );
    case 'headache':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF7ED" />
          <circle cx="32" cy="36" r="15" fill="#FDE68A" stroke="#D97706" strokeWidth="2" />
          <path d="M25 35 L29 37 M39 35 L35 37" stroke="#78350F" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M27 44 Q32 40 37 44" fill="none" stroke="#92400E" strokeWidth="2.2" strokeLinecap="round" />
          <polyline points="16,14 21,20 17,22 22,27" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
          <polyline points="48,14 43,20 47,22 42,27" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'sweets':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FDF2F8" />
          <polygon points="10,24 22,32 10,40" fill="#F472B6" />
          <polygon points="54,24 42,32 54,40" fill="#F472B6" />
          <circle cx="32" cy="32" r="12" fill="#EC4899" />
          <path d="M24 27 Q32 32 24 37 M32 20 Q40 32 32 44" fill="none" stroke="#FCE7F3" strokeWidth="2.5" />
        </svg>
      );
    case 'toothache':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF2F2" />
          <path d="M20 20 C20 13 30 13 32 18 C34 13 44 13 44 20 C44 30 41 48 36 48 C34 48 33 40 32 40 C31 40 30 48 28 48 C23 48 20 30 20 20 Z" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2.5" />
          <polyline points="46,16 51,21 47,23 52,28" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="35" cy="27" r="3" fill="#FCA5A5" />
        </svg>
      );
    case 'stomachache':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <path d="M24 18 C36 14 48 24 46 36 C44 48 28 52 20 44 C15 39 18 32 24 30 C27 29 26 24 24 18 Z" fill="#FB923C" stroke="#C2410C" strokeWidth="2" />
          <path d="M27 36 Q33 31 39 36" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M27 42 Q33 37 39 42" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'backache':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EFF6FF" />
          <circle cx="28" cy="18" r="6" fill="#2563EB" />
          <path d="M28 24 Q20 34 26 46 L24 54 M26 46 L34 54 M25 30 L38 34" fill="none" stroke="#1D4ED8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="40,26 46,30 42,33 48,37" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'sorethroat':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF1F2" />
          <circle cx="32" cy="22" r="10" fill="#FDE68A" stroke="#D97706" strokeWidth="2" />
          <rect x="27" y="31" width="10" height="11" fill="#FCD34D" />
          <path d="M16 52 C16 42 48 42 48 52" fill="#38BDF8" />
          <circle cx="32" cy="37" r="4.5" fill="#EF4444" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#F1F5F9" />
          <circle cx="32" cy="32" r="14" fill="#38BDF8" />
        </svg>
      );
  }
};
