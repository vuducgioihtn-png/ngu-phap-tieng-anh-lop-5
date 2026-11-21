import type {
  DialogueOrderItem,
  FillItem,
  GuidedWritingPrompt,
  OrderSentenceItem,
  PageVocabWord,
  ParagraphBlank,
  QuizChoiceItem,
} from './pages1to20Data';
import type { PairMatchItem } from './pages21to41Data';

export interface PageMetaExtended {
  page: number;
  unit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  title: string;
  subtitle: string;
  sectionTag: string;
}

export interface LetterFillItem {
  id: string;
  pattern: string;
  answers: string[];
  meaningVi: string;
  hint: string;
}

export const PAGES_42_TO_62_INDEX: PageMetaExtended[] = [
  { page: 42, unit: 6, title: 'Unit 6 · Hỏi số tiết học, tần suất & Task 1 (Nối 7 cặp)', subtitle: 'How many lessons...? · How often...? · Bộ ghép thời khóa biểu & nối 7 cặp hỏi đáp', sectionTag: 'Ngữ pháp · Nối câu' },
  { page: 43, unit: 6, title: 'Unit 6 · Task 2 (7 câu trắc nghiệm) & Task 3 (Bài đọc của Minh)', subtitle: 'Luyện When / How many / How often / PE và đọc hiểu thời khóa biểu trường Nguyễn Trãi', sectionTag: 'Trắc nghiệm · Đọc' },
  { page: 44, unit: 6, title: 'Unit 6 · Task 4 (Câu 1–4: Nhìn tranh & lịch điền từ môn học)', subtitle: 'Nhận diện môn Science, ngày trong tuần (weekday), tần suất (once) và thứ Bảy', sectionTag: 'Trực quan' },
  { page: 45, unit: 6, title: 'Unit 6 · Task 4 (Câu 5), Task 5 (Jill ở TP.HCM) & Task 6 (Câu 1)', subtitle: 'Hoàn thành đoạn văn 5 tranh gợi ý về thời khóa biểu của Jill và bắt đầu xếp câu', sectionTag: 'Đọc · Viết câu' },
  { page: 46, unit: 6, title: 'Unit 6 · Task 6 (Xếp 7 câu) & Task 7 (Dịch sang Tiếng Anh)', subtitle: 'Ghép 7 câu chuẩn ngữ pháp Unit 6 và chọn bản dịch tiếng Anh chính xác', sectionTag: 'Viết câu · Dịch' },
  { page: 47, unit: 7, title: 'Unit 6 (Task 8 Viết TKB) & Mở đầu Unit 7: How do you learn English?', subtitle: 'Tự viết đoạn văn về thời khóa biểu của em và học 10 từ vựng 4 kỹ năng Tiếng Anh', sectionTag: 'Viết · Mở đầu Unit 7' },
  { page: 48, unit: 7, title: 'Unit 7 · Từ vựng học Tiếng Anh (19 từ mở rộng) & Ngữ pháp 1', subtitle: 'Đầy đủ từ vựng email, foreign, language, stick, practise và mẫu câu How do you learn...?', sectionTag: 'Từ vựng · Ngữ pháp' },
  { page: 49, unit: 7, title: 'Unit 7 · Ngữ pháp 2–3 (How do you practise / Why... Because) & Task 1', subtitle: 'Bảng 12 cụm cách học Tiếng Anh, xưởng luyện 4 kỹ năng và 10 từ điền chữ cái', sectionTag: 'Ngữ pháp · Chính tả' },
  { page: 50, unit: 7, title: 'Unit 7 · Task 1 (tiếp), Task 2 (Nối 4 kỹ năng), Task 3 (Phát âm) & Task 4', subtitle: 'Nối định nghĩa Read/Listen/Speak/Write và nghe phát âm phân biệt âm khác', sectionTag: 'Ngữ âm · Nối hình' },
  { page: 51, unit: 7, title: 'Unit 7 · Task 4 (Câu 3–7) & Task 5 (Đọc hiểu bạn Akiko Nhật Bản)', subtitle: 'Luyện mẫu câu practise V-ing by V-ing, because và đọc hiểu Đúng/Sai về Akiko', sectionTag: 'Trắc nghiệm · Đọc' },
  { page: 52, unit: 7, title: 'Unit 7 · Task 6 (Nhìn 4 tranh điền từ) & Task 7 (Bí kíp học từ mới)', subtitle: 'Điền comic, cartoons, write, talking và đoạn văn 5 hình về cách dán từ lên tường', sectionTag: 'Trực quan · Đọc' },
  { page: 53, unit: 7, title: 'Unit 7 · Task 8 (Đọc hiểu Linh, Lee & John) & Task 9 (Sắp xếp 4 câu)', subtitle: 'Trả lời 5 câu hỏi chi tiết về cách học của 3 bạn lớp 5A và ghép 4 câu hoàn chỉnh', sectionTag: 'Đọc hiểu · Viết câu' },
  { page: 54, unit: 8, title: 'Unit 7 (Viết cách bạn học TA) & Mở đầu Unit 8: What are you reading?', subtitle: 'Viết đoạn văn về bạn thân học Tiếng Anh và làm quen 6 từ cổ tích mở đầu Unit 8', sectionTag: 'Viết · Mở đầu Unit 8' },
  { page: 55, unit: 8, title: 'Unit 8 · Từ vựng Truyện cổ tích & Tính cách (18 từ) + Hiện tại tiếp diễn', subtitle: 'Học fairy tale, character, generous, hard-working, clever và mẫu câu What are you reading?', sectionTag: 'Từ vựng · Ngữ pháp' },
  { page: 56, unit: 8, title: 'Unit 8 · Hỏi tính cách nhân vật, xin mượn sách & Task 1 (10 câu Odd one out)', subtitle: 'Khám phá tính cách 6 nhân vật cổ tích, công thức May I borrow...? và phân loại 10 nhóm từ', sectionTag: 'Ngữ pháp · Từ vựng' },
  { page: 57, unit: 8, title: 'Unit 8 · Task 2 (Nối 8 câu), Task 3 (Doraemon), Task 4 (Hội thoại) & Task 5', subtitle: 'Nối tính cách nhân vật, đọc hiểu mèo máy Doraemon, xếp hội thoại và điền 12 từ chính tả', sectionTag: 'Tổng hợp Unit 8' },
  { page: 58, unit: 8, title: 'Unit 8 · Task 6 (Nhìn 4 tranh truyện cổ tích) & Task 7 (Sở thích của Bill)', subtitle: 'Điền tên truyện Snow White, The Fox and the Crow, Aladdin và đoạn văn 5 tranh', sectionTag: 'Trực quan · Đọc' },
  { page: 59, unit: 8, title: 'Unit 8 · Task 8 (Sắp xếp 8 câu về truyện cổ tích & tính cách)', subtitle: 'Luyện ghép 8 câu hỏi đáp chuẩn về nhân vật chính, tựa sách và tính cách', sectionTag: 'Viết câu' },
  { page: 60, unit: 8, title: 'Unit 8 · Task 9 (Hoàn thành 2 hội thoại) & Task 10 (Viết về cuốn sách yêu thích)', subtitle: 'Điền 7 chỗ trống hội thoại Ben–Minh & Nick–Harry và tự viết về truyện bạn thích', sectionTag: 'Tổng ôn Unit 8' },
  { page: 61, unit: 9, title: 'Unit 9 · Mở đầu & 20 từ vựng Sở thú – Động vật hoang dã (Phần 1)', subtitle: 'What did you see at the zoo? — Khám phá voi, hổ, khỉ, cá sấu, trăn, công, chuột túi', sectionTag: 'Từ vựng Unit 9' },
  { page: 62, unit: 9, title: 'Unit 9 · Từ vựng (13 từ trạng từ & hành động) + Ngữ pháp Sở thú Quá khứ', subtitle: 'Sơ đồ trạng từ đuôi -ly (loudly/slowly/quickly) & bộ khám phá động vật sở thú có loa nghe', sectionTag: 'Từ vựng · Ngữ pháp' },
];

// ================= UNIT 6 CONTINUATION (PAGES 42–47) =================

export const U6_TASK1_MATCH: PairMatchItem[] = [
  { id: 'p42-u6t1-1', left: '1. Do you like Music?', rightKey: 'd', rightLabel: 'd. Yes, I do. I like it very much.' },
  { id: 'p42-u6t1-2', left: '2. How often does she have PE?', rightKey: 'f', rightLabel: 'f. Twice a week.' },
  { id: 'p42-u6t1-3', left: '3. How many lessons do you have today?', rightKey: 'e', rightLabel: 'e. I have five.' },
  { id: 'p42-u6t1-4', left: "4. What's your favourite subject?", rightKey: 'a', rightLabel: "a. It's English." },
  { id: 'p42-u6t1-5', left: '5. What subjects do you have today?', rightKey: 'g', rightLabel: 'g. Vietnamese, Art and PE.' },
  { id: 'p42-u6t1-6', left: '6. Are you at school now?', rightKey: 'b', rightLabel: 'b. No, I am at home.' },
  { id: 'p42-u6t1-7', left: '7. Do you have school today?', rightKey: 'c', rightLabel: "c. No, I don't." },
];

