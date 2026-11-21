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

export const SafetyImperativeDiagram: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Affirmative Imperative */}
        <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 space-y-2.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
            1. Mệnh lệnh Khẳng định (+)
          </p>
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-extrabold">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white">V nguyên mẫu</span>
            <span>+</span>
            <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800">
              O / Trạng từ !
            </span>
          </div>
          <div className="bg-white rounded-xl p-2.5 border border-emerald-100 text-xs text-slate-700 space-y-1">
            <p>• <strong>Sit down</strong>, please! (Mời ngồi!)</p>
            <p>• <strong>Be careful!</strong> (Cẩn thận đấy!)</p>
          </div>
        </div>

        {/* Negative Imperative */}
        <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-4 space-y-2.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-rose-800">
            2. Mệnh lệnh Ngăn cản (-)
          </p>
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-extrabold">
            <span className="px-2.5 py-1 rounded-lg bg-rose-600 text-white">Don’t</span>
            <span>+</span>
            <span className="px-2.5 py-1 rounded-lg bg-amber-100 border border-amber-300 text-amber-950">
              V nguyên mẫu + O !
            </span>
          </div>
          <div className="bg-white rounded-xl p-2.5 border border-rose-100 text-xs text-slate-700 space-y-1">
            <p>• <strong>Don’t touch</strong> the stove! (Đừng chạm bếp!)</p>
            <p className="text-emerald-800 font-bold">→ Đáp lễ: OK, I won’t.</p>
          </div>
        </div>

        {/* Why shouldn't I -> Because you may */}
        <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-4 space-y-2.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
            3. Hỏi lý do & Cảnh báo (may)
          </p>
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-extrabold">
            <span className="px-2.5 py-1 rounded-lg bg-amber-600 text-white">Why shouldn’t I + V?</span>
          </div>
          <div className="bg-white rounded-xl p-2.5 border border-amber-100 text-xs text-slate-700 space-y-1">
            <p>• <strong>Because you may</strong> + V nguyên mẫu.</p>
            <p>• Because you <strong>may cut</strong> yourself / <strong>get a burn</strong>.</p>
          </div>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-xs sm:text-sm text-sky-950">
        <strong>Mẹo nhớ nhanh Unit 12:</strong> Muốn câu mệnh lệnh lịch sự hơn, thêm <strong>Please</strong> ở đầu hoặc cuối câu (<em>Please don’t talk loudly!</em>). Sau <strong>Don’t</strong> và <strong>may</strong>, động từ luôn ở dạng <strong>nguyên mẫu</strong>!
      </div>
    </div>
  );
};

export const FreeTimeGrammarDiagram: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Do vs Does */}
        <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-sky-800">
            Mẫu 1 · Hỏi bạn / số nhiều (DO) vs Anh ấy / Cô ấy (DOES)
          </p>
          <div className="space-y-2 text-xs">
            <div className="bg-white rounded-xl p-3 border border-sky-100 space-y-1">
              <p className="font-bold text-slate-900">
                What <span className="text-sky-700">do</span> you / they do in{' '}
                <span className="text-sky-700">your / their</span> free time?
              </p>
              <p className="text-slate-600">
                → I / They often <strong>go swimming</strong> / <strong>surf the Internet</strong>.
              </p>
            </div>
            <div className="bg-white rounded-xl p-3 border border-amber-200 space-y-1">
              <p className="font-bold text-slate-900">
                What <span className="text-amber-800">does</span> he / she / your mother do in{' '}
                <span className="text-amber-800">his / her</span> free time?
              </p>
              <p className="text-slate-600">
                → He / She often <strong>goes fishing</strong> / <strong>does karate</strong> / <strong>cleans</strong> the house.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Golden Verb Groups */}
        <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
            Mẫu 2 · 3 nhóm động từ giải trí không bao giờ nhầm
          </p>
          <div className="space-y-2 text-xs">
            <div className="bg-white rounded-xl p-2.5 border border-emerald-100 flex items-start gap-2">
              <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white font-bold shrink-0">
                GO + V-ing
              </span>
              <p className="text-slate-700">
                go <strong>fishing</strong> · go <strong>shopping</strong> · go <strong>swimming</strong> · go <strong>camping</strong> · go <strong>skating</strong> · go <strong>hiking</strong>
              </p>
            </div>
            <div className="bg-white rounded-xl p-2.5 border border-sky-100 flex items-start gap-2">
              <span className="px-2 py-0.5 rounded-md bg-sky-600 text-white font-bold shrink-0">
                DO
              </span>
              <p className="text-slate-700">
                <strong>do karate</strong> (he/she → <strong>does karate</strong>) · do morning exercise
              </p>
            </div>
            <div className="bg-white rounded-xl p-2.5 border border-amber-100 flex items-start gap-2">
              <span className="px-2 py-0.5 rounded-md bg-amber-600 text-white font-bold shrink-0">
                Động từ riêng
              </span>
              <p className="text-slate-700">
                <strong>surf</strong> the Internet · <strong>clean</strong> the house · <strong>ride</strong> my bike · <strong>watch</strong> cartoons
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950">
        <strong>Mẹo tránh mất điểm thi:</strong> Khi đổi chủ ngữ sang <strong>He / She / My father / My sister</strong>, nhớ 2 việc cùng lúc: đổi <strong>your → his/her</strong> và thêm <strong>-s/-es</strong> vào động từ (go → <strong>goes</strong>, do → <strong>does</strong>, watch → <strong>watches</strong>, surf → <strong>surfs</strong>).
      </div>
    </div>
  );
};

/* =========================================================
   UNIT 14 DIAGRAM: STORY SEQUENCE & CHARACTER OPINIONS
   ========================================================= */
