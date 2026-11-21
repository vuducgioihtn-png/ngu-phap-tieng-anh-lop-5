import React, { useState } from 'react';
import {
  CheckCircle2,
  Eye,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Turtle,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  U6_TASK1_MATCH,
  U6_TASK2_MC,
  U6_TASK3_READING,
  U6_TASK4_LOOK_WRITE,
  U6_TASK5_JILL_BLANKS,
  U6_TASK6_ORDERS_P45,
  U6_TASK6_ORDERS_P46,
  U6_TASK7_TRANSLATE,
  U6_TASK8_WRITING,
  U7_STUDY_PHRASES,
  U7_TASK1_LETTERS_P49,
  U7_TASK1_LETTERS_P50,
  U7_TASK2_MATCH,
  U7_TASK3_PHONETICS,
  U7_TASK4_MC,
  U7_TASK5_READING,
  U7_TASK6_LOOK_WRITE,
  U7_TASK7_BLANKS,
  U7_TASK8_PASSAGE,
  U7_TASK8_PASSAGE_VI,
  U7_TASK8_QA,
  U7_TASK9_ORDERS,
  U7_VOCAB_PAGE47,
  U7_VOCAB_PAGE48,
  U7_WRITING_P54,
  U8_CHARACTER_CARDS,
  U8_TASK10_WRITING,
  U8_TASK1_ODD,
  U8_TASK2_MATCH,
  U8_TASK3_READING,
  U8_TASK4_DIALOGUE,
  U8_TASK5_LETTERS,
  U8_TASK6_LOOK_WRITE,
  U8_TASK7_BILL_BLANKS,
  U8_TASK8_ORDERS,
  U8_VOCAB_PAGE54,
  U8_VOCAB_PAGE55,
  U9_VOCAB_PAGE61,
  U9_VOCAB_PAGE62,
  U9_ZOO_ANIMALS_PLAY,
} from '../data/pages42to62Data';
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
  MiniPictureIcon,
  PresentContinuousDiagram,
  ZooAdverbDiagram,
} from './PageVisuals';

interface Pages42To62ViewProps {
  activePage: number;
  completedTaskIds: string[];
  onCompleteTask: (taskId: string) => void;
  muted: boolean;
}

const TIMETABLE_SUBJECTS = [
  { name: 'Maths', vi: 'Toán', freq: 'four times a week', freqVi: '4 lần/tuần', icon: 'maths' },
  { name: 'English', vi: 'Tiếng Anh', freq: 'four times a week', freqVi: '4 lần/tuần', icon: 'english' },
  { name: 'Science', vi: 'Khoa học', freq: 'twice a week', freqVi: '2 lần/tuần', icon: 'science' },
  { name: 'Music', vi: 'Âm nhạc', freq: 'once a week', freqVi: '1 lần/tuần', icon: 'sing' },
  { name: 'Vietnamese', vi: 'Tiếng Việt', freq: 'every school day', freqVi: 'mỗi ngày đi học', icon: 'books' },
];

const STUDY_SKILLS_COACH = [
  {
    key: 'listening',
    label: 'Listening (Nghe)',
    icon: 'listen',
    q: 'How do you practise listening to English?',
    a: 'I watch English cartoons on TV and listen to English songs.',
    vi: 'Mình xem phim hoạt hình tiếng Anh trên TV và nghe bài hát tiếng Anh.',
    why: 'Because I want to understand English cartoons.',
  },
  {
    key: 'speaking',
    label: 'Speaking (Nói)',
    icon: 'speak',
    q: 'How do you practise speaking English?',
    a: 'I speak English every day and talk with my foreign friends.',
    vi: 'Mình nói tiếng Anh mỗi ngày và trò chuyện với các bạn nước ngoài.',
    why: 'Because I want to talk with my foreign friends.',
  },
  {
    key: 'reading',
    label: 'Reading (Đọc)',
    icon: 'read',
    q: 'How do you practise reading English?',
    a: 'I read English comic books and short stories.',
    vi: 'Mình đọc truyện tranh tiếng Anh và truyện ngắn.',
    why: 'Because I want to read English comic books.',
  },
  {
    key: 'writing',
    label: 'Writing (Viết)',
    icon: 'write',
    q: 'How do you practise writing English?',
    a: 'I write emails to my pen friends every week.',
    vi: 'Mình viết email cho bạn qua thư mỗi tuần.',
    why: 'Because I want to write letters to my friends.',
  },
];

const U8_TASK9_BLANKS = [
  { index: 1, answers: ['going to do'], display: 'going to do', hint: 'be + going to do (dự định làm gì)' },
  { index: 2, answers: ['what'], display: 'What', hint: 'Hỏi tên câu chuyện: ___ story is it?' },
  { index: 3, answers: ['lamp'], display: 'Lamp', hint: 'Aladdin and the Magic ___' },
  { index: 4, answers: ['time'], display: 'time', hint: 'in your free ___ (lúc rảnh)' },
  { index: 5, answers: ['reading'], display: 'reading', hint: 'like + V-ing → ___ fairy tales' },
  { index: 6, answers: ['white'], display: 'White', hint: 'Snow ___ and the Seven Dwarfs' },
  { index: 7, answers: ["don't", 'do not'], display: "don't", hint: 'No, I ___ (phủ định với Do you)' },
];

const U8_TASK9_WORDBANK = ['going to do', 'What', 'Lamp', 'time', 'reading', 'White', "don't"];