export const U6_TASK2_MC: QuizChoiceItem[] = [
  { id: 'p43-u6t2-1', prompt: '1. _____ do you have English? – On Monday and Tuesday.', options: ['When', 'How long', 'How far', 'What time'], correctIndex: 0, explanation: 'Câu trả lời nêu ngày trong tuần (On Monday and Tuesday) → dùng “When” (Khi nào).' },
  { id: 'p43-u6t2-2', prompt: '2. Good _____ you!', options: ['for', 'with', 'of', 'from'], correctIndex: 0, explanation: 'Cụm từ giao tiếp quen thuộc: “Good for you!” = Thật tốt cho bạn / Giỏi lắm!' },
  { id: 'p43-u6t2-3', prompt: '3. _____ lessons do you have today? – We have four lessons.', options: ['How far', 'How much', 'How many', 'What time'], correctIndex: 2, explanation: '“lessons” là danh từ đếm được số nhiều → dùng “How many”.' },
  { id: 'p43-u6t2-4', prompt: '4. Mai goes to school _____ a week.', options: ['five time', 'fifth time', 'five times', 'five'], correctIndex: 2, explanation: 'Từ 3 lần trở lên dùng: số đếm + times + a week → “five times a week”.' },
  { id: 'p43-u6t2-5', prompt: '5. How many _____ does Hung have on Wednesday?', options: ['lesson', 'lessons', 'class', 'classroom'], correctIndex: 1, explanation: 'Sau “How many” luôn là danh từ số nhiều thêm -s → “lessons”.' },
  { id: 'p43-u6t2-6', prompt: '6. How often _____ you have Science? – I have it twice a week.', options: ['do', 'are', 'does', 'can'], correctIndex: 0, explanation: 'Động từ thường “have” đi với chủ ngữ “you” → mượn trợ động từ “do”.' },
  { id: 'p43-u6t2-7', prompt: '7. What does “PE” stand for?', options: ['Physics Education', 'Physical Education', 'Philosophy Education', 'Football English'], correctIndex: 1, explanation: 'PE là viết tắt của Physical Education (Giáo dục Thể chất / Môn Thể dục).' },
];

export const U6_TASK3_READING = {
  passage:
    "Minh is my best friend. He lives with his family in Ho Chi Minh City. He's in Class 5A, Nguyen Trai Primary School. Minh goes to school five days a week, from Monday to Friday. He has five lessons a day. Yesterday was Monday. He had Maths, Vietnamese, Art, Science and English. He has Maths, English, Music, IT and PE today. He has Maths four times a week. He often studies with a partner in Maths lessons. Learning Maths is really interesting to him.",
  passageVi:
    'Minh là bạn thân nhất của mình. Cậu sống cùng gia đình ở TP. Hồ Chí Minh và học lớp 5A trường Tiểu học Nguyễn Trãi. Minh đi học 5 ngày một tuần, từ Thứ Hai đến Thứ Sáu, mỗi ngày 5 tiết. Hôm qua là Thứ Hai, cậu học Toán, Tiếng Việt, Mỹ thuật, Khoa học và Tiếng Anh. Hôm nay (Thứ Ba) cậu học Toán, Tiếng Anh, Âm nhạc, Tin học và Thể dục. Cậu học Toán 4 lần/tuần và rất thích học Toán.',
  example: '0. Minh is a primary pupil. → True (Đúng).',
  statements: [
    { id: 'p43-u6t3-1', text: '1. He goes to school every day.', isTrue: false, explanation: 'Sai (False): Minh chỉ đi học 5 ngày/tuần từ Thứ Hai đến Thứ Sáu, nghỉ Thứ Bảy & Chủ Nhật.' },
    { id: 'p43-u6t3-2', text: '2. He had Maths, Vietnamese, Art, Science and PE yesterday.', isTrue: false, explanation: 'Sai (False): Hôm qua cậu học English (Tiếng Anh), không phải PE.' },
    { id: 'p43-u6t3-3', text: '3. He has Maths, English, Music, IT and PE on Tuesday.', isTrue: true, explanation: 'Đúng (True): Hôm qua là Thứ Hai (Yesterday was Monday) → hôm nay chính là Thứ Ba (Tuesday)!' },
    { id: 'p43-u6t3-4', text: '4. He likes learning Maths.', isTrue: true, explanation: 'Đúng (True): “Learning Maths is really interesting to him.”' },
  ],
};

export const U6_TASK4_LOOK_WRITE: FillItem[] = [
  { id: 'p44-u6t4-1', before: '1. I have English, Maths, Art and ', after: ' today.', hint: 'Môn Khoa học (S...)', iconKey: 'science', answers: ['science'], explanation: 'Hình ống nghiệm, nguyên tử, kính hiển vi → môn Science (Khoa học).' },
  { id: 'p44-u6t4-2', before: '2. Minh goes to school every ', after: '.', hint: 'Ngày trong tuần từ T2–T6 (w...)', iconKey: 'weekday5', answers: ['weekday', 'school day'], explanation: 'Lịch tích 5 ngày từ Thứ 2 đến Thứ 6 → every weekday (mỗi ngày trong tuần).' },
  { id: 'p44-u6t4-3', before: '3. Mary has Art ', after: ' a week.', hint: '1 lần một tuần (o...)', iconKey: 'calendar1', answers: ['once'], explanation: 'Chỉ tích duy nhất 1 ngày (Thứ Tư) → once a week.' },
  { id: 'p44-u6t4-4', before: '4. Today is Sunday. Yesterday was ', after: '.', hint: 'Ngày trước Chủ Nhật là Thứ Bảy (S...)', iconKey: 'saturday', answers: ['saturday'], explanation: 'Hôm nay là Chủ Nhật → Hôm qua là Thứ Bảy (Saturday).' },
  { id: 'p45-u6t4-5', before: '5. ', after: ' is our favourite subject.', hint: 'Môn Tiếng Anh (E...)', iconKey: 'english', answers: ['english'], explanation: 'Hình bảng chữ cái Aa Apple, Bb Banana → môn English.' },
];

export const U6_TASK5_JILL_BLANKS: ParagraphBlank[] = [
  { id: 'p45-u6t5-1', index: 1, answers: ['primary school', 'school'], hint: 'Trường tiểu học (Primary School)', iconKey: 'school' },
  { id: 'p45-u6t5-2', index: 2, answers: ['week'], hint: '5 ngày một tuần: five days a ___', iconKey: 'weekday5' },
  { id: 'p45-u6t5-3', index: 3, answers: ['friday'], hint: 'Thứ Sáu: from Monday to ___', iconKey: 'calendar1' },
  { id: 'p45-u6t5-4', index: 4, answers: ['maths', 'math'], hint: 'Môn Toán (M...)', iconKey: 'maths' },
  { id: 'p45-u6t5-5', index: 5, answers: ['twice'], hint: '2 lần (T3 & T5) → twice a week', iconKey: 'calendar2' },
];

export const U6_TASK6_ORDERS_P45: OrderSentenceItem[] = [
  { id: 'p45-u6t6-1', words: ['you', 'how', 'have', 'often', 'do', 'Maths', '?'], answer: 'How often do you have Maths?', meaning: 'Bạn học môn Toán mấy lần một tuần?', explanation: 'How often + do + you + have + Maths?' },
];

export const U6_TASK6_ORDERS_P46: OrderSentenceItem[] = [
  { id: 'p46-u6t6-2', words: ['have', 'week', 'I', 'twice', 'Music', 'a', '.'], answer: 'I have Music twice a week.', meaning: 'Mình có môn Âm nhạc 2 lần một tuần.', explanation: 'I + have + Music + twice a week.' },
  { id: 'p46-u6t6-3', words: ['you', 'how', 'today', 'lessons', 'have', 'many', 'do', '?'], answer: 'How many lessons do you have today?', meaning: 'Hôm nay bạn có bao nhiêu tiết học?', explanation: 'How many lessons + do + you + have + today?' },
  { id: 'p46-u6t6-4', words: ['to', 'goes', 'weekday', 'she', 'every', 'school', '.'], answer: 'She goes to school every weekday.', meaning: 'Cô ấy đi học vào mọi ngày trong tuần.', explanation: 'She + goes to school + every weekday.' },
  { id: 'p46-u6t6-5', words: ['your', "What's", 'favourite', "brother's", 'subject', 'younger', '?'], answer: "What's your younger brother's favourite subject?", meaning: 'Môn học yêu thích của em trai bạn là gì?', explanation: "What's + your younger brother's + favourite subject?" },
  { id: 'p46-u6t6-6', words: ['on', 'Monday', 'How', 'Vietnamese', 'does', 'your', 'many', 'lessons', 'sister', 'have', '?'], answer: 'How many Vietnamese lessons does your sister have on Monday?', meaning: 'Chị gái bạn có mấy tiết Tiếng Việt vào Thứ Hai?', explanation: 'How many Vietnamese lessons + does + your sister + have + on Monday?' },
  { id: 'p46-u6t6-7', words: ['Thao Trang', 'have', 'does', 'Science', 'How often', '?'], answer: 'How often does Thao Trang have Science?', meaning: 'Thảo Trang học môn Khoa học bao lâu một lần?', explanation: 'How often + does + Thao Trang + have + Science?' },
  { id: 'p46-u6t6-8', words: ['John', 'have', 'Maths', 'and', 'Jame', 'in', 'morning', 'the', '.'], answer: 'John and Jame have Maths in the morning.', meaning: 'John và Jame học môn Toán vào buổi sáng.', explanation: 'John and Jame + have Maths + in the morning.' },
];

export const U6_TASK7_TRANSLATE: QuizChoiceItem[] = [
  {
    id: 'p46-u6t7-1',
    prompt: '1. Nam có bao nhiêu bút chì màu? – Cậu ấy có 3 cây.',
    options: [
      'How many lesson does Nam have? – He has three.',
      'How many crayons does Nam have? – He have three.',
      'How many crayon does Nam have? – He has two.',
      'How many crayons does Nam have? – He has three.',
    ],
    correctIndex: 3,
    explanation: 'Sau “How many” dùng danh từ số nhiều “crayons”, và chủ ngữ “He” đi với “has”.',
  },
  {
    id: 'p46-u6t7-2',
    prompt: '2. Bạn có đến trường hàng ngày không?',
    options: [
      'Do you have school every day?',
      'Are you at school today?',
      'How often do you have English?',
      'Where are you now?',
    ],
    correctIndex: 0,
    explanation: '“have school” = có buổi học ở trường / đi học; “every day” = hàng ngày.',
  },
  {
    id: 'p46-u6t7-3',
    prompt: '3. Ami và những người bạn của cô ấy học bao nhiêu môn hôm nay?',
    options: [
      'What lessons do Ami and her friends have today?',
      'How many lesson does Ami and her friends have today?',
      'How many lessons do Ami and her friends have today?',
      'When do Ami and her friends have break time?',
    ],
    correctIndex: 2,
    explanation: 'Hỏi “bao nhiêu môn” dùng “How many lessons” (số nhiều) + chủ ngữ số nhiều “Ami and her friends” dùng trợ động từ “do”.',
  },
];