export const StoryOpinionDiagram: React.FC = () => {
  return (
    <div className="space-y-5">
      {/* 4-Step Storytelling Flow */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { step: '1 · First', vi: 'Đầu tiên', color: 'border-emerald-200 bg-emerald-50/70 text-emerald-900', badge: 'bg-emerald-600', ex: 'First, the fox asked for meat.' },
          { step: '2 · Then', vi: 'Sau đó', color: 'border-sky-200 bg-sky-50/70 text-sky-900', badge: 'bg-sky-600', ex: 'Then, the fox asked the crow to dance.' },
          { step: '3 · Next', vi: 'Tiếp theo', color: 'border-amber-200 bg-amber-50/70 text-amber-900', badge: 'bg-amber-600', ex: 'Next, the crow opened its beak to sing.' },
          { step: '4 · In the end', vi: 'Cuối cùng', color: 'border-rose-200 bg-rose-50/70 text-rose-900', badge: 'bg-rose-600', ex: 'In the end, the fox picked up the meat.' },
        ].map((item) => (
          <div key={item.step} className={`rounded-2xl border p-3.5 space-y-2 ${item.color}`}>
            <div className="flex items-center justify-between gap-2">
              <span className={`px-2 py-0.5 rounded-md text-[11px] font-extrabold text-white ${item.badge}`}>
                {item.step}
              </span>
              <span className="text-xs font-bold">{item.vi}</span>
            </div>
            <p className="text-xs font-semibold text-slate-800 leading-relaxed">{item.ex}</p>
          </div>
        ))}
      </div>

      {/* 3 Question Patterns + Opposites */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 space-y-2.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-sky-800">
            3 mẫu câu hỏi chuẩn Unit 14
          </p>
          <div className="space-y-2 text-xs">
            <div className="bg-white rounded-xl p-2.5 border border-sky-100">
              <p className="font-bold text-slate-900">1. What happened in the story?</p>
              <p className="text-slate-600">→ Kể bằng <strong>First / Then / Next / In the end</strong> + động từ Quá khứ (V2).</p>
            </div>
            <div className="bg-white rounded-xl p-2.5 border border-sky-100">
              <p className="font-bold text-slate-900">2. What kinds of stories do you like?</p>
              <p className="text-slate-600">→ I like <strong>folk tales / comic books / fairy tales</strong>.</p>
            </div>
            <div className="bg-white rounded-xl p-2.5 border border-sky-100">
              <p className="font-bold text-slate-900">3. What do you think <span className="text-sky-700">of</span> ...?</p>
              <p className="text-slate-600">→ I think <strong>he / she / it is + tính từ</strong> (hard-working, kind, greedy...).</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-4 space-y-2.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-amber-900">
            3 cặp tính cách nhân vật trái nghĩa cực dễ nhớ
          </p>
          <div className="space-y-2 text-xs">
            {[
              { left: 'honest (thật thà)', right: 'greedy (tham lam)', ex: 'Em út ↔ Anh trai (Cây khế)' },
              { left: 'wise (khôn ngoan)', right: 'stupid (ngốc nghếch)', ex: 'Cáo ↔ Quạ (The Fox & the Crow)' },
              { left: 'kind (tốt bụng)', right: 'cruel / angry (độc ác)', ex: 'Bạch Tuyết ↔ Hoàng hậu' },
            ].map((pair) => (
              <div key={pair.left} className="bg-white rounded-xl p-2.5 border border-amber-100 flex flex-wrap items-center justify-between gap-2">
                <span className="font-bold text-emerald-700">{pair.left}</span>
                <span className="text-slate-400 font-bold">↔</span>
                <span className="font-bold text-rose-700">{pair.right}</span>
                <span className="w-full text-[11px] text-slate-500">{pair.ex}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   UNIT 15 DIAGRAM: FUTURE DREAM JOB & A/AN + WHY/BECAUSE
   ========================================================= */
export const FutureDreamJobDiagram: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-sky-800">
            Mẫu 1 · Hỏi & trả lời nghề mơ ước (would like to be)
          </p>
          <div className="space-y-2 text-xs">
            <div className="bg-white rounded-xl p-3 border border-sky-100">
              <p className="font-bold text-slate-900">
                What <span className="text-sky-700">would</span> you / he / she <span className="text-sky-700">like to be</span> in the future?
              </p>
              <p className="text-slate-600 mt-1">
                → I’d / He’d / She’d <strong>like to be</strong> + <strong>a / an</strong> + nghề nghiệp.
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-3 border border-amber-200 space-y-1">
              <p className="font-bold text-amber-900">Phân biệt A và AN (4 nghề hay ra thi nhất!):</p>
              <p className="text-slate-700">
                • <strong>AN</strong> + nguyên âm (a, e, i, o, u): <strong>an architect</strong>, <strong>an astronaut</strong>, <strong>an engineer</strong>, <strong>an artist</strong>, <strong>an accountant</strong>.
              </p>
              <p className="text-slate-700">
                • <strong>A</strong> + phụ âm: <strong>a pilot</strong>, <strong>a teacher</strong>, <strong>a nurse</strong>, <strong>a writer</strong>, <strong>a farmer</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
            Mẫu 2 · Hỏi lý do chọn nghề (Why → Because + would like to V)
          </p>
          <div className="space-y-2 text-xs">
            <div className="bg-white rounded-xl p-3 border border-emerald-100">
              <p className="font-bold text-slate-900">
                <span className="text-emerald-700">Why</span> would you like to be a/an ...?
              </p>
              <p className="text-slate-600 mt-1">
                → <span className="font-bold text-emerald-700">Because</span> I’d like to + <strong>V (nguyên mẫu)</strong>.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { job: 'pilot', act: 'fly a plane' },
                { job: 'architect', act: 'design buildings' },
                { job: 'nurse / doctor', act: 'look after patients' },
                { job: 'teacher', act: 'teach young children' },
              ].map((pair) => (
                <div key={pair.job} className="bg-white rounded-xl px-2.5 py-2 border border-emerald-100">
                  <span className="font-bold text-slate-900">{pair.job}</span>
                  <span className="text-emerald-700 font-semibold"> → {pair.act}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-950">
        <strong>Cảnh báo 3 lỗi sai kinh điển Unit 15:</strong> (1) Không dùng <em>What do you like to be</em> → phải là <strong>What would you like to be</strong>. (2) Không quên <strong>like</strong> trong <em>would you like to be</em>. (3) Không viết <em>on space</em> → phải là <strong>in space</strong>!
      </div>
    </div>
  );
};

/* =========================================================
   UNIT 16 DIAGRAM: PREPOSITIONS OF PLACE & GIVING DIRECTIONS
   ========================================================= */
export const DirectionsPlaceDiagram: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Visual Mini Street Map SVG */}
      <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4">
        <p className="text-xs font-extrabold uppercase tracking-wider text-sky-800 mb-3">
          Sơ đồ trực quan 6 vị trí địa điểm trên một con phố
        </p>
        <svg viewBox="0 0 680 215" className="w-full h-auto" role="img" aria-label="Bản đồ minh họa các giới từ chỉ vị trí">
          {/* Background */}
          <rect x="0" y="0" width="680" height="215" rx="16" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1.5" />
          {/* Top Row Buildings */}
          <rect x="26" y="18" width="130" height="58" rx="10" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
          <text x="91" y="42" textAnchor="middle" fill="#0369A1" fontSize="12" fontWeight="800">MUSEUM</text>
          <text x="91" y="59" textAnchor="middle" fill="#0F172A" fontSize="10">Bảo tàng</text>

          <rect x="176" y="18" width="136" height="58" rx="10" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
          <text x="244" y="42" textAnchor="middle" fill="#B45309" fontSize="12" fontWeight="800">BOOKSHOP</text>
          <text x="244" y="59" textAnchor="middle" fill="#0F172A" fontSize="10">between A &amp; B</text>

          <rect x="332" y="18" width="130" height="58" rx="10" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="2" />
          <text x="397" y="42" textAnchor="middle" fill="#3730A3" fontSize="12" fontWeight="800">CINEMA</text>
          <text x="397" y="59" textAnchor="middle" fill="#0F172A" fontSize="10">next to Bookshop</text>

          <rect x="526" y="18" width="128" height="58" rx="10" fill="#ECFDF5" stroke="#059669" strokeWidth="2" />
          <text x="590" y="42" textAnchor="middle" fill="#047857" fontSize="12" fontWeight="800">PHARMACY</text>
          <text x="590" y="59" textAnchor="middle" fill="#0F172A" fontSize="10">at the end of street</text>

          {/* Horizontal Road */}
          <rect x="16" y="88" width="648" height="38" rx="6" fill="#475569" />
          <line x1="28" y1="107" x2="652" y2="107" stroke="#FACC15" strokeWidth="2.5" strokeDasharray="10 8" />
          <text x="244" y="111" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">GREEN STREET → GO STRAIGHT AHEAD</text>

          {/* Vertical Crossroad on Right */}
          <rect x="476" y="14" width="36" height="188" rx="4" fill="#64748B" />
          <line x1="494" y1="22" x2="494" y2="194" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" />

          {/* Opposite Arrows */}
          <line x1="244" y1="78" x2="244" y2="136" stroke="#E11D48" strokeWidth="2.5" strokeDasharray="3 3" />
          <rect x="195" y="138" width="102" height="58" rx="10" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2" />
          <text x="246" y="162" textAnchor="middle" fill="#15803D" fontSize="12" fontWeight="800">PARK</text>
          <text x="246" y="179" textAnchor="middle" fill="#0F172A" fontSize="10">opposite Bookshop</text>

          <rect x="26" y="138" width="144" height="58" rx="10" fill="#FFF7ED" stroke="#EA580C" strokeWidth="2" />
          <text x="98" y="162" textAnchor="middle" fill="#C2410C" fontSize="12" fontWeight="800">BUS STOP</text>
          <text x="98" y="179" textAnchor="middle" fill="#0F172A" fontSize="10">next to Park</text>

          <rect x="332" y="138" width="130" height="58" rx="10" fill="#FFF1F2" stroke="#E11D48" strokeWidth="2" />
          <text x="397" y="162" textAnchor="middle" fill="#BE123C" fontSize="12" fontWeight="800">POST OFFICE</text>
          <text x="397" y="179" textAnchor="middle" fill="#0F172A" fontSize="10">on the corner</text>

          <rect x="526" y="138" width="128" height="58" rx="10" fill="#F0F9FF" stroke="#0284C7" strokeWidth="2" />
          <text x="590" y="162" textAnchor="middle" fill="#0369A1" fontSize="12" fontWeight="800">THEATRE</text>
          <text x="590" y="179" textAnchor="middle" fill="#0F172A" fontSize="10">opposite Pharmacy</text>
        </svg>
      </div>

      {/* Quick Cheat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div className="rounded-xl bg-amber-50/80 border border-amber-200 p-3 space-y-1">
          <p className="font-extrabold text-amber-900">1. KHÔNG thêm “to” sau:</p>
          <p className="text-slate-700">
            <strong>opposite</strong> (đối diện) · <strong>near</strong> (gần) · <strong>behind</strong> (phía sau)
          </p>
          <p className="text-emerald-700 font-semibold">✓ opposite the park · near my house</p>
        </div>
        <div className="rounded-xl bg-emerald-50/80 border border-emerald-200 p-3 space-y-1">
          <p className="font-extrabold text-emerald-900">2. BẮT BUỘC có giới từ kèm:</p>
          <p className="text-slate-700">
            <strong>next to</strong> · <strong>in front of</strong> · <strong>between A and B</strong> · <strong>at the end of</strong> · <strong>on the corner of</strong>
          </p>
        </div>
        <div className="rounded-xl bg-sky-50/80 border border-sky-200 p-3 space-y-1">
          <p className="font-extrabold text-sky-900">3. Hỏi đường với CAN:</p>
          <p className="text-slate-700">
            <strong>How can I get to + địa điểm?</strong>
          </p>
          <p className="text-sky-800 font-semibold">→ You can walk / take a bus / go by boat.</p>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   UNIT 17 VISUAL GRAMMAR: CONTAINERS + HOW MUCH / HOW MANY
   ========================================================= */
export const FoodQuantityDiagram: React.FC = () => {
  const containers = [
    { unit: 'a bowl of', vi: 'một bát', pair: 'noodles / rice', color: 'bg-amber-50 border-amber-200 text-amber-900' },
    { unit: 'a packet of', vi: 'một gói', pair: 'biscuits / candy', color: 'bg-orange-50 border-orange-200 text-orange-900' },
    { unit: 'a bar of', vi: 'một thanh', pair: 'chocolate', color: 'bg-rose-50 border-rose-200 text-rose-900' },
    { unit: 'a glass of', vi: 'một cốc / ly', pair: 'orange juice / lemonade', color: 'bg-sky-50 border-sky-200 text-sky-900' },
    { unit: 'a carton of', vi: 'một hộp giấy', pair: 'milk / apple juice', color: 'bg-indigo-50 border-indigo-200 text-indigo-900' },
    { unit: 'a bottle of', vi: 'một chai', pair: 'water', color: 'bg-emerald-50 border-emerald-200 text-emerald-900' },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
      <div className="space-y-1">
        <h3 className="font-display font-bold text-lg text-slate-900">
          Sơ đồ trực quan Unit 17: 6 Đơn vị đựng & Phân biệt How much / How many
        </h3>
        <p className="text-sm text-slate-600">
          Nhớ đúng cặp “vật đựng + món” để gọi đồ ăn cực chuẩn, và phân biệt ngay danh từ đếm được / không đếm được.
        </p>
      </div>

      {/* 6 Container Pairings */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {containers.map((c) => (
          <div key={c.unit} className={`rounded-2xl border p-3.5 space-y-1 ${c.color}`}>
            <p className="font-display font-extrabold text-sm sm:text-base">{c.unit}</p>
            <p className="text-xs opacity-80">{c.vi}</p>
            <p className="text-xs font-bold pt-1 border-t border-black/10">+ {c.pair}</p>
          </div>
        ))}
      </div>

      {/* How much vs How many Split Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-sky-50/80 border border-sky-200 p-4 space-y-2">
          <p className="font-display font-extrabold text-base text-sky-900">
            HOW MUCH + Danh từ KHÔNG đếm được
          </p>
          <p className="text-xs text-slate-700 leading-relaxed">
            Chất lỏng hoặc hạt nhỏ không đếm từng cái được: <strong>water, milk, juice, lemonade, rice, bread, sugar, butter</strong>.
          </p>
          <div className="rounded-xl bg-white border border-sky-200 px-3 py-2 text-xs space-y-1">
            <p className="font-bold text-slate-900">How much rice do you eat every day?</p>
            <p className="text-emerald-700 font-semibold">→ I eat two bowls of rice. (Không nói “How many rice”!)</p>
          </div>
        </div>

        <div className="rounded-2xl bg-emerald-50/80 border border-emerald-200 p-4 space-y-2">
          <p className="font-display font-extrabold text-base text-emerald-900">
            HOW MANY + Danh từ ĐẾM ĐƯỢC số nhiều (-s / -es)
          </p>
          <p className="text-xs text-slate-700 leading-relaxed">
            Đếm từng quả, chiếc hoặc từng chai/bát: <strong>bananas, apples, eggs, sausages, sandwiches, bottles, bowls, bars</strong>.
          </p>
          <div className="rounded-xl bg-white border border-emerald-200 px-3 py-2 text-xs space-y-1">
            <p className="font-bold text-slate-900">How many bananas do you eat every day?</p>
            <p className="text-emerald-700 font-semibold">→ I eat two bananas every day.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   UNIT 18 VISUAL GRAMMAR: WEATHER ADJECTIVES & 4 SEASONS
   ========================================================= */
export const WeatherSeasonsDiagram: React.FC = () => {
  const transforms = [
    { noun: 'sun', adj: 'sunny', note: 'gấp đôi n', vi: 'có nắng' },
    { noun: 'fog', adj: 'foggy', note: 'gấp đôi g', vi: 'có sương mù' },
    { noun: 'rain', adj: 'rainy', note: '+ y', vi: 'có mưa' },
    { noun: 'wind', adj: 'windy', note: '+ y', vi: 'có gió' },
    { noun: 'cloud', adj: 'cloudy', note: '+ y', vi: 'nhiều mây' },
    { noun: 'snow', adj: 'snowy', note: '+ y', vi: 'có tuyết' },
    { noun: 'storm', adj: 'stormy', note: '+ y', vi: 'có bão' },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
      <div className="space-y-1">
        <h3 className="font-display font-bold text-lg text-slate-900">
          Sơ đồ trực quan Unit 18: Công thức “Danh từ + Y → Tính từ thời tiết” & Thước 4 mùa
        </h3>
        <p className="text-sm text-slate-600">
          Sau <strong>It will be ...</strong> (ngày mai) hoặc <strong>It is usually ...</strong> (các mùa) luôn dùng <strong>TÍNH TỪ thời tiết</strong>!
        </p>
      </div>

      {/* Noun -> Adj + y grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
        {transforms.map((t) => (
          <div key={t.noun} className="rounded-xl border border-sky-200 bg-sky-50/70 p-3 text-center space-y-1">
            <p className="text-xs font-semibold text-slate-500">{t.noun}</p>
            <p className="text-[11px] font-bold text-amber-700">{t.note}</p>
            <p className="font-display font-extrabold text-sm text-sky-900">{t.adj}</p>
            <p className="text-[11px] text-slate-600">{t.vi}</p>
          </div>
        ))}
      </div>

      {/* 4-Season Temperature Ruler */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3.5 space-y-1">
          <p className="font-display font-extrabold text-emerald-900">Spring (Xuân)</p>
          <p className="text-xs font-bold text-emerald-700">warm · lots of flowers</p>
          <p className="text-xs text-slate-600">Ấm áp, nhiều hoa nở</p>
        </div>
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-3.5 space-y-1">
          <p className="font-display font-extrabold text-amber-900">Summer (Hè)</p>
          <p className="text-xs font-bold text-amber-700">hot and sunny</p>
          <p className="text-xs text-slate-600">Nóng bức, nắng rực rỡ</p>
        </div>
        <div className="rounded-xl bg-orange-50 border border-orange-200 p-3.5 space-y-1">
          <p className="font-display font-extrabold text-orange-900">Autumn / Fall (Thu)</p>
          <p className="text-xs font-bold text-orange-700">cool and windy</p>
          <p className="text-xs text-slate-600">Mát mẻ, gió nhẹ, lá rơi</p>
        </div>
        <div className="rounded-xl bg-sky-50 border border-sky-200 p-3.5 space-y-1">
          <p className="font-display font-extrabold text-sky-900">Winter (Đông)</p>
          <p className="text-xs font-bold text-sky-700">cold · foggy / snowy</p>
          <p className="text-xs text-slate-600">Lạnh giá, sương mù / tuyết</p>
        </div>
      </div>

      {/* Warning Note */}
      <div className="rounded-xl bg-amber-50/80 border border-amber-200 px-4 py-3 text-xs text-amber-950 flex flex-wrap gap-x-6 gap-y-1">
        <span>
          <strong>Tương lai (tomorrow):</strong> It&apos;ll <strong>be</strong> + tính từ (KHÔNG viết <em>It&apos;ll is</em>!).
        </span>
        <span>
          <strong>There is / There are:</strong> There <strong>is</strong> rain/snow (không đếm được) · There <strong>are</strong> flowers/clouds (số nhiều).
        </span>
      </div>
    </div>
  );
};

/* =========================================================
   UNIT 19 VISUAL GRAMMAR: WHICH PLACE & MORE ... THAN EXPECTED
   ========================================================= */
export const LandmarkComparisonDiagram: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
      <div className="space-y-1">
        <h3 className="font-display font-bold text-lg text-slate-900">
          Sơ đồ trực quan Unit 19: Chọn 1 trong 2 nơi (Which ... or ...?) & Khen “hơn mình tưởng”
        </h3>
        <p className="text-sm text-slate-600">
          Ghi nhớ ngay công thức so sánh hơn cho tính từ ngắn (-er) và tính từ dài (more ...) kèm cụm <strong>than I expected</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-emerald-50/80 border border-emerald-200 p-4 space-y-2">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
            Tính từ NGẮN (1 âm tiết) → thêm -ER + than
          </p>
          <div className="space-y-1.5 text-sm">
            <p className="text-slate-800">
              big → <strong>bigger</strong> than I expected <span className="text-xs text-slate-500">(gấp đôi g)</span>
            </p>
            <p className="text-slate-800">
              small → <strong>smaller</strong> than I expected
            </p>
            <p className="text-slate-800">
              large → <strong>larger</strong> than I expected
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-sky-50/80 border border-sky-200 p-4 space-y-2">
          <p className="text-xs font-extrabold uppercase tracking-wider text-sky-800">
            Tính từ DÀI (từ 2–3 âm tiết trở lên) → MORE + tính từ + than
          </p>
          <div className="space-y-1.5 text-sm">
            <p className="text-slate-800">
              attractive → <strong>more attractive</strong> than I expected
            </p>
            <p className="text-slate-800">
              exciting → <strong>more exciting</strong> than I expected
            </p>
            <p className="text-slate-800">
              interesting / beautiful → <strong>more interesting / more beautiful</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-amber-50/80 border border-amber-200 px-4 py-3 text-xs text-amber-950 flex flex-wrap gap-x-6 gap-y-1">
        <span>
          <strong>2 lựa chọn:</strong> <strong>Which</strong> place would you like to visit, A <strong>or</strong> B?
        </span>
        <span>
          <strong>Động từ:</strong> I&apos;d like <strong>to visit</strong> + địa danh (KHÔNG viết <em>visit to</em>!).
        </span>
      </div>
    </div>
  );
};

/* =========================================================
   COMPARATIVE MASTER DIAGRAM (UNIT 20 — PAGE 152)
   ========================================================= */
export const ComparativeMasterDiagram: React.FC = () => {
  return (
    <div className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50/80 via-white to-sky-50/70 p-4 sm:p-5">
      <svg
        viewBox="0 0 860 320"
        className="w-full h-auto"
        role="img"
        aria-label="Sơ đồ 4 quy tắc vàng so sánh hơn Tiếng Anh lớp 5"
      >
        <rect x="6" y="6" width="848" height="308" rx="20" fill="#FFFFFF" stroke="#CCFBF1" strokeWidth="2" />
        <text x="430" y="38" textAnchor="middle" fill="#0F766E" fontSize="18" fontWeight="800">
          SƠ ĐỒ 4 QUY TẮC VÀNG SO SÁNH HƠN (COMPARATIVES)
        </text>
        <text x="430" y="58" textAnchor="middle" fill="#64748B" fontSize="12.5" fontWeight="600">
          Công thức gốc: S1 + be + Tính từ so sánh hơn + THAN + S2
        </text>

        {/* Box 1: Short + er */}
        <g transform="translate(24, 78)">
          <rect width="192" height="162" rx="14" fill="#F0F9FF" stroke="#7DD3FC" strokeWidth="2" />
          <rect width="192" height="34" rx="14" fill="#0284C7" />
          <rect y="18" width="192" height="16" fill="#0284C7" />
          <text x="96" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">
            1. NGẮN (+ er / + r)
          </text>
          <text x="96" y="58" textAnchor="middle" fill="#0369A1" fontSize="12" fontWeight="700">
            1 âm tiết thường
          </text>
          <text x="96" y="84" textAnchor="middle" fill="#0F172A" fontSize="13.5" fontWeight="700">
            small → smaller
          </text>
          <text x="96" y="108" textAnchor="middle" fill="#0F172A" fontSize="13.5" fontWeight="700">
            cheap → cheaper
          </text>
          <text x="96" y="132" textAnchor="middle" fill="#0F172A" fontSize="13.5" fontWeight="700">
            large → larger (+r)
          </text>
          <text x="96" y="152" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="600">
            Đuôi sẵn -e chỉ thêm -r
          </text>
        </g>

        {/* Box 2: CVC double */}
        <g transform="translate(230, 78)">
          <rect width="192" height="162" rx="14" fill="#FFFBEB" stroke="#FCD34D" strokeWidth="2" />
          <rect width="192" height="34" rx="14" fill="#D97706" />
          <rect y="18" width="192" height="16" fill="#D97706" />
          <text x="96" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">
            2. GẤP ĐÔI PHỤ ÂM
          </text>
          <text x="96" y="58" textAnchor="middle" fill="#B45309" fontSize="12" fontWeight="700">
            1 nguyên âm + 1 phụ âm
          </text>
          <text x="96" y="84" textAnchor="middle" fill="#0F172A" fontSize="13.5" fontWeight="700">
            big → big<tspan fill="#DC2626">g</tspan>er
          </text>
          <text x="96" y="108" textAnchor="middle" fill="#0F172A" fontSize="13.5" fontWeight="700">
            hot → hot<tspan fill="#DC2626">t</tspan>er
          </text>
          <text x="96" y="132" textAnchor="middle" fill="#0F172A" fontSize="13.5" fontWeight="700">
            fat → fat<tspan fill="#DC2626">t</tspan>er
          </text>
          <text x="96" y="152" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="600">
            Quy tắc 1-1-1 siêu dễ nhớ!
          </text>
        </g>

        {/* Box 3: -y -> -ier */}
        <g transform="translate(436, 78)">
          <rect width="192" height="162" rx="14" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="2" />
          <rect width="192" height="34" rx="14" fill="#059669" />
          <rect y="18" width="192" height="16" fill="#059669" />
          <text x="96" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">
            3. ĐUÔI -Y → -IER
          </text>
          <text x="96" y="58" textAnchor="middle" fill="#047857" fontSize="12" fontWeight="700">
            2 âm tiết tận cùng -y
          </text>
          <text x="96" y="84" textAnchor="middle" fill="#0F172A" fontSize="13.5" fontWeight="700">
            busy → bus<tspan fill="#059669">ier</tspan>
          </text>
          <text x="96" y="108" textAnchor="middle" fill="#0F172A" fontSize="13.5" fontWeight="700">
            noisy → nois<tspan fill="#059669">ier</tspan>
          </text>
          <text x="96" y="132" textAnchor="middle" fill="#0F172A" fontSize="13.5" fontWeight="700">
            happy → happ<tspan fill="#059669">ier</tspan>
          </text>
          <text x="96" y="152" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="600">
            Bỏ y, đổi thành i rồi + er
          </text>
        </g>

        {/* Box 4: Long -> more + adj */}
        <g transform="translate(642, 78)">
          <rect width="192" height="162" rx="14" fill="#FDF2F8" stroke="#F9A8D4" strokeWidth="2" />
          <rect width="192" height="34" rx="14" fill="#DB2777" />
          <rect y="18" width="192" height="16" fill="#DB2777" />
          <text x="96" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">
            4. DÀI (MORE + ADJ)
          </text>
          <text x="96" y="58" textAnchor="middle" fill="#BE185D" fontSize="12" fontWeight="700">
            Từ 2–3 âm tiết trở lên
          </text>
          <text x="96" y="84" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="700">
            <tspan fill="#DB2777">more</tspan> peaceful
          </text>
          <text x="96" y="108" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="700">
            <tspan fill="#DB2777">more</tspan> exciting
          </text>
          <text x="96" y="132" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="700">
            <tspan fill="#DB2777">more</tspan> expensive
          </text>
          <text x="96" y="152" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="600">
            Cấm vừa more vừa thêm -er!
          </text>
        </g>

        {/* Footer callout: Irregular */}
        <rect x="24" y="256" width="810" height="42" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
        <text x="430" y="282" textAnchor="middle" fill="#334155" fontSize="13" fontWeight="700">
          ★ Ngoại lệ nhớ nhanh: good → better  ·  bad → worse  ·  many/much → more  ·  little → less  ·  far → farther
        </text>
      </svg>
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
    case 'hospital':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF2F2" />
          <rect x="14" y="14" width="36" height="38" rx="4" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2.5" />
          <rect x="29" y="20" width="6" height="16" rx="1.5" fill="#EF4444" />
          <rect x="24" y="25" width="16" height="6" rx="1.5" fill="#EF4444" />
          <rect x="27" y="41" width="10" height="11" rx="1.5" fill="#FCA5A5" />
        </svg>
      );
    case 'coldwater':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <path d="M18 16 L46 16 L42 52 L22 52 Z" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M20 26 L44 26 L41 50 L23 50 Z" fill="#38BDF8" />
          <rect x="25" y="29" width="7" height="7" rx="1.5" fill="#E0F2FE" transform="rotate(-12 28 32)" />
          <rect x="33" y="34" width="7" height="7" rx="1.5" fill="#E0F2FE" transform="rotate(14 36 37)" />
          <line x1="12" y1="12" x2="18" y2="12" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'heavybox':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <rect x="12" y="20" width="40" height="32" rx="4" fill="#D97706" stroke="#92400E" strokeWidth="2" />
          <line x1="12" y1="30" x2="52" y2="30" stroke="#92400E" strokeWidth="2" />
          <text x="32" y="45" textAnchor="middle" fill="#FFFBEB" fontSize="12" fontWeight="800">
            50kg
          </text>
          <path d="M26 14 L32 8 L38 14" fill="none" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'earache':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF7ED" />
          <path d="M36 16 C22 16 18 28 24 38 C28 45 26 52 34 52 C40 52 44 46 42 40" fill="#FDE68A" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
          <path d="M34 24 C28 24 27 32 32 36" fill="none" stroke="#B45309" strokeWidth="2.2" strokeLinecap="round" />
          <polyline points="44,18 50,22 46,25 52,30" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'knife':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF2F2" />
          <path d="M14 44 L36 22 C44 14 52 16 52 22 L28 46 Z" fill="#CBD5E1" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 48 L22 38 L28 44 L18 54 C15 56 10 51 12 48 Z" fill="#92400E" />
          <circle cx="48" cy="46" r="7" fill="#EF4444" />
          <text x="48" y="50" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">!</text>
        </svg>
      );
    case 'matches':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF7ED" />
          <rect x="28" y="28" width="6" height="26" rx="2" fill="#D97706" transform="rotate(-14 31 41)" />
          <ellipse cx="26" cy="24" rx="5" ry="6" fill="#DC2626" />
          <path d="M26 8 C32 14 34 21 26 24 C18 21 20 14 26 8 Z" fill="#F97316" />
          <path d="M26 14 C29 17 29 21 26 23 C23 21 23 17 26 14 Z" fill="#FACC15" />
          <rect x="38" y="34" width="14" height="18" rx="3" fill="#EF4444" stroke="#991B1B" strokeWidth="1.5" />
          <rect x="41" y="39" width="8" height="8" rx="1" fill="#FEF3C7" />
        </svg>
      );
    case 'stove':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF2F2" />
          <rect x="12" y="26" width="40" height="28" rx="4" fill="#475569" />
          <rect x="17" y="34" width="30" height="15" rx="2" fill="#1E293B" />
          <circle cx="21" cy="30" r="2" fill="#F8FAFC" />
          <circle cx="32" cy="30" r="2" fill="#F8FAFC" />
          <circle cx="43" cy="30" r="2" fill="#F8FAFC" />
          <path d="M22 24 Q24 14 27 24 Q30 12 34 24 Q38 14 41 24" fill="none" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'stairs':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFFBEB" />
          <path d="M12 52 L12 42 L22 42 L22 32 L32 32 L32 22 L42 22 L42 14 L52 14 L52 52 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="2" strokeLinejoin="round" />
          <path d="M16 26 L36 12" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="14,27 22,26 18,20" fill="#DC2626" />
        </svg>
      );
    case 'climb':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <rect x="28" y="34" width="8" height="20" rx="2" fill="#92400E" />
          <circle cx="32" cy="24" r="14" fill="#16A34A" />
          <circle cx="22" cy="28" r="9" fill="#22C55E" />
          <circle cx="42" cy="28" r="9" fill="#15803D" />
          <circle cx="24" cy="22" r="2.5" fill="#EF4444" />
          <circle cx="38" cy="20" r="2.5" fill="#EF4444" />
          <circle cx="35" cy="30" r="2.5" fill="#EF4444" />
        </svg>
      );
    case 'falloff':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF2F2" />
          <circle cx="24" cy="20" r="6" fill="#EF4444" />
          <path d="M26 26 L38 36 L48 32 M32 32 L24 44 M38 36 L44 48" fill="none" stroke="#B91C1C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 52 Q32 48 52 52" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeDasharray="4 3" />
        </svg>
      );
    case 'cutfinger':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF1F2" />
          <rect x="22" y="16" width="20" height="36" rx="10" fill="#FDE68A" stroke="#D97706" strokeWidth="2" />
          <rect x="18" y="29" width="28" height="10" rx="4" fill="#FB7185" stroke="#E11D48" strokeWidth="1.8" />
          <rect x="27" y="31" width="10" height="6" rx="1.5" fill="#FFE4E6" />
        </svg>
      );
    case 'burn':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF7ED" />
          <path d="M32 10 C44 22 48 34 44 44 C41 51 23 51 20 44 C16 34 22 24 27 20 C27 26 30 28 31 24 C32 20 30 14 32 10 Z" fill="#F97316" />
          <path d="M32 28 C38 34 39 43 32 46 C25 43 26 34 32 28 Z" fill="#FACC15" />
        </svg>
      );
    case 'rolloff':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EFF6FF" />
          <rect x="10" y="34" width="34" height="10" rx="3" fill="#3B82F6" />
          <rect x="10" y="26" width="8" height="24" rx="2" fill="#1D4ED8" />
          <rect x="38" y="42" width="6" height="8" rx="1" fill="#1D4ED8" />
          <circle cx="48" cy="24" r="6" fill="#F59E0B" />
          <path d="M40 24 Q50 28 50 42" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeDasharray="3 3" strokeLinecap="round" />
        </svg>
      );
    case 'balcony':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <rect x="10" y="30" width="44" height="4" rx="2" fill="#0369A1" />
          <rect x="10" y="48" width="44" height="6" rx="2" fill="#0284C7" />
          <line x1="16" y1="34" x2="16" y2="48" stroke="#0369A1" strokeWidth="3" />
          <line x1="26" y1="34" x2="26" y2="48" stroke="#0369A1" strokeWidth="3" />
          <line x1="38" y1="34" x2="38" y2="48" stroke="#0369A1" strokeWidth="3" />
          <line x1="48" y1="34" x2="48" y2="48" stroke="#0369A1" strokeWidth="3" />
          <circle cx="32" cy="18" r="6" fill="#FBBF24" />
        </svg>
      );
    case 'brokenarm':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF2F2" />
          <path d="M18 18 L24 38 L46 38" fill="none" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 18 L24 38 L46 38" fill="none" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 14 L38 36" fill="none" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'fishing':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFEFF" />
          <path d="M14 48 Q26 14 46 16" fill="none" stroke="#92400E" strokeWidth="3" strokeLinecap="round" />
          <line x1="46" y1="16" x2="46" y2="38" stroke="#0284C7" strokeWidth="1.8" strokeDasharray="2 2" />
          <ellipse cx="42" cy="43" rx="9" ry="5" fill="#06B6D4" />
          <polygon points="50,43 56,39 56,47" fill="#0891B2" />
          <path d="M10 52 Q20 48 30 52 T54 52" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'camping':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <polygon points="32,14 10,50 54,50" fill="#10B981" stroke="#047857" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="32,28 23,50 41,50" fill="#065F46" />
          <circle cx="48" cy="18" r="5" fill="#FBBF24" />
        </svg>
      );
    case 'skating':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EFF6FF" />
          <path d="M18 16 L30 16 L32 32 L48 34 L48 44 L18 44 Z" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="22" cy="50" r="4.5" fill="#F59E0B" />
          <circle cx="33" cy="50" r="4.5" fill="#F59E0B" />
          <circle cx="44" cy="50" r="4.5" fill="#F59E0B" />
        </svg>
      );
    case 'karate':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#F8FAFC" />
          <path d="M20 14 L44 14 L52 28 L44 34 L40 28 L40 50 L24 50 L24 28 L20 34 L12 28 Z" fill="#FFFFFF" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
          <rect x="23" y="34" width="18" height="5" rx="1.5" fill="#0F172A" />
          <path d="M32 39 L28 49 M34 39 L38 49" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'shopping':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FDF2F8" />
          <path d="M16 24 L48 24 L45 52 L19 52 Z" fill="#EC4899" stroke="#BE185D" strokeWidth="2" strokeLinejoin="round" />
          <path d="M24 24 C24 14 40 14 40 24" fill="none" stroke="#BE185D" strokeWidth="3" strokeLinecap="round" />
          <circle cx="32" cy="38" r="5" fill="#FCE7F3" />
        </svg>
      );
    case 'cinema':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EEF2FF" />
          <rect x="12" y="22" width="40" height="30" rx="4" fill="#312E81" />
          <path d="M12 22 L52 22 L50 14 L10 14 Z" fill="#4F46E5" />
          <line x1="20" y1="14" x2="24" y2="22" stroke="#FFFFFF" strokeWidth="2.5" />
          <line x1="32" y1="14" x2="36" y2="22" stroke="#FFFFFF" strokeWidth="2.5" />
          <line x1="44" y1="14" x2="48" y2="22" stroke="#FFFFFF" strokeWidth="2.5" />
          <polygon points="28,31 40,37 28,43" fill="#FACC15" />
        </svg>
      );
    case 'surfing':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <rect x="10" y="14" width="44" height="30" rx="5" fill="#0F172A" />
          <rect x="14" y="18" width="36" height="22" rx="2" fill="#38BDF8" />
          <circle cx="32" cy="29" r="7" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="25" y1="29" x2="39" y2="29" stroke="#FFFFFF" strokeWidth="1.5" />
          <ellipse cx="32" cy="29" rx="3.5" ry="7" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
          <rect x="22" y="46" width="20" height="4" rx="2" fill="#64748B" />
        </svg>
      );
    case 'cleaning':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <line x1="20" y1="12" x2="38" y2="38" stroke="#92400E" strokeWidth="4" strokeLinecap="round" />
          <path d="M30 36 L48 34 L52 50 L28 52 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="18" cy="36" r="3" fill="#34D399" />
          <circle cx="48" cy="20" r="3.5" fill="#38BDF8" />
        </svg>
      );
    case 'watermelon':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <path d="M10 38 A22 22 0 0 0 54 38 Z" fill="#16A34A" />
          <path d="M15 38 A17 17 0 0 0 49 38 Z" fill="#EF4444" />
          <circle cx="25" cy="43" r="1.8" fill="#0F172A" />
          <circle cx="32" cy="46" r="1.8" fill="#0F172A" />
          <circle cx="39" cy="43" r="1.8" fill="#0F172A" />
          <circle cx="32" cy="41" r="1.8" fill="#0F172A" />
        </svg>
      );
    case 'seeds':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFFBEB" />
          <ellipse cx="22" cy="36" rx="5" ry="9" fill="#1E293B" transform="rotate(-18 22 36)" />
          <ellipse cx="34" cy="30" rx="5" ry="9" fill="#0F172A" transform="rotate(10 34 30)" />
          <ellipse cx="44" cy="40" rx="5" ry="9" fill="#1E293B" transform="rotate(24 44 40)" />
          <path d="M32 18 Q36 10 44 12 Q40 20 32 18 Z" fill="#22C55E" />
        </svg>
      );
    case 'princess':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FDF2F8" />
          <polygon points="14,44 18,22 27,32 32,16 37,32 46,22 50,44" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" strokeLinejoin="round" />
          <rect x="14" y="44" width="36" height="6" rx="3" fill="#EAB308" />
          <circle cx="32" cy="36" r="3" fill="#EC4899" />
          <circle cx="22" cy="38" r="2.2" fill="#38BDF8" />
          <circle cx="42" cy="38" r="2.2" fill="#38BDF8" />
        </svg>
      );
    case 'prince':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EFF6FF" />
          <polygon points="16,28 20,14 28,22 32,12 36,22 44,14 48,28" fill="#F59E0B" stroke="#B45309" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="32" cy="38" r="12" fill="#FDE68A" />
          <circle cx="28" cy="36" r="1.8" fill="#1E293B" />
          <circle cx="36" cy="36" r="1.8" fill="#1E293B" />
          <path d="M28 42 Q32 45 36 42" fill="none" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18 54 C20 47 44 47 46 54" fill="#2563EB" />
        </svg>
      );
    case 'castle':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EEF2FF" />
          <rect x="14" y="26" width="10" height="28" fill="#6366F1" />
          <rect x="40" y="26" width="10" height="28" fill="#6366F1" />
          <rect x="22" y="22" width="20" height="32" fill="#818CF8" />
          <polygon points="19,14 12,26 26,26" fill="#EC4899" />
          <polygon points="45,14 38,26 52,26" fill="#EC4899" />
          <polygon points="32,10 23,22 41,22" fill="#F43F5E" />
          <path d="M27 54 V42 A5 5 0 0 1 37 42 V54 Z" fill="#1E1B4B" />
        </svg>
      );
    case 'starfruit':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFFBEB" />
          <polygon points="32,10 38,24 54,25 42,35 45,51 32,43 19,51 22,35 10,25 26,24" fill="#FACC15" stroke="#D97706" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="32" cy="33" r="4" fill="#FEF08A" />
        </svg>
      );
    case 'fox':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF7ED" />
          <polygon points="14,16 26,24 16,32" fill="#EA580C" />
          <polygon points="50,16 38,24 48,32" fill="#EA580C" />
          <polygon points="16,28 48,28 32,52" fill="#F97316" />
          <polygon points="22,36 42,36 32,52" fill="#FFF7ED" />
          <circle cx="26" cy="32" r="2" fill="#0F172A" />
          <circle cx="38" cy="32" r="2" fill="#0F172A" />
          <circle cx="32" cy="49" r="3" fill="#0F172A" />
        </svg>
      );
    case 'tortoise':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <path d="M14 40 C14 22 44 22 44 40 Z" fill="#15803D" stroke="#065F46" strokeWidth="2" />
          <path d="M22 30 L36 30 M29 24 L29 40" stroke="#86EFAC" strokeWidth="1.8" />
          <circle cx="50" cy="34" r="6" fill="#4ADE80" />
          <circle cx="52" cy="33" r="1.4" fill="#0F172A" />
          <rect x="18" y="40" width="6" height="8" rx="2" fill="#4ADE80" />
          <rect x="34" y="40" width="6" height="8" rx="2" fill="#4ADE80" />
        </svg>
      );
    case 'hare':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <ellipse cx="24" cy="18" rx="4.5" ry="12" fill="#FDE68A" stroke="#D97706" strokeWidth="1.8" />
          <ellipse cx="40" cy="18" rx="4.5" ry="12" fill="#FDE68A" stroke="#D97706" strokeWidth="1.8" />
          <circle cx="32" cy="38" r="14" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
          <circle cx="27" cy="36" r="2" fill="#0F172A" />
          <circle cx="37" cy="36" r="2" fill="#0F172A" />
          <polygon points="32,40 29,43 35,43" fill="#FB7185" />
        </svg>
      );
    case 'finishline':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#F1F5F9" />
          <line x1="16" y1="12" x2="16" y2="54" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
          <rect x="18" y="14" width="32" height="22" rx="3" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" />
          <rect x="18" y="14" width="8" height="11" fill="#0F172A" />
          <rect x="34" y="14" width="8" height="11" fill="#0F172A" />
          <rect x="26" y="25" width="8" height="11" fill="#0F172A" />
          <rect x="42" y="25" width="8" height="11" fill="#0F172A" />
        </svg>
      );
    case 'pilot':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <path d="M16 24 Q32 12 48 24 Z" fill="#1E3A8A" />
          <rect x="18" y="22" width="28" height="5" rx="2" fill="#FACC15" />
          <circle cx="32" cy="36" r="10" fill="#FDE68A" />
          <rect x="23" y="32" width="7" height="5" rx="2" fill="#0F172A" />
          <rect x="34" y="32" width="7" height="5" rx="2" fill="#0F172A" />
          <path d="M18 54 C20 46 44 46 46 54" fill="#1E40AF" />
        </svg>
      );
    case 'architect':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EFF6FF" />
          <rect x="12" y="14" width="34" height="36" rx="4" fill="#2563EB" />
          <rect x="18" y="24" width="12" height="20" fill="none" stroke="#BFDBFE" strokeWidth="2" />
          <polygon points="16,24 24,18 32,24" fill="none" stroke="#BFDBFE" strokeWidth="2" />
          <rect x="33" y="20" width="8" height="24" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M38 44 L52 30 L56 34 L42 48 Z" fill="#F59E0B" />
        </svg>
      );
    case 'nurse':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF1F2" />
          <rect x="20" y="12" width="24" height="12" rx="3" fill="#FFFFFF" stroke="#E11D48" strokeWidth="2" />
          <rect x="30" y="14" width="4" height="8" fill="#E11D48" />
          <rect x="28" y="16" width="8" height="4" fill="#E11D48" />
          <circle cx="32" cy="34" r="10" fill="#FDE68A" />
          <circle cx="28.5" cy="33" r="1.6" fill="#1E293B" />
          <circle cx="35.5" cy="33" r="1.6" fill="#1E293B" />
          <path d="M28 38 Q32 41 36 38" fill="none" stroke="#1E293B" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M18 54 C20 45 44 45 46 54" fill="#FB7185" />
        </svg>
      );
    case 'policeman':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EFF6FF" />
          <path d="M18 24 L22 14 L42 14 L46 24 Z" fill="#1D4ED8" />
          <circle cx="32" cy="19" r="3" fill="#FACC15" />
          <circle cx="32" cy="34" r="10" fill="#FDE68A" />
          <circle cx="28.5" cy="33" r="1.6" fill="#0F172A" />
          <circle cx="35.5" cy="33" r="1.6" fill="#0F172A" />
          <path d="M18 54 C20 45 44 45 46 54" fill="#2563EB" />
          <circle cx="39" cy="50" r="2.5" fill="#FACC15" />
        </svg>
      );
    case 'farmer':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <ellipse cx="32" cy="24" rx="20" ry="5" fill="#F59E0B" />
          <path d="M22 24 C22 14 42 14 42 24 Z" fill="#D97706" />
          <circle cx="32" cy="35" r="9" fill="#FDE68A" />
          <circle cx="29" cy="34" r="1.5" fill="#0F172A" />
          <circle cx="35" cy="34" r="1.5" fill="#0F172A" />
          <path d="M18 54 C20 45 44 45 46 54" fill="#16A34A" />
        </svg>
      );
    case 'dancer':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FDF2F8" />
          <circle cx="32" cy="18" r="6" fill="#EC4899" />
          <path d="M32 24 L22 40 L42 40 Z" fill="#F472B6" />
          <path d="M16 26 Q24 28 32 26 Q40 24 48 18" fill="none" stroke="#DB2777" strokeWidth="3" strokeLinecap="round" />
          <line x1="28" y1="40" x2="24" y2="54" stroke="#DB2777" strokeWidth="3" strokeLinecap="round" />
          <line x1="36" y1="40" x2="42" y2="52" stroke="#DB2777" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'astronaut':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#0F172A" />
          <circle cx="14" cy="16" r="1.8" fill="#FACC15" />
          <circle cx="50" cy="18" r="2" fill="#38BDF8" />
          <circle cx="32" cy="28" r="13" fill="#F8FAFC" />
          <rect x="23" y="23" width="18" height="10" rx="5" fill="#0284C7" />
          <path d="M18 54 C20 42 44 42 46 54" fill="#E2E8F0" />
          <rect x="27" y="45" width="10" height="6" rx="2" fill="#F97316" />
        </svg>
      );
    case 'teacher':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <rect x="10" y="14" width="44" height="28" rx="4" fill="#047857" stroke="#92400E" strokeWidth="3" />
          <text x="32" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">ABC</text>
          <circle cx="24" cy="48" r="5" fill="#FDE68A" />
          <line x1="30" y1="48" x2="46" y2="34" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'classroom':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <rect x="12" y="12" width="40" height="20" rx="3" fill="#15803D" stroke="#78350F" strokeWidth="2.5" />
          <line x1="18" y1="20" x2="34" y2="20" stroke="#DCFCE7" strokeWidth="2" strokeLinecap="round" />
          <rect x="14" y="38" width="16" height="12" rx="2" fill="#D97706" />
          <rect x="34" y="38" width="16" height="12" rx="2" fill="#D97706" />
        </svg>
      );
    case 'playground':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <rect x="8" y="44" width="48" height="10" rx="4" fill="#22C55E" />
          <line x1="18" y1="20" x2="18" y2="46" stroke="#EA580C" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M18 22 Q32 24 44 46" fill="none" stroke="#F59E0B" strokeWidth="4.5" strokeLinecap="round" />
          <circle cx="48" cy="18" r="5" fill="#FACC15" />
        </svg>
      );
    case 'postoffice':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFFBEB" />
          <rect x="10" y="18" width="44" height="30" rx="5" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
          <path d="M12 20 L32 35 L52 20" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinejoin="round" />
          <text x="32" y="44" textAnchor="middle" fill="#FFFBEB" fontSize="8" fontWeight="800">POST</text>
        </svg>
      );
    case 'busstop':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <line x1="22" y1="14" x2="22" y2="54" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
          <rect x="14" y="12" width="16" height="14" rx="3" fill="#0284C7" />
          <text x="22" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800">BUS</text>
          <rect x="30" y="28" width="24" height="18" rx="4" fill="#F59E0B" />
          <rect x="34" y="32" width="16" height="6" rx="1.5" fill="#FEF3C7" />
          <circle cx="35" cy="48" r="3" fill="#1E293B" />
          <circle cx="49" cy="48" r="3" fill="#1E293B" />
        </svg>
      );
    case 'pharmacy':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <rect x="14" y="14" width="36" height="36" rx="8" fill="#10B981" />
          <rect x="28" y="21" width="8" height="22" rx="2" fill="#FFFFFF" />
          <rect x="21" y="28" width="22" height="8" rx="2" fill="#FFFFFF" />
        </svg>
      );
    case 'museum':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EFF6FF" />
          <polygon points="32,12 10,24 54,24" fill="#1D4ED8" />
          <rect x="16" y="26" width="5" height="20" fill="#60A5FA" />
          <rect x="29.5" y="26" width="5" height="20" fill="#60A5FA" />
          <rect x="43" y="26" width="5" height="20" fill="#60A5FA" />
          <rect x="10" y="46" width="44" height="6" rx="2" fill="#1E3A8A" />
        </svg>
      );
    case 'theatre':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF1F2" />
          <rect x="10" y="16" width="44" height="34" rx="5" fill="#BE123C" />
          <rect x="16" y="22" width="32" height="22" rx="2" fill="#FFF1F2" />
          <circle cx="26" cy="32" r="5" fill="#FACC15" />
          <circle cx="38" cy="34" r="5" fill="#38BDF8" />
          <path d="M10 16 Q20 28 16 44 M54 16 Q44 28 48 44" fill="none" stroke="#9F1239" strokeWidth="4" />
        </svg>
      );
    case 'bakery':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF7ED" />
          <path d="M14 40 C14 24 50 24 50 40 L48 48 L16 48 Z" fill="#D97706" stroke="#92400E" strokeWidth="2" />
          <path d="M24 31 L27 37 M32 29 L34 36 M40 31 L41 37" stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'mapcorner':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <rect x="10" y="26" width="44" height="12" fill="#475569" />
          <rect x="26" y="10" width="12" height="44" fill="#475569" />
          <rect x="40" y="12" width="14" height="12" rx="3" fill="#EF4444" />
          <circle cx="47" cy="18" r="2.5" fill="#FFFFFF" />
        </svg>
      );
    case 'fastspeed':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFFBEB" />
          <polygon points="34,10 18,34 31,34 28,54 46,28 33,28" fill="#F59E0B" stroke="#D97706" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    /* ===== UNIT 17–19 ICONS (PAGES 126–146) ===== */
    case 'chocolate':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <rect x="16" y="10" width="32" height="44" rx="4" fill="#78350F" stroke="#451A03" strokeWidth="2" />
          <rect x="20" y="14" width="10" height="8" rx="1.5" fill="#92400E" />
          <rect x="34" y="14" width="10" height="8" rx="1.5" fill="#92400E" />
          <rect x="20" y="25" width="10" height="8" rx="1.5" fill="#92400E" />
          <rect x="34" y="25" width="10" height="8" rx="1.5" fill="#92400E" />
          <path d="M15 36 L49 36 L49 52 C49 54 47 55 45 55 L19 55 C17 55 15 54 15 52 Z" fill="#EF4444" />
          <path d="M15 36 L22 31 L30 36 L38 31 L49 36 Z" fill="#FDE68A" />
        </svg>
      );
    case 'sandwich':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFFBEB" />
          <polygon points="12,38 52,38 32,16" fill="#FCD34D" stroke="#B45309" strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="13" y="37" width="38" height="4" rx="2" fill="#22C55E" />
          <rect x="14" y="41" width="36" height="4" rx="2" fill="#EF4444" />
          <rect x="12" y="45" width="40" height="6" rx="2.5" fill="#D97706" stroke="#92400E" strokeWidth="2" />
        </svg>
      );
    case 'milk':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <polygon points="22,12 42,12 46,22 18,22" fill="#38BDF8" stroke="#0369A1" strokeWidth="2" strokeLinejoin="round" />
          <rect x="18" y="22" width="28" height="32" rx="3" fill="#FFFFFF" stroke="#0369A1" strokeWidth="2" />
          <rect x="22" y="30" width="20" height="12" rx="2" fill="#0284C7" />
          <circle cx="32" cy="36" r="3" fill="#FFFFFF" />
        </svg>
      );
    case 'lemonade':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF9C3" />
          <polygon points="20,20 44,20 40,54 24,54" fill="#FDE047" stroke="#CA8A04" strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="36" y1="10" x2="32" y2="30" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
          <circle cx="43" cy="20" r="6" fill="#FACC15" stroke="#A16207" strokeWidth="1.8" />
          <path d="M23 30 Q32 27 41 30" fill="none" stroke="#FEF08A" strokeWidth="2.5" />
        </svg>
      );
    case 'bowl':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF7ED" />
          <ellipse cx="32" cy="30" rx="20" ry="7" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
          <path d="M12 30 C12 46 21 52 32 52 C43 52 52 46 52 30 Z" fill="#0EA5E9" stroke="#0369A1" strokeWidth="2" />
          <line x1="26" y1="12" x2="46" y2="27" stroke="#92400E" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="32" y1="10" x2="49" y2="25" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'bottle':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <rect x="27" y="9" width="10" height="6" rx="2" fill="#0284C7" />
          <path d="M27 15 L37 15 L41 24 L41 52 C41 54 39 56 37 56 L27 56 C25 56 23 54 23 52 L23 24 Z" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2.2" />
          <rect x="24" y="31" width="16" height="12" fill="#0EA5E9" />
          <path d="M27 37 Q32 34 37 37" fill="none" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
      );
    case 'biscuit':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <circle cx="32" cy="32" r="19" fill="#D97706" stroke="#92400E" strokeWidth="2.5" />
          <circle cx="25" cy="25" r="2.8" fill="#451A03" />
          <circle cx="38" cy="24" r="2.4" fill="#451A03" />
          <circle cx="31" cy="34" r="3" fill="#451A03" />
          <circle cx="24" cy="40" r="2.3" fill="#451A03" />
          <circle cx="40" cy="38" r="2.8" fill="#451A03" />
        </svg>
      );
    case 'cake':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FCE7F3" />
          <rect x="14" y="34" width="36" height="18" rx="4" fill="#F9A8D4" stroke="#BE185D" strokeWidth="2" />
          <path d="M14 38 Q20 43 26 38 Q32 43 38 38 Q44 43 50 38" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
          <rect x="30" y="20" width="4" height="14" rx="1" fill="#38BDF8" />
          <path d="M32 11 C35 15 35 19 32 20 C29 19 29 15 32 11 Z" fill="#F59E0B" />
        </svg>
      );
    case 'sausage':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF2F2" />
          <path d="M18 44 C18 24 38 14 48 22 C52 25 50 32 45 33 C37 35 30 40 28 48 C26 53 18 52 18 44 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
          <path d="M27 32 L32 35 M34 26 L38 30" stroke="#FECACA" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'spring':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <line x1="32" y1="34" x2="32" y2="54" stroke="#16A34A" strokeWidth="3.5" strokeLinecap="round" />
          <ellipse cx="24" cy="44" rx="7" ry="3.5" transform="rotate(-25 24 44)" fill="#22C55E" />
          <circle cx="32" cy="18" r="6" fill="#F472B6" />
          <circle cx="42" cy="25" r="6" fill="#F472B6" />
          <circle cx="38" cy="35" r="6" fill="#F472B6" />
          <circle cx="26" cy="35" r="6" fill="#F472B6" />
          <circle cx="22" cy="25" r="6" fill="#F472B6" />
          <circle cx="32" cy="27" r="6" fill="#FACC15" />
        </svg>
      );
    case 'autumn':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF7ED" />
          <path d="M32 11 L37 22 L49 18 L43 30 L52 36 L39 40 L41 47 L32 43 L23 47 L25 40 L12 36 L21 30 L15 18 L27 22 Z" fill="#EA580C" stroke="#9A3412" strokeWidth="2" strokeLinejoin="round" />
          <line x1="32" y1="43" x2="32" y2="54" stroke="#9A3412" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'windy':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFEFF" />
          <path d="M12 24 H38 C44 24 46 16 40 14 C36 13 34 16 35 19" fill="none" stroke="#0284C7" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M10 34 H48 C54 34 55 26 49 25" fill="none" stroke="#0EA5E9" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M16 44 H38 C44 44 45 52 39 53 C35 54 33 51 34 48" fill="none" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );
    case 'foggy':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#F1F5F9" />
          <path d="M18 30 C13 30 10 26 11 22 C12 18 16 16 20 17 C22 12 29 10 35 12 C40 14 42 18 42 20 C47 20 51 23 51 27 C51 29 49 30 46 30 Z" fill="#CBD5E1" stroke="#64748B" strokeWidth="2" />
          <line x1="12" y1="38" x2="52" y2="38" stroke="#94A3B8" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="16" y1="46" x2="48" y2="46" stroke="#64748B" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="20" y1="53" x2="44" y2="53" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'snowy':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EFF6FF" />
          <g stroke="#2563EB" strokeWidth="3" strokeLinecap="round">
            <line x1="32" y1="12" x2="32" y2="52" />
            <line x1="14" y1="22" x2="50" y2="42" />
            <line x1="50" y1="22" x2="14" y2="42" />
          </g>
          <circle cx="32" cy="32" r="5" fill="#93C5FD" stroke="#2563EB" strokeWidth="2" />
        </svg>
      );
    case 'cloudy':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <path d="M18 44 C12 44 9 39 10 34 C11 29 16 27 20 28 C23 20 32 17 39 21 C43 23 45 27 45 29 C51 29 55 33 55 38 C55 42 51 44 47 44 Z" fill="#94A3B8" stroke="#475569" strokeWidth="2.2" />
          <path d="M22 48 C18 48 16 45 17 42 C18 39 21 38 24 39 C26 34 32 33 36 35 C39 36 40 39 40 40 C44 40 46 42 46 45 C46 47 44 48 41 48 Z" fill="#FFFFFF" stroke="#64748B" strokeWidth="1.8" />
        </svg>
      );
    case 'stormy':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E2E8F0" />
          <path d="M17 34 C12 34 9 30 10 25 C11 21 15 19 19 20 C22 13 31 11 38 14 C42 16 44 19 44 22 C49 22 53 25 53 29 C53 33 49 34 45 34 Z" fill="#475569" stroke="#1E293B" strokeWidth="2" />
          <polygon points="34,34 24,46 31,46 28,56 41,42 34,42" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case 'rainy':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EFF6FF" />
          <path d="M17 35 C12 35 9 31 10 26 C11 22 15 20 19 21 C22 14 31 12 38 15 C42 17 44 20 44 23 C49 23 53 26 53 30 C53 34 49 35 45 35 Z" fill="#64748B" stroke="#334155" strokeWidth="2" />
          <line x1="21" y1="41" x2="17" y2="51" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
          <line x1="32" y1="41" x2="28" y2="51" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
          <line x1="43" y1="41" x2="39" y2="51" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'forecast':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <rect x="10" y="14" width="44" height="30" rx="5" fill="#0F172A" stroke="#334155" strokeWidth="2" />
          <circle cx="24" cy="27" r="6" fill="#FACC15" />
          <path d="M27 35 C24 35 23 32 24 30 C25 28 28 28 30 28 C32 25 37 24 41 26 C44 27 46 30 45 33 C45 34 43 35 41 35 Z" fill="#FFFFFF" />
          <rect x="26" y="44" width="12" height="5" fill="#475569" />
          <rect x="19" y="49" width="26" height="4" rx="2" fill="#334155" />
        </svg>
      );
    case 'pagoda':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <line x1="32" y1="8" x2="32" y2="15" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="32,13 18,22 46,22" fill="#DC2626" />
          <rect x="23" y="22" width="18" height="8" fill="#FDE68A" stroke="#B45309" strokeWidth="1.5" />
          <polygon points="14,34 50,34 44,29 20,29" fill="#DC2626" />
          <rect x="20" y="34" width="24" height="9" fill="#FDE68A" stroke="#B45309" strokeWidth="1.5" />
          <polygon points="10,47 54,47 47,42 17,42" fill="#B91C1C" />
          <rect x="18" y="47" width="28" height="8" fill="#92400E" />
          <rect x="29" y="49" width="6" height="6" fill="#FEF3C7" />
        </svg>
      );
    case 'bridge':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <rect x="8" y="44" width="48" height="12" rx="4" fill="#38BDF8" />
          <rect x="8" y="34" width="48" height="5" fill="#DC2626" />
          <path d="M12 34 C18 16 26 16 32 34 C38 16 46 16 52 34" fill="none" stroke="#B91C1C" strokeWidth="3.2" />
          <line x1="22" y1="21" x2="22" y2="34" stroke="#B91C1C" strokeWidth="2" />
          <line x1="42" y1="21" x2="42" y2="34" stroke="#B91C1C" strokeWidth="2" />
          <rect x="14" y="39" width="4" height="9" fill="#7F1D1D" />
          <rect x="46" y="39" width="4" height="9" fill="#7F1D1D" />
        </svg>
      );
    case 'market':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF7ED" />
          <polygon points="12,26 52,26 48,14 16,14" fill="#EA580C" />
          <path d="M16 14 L18 26 M26 14 L26 26 M38 14 L38 26 M48 14 L46 26" stroke="#FEF3C7" strokeWidth="3" />
          <rect x="16" y="26" width="32" height="26" rx="2" fill="#FFFFFF" stroke="#9A3412" strokeWidth="2" />
          <rect x="20" y="36" width="24" height="6" rx="2" fill="#22C55E" />
          <circle cx="25" cy="34" r="3" fill="#EF4444" />
          <circle cx="32" cy="34" r="3" fill="#FACC15" />
          <circle cx="39" cy="34" r="3" fill="#F97316" />
        </svg>
      );
    case 'temple':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF2F2" />
          <polygon points="32,12 10,27 54,27" fill="#B91C1C" />
          <rect x="16" y="27" width="32" height="22" fill="#FEF3C7" stroke="#991B1B" strokeWidth="2" />
          <rect x="20" y="27" width="4" height="22" fill="#DC2626" />
          <rect x="40" y="27" width="4" height="22" fill="#DC2626" />
          <rect x="28" y="35" width="8" height="14" rx="1" fill="#7F1D1D" />
          <rect x="12" y="49" width="40" height="5" rx="2" fill="#78350F" />
        </svg>
      );
    case 'statue':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#F1F5F9" />
          <circle cx="32" cy="18" r="6" fill="#64748B" />
          <path d="M23 39 L26 25 L38 25 L41 39 Z" fill="#475569" />
          <rect x="20" y="39" width="24" height="6" rx="1.5" fill="#94A3B8" />
          <rect x="16" y="45" width="32" height="9" rx="2" fill="#64748B" />
        </svg>
      );
    case 'island':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <circle cx="48" cy="16" r="6" fill="#FACC15" />
          <path d="M8 46 Q20 42 32 46 T56 46 L56 56 L8 56 Z" fill="#0EA5E9" />
          <path d="M16 46 C19 36 45 36 48 46 Z" fill="#FCD34D" stroke="#D97706" strokeWidth="1.5" />
          <path d="M31 39 Q32 27 36 22" fill="none" stroke="#92400E" strokeWidth="3" strokeLinecap="round" />
          <path d="M36 22 Q26 19 22 26 M36 22 Q45 19 49 26 M36 22 Q36 14 29 14" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'park':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <rect x="19" y="32" width="4" height="16" fill="#92400E" />
          <circle cx="21" cy="24" r="10" fill="#22C55E" />
          <rect x="33" y="37" width="20" height="4" rx="1.5" fill="#D97706" />
          <rect x="33" y="43" width="20" height="3" rx="1" fill="#B45309" />
          <line x1="36" y1="41" x2="36" y2="51" stroke="#78350F" strokeWidth="2.5" />
          <line x1="50" y1="41" x2="50" y2="51" stroke="#78350F" strokeWidth="2.5" />
          <rect x="8" y="49" width="48" height="6" rx="3" fill="#16A34A" />
        </svg>
      );
    /* ===== UNIT 19 PART 2 & UNIT 20 ICONS (PAGES 147–167) ===== */
    case 'play':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF1F2" />
          <path d="M12 18 C12 14 28 14 28 18 L28 32 C28 39 20 43 20 43 C20 43 12 39 12 32 Z" fill="#FACC15" stroke="#B45309" strokeWidth="1.8" />
          <circle cx="17" cy="24" r="1.8" fill="#78350F" />
          <circle cx="23" cy="24" r="1.8" fill="#78350F" />
          <path d="M16 31 Q20 36 24 31" fill="none" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
          <path d="M36 22 C36 18 52 18 52 22 L52 36 C52 43 44 47 44 47 C44 47 36 43 36 36 Z" fill="#E11D48" stroke="#881337" strokeWidth="1.8" />
          <circle cx="41" cy="28" r="1.8" fill="#FFFFFF" />
          <circle cx="47" cy="28" r="1.8" fill="#FFFFFF" />
          <path d="M40 37 Q44 33 48 37" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'food':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF7ED" />
          <ellipse cx="32" cy="42" rx="22" ry="9" fill="#FFFFFF" stroke="#EA580C" strokeWidth="2.5" />
          <path d="M16 40 C16 26 48 26 48 40 Z" fill="#F97316" />
          <circle cx="26" cy="34" r="3" fill="#FEF08A" />
          <circle cx="35" cy="32" r="3.2" fill="#22C55E" />
          <circle cx="41" cy="36" r="2.5" fill="#EF4444" />
          <path d="M24 22 Q22 17 25 14 M32 20 Q30 15 33 12 M40 22 Q38 17 41 14" fill="none" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'villager':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <polygon points="32,8 14,22 50,22" fill="#F59E0B" stroke="#B45309" strokeWidth="1.8" />
          <circle cx="32" cy="28" r="7" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" />
          <circle cx="29.5" cy="27" r="1.2" fill="#1E293B" />
          <circle cx="34.5" cy="27" r="1.2" fill="#1E293B" />
          <path d="M29 31 Q32 33 35 31" fill="none" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M19 52 C19 40 45 40 45 52 Z" fill="#10B981" />
        </svg>
      );
    case 'usa':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EFF6FF" />
          <rect x="10" y="16" width="44" height="32" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          <rect x="10" y="16" width="44" height="4.5" fill="#DC2626" />
          <rect x="10" y="25" width="44" height="4.5" fill="#DC2626" />
          <rect x="10" y="34" width="44" height="4.5" fill="#DC2626" />
          <rect x="10" y="43.5" width="44" height="4.5" fill="#DC2626" />
          <rect x="10" y="16" width="20" height="17" fill="#1D4ED8" />
          <circle cx="15" cy="21" r="1.4" fill="#FFFFFF" />
          <circle cx="20" cy="21" r="1.4" fill="#FFFFFF" />
          <circle cx="25" cy="21" r="1.4" fill="#FFFFFF" />
          <circle cx="17.5" cy="27" r="1.4" fill="#FFFFFF" />
          <circle cx="22.5" cy="27" r="1.4" fill="#FFFFFF" />
        </svg>
      );
    case 'farm':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <polygon points="32,14 14,28 50,28" fill="#B91C1C" />
          <rect x="18" y="28" width="28" height="20" fill="#EF4444" />
          <rect x="27" y="34" width="10" height="14" fill="#FEF2F2" />
          <line x1="27" y1="34" x2="37" y2="48" stroke="#B91C1C" strokeWidth="1.5" />
          <line x1="37" y1="34" x2="27" y2="48" stroke="#B91C1C" strokeWidth="1.5" />
          <rect x="8" y="48" width="48" height="7" rx="3" fill="#22C55E" />
        </svg>
      );
    case 'aunt':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FDF2F8" />
          <circle cx="32" cy="24" r="12" fill="#78350F" />
          <circle cx="32" cy="26" r="9" fill="#FDE68A" />
          <circle cx="29" cy="25" r="1.3" fill="#1E293B" />
          <circle cx="35" cy="25" r="1.3" fill="#1E293B" />
          <path d="M29 30 Q32 33 35 30" fill="none" stroke="#BE185D" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M18 54 C18 40 46 40 46 54 Z" fill="#EC4899" />
          <circle cx="43" cy="20" r="3" fill="#F472B6" />
        </svg>
      );
    case 'traffic':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF2F2" />
          <rect x="10" y="34" width="22" height="12" rx="4" fill="#EF4444" />
          <circle cx="15" cy="47" r="3" fill="#1E293B" />
          <circle cx="27" cy="47" r="3" fill="#1E293B" />
          <rect x="34" y="30" width="22" height="16" rx="4" fill="#2563EB" />
          <circle cx="40" cy="47" r="3" fill="#1E293B" />
          <circle cx="51" cy="47" r="3" fill="#1E293B" />
          <rect x="26" y="10" width="12" height="22" rx="3" fill="#334155" />
          <circle cx="32" cy="15" r="2.2" fill="#EF4444" />
          <circle cx="32" cy="21" r="2.2" fill="#FACC15" />
          <circle cx="32" cy="27" r="2.2" fill="#22C55E" />
        </svg>
      );
    case 'sheep':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFDF5" />
          <circle cx="26" cy="34" r="9" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
          <circle cx="36" cy="31" r="9" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
          <circle cx="42" cy="36" r="8" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
          <circle cx="34" cy="39" r="8" fill="#FFFFFF" />
          <ellipse cx="19" cy="33" rx="6" ry="7" fill="#334155" />
          <circle cx="17" cy="31" r="1.3" fill="#FFFFFF" />
          <line x1="26" y1="45" x2="26" y2="53" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          <line x1="40" y1="45" x2="40" y2="53" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'bank':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EFF6FF" />
          <polygon points="32,12 10,24 54,24" fill="#0F766E" />
          <rect x="16" y="26" width="5" height="19" fill="#14B8A6" />
          <rect x="29.5" y="26" width="5" height="19" fill="#14B8A6" />
          <rect x="43" y="26" width="5" height="19" fill="#14B8A6" />
          <rect x="10" y="45" width="44" height="6" rx="2" fill="#115E59" />
          <text x="32" y="21.5" textAnchor="middle" fill="#FEF08A" fontSize="9" fontWeight="900">$</text>
        </svg>
      );
    case 'grandparents':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFFBEB" />
          <circle cx="22" cy="24" r="8" fill="#CBD5E1" />
          <circle cx="22" cy="26" r="6.5" fill="#FDE68A" />
          <path d="M12 52 C12 40 32 40 32 52 Z" fill="#0284C7" />
          <circle cx="42" cy="24" r="8" fill="#E2E8F0" />
          <circle cx="42" cy="26" r="6.5" fill="#FDE68A" />
          <path d="M32 52 C32 40 52 40 52 52 Z" fill="#F43F5E" />
          <circle cx="20" cy="26" r="1.8" fill="none" stroke="#334155" strokeWidth="1.2" />
          <circle cx="24" cy="26" r="1.8" fill="none" stroke="#334155" strokeWidth="1.2" />
        </svg>
      );
    case 'km':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#F0FDF4" />
          <rect x="10" y="16" width="44" height="32" rx="7" fill="#16A34A" stroke="#15803D" strokeWidth="2" />
          <text x="32" y="34" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="900">50 km</text>
          <path d="M18 42 L46 42" stroke="#BBF7D0" strokeWidth="2.5" strokeDasharray="4 3" />
        </svg>
      );
    case 'goods':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FEF3C7" />
          <path d="M14 26 L50 26 L46 50 L18 50 Z" fill="#D97706" stroke="#92400E" strokeWidth="2" />
          <path d="M22 26 C22 15 42 15 42 26" fill="none" stroke="#92400E" strokeWidth="2.5" />
          <circle cx="26" cy="23" r="4" fill="#EF4444" />
          <circle cx="35" cy="22" r="4.5" fill="#22C55E" />
          <circle cx="42" cy="24" r="3.5" fill="#FACC15" />
        </svg>
      );
    case 'paris':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#EFF6FF" />
          <path d="M32 9 L28 32 L18 54 L25 54 Q32 42 39 54 L46 54 L36 32 Z" fill="#92400E" />
          <line x1="25" y1="30" x2="39" y2="30" stroke="#F59E0B" strokeWidth="2.5" />
          <line x1="22" y1="40" x2="42" y2="40" stroke="#F59E0B" strokeWidth="2.5" />
        </svg>
      );
    case 'singapore':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#E0F2FE" />
          <path d="M20 48 C18 32 22 18 31 18 C37 18 40 23 39 28 L35 30 C35 37 36 44 38 48 Z" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
          <path d="M39 27 Q49 27 52 44" fill="none" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 3" />
          <rect x="8" y="48" width="48" height="8" rx="3" fill="#0EA5E9" />
        </svg>
      );
    case 'bangkok':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFFBEB" />
          <polygon points="32,8 26,24 38,24" fill="#F59E0B" />
          <polygon points="32,18 18,34 46,34" fill="#D97706" />
          <polygon points="32,28 12,44 52,44" fill="#B45309" />
          <rect x="16" y="44" width="32" height="10" rx="2" fill="#F59E0B" />
          <rect x="28" y="47" width="8" height="7" fill="#78350F" />
        </svg>
      );
    case 'tokyo':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#FFF1F2" />
          <circle cx="48" cy="18" r="7" fill="#EF4444" />
          <polygon points="30,18 10,50 50,50" fill="#475569" />
          <polygon points="30,18 22,31 27,29 30,32 33,29 38,31" fill="#FFFFFF" />
          <circle cx="16" cy="22" r="3" fill="#F472B6" />
          <circle cx="22" cy="17" r="2.5" fill="#F9A8D4" />
        </svg>
      );
    case 'australia':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#ECFEFF" />
          <path d="M12 44 C14 26 24 22 30 44 Z" fill="#FFFFFF" stroke="#0891B2" strokeWidth="2" />
          <path d="M24 44 C28 20 40 16 44 44 Z" fill="#FFFFFF" stroke="#0891B2" strokeWidth="2" />
          <path d="M38 44 C42 26 50 24 54 44 Z" fill="#FFFFFF" stroke="#0891B2" strokeWidth="2" />
          <rect x="8" y="44" width="48" height="10" rx="3" fill="#06B6D4" />
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