export const Pages42To62View: React.FC<Pages42To62ViewProps> = ({
  activePage,
  completedTaskIds,
  onCompleteTask,
  muted,
}) => {
  // Page 42 interactive timetable builder
  const [selectedSubjectIdx, setSelectedSubjectIdx] = useState(0);
  const [lessonCount, setLessonCount] = useState(4);
  const [selectedDay, setSelectedDay] = useState<'today' | 'on Mondays' | 'on Wednesdays'>('today');

  // Page 45: Task 5 Jill inline cloze
  const [jillInputs, setJillInputs] = useState<Record<number, string>>({});
  const [jillChecked, setJillChecked] = useState<boolean | null>(null);

  // Page 49: Interactive 4-skills Study Coach
  const [activeSkillIdx, setActiveSkillIdx] = useState(0);

  // Page 52: Task 7 study tips inline cloze
  const [u7t7Inputs, setU7t7Inputs] = useState<Record<number, string>>({});
  const [u7t7Checked, setU7t7Checked] = useState<boolean | null>(null);

  // Page 53: Task 8 reading translation toggle
  const [showLinhVi, setShowLinhVi] = useState(false);

  // Page 56: Interactive 6-Character Personality Explorer
  const [activeCharIdx, setActiveCharIdx] = useState(0);

  // Page 58: Task 7 Bill's hobby inline cloze
  const [billInputs, setBillInputs] = useState<Record<number, string>>({});
  const [billChecked, setBillChecked] = useState<boolean | null>(null);

  // Page 60: Task 9 2-dialogue inline cloze
  const [u8t9Inputs, setU8t9Inputs] = useState<Record<number, string>>({});
  const [u8t9Checked, setU8t9Checked] = useState<boolean | null>(null);

  // Page 62: Interactive Zoo Safari Explorer
  const [activeZooIdx, setActiveZooIdx] = useState(0);

  /* Helpers */
  const checkJillCloze = () => {
    const allRight = U6_TASK5_JILL_BLANKS.every((b) =>
      b.answers.some((a) => a.toLowerCase() === (jillInputs[b.index] ?? '').trim().toLowerCase())
    );
    setJillChecked(allRight);
    playFeedbackTone(allRight ? 'celebrate' : 'wrong', muted);
    if (allRight) onCompleteTask('p45-u6t5-all');
  };

  const checkU7t7Cloze = () => {
    const allRight = U7_TASK7_BLANKS.every((b) =>
      b.answers.some((a) => a.toLowerCase() === (u7t7Inputs[b.index] ?? '').trim().toLowerCase())
    );
    setU7t7Checked(allRight);
    playFeedbackTone(allRight ? 'celebrate' : 'wrong', muted);
    if (allRight) onCompleteTask('p52-u7t7-all');
  };

  const checkBillCloze = () => {
    const allRight = U8_TASK7_BILL_BLANKS.every((b) =>
      b.answers.some((a) => a.toLowerCase() === (billInputs[b.index] ?? '').trim().toLowerCase())
    );
    setBillChecked(allRight);
    playFeedbackTone(allRight ? 'celebrate' : 'wrong', muted);
    if (allRight) onCompleteTask('p58-u8t7-all');
  };

  const checkU8t9Dialogue = () => {
    const allRight = U8_TASK9_BLANKS.every((b) =>
      b.answers.some((a) => a.toLowerCase() === (u8t9Inputs[b.index] ?? '').trim().toLowerCase())
    );
    setU8t9Checked(allRight);
    playFeedbackTone(allRight ? 'celebrate' : 'wrong', muted);
    if (allRight) onCompleteTask('p60-u8t9-all');
  };

  const selectedSub = TIMETABLE_SUBJECTS[selectedSubjectIdx];
  const activeSkill = STUDY_SKILLS_COACH[activeSkillIdx];
  const activeChar = U8_CHARACTER_CARDS[activeCharIdx];
  const activeZoo = U9_ZOO_ANIMALS_PLAY[activeZooIdx];

  return (
    <div className="space-y-6">
      {/* =========================================================
          PAGE 42: UNIT 6 GRAMMAR 1–3 + TIMETABLE BUILDER + TASK 1
         ========================================================= */}
      {activePage === 42 && (
        <div className="space-y-6">
          {/* Grammar Cards */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                Unit 6 · Ngữ pháp trọng tâm (Trang 42)
              </p>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
                3 mẫu câu vàng về Thời khóa biểu & Tần suất môn học
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 space-y-2.5">
                <p className="text-xs font-extrabold uppercase text-sky-800">
                  1. Hỏi có thích môn học không
                </p>
                <p className="font-display font-extrabold text-base text-slate-900">
                  Do you like + tên môn học?
                </p>
                <div className="text-xs text-slate-700 space-y-1 bg-white rounded-xl p-3 border border-sky-100">
                  <p>
                    • <strong>Yes, I do.</strong> (Có, mình thích.)
                  </p>
                  <p>
                    • <strong>No, I don’t.</strong> (Không, mình không thích.)
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => speakEnglish('Do you like Music? Yes, I do. I like it very much.', 0.9)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Nghe ví dụ
                </button>
              </div>

              <div className="rounded-2xl bg-indigo-50/70 border border-indigo-200 p-4 space-y-2.5">
                <p className="text-xs font-extrabold uppercase text-indigo-800">
                  2. Hỏi số tiết học trong ngày
                </p>
                <p className="font-display font-extrabold text-base text-slate-900">
                  How many lessons do/does + S + have + today?
                </p>
                <div className="text-xs text-slate-700 space-y-1 bg-white rounded-xl p-3 border border-indigo-100">
                  <p>
                    • I <strong>have</strong> four lessons.
                  </p>
                  <p>
                    • She <strong>has</strong> five lessons on Mondays.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => speakEnglish('How many lessons do you have today? I have four.', 0.9)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 hover:text-indigo-900 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Nghe ví dụ
                </button>
              </div>

              <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 space-y-2.5">
                <p className="text-xs font-extrabold uppercase text-emerald-800">
                  3. Hỏi tần suất học mỗi môn
                </p>
                <p className="font-display font-extrabold text-base text-slate-900">
                  How often do/does + S + have + môn học?
                </p>
                <div className="text-xs text-slate-700 space-y-1 bg-white rounded-xl p-3 border border-emerald-100">
                  <p>
                    • <strong>once</strong> a week (1 lần) · <strong>twice</strong> a week (2 lần)
                  </p>
                  <p>
                    • <strong>three/four times</strong> a week · <strong>every school day</strong>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => speakEnglish('How often do you have English? I have it four times a week.', 0.9)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-900 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Nghe ví dụ
                </button>
              </div>
            </div>
          </section>

          {/* Interactive Weekly Timetable & Lesson Counter Builder */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex items-start gap-2.5">
              <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Xưởng ghép câu Thời khóa biểu trực quan
                </h3>
                <p className="text-sm text-slate-600">
                  Bấm chọn ngày, số tiết và môn học để nghe trọn bộ câu hỏi – đáp chuẩn sách lớp 5:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-5 space-y-3">
                <div>
                  <p className="text-xs font-bold text-slate-600 mb-1.5">1. Chọn thời điểm & số tiết:</p>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {(['today', 'on Mondays', 'on Wednesdays'] as const).map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setSelectedDay(d)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer ${
                          selectedDay === d
                            ? 'bg-indigo-600 border-indigo-600 text-white'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[3, 4, 5].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setLessonCount(n)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer ${
                          lessonCount === n
                            ? 'bg-sky-600 border-sky-600 text-white'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-sky-300'
                        }`}
                      >
                        {n} tiết ({n === 3 ? 'three' : n === 4 ? 'four' : 'five'})
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-600 mb-1.5">2. Chọn môn học để hỏi tần suất:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {TIMETABLE_SUBJECTS.map((sub, idx) => (
                      <button
                        key={sub.name}
                        type="button"
                        onClick={() => setSelectedSubjectIdx(idx)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer ${
                          selectedSubjectIdx === idx
                            ? 'bg-emerald-600 border-emerald-600 text-white'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-300'
                        }`}
                      >
                        {sub.name} ({sub.vi})
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-indigo-50/60 border border-indigo-200 rounded-2xl p-4 sm:p-5 flex flex-col justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <MiniPictureIcon iconKey={selectedSub.icon} className="w-14 h-14 shrink-0" />
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="font-bold text-indigo-900">
                        Q1: How many lessons do you have {selectedDay}?
                      </p>
                      <p className="font-semibold text-slate-800">
                        A1: I have {lessonCount === 3 ? 'three' : lessonCount === 4 ? 'four' : 'five'} lessons.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-indigo-200/70">
                      <p className="font-bold text-emerald-900">
                        Q2: How often do you have {selectedSub.name}?
                      </p>
                      <p className="font-semibold text-slate-800">
                        A2: I have it <strong>{selectedSub.freq}</strong>. ({selectedSub.freqVi})
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      speakEnglish(
                        `How many lessons do you have ${selectedDay}? I have ${
                          lessonCount === 3 ? 'three' : lessonCount === 4 ? 'four' : 'five'
                        } lessons. How often do you have ${selectedSub.name}? I have it ${selectedSub.freq}.`,
                        0.9
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                    Nghe cả đoạn hội thoại
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Task 1 Match */}
          <PairMatchBlock
            title="Task 1 (Trang 42) · Nối câu hỏi và câu trả lời phù hợp (7 cặp)"
            instruction="Chọn một câu hỏi bên trái rồi bấm vào câu trả lời đúng bên phải."
            items={U6_TASK1_MATCH}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 43: UNIT 6 TASK 2 (7 MC) & TASK 3 (MINH'S TIMETABLE)
         ========================================================= */}
      {activePage === 43 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 2 (Trang 43) · Chọn đáp án đúng A, B, C hoặc D (7 câu)"
            instruction="Chú ý phân biệt When / How many / How often và danh từ số nhiều sau How many."
            items={U6_TASK2_MC}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <TrueFalseReadingBlock
            title="Task 3 (Trang 43) · Đọc về thời khóa biểu của Minh và chọn True / False"
            passage={U6_TASK3_READING.passage}
            passageVi={U6_TASK3_READING.passageVi}
            example={U6_TASK3_READING.example}
            statements={U6_TASK3_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 44: UNIT 6 TASK 4 (Q1–4 PICTURE FILL)
         ========================================================= */}
      {activePage === 44 && (
        <PictureFillBlock
          title="Task 4 (Trang 44 · Câu 1–4) · Nhìn tranh và lịch viết từ đúng"
          instruction="Quan sát hình minh họa môn học hoặc số ngày được đánh dấu trên lịch rồi gõ từ tiếng Anh."
          items={U6_TASK4_LOOK_WRITE.slice(0, 4)}
          completedTaskIds={completedTaskIds}
          onCompleteTask={onCompleteTask}
          muted={muted}
        />
      )}

      {/* =========================================================
          PAGE 45: UNIT 6 TASK 4 (Q5), TASK 5 (JILL CLOZE) & TASK 6 (Q1)
         ========================================================= */}
      {activePage === 45 && (
        <div className="space-y-6">
          <PictureFillBlock
            title="Task 4 (Trang 45 · Câu 5) · Nhìn tranh viết môn học yêu thích"
            instruction="Quan sát bảng chữ cái minh họa để điền tên môn học còn thiếu."
            items={U6_TASK4_LOOK_WRITE.slice(4)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          {/* Task 5: Jill's timetable inline cloze */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Task 5 (Trang 45) · Điền 5 từ theo tranh vào đoạn văn của bạn Jill
                </h3>
                <p className="text-sm text-slate-600">
                  Quan sát 5 tranh gợi ý bên dưới rồi điền từ phù hợp vào từng chỗ trống (1)–(5).
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    'Hello, my name is Jill. I live in Ho Chi Minh City. I am a student at Quang Trung Primary School. I go to school five days a week, from Monday to Friday. Today is Wednesday. I have four lessons: Maths, Vietnamese, Art and English. I have Science twice a week.',
                    0.88
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Nghe đoạn văn mẫu
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {U6_TASK5_JILL_BLANKS.map((b) => (
                <div
                  key={b.id}
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center text-center gap-1.5"
                >
                  <MiniPictureIcon iconKey={b.iconKey ?? 'school'} className="w-11 h-11" />
                  <span className="text-xs font-extrabold text-sky-700">Ô ({b.index})</span>
                  <span className="text-[11px] text-slate-600 leading-snug">{b.hint}</span>
                </div>
              ))}
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/60 border border-sky-200 text-sm sm:text-base leading-loose text-slate-900 font-medium">
              Hello, my name is Jill. I live in Ho Chi Minh City. I am a student at Quang Trung{' '}
              <input
                type="text"
                value={jillInputs[1] ?? ''}
                onChange={(e) => {
                  setJillInputs((p) => ({ ...p, 1: e.target.value }));
                  setJillChecked(null);
                }}
                placeholder="(1)..."
                className="w-36 px-2.5 py-0.5 mx-1 rounded-lg bg-white border border-sky-300 text-sm font-bold text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              . I go to school five days a{' '}
              <input
                type="text"
                value={jillInputs[2] ?? ''}
                onChange={(e) => {
                  setJillInputs((p) => ({ ...p, 2: e.target.value }));
                  setJillChecked(null);
                }}
                placeholder="(2)..."
                className="w-24 px-2.5 py-0.5 mx-1 rounded-lg bg-white border border-sky-300 text-sm font-bold text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              , from Monday to{' '}
              <input
                type="text"
                value={jillInputs[3] ?? ''}
                onChange={(e) => {
                  setJillInputs((p) => ({ ...p, 3: e.target.value }));
                  setJillChecked(null);
                }}
                placeholder="(3)..."
                className="w-24 px-2.5 py-0.5 mx-1 rounded-lg bg-white border border-sky-300 text-sm font-bold text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              . Today is Wednesday. I have four lessons:{' '}
              <input
                type="text"
                value={jillInputs[4] ?? ''}
                onChange={(e) => {
                  setJillInputs((p) => ({ ...p, 4: e.target.value }));
                  setJillChecked(null);
                }}
                placeholder="(4)..."
                className="w-24 px-2.5 py-0.5 mx-1 rounded-lg bg-white border border-sky-300 text-sm font-bold text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              , Vietnamese, Art and English. I have Science{' '}
              <input
                type="text"
                value={jillInputs[5] ?? ''}
                onChange={(e) => {
                  setJillInputs((p) => ({ ...p, 5: e.target.value }));
                  setJillChecked(null);
                }}
                placeholder="(5)..."
                className="w-24 px-2.5 py-0.5 mx-1 rounded-lg bg-white border border-sky-300 text-sm font-bold text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />{' '}
              a week.
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={checkJillCloze}
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold cursor-pointer"
              >
                Kiểm tra 5 chỗ trống
              </button>
              <button
                type="button"
                onClick={() => {
                  setJillInputs({ 1: 'Primary School', 2: 'week', 3: 'Friday', 4: 'Maths', 5: 'twice' });
                  setJillChecked(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-sm font-semibold cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                Xem đáp án
              </button>
              <button
                type="button"
                onClick={() => {
                  setJillInputs({});
                  setJillChecked(null);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Làm lại
              </button>
            </div>

            {jillChecked !== null && (
              <div
                className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm border ${
                  jillChecked
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}
              >
                {jillChecked ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <p>
                  {jillChecked
                    ? 'Chính xác tuyệt đối! (1) Primary School · (2) week · (3) Friday · (4) Maths · (5) twice.'
                    : 'Một vài ô chưa khớp. Hãy nhìn lại 5 thẻ gợi ý phía trên và kiểm tra chính tả từng từ nhé!'}
                </p>
              </div>
            )}
          </section>

          <SentenceOrderBlock
            title="Task 6 (Trang 45 · Câu 1) · Sắp xếp các từ thành câu đúng"
            instruction="Bấm lần lượt vào các thẻ từ để ghép thành câu hỏi tần suất chuẩn."
            items={U6_TASK6_ORDERS_P45}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 46: UNIT 6 TASK 6 (Q2–8) & TASK 7 (TRANSLATE)
         ========================================================= */}
      {activePage === 46 && (
        <div className="space-y-6">
          <SentenceOrderBlock
            title="Task 6 (Trang 46 · Câu 2–8) · Sắp xếp từ thành câu hoàn chỉnh"
            instruction="Chú ý vị trí trợ động từ do/does, sở hữu cách (brother's) và cụm từ thời gian ở cuối câu."
            items={U6_TASK6_ORDERS_P46}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <ChoiceExerciseBlock
            title="Task 7 (Trang 46) · Chọn bản dịch Tiếng Anh đúng nhất (3 câu)"
            instruction="Đọc kỹ câu tiếng Việt rồi đối chiếu danh từ số nhiều và trợ động từ do/does."
            items={U6_TASK7_TRANSLATE}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 47: UNIT 6 TASK 8 WRITING + UNIT 7 OPENING + 10 VOCAB
         ========================================================= */}
      {activePage === 47 && (
        <div className="space-y-6">
          <GuidedWritingBlock
            id="p47-u6t8-writing"
            title="Task 8 (Trang 47) · Viết về thời khóa biểu và môn học yêu thích của em"
            instruction="Trả lời từng câu hỏi ngắn để hệ thống ghép thành đoạn văn tiếng Anh hoàn chỉnh."
            prompts={U6_TASK8_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <section className="bg-emerald-50/70 border border-emerald-200 rounded-3xl p-6 space-y-2">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
              Mở đầu Unit 7 · Trang 47
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Unit 7: How do you learn English?
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              (Bạn học Tiếng Anh bằng cách nào?) — Làm chủ <strong>4 kỹ năng</strong> Nghe – Nói – Đọc – Viết và cách chia sẻ bí quyết học Tiếng Anh cực hiệu quả!
            </p>
          </section>

          <VocabCardsGrid
            words={U7_VOCAB_PAGE47}
            title="Từ vựng Unit 7 · Phần 1 (Trang 47 · 10 từ cốt lõi)"
          />
        </div>
      )}

      {/* =========================================================
          PAGE 48: UNIT 7 VOCAB PART 2 (19 WORDS) + GRAMMAR 1
         ========================================================= */}
      {activePage === 48 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U7_VOCAB_PAGE48}
            title="Từ vựng Unit 7 · Phần 2 (Trang 48 · 19 từ mở rộng)"
          />

          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Ngữ pháp 1 (Trang 48)
            </p>
            <h3 className="font-display text-xl font-extrabold text-slate-900">
              Hỏi cách học một môn học hoặc kỹ năng: “How do you learn...?”
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 space-y-2">
                <p className="text-xs font-bold uppercase text-emerald-800">Công thức chuẩn</p>
                <p className="font-display font-extrabold text-base text-slate-900">
                  How do / does + S + learn + English / vocabulary?
                </p>
                <p className="text-xs text-slate-700">
                  Trả lời: <strong>S + V(s/es) ...</strong> hoặc <strong>by + V-ing</strong> (bằng cách làm gì).
                </p>
              </div>
              <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 space-y-2">
                <p className="text-xs font-bold uppercase text-sky-800">Ví dụ dễ nhớ</p>
                <p className="text-sm font-semibold text-slate-900">
                  • How do you learn vocabulary? → I write new words in my notebook and read them aloud.
                </p>
                <button
                  type="button"
                  onClick={() =>
                    speakEnglish(
                      'How do you learn vocabulary? I write new words in my notebook and read them aloud.',
                      0.9
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Nghe mẫu câu
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 49: UNIT 7 GRAMMAR 2–3 + COACH + 12 PHRASES + TASK 1 (1–10)
         ========================================================= */}
      {activePage === 49 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
              Ngữ pháp 2 & 3 (Trang 49): Luyện 4 kỹ năng & Hỏi lý do (Why – Because)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 space-y-2">
                <p className="text-xs font-extrabold uppercase text-sky-800">
                  Ngữ pháp 2 · Hỏi cách luyện tập
                </p>
                <p className="font-display font-extrabold text-base text-slate-900">
                  How do / does + S + practise + V-ing?
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>Quy tắc vàng:</strong> Sau <strong>practise</strong> và sau giới từ <strong>by</strong> luôn dùng động từ thêm <strong>-ing</strong>!
                  <br />
                  VD: <em>practise reading</em> · <em>by watching cartoons</em>.
                </p>
              </div>

              <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-4 space-y-2">
                <p className="text-xs font-extrabold uppercase text-amber-800">
                  Ngữ pháp 3 · Hỏi lý do học Tiếng Anh
                </p>
                <p className="font-display font-extrabold text-base text-slate-900">
                  Why do / does + S + learn English?
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Trả lời: <strong>Because + S + want(s) to + V nguyên mẫu.</strong>
                  <br />
                  VD: <em>Because I want to sing English songs.</em>
                </p>
              </div>
            </div>

            {/* Interactive 4-Skills Study Coach */}
            <div className="rounded-2xl bg-emerald-50/60 border border-emerald-200 p-4 sm:p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-extrabold text-emerald-900">
                  Xưởng luyện 4 kỹ năng Tiếng Anh (Bấm chọn từng kỹ năng để nghe!)
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {STUDY_SKILLS_COACH.map((sk, idx) => (
                    <button
                      key={sk.key}
                      type="button"
                      onClick={() => setActiveSkillIdx(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer ${
                        activeSkillIdx === idx
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'bg-white border-emerald-200 text-emerald-900 hover:bg-emerald-100'
                      }`}
                    >
                      {sk.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-emerald-200 p-4 flex flex-col sm:flex-row items-start gap-4">
                <MiniPictureIcon iconKey={activeSkill.icon} className="w-14 h-14 shrink-0" />
                <div className="space-y-1.5 flex-1">
                  <p className="text-sm font-extrabold text-sky-900">Q: {activeSkill.q}</p>
                  <p className="text-sm font-bold text-slate-900">A: {activeSkill.a}</p>
                  <p className="text-xs text-slate-600">{activeSkill.vi}</p>
                  <p className="text-xs font-semibold text-amber-800 pt-1">
                    Lý do (Why?): {activeSkill.why}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => speakEnglish(`${activeSkill.q} ${activeSkill.a} ${activeSkill.why}`, 0.88)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold cursor-pointer shrink-0"
                >
                  <Volume2 className="w-4 h-4" />
                  Nghe mẫu
                </button>
              </div>
            </div>

            {/* 12 Study Phrases Grid */}
            <div className="space-y-2.5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
                12 cụm từ cách học Tiếng Anh cần thuộc lòng (Bấm để nghe phát âm)
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {U7_STUDY_PHRASES.map((ph) => (
                  <button
                    key={ph.en}
                    type="button"
                    onClick={() => speakEnglish(ph.en, 0.9)}
                    className="text-left p-3 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-300 transition-colors flex items-start justify-between gap-2 cursor-pointer"
                  >
                    <div>
                      <p className="text-sm font-bold text-slate-900">{ph.en}</p>
                      <p className="text-xs text-slate-600">{ph.vi}</p>
                    </div>
                    <Volume2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  </button>
                ))}
              </div>
            </div>
          </section>

          <MissingLettersBlock
            title="Task 1 (Trang 49 · Câu 1–10) · Điền chữ cái còn thiếu vào từ vựng"
            instruction="Nhìn khung chữ cái và nghĩa tiếng Việt, gõ trọn từ tiếng Anh đúng chính tả rồi nhấn Kiểm tra."
            items={U7_TASK1_LETTERS_P49}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 50: UNIT 7 TASK 1 (11–15), TASK 2, TASK 3 PHONETICS & TASK 4 (1–2)
         ========================================================= */}
      {activePage === 50 && (
        <div className="space-y-6">
          <MissingLettersBlock
            title="Task 1 (Trang 50 · Câu 11–15) · Điền chữ cái còn thiếu (tiếp theo)"
            instruction="Hoàn thành 5 từ vựng nâng cao về ngoại ngữ và từ vựng."
            items={U7_TASK1_LETTERS_P50}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <PairMatchBlock
            title="Task 2 (Trang 50) · Nối định nghĩa tiếng Anh với đúng kỹ năng"
            instruction="Câu 0 (Say) đã làm mẫu. Hãy đọc kỹ định nghĩa bên trái và ghép với 4 kỹ năng Read, Listen, Speak, Write."
            items={U7_TASK2_MATCH}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <ChoiceExerciseBlock
            title="Task 3 (Trang 50) · Ngữ âm: Chọn từ có phần gạch chân phát âm khác"
            instruction="Bấm vào nút loa bên cạnh từng từ để nghe so sánh phát âm trực tiếp trước khi chọn!"
            items={U7_TASK3_PHONETICS}
            speakOptions
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <ChoiceExerciseBlock
            title="Task 4 (Trang 50 · Câu 1–2) · Chọn đáp án đúng"
            instruction="Hoàn thành 2 câu đầu của Task 4 về ngoại ngữ và cấu trúc want to + V."
            items={U7_TASK4_MC.slice(0, 2)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 51: UNIT 7 TASK 4 (Q3–7) & TASK 5 (AKIKO READING)
         ========================================================= */}
      {activePage === 51 && (
        <div className="space-y-6">
          <ChoiceExerciseBlock
            title="Task 4 (Trang 51 · Câu 3–7) · Chọn đáp án đúng A, B, C hoặc D"
            instruction="Ghi nhớ: each other, practise + V-ing + by + V-ing, because và guess its meaning."
            items={U7_TASK4_MC.slice(2)}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <TrueFalseReadingBlock
            title="Task 5 (Trang 51) · Đọc hiểu về Quân và cô bạn Akiko (Nhật Bản)"
            passage={U7_TASK5_READING.passage}
            passageVi={U7_TASK5_READING.passageVi}
            example={U7_TASK5_READING.example}
            statements={U7_TASK5_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 52: UNIT 7 TASK 6 (4 PICTURES) & TASK 7 (5-BLANK CLOZE)
         ========================================================= */}
      {activePage === 52 && (
        <div className="space-y-6">
          <PictureFillBlock
            title="Task 6 (Trang 52) · Nhìn 4 tranh viết từ còn thiếu"
            instruction="Quan sát hoạt động học tiếng Anh trong tranh rồi điền từ thích hợp (chú ý đuôi -ing sau by)."
            items={U7_TASK6_LOOK_WRITE}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          {/* Task 7: 5-blank picture cloze */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Task 7 (Trang 52) · Hoàn thành đoạn văn bí kíp học Tiếng Anh (5 tranh)
                </h3>
                <p className="text-sm text-slate-600">
                  Xem 5 hình gợi ý dưới đây rồi điền từ chính xác vào các ô (1)–(5).
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    'When I see a new word, I try to guess its meaning. I write the word in my notebook and say it a few times. I often stick new words on my kitchen wall and practise reading them aloud. I learn to speak English by singing English songs.',
                    0.88
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Nghe đoạn văn mẫu
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {U7_TASK7_BLANKS.map((b) => (
                <div
                  key={b.id}
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center text-center gap-1.5"
                >
                  <MiniPictureIcon iconKey={b.iconKey ?? 'english'} className="w-11 h-11" />
                  <span className="text-xs font-extrabold text-emerald-700">Ô ({b.index})</span>
                  <span className="text-[11px] text-slate-600 leading-snug">{b.hint}</span>
                </div>
              ))}
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-sm sm:text-base leading-loose text-slate-900 font-medium">
              When I see a new{' '}
              <input
                type="text"
                value={u7t7Inputs[1] ?? ''}
                onChange={(e) => {
                  setU7t7Inputs((p) => ({ ...p, 1: e.target.value }));
                  setU7t7Checked(null);
                }}
                placeholder="(1)..."
                className="w-24 px-2.5 py-0.5 mx-1 rounded-lg bg-white border border-emerald-300 text-sm font-bold text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              , I try to guess its meaning. I write the word in my{' '}
              <input
                type="text"
                value={u7t7Inputs[2] ?? ''}
                onChange={(e) => {
                  setU7t7Inputs((p) => ({ ...p, 2: e.target.value }));
                  setU7t7Checked(null);
                }}
                placeholder="(2)..."
                className="w-28 px-2.5 py-0.5 mx-1 rounded-lg bg-white border border-emerald-300 text-sm font-bold text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />{' '}
              and say it a few times. I often stick new words on my{' '}
              <input
                type="text"
                value={u7t7Inputs[3] ?? ''}
                onChange={(e) => {
                  setU7t7Inputs((p) => ({ ...p, 3: e.target.value }));
                  setU7t7Checked(null);
                }}
                placeholder="(3)..."
                className="w-24 px-2.5 py-0.5 mx-1 rounded-lg bg-white border border-emerald-300 text-sm font-bold text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />{' '}
              wall and practise{' '}
              <input
                type="text"
                value={u7t7Inputs[4] ?? ''}
                onChange={(e) => {
                  setU7t7Inputs((p) => ({ ...p, 4: e.target.value }));
                  setU7t7Checked(null);
                }}
                placeholder="(4)..."
                className="w-24 px-2.5 py-0.5 mx-1 rounded-lg bg-white border border-emerald-300 text-sm font-bold text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />{' '}
              them aloud. I learn to speak English by{' '}
              <input
                type="text"
                value={u7t7Inputs[5] ?? ''}
                onChange={(e) => {
                  setU7t7Inputs((p) => ({ ...p, 5: e.target.value }));
                  setU7t7Checked(null);
                }}
                placeholder="(5)..."
                className="w-24 px-2.5 py-0.5 mx-1 rounded-lg bg-white border border-emerald-300 text-sm font-bold text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />{' '}
              English songs.
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={checkU7t7Cloze}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold cursor-pointer"
              >
                Kiểm tra 5 chỗ trống
              </button>
              <button
                type="button"
                onClick={() => {
                  setU7t7Inputs({ 1: 'word', 2: 'notebook', 3: 'kitchen', 4: 'reading', 5: 'singing' });
                  setU7t7Checked(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-sm font-semibold cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                Xem đáp án
              </button>
              <button
                type="button"
                onClick={() => {
                  setU7t7Inputs({});
                  setU7t7Checked(null);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Làm lại
              </button>
            </div>

            {u7t7Checked !== null && (
              <div
                className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm border ${
                  u7t7Checked
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}
              >
                {u7t7Checked ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <p>
                  {u7t7Checked
                    ? 'Tuyệt vời! (1) word · (2) notebook · (3) kitchen · (4) reading · (5) singing.'
                    : 'Chưa đúng hết rồi. Nhớ thêm -ing sau “practise” và sau “by” nhé!'}
                </p>
              </div>
            )}
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 53: UNIT 7 TASK 8 (LINH, LEE & JOHN) & TASK 9 (4 ORDERS)
         ========================================================= */}
      {activePage === 53 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Task 8 (Trang 53) · Bài đọc hiểu: Cách học Tiếng Anh của Linh, Lee & John
                </h3>
                <p className="text-sm text-slate-600">
                  Nghe bài đọc hai tốc độ rồi trả lời 5 câu hỏi trắc nghiệm chi tiết ngay bên dưới.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => speakEnglish(U7_TASK8_PASSAGE, 0.9)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Nghe bài đọc
                </button>
                <button
                  type="button"
                  onClick={() => speakEnglish(U7_TASK8_PASSAGE, 0.68)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-semibold cursor-pointer"
                >
                  <Turtle className="w-3.5 h-3.5" />
                  Đọc chậm
                </button>
                <button
                  type="button"
                  onClick={() => setShowLinhVi((v) => !v)}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
                >
                  {showLinhVi ? 'Ẩn bản dịch' : 'Xem dịch tiếng Việt'}
                </button>
              </div>
            </div>

            <div className="bg-sky-50/60 border border-sky-200 rounded-2xl p-4 sm:p-5 space-y-3">
              <p className="text-slate-900 text-sm sm:text-base leading-relaxed font-medium">
                {U7_TASK8_PASSAGE}
              </p>
              {showLinhVi && (
                <p className="text-sm text-slate-700 leading-relaxed pt-3 border-t border-sky-200">
                  <strong>Dịch nghĩa:</strong> {U7_TASK8_PASSAGE_VI}
                </p>
              )}
            </div>
          </section>

          <ChoiceExerciseBlock
            title="Câu hỏi đọc hiểu Task 8 (5 câu)"
            instruction="Chọn câu trả lời khớp chính xác với nội dung bài đọc của Linh."
            items={U7_TASK8_QA}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <SentenceOrderBlock
            title="Task 9 (Trang 53) · Sắp xếp từ thành 4 câu hoàn chỉnh"
            instruction="Bấm vào từng từ để ghép câu về cách học từ vựng và luyện 4 kỹ năng."
            items={U7_TASK9_ORDERS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 54: UNIT 7 WRITING + UNIT 8 OPENING + 6 VOCAB
         ========================================================= */}
      {activePage === 54 && (
        <div className="space-y-6">
          <GuidedWritingBlock
            id="p54-u7-writing"
            title="Bài viết tổng kết Unit 7 (Trang 54) · Viết về cách bạn thân của em học Tiếng Anh"
            instruction="Hoàn thành 5 câu trả lời mẫu để ghép thành đoạn văn tiếng Anh giới thiệu bạn thân."
            prompts={U7_WRITING_P54}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <section className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 space-y-2">
            <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
              Mở đầu Unit 8 · Trang 54
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Unit 8: What are you reading?
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              (Bạn đang đọc sách gì vậy?) — Khám phá thế giới <strong>truyện cổ tích & truyện tranh</strong>, hỏi đang đọc gì bằng thì Hiện tại tiếp diễn và miêu tả tính cách nhân vật!
            </p>
          </section>

          <VocabCardsGrid
            words={U8_VOCAB_PAGE54}
            title="Từ vựng Unit 8 · Phần 1 (Trang 54 · 6 từ mở đầu)"
          />
        </div>
      )}

      {/* =========================================================
          PAGE 55: UNIT 8 VOCAB PART 2 (18 WORDS) + PRESENT CONTINUOUS
         ========================================================= */}
      {activePage === 55 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U8_VOCAB_PAGE55}
            title="Từ vựng Unit 8 · Phần 2 (Trang 55 · 18 từ về truyện & tính cách)"
          />

          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Ngữ pháp 1 & 2 (Trang 55)
              </p>
              <h3 className="font-display text-xl font-extrabold text-slate-900">
                Hỏi ai đó đang đọc cuốn sách / truyện gì ngay lúc này
              </h3>
            </div>

            <PresentContinuousDiagram />

            <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs sm:text-sm text-sky-950 flex flex-wrap items-center justify-between gap-3">
              <span>
                <strong>Mở rộng:</strong> Ta cũng có thể hỏi <strong>What book / story are you reading?</strong> (Bạn đang đọc cuốn sách / câu chuyện nào?)
              </span>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    "What are you reading? I'm reading The Fox and the Crow. What is she reading? She's reading Snow White and the Seven Dwarfs.",
                    0.9
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Nghe mẫu câu
              </button>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 56: UNIT 8 GRAMMAR 3–4 + CHARACTER EXPLORER + TASK 1 (10 ODD)
         ========================================================= */}
      {activePage === 56 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
              Ngữ pháp 3 & 4 (Trang 56): Miêu tả tính cách nhân vật & Xin mượn sách
            </h2>

            {/* Interactive 6-Character Personality Explorer */}
            <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-4 sm:p-5 space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
                  Khám phá tính cách 6 nhân vật cổ tích quen thuộc (What’s he/she like?)
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {U8_CHARACTER_CARDS.map((ch, idx) => (
                    <button
                      key={ch.name}
                      type="button"
                      onClick={() => setActiveCharIdx(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer ${
                        activeCharIdx === idx
                          ? 'bg-amber-600 border-amber-600 text-white'
                          : 'bg-white border-amber-200 text-amber-950 hover:bg-amber-100'
                      }`}
                    >
                      {ch.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-amber-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-500">
                    Truyện: <em>{activeChar.story}</em>
                  </p>
                  <p className="font-display font-extrabold text-lg text-slate-900">
                    {activeChar.name} →{' '}
                    <span className="text-emerald-700">{activeChar.traitEn}</span>{' '}
                    <span className="text-sm font-semibold text-slate-600">
                      ({activeChar.traitVi})
                    </span>
                  </p>
                  <p className="text-sm font-semibold text-sky-900">{activeChar.sentence}</p>
                </div>
                <button
                  type="button"
                  onClick={() => speakEnglish(activeChar.sentence, 0.9)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold cursor-pointer shrink-0"
                >
                  <Volume2 className="w-4 h-4" />
                  Nghe hỏi đáp
                </button>
              </div>
            </div>

            {/* Grammar 4: May I borrow...? */}
            <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <p className="text-xs font-extrabold uppercase text-sky-800">
                  Ngữ pháp 4 · Xin phép mượn sách lịch sự
                </p>
                <p className="font-display font-extrabold text-base text-slate-900">
                  May I borrow + cuốn sách? → Yes, you can. / No, you can’t.
                </p>
                <p className="text-xs text-slate-700">
                  Ví dụ: <em>May I borrow your comic book? — Yes, you can. You can have it when I finish it.</em>
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    'May I borrow your comic book? Yes, you can. You can have it when I finish it.',
                    0.9
                  )
                }
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold cursor-pointer shrink-0"
              >
                <Volume2 className="w-4 h-4" />
                Nghe mẫu
              </button>
            </div>
          </section>

          <ChoiceExerciseBlock
            title="Task 1 (Trang 56) · Odd one out – Chọn từ khác loại (10 câu)"
            instruction="So sánh loại từ, tính cách tốt/xấu, tên nhân vật vs sự vật để chọn đáp án khác nhóm."
            items={U8_TASK1_ODD}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 57: UNIT 8 TASK 2 (MATCH 8), TASK 3 (DORAEMON), TASK 4 & TASK 5
         ========================================================= */}
      {activePage === 57 && (
        <div className="space-y-6">
          <PairMatchBlock
            title="Task 2 (Trang 57) · Nối câu hỏi và câu trả lời đúng về truyện & nhân vật (8 cặp)"
            instruction="Đọc kỹ tên nhân vật và câu hỏi What's ... like? / What're you reading? để ghép đúng."
            items={U8_TASK2_MATCH}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <TrueFalseReadingBlock
            title="Task 3 (Trang 57) · Đọc hiểu về Bill và chú mèo máy Doraemon"
            passage={U8_TASK3_READING.passage}
            passageVi={U8_TASK3_READING.passageVi}
            example={U8_TASK3_READING.example}
            statements={U8_TASK3_READING.statements}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <DialogueOrderBlock
            id="p57-u8t4-dialogue"
            title="Task 4 (Trang 57) · Sắp xếp hội thoại giữa Hải và Nam về truyện Cinderella"
            instruction="Câu C (0) đã cố định mở đầu. Hãy bấm chọn thứ tự 1 → 4 cho các câu còn lại."
            items={U8_TASK4_DIALOGUE}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          <MissingLettersBlock
            title="Task 5 (Trang 57) · Điền chữ cái còn thiếu vào 12 từ vựng Unit 8"
            instruction="Gõ cả từ hoàn chỉnh rồi kiểm tra ngay chính tả và phát âm."
            items={U8_TASK5_LETTERS}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 58: UNIT 8 TASK 6 (4 FAIRY TALES) & TASK 7 (BILL'S HOBBY)
         ========================================================= */}
      {activePage === 58 && (
        <div className="space-y-6">
          <PictureFillBlock
            title="Task 6 (Trang 58) · Nhìn 4 tranh điền tên truyện cổ tích"
            instruction="Quan sát hình 7 chú lùn, con quạ, cây đèn thần và khuôn mặt cười để điền từ đúng."
            items={U8_TASK6_LOOK_WRITE}
            completedTaskIds={completedTaskIds}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />

          {/* Task 7: Bill's hobby inline cloze */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Task 7 (Trang 58) · Điền 5 từ theo tranh về sở thích đọc sách của Bill
                </h3>
                <p className="text-sm text-slate-600">
                  Xem 5 hình gợi ý dưới đây rồi hoàn thành đoạn văn về câu chuyện Con Cáo và Con Quạ.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    'Hello, my name is Bill. My hobby is reading. I often go to the school library to borrow books. I like reading stories about animals. My favourite story is The Fox and the Crow. In the story, the Fox gets a piece of meat from the Crow. I think the Fox is very clever. I love the story very much.',
                    0.88
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Nghe đoạn văn mẫu
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {U8_TASK7_BILL_BLANKS.map((b) => (
                <div
                  key={b.id}
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center text-center gap-1.5"
                >
                  <MiniPictureIcon iconKey={b.iconKey ?? 'read'} className="w-11 h-11" />
                  <span className="text-xs font-extrabold text-amber-800">Ô ({b.index})</span>
                  <span className="text-[11px] text-slate-600 leading-snug">{b.hint}</span>
                </div>
              ))}
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/60 border border-amber-200 text-sm sm:text-base leading-loose text-slate-900 font-medium">
              Hello, my name is Bill. My hobby is{' '}
              <input
                type="text"
                value={billInputs[1] ?? ''}
                onChange={(e) => {
                  setBillInputs((p) => ({ ...p, 1: e.target.value }));
                  setBillChecked(null);
                }}
                placeholder="(1)..."
                className="w-24 px-2.5 py-0.5 mx-1 rounded-lg bg-white border border-amber-300 text-sm font-bold text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              . I often go to the school{' '}
              <input
                type="text"
                value={billInputs[2] ?? ''}
                onChange={(e) => {
                  setBillInputs((p) => ({ ...p, 2: e.target.value }));
                  setBillChecked(null);
                }}
                placeholder="(2)..."
                className="w-24 px-2.5 py-0.5 mx-1 rounded-lg bg-white border border-amber-300 text-sm font-bold text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />{' '}
              to borrow books. I like reading stories about{' '}
              <input
                type="text"
                value={billInputs[3] ?? ''}
                onChange={(e) => {
                  setBillInputs((p) => ({ ...p, 3: e.target.value }));
                  setBillChecked(null);
                }}
                placeholder="(3)..."
                className="w-24 px-2.5 py-0.5 mx-1 rounded-lg bg-white border border-amber-300 text-sm font-bold text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              . My favourite story is <em>The Fox and the Crow</em>. In the story, the Fox gets a piece of{' '}
              <input
                type="text"
                value={billInputs[4] ?? ''}
                onChange={(e) => {
                  setBillInputs((p) => ({ ...p, 4: e.target.value }));
                  setBillChecked(null);
                }}
                placeholder="(4)..."
                className="w-24 px-2.5 py-0.5 mx-1 rounded-lg bg-white border border-amber-300 text-sm font-bold text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />{' '}
              from the Crow. I think the Fox is very clever. I love the{' '}
              <input
                type="text"
                value={billInputs[5] ?? ''}
                onChange={(e) => {
                  setBillInputs((p) => ({ ...p, 5: e.target.value }));
                  setBillChecked(null);
                }}
                placeholder="(5)..."
                className="w-24 px-2.5 py-0.5 mx-1 rounded-lg bg-white border border-amber-300 text-sm font-bold text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />{' '}
              very much.
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={checkBillCloze}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold cursor-pointer"
              >
                Kiểm tra 5 chỗ trống
              </button>
              <button
                type="button"
                onClick={() => {
                  setBillInputs({ 1: 'reading', 2: 'library', 3: 'animals', 4: 'meat', 5: 'story' });
                  setBillChecked(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-sm font-semibold cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                Xem đáp án
              </button>
              <button
                type="button"
                onClick={() => {
                  setBillInputs({});
                  setBillChecked(null);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Làm lại
              </button>
            </div>

            {billChecked !== null && (
              <div
                className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm border ${
                  billChecked
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}
              >
                {billChecked ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <p>
                  {billChecked
                    ? 'Xuất sắc! (1) reading · (2) library · (3) animals · (4) meat · (5) story.'
                    : 'Một vài từ chưa chính xác. Hãy xem lại 5 hình gợi ý ở trên nhé!'}
                </p>
              </div>
            )}
          </section>
        </div>
      )}

      {/* =========================================================
          PAGE 59: UNIT 8 TASK 8 (ORDER 8 SENTENCES)
         ========================================================= */}
      {activePage === 59 && (
        <SentenceOrderBlock
          title="Task 8 (Trang 59) · Sắp xếp từ thành 8 câu hoàn chỉnh"
          instruction="Bấm lần lượt vào các thẻ từ để luyện hỏi đáp về tựa truyện, nhân vật chính và tính cách."
          items={U8_TASK8_ORDERS}
          completedTaskIds={completedTaskIds}
          onCompleteTask={onCompleteTask}
          muted={muted}
        />
      )}

      {/* =========================================================
          PAGE 60: UNIT 8 TASK 9 (2 DIALOGUES) & TASK 10 (WRITING)
         ========================================================= */}
      {activePage === 60 && (
        <div className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Task 9 (Trang 60) · Hoàn thành 2 đoạn hội thoại (7 chỗ trống)
                </h3>
                <p className="text-sm text-slate-600">
                  Chọn đúng từ trong ngân hàng từ gợi ý bên dưới để điền vào hội thoại Ben–Minh và Nick–Harry.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(
                    "What are you going to do tonight, Minh? I'm going to finish my story. What story is it? It's Aladdin and the Magic Lamp. What do you like doing in your free time, Harry? I like reading fairy tales. What is your favourite fairy tale? It's Snow White and the Seven Dwarfs. Do you like reading ghost stories? No, I don't. They are very scary.",
                    0.88
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Nghe 2 đoạn hội thoại
              </button>
            </div>

            {/* Word bank */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <p className="text-xs font-bold uppercase text-slate-600">Ngân hàng từ cần dùng:</p>
              <div className="flex flex-wrap gap-2">
                {U8_TASK9_WORDBANK.map((w) => (
                  <span
                    key={w}
                    className="px-3 py-1 rounded-lg bg-white border border-sky-200 text-xs font-extrabold text-sky-800"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Dialogue 1 */}
              <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-2.5 text-sm leading-relaxed text-slate-900">
                <p className="text-xs font-extrabold uppercase text-sky-800">
                  Hội thoại 1 · Ben & Minh
                </p>
                <p>
                  <strong>Ben:</strong> What are you{' '}
                  <input
                    type="text"
                    value={u8t9Inputs[1] ?? ''}
                    onChange={(e) => {
                      setU8t9Inputs((p) => ({ ...p, 1: e.target.value }));
                      setU8t9Checked(null);
                    }}
                    placeholder="(1)..."
                    className="w-28 px-2 py-0.5 mx-1 rounded-lg bg-white border border-sky-300 text-xs font-bold text-sky-900"
                  />{' '}
                  tonight, Minh?
                </p>
                <p>
                  <strong>Minh:</strong> I’m going to finish my story.
                </p>
                <p>
                  <strong>Ben:</strong>{' '}
                  <input
                    type="text"
                    value={u8t9Inputs[2] ?? ''}
                    onChange={(e) => {
                      setU8t9Inputs((p) => ({ ...p, 2: e.target.value }));
                      setU8t9Checked(null);
                    }}
                    placeholder="(2)..."
                    className="w-20 px-2 py-0.5 mx-1 rounded-lg bg-white border border-sky-300 text-xs font-bold text-sky-900"
                  />{' '}
                  story is it?
                </p>
                <p>
                  <strong>Minh:</strong> It’s Aladdin and the Magic{' '}
                  <input
                    type="text"
                    value={u8t9Inputs[3] ?? ''}
                    onChange={(e) => {
                      setU8t9Inputs((p) => ({ ...p, 3: e.target.value }));
                      setU8t9Checked(null);
                    }}
                    placeholder="(3)..."
                    className="w-20 px-2 py-0.5 mx-1 rounded-lg bg-white border border-sky-300 text-xs font-bold text-sky-900"
                  />
                  .
                </p>
              </div>

              {/* Dialogue 2 */}
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2.5 text-sm leading-relaxed text-slate-900">
                <p className="text-xs font-extrabold uppercase text-amber-800">
                  Hội thoại 2 · Nick & Harry
                </p>
                <p>
                  <strong>Nick:</strong> What do you like doing in your free{' '}
                  <input
                    type="text"
                    value={u8t9Inputs[4] ?? ''}
                    onChange={(e) => {
                      setU8t9Inputs((p) => ({ ...p, 4: e.target.value }));
                      setU8t9Checked(null);
                    }}
                    placeholder="(4)..."
                    className="w-20 px-2 py-0.5 mx-1 rounded-lg bg-white border border-amber-300 text-xs font-bold text-amber-950"
                  />
                  , Harry?
                </p>
                <p>
                  <strong>Harry:</strong> I like{' '}
                  <input
                    type="text"
                    value={u8t9Inputs[5] ?? ''}
                    onChange={(e) => {
                      setU8t9Inputs((p) => ({ ...p, 5: e.target.value }));
                      setU8t9Checked(null);
                    }}
                    placeholder="(5)..."
                    className="w-24 px-2 py-0.5 mx-1 rounded-lg bg-white border border-amber-300 text-xs font-bold text-amber-950"
                  />{' '}
                  fairy tales.
                </p>
                <p>
                  <strong>Nick:</strong> What is your favourite fairy tale?
                </p>
                <p>
                  <strong>Harry:</strong> It’s Snow{' '}
                  <input
                    type="text"
                    value={u8t9Inputs[6] ?? ''}
                    onChange={(e) => {
                      setU8t9Inputs((p) => ({ ...p, 6: e.target.value }));
                      setU8t9Checked(null);
                    }}
                    placeholder="(6)..."
                    className="w-20 px-2 py-0.5 mx-1 rounded-lg bg-white border border-amber-300 text-xs font-bold text-amber-950"
                  />{' '}
                  and the Seven Dwarfs.
                </p>
                <p>
                  <strong>Nick:</strong> Do you like reading ghost stories?
                </p>
                <p>
                  <strong>Harry:</strong> No, I{' '}
                  <input
                    type="text"
                    value={u8t9Inputs[7] ?? ''}
                    onChange={(e) => {
                      setU8t9Inputs((p) => ({ ...p, 7: e.target.value }));
                      setU8t9Checked(null);
                    }}
                    placeholder="(7)..."
                    className="w-20 px-2 py-0.5 mx-1 rounded-lg bg-white border border-amber-300 text-xs font-bold text-amber-950"
                  />
                  . They are very scary.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={checkU8t9Dialogue}
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold cursor-pointer"
              >
                Kiểm tra 7 chỗ trống
              </button>
              <button
                type="button"
                onClick={() => {
                  const filled: Record<number, string> = {};
                  U8_TASK9_BLANKS.forEach((b) => {
                    filled[b.index] = b.display;
                  });
                  setU8t9Inputs(filled);
                  setU8t9Checked(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-sm font-semibold cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                Xem đáp án
              </button>
              <button
                type="button"
                onClick={() => {
                  setU8t9Inputs({});
                  setU8t9Checked(null);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Làm lại
              </button>
            </div>

            {u8t9Checked !== null && (
              <div
                className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm border ${
                  u8t9Checked
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}
              >
                {u8t9Checked ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <p>
                  {u8t9Checked
                    ? "Hoàn hảo! (1) going to do · (2) What · (3) Lamp · (4) time · (5) reading · (6) White · (7) don't."
                    : 'Có một vài ô chưa khớp. Hãy đối chiếu với 7 từ trong Ngân hàng từ phía trên nhé!'}
                </p>
              </div>
            )}
          </section>

          <GuidedWritingBlock
            id="p60-u8t10-writing"
            title="Task 10 (Trang 60) · Viết về cuốn sách / câu chuyện yêu thích của bạn thân"
            instruction="Điền câu trả lời vào từng gợi ý để tạo đoạn văn hoàn chỉnh giới thiệu truyện và nhân vật chính."
            prompts={U8_TASK10_WRITING}
            onCompleteTask={onCompleteTask}
            muted={muted}
          />
        </div>
      )}

      {/* =========================================================
          PAGE 61: UNIT 9 OPENING + 20 ZOO VOCAB WORDS
         ========================================================= */}
      {activePage === 61 && (
        <div className="space-y-6">
          <section className="bg-emerald-50/70 border border-emerald-200 rounded-3xl p-6 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1.5">
                <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                  Mở đầu Unit 9 · Trang 61
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Unit 9: What did you see at the zoo?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 max-w-2xl">
                  (Bạn đã nhìn thấy gì ở sở thú?) — Làm quen <strong>20 từ vựng động vật hoang dã</strong> và hành động thú vị ở sở thú bằng thì Quá khứ đơn!
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <MiniPictureIcon iconKey="elephant" className="w-12 h-12" />
                <MiniPictureIcon iconKey="tiger" className="w-12 h-12" />
                <MiniPictureIcon iconKey="panda" className="w-12 h-12" />
              </div>
            </div>
          </section>

          <VocabCardsGrid
            words={U9_VOCAB_PAGE61}
            title="Từ vựng Unit 9 · Phần 1 (Trang 61 · 20 từ Động vật & Sở thú)"
          />
        </div>
      )}

      {/* =========================================================
          PAGE 62: UNIT 9 VOCAB PART 2 (13 WORDS) + ADVERB DIAGRAM + ZOO EXPLORER
         ========================================================= */}
      {activePage === 62 && (
        <div className="space-y-6">
          <VocabCardsGrid
            words={U9_VOCAB_PAGE62}
            title="Từ vựng Unit 9 · Phần 2 (Trang 62 · 13 từ Trạng từ -ly & Hành động)"
          />

          <ZooAdverbDiagram />

          {/* Grammar 1 & 2 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
            <h3 className="font-display text-xl font-extrabold text-slate-900">
              Ngữ pháp 1 & 2 (Trang 62): Kể chuyện đi sở thú bằng thì Quá khứ đơn
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-sky-50/70 border border-sky-200 p-4 space-y-2">
                <p className="text-xs font-extrabold uppercase text-sky-800">
                  1. Hỏi đã thấy con vật gì ở sở thú
                </p>
                <p className="font-display font-extrabold text-base text-slate-900">
                  What did you see at the zoo? → I saw + tên con vật.
                </p>
                <p className="text-xs text-slate-700">
                  Chú ý động từ bất quy tắc: <strong>see → saw</strong> (đã nhìn thấy).
                  <br />
                  VD: <em>I saw a baby elephant and two tigers.</em>
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 space-y-2">
                <p className="text-xs font-extrabold uppercase text-emerald-800">
                  2. Hỏi các con vật đã làm gì
                </p>
                <p className="font-display font-extrabold text-base text-slate-900">
                  What did the + con vật + do when you were there?
                </p>
                <p className="text-xs text-slate-700">
                  Trả lời: <strong>They + V quá khứ + trạng từ (-ly).</strong>
                  <br />
                  VD: <em>They roared loudly. / They moved quietly.</em>
                </p>
              </div>
            </div>

            {/* Interactive Zoo Safari Explorer */}
            <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-4 sm:p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-extrabold text-amber-950">
                  Chuyến tham quan Sở thú tương tác (Bấm chọn từng loài vật để nghe câu chuẩn!)
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {U9_ZOO_ANIMALS_PLAY.map((ani, idx) => (
                    <button
                      key={ani.key}
                      type="button"
                      onClick={() => setActiveZooIdx(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer ${
                        activeZooIdx === idx
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'bg-white border-amber-200 text-slate-800 hover:bg-amber-100'
                      }`}
                    >
                      {ani.plural}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-amber-200 p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <MiniPictureIcon iconKey={activeZoo.icon} className="w-16 h-16 shrink-0" />
                <div className="space-y-1 flex-1">
                  <p className="text-sm font-extrabold text-sky-900">
                    Q: What did the {activeZoo.plural} do when you were there?
                  </p>
                  <p className="text-base font-extrabold text-emerald-800">
                    A: They {activeZoo.actionPast}.
                  </p>
                  <p className="text-xs text-slate-600">
                    ({activeZoo.vi} {activeZoo.actionVi}.)
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    speakEnglish(
                      `What did the ${activeZoo.plural} do when you were there? They ${activeZoo.actionPast}.`,
                      0.88
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold cursor-pointer shrink-0"
                >
                  <Volume2 className="w-4 h-4" />
                  Nghe mô tả
                </button>
              </div>
            </div>
          </section>

          {/* Celebration card for completing Trang 1 -> 62 */}
          <section className="rounded-3xl bg-sky-50 border border-sky-200 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="font-display font-extrabold text-lg text-slate-900">
                  Tuyệt vời! Em đã khám phá trọn bộ chi tiết Trang 1 → Trang 62!
                </h3>
                <p className="text-sm text-slate-700">
                  Gồm trọn vẹn <strong>Unit 1 → Unit 8</strong> và mở đầu <strong>Unit 9</strong> với đầy đủ <strong>245 từ vựng</strong> phát âm 2 tốc độ, sơ đồ ngữ pháp và toàn bộ bài tập chấm điểm trực tiếp.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