export const U6_TASK8_WRITING: GuidedWritingPrompt[] = [
  { id: 'p47-w0', question: "0. What's your name?", starter: 'My name is', sample: 'Minh', placeholder: 'Tên của em...' },
  { id: 'p47-w1', question: '1. How many lessons do you have a day?', starter: 'I have', sample: 'five lessons a day', placeholder: 'four / five lessons a day...' },
  { id: 'p47-w2', question: "2. What's your favourite subject?", starter: 'My favourite', sample: 'subject is English', placeholder: 'subject is Maths / English / Art...' },
  { id: 'p47-w3', question: '3. How often do you have your favourite subject?', starter: 'I have', sample: 'it four times a week', placeholder: 'it twice / four times a week...' },
  { id: 'p47-w4', question: '4. Do you like English?', starter: 'Yes,', sample: 'I do. I like it very much', placeholder: 'I do / No, I don’t...' },
];

// ================= UNIT 7 (PAGES 47–54) =================

export const U7_VOCAB_PAGE47: PageVocabWord[] = [
  { word: 'skill', ipa: '/skɪl/', pos: 'n', meaning: 'kĩ năng', group: '4 Kĩ năng Tiếng Anh', example: 'Reading is an important skill.', exampleVi: 'Đọc là một kỹ năng quan trọng.' },
  { word: 'speak', ipa: '/spiːk/', pos: 'v', meaning: 'nói', group: '4 Kĩ năng Tiếng Anh', example: 'I speak English every day.', exampleVi: 'Mình nói Tiếng Anh mỗi ngày.' },
  { word: 'listen', ipa: '/ˈlɪsn/', pos: 'v', meaning: 'nghe', group: '4 Kĩ năng Tiếng Anh', example: 'I listen to English songs.', exampleVi: 'Mình nghe các bài hát tiếng Anh.' },
  { word: 'read', ipa: '/riːd/', pos: 'v', meaning: 'đọc', group: '4 Kĩ năng Tiếng Anh', example: 'She reads English comic books.', exampleVi: 'Cô ấy đọc truyện tranh tiếng Anh.' },
  { word: 'write', ipa: '/raɪt/', pos: 'v', meaning: 'viết', group: '4 Kĩ năng Tiếng Anh', example: 'I write new words in my notebook.', exampleVi: 'Mình viết từ mới vào vở.' },
  { word: 'vocabulary', ipa: '/vəˈkæbjələri/', pos: 'n', meaning: 'từ vựng', group: 'Kiến thức ngôn ngữ', example: 'How do you learn vocabulary?', exampleVi: 'Bạn học từ vựng bằng cách nào?' },
  { word: 'grammar', ipa: '/ˈɡræmə(r)/', pos: 'n', meaning: 'ngữ pháp', group: 'Kiến thức ngôn ngữ', example: 'Grammar helps us write correct sentences.', exampleVi: 'Ngữ pháp giúp chúng ta viết câu đúng.' },
  { word: 'phonetics', ipa: '/fəˈnetɪks/', pos: 'n', meaning: 'ngữ âm', group: 'Kiến thức ngôn ngữ', example: 'We learn phonetics to pronounce well.', exampleVi: 'Chúng ta học ngữ âm để phát âm chuẩn.' },
  { word: 'notebook', ipa: '/ˈnəʊtbʊk/', pos: 'n', meaning: 'quyển vở ghi chép', group: 'Phương pháp học', example: 'Write new words in your notebook.', exampleVi: 'Hãy viết từ mới vào quyển vở của bạn.' },
  { word: 'story', ipa: '/ˈstɔːri/', pos: 'n', meaning: 'truyện, câu chuyện', group: 'Phương pháp học', example: 'Akiko reads English short stories.', exampleVi: 'Akiko đọc truyện ngắn tiếng Anh.' },
];

export const U7_VOCAB_PAGE48: PageVocabWord[] = [
  { word: 'email', ipa: '/ˈiːmeɪl/', pos: 'n', meaning: 'thư điện tử', group: 'Giao tiếp', example: 'She writes emails to her friends.', exampleVi: 'Bạn ấy viết email cho các bạn.' },
  { word: 'letter', ipa: '/ˈletə(r)/', pos: 'n', meaning: 'thư (viết tay)', group: 'Giao tiếp', example: 'I write letters to my pen friend.', exampleVi: 'Mình viết thư tay cho bạn qua thư.' },
  { word: 'newcomer', ipa: '/ˈnjuːkʌmə(r)/', pos: 'n', meaning: 'người mới đến', group: 'Giao tiếp', example: 'Akiko is a newcomer in Class 5A.', exampleVi: 'Akiko là học sinh mới của lớp 5A.' },
  { word: 'learn', ipa: '/lɜːn/', pos: 'v', meaning: 'học, học tập', group: 'Phương pháp học', example: 'How do you learn English?', exampleVi: 'Bạn học Tiếng Anh bằng cách nào?' },
  { word: 'song', ipa: '/sɒŋ/', pos: 'n', meaning: 'bài hát', group: 'Phương pháp học', example: 'He wants to sing English songs.', exampleVi: 'Cậu ấy muốn hát các bài hát tiếng Anh.' },
  { word: 'aloud', ipa: '/əˈlaʊd/', pos: 'adv', meaning: 'to, thành tiếng', group: 'Phương pháp học', example: 'Practise reading the words aloud.', exampleVi: 'Luyện đọc to các từ lên nhé.' },
  { word: 'lesson', ipa: '/ˈlesn/', pos: 'n', meaning: 'bài học, tiết học', group: 'Kiến thức ngôn ngữ', example: 'We have four English lessons a week.', exampleVi: 'Chúng mình có 4 tiết Tiếng Anh mỗi tuần.' },
  { word: 'foreign', ipa: '/ˈfɒrən/', pos: 'adj', meaning: 'nước ngoài, ngoại quốc', group: 'Giao tiếp', example: 'I talk with my foreign friends.', exampleVi: 'Mình trò chuyện với các bạn nước ngoài.' },
  { word: 'language', ipa: '/ˈlæŋɡwɪdʒ/', pos: 'n', meaning: 'ngôn ngữ', group: 'Kiến thức ngôn ngữ', example: 'What foreign language do you have at school?', exampleVi: 'Bạn học ngoại ngữ gì ở trường?' },
  { word: 'French', ipa: '/frentʃ/', pos: 'n', meaning: 'tiếng Pháp', group: 'Kiến thức ngôn ngữ', example: 'My sister can speak English and French.', exampleVi: 'Chị mình có thể nói tiếng Anh và tiếng Pháp.' },
  { word: 'favourite', ipa: '/ˈfeɪvərɪt/', pos: 'adj', meaning: 'ưa thích', group: 'Tính từ & Trạng từ', example: 'English is her favourite subject.', exampleVi: 'Tiếng Anh là môn học yêu thích của cô ấy.' },
  { word: 'understand', ipa: '/ˌʌndəˈstænd/', pos: 'v', meaning: 'hiểu', group: 'Giao tiếp', example: 'We can understand each other.', exampleVi: 'Chúng mình có thể hiểu nhau.' },
  { word: 'communication', ipa: '/kəˌmjuːnɪˈkeɪʃn/', pos: 'n', meaning: 'sự giao tiếp', group: 'Giao tiếp', example: 'English is necessary for communication.', exampleVi: 'Tiếng Anh rất cần thiết cho việc giao tiếp.' },
  { word: 'necessary', ipa: '/ˈnesəsəri/', pos: 'adj', meaning: 'cần thiết', group: 'Tính từ & Trạng từ', example: 'Learning vocabulary is necessary.', exampleVi: 'Học từ vựng là điều rất cần thiết.' },
  { word: 'free time', ipa: '/friː taɪm/', pos: 'n', meaning: 'thời gian rảnh', group: 'Tính từ & Trạng từ', example: 'I read comic books in my free time.', exampleVi: 'Mình đọc truyện tranh vào thời gian rảnh.' },
  { word: 'guess', ipa: '/ɡes/', pos: 'v', meaning: 'đoán', group: 'Phương pháp học', example: 'I try to guess its meaning.', exampleVi: 'Mình cố gắng đoán nghĩa của từ đó.' },
  { word: 'meaning', ipa: '/ˈmiːnɪŋ/', pos: 'n', meaning: 'ý nghĩa', group: 'Kiến thức ngôn ngữ', example: 'Do you know the meaning of this word?', exampleVi: 'Bạn có biết nghĩa của từ này không?' },
  { word: 'stick', ipa: '/stɪk/', pos: 'v', meaning: 'gắn, dán', group: 'Phương pháp học', example: 'I stick new words on my bedroom wall.', exampleVi: 'Mình dán từ mới lên tường phòng ngủ.' },
  { word: 'practise', ipa: '/ˈpræktɪs/', pos: 'v', meaning: 'thực hành, luyện tập', group: 'Phương pháp học', example: 'How do you practise speaking?', exampleVi: 'Bạn luyện nói bằng cách nào?', tip: 'Sau practise luôn dùng động từ thêm -ing!' },
];

export const U7_STUDY_PHRASES = [
  { en: 'learn to speak English', vi: 'học nói tiếng Anh', skill: 'Speaking' },
  { en: 'learn English vocabulary', vi: 'học từ vựng tiếng Anh', skill: 'Vocabulary' },
  { en: 'learn English grammar', vi: 'học ngữ pháp tiếng Anh', skill: 'Grammar' },
  { en: 'learn to write English', vi: 'học viết tiếng Anh', skill: 'Writing' },
  { en: 'learn English pronunciation', vi: 'học phát âm tiếng Anh', skill: 'Speaking' },
  { en: 'practise speaking every day', vi: 'luyện nói mỗi ngày', skill: 'Speaking' },
  { en: 'practise making sentences', vi: 'luyện đặt câu', skill: 'Writing' },
  { en: 'practise writing new words', vi: 'luyện viết từ mới', skill: 'Writing' },
  { en: 'watch cartoons on TV', vi: 'xem phim hoạt hình trên TV', skill: 'Listening' },
  { en: 'write letters to pen friends', vi: 'viết thư cho bạn qua thư', skill: 'Writing' },
  { en: 'talk with foreign friends', vi: 'nói chuyện với bạn nước ngoài', skill: 'Speaking' },
  { en: 'read English comic books', vi: 'đọc truyện tranh tiếng Anh', skill: 'Reading' },
];

export const U7_TASK1_LETTERS_P49: LetterFillItem[] = [
  { id: 'p49-u7t1-1', pattern: '_ r a c t i _ e', answers: ['practise', 'practice'], meaningVi: 'luyện tập, thực hành', hint: 'Bắt đầu bằng chữ p' },
  { id: 'p49-u7t1-2', pattern: 'S _ e a _', answers: ['speak'], meaningVi: 'nói (tiếng Anh)', hint: 's + p + e + a + k' },
  { id: 'p49-u7t1-3', pattern: 'W _ i t _', answers: ['write'], meaningVi: 'viết', hint: 'w + r + i + t + e' },
  { id: 'p49-u7t1-4', pattern: 'E _ a i l', answers: ['email'], meaningVi: 'thư điện tử', hint: 'Thiếu chữ m' },
  { id: 'p49-u7t1-5', pattern: '_ e a _', answers: ['read'], meaningVi: 'đọc (sách, truyện)', hint: 'r + e + a + d' },
  { id: 'p49-u7t1-6', pattern: 'H _ b b _', answers: ['hobby'], meaningVi: 'sở thích', hint: 'h + o + b + b + y' },
  { id: 'p49-u7t1-7', pattern: '_ e s _ o n', answers: ['lesson'], meaningVi: 'tiết học, bài học', hint: 'l + e + s + s + o + n' },
  { id: 'p49-u7t1-8', pattern: 'L i _ t e _', answers: ['listen'], meaningVi: 'nghe', hint: 'l + i + s + t + e + n' },
  { id: 'p49-u7t1-9', pattern: 'T _ l k', answers: ['talk'], meaningVi: 'nói chuyện', hint: 'Thiếu chữ a' },
  { id: 'p49-u7t1-10', pattern: 'R _ a d', answers: ['road', 'read'], meaningVi: 'con đường (hoặc đọc)', hint: 'r + o + a + d (hoặc read)' },
];

export const U7_TASK1_LETTERS_P50: LetterFillItem[] = [
  { id: 'p50-u7t1-11', pattern: 'W _ r d', answers: ['word'], meaningVi: 'từ (vựng)', hint: 'Thiếu chữ o' },
  { id: 'p50-u7t1-12', pattern: 'L e a _ n', answers: ['learn'], meaningVi: 'học', hint: 'Thiếu chữ r' },
  { id: 'p50-u7t1-13', pattern: 'V _ c a b _ l a r y', answers: ['vocabulary'], meaningVi: 'từ vựng', hint: 'Thiếu chữ o và u' },
  { id: 'p50-u7t1-14', pattern: 'F o _ e i _ n e r', answers: ['foreigner'], meaningVi: 'người nước ngoài', hint: 'Thiếu chữ r và g' },
  { id: 'p50-u7t1-15', pattern: 'L _ n g _ a g e', answers: ['language'], meaningVi: 'ngôn ngữ', hint: 'Thiếu chữ a và u' },
];

export const U7_TASK2_MATCH: PairMatchItem[] = [
  { id: 'p50-u7t2-0', left: '0 (Mẫu). speaking or telling someone something, using words', leftVi: 'nói ra hoặc kể điều gì bằng lời nói', rightKey: 'say', rightLabel: 'Say (Nói ra)', iconKey: 'say', isExample: true },
  { id: 'p50-u7t2-1', left: '1. looking at and understanding the meaning of letters, words, etc.', leftVi: 'nhìn và hiểu nghĩa của chữ cái, từ ngữ', rightKey: 'read', rightLabel: 'Read (Đọc)', iconKey: 'read' },
  { id: 'p50-u7t2-2', left: '2. paying attention to something or someone that you can hear', leftVi: 'chú ý lắng nghe âm thanh hoặc giọng nói', rightKey: 'listen', rightLabel: 'Listen (Nghe)', iconKey: 'listen' },
  { id: 'p50-u7t2-3', left: '3. talking to someone about something', leftVi: 'trò chuyện, giao tiếp với ai đó', rightKey: 'speak', rightLabel: 'Speak (Nói)', iconKey: 'speak' },
  { id: 'p50-u7t2-4', left: '4. making letters, words, numbers with a pen, pencil, etc.', leftVi: 'tạo ra chữ cái, từ, số bằng bút mực hay bút chì', rightKey: 'write', rightLabel: 'Write (Viết)', iconKey: 'write' },
];

export const U7_TASK3_PHONETICS: QuizChoiceItem[] = [
  { id: 'p50-u7t3-1', prompt: '1. Chọn từ có nhóm "ea" phát âm khác:', options: ['learn (/ɜː/)', 'read (/iː/)', 'speak (/iː/)', 'meaning (/iː/)'], correctIndex: 0, explanation: '“learn” /lɜːn/ đọc âm /ɜː/; read, speak, meaning đều đọc âm /iː/ dài.' },
  { id: 'p50-u7t3-2', prompt: '2. Chọn từ có chữ "i" phát âm khác:', options: ['write (/aɪ/)', 'twice (/aɪ/)', 'stick (/ɪ/)', 'while (/aɪ/)'], correctIndex: 2, explanation: '“stick” /stɪk/ đọc âm /ɪ/ ngắn; write, twice, while đều đọc /aɪ/.' },
  { id: 'p50-u7t3-3', prompt: '3. Chọn từ có phần gạch chân phát âm khác:', options: ['few (/juː/)', 'new (/juː/)', 'knew (/juː/)', 'email (/iː/)'], correctIndex: 3, explanation: '“email” đọc âm /iː/; few, new, knew đều có vần /juː/.' },
  { id: 'p50-u7t3-4', prompt: '4. Chọn từ có nhóm "oo" phát âm khác:', options: ['room (/uː/)', 'book (/ʊ/)', 'school (/uː/)', 'soon (/uː/)'], correctIndex: 1, explanation: '“book” /bʊk/ đọc âm /ʊ/ ngắn; room, school, soon đọc âm /uː/ dài.' },
];

export const U7_TASK4_MC: QuizChoiceItem[] = [
  { id: 'p50-u7t4-1', prompt: '1. What foreign _____ do you have at school?', options: ['subject', 'song', 'language', 'book'], correctIndex: 2, explanation: '“foreign language” = ngoại ngữ (ngôn ngữ nước ngoài).' },
  { id: 'p50-u7t4-2', prompt: '2. I want _____ with my foreign friend Tony.', options: ['to talking', 'talking', 'talk', 'to talk'], correctIndex: 3, explanation: 'Công thức cố định: want + to + V nguyên mẫu → “want to talk”.' },
  { id: 'p51-u7t4-3', prompt: '3. They write emails to _____ other every day.', options: ['every', 'each', 'one', 'they'], correctIndex: 1, explanation: 'Cụm từ cố định: “each other” = lẫn nhau (viết email cho nhau).' },
  { id: 'p51-u7t4-4', prompt: '4. How do you _____ listening? – I watch English cartoons on TV.', options: ['practise', 'learn', 'want', 'have'], correctIndex: 0, explanation: 'Đi với V-ing (listening) → dùng “practise” (practise listening).' },
  { id: 'p51-u7t4-5', prompt: '5. She practises _____ by _____ English short stories.', options: ['reading / read', 'reading / reading', 'read / reading', 'read / read'], correctIndex: 1, explanation: 'Sau cả “practise” và giới từ “by” đều dùng V-ing → reading / reading.' },
  { id: 'p51-u7t4-6', prompt: '6. We learn English _____ we want to read comic books.', options: ['because', 'so', 'and', 'why'], correctIndex: 0, explanation: 'Nêu lý do học Tiếng Anh → dùng liên từ “because” (bởi vì).' },
  { id: 'p51-u7t4-7', prompt: '7. When I see a new word, I try to guess its _____.', options: ['name', 'vocabulary', 'meaning', 'language'], correctIndex: 2, explanation: '“guess its meaning” = đoán nghĩa của từ đó.' },
];

export const U7_TASK5_READING = {
  passage:
    "Hello, I'm Quan. I have a friend Akiko. She is from Japan. Her favourite subject is English. She practises listening by watching English cartoons on TV every day. She learns to read by reading English short stories. She writes emails to me every evening. We are both happy because we can understand each other. She says that she learns English because she wants to become a tourist guide.",
  passageVi:
    'Xin chào, mình là Quân. Mình có cô bạn tên Akiko đến từ Nhật Bản. Môn yêu thích của bạn ấy là Tiếng Anh. Bạn ấy luyện nghe bằng cách xem hoạt hình tiếng Anh trên TV mỗi ngày, luyện đọc bằng cách đọc truyện ngắn tiếng Anh, và viết email cho mình mỗi tối. Cả hai rất vui vì hiểu được nhau. Akiko học Tiếng Anh vì muốn trở thành hướng dẫn viên du lịch.',
  example: '0. Akiko comes from Japan. → True (Đúng).',
  statements: [
    { id: 'p51-u7t5-1', text: '1. Akiko watches English cartoons on TV to practise listening.', isTrue: true, explanation: 'Đúng (True): “She practises listening by watching English cartoons on TV every day.”' },
    { id: 'p51-u7t5-2', text: '2. She reads detective stories in English to practise reading.', isTrue: false, explanation: 'Sai (False): Bạn ấy đọc truyện ngắn (“English short stories”), không phải truyện trinh thám.' },
    { id: 'p51-u7t5-3', text: "3. She can't understand Quan's emails.", isTrue: false, explanation: 'Sai (False): Hai bạn có thể hiểu nhau (“we can understand each other”).' },
    { id: 'p51-u7t5-4', text: '4. She learns English to be a tourist guide.', isTrue: true, explanation: 'Đúng (True): “because she wants to become a tourist guide.”' },
  ],
};

export const U7_TASK6_LOOK_WRITE: FillItem[] = [
  { id: 'p52-u7t6-1', before: '1. I love reading English ', after: ' books.', hint: 'Truyện tranh Doraemon: ___ books (c...)', iconKey: 'comic', answers: ['comic'], explanation: 'comic books = truyện tranh.' },
  { id: 'p52-u7t6-2', before: '2. I practise listening by watching ', after: '.', hint: 'Phim hoạt hình số nhiều (c...)', iconKey: 'cartoon', answers: ['cartoons', 'cartoon'], explanation: 'watching cartoons = xem phim hoạt hình.' },
  { id: 'p52-u7t6-3', before: '3. I learn to ', after: ' by writing emails to my pen friend.', hint: 'Học viết: learn to ___ (w...)', iconKey: 'write', answers: ['write'], explanation: 'Sau “learn to” dùng động từ nguyên mẫu “write”.' },
  { id: 'p52-u7t6-4', before: '4. I learn to speak by ', after: ' with my foreign friends.', hint: 'Nói chuyện thêm -ing sau by (t...)', iconKey: 'talk', answers: ['talking', 'speaking'], explanation: 'Sau giới từ “by” dùng V-ing → talking with my foreign friends.' },
];

export const U7_TASK7_BLANKS: ParagraphBlank[] = [
  { id: 'p52-u7t7-1', index: 1, answers: ['word'], hint: 'Từ mới: a new ___ (w...)', iconKey: 'english' },
  { id: 'p52-u7t7-2', index: 2, answers: ['notebook'], hint: 'Quyển vở ghi chép (n...)', iconKey: 'notebook' },
  { id: 'p52-u7t7-3', index: 3, answers: ['kitchen'], hint: 'Nhà bếp (k...)', iconKey: 'kitchen' },
  { id: 'p52-u7t7-4', index: 4, answers: ['reading'], hint: 'Sau practise dùng V-ing: ___ them aloud', iconKey: 'read' },
  { id: 'p52-u7t7-5', index: 5, answers: ['singing'], hint: 'Sau by dùng V-ing: ___ English songs', iconKey: 'sing' },
];

export const U7_TASK8_PASSAGE =
  "My name is Linh. I'm a pupil at Kim Dong Primary School. I'm in class 5A with Lee and John. I love reading comic books. I often read them in my free time. When I see a new word, I try to guess its meaning. I write the word in my notebook and say it many times. I often stick new words on my bedroom walls and practise reading them aloud. Lee and John love learning English too. We often learn to speak English by talking with our foreign friends in our free time. Lee is very good at English. She usually practises listening by watching cartoons on TV. She learns to write by writing emails to her friends every day. John loves reading. He goes to the library twice or three times a week. He usually reads English books to practise reading. They always help me to learn English. We are happy because we can understand each other. English is necessary for communication.";

export const U7_TASK8_PASSAGE_VI =
  'Mình là Linh, học lớp 5A trường Tiểu học Kim Đồng cùng Lee và John. Mình rất thích đọc truyện tranh lúc rảnh. Khi gặp từ mới, mình cố đoán nghĩa, viết vào vở, đọc nhiều lần và dán lên tường phòng ngủ để đọc to. Chúng mình luyện nói bằng cách trò chuyện với bạn nước ngoài. Lee rất giỏi Tiếng Anh: bạn ấy xem hoạt hình để luyện nghe và viết email hằng ngày để luyện viết. John thích đọc nên đi thư viện 2–3 lần một tuần. Tiếng Anh rất cần thiết cho giao tiếp.';

export const U7_TASK8_QA: QuizChoiceItem[] = [
  { id: 'p53-u7t8-1', prompt: '1. What does Linh do when she sees a new word?', options: ['She skips it immediately.', 'She tries to guess its meaning, writes it in her notebook and says it many times.', 'She watches cartoons on TV.', 'She goes to the library.'], correctIndex: 1, explanation: 'Đoạn văn ghi: “When I see a new word, I try to guess its meaning. I write the word in my notebook and say it many times.”' },
  { id: 'p53-u7t8-2', prompt: '2. How do they learn to speak English?', options: ['By writing emails every day.', 'By talking with their foreign friends in their free time.', 'By sticking words on the wall.', 'By going to the book fair.'], correctIndex: 1, explanation: '“We often learn to speak English by talking with our foreign friends in our free time.”' },
  { id: 'p53-u7t8-3', prompt: '3. Who is good at English?', options: ['Lee is good at English.', 'Only John is good at English.', 'Linh’s brother is good at English.', 'Nobody in class 5A.'], correctIndex: 0, explanation: 'Trong bài nêu rõ: “Lee is very good at English.”' },
  { id: 'p53-u7t8-4', prompt: '4. How often does John go to the library?', options: ['Once a week.', 'Every single day.', 'Twice or three times a week.', 'Once a month.'], correctIndex: 2, explanation: '“He goes to the library twice or three times a week.”' },
  { id: 'p53-u7t8-5', prompt: '5. Is English necessary for communication?', options: ['Yes, it is.', "No, it isn't.", 'Yes, they are.', "No, they aren't."], correctIndex: 0, explanation: 'Câu cuối bài: “English is necessary for communication.” → Yes, it is.' },
];

export const U7_TASK9_ORDERS: OrderSentenceItem[] = [
  { id: 'p53-u7t9-1', words: ['do', 'you', 'how', 'learn', 'vocabulary', '?'], answer: 'How do you learn vocabulary?', meaning: 'Bạn học từ vựng bằng cách nào?', explanation: 'How + do + you + learn + vocabulary?' },
  { id: 'p53-u7t9-2', words: ['how', 'speaking', 'you', 'practise', 'do', '?'], answer: 'How do you practise speaking?', meaning: 'Bạn luyện nói bằng cách nào?', explanation: 'How + do + you + practise + speaking?' },
  { id: 'p53-u7t9-3', words: ['on', 'I', 'stick', 'new', 'walls', 'bedroom', 'often', 'words', 'my', 'and', 'reading', 'them', 'practise', 'aloud', '.'], answer: 'I often stick new words on my bedroom walls and practise reading them aloud.', meaning: 'Mình thường dán từ mới lên tường phòng ngủ và luyện đọc to chúng.', explanation: 'I often stick new words on my bedroom walls + and practise reading them aloud.' },
  { id: 'p53-u7t9-4', words: ['learns', 'She', 'writing', 'friends', 'to', 'write', 'by', 'emails', 'to', 'her', 'day', 'every', '.'], answer: 'She learns to write by writing emails to her friends every day.', meaning: 'Cô ấy học viết bằng cách viết email cho bạn mỗi ngày.', explanation: 'She learns to write + by writing emails to her friends + every day.' },
];

export const U7_WRITING_P54: GuidedWritingPrompt[] = [
  { id: 'p54-w0', question: "0. What's his/her name?", starter: 'My friend is', sample: 'Hoa', placeholder: 'Tên bạn của em...' },
  { id: 'p54-w1', question: '1. How does he/she practise reading?', starter: 'He/She', sample: 'reads English comic books and short stories', placeholder: 'reads English comic books...' },
  { id: 'p54-w2', question: '2. How does he/she practise speaking?', starter: 'He/She', sample: 'talks with foreign friends every weekend', placeholder: 'speaks English every day / talks with...' },
  { id: 'p54-w3', question: '3. How does he/she learn vocabulary?', starter: 'He/She', sample: 'writes new words in a notebook and reads them aloud', placeholder: 'writes new words / sticks them on the wall...' },
  { id: 'p54-w4', question: '4. Why does he/she learn English?', starter: 'He/She learns English because', sample: 'she wants to sing English songs and travel around the world', placeholder: 'he/she wants to...' },
];

// ================= UNIT 8 (PAGES 54–60) =================

export const U8_VOCAB_PAGE54: PageVocabWord[] = [
  { word: 'crow', ipa: '/krəʊ/', pos: 'n', meaning: 'con quạ', group: 'Nhân vật & Truyện', example: 'She is reading The Fox and the Crow.', exampleVi: 'Cô ấy đang đọc truyện Con Cáo và Con Quạ.', tip: 'Lưu ý: crow = con quạ (khác với crown = vương miện).' },
  { word: 'fox', ipa: '/fɒks/', pos: 'n', meaning: 'con cáo', group: 'Nhân vật & Truyện', example: 'The Fox is very clever.', exampleVi: 'Con cáo rất khôn ngoan.' },
  { word: 'dwarf', ipa: '/dwɔːf/', pos: 'n', meaning: 'người lùn', group: 'Nhân vật & Truyện', example: 'Snow White and the Seven Dwarfs is my favourite fairy tale.', exampleVi: 'Nàng Bạch Tuyết và Bảy Chú Lùn là truyện cổ tích mình thích.' },
  { word: 'ghost', ipa: '/ɡəʊst/', pos: 'n', meaning: 'con ma', group: 'Nhân vật & Truyện', example: "I'm reading a ghost story.", exampleVi: 'Mình đang đọc một câu chuyện ma.' },
  { word: 'story', ipa: '/ˈstɔːri/', pos: 'n', meaning: 'câu chuyện', group: 'Thể loại sách', example: 'It is a story about two Vietnamese girls.', exampleVi: 'Đó là câu chuyện về hai cô gái Việt Nam.' },
  { word: 'chess', ipa: '/tʃes/', pos: 'n', meaning: 'cờ vua', group: 'Giải trí', example: 'He plays chess in his free time.', exampleVi: 'Cậu ấy chơi cờ vua vào lúc rảnh.' },
];

export const U8_VOCAB_PAGE55: PageVocabWord[] = [
  { word: 'Halloween', ipa: '/ˌhæləʊˈiːn/', pos: 'n', meaning: 'lễ hội Halloween', group: 'Thể loại sách', example: 'Nick is reading a Halloween story.', exampleVi: 'Nick đang đọc một câu chuyện Halloween.' },
  { word: 'scary', ipa: '/ˈskeəri/', pos: 'adj', meaning: 'đáng sợ', group: 'Tính cách & Miêu tả', example: 'Ghost stories are very scary.', exampleVi: 'Truyện ma rất đáng sợ.' },
  { word: 'fairy tale', ipa: '/ˈfeəri teɪl/', pos: 'n', meaning: 'truyện cổ tích', group: 'Thể loại sách', example: 'Do you like reading fairy tales?', exampleVi: 'Bạn có thích đọc truyện cổ tích không?' },
  { word: 'short story', ipa: '/ʃɔːt ˈstɔːri/', pos: 'n', meaning: 'truyện ngắn', group: 'Thể loại sách', example: 'I like reading funny short stories.', exampleVi: 'Mình thích đọc truyện ngắn hài hước.' },
  { word: 'I see', ipa: '/aɪ siː/', pos: 'phr', meaning: 'mình hiểu rồi', group: 'Giao tiếp', example: 'I see. What are you reading now?', exampleVi: 'Mình hiểu rồi. Bây giờ bạn đang đọc gì thế?' },
  { word: 'character', ipa: '/ˈkærəktə(r)/', pos: 'n', meaning: 'nhân vật', group: 'Nhân vật & Truyện', example: 'Who is the main character?', exampleVi: 'Nhân vật chính là ai?' },
  { word: 'main', ipa: '/meɪn/', pos: 'adj', meaning: 'chính, quan trọng nhất', group: 'Nhân vật & Truyện', example: 'Doraemon is the main character.', exampleVi: 'Doraemon là nhân vật chính.' },
  { word: 'borrow', ipa: '/ˈbɒrəʊ/', pos: 'v', meaning: 'mượn (của ai đó)', group: 'Giao tiếp', example: 'May I borrow your comic book?', exampleVi: 'Mình có thể mượn truyện tranh của bạn không?' },
  { word: 'finish', ipa: '/ˈfɪnɪʃ/', pos: 'v', meaning: 'hoàn thành, đọc xong', group: 'Giao tiếp', example: "I'm going to finish my book tonight.", exampleVi: 'Mình sẽ đọc xong cuốn sách tối nay.' },
  { word: 'generous', ipa: '/ˈdʒenərəs/', pos: 'adj', meaning: 'hào phóng, rộng lượng', group: 'Tính cách & Miêu tả', example: 'The seven dwarfs are short and generous.', exampleVi: 'Bảy chú lùn thấp bé và rất hào phóng.' },
  { word: 'hard-working', ipa: '/ˌhɑːd ˈwɜːkɪŋ/', pos: 'adj', meaning: 'chăm chỉ', group: 'Tính cách & Miêu tả', example: 'Mai An Tiem is very hard-working.', exampleVi: 'Mai An Tiêm rất chăm chỉ.' },
  { word: 'kind', ipa: '/kaɪnd/', pos: 'adj', meaning: 'tốt bụng', group: 'Tính cách & Miêu tả', example: 'Snow White is beautiful and kind.', exampleVi: 'Nàng Bạch Tuyết xinh đẹp và tốt bụng.' },
  { word: 'gentle', ipa: '/ˈdʒentl/', pos: 'adj', meaning: 'hiền lành, dịu dàng', group: 'Tính cách & Miêu tả', example: 'Tam is a gentle girl.', exampleVi: 'Tấm là một cô gái hiền lành.' },
  { word: 'clever', ipa: '/ˈklevə(r)/', pos: 'adj', meaning: 'khôn khéo, thông minh', group: 'Tính cách & Miêu tả', example: 'Aladdin is a clever boy.', exampleVi: 'Aladdin là một cậu bé thông minh.' },
  { word: 'favourite', ipa: '/ˈfeɪvərɪt/', pos: 'adj', meaning: 'ưa thích', group: 'Tính cách & Miêu tả', example: "What's your favourite book?", exampleVi: 'Cuốn sách yêu thích của bạn là gì?' },
  { word: 'funny', ipa: '/ˈfʌni/', pos: 'adj', meaning: 'vui tính, hài hước', group: 'Tính cách & Miêu tả', example: 'I like reading funny stories.', exampleVi: 'Mình thích đọc những câu chuyện hài hước.' },
  { word: 'beautiful', ipa: '/ˈbjuːtɪfl/', pos: 'adj', meaning: 'xinh đẹp', group: 'Tính cách & Miêu tả', example: 'Princess Jasmine is very beautiful.', exampleVi: 'Công chúa Jasmine rất xinh đẹp.' },
  { word: 'policeman', ipa: '/pəˈliːsmən/', pos: 'n', meaning: 'chú cảnh sát', group: 'Nhân vật & Truyện', example: 'The policeman helps people in the city.', exampleVi: 'Chú cảnh sát giúp đỡ mọi người trong thành phố.' },
];

export const U8_CHARACTER_CARDS = [
  { name: 'Mai An Tiem', story: 'The Story of Mai An Tiem', traitEn: 'hard-working', traitVi: 'chăm chỉ, chịu khó', sentence: "What's An Tiem like? He's hard-working." },
  { name: 'Snow White', story: 'Snow White and the Seven Dwarfs', traitEn: 'beautiful and kind', traitVi: 'xinh đẹp và tốt bụng', sentence: "What's Snow White like? She's beautiful and kind." },
  { name: 'Seven Dwarfs', story: 'Snow White and the Seven Dwarfs', traitEn: 'short and generous', traitVi: 'nhỏ bé và hào phóng', sentence: 'What are the seven Dwarfs like? They are short and generous.' },
  { name: 'Aladdin', story: 'Aladdin and the Magic Lamp', traitEn: 'clever and brave', traitVi: 'thông minh và dũng cảm', sentence: "What's Aladdin like? He's a clever boy." },
  { name: 'Tam', story: 'The Story of Tam and Cam', traitEn: 'gentle and kind', traitVi: 'hiền lành và tốt bụng', sentence: "What's Tam like? She's gentle and kind." },
  { name: "Cam's mother", story: 'The Story of Tam and Cam', traitEn: 'cruel', traitVi: 'độc ác, cay nghiệt', sentence: "What's Cam's mother like? She's a cruel woman." },
];

export const U8_TASK1_ODD: QuizChoiceItem[] = [
  { id: 'p56-u8t1-1', prompt: '1. Chọn từ khác loại:', options: ['Tam', 'Cam', 'Aladdin', 'character'], correctIndex: 3, explanation: '“character” là danh từ chung (nhân vật); Tam, Cam, Aladdin là tên riêng nhân vật.' },
  { id: 'p56-u8t1-2', prompt: '2. Chọn từ khác loại:', options: ['book', 'fairy tale', 'comic book', 'ghost story'], correctIndex: 0, explanation: '“book” là sách nói chung; 3 cụm còn lại là các thể loại truyện cụ thể.' },
  { id: 'p56-u8t1-3', prompt: '3. Chọn từ khác loại:', options: ['hard-working', 'like', 'kind', 'gentle'], correctIndex: 1, explanation: '“like” (thích) là động từ; hard-working, kind, gentle là tính từ chỉ tính cách.' },
  { id: 'p56-u8t1-4', prompt: '4. Chọn từ khác loại:', options: ['generous', 'cruel', 'kind', 'clever'], correctIndex: 1, explanation: '“cruel” (độc ác) là tính cách xấu; generous, kind, clever đều là tính cách tốt.' },
  { id: 'p56-u8t1-5', prompt: '5. Chọn từ khác loại:', options: ['read', 'had', 'bought', 'borrowed'], correctIndex: 3, explanation: '“borrowed” là quá khứ có quy tắc thêm -ed; read, had, bought là động từ bất quy tắc.' },
  { id: 'p56-u8t1-6', prompt: '6. Chọn từ khác loại:', options: ['fairy tale', 'funny story', 'short story', 'book fair'], correctIndex: 3, explanation: '“book fair” (hội sách) là sự kiện; 3 cụm kia là thể loại truyện.' },
  { id: 'p56-u8t1-7', prompt: '7. Chọn từ khác loại:', options: ['Magic Lamp', 'Snow White', 'Aladdin', 'Princess Jasmine'], correctIndex: 0, explanation: '“Magic Lamp” (Cây đèn thần) là đồ vật; 3 đáp án kia là nhân vật người.' },
  { id: 'p56-u8t1-8', prompt: '8. Chọn từ khác loại:', options: ['Tam', 'Cinderella', 'Cam', "Cam's mother"], correctIndex: 1, explanation: '“Cinderella” là nhân vật truyện cổ tích nước ngoài; 3 nhân vật kia thuộc truyện Tấm Cám.' },
  { id: 'p56-u8t1-9', prompt: '9. Chọn từ khác loại:', options: ['Malaysian', 'Vietnamese', 'Japanese', 'England'], correctIndex: 3, explanation: '“England” là tên quốc gia; Malaysian, Vietnamese, Japanese là quốc tịch.' },
  { id: 'p56-u8t1-10', prompt: '10. Chọn từ khác loại:', options: ['An Tiem', 'Hung King', 'Watermelon', 'Fox'], correctIndex: 2, explanation: '“Watermelon” (quả dưa hấu) là trái cây; An Tiem, Hung King, Fox là các nhân vật.' },
];

export const U8_TASK2_MATCH: PairMatchItem[] = [
  { id: 'p57-u8t2-1', left: "1. What's An Tiem like?", rightKey: 'c', rightLabel: "c. He's hard-working." },
  { id: 'p57-u8t2-2', left: '2. Do you like reading fairy tales?', rightKey: 'd', rightLabel: 'd. No, I like comic books.' },
  { id: 'p57-u8t2-3', left: "3. What're you reading?", rightKey: 'h', rightLabel: "h. I'm reading The Fox and the Crow." },
  { id: 'p57-u8t2-4', left: "4. What's Snow White like?", rightKey: 'g', rightLabel: "g. She's beautiful and kind." },
  { id: 'p57-u8t2-5', left: "5. What's Aladdin like?", rightKey: 'a', rightLabel: "a. He's a clever boy." },
  { id: 'p57-u8t2-6', left: '6. What are the seven Dwarfs like?', rightKey: 'e', rightLabel: 'e. They are short and generous.' },
  { id: 'p57-u8t2-7', left: "7. What's she reading?", rightKey: 'f', rightLabel: 'f. A funny story.' },
  { id: 'p57-u8t2-8', left: "8. What's Cam's mother like?", rightKey: 'b', rightLabel: "b. She's a cruel woman." },
];

export const U8_TASK3_READING = {
  passage:
    'After school, Bill often stays at home and reads books. He likes reading comic books. His favourite story is Doraemon. It is the name of a magic cat, the main character of the story. The cat has a lot of magical things in its pocket. It comes to Japan from the future to help Nobita and his friends. Bill likes the story very much because the magic cat is friendly and very intelligent.',
  passageVi:
    'Sau giờ học, Bill thường ở nhà đọc sách. Cậu thích đọc truyện tranh và bộ truyện yêu thích là Doraemon — tên chú mèo máy thần kỳ, nhân vật chính của truyện. Chú mèo có rất nhiều bảo bối thần kỳ trong túi và đến Nhật Bản từ tương lai để giúp Nobita cùng các bạn. Bill rất thích truyện vì chú mèo thân thiện và thông minh.',
  example: '0. After school, Bill often reads books in the library. → False (Sai, cậu ở nhà đọc sách).',
  statements: [
    { id: 'p57-u8t3-1', text: "1. He doesn't like reading comic books.", isTrue: false, explanation: 'Sai (False): “He likes reading comic books.”' },
    { id: 'p57-u8t3-2', text: '2. A magic cat is the main character of the story Doraemon.', isTrue: true, explanation: 'Đúng (True): “a magic cat, the main character of the story.”' },
    { id: 'p57-u8t3-3', text: '3. The cat has a lot of magical things.', isTrue: true, explanation: 'Đúng (True): “The cat has a lot of magical things in its pocket.”' },
    { id: 'p57-u8t3-4', text: '4. The cat comes from Japan.', isTrue: false, explanation: 'Sai (False): Chú mèo đến Nhật Bản TỪ TƯƠNG LAI (“comes to Japan from the future”).' },
  ],
};

export const U8_TASK4_DIALOGUE: DialogueOrderItem[] = [
  { key: 'C', speaker: 'Hai', text: 'What are you reading, Nam?', textVi: 'Nam ơi, bạn đang đọc gì thế?', correctStep: 0 },
  { key: 'A', speaker: 'Nam', text: "I'm reading Cinderella.", textVi: 'Mình đang đọc truyện Cô bé Lọ Lem.', correctStep: 1 },
  { key: 'E', speaker: 'Hai', text: 'Is it a funny story?', textVi: 'Đó có phải truyện hài hước không?', correctStep: 2 },
  { key: 'B', speaker: 'Nam', text: "No, it isn't. It's a fairy tale. Do you like reading fairy tales?", textVi: 'Không phải. Đó là truyện cổ tích. Bạn có thích đọc truyện cổ tích không?', correctStep: 3 },
  { key: 'D', speaker: 'Hai', text: "No, I don't. I like funny stories.", textVi: 'Không. Mình thích truyện hài hước cơ.', correctStep: 4 },
];

export const U8_TASK5_LETTERS: LetterFillItem[] = [
  { id: 'p57-u8t5-1', pattern: 'C _ m i c', answers: ['comic'], meaningVi: 'truyện tranh', hint: 'Thiếu chữ o' },
  { id: 'p57-u8t5-2', pattern: 'B _ r r o w', answers: ['borrow'], meaningVi: 'mượn', hint: 'Thiếu chữ o' },
  { id: 'p57-u8t5-3', pattern: 'C l _ v e _', answers: ['clever'], meaningVi: 'thông minh, khôn khéo', hint: 'c + l + e + v + e + r' },
  { id: 'p57-u8t5-4', pattern: 'C _ a r a _ t e r', answers: ['character'], meaningVi: 'nhân vật', hint: 'Thiếu chữ h và c' },
  { id: 'p57-u8t5-5', pattern: 'G _ n t l _', answers: ['gentle'], meaningVi: 'hiền lành', hint: 'Thiếu 2 chữ e' },
  { id: 'p57-u8t5-6', pattern: 'D _ a r _', answers: ['dwarf'], meaningVi: 'chú lùn', hint: 'Thiếu chữ w và f' },
  { id: 'p57-u8t5-7', pattern: 'B o _ k', answers: ['book'], meaningVi: 'quyển sách', hint: 'Thiếu chữ o' },
  { id: 'p57-u8t5-8', pattern: 'G h _ s t', answers: ['ghost'], meaningVi: 'con ma', hint: 'Thiếu chữ o' },
  { id: 'p57-u8t5-9', pattern: 'f a i r _', answers: ['fairy'], meaningVi: 'cổ tích / bà tiên', hint: 'Thiếu chữ y' },
  { id: 'p57-u8t5-10', pattern: 'i n _ e r e s t i n g', answers: ['interesting'], meaningVi: 'thú vị', hint: 'Thiếu chữ t' },
  { id: 'p57-u8t5-11', pattern: 'f i n i _ h', answers: ['finish'], meaningVi: 'hoàn thành', hint: 'Thiếu chữ s' },
  { id: 'p57-u8t5-12', pattern: 'b e _ a u s e', answers: ['because'], meaningVi: 'bởi vì', hint: 'Thiếu chữ c' },
];

export const U8_TASK6_LOOK_WRITE: FillItem[] = [
  { id: 'p58-u8t6-1', before: '1. He is reading Snow White and the ', after: ' Dwarfs.', hint: 'Số 7 tiếng Anh (S...)', iconKey: 'dwarfs', answers: ['seven'], explanation: 'Snow White and the Seven Dwarfs = Nàng Bạch Tuyết và Bảy Chú Lùn.' },
  { id: 'p58-u8t6-2', before: '2. She is reading The Fox and the ', after: '.', hint: 'Con quạ (C...)', iconKey: 'crow', answers: ['crow'], explanation: 'The Fox and the Crow = Con Cáo và Con Quạ.' },
  { id: 'p58-u8t6-3', before: '3. My favourite story is Aladdin and the Magic ', after: '.', hint: 'Cây đèn thần (L...)', iconKey: 'lamp', answers: ['lamp'], explanation: 'Aladdin and the Magic Lamp = Aladdin và Cây Đèn Thần.' },
  { id: 'p58-u8t6-4', before: '4. His hobby is reading ', after: ' stories.', hint: 'Hài hước, vui nhộn (f...)', iconKey: 'funny', answers: ['funny'], explanation: 'funny stories = những câu chuyện hài hước.' },
];

export const U8_TASK7_BILL_BLANKS: ParagraphBlank[] = [
  { id: 'p58-u8t7-1', index: 1, answers: ['reading'], hint: 'Sở thích đọc sách (r...)', iconKey: 'read' },
  { id: 'p58-u8t7-2', index: 2, answers: ['library'], hint: 'Thư viện (l...)', iconKey: 'library' },
  { id: 'p58-u8t7-3', index: 3, answers: ['animals'], hint: 'Các loài động vật (a...)', iconKey: 'animals' },
  { id: 'p58-u8t7-4', index: 4, answers: ['meat'], hint: 'Miếng thịt: a piece of ___ (m...)', iconKey: 'meat' },
  { id: 'p58-u8t7-5', index: 5, answers: ['story'], hint: 'Câu chuyện (s...)', iconKey: 'story' },
];

export const U8_TASK8_ORDERS: OrderSentenceItem[] = [
  { id: 'p59-u8t8-1', words: ['you', 'what', 'reading', 'are', '?'], answer: 'What are you reading?', meaning: 'Bạn đang đọc gì vậy?', explanation: 'What + are + you + reading?' },
  { id: 'p59-u8t8-2', words: ['a', "I'm", 'tale', 'reading', 'fairy', '.'], answer: "I'm reading a fairy tale.", meaning: 'Mình đang đọc một truyện cổ tích.', explanation: "I'm + reading + a fairy tale." },
  { id: 'p59-u8t8-3', words: ['the', 'character', 'who', 'main', 'is', '?'], answer: 'Who is the main character?', meaning: 'Ai là nhân vật chính?', explanation: 'Who + is + the main character?' },
  { id: 'p59-u8t8-4', words: ['character', 'like', 'is', 'main', 'what', 'the', '?'], answer: 'What is the main character like?', meaning: 'Nhân vật chính có tính cách như thế nào?', explanation: 'What + is + the main character + like?' },
  { id: 'p59-u8t8-5', words: ['book', 'What', 'favourite', 'is', 'your', '?', "It's", 'Aladdin', 'and', 'the', 'Magic', 'Lamp', '.'], answer: "What is your favourite book? It's Aladdin and the Magic Lamp.", meaning: 'Cuốn sách yêu thích của bạn là gì? Đó là Aladdin và Cây đèn thần.', explanation: "What is your favourite book? + It's Aladdin and the Magic Lamp." },
  { id: 'p59-u8t8-6', words: ["It's", 'story', 'two', 'about', 'Vietnamese', 'a', 'girls', '.'], answer: "It's a story about two Vietnamese girls.", meaning: 'Đó là câu chuyện về hai cô gái Việt Nam.', explanation: "It's + a story about + two Vietnamese girls." },
  { id: 'p59-u8t8-7', words: ['What', 'like', 'generous', 'is', 'he', '?', 'I', 'think', 'he', 'is', '.'], answer: 'What is he like? I think he is generous.', meaning: 'Cậu ấy thế nào? Mình nghĩ cậu ấy hào phóng.', explanation: 'What is he like? + I think he is generous.' },
  { id: 'p59-u8t8-8', words: ['reading', 'I', 'Lamp', 'am', 'Aladdin', 'the', 'and', 'Magic', '.'], answer: 'I am reading Aladdin and the Magic Lamp.', meaning: 'Mình đang đọc Aladdin và Cây đèn thần.', explanation: 'I am reading + Aladdin and the Magic Lamp.' },
];

export const U8_TASK10_WRITING: GuidedWritingPrompt[] = [
  { id: 'p60-w0', question: "0. What's your friend's name?", starter: 'My best friend is', sample: 'Lan', placeholder: 'Tên bạn thân của em...' },
  { id: 'p60-w1', question: '1. What does he/she like reading in his/her free time?', starter: 'He/She likes', sample: 'reading fairy tales and comic books', placeholder: 'reading fairy tales / comic books...' },
  { id: 'p60-w2', question: "2. What's his/her favourite book/story?", starter: 'His/Her favourite', sample: 'story is Snow White and the Seven Dwarfs', placeholder: 'story is Doraemon / Aladdin...' },
  { id: 'p60-w3', question: "3. Who's the main character?", starter: 'The main', sample: 'character is Snow White', placeholder: 'character is...' },
  { id: 'p60-w4', question: "4. What's he/she like?", starter: 'He/She', sample: 'is very beautiful, gentle and kind', placeholder: 'is kind / clever / hard-working...' },
];

// ================= UNIT 9 OPENING (PAGES 61–62) =================

export const U9_VOCAB_PAGE61: PageVocabWord[] = [
  { word: 'zoo', ipa: '/zuː/', pos: 'n', meaning: 'sở thú', group: 'Địa điểm', example: 'What did you see at the zoo?', exampleVi: 'Bạn đã nhìn thấy gì ở sở thú?' },
  { word: 'animal', ipa: '/ˈænɪml/', pos: 'n', meaning: 'động vật', group: 'Động vật', example: 'What are your favourite animals?', exampleVi: 'Những con vật yêu thích của bạn là gì?' },
  { word: 'elephant', ipa: '/ˈelɪfənt/', pos: 'n', meaning: 'con voi', group: 'Động vật', example: 'I saw a baby elephant at the zoo.', exampleVi: 'Mình thấy một chú voi con ở sở thú.' },
  { word: 'tiger', ipa: '/ˈtaɪɡə(r)/', pos: 'n', meaning: 'con hổ', group: 'Động vật', example: 'The tigers roared loudly.', exampleVi: 'Những con hổ gầm rất to.' },
  { word: 'monkey', ipa: '/ˈmʌŋki/', pos: 'n', meaning: 'con khỉ', group: 'Động vật', example: 'The monkeys jumped up and down.', exampleVi: 'Những chú khỉ nhảy lên xuống.' },
  { word: 'gorilla', ipa: '/ɡəˈrɪlə/', pos: 'n', meaning: 'con khỉ đột (gorila)', group: 'Động vật', example: 'The gorillas moved quickly.', exampleVi: 'Những con khỉ đột di chuyển nhanh.' },
  { word: 'crocodile', ipa: '/ˈkrɒkədaɪl/', pos: 'n', meaning: 'con cá sấu', group: 'Động vật', example: 'Crocodiles look very scary.', exampleVi: 'Cá sấu trông rất đáng sợ.' },
  { word: 'python', ipa: '/ˈpaɪθən/', pos: 'n', meaning: 'con trăn', group: 'Động vật', example: 'The pythons moved quietly.', exampleVi: 'Những con trăn trườn rất êm.' },
  { word: 'peacock', ipa: '/ˈpiːkɒk/', pos: 'n', meaning: 'con công', group: 'Động vật', example: 'The peacocks danced beautifully.', exampleVi: 'Những con công múa thật đẹp.' },
  { word: 'noisy', ipa: '/ˈnɔɪzi/', pos: 'adj', meaning: 'ầm ĩ, ồn ào', group: 'Tính từ miêu tả', example: 'The monkeys were really noisy.', exampleVi: 'Lũ khỉ thật ồn ào.' },
  { word: 'scary', ipa: '/ˈskeəri/', pos: 'adj', meaning: 'đáng sợ', group: 'Tính từ miêu tả', example: 'Tigers and crocodiles are scary.', exampleVi: 'Hổ và cá sấu rất đáng sợ.' },
  { word: 'fast', ipa: '/fɑːst/', pos: 'adj/adv', meaning: 'nhanh nhẹn', group: 'Tính từ miêu tả', example: 'She liked the tigers because they were fast.', exampleVi: 'Bạn ấy thích hổ vì chúng rất nhanh.' },
  { word: 'baby', ipa: '/ˈbeɪbi/', pos: 'n/adj', meaning: 'non, nhỏ (voi con)', group: 'Tính từ miêu tả', example: 'The baby elephant looked happy.', exampleVi: 'Chú voi con trông rất vui vẻ.' },
  { word: 'yesterday', ipa: '/ˈjestədeɪ/', pos: 'adv', meaning: 'hôm qua', group: 'Địa điểm', example: 'I went to the zoo yesterday.', exampleVi: 'Hôm qua mình đã đi sở thú.' },
  { word: 'circus', ipa: '/ˈsɜːkəs/', pos: 'n', meaning: 'rạp xiếc', group: 'Địa điểm', example: 'We saw clever animals at the circus.', exampleVi: 'Chúng mình thấy thú thông minh ở rạp xiếc.' },
  { word: 'park', ipa: '/pɑːk/', pos: 'n', meaning: 'công viên', group: 'Địa điểm', example: 'There is a big park near my house.', exampleVi: 'Có một công viên lớn gần nhà mình.' },
  { word: 'intelligent', ipa: '/ɪnˈtelɪdʒənt/', pos: 'adj', meaning: 'thông minh', group: 'Tính từ miêu tả', example: 'Elephants and gorillas are intelligent.', exampleVi: 'Voi và khỉ đột rất thông minh.' },
  { word: 'trunk', ipa: '/trʌŋk/', pos: 'n', meaning: 'cái vòi (của con voi)', group: 'Hoạt động thú', example: 'The elephant sprayed water with its trunk.', exampleVi: 'Chú voi phun nước bằng cái vòi.' },
  { word: 'spray', ipa: '/spreɪ/', pos: 'v', meaning: 'phun nước', group: 'Hoạt động thú', example: 'Baby elephants love to spray water.', exampleVi: 'Voi con thích phun nước.' },
  { word: 'kangaroo', ipa: '/ˌkæŋɡəˈruː/', pos: 'n', meaning: 'con chuột túi', group: 'Động vật', example: 'Kangaroos are lovely and jump high.', exampleVi: 'Chuột túi rất dễ thương và nhảy cao.' },
];

export const U9_VOCAB_PAGE62: PageVocabWord[] = [
  { word: 'funny', ipa: '/ˈfʌni/', pos: 'adj', meaning: 'vui nhộn, ngộ nghĩnh', group: 'Tính từ & Trạng từ', example: 'Monkeys are very funny.', exampleVi: 'Những chú khỉ rất vui nhộn.' },
  { word: 'loudly', ipa: '/ˈlaʊdli/', pos: 'adv', meaning: 'ầm ĩ, to tiếng', group: 'Tính từ & Trạng từ', example: 'The lions roared loudly.', exampleVi: 'Những con sư tử gầm thật to.', tip: 'loud (tính từ) + ly → loudly (trạng từ).' },
  { word: 'roar', ipa: '/rɔː(r)/', pos: 'v', meaning: 'gầm, rú', group: 'Hành động', example: 'Two tigers roared loudly.', exampleVi: 'Hai con hổ gầm vang.' },
  { word: 'panda', ipa: '/ˈpændə/', pos: 'n', meaning: 'con gấu trúc', group: 'Động vật', example: 'A panda ate bamboo slowly.', exampleVi: 'Một chú gấu trúc ăn tre chậm rãi.' },
  { word: 'cute', ipa: '/kjuːt/', pos: 'adj', meaning: 'đáng yêu', group: 'Tính từ & Trạng từ', example: 'The pandas were really cute.', exampleVi: 'Những chú gấu trúc thật đáng yêu.' },
  { word: 'slowly', ipa: '/ˈsləʊli/', pos: 'adv', meaning: 'một cách chậm chạp', group: 'Tính từ & Trạng từ', example: 'Elephants moved slowly.', exampleVi: 'Những chú voi di chuyển chậm rãi.', tip: 'slow + ly → slowly.' },
  { word: 'quietly', ipa: '/ˈkwaɪətli/', pos: 'adv', meaning: 'một cách nhẹ nhàng, yên lặng', group: 'Tính từ & Trạng từ', example: 'The pythons moved quietly.', exampleVi: 'Những con trăn di chuyển thật êm.', tip: 'quiet + ly → quietly.' },
  { word: 'move', ipa: '/muːv/', pos: 'v', meaning: 'di chuyển', group: 'Hành động', example: 'The gorillas moved quickly.', exampleVi: 'Lũ khỉ đột di chuyển nhanh.' },
  { word: 'walk', ipa: '/wɔːk/', pos: 'v', meaning: 'đi bộ, đi lại', group: 'Hành động', example: 'We walked around the zoo.', exampleVi: 'Chúng mình đi dạo quanh sở thú.' },
  { word: 'a lot of', ipa: '/ə lɒt əv/', pos: 'phr', meaning: 'rất nhiều', group: 'Tính từ & Trạng từ', example: 'I saw a lot of wild animals.', exampleVi: 'Mình đã thấy rất nhiều động vật hoang dã.' },
  { word: 'jump', ipa: '/dʒʌmp/', pos: 'v', meaning: 'nhảy', group: 'Hành động', example: 'The monkeys jumped up and down.', exampleVi: 'Lũ khỉ nhảy lên nhảy xuống.' },
  { word: 'quickly', ipa: '/ˈkwɪkli/', pos: 'adv', meaning: 'một cách nhanh nhẹn', group: 'Tính từ & Trạng từ', example: 'Monkeys jump up and down quickly.', exampleVi: 'Khỉ nhảy lên xuống thật nhanh.', tip: 'quick + ly → quickly.' },
  { word: 'have a good time', ipa: '/hæv ə ɡʊd taɪm/', pos: 'phr', meaning: 'có khoảng thời gian vui vẻ', group: 'Hành động', example: 'We had a good time at the zoo.', exampleVi: 'Chúng mình đã chơi rất vui ở sở thú.' },
];

export const U9_ZOO_ANIMALS_PLAY = [
  { key: 'tiger', plural: 'tigers', vi: 'những con hổ', actionPast: 'roared loudly', actionVi: 'đã gầm rất to', icon: 'tiger' },
  { key: 'monkey', plural: 'monkeys', vi: 'những con khỉ', actionPast: 'jumped up and down quickly', actionVi: 'đã nhảy lên xuống thật nhanh', icon: 'monkey' },
  { key: 'elephant', plural: 'elephants', vi: 'những con voi', actionPast: 'sprayed water with their trunks and moved slowly', actionVi: 'đã phun nước bằng vòi và bước đi chậm rãi', icon: 'elephant' },
  { key: 'panda', plural: 'pandas', vi: 'những chú gấu trúc', actionPast: 'were really cute and ate bamboo slowly', actionVi: 'rất đáng yêu và ăn tre chậm rãi', icon: 'panda' },
  { key: 'peacock', plural: 'peacocks', vi: 'những con công', actionPast: 'moved quietly and danced beautifully', actionVi: 'di chuyển nhẹ nhàng và múa thật đẹp', icon: 'peacock' },
];
