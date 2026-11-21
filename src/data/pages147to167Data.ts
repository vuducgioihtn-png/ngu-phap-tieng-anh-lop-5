import type {
  DialogueOrderItem,
  FillItem,
  GuidedWritingPrompt,
  OrderSentenceItem,
  PageVocabWord,
  ParagraphBlank,
  QuizChoiceItem,
} from './pages1to20Data';

export interface PageMeta167 {
  page: number;
  unit:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 99;
  title: string;
  subtitle: string;
  sectionTag: string;
}

export interface CityCountryDuelPreset {
  id: string;
  label: string;
  adjType: 'short' | 'long';
  baseAdj: string;
  comparative: string;
  placeA: string;
  placeB: string;
  winner: 'A' | 'B';
  iconA: string;
  iconB: string;
  question: string;
  answer: string;
  answerVi: string;
  ruleTip: string;
}

export interface ComparativeMistakeItem {
  id: string;
  sentence: string;
  mistakeWord: string;
  acceptedMistakes: string[];
  correction: string;
  acceptedCorrections: string[];
  correctSentence: string;
  hint: string;
  explanation: string;
}

export interface ComparativeTableRow {
  id: string;
  base: string;
  meaningVi: string;
  ruleTag: 'ngắn (+er)' | 'gấp đôi phụ âm' | 'đuôi -y → -ier' | 'đuôi -e (+r)' | 'tính từ dài (more)';
  answer: string;
  example: string;
}

export interface IntonationChoiceItem {
  id: string;
  prefix: string;
  choiceA: string;
  choiceB: string;
  fullSentence: string;
  meaningVi: string;
  tip: string;
}

export interface WorldCityFact {
  id: string;
  city: string;
  country: string;
  iconKey: string;
  landmark: string;
  comparisonSentence: string;
  comparisonVi: string;
  traits: string;
}

export interface AnswerKeyTaskEntry {
  taskLabel: string;
  summaryType: 'chips' | 'sentences' | 'paragraph' | 'writing';
  items: { num?: string; text: string; speak?: string; highlight?: boolean }[];
  note?: string;
}

export interface AnswerKeyUnitBlock {
  id: string;
  unitNumber: number;
  unitTitle: string;
  pageRangeNote: string;
  jumpPage: number;
  accent: 'sky' | 'amber' | 'emerald' | 'rose' | 'teal' | 'indigo' | 'cyan' | 'pink';
  tasks: AnswerKeyTaskEntry[];
}

/* =========================================================
   INDEX TRANG 147 -> TRANG 167
   ========================================================= */
export const PAGES_147_TO_167_INDEX: PageMeta167[] = [
  {
    page: 147,
    unit: 19,
    title: 'Unit 19 · Task 3 (tiếp), 4 & 5: Đảo Phú Quốc & Chùa Bái Đính',
    subtitle: 'Hoàn thiện định nghĩa địa điểm, đọc hiểu Đúng/Sai về Phú Quốc và xếp hội thoại đi Ninh Bình',
    sectionTag: 'UNIT 19 · READING & DIALOGUE',
  },
  {
    page: 148,
    unit: 19,
    title: 'Unit 19 · Task 6 & 7 (câu 1–3): Chuyến đi TP.HCM của Tâm',
    subtitle: 'Điền 5 từ theo tranh kể chuyện du lịch Sài Gòn và nhìn tranh điền danh thắng nổi tiếng',
    sectionTag: 'UNIT 19 · PICTURE CLOZE',
  },
  {
    page: 149,
    unit: 19,
    title: 'Unit 19 · Task 7 (tiếp), 8 & 9: Xếp câu & Viết về kỳ nghỉ của em',
    subtitle: 'Hoàn thành Đền Hoa Lư, Làng hoa Nhật Tân, xếp 5 câu chuẩn và viết 5 câu về kỳ nghỉ mơ ước',
    sectionTag: 'UNIT 19 · WRITING WRAP-UP',
  },
  {
    page: 150,
    unit: 20,
    title: 'Unit 20 · Khởi động & 17 Từ vựng Thành phố – Nông thôn',
    subtitle: 'Which one is more exciting, life in the city or life in the countryside? — Nghe đọc chuẩn 17 từ nền tảng',
    sectionTag: 'UNIT 20 · VOCABULARY 1',
  },
  {
    page: 151,
    unit: 20,
    title: 'Unit 20 · Từ vựng Mô tả & Xưởng So sánh Thành phố – Làng quê',
    subtitle: '20 từ vựng tính từ & so sánh hơn + Đấu trường tương tác chọn Which one is ... A or B?',
    sectionTag: 'UNIT 20 · VOCAB & DUEL STUDIO',
  },
  {
    page: 152,
    unit: 20,
    title: 'Unit 20 · Ngữ pháp Toàn diện: So sánh hơn Tính từ ngắn, dài & Bất quy tắc',
    subtitle: 'Sơ đồ 4 quy tắc vàng (-er, gấp đôi, -ier, more ...) kèm bảng tính từ đặc biệt dễ nhớ mãi',
    sectionTag: 'UNIT 20 · GRAMMAR MASTER',
  },
  {
    page: 153,
    unit: 20,
    title: 'Unit 20 · Task 1 & Task 2: Khác loại & Săn lỗi sai So sánh hơn',
    subtitle: 'Phân biệt từ loại và bắt 5 lỗi kinh điển hay quên "than" hoặc thiếu "more"',
    sectionTag: 'UNIT 20 · PRACTICE 1–2',
  },
  {
    page: 154,
    unit: 20,
    title: 'Unit 20 · Task 3, 4 & 5: Bảng 12 tính từ & Nick ở New York vs. Úc',
    subtitle: 'Định nghĩa 5 từ theo tranh, điền bảng 12 dạng so sánh hơn và đọc hiểu New York – Canberra',
    sectionTag: 'UNIT 20 · TABLE & READING',
  },
  {
    page: 155,
    unit: 20,
    title: 'Unit 20 · Task 6, 7 & 8: Ngữ điệu câu "or" & Kate ở Sydney',
    subtitle: 'Xếp hội thoại Nha Trang – Gold Coast, luyện ngữ điệu ↘ ↗ ↘ và điền tranh về Sydney – Brooklyn',
    sectionTag: 'UNIT 20 · INTONATION & CLOZE',
  },
  {
    page: 156,
    unit: 20,
    title: 'Unit 20 · Task 9: Du lịch vòng quanh các thành phố lớn thế giới',
    subtitle: 'Nhìn danh thắng điền Paris, Singapore, Bangkok, Tokyo, Australia + Khám phá so sánh toàn cầu',
    sectionTag: 'UNIT 20 · WORLD CITIES',
  },
  {
    page: 157,
    unit: 20,
    title: 'Unit 20 · Task 10 & Task 11: Xếp câu & Đọc hiểu Nga ở Vĩnh Phúc – Hà Nội',
    subtitle: 'Sắp xếp 5 câu so sánh chuẩn xác và trả lời 5 câu trắc nghiệm so sánh làng quê với Thủ đô',
    sectionTag: 'UNIT 20 · ORDER & READING',
  },
  {
    page: 158,
    unit: 20,
    title: 'Unit 20 · Task 12 (Viết so sánh) & Khai mở Kho Đáp án Unit 1',
    subtitle: 'Hoàn tất bài viết kết thúc Unit 20 và mở đầu Kho Đáp án & Tổng ôn trực quan (Unit 1 · Task 1–6)',
    sectionTag: 'UNIT 20 FINALE · KEY U1',
  },
  {
    page: 159,
    unit: 99,
    title: 'Kho Đáp án & Tổng ôn · Unit 1 (Task 7–10) & Unit 2 (Task 1–7)',
    subtitle: 'Tra cứu nhanh đáp án chuẩn địa chỉ nhà (Unit 1) và thói quen hằng ngày (Unit 2) có âm thanh đọc mẫu',
    sectionTag: 'ANSWER KEY · U1 & U2',
  },
  {
    page: 160,
    unit: 99,
    title: 'Kho Đáp án & Tổng ôn · Unit 2 (tiếp) & Trọn bộ Unit 3 (Task 1–10)',
    subtitle: 'Tổng kiểm tra đáp án tần suất và toàn bộ 10 bài tập kỳ nghỉ quá khứ đơn (Unit 3)',
    sectionTag: 'ANSWER KEY · U2 & U3',
  },
  {
    page: 161,
    unit: 99,
    title: 'Kho Đáp án & Tổng ôn · Trọn bộ Unit 4 (Task 1–8)',
    subtitle: 'Đáp án chuẩn toàn bài Did you go to the party? với đoạn văn quá khứ đơn tô màu động từ',
    sectionTag: 'ANSWER KEY · UNIT 4',
  },
  {
    page: 162,
    unit: 99,
    title: 'Kho Đáp án & Tổng ôn · Trọn bộ Unit 5 & Unit 6 (Task 1–5)',
    subtitle: 'Đối chiếu đáp án tương lai đơn (Where will you be?) và số tiết học trong tuần (Unit 6)',
    sectionTag: 'ANSWER KEY · U5 & U6',
  },
  {
    page: 163,
    unit: 99,
    title: 'Kho Đáp án & Tổng ôn · Unit 6 (tiếp) & Unit 7 (Task 1–8)',
    subtitle: 'Xếp câu môn học (kèm lưu ý sửa lỗi chính tả sách in) và 15 từ vựng học Tiếng Anh (Unit 7)',
    sectionTag: 'ANSWER KEY · U6 & U7',
  },
  {
    page: 164,
    unit: 99,
    title: 'Kho Đáp án & Tổng ôn · Unit 7 (tiếp) & Unit 8 (Task 1–8)',
    subtitle: 'Hoàn thành đáp án Unit 7 và đối chiếu kho truyện cổ tích, nhân vật & tính từ miêu tả (Unit 8)',
    sectionTag: 'ANSWER KEY · U7 & U8',
  },
  {
    page: 165,
    unit: 99,
    title: 'Kho Đáp án & Tổng ôn · Unit 8 (tiếp) & Unit 9 (Task 1–8)',
    subtitle: 'Đáp án truyện cổ tích và 10 từ vựng sở thú + trạng từ cách thức (slowly, quietly, loudly)',
    sectionTag: 'ANSWER KEY · U8 & U9',
  },
  {
    page: 166,
    unit: 99,
    title: 'Kho Đáp án & Tổng ôn · Unit 9 (tiếp) & Unit 10 (Task 1–8)',
    subtitle: 'Tổng hợp đáp án sở thú và ngày hội Thể thao – Lễ hội trường học (kèm bảng 20 câu trắc nghiệm)',
    sectionTag: 'ANSWER KEY · U9 & U10',
  },
  {
    page: 167,
    unit: 99,
    title: 'Kho Đáp án & Tổng ôn · Unit 10 (tiếp) & Unit 11 (Task 1–5) · Hoàn thành!',
    subtitle: 'Đối chiếu bài Sức khỏe & Lời khuyên (should / shouldn’t) và chúc mừng chinh phục trọn bộ 167 trang!',
    sectionTag: 'ANSWER KEY · U10 & U11',
  },
];

/* =========================================================
   UNIT 19 PART 2 — TRANG 147, 148, 149
   ========================================================= */
export const U19_TASK3_PART2_DEFS: FillItem[] = [
  {
    id: 'p147-u19t3-3',
    before: '3. People go to this green place to relax or do morning exercise. → ',
    answers: ['park', 'a park', 'the park'],
    hint: '4 chữ cái (p _ _ _): công viên nhiều cây xanh để thư giãn và tập thể dục.',
    explanation: 'Đáp án: park (công viên). Từ khóa "green place, relax, do morning exercise".',
    iconKey: 'park',
  },
  {
    id: 'p147-u19t3-4',
    before: '4. It’s a place for people to visit and see the image of Buddha. → ',
    answers: ['pagoda', 'a pagoda'],
    hint: '6 chữ cái (p _ _ _ _ _): ngôi chùa có tượng Phật (Buddha).',
    explanation: 'Đáp án: pagoda (ngôi chùa). Từ khóa "see the image of Buddha" (xem tượng Phật).',
    iconKey: 'pagoda',
  },
  {
    id: 'p147-u19t3-5',
    before: '5. It’s a place where you can watch plays and other types of entertainment. → ',
    answers: ['theatre', 'theater', 'a theatre'],
    hint: '7 chữ cái (t _ _ _ _ _ _): nhà hát để xem kịch (plays).',
    explanation: 'Đáp án: theatre (nhà hát). Từ khóa "watch plays" (xem các vở kịch).',
    iconKey: 'theatre',
  },
];

export const U19_TASK4_READING = {
  title: 'Task 4 (Trang 147): Đọc đoạn văn về Đảo Phú Quốc và chọn True (Đúng) / False (Sai)',
  passage:
    'Last summer, Dad asked me and Mom, "Which place would you like to visit, Phu Quoc or Sa Pa?" Phu Quoc was always in my dream so we chose it. The island was more attractive than I expected. I liked the blue sea, the beautiful white sandy beaches and delicious seafood of Phu Quoc. We really had a great time there.',
  passageVi:
    'Mùa hè năm ngoái, bố hỏi mình và mẹ: "Hai mẹ con muốn đi thăm nơi nào, Phú Quốc hay Sa Pa?" Phú Quốc luôn ở trong giấc mơ của mình nên cả nhà đã chọn nơi đó. Hòn đảo cuốn hút hơn mình mong đợi rất nhiều. Mình thích biển xanh, những bãi cát trắng xinh đẹp và hải sản thơm ngon của Phú Quốc. Cả nhà thực sự đã có khoảng thời gian tuyệt vời ở đó.',
  example: '0. My family went to Phu Quoc last summer. → True (Ví dụ mẫu)',
  statements: [
    {
      id: 'p147-u19t4-1',
      text: '1. I did not want to go to Phu Quoc before.',
      isTrue: false,
      explanation: 'Sai (False). Bài đọc viết "Phu Quoc was always in my dream" (Phú Quốc luôn nằm trong ước mơ của mình → rất muốn đi!).',
    },
    {
      id: 'p147-u19t4-2',
      text: '2. I did not think Phu Quoc was so attractive.',
      isTrue: true,
      explanation: 'Đúng (True). "The island was more attractive than I expected" = Hòn đảo hấp dẫn hơn cả những gì bạn ấy từng nghĩ.',
    },
    {
      id: 'p147-u19t4-3',
      text: '3. I like the colours of the sea and the beaches there.',
      isTrue: true,
      explanation: 'Đúng (True). Bạn nhỏ nhắc rõ "the blue sea" (biển xanh) và "white sandy beaches" (bãi cát trắng).',
    },
    {
      id: 'p147-u19t4-4',
      text: '4. I don’t like seafood.',
      isTrue: false,
      explanation: 'Sai (False). Bạn ấy rất thích: "I liked ... delicious seafood of Phu Quoc."',
    },
    {
      id: 'p147-u19t4-5',
      text: '5. My family did not feel very happy in Phu Quoc.',
      isTrue: false,
      explanation: 'Sai (False). Câu cuối khẳng định: "We really had a great time there" (Cả nhà đã có khoảng thời gian tuyệt vời).',
    },
  ],
};

export const U19_TASK5_DIALOGUE: DialogueOrderItem[] = [
  {
    key: 'C',
    speaker: 'Hoa',
    text: 'Where were you last weekend?',
    textVi: 'Cuối tuần trước bạn đã ở đâu thế?',
    correctStep: 0,
  },
  {
    key: 'B',
    speaker: 'Phong',
    text: 'I went to Ninh Binh Province.',
    textVi: 'Mình đã đi tỉnh Ninh Bình. (Sách in nhầm "I was to..." → chuẩn ngữ pháp là "I went to...")',
    correctStep: 1,
  },
  {
    key: 'E',
    speaker: 'Hoa',
    text: 'What for?',
    textVi: 'Để làm gì vậy?',
    correctStep: 2,
  },
  {
    key: 'D',
    speaker: 'Phong',
    text: 'I went to see my grandparents and visited Bai Dinh Pagoda.',
    textVi: 'Mình về thăm ông bà và đi thăm Chùa Bái Đính.',
    correctStep: 3,
  },
  {
    key: 'A',
    speaker: 'Hoa',
    text: 'Great. I’d like to visit that pagoda someday.',
    textVi: 'Tuyệt quá. Mình cũng muốn đến thăm ngôi chùa đó vào một ngày nào đó.',
    correctStep: 4,
  },
  {
    key: 'F',
    speaker: 'Phong',
    text: 'You should. It’s a very beautiful place!',
    textVi: 'Bạn nên đi lắm. Đó là một nơi rất đẹp!',
    correctStep: 5,
  },
];

export const U19_TASK6_TAM_BLANKS: ParagraphBlank[] = [
  {
    id: 'p148-u19t6-1',
    index: 1,
    answers: ['weekend', 'sunday'],
    hint: 'Tờ lịch có chữ SUN (cuối tuần): weekend (hoặc Sunday).',
    iconKey: 'sun',
  },
  {
    id: 'p148-u19t6-2',
    index: 2,
    answers: ['market'],
    hint: 'Chợ Bến Thành: Ben Thanh ______ (6 chữ cái).',
    iconKey: 'market',
  },
  {
    id: 'p148-u19t6-3',
    index: 3,
    answers: ['food'],
    hint: 'Bàn đồ ăn ngon hấp dẫn: delicious ______ (4 chữ cái).',
    iconKey: 'food',
  },
  {
    id: 'p148-u19t6-4',
    index: 4,
    answers: ['park'],
    hint: 'Công viên nước Đầm Sen: Dam Sen Water ______ (4 chữ cái).',
    iconKey: 'park',
  },
  {
    id: 'p148-u19t6-5',
    index: 5,
    answers: ['play'],
    hint: 'Xem một vở kịch ở Nhà hát Thành phố: watched a ______ (4 chữ cái).',
    iconKey: 'play',
  },
];

export const U19_TASK7_PART1_P148: FillItem[] = [
  {
    id: 'p148-u19t7-1',
    before: '1. Thien Mu is an old ',
    after: ' in the city of Hue.',
    answers: ['Pagoda', 'pagoda'],
    hint: 'Chùa Thiên Mụ nổi tiếng ở Huế: Pagoda.',
    explanation: 'Thien Mu is an old Pagoda in the city of Hue. (Thiên Mụ là một ngôi chùa cổ ở thành phố Huế.)',
    iconKey: 'pagoda',
  },
  {
    id: 'p148-u19t7-2',
    before: '2. It’s always crowded and noisy in the ',
    after: ' every morning.',
    answers: ['market'],
    hint: 'Nơi luôn đông đúc và ồn ào mỗi buổi sáng để mua bán: market.',
    explanation: 'It’s always crowded and noisy in the market every morning. (Ở chợ buổi sáng nào cũng đông đúc và nhộn nhịp.)',
    iconKey: 'market',
  },
  {
    id: 'p148-u19t7-3',
    before: '3. Nhat Tan ',
    after: ' is very beautiful at night.',
    answers: ['Bridge', 'bridge'],
    hint: 'Cầu Nhật Tân rực rỡ ánh đèn về đêm: Bridge.',
    explanation: 'Nhat Tan Bridge is very beautiful at night. (Cầu Nhật Tân rất đẹp vào ban đêm.)',
    iconKey: 'bridge',
  },
];

export const U19_TASK7_PART2_P149: FillItem[] = [
  {
    id: 'p149-u19t7-4',
    before: '4. Our class went to visit Hoa Lu ',
    after: ' last week.',
    answers: ['Temple', 'temple'],
    hint: 'Đền Hoa Lư ở Ninh Bình: Temple.',
    explanation: 'Our class went to visit Hoa Lu Temple last week. (Lớp chúng mình đã đi thăm Đền Hoa Lư tuần trước.)',
    iconKey: 'temple',
  },
  {
    id: 'p149-u19t7-5',
    before: '5. Nhat Tan Flower ',
    after: ' is beautiful and colourful when spring comes.',
    answers: ['Village', 'village'],
    hint: 'Làng hoa Nhật Tân rực rỡ sắc màu khi xuân về: Village.',
    explanation: 'Nhat Tan Flower Village is beautiful and colourful when spring comes. (Làng hoa Nhật Tân thật đẹp và rực rỡ khi mùa xuân đến.)',
    iconKey: 'village',
  },
];

export const U19_TASK8_ORDERS: OrderSentenceItem[] = [
  {
    id: 'p149-u19t8-1',
    words: ['of', 'the', "Let's", 'History.', 'Museum', 'visit'],
    answer: "Let's visit the Museum of History.",
    meaning: 'Chúng ta hãy đi thăm Bảo tàng Lịch sử nhé.',
    explanation: "Cấu trúc rủ rê: Let's + động từ nguyên mẫu (visit) + địa điểm (the Museum of History).",
  },
  {
    id: 'p149-u19t8-2',
    words: ['to', 'to', "We'd", 'the', 'go', 'like', 'zoo.'],
    answer: "We'd like to go to the zoo.",
    meaning: 'Chúng mình muốn đi sở thú.',
    explanation: "We'd like to + go to + the zoo (lưu ý có hai từ 'to': like TO go TO the zoo).",
  },
  {
    id: 'p149-u19t8-3',
    words: ['is', 'in', 'This', 'time', 'my', 'Viet Nam.', 'first'],
    answer: 'This is my first time in Viet Nam.',
    meaning: 'Đây là lần đầu tiên của mình ở Việt Nam.',
    explanation: 'Cụm cố định: This is my first time in + tên quốc gia/địa điểm.',
  },
  {
    id: 'p149-u19t8-4',
    words: ['than', 'Ha Noi', 'is', 'expected.', 'I', 'bigger'],
    answer: 'Ha Noi is bigger than I expected.',
    meaning: 'Hà Nội lớn hơn mình tưởng tượng.',
    explanation: 'Mẫu so sánh với kỳ vọng: Địa điểm + is + tính từ so sánh hơn + than I expected.',
  },
  {
    id: 'p149-u19t8-5',
    words: ['fun', 'park.', 'play', 'water', "It's", 'to', 'a', 'in'],
    answer: "It's fun to play in a water park.",
    meaning: 'Thật vui khi được chơi ở công viên nước.',
    explanation: "Cấu trúc cảm nhận: It's + fun + to + động từ (play) + in a water park.",
  },
];

export const U19_TASK9_WRITING: GuidedWritingPrompt[] = [
  {
    id: 'p149-u19t9-1',
    question: '1. When did you have your last holiday? (Kỳ nghỉ gần nhất của em là khi nào?)',
    starter: 'I had',
    placeholder: 'my last holiday last summer...',
    sample: 'my last holiday last summer',
  },
  {
    id: 'p149-u19t9-2',
    question:
      '2. Which place would you like to visit for the next holiday, the park or the cinema? (Em muốn đi công viên hay rạp chiếu phim?)',
    starter: "I'd",
    placeholder: 'like to visit the park / the cinema...',
    sample: 'like to visit the park',
  },
  {
    id: 'p149-u19t9-3',
    question: '3. Who would you like to go with? (Em muốn đi cùng ai?)',
    starter: 'I',
    placeholder: 'would like to go with my family and best friends...',
    sample: 'would like to go with my parents and my little sister',
  },
  {
    id: 'p149-u19t9-4',
    question: '4. What do you think about your next holiday? (Em nghĩ kỳ nghỉ sắp tới sẽ thế nào?)',
    starter: 'I think',
    placeholder: 'it will be more exciting than I expect...',
    sample: 'it will be very exciting and fun',
  },
  {
    id: 'p149-u19t9-5',
    question: '5. What will you do for it? (Em sẽ làm gì trong kỳ nghỉ đó?)',
    starter: "I'll",
    placeholder: 'take lots of photos and enjoy delicious food...',
    sample: 'play games, take a lot of photos and eat delicious food',
  },
];

/* =========================================================
   UNIT 20 — TRANG 150 -> TRANG 158
   ========================================================= */
export const U20_VOCAB_PAGE150: PageVocabWord[] = [
  {
    word: 'address',
    ipa: '/əˈdres/',
    pos: 'n',
    meaning: 'địa chỉ',
    example: "What's your new address in Ha Noi?",
    exampleVi: 'Địa chỉ mới của bạn ở Hà Nội là gì?',
    tip: 'Ôn lại từ quen thuộc từ Unit 1, chú ý nhấn âm 2 (ə-DRES).',
    group: 'Địa chỉ & Đường phố',
  },
  {
    word: 'lane',
    ipa: '/leɪn/',
    pos: 'n',
    meaning: 'ngõ, làn đường nhỏ',
    example: 'My grandparents live in a quiet lane.',
    exampleVi: 'Ông bà mình sống trong một con ngõ yên tĩnh.',
    tip: 'Lane (ngõ nhỏ) nhỏ hơn Street (phố) và Road (con đường lớn).',
    group: 'Địa chỉ & Đường phố',
  },
  {
    word: 'road',
    ipa: '/rəʊd/',
    pos: 'n',
    meaning: 'con đường',
    example: 'There are green trees along the village road.',
    exampleVi: 'Có những hàng cây xanh dọc con đường làng.',
    tip: 'Đọc là /rəʊd/ (râu-đ), nối liền làng này với thành phố khác.',
    group: 'Địa chỉ & Đường phố',
  },
  {
    word: 'street',
    ipa: '/striːt/',
    pos: 'n',
    meaning: 'đường phố',
    example: 'The streets in Ho Chi Minh City are very crowded.',
    exampleVi: 'Đường phố ở TP. Hồ Chí Minh rất đông đúc.',
    tip: 'Chú ý phiên âm chuẩn là /striːt/ (sách in nhầm thành /strɪkt/).',
    group: 'Địa chỉ & Đường phố',
  },
  {
    word: 'flat',
    ipa: '/flæt/',
    pos: 'n',
    meaning: 'căn hộ (Anh - Anh)',
    example: 'Kate lives in a modern flat on the tenth floor.',
    exampleVi: 'Kate sống trong một căn hộ hiện đại ở tầng 10.',
    tip: 'Flat (Anh-Anh) = Apartment (Anh-Mỹ): đều nghĩa là căn hộ chung cư.',
    group: 'Nhà ở & Địa điểm',
  },
  {
    word: 'city',
    ipa: '/ˈsɪti/',
    pos: 'n',
    meaning: 'thành phố',
    example: 'Life in the city is noisy but exciting.',
    exampleVi: 'Cuộc sống ở thành phố ồn ào nhưng sôi động.',
    tip: 'Số nhiều đổi -y thành -ies: one city → two cities.',
    group: 'Nhà ở & Địa điểm',
  },
  {
    word: 'village',
    ipa: '/ˈvɪlɪdʒ/',
    pos: 'n',
    meaning: 'làng quê, ngôi làng',
    example: 'My aunt lives in a small village near Canberra.',
    exampleVi: 'Dì mình sống ở một ngôi làng nhỏ gần Canberra.',
    tip: 'Thêm đuôi -r thành villager = người dân làng.',
    group: 'Nhà ở & Địa điểm',
  },
  {
    word: 'country',
    ipa: '/ˈkʌntri/',
    pos: 'n',
    meaning: 'quốc gia / vùng nông thôn',
    example: 'Life in the country is more peaceful.',
    exampleVi: 'Cuộc sống ở vùng nông thôn yên bình hơn.',
    tip: '"the country" = "the countryside" (vùng quê, nông thôn).',
    group: 'Nhà ở & Địa điểm',
  },
  {
    word: 'tower',
    ipa: '/ˈtaʊə(r)/',
    pos: 'n',
    meaning: 'tòa tháp, cao ốc',
    example: 'The Eiffel Tower is a famous symbol of Paris.',
    exampleVi: 'Tháp Eiffel là biểu tượng nổi tiếng của Paris.',
    tip: 'Phân biệt tower (tòa tháp) và town (thị trấn).',
    group: 'Nhà ở & Địa điểm',
  },
  {
    word: 'mountain',
    ipa: '/ˈmaʊntən/',
    pos: 'n',
    meaning: 'ngọn núi',
    example: 'Sa Pa is a cool town in the mountains.',
    exampleVi: 'Sa Pa là một thị trấn mát mẻ trên vùng núi.',
    tip: 'Âm đầu đọc /maʊn/, đuôi nhẹ /tən/ → MAO-tần.',
    group: 'Thiên nhiên & Vùng miền',
  },
  {
    word: 'district',
    ipa: '/ˈdɪstrɪkt/',
    pos: 'n',
    meaning: 'quận, huyện',
    example: 'Hoan Kiem District is in the centre of Ha Noi.',
    exampleVi: 'Quận Hoàn Kiếm nằm ở trung tâm Hà Nội.',
    tip: 'Lớn hơn Ward (phường) và nhỏ hơn City/Province (thành phố/tỉnh).',
    group: 'Thiên nhiên & Vùng miền',
  },
  {
    word: 'province',
    ipa: '/ˈprɒvɪns/',
    pos: 'n',
    meaning: 'tỉnh',
    example: 'Nga lives in Vinh Phuc Province.',
    exampleVi: 'Nga sống ở tỉnh Vĩnh Phúc.',
    tip: 'Đi sau tên tỉnh: Ninh Binh Province, Vinh Phuc Province.',
    group: 'Thiên nhiên & Vùng miền',
  },
  {
    word: 'hometown',
    ipa: '/ˈhəʊmtaʊn/',
    pos: 'n',
    meaning: 'quê hương',
    example: 'My hometown is quieter than Ha Noi.',
    exampleVi: 'Quê hương của mình yên tĩnh hơn Hà Nội.',
    tip: 'Ghép từ home (nhà) + town (thị trấn) = quê nhà!',
    group: 'Thiên nhiên & Vùng miền',
  },
  {
    word: 'where',
    ipa: '/weə(r)/',
    pos: 'adv',
    meaning: 'ở đâu',
    example: 'Where do your grandparents live?',
    exampleVi: 'Ông bà của bạn sống ở đâu?',
    tip: 'Từ để hỏi nơi chốn — luôn đứng đầu câu hỏi.',
    group: 'Từ hỏi & Con người',
  },
  {
    word: 'from',
    ipa: '/frɒm/',
    pos: 'prep',
    meaning: 'từ, cách (bao xa)',
    example: 'Brooklyn is about fifty kilometres from Sydney.',
    exampleVi: 'Brooklyn cách Sydney khoảng 50 ki-lô-mét.',
    tip: 'Dùng trong mẫu khoảng cách: ... kilometres from + địa điểm.',
    group: 'Từ hỏi & Con người',
  },
  {
    word: 'pupil',
    ipa: '/ˈpjuːpl/',
    pos: 'n',
    meaning: 'học sinh tiểu học',
    example: 'Every pupil in Class 5A loves learning English.',
    exampleVi: 'Mỗi học sinh lớp 5A đều yêu thích học Tiếng Anh.',
    tip: 'Tương đương student, hay dùng cho học sinh cấp 1 tại Anh.',
    group: 'Từ hỏi & Con người',
  },
  {
    word: 'live',
    ipa: '/lɪv/',
    pos: 'v',
    meaning: 'sống, sinh sống',
    example: 'I enjoy living in the countryside.',
    exampleVi: 'Mình thích sống ở vùng nông thôn.',
    tip: 'Sau enjoy + V-ing → enjoy living (thích sống).',
    group: 'Từ hỏi & Con người',
  },
];

export const U20_VOCAB_PAGE151: PageVocabWord[] = [
  {
    word: 'busy',
    ipa: '/ˈbɪzi/',
    pos: 'adj',
    meaning: 'bận rộn, nhộn nhịp',
    example: 'New York is busier than Paris.',
    exampleVi: 'New York nhộn nhịp hơn Paris.',
    tip: 'Đuôi -y → đổi thành -ier: busy → busier.',
    group: 'Tính từ mô tả nơi chốn',
  },
  {
    word: 'far',
    ipa: '/fɑː(r)/',
    pos: 'adj',
    meaning: 'xa',
    example: 'My school is far from the city centre.',
    exampleVi: 'Trường mình ở xa trung tâm thành phố.',
    tip: 'Bất quy tắc đặc biệt: far → farther / further (xa hơn).',
    group: 'Tính từ mô tả nơi chốn',
  },
  {
    word: 'quiet',
    ipa: '/ˈkwaɪət/',
    pos: 'adj',
    meaning: 'yên tĩnh',
    example: 'Da Lat is quieter than Can Tho.',
    exampleVi: 'Đà Lạt yên tĩnh hơn Cần Thơ.',
    tip: 'Trái nghĩa với noisy (ồn ào). So sánh hơn: quieter.',
    group: 'Tính từ mô tả nơi chốn',
  },
  {
    word: 'crowded',
    ipa: '/ˈkraʊdɪd/',
    pos: 'adj',
    meaning: 'đông đúc',
    example: 'The streets are very crowded during rush hours.',
    exampleVi: 'Đường phố rất đông đúc vào giờ cao điểm.',
    tip: 'Tính từ 2 âm tiết đuôi -ed → dùng more crowded.',
    group: 'Tính từ mô tả nơi chốn',
  },
  {
    word: 'large',
    ipa: '/lɑːdʒ/',
    pos: 'adj',
    meaning: 'rộng lớn',
    example: 'Which one is larger, London or Hai Phong?',
    exampleVi: 'Nơi nào rộng lớn hơn, Luân Đôn hay Hải Phòng?',
    tip: 'Tận cùng sẵn bằng -e → chỉ thêm -r: large → larger.',
    group: 'Tính từ mô tả nơi chốn',
  },
  {
    word: 'small',
    ipa: '/smɔːl/',
    pos: 'adj',
    meaning: 'nhỏ bé',
    example: 'Singapore is smaller than Malaysia.',
    exampleVi: 'Singapore nhỏ hơn Malaysia.',
    tip: 'Tính từ ngắn 1 âm tiết → thêm -er: small → smaller.',
    group: 'Tính từ mô tả nơi chốn',
  },
  {
    word: 'pretty',
    ipa: '/ˈprɪti/',
    pos: 'adj',
    meaning: 'xinh xắn, đẹp mắt',
    example: 'The little village by the river is very pretty.',
    exampleVi: 'Ngôi làng nhỏ bên dòng sông rất xinh đẹp.',
    tip: 'Đuôi -y → đổi thành -ier: pretty → prettier.',
    group: 'Tính từ mô tả nơi chốn',
  },
  {
    word: 'beautiful',
    ipa: '/ˈbjuːtɪfl/',
    pos: 'adj',
    meaning: 'đẹp lộng lẫy',
    example: 'Ha Long Bay is more beautiful than I expected.',
    exampleVi: 'Vịnh Hạ Long đẹp hơn mình mong đợi.',
    tip: 'Tính từ dài 3 âm tiết → dùng more beautiful (không thêm -er!).',
    group: 'Tính từ mô tả nơi chốn',
  },
];

export const U20_VOCAB_COMPARATIVE_CORE: PageVocabWord[] = [
  {
    word: 'bigger',
    ipa: '/ˈbɪɡə(r)/',
    pos: 'adj',
    meaning: 'lớn hơn, to hơn',
    example: 'London is bigger than Hai Phong.',
    exampleVi: 'Luân Đôn lớn hơn Hải Phòng.',
    tip: 'Quy tắc 1-1-1: b-i-g gấp đôi chữ g trước khi thêm -er → bigger.',
    group: 'So sánh hơn ngắn (-er)',
  },
  {
    word: 'smaller',
    ipa: '/ˈsmɔːlə(r)/',
    pos: 'adj',
    meaning: 'nhỏ hơn',
    example: 'My village is smaller than the city.',
    exampleVi: 'Ngôi làng của mình nhỏ hơn thành phố.',
    tip: 'small + er → smaller.',
    group: 'So sánh hơn ngắn (-er)',
  },
  {
    word: 'quieter',
    ipa: '/ˈkwaɪətə(r)/',
    pos: 'adj',
    meaning: 'yên tĩnh hơn',
    example: 'Life in the countryside is quieter.',
    exampleVi: 'Cuộc sống ở nông thôn yên tĩnh hơn.',
    tip: 'quiet + er → quieter (cũng có thể dùng more quiet).',
    group: 'So sánh hơn ngắn (-er)',
  },
  {
    word: 'noisier',
    ipa: '/ˈnɔɪziə(r)/',
    pos: 'adj',
    meaning: 'ồn ào hơn',
    example: 'Ha Noi is noisier than Vinh Phuc.',
    exampleVi: 'Hà Nội ồn ào hơn Vĩnh Phúc.',
    tip: 'noisy đổi y → i rồi thêm -er → noisier.',
    group: 'So sánh hơn ngắn (-er)',
  },
  {
    word: 'busier',
    ipa: '/ˈbɪziə(r)/',
    pos: 'adj',
    meaning: 'nhộn nhịp, bận rộn hơn',
    example: 'Ho Chi Minh City is busier than Da Nang.',
    exampleVi: 'TP. Hồ Chí Minh nhộn nhịp hơn Đà Nẵng.',
    tip: 'busy đổi y → i rồi thêm -er → busier.',
    group: 'So sánh hơn ngắn (-er)',
  },
  {
    word: 'cheaper',
    ipa: '/ˈtʃiːpə(r)/',
    pos: 'adj',
    meaning: 'rẻ hơn',
    example: 'Goods in the village are much cheaper.',
    exampleVi: 'Hàng hóa ở làng quê rẻ hơn nhiều.',
    tip: 'cheap + er → cheaper. Trái nghĩa: more expensive.',
    group: 'So sánh hơn ngắn (-er)',
  },
  {
    word: 'more peaceful',
    ipa: '/mɔː ˈpiːsfl/',
    pos: 'adj',
    meaning: 'yên bình hơn',
    example: 'Da Lat is more peaceful than New York City.',
    exampleVi: 'Đà Lạt yên bình hơn Thành phố New York.',
    tip: 'Tính từ đuôi -ful luôn dùng "more" ở phía trước.',
    group: 'So sánh hơn dài (more ...)',
  },
  {
    word: 'more expensive',
    ipa: '/mɔːr ɪkˈspensɪv/',
    pos: 'adj',
    meaning: 'đắt đỏ hơn',
    example: 'Tokyo is more expensive than Da Nang.',
    exampleVi: 'Tokyo đắt đỏ hơn Đà Nẵng.',
    tip: 'ex-pen-sive (3 âm tiết) → more expensive.',
    group: 'So sánh hơn dài (more ...)',
  },
  {
    word: 'more modern',
    ipa: '/mɔː ˈmɒdn/',
    pos: 'adj',
    meaning: 'hiện đại hơn',
    example: 'New York is more modern than Bangkok.',
    exampleVi: 'New York hiện đại hơn Bangkok.',
    tip: 'modern (2 âm tiết, không tận cùng -y) → more modern.',
    group: 'So sánh hơn dài (more ...)',
  },
  {
    word: 'more exciting',
    ipa: '/mɔːr ɪkˈsaɪtɪŋ/',
    pos: 'adj',
    meaning: 'sôi động, thú vị hơn',
    example: 'Life in the city is more exciting than in the village.',
    exampleVi: 'Cuộc sống thành phố sôi động hơn ở làng quê.',
    tip: 'Tính từ dài 3 âm tiết đuôi -ing → more exciting.',
    group: 'So sánh hơn dài (more ...)',
  },
  {
    word: 'traffic',
    ipa: '/ˈtræfɪk/',
    pos: 'n',
    meaning: 'giao thông, xe cộ',
    example: 'There are often traffic jams during rush hours.',
    exampleVi: 'Thường xuyên có tắc đường vào giờ cao điểm.',
    tip: 'Cụm hay gặp: traffic jams = tắc đường, kẹt xe.',
    group: 'Từ vựng Đọc hiểu Unit 20',
  },
  {
    word: 'villager',
    ipa: '/ˈvɪlɪdʒə(r)/',
    pos: 'n',
    meaning: 'người dân làng',
    example: 'The villagers are very friendly and helpful.',
    exampleVi: 'Người dân làng rất thân thiện và hay giúp đỡ.',
    tip: 'village (làng) + r = villager (người sống ở làng).',
    group: 'Từ vựng Đọc hiểu Unit 20',
  },
];

/* 25 từ vựng đồng bộ cho Unit 20 trong units16to20.ts (Tổng toàn bộ 20 Unit = 578 từ!) */
export const U20_VOCAB_SYNC_25: PageVocabWord[] = [
  ...U20_VOCAB_COMPARATIVE_CORE,
  ...U20_VOCAB_PAGE151,
  ...U20_VOCAB_PAGE150.filter((w) =>
    ['street', 'village', 'tower', 'mountain', 'hometown'].includes(w.word)
  ),
];

export const U20_CITY_VS_COUNTRY_DUELS: CityCountryDuelPreset[] = [
  {
    id: 'duel-exciting',
    label: 'Sôi động hơn (exciting)',
    adjType: 'long',
    baseAdj: 'exciting',
    comparative: 'more exciting',
    placeA: 'life in the city',
    placeB: 'life in the countryside',
    winner: 'A',
    iconA: 'city',
    iconB: 'village',
    question: 'Which one is more exciting, life in the city or life in the countryside?',
    answer: 'I think life in the city is more exciting than life in the countryside.',
    answerVi: 'Mình nghĩ cuộc sống ở thành phố sôi động hơn cuộc sống ở nông thôn.',
    ruleTip: 'exciting là tính từ dài (3 âm tiết) → thêm "more" trước tính từ: more exciting.',
  },
  {
    id: 'duel-peaceful',
    label: 'Yên bình hơn (peaceful)',
    adjType: 'long',
    baseAdj: 'peaceful',
    comparative: 'more peaceful',
    placeA: 'life in the city',
    placeB: 'life in the countryside',
    winner: 'B',
    iconA: 'city',
    iconB: 'farm',
    question: 'Which one is more peaceful, life in the city or life in the countryside?',
    answer: 'I think life in the countryside is more peaceful than life in the city.',
    answerVi: 'Mình nghĩ cuộc sống ở nông thôn yên bình hơn ở thành phố.',
    ruleTip: 'peaceful (đuôi -ful) dùng dạng tính từ dài → more peaceful.',
  },
  {
    id: 'duel-bigger',
    label: 'Lớn hơn (big)',
    adjType: 'short',
    baseAdj: 'big',
    comparative: 'bigger',
    placeA: 'London',
    placeB: 'Hai Phong',
    winner: 'A',
    iconA: 'tower',
    iconB: 'bridge',
    question: 'Which one is bigger, London or Hai Phong?',
    answer: 'I think London is bigger than Hai Phong.',
    answerVi: 'Mình nghĩ Luân Đôn lớn hơn Hải Phòng.',
    ruleTip: 'big (phụ âm – nguyên âm – phụ âm) → gấp đôi chữ g rồi thêm -er → bigger.',
  },
  {
    id: 'duel-noisier',
    label: 'Ồn ào hơn (noisy)',
    adjType: 'short',
    baseAdj: 'noisy',
    comparative: 'noisier',
    placeA: 'Ha Noi',
    placeB: 'Vinh Phuc',
    winner: 'A',
    iconA: 'traffic',
    iconB: 'village',
    question: 'Which one is noisier, Ha Noi or Vinh Phuc?',
    answer: 'I think Ha Noi is noisier than Vinh Phuc.',
    answerVi: 'Mình nghĩ Hà Nội ồn ào hơn Vĩnh Phúc.',
    ruleTip: 'noisy tận cùng bằng -y → đổi y thành i rồi thêm -er → noisier.',
  },
  {
    id: 'duel-cheaper',
    label: 'Rẻ hơn (cheap)',
    adjType: 'short',
    baseAdj: 'cheap',
    comparative: 'cheaper',
    placeA: 'Brooklyn town',
    placeB: 'Sydney City',
    winner: 'A',
    iconA: 'goods',
    iconB: 'australia',
    question: 'Which one is cheaper, Brooklyn or Sydney?',
    answer: 'I think goods in Brooklyn are much cheaper than in Sydney.',
    answerVi: 'Mình nghĩ hàng hóa ở thị trấn Brooklyn rẻ hơn nhiều so với ở Sydney.',
    ruleTip: 'cheap là tính từ ngắn 1 âm tiết có 2 nguyên âm (ea) → chỉ thêm -er: cheaper.',
  },
  {
    id: 'duel-modern',
    label: 'Hiện đại hơn (modern)',
    adjType: 'long',
    baseAdj: 'modern',
    comparative: 'more modern',
    placeA: 'New York',
    placeB: 'Bangkok',
    winner: 'A',
    iconA: 'usa',
    iconB: 'bangkok',
    question: 'Which one is more modern, New York or Bangkok?',
    answer: 'I think New York is more modern than Bangkok.',
    answerVi: 'Mình nghĩ New York hiện đại hơn Bangkok.',
    ruleTip: 'modern (2 âm tiết, không kết thúc bằng -y/-er/-ow) → dùng more modern.',
  },
];

export const U20_IRREGULAR_COMPARATIVES = [
  { base: 'good / well', meaning: 'tốt, giỏi', comp: 'better', ex: 'My English is better than last year.' },
  { base: 'bad', meaning: 'tệ, xấu', comp: 'worse', ex: 'Traffic jams today are worse than yesterday.' },
  { base: 'many / much', meaning: 'nhiều', comp: 'more', ex: 'The city has more shops than the village.' },
  { base: 'little', meaning: 'ít', comp: 'less', ex: 'There is less traffic in the countryside.' },
  { base: 'far', meaning: 'xa', comp: 'farther / further', ex: 'Sydney is farther from Viet Nam than Bangkok.' },
  { base: 'quiet / clever / simple', meaning: 'yên tĩnh / khéo / đơn giản', comp: 'quieter hoặc more quiet', ex: 'Da Lat is quieter than Ho Chi Minh City.' },
];

/* =========================================================
   UNIT 20 — TASKS 1 -> 12 (TRANG 153 -> TRANG 158)
   ========================================================= */
export const U20_TASK1_ODD: QuizChoiceItem[] = [
  {
    id: 'p153-u20t1-1',
    prompt: '1. Chọn từ khác loại:',
    options: ['a. quiet', 'b. small', 'c. large', 'd. than'],
    correctIndex: 3,
    explanation: 'Đáp án d (than). Ba từ quiet, small, large là tính từ miêu tả; "than" là liên từ so sánh ("hơn").',
  },
  {
    id: 'p153-u20t1-2',
    prompt: '2. Chọn từ khác loại:',
    options: ['a. countryside', 'b. city', 'c. peaceful', 'd. mountain'],
    correctIndex: 2,
    explanation: 'Đáp án c (peaceful). Ba từ kia là danh từ chỉ nơi chốn; peaceful là tính từ (yên bình).',
  },
  {
    id: 'p153-u20t1-3',
    prompt: '3. Chọn từ khác loại:',
    options: ['a. beautiful', 'b. noisy', 'c. expensive', 'd. exciting'],
    correctIndex: 1,
    explanation: 'Đáp án b (noisy). Ba từ beautiful, expensive, exciting là tính từ dài (so sánh dùng "more"); noisy là tính từ ngắn đuôi -y (noisier).',
  },
  {
    id: 'p153-u20t1-4',
    prompt: '4. Chọn từ khác loại:',
    options: ['a. stay', 'b. do', 'c. live', 'd. holiday'],
    correctIndex: 3,
    explanation: 'Đáp án d (holiday). Ba từ stay, do, live là động từ; holiday là danh từ (kỳ nghỉ).',
  },
  {
    id: 'p153-u20t1-5',
    prompt: '5. Chọn từ khác loại:',
    options: ['a. go', 'b. know', 'c. sure', 'd. think'],
    correctIndex: 2,
    explanation: 'Đáp án c (sure). Ba từ go, know, think là động từ; sure là tính từ (chắc chắn).',
  },
];

export const U20_TASK2_MISTAKES: ComparativeMistakeItem[] = [
  {
    id: 'p153-u20t2-1',
    sentence: '1. Da Lat is bigger Ho Chi Minh City is.',
    mistakeWord: 'bigger',
    acceptedMistakes: ['bigger', 'bigger ho'],
    correction: 'bigger than',
    acceptedCorrections: ['bigger than', 'smaller than'],
    correctSentence: 'Da Lat is bigger than Ho Chi Minh City is.',
    hint: 'Sau tính từ so sánh hơn "bigger" đang bị thiếu từ nối "hơn" (than)!',
    explanation: 'Cấu trúc so sánh hơn bắt buộc có "than": bigger → bigger than. (Lưu ý: về địa lý thực tế Đà Lạt nhỏ hơn TP.HCM, nhưng sách luyện sửa lỗi ngữ pháp thiếu "than").',
  },
  {
    id: 'p153-u20t2-2',
    sentence: '2. New York City is larger Ha Noi.',
    mistakeWord: 'larger',
    acceptedMistakes: ['larger', 'larger ha'],
    correction: 'larger than',
    acceptedCorrections: ['larger than'],
    correctSentence: 'New York City is larger than Ha Noi.',
    hint: 'Tương tự câu 1, sau "larger" cần có từ gì trước "Ha Noi"?',
    explanation: 'Thiếu từ "than" sau tính từ so sánh hơn: larger → larger than.',
  },
  {
    id: 'p153-u20t2-3',
    sentence: '3. My father in fatter than my mother.',
    mistakeWord: 'in',
    acceptedMistakes: ['in'],
    correction: 'is',
    acceptedCorrections: ['is'],
    correctSentence: 'My father is fatter than my mother.',
    hint: 'Nhìn kỹ động từ to be sau "My father" — bị viết nhầm thành giới từ!',
    explanation: 'Trước tính từ "fatter" phải là động từ to be "is", không phải giới từ "in": in → is.',
  },
  {
    id: 'p153-u20t2-4',
    sentence: '4. Ha Long Bay is beautiful than Nha Trang.',
    mistakeWord: 'beautiful',
    acceptedMistakes: ['beautiful'],
    correction: 'more beautiful',
    acceptedCorrections: ['more beautiful'],
    correctSentence: 'Ha Long Bay is more beautiful than Nha Trang.',
    hint: 'beautiful là tính từ dài (3 âm tiết) — trước "than" phải thêm từ gì?',
    explanation: 'Tính từ dài "beautiful" khi so sánh hơn phải thêm "more" ở trước: beautiful → more beautiful.',
  },
  {
    id: 'p153-u20t2-5',
    sentence: '5. Hue is peaceful than Ha Noi City.',
    mistakeWord: 'peaceful',
    acceptedMistakes: ['peaceful'],
    correction: 'more peaceful',
    acceptedCorrections: ['more peaceful'],
    correctSentence: 'Hue is more peaceful than Ha Noi City.',
    hint: 'peaceful có đuôi -ful (tính từ dài) — thiếu từ "more" ở trước!',
    explanation: 'Tính từ dài "peaceful" trong câu so sánh hơn cần có "more": peaceful → more peaceful.',
  },
];

export const U20_TASK3_DEFS: FillItem[] = [
  {
    id: 'p154-u20t3-1',
    before: '1. a person of a village → ',
    answers: ['villager', 'a villager'],
    hint: '8 chữ cái (v _ _ _ _ _ _ _): người sống ở làng quê.',
    explanation: 'Đáp án: villager (người dân làng) — xuất phát từ "village" + r.',
    iconKey: 'villager',
  },
  {
    id: 'p154-u20t3-2',
    before: '2. the abbreviation for the United States of America → ',
    answers: ['USA', 'the USA', 'U.S.A.'],
    hint: '3 chữ cái viết tắt của Hợp chúng quốc Hoa Kỳ (Mỹ).',
    explanation: 'Đáp án: USA (United States of America — nước Mỹ).',
    iconKey: 'usa',
  },
  {
    id: 'p154-u20t3-3',
    before: '3. a piece of land used for growing crops or raising animals → ',
    answers: ['farm', 'a farm'],
    hint: '4 chữ cái (f _ _ _): trang trại trồng trọt và chăn nuôi.',
    explanation: 'Đáp án: farm (trang trại, nông trại).',
    iconKey: 'farm',
  },
  {
    id: 'p154-u20t3-4',
    before: '4. the sister of your father or mother or the wife of your uncle → ',
    answers: ['aunt', 'an aunt'],
    hint: '4 chữ cái (a _ _ _): cô, dì, bác gái hoặc mợ.',
    explanation: 'Đáp án: aunt (cô, dì, bác gái).',
    iconKey: 'aunt',
  },
  {
    id: 'p154-u20t3-5',
    before: '5. people, cars, trucks, motorbikes, bicycles, etc. moving along roads → ',
    answers: ['traffic'],
    hint: '7 chữ cái (t _ _ _ _ _ _): giao thông, xe cộ đi lại trên đường.',
    explanation: 'Đáp án: traffic (giao thông, xe cộ).',
    iconKey: 'traffic',
  },
];

export const U20_TASK4_COMPARATIVE_TABLE: ComparativeTableRow[] = [
  { id: 'p154-u20t4-1', base: 'Long', meaningVi: 'dài', ruleTag: 'ngắn (+er)', answer: 'longer', example: 'The Red River is longer than this stream.' },
  { id: 'p154-u20t4-2', base: 'Big', meaningVi: 'to, lớn', ruleTag: 'gấp đôi phụ âm', answer: 'bigger', example: 'New York is bigger than Canberra.' },
  { id: 'p154-u20t4-3', base: 'Small', meaningVi: 'nhỏ bé', ruleTag: 'ngắn (+er)', answer: 'smaller', example: 'My village is smaller than the town.' },
  { id: 'p154-u20t4-4', base: 'Beautiful', meaningVi: 'đẹp', ruleTag: 'tính từ dài (more)', answer: 'more beautiful', example: 'Ha Long Bay is more beautiful than I expected.' },
  { id: 'p154-u20t4-5', base: 'Cheap', meaningVi: 'rẻ', ruleTag: 'ngắn (+er)', answer: 'cheaper', example: 'Food in the village is cheaper.' },
  { id: 'p154-u20t4-6', base: 'Happy', meaningVi: 'vui vẻ', ruleTag: 'đuôi -y → -ier', answer: 'happier', example: 'She is happier in the countryside.' },
  { id: 'p154-u20t4-7', base: 'Large', meaningVi: 'rộng lớn', ruleTag: 'đuôi -e (+r)', answer: 'larger', example: 'London is larger than Hai Phong.' },
  { id: 'p154-u20t4-8', base: 'Noisy', meaningVi: 'ồn ào', ruleTag: 'đuôi -y → -ier', answer: 'noisier', example: 'City streets are noisier than village lanes.' },
  { id: 'p154-u20t4-9', base: 'Busy', meaningVi: 'nhộn nhịp', ruleTag: 'đuôi -y → -ier', answer: 'busier', example: 'Ho Chi Minh City is busier than Hue.' },
  { id: 'p154-u20t4-10', base: 'Peaceful', meaningVi: 'yên bình', ruleTag: 'tính từ dài (more)', answer: 'more peaceful', example: 'Country life is more peaceful.' },
  { id: 'p154-u20t4-11', base: 'Interesting', meaningVi: 'thú vị', ruleTag: 'tính từ dài (more)', answer: 'more interesting', example: 'This story is more interesting than that one.' },
  { id: 'p154-u20t4-12', base: 'Exciting', meaningVi: 'sôi động', ruleTag: 'tính từ dài (more)', answer: 'more exciting', example: 'City life is more exciting than village life.' },
];

export const U20_TASK5_READING = {
  title: 'Task 5 (Trang 154): Đọc bài của Nick (New York vs. Canberra) và chọn True / False',
  passage:
    "Hello. My name's Nick. I live in New York, a big city in the USA. It has a lot of people, buildings, traffic and shops. It is noisy and expensive. But I enjoy living here because city life is exciting. My aunt Laura lives in a village near Canberra, Australia. It is much smaller and quieter. There are not many people and shops. Things are much cheaper. There are a lot of sheep and trees on the farms. She likes living there because the villagers are friendly, and life in the country is more peaceful.",
  passageVi:
    'Xin chào. Mình tên là Nick. Mình sống ở New York, một thành phố lớn ở Mỹ. Nơi đây có rất nhiều người, tòa nhà, xe cộ và cửa hàng. Nó ồn ào và đắt đỏ. Nhưng mình thích sống ở đây vì cuộc sống thành phố rất sôi động. Dì Laura của mình sống ở một ngôi làng gần Canberra, nước Úc. Nơi đó nhỏ và yên tĩnh hơn nhiều. Không có nhiều người và cửa hàng. Mọi thứ rẻ hơn rất nhiều. Có rất nhiều cừu và cây xanh trên các trang trại. Dì thích sống ở đó vì người dân làng thân thiện và cuộc sống nông thôn yên bình hơn.',
  example: '0. Nick lives in New York in the United States of America. → True (Ví dụ mẫu)',
  statements: [
    {
      id: 'p154-u20t5-1',
      text: "1. He doesn't like living in New York because it is noisy and expensive.",
      isTrue: false,
      explanation: 'Sai (False). Tuy ồn ào và đắt đỏ, nhưng Nick nói: "But I enjoy living here because city life is exciting."',
    },
    {
      id: 'p154-u20t5-2',
      text: '2. His aunt lives in a village near Canberra in Australia.',
      isTrue: true,
      explanation: 'Đúng (True). Khớp hoàn toàn với câu "My aunt Laura lives in a village near Canberra, Australia."',
    },
    {
      id: 'p154-u20t5-3',
      text: '3. There are a few shops in the village, and things are expensive.',
      isTrue: false,
      explanation: 'Sai (False). Bài đọc viết rõ "Things are much cheaper" (Mọi thứ rẻ hơn nhiều, không phải đắt đỏ).',
    },
    {
      id: 'p154-u20t5-4',
      text: '4. People in the village raise a lot of sheep and grow many trees on the farms.',
      isTrue: true,
      explanation: 'Đúng (True). Bài đọc nêu "There are a lot of sheep and trees on the farms."',
    },
    {
      id: 'p154-u20t5-5',
      text: "5. Nick's aunt loves living in the village because the villagers are friendly and life is more peaceful.",
      isTrue: true,
      explanation: 'Đúng (True). Khớp câu cuối: "She likes living there because the villagers are friendly, and life in the country is more peaceful."',
    },
  ],
};

export const U20_TASK6_DIALOGUE: DialogueOrderItem[] = [
  {
    key: 'C',
    speaker: 'Lan',
    text: 'Which one is larger, Nha Trang in Viet Nam or Gold Coast in Australia, Phong?',
    textVi: 'Phong ơi, nơi nào rộng lớn hơn, Nha Trang ở Việt Nam hay Gold Coast ở Úc?',
    correctStep: 0,
  },
  {
    key: 'B',
    speaker: 'Phong',
    text: 'I think Gold Coast is. It has a lot of taller buildings along the coast.',
    textVi: 'Mình nghĩ Gold Coast lớn hơn. Ở đó có nhiều tòa nhà cao hơn dọc bờ biển.',
    correctStep: 1,
  },
  {
    key: 'E',
    speaker: 'Lan',
    text: 'And which one is more beautiful?',
    textVi: 'Thế nơi nào đẹp hơn?',
    correctStep: 2,
  },
  {
    key: 'D',
    speaker: 'Phong',
    text: 'More beautiful? I think Gold Coast is... But Nha Trang is more exciting and...',
    textVi: 'Đẹp hơn á? Mình nghĩ Gold Coast... Nhưng Nha Trang sôi động hơn và...',
    correctStep: 3,
  },
  {
    key: 'A',
    speaker: 'Lan',
    text: '...and the seafood there is much cheaper, right?',
    textVi: '...và hải sản ở đó rẻ hơn nhiều, đúng không?',
    correctStep: 4,
  },
  {
    key: 'F',
    speaker: 'Phong',
    text: "That's true. The seafood in Nha Trang is wonderful!",
    textVi: 'Đúng thế. Hải sản ở Nha Trang tuyệt vời lắm!',
    correctStep: 5,
  },
];

export const U20_TASK7_INTONATION: IntonationChoiceItem[] = [
  {
    id: 'p155-u20t7-1',
    prefix: 'Which one is bigger,',
    choiceA: 'London',
    choiceB: 'Hai Phong?',
    fullSentence: 'Which one is bigger, London or Hai Phong?',
    meaningVi: 'Nơi nào lớn hơn, Luân Đôn hay Hải Phòng?',
    tip: 'Hạ giọng ở "bigger" (↘), lên giọng ở lựa chọn 1 "London" (↗), hạ giọng dứt khoát ở lựa chọn 2 "Hai Phong" (↘).',
  },
  {
    id: 'p155-u20t7-2',
    prefix: 'Which one is larger,',
    choiceA: 'the USA',
    choiceB: 'Viet Nam?',
    fullSentence: 'Which one is larger, the USA or Viet Nam?',
    meaningVi: 'Nước nào rộng lớn hơn, nước Mỹ hay Việt Nam?',
    tip: 'Lên giọng ở "the USA" (↗) để báo hiệu còn lựa chọn sau, rồi xuống giọng ở "Viet Nam" (↘).',
  },
  {
    id: 'p155-u20t7-3',
    prefix: 'Which one is more beautiful,',
    choiceA: 'Ha Long City',
    choiceB: 'Sydney?',
    fullSentence: 'Which one is more beautiful, Ha Long City or Sydney?',
    meaningVi: 'Nơi nào đẹp hơn, Thành phố Hạ Long hay Sydney?',
    tip: 'Nhấn rõ "more beautiful" (↘), lên giọng "Ha Long City" (↗), xuống giọng "Sydney" (↘).',
  },
  {
    id: 'p155-u20t7-4',
    prefix: 'Which one is more peaceful,',
    choiceA: 'Da Lat',
    choiceB: 'New York City?',
    fullSentence: 'Which one is more peaceful, Da Lat or New York City?',
    meaningVi: 'Nơi nào yên bình hơn, Đà Lạt hay Thành phố New York?',
    tip: 'Nhớ quy tắc vàng câu hỏi có "or": ↘ (vế hỏi) — ↗ (A) — or — ↘ (B)!',
  },
];

export const U20_TASK8_KATE_BLANKS: ParagraphBlank[] = [
  {
    id: 'p155-u20t8-1',
    index: 1,
    answers: ['banks'],
    hint: 'Ngân hàng số nhiều (chú ý có "a lot of buildings, shops and ___"): banks.',
    iconKey: 'bank',
  },
  {
    id: 'p155-u20t8-2',
    index: 2,
    answers: ['jams'],
    hint: 'Cụm từ "tắc đường": traffic ______ (số nhiều vì đi với "There are").',
    iconKey: 'traffic',
  },
  {
    id: 'p155-u20t8-3',
    index: 3,
    answers: ['grandparents'],
    hint: 'Ông bà (12 chữ cái): grandparents.',
    iconKey: 'grandparents',
  },
  {
    id: 'p155-u20t8-4',
    index: 4,
    answers: ['kilometres', 'kilometers'],
    hint: 'Đơn vị đo khoảng cách (km) số nhiều sau fifty: kilometres (hoặc kilometers).',
    iconKey: 'km',
  },
  {
    id: 'p155-u20t8-5',
    index: 5,
    answers: ['goods'],
    hint: 'Hàng hóa (đi với "are much cheaper"): goods.',
    iconKey: 'goods',
  },
];

export const U20_TASK9_WORLD_CITIES: FillItem[] = [
  {
    id: 'p156-u20t9-1',
    before: '1. New York is busier than ',
    after: '.',
    answers: ['Paris'],
    hint: 'Thành phố có Tháp Eiffel nổi tiếng ở nước Pháp: Paris.',
    explanation: 'New York is busier than Paris. (New York nhộn nhịp hơn Paris.)',
    iconKey: 'paris',
  },
  {
    id: 'p156-u20t9-2',
    before: '2. ',
    after: ' is smaller than Malaysia.',
    answers: ['Singapore'],
    hint: 'Đảo quốc Sư tử có tượng Merlion phun nước: Singapore.',
    explanation: 'Singapore is smaller than Malaysia. (Singapore nhỏ hơn Malaysia.)',
    iconKey: 'singapore',
  },
  {
    id: 'p156-u20t9-3',
    before: '3. New York is more modern than ',
    after: '.',
    answers: ['Bangkok'],
    hint: 'Thủ đô nổi tiếng với những ngôi chùa vàng ở Thái Lan: Bangkok.',
    explanation: 'New York is more modern than Bangkok. (New York hiện đại hơn Bangkok.)',
    iconKey: 'bangkok',
  },
  {
    id: 'p156-u20t9-4',
    before: '4. ',
    after: ' is more expensive than Da Nang.',
    answers: ['Tokyo'],
    hint: 'Thủ đô hiện đại có Núi Phú Sĩ và hoa anh đào ở Nhật Bản: Tokyo.',
    explanation: 'Tokyo is more expensive than Da Nang. (Tokyo đắt đỏ hơn Đà Nẵng.)',
    iconKey: 'tokyo',
  },
  {
    id: 'p156-u20t9-5',
    before: '5. Gold Coast in ',
    after: ' is more beautiful than Ha Long Bay in Viet Nam.',
    answers: ['Australia'],
    hint: 'Đất nước của chuột túi Kangaroo và Nhà hát Con Sò Sydney: Australia.',
    explanation: 'Gold Coast in Australia is more beautiful than Ha Long Bay in Viet Nam.',
    iconKey: 'australia',
  },
];

export const U20_WORLD_CITY_FACTS: WorldCityFact[] = [
  {
    id: 'city-paris',
    city: 'Paris',
    country: 'France (Pháp)',
    iconKey: 'paris',
    landmark: 'Eiffel Tower · Tháp Eiffel',
    comparisonSentence: 'New York is busier than Paris.',
    comparisonVi: 'New York nhộn nhịp hơn Paris.',
    traits: 'Lãng mạn, cổ kính, kinh đô nghệ thuật.',
  },
  {
    id: 'city-singapore',
    city: 'Singapore',
    country: 'Singapore',
    iconKey: 'singapore',
    landmark: 'Merlion Park · Tượng Sư tử biển',
    comparisonSentence: 'Singapore is smaller than Malaysia.',
    comparisonVi: 'Singapore nhỏ hơn Malaysia.',
    traits: 'Xanh, sạch, siêu hiện đại ở Đông Nam Á.',
  },
  {
    id: 'city-bangkok',
    city: 'Bangkok',
    country: 'Thailand (Thái Lan)',
    iconKey: 'bangkok',
    landmark: 'Golden Temples · Chùa Vàng',
    comparisonSentence: 'New York is more modern than Bangkok.',
    comparisonVi: 'New York hiện đại hơn Bangkok.',
    traits: 'Ẩm thực đường phố phong phú, chùa tháp lộng lẫy.',
  },
  {
    id: 'city-tokyo',
    city: 'Tokyo',
    country: 'Japan (Nhật Bản)',
    iconKey: 'tokyo',
    landmark: 'Mount Fuji & Sakura · Núi Phú Sĩ',
    comparisonSentence: 'Tokyo is more expensive than Da Nang.',
    comparisonVi: 'Tokyo đắt đỏ hơn Đà Nẵng.',
    traits: 'Đông dân, tàu siêu tốc hiện đại, chi phí sinh hoạt cao.',
  },
  {
    id: 'city-australia',
    city: 'Sydney & Gold Coast',
    country: 'Australia (Úc)',
    iconKey: 'australia',
    landmark: 'Sydney Opera House · Nhà hát Con Sò',
    comparisonSentence: 'The Sydney Opera House is more beautiful than the Ha Noi Opera House.',
    comparisonVi: 'Nhà hát Sydney đẹp hơn Nhà hát Lớn Hà Nội.',
    traits: 'Bờ biển xanh trải dài, thành phố cảng nổi tiếng.',
  },
];

export const U20_TASK10_ORDERS: OrderSentenceItem[] = [
  {
    id: 'p157-u20t10-1',
    words: ['more', 'Da Nang.', 'is', 'Ho Chi Minh City', 'than', 'exciting'],
    answer: 'Ho Chi Minh City is more exciting than Da Nang.',
    meaning: 'TP. Hồ Chí Minh sôi động hơn Đà Nẵng.',
    explanation: 'Ho Chi Minh City + is + more exciting + than + Da Nang.',
  },
  {
    id: 'p157-u20t10-2',
    words: ['quieter', 'Da Lat', 'Can Tho.', 'is', 'than'],
    answer: 'Da Lat is quieter than Can Tho.',
    meaning: 'Đà Lạt yên tĩnh hơn Cần Thơ.',
    explanation: 'Da Lat + is + quieter + than + Can Tho.',
  },
  {
    id: 'p157-u20t10-3',
    words: ['Tokyo.', 'New York', 'modern', 'is', 'than', 'more'],
    answer: 'New York is more modern than Tokyo.',
    meaning: 'New York hiện đại hơn Tokyo.',
    explanation: 'New York + is + more modern + than + Tokyo.',
  },
  {
    id: 'p157-u20t10-4',
    words: ['is', 'London?', 'larger,', 'Which', 'or', 'one', 'Paris'],
    answer: 'Which one is larger, Paris or London?',
    meaning: 'Nơi nào rộng lớn hơn, Paris hay Luân Đôn?',
    explanation: 'Which one is + larger, + Paris or London?',
  },
  {
    id: 'p157-u20t10-5',
    words: ['Ha Long City', 'Which', 'beautiful,', 'more', 'is', 'place', 'Nha Trang?', 'or'],
    answer: 'Which place is more beautiful, Ha Long City or Nha Trang?',
    meaning: 'Nơi nào đẹp hơn, Thành phố Hạ Long hay Nha Trang?',
    explanation: 'Which place is + more beautiful, + Ha Long City or Nha Trang?',
  },
];

export const U20_TASK11_NGA_PASSAGE = {
  title: 'Task 11 (Trang 157): Đọc bài của Nga (Vĩnh Phúc vs. Hà Nội) và chọn đáp án đúng',
  passage:
    "Hello. My name's Nga. I live in a village in Vinh Phuc Province. It's about sixty kilometres from Ha Noi. The village is small and quiet. There are not many people, shops and traffic. I enjoy living here because life is peaceful and the people are friendly. At weekends, my parents often take me to Ha Noi. It's much noisier and busier. It has lots of large lakes, beautiful parks and tall buildings. The streets are so crowded and things are more expensive. I like Ha Noi because the shops are really nice and life is exciting.",
  passageVi:
    'Xin chào. Mình tên là Nga. Mình sống ở một ngôi làng thuộc tỉnh Vĩnh Phúc, cách Hà Nội khoảng 60 km. Ngôi làng nhỏ và yên tĩnh. Không có nhiều người, cửa hàng và xe cộ. Mình thích sống ở đây vì cuộc sống yên bình và mọi người thân thiện. Vào cuối tuần, bố mẹ thường đưa mình lên Hà Nội. Nơi đó ồn ào và nhộn nhịp hơn nhiều. Hà Nội có nhiều hồ lớn, công viên đẹp và các tòa nhà cao tầng. Đường phố rất đông đúc và mọi thứ đắt đỏ hơn. Mình thích Hà Nội vì các cửa hàng rất đẹp và cuộc sống thật sôi động.',
  note: 'Đã tự động bỏ câu in lặp "The village is small and quiet." và sửa chính tả "buidings" → "buildings" so với bản in gốc.',
};

export const U20_TASK11_NGA_CHOICES: QuizChoiceItem[] = [
  {
    id: 'p157-u20t11-1',
    prompt: "1. What's Nga's village like?",
    options: ["a. It's small.", "b. It's large."],
    correctIndex: 0,
    explanation: 'Đáp án a. Bài đọc nêu: "The village is small and quiet."',
  },
  {
    id: 'p157-u20t11-2',
    prompt: "2. What's life in the village like?",
    options: ["a. It's exciting.", "b. It's peaceful."],
    correctIndex: 1,
    explanation: 'Đáp án b. Bài đọc viết: "life is peaceful and the people are friendly."',
  },
  {
    id: 'p157-u20t11-3',
    prompt: "3. What's Ha Noi like?",
    options: ["a. It's quiet.", "b. It's noisy."],
    correctIndex: 1,
    explanation: 'Đáp án b. Hà Nội "much noisier and busier" (ồn ào và nhộn nhịp hơn nhiều).',
  },
  {
    id: 'p157-u20t11-4',
    prompt: '4. Which one is busier, Ha Noi or Vinh Phuc?',
    options: ['a. Ha Noi is.', 'b. Vinh Phuc is.'],
    correctIndex: 0,
    explanation: 'Đáp án a. Hà Nội nhộn nhịp hơn Vĩnh Phúc ("It\'s much noisier and busier").',
  },
  {
    id: 'p157-u20t11-5',
    prompt: '5. Things are more expensive in ________.',
    options: ['a. Ha Noi', 'b. Vinh Phuc'],
    correctIndex: 0,
    explanation: 'Đáp án a. Trong đoạn mô tả Hà Nội: "things are more expensive."',
  },
];

export const U20_TASK12_WRITING: GuidedWritingPrompt[] = [
  {
    id: 'p158-u20t12-1',
    question: '1. Where do you live? (Em đang sống ở đâu?)',
    starter: 'I live',
    placeholder: 'in a small town in Nam Dinh Province...',
    sample: 'in a small town in Nam Dinh Province',
  },
  {
    id: 'p158-u20t12-2',
    question:
      '2. Which city is bigger, your town or Ha Noi / Ho Chi Minh City? (Nơi nào lớn hơn, quê em hay Hà Nội / TP.HCM?)',
    starter: 'I think',
    placeholder: 'Ha Noi is bigger than my town...',
    sample: 'Ha Noi is bigger than my town',
  },
  {
    id: 'p158-u20t12-3',
    question: '3. Which one is more peaceful? (Nơi nào yên bình hơn?)',
    starter: 'My town',
    placeholder: 'is more peaceful than Ha Noi...',
    sample: 'is more peaceful than Ha Noi',
  },
  {
    id: 'p158-u20t12-4',
    question: '4. Which one is more exciting and busier? (Nơi nào sôi động và nhộn nhịp hơn?)',
    starter: 'Ha Noi',
    placeholder: 'is more exciting and busier than my town...',
    sample: 'is more exciting and busier than my town',
  },
  {
    id: 'p158-u20t12-5',
    question: '5. Where do you like living and why? (Em thích sống ở đâu và tại sao?)',
    starter: 'I like living',
    placeholder: 'in my town because the air is fresh and people are friendly...',
    sample: 'in my town because it is quieter and the people are friendly',
  },
];

/* =========================================================
   KHO ĐÁP ÁN & TỔNG ÔN TRỰC QUAN — TRANG 158 -> TRANG 167
   (ĐỐI CHIẾU CHUẨN SÁCH IN UNIT 1 -> UNIT 11)
   ========================================================= */
export const ANSWER_KEY_PAGES_158_167: Record<number, AnswerKeyUnitBlock[]> = {
  158: [
    {
      id: 'key-p158-u1',
      unitNumber: 1,
      unitTitle: "Unit 1: What's your address? (Task 1 – Task 6)",
      pageRangeNote: 'Bài gốc: Trang 4 – Trang 7',
      jumpPage: 4,
      accent: 'sky',
      tasks: [
        {
          taskLabel: 'Task 1 · Chọn từ khác loại',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'A' },
            { num: '2', text: 'D' },
            { num: '3', text: 'B' },
            { num: '4', text: 'C' },
            { num: '5', text: 'D' },
          ],
        },
        {
          taskLabel: 'Task 2 · Định nghĩa địa điểm',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'tower', speak: 'tower' },
            { num: '2', text: 'lane', speak: 'lane' },
            { num: '3', text: 'village', speak: 'village' },
            { num: '4', text: 'address', speak: 'address' },
          ],
        },
        {
          taskLabel: 'Task 3 · Trắc nghiệm giới từ & địa chỉ',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'C' },
            { num: '2', text: 'A' },
            { num: '3', text: 'A' },
            { num: '4', text: 'B' },
            { num: '5', text: 'C' },
            { num: '6', text: 'B' },
            { num: '7', text: 'A' },
          ],
        },
        {
          taskLabel: 'Task 4 · Đọc hiểu Đúng / Sai',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'T' },
            { num: '2', text: 'T' },
            { num: '3', text: 'F' },
            { num: '4', text: 'T' },
          ],
          note: 'Lưu ý: Câu 1 trong bài đọc gốc nhắc Xuan Mai Tower còn đề ghi Blue Sky Tower — ở trang học gốc Tr. 5 đã có chú thích rõ cho em.',
        },
        {
          taskLabel: 'Task 5 · Nối câu hỏi – trả lời',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'D' },
            { num: '2', text: 'A' },
            { num: '3', text: 'B' },
            { num: '4', text: 'E' },
          ],
        },
        {
          taskLabel: 'Task 6 · Nhìn tranh điền từ',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'Street', speak: 'Street' },
            { num: '2', text: 'mountains', speak: 'mountains' },
            { num: '3', text: 'Tower', speak: 'Tower' },
            { num: '4', text: 'flat', speak: 'flat' },
          ],
        },
      ],
    },
  ],
  159: [
    {
      id: 'key-p159-u1',
      unitNumber: 1,
      unitTitle: "Unit 1: What's your address? (Task 7 – Task 10)",
      pageRangeNote: 'Bài gốc: Trang 7 – Trang 9',
      jumpPage: 7,
      accent: 'sky',
      tasks: [
        {
          taskLabel: 'Task 7 · 10 câu sắp xếp chuẩn',
          summaryType: 'sentences',
          items: [
            { num: '1', text: 'Where do you live?', speak: 'Where do you live?' },
            { num: '2', text: 'I live in a small village.', speak: 'I live in a small village.' },
            { num: '3', text: "What's your address?", speak: "What's your address?" },
            { num: '4', text: "It's 74 Kim Ma Street.", speak: "It's 74 Kim Ma Street." },
            { num: '5', text: "What's your hometown like?", speak: "What's your hometown like?" },
            { num: '6', text: "It's large and crowded.", speak: "It's large and crowded." },
            { num: '7', text: 'She lives on the second floor of Ha Noi Tower.', speak: 'She lives on the second floor of Ha Noi Tower.' },
            { num: '8', text: 'I live with my parents in a flat.', speak: 'I live with my parents in a flat.' },
            { num: '9', text: 'My village is far from the city centre.', speak: 'My village is far from the city centre.' },
            { num: '10', text: 'There are modern towers in my city.', speak: 'There are modern towers in my city.' },
          ],
        },
        {
          taskLabel: 'Task 8 · Đoạn văn về Jack',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'mountains' },
            { num: '2', text: 'address' },
            { num: '3', text: 'Tower' },
            { num: '4', text: 'Centre' },
            { num: '5', text: 'school' },
          ],
        },
        {
          taskLabel: 'Task 9 · Tìm lỗi sai',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'A' },
            { num: '2', text: 'B' },
            { num: '3', text: 'A' },
          ],
        },
        {
          taskLabel: 'Task 10 · Viết tự do về địa chỉ của em',
          summaryType: 'writing',
          items: [{ text: 'Học sinh tự điền địa chỉ và mô tả nơi mình sống (có khung chấm gợi ý tại Trang 9).' }],
        },
      ],
    },
    {
      id: 'key-p159-u2',
      unitNumber: 2,
      unitTitle: 'Unit 2: I always get up early. How about you? (Task 1 – Task 7)',
      pageRangeNote: 'Bài gốc: Trang 13 – Trang 16',
      jumpPage: 13,
      accent: 'amber',
      tasks: [
        {
          taskLabel: 'Task 1 · Ngữ âm',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'B' },
            { num: '2', text: 'C' },
            { num: '3', text: 'A' },
            { num: '4', text: 'B' },
            { num: '5', text: 'D' },
          ],
        },
        {
          taskLabel: 'Task 2 · Trắc nghiệm thói quen',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'B' },
            { num: '2', text: 'A' },
            { num: '3', text: 'C' },
            { num: '4', text: 'B' },
            { num: '5', text: 'D' },
          ],
        },
        {
          taskLabel: 'Task 3 · Định nghĩa hoạt động',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'morning', speak: 'morning' },
            { num: '2', text: 'always', speak: 'always' },
            { num: '3', text: 'do homework', speak: 'do homework' },
            { num: '4', text: 'study with a partner', speak: 'study with a partner' },
          ],
        },
        {
          taskLabel: 'Task 4 · Đọc hiểu Đúng / Sai',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'T' },
            { num: '2', text: 'F' },
            { num: '3', text: 'T' },
            { num: '4', text: 'F' },
          ],
        },
        {
          taskLabel: 'Task 5 · Nối câu hỏi – trả lời',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'D' },
            { num: '2', text: 'B' },
            { num: '3', text: 'A' },
            { num: '4', text: 'E' },
          ],
        },
        {
          taskLabel: 'Task 6 · Hội thoại Adam & Susan',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'are' },
            { num: '2', text: 'cooking' },
            { num: '3', text: 'late' },
            { num: '4', text: 'often' },
            { num: '5', text: 'Twice' },
          ],
        },
        {
          taskLabel: 'Task 7 · Một ngày của Joe',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'exercise' },
            { num: '2', text: 'basketball' },
            { num: '3', text: 'homework' },
            { num: '4', text: 'bed' },
            { num: '5', text: '10' },
          ],
        },
      ],
    },
  ],
  160: [
    {
      id: 'key-p160-u2',
      unitNumber: 2,
      unitTitle: 'Unit 2: I always get up early. (Task 8 – Task 10)',
      pageRangeNote: 'Bài gốc: Trang 16 – Trang 17',
      jumpPage: 16,
      accent: 'amber',
      tasks: [
        {
          taskLabel: 'Task 8 · Nhìn tranh & lịch điền từ',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'always' },
            { num: '2', text: 'rides' },
            { num: '3', text: 'once' },
            { num: '4', text: 'study' },
          ],
        },
        {
          taskLabel: 'Task 9 · 4 câu sắp xếp',
          summaryType: 'sentences',
          items: [
            { num: '1', text: 'How often do you do morning exercise?', speak: 'How often do you do morning exercise?' },
            { num: '2', text: 'What do you do in the evening?', speak: 'What do you do in the evening?' },
            { num: '3', text: 'My father goes fishing once a week.', speak: 'My father goes fishing once a week.' },
            { num: '4', text: 'I never surf the internet at night.', speak: 'I never surf the internet at night.' },
          ],
        },
        {
          taskLabel: 'Task 10 · Viết về thói quen của em',
          summaryType: 'writing',
          items: [{ text: 'Học sinh tự viết đoạn văn theo câu hỏi gợi ý tại Trang 17.' }],
        },
      ],
    },
    {
      id: 'key-p160-u3',
      unitNumber: 3,
      unitTitle: 'Unit 3: Where did you go on holiday? (Trọn bộ Task 1 – Task 10)',
      pageRangeNote: 'Bài gốc: Trang 20 – Trang 24',
      jumpPage: 20,
      accent: 'emerald',
      tasks: [
        {
          taskLabel: 'Task 1 · Đoán phương tiện',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'plane', speak: 'plane' },
            { num: '2', text: 'ship', speak: 'ship' },
            { num: '3', text: 'underground', speak: 'underground' },
            { num: '4', text: 'motorbike', speak: 'motorbike' },
          ],
        },
        {
          taskLabel: 'Task 2 · Điền từ & Đúng/Sai',
          summaryType: 'chips',
          items: [
            { num: '0', text: 'parents' },
            { num: '1', text: 'different' },
            { num: '2', text: 'visited' },
            { num: '3', text: 'coach' },
            { num: '4', text: 'Museum' },
            { num: '5', text: 'ate' },
            { num: '6', text: 'T' },
            { num: '7', text: 'T' },
            { num: '8', text: 'T' },
            { num: '9', text: 'F' },
            { num: '10', text: 'T' },
          ],
        },
        {
          taskLabel: 'Task 3 · Nối câu',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'A' },
            { num: '2', text: 'C' },
            { num: '3', text: 'E' },
            { num: '4', text: 'B' },
          ],
        },
        {
          taskLabel: 'Task 4 · Kỳ nghỉ Vịnh Hạ Long',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'Bay' },
            { num: '2', text: 'plane' },
            { num: '3', text: 'coach' },
            { num: '4', text: 'swam' },
            { num: '5', text: 'seafood' },
          ],
        },
        {
          taskLabel: 'Task 5, 6, 7 & 8 · Trắc nghiệm & Ngữ âm',
          summaryType: 'chips',
          items: [
            { num: 'T5', text: '1.D · 2.A · 3.D · 4.A · 5.C' },
            { num: 'T6', text: '1.a · 2.d · 3.d' },
            { num: 'T7', text: '1.c · 2.d' },
            { num: 'T8', text: '1.b · 2.c · 3.b · 4.c · 5.c' },
          ],
        },
        {
          taskLabel: 'Task 9 · 4 câu sắp xếp',
          summaryType: 'sentences',
          items: [
            { num: '1', text: 'Where did you go last weekend?', speak: 'Where did you go last weekend?' },
            { num: '2', text: 'I went to my hometown.', speak: 'I went to my hometown.' },
            { num: '3', text: 'How did you get there?', speak: 'How did you get there?' },
            { num: '4', text: 'I went there by train.', speak: 'I went there by train.' },
          ],
        },
      ],
    },
  ],
  161: [
    {
      id: 'key-p161-u4',
      unitNumber: 4,
      unitTitle: 'Unit 4: Did you go to the party? (Trọn bộ Task 1 – Task 8)',
      pageRangeNote: 'Bài gốc: Trang 28 – Trang 33',
      jumpPage: 28,
      accent: 'rose',
      tasks: [
        {
          taskLabel: 'Task 1 · Chọn từ khác loại',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'party' },
            { num: '2', text: 'went' },
            { num: '3', text: 'have' },
            { num: '4', text: 'today' },
            { num: '5', text: 'zoo' },
          ],
        },
        {
          taskLabel: 'Task 2 · Định nghĩa sự kiện',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'birthday party', speak: 'birthday party' },
            { num: '2', text: 'cartoon', speak: 'cartoon' },
            { num: '3', text: 'festival of flowers', speak: 'festival of flowers' },
            { num: '4', text: 'funfair', speak: 'funfair' },
          ],
        },
        {
          taskLabel: 'Task 3 · Đọc hiểu Đúng / Sai',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'F' },
            { num: '2', text: 'T' },
            { num: '3', text: 'F' },
            { num: '4', text: 'T' },
          ],
        },
        {
          taskLabel: 'Task 4 · Động từ quá khứ đơn (12 động từ chuẩn)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'went' },
            { num: '2', text: 'bought' },
            { num: '3', text: 'gave' },
            { num: '4', text: 'was' },
            { num: '5', text: 'enjoyed' },
            { num: '6', text: 'listened' },
            { num: '7', text: 'danced' },
            { num: '8', text: 'drank' },
            { num: '9', text: 'ate' },
            { num: '10', text: 'played' },
            { num: '11', text: 'ended' },
            { num: '12', text: 'were' },
          ],
          note: 'Trả lời 10 câu hỏi đọc hiểu xoay quanh bữa tiệc sinh nhật của Nam: Sunday evening, at home, a robot, 7:00 p.m., Yes they did, hide-and-seek, 9:00 p.m., happy.',
        },
        {
          taskLabel: 'Task 5 & Task 6 · Điền đoạn văn & Nhìn tranh',
          summaryType: 'chips',
          items: [
            { num: 'T5', text: '1. bookstall · 2. bought · 3. books · 4. photographs · 5. had' },
            { num: 'T6', text: '1. party · 2. CDs · 3. juice · 4. danced' },
          ],
        },
        {
          taskLabel: 'Task 7 · 4 câu sắp xếp',
          summaryType: 'sentences',
          items: [
            { num: '1', text: 'Did you go to the party?', speak: 'Did you go to the party?' },
            { num: '2', text: 'What was the party like?', speak: 'What was the party like?' },
            { num: '3', text: 'What did you do there?', speak: 'What did you do there?' },
            { num: '4', text: 'Did you enjoy the party?', speak: 'Did you enjoy the party?' },
          ],
        },
      ],
    },
  ],
  162: [
    {
      id: 'key-p162-u5',
      unitNumber: 5,
      unitTitle: 'Unit 5: Where will you be this weekend? (Trọn bộ Task 1 – Task 9)',
      pageRangeNote: 'Bài gốc: Trang 35 – Trang 39',
      jumpPage: 35,
      accent: 'teal',
      tasks: [
        {
          taskLabel: 'Task 1, 2, 3 & 4 · Trắc nghiệm, Nối & Đúng/Sai',
          summaryType: 'chips',
          items: [
            { num: 'T1', text: '1.d · 2.a · 3.b · 4.c · 5.d' },
            { num: 'T2', text: '1.h · 2.g · 3.c · 4.f · 5.d · 6.a · 7.b · 8.e' },
            { num: 'T3', text: '1.d · 2.a · 3.b · 4.c · 5.d' },
            { num: 'T4', text: '1.F · 2.T · 3.T · 4.F' },
          ],
        },
        {
          taskLabel: 'Task 5 & Task 6 · Điền từ theo tranh',
          summaryType: 'chips',
          items: [
            { num: 'T5', text: '1. cave(s) · 2. sea · 3. beach · 4. mountains · 5. home' },
            { num: 'T6', text: '1. forest · 2. home · 3. boat · 4. sea · 5. summer' },
          ],
        },
        {
          taskLabel: 'Task 7 · Điền từ để hỏi (Wh-questions)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'What' },
            { num: '2', text: 'Who' },
            { num: '3', text: 'Where' },
            { num: '4', text: 'What time' },
            { num: '5', text: 'How' },
            { num: '6', text: 'When' },
            { num: '7', text: 'Why' },
            { num: '8', text: 'Where' },
          ],
        },
        {
          taskLabel: 'Task 8 · 4 câu tương lai đơn (will)',
          summaryType: 'sentences',
          items: [
            { num: '1', text: 'Where will you be this weekend?', speak: 'Where will you be this weekend?' },
            { num: '2', text: 'I think I will be at the seaside.', speak: 'I think I will be at the seaside.' },
            { num: '3', text: 'What will you do at Ha Long Bay?', speak: 'What will you do at Ha Long Bay?' },
            { num: '4', text: 'We will explore the caves and take a boat trip.', speak: 'We will explore the caves and take a boat trip.' },
          ],
        },
      ],
    },
    {
      id: 'key-p162-u6',
      unitNumber: 6,
      unitTitle: 'Unit 6: How many lessons do you have today? (Task 1 – Task 5)',
      pageRangeNote: 'Bài gốc: Trang 42 – Trang 45',
      jumpPage: 42,
      accent: 'indigo',
      tasks: [
        {
          taskLabel: 'Task 1, 2 & 3',
          summaryType: 'chips',
          items: [
            { num: 'T1', text: '1.D · 2.F · 3.E · 4.A · 5.G · 6.B · 7.C' },
            { num: 'T2', text: '1.a · 2.a · 3.c · 4.c · 5.b · 6.a · 7.b' },
            { num: 'T3', text: '1.F · 2.F · 3.T · 4.T' },
          ],
        },
        {
          taskLabel: 'Task 4 & Task 5 · Thời khóa biểu',
          summaryType: 'chips',
          items: [
            { num: 'T4', text: '1. Science · 2. weekday · 3. once · 4. Saturday · 5. English' },
            { num: 'T5', text: '1. Primary School · 2. week · 3. Friday · 4. Maths · 5. twice' },
          ],
        },
      ],
    },
  ],
  163: [
    {
      id: 'key-p163-u6',
      unitNumber: 6,
      unitTitle: 'Unit 6: How many lessons do you have today? (Task 6 – Task 8)',
      pageRangeNote: 'Bài gốc: Trang 45 – Trang 47',
      jumpPage: 45,
      accent: 'indigo',
      tasks: [
        {
          taskLabel: 'Task 6 · 8 câu sắp xếp (đã chuẩn hóa chính tả)',
          summaryType: 'sentences',
          items: [
            { num: '1', text: 'How many lessons do you have today?', speak: 'How many lessons do you have today?' },
            { num: '2', text: 'I have four: Maths, Vietnamese, English and PE.', speak: 'I have four: Maths, Vietnamese, English and PE.' },
            { num: '3', text: 'How often do you have English?', speak: 'How often do you have English?' },
            { num: '4', text: 'I have it four times a week.', speak: 'I have it four times a week.' },
            { num: '5', text: "What is your younger brother's favourite subject?", speak: "What is your younger brother's favourite subject?" },
            { num: '6', text: 'We have Vietnamese lessons every school day.', speak: 'We have Vietnamese lessons every school day.' },
            { num: '7', text: 'She goes to school from Monday to Friday.', speak: 'She goes to school from Monday to Friday.' },
            { num: '8', text: 'I do my homework in the morning.', speak: 'I do my homework in the morning.' },
          ],
        },
        {
          taskLabel: 'Task 7 · Tìm lỗi sai',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'D' },
            { num: '2', text: 'A' },
            { num: '3', text: 'B' },
          ],
        },
      ],
    },
    {
      id: 'key-p163-u7',
      unitNumber: 7,
      unitTitle: 'Unit 7: How do you learn English? (Task 1 – Task 8 câu 1)',
      pageRangeNote: 'Bài gốc: Trang 49 – Trang 53',
      jumpPage: 49,
      accent: 'emerald',
      tasks: [
        {
          taskLabel: 'Task 1 · 15 từ vựng hoàn chỉnh',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'practise' },
            { num: '2', text: 'speak' },
            { num: '3', text: 'write' },
            { num: '4', text: 'email' },
            { num: '5', text: 'read' },
            { num: '6', text: 'hobby' },
            { num: '7', text: 'lesson' },
            { num: '8', text: 'listen' },
            { num: '9', text: 'talk' },
            { num: '10', text: 'road' },
            { num: '11', text: 'word' },
            { num: '12', text: 'learn' },
            { num: '13', text: 'vocabulary' },
            { num: '14', text: 'foreigner' },
            { num: '15', text: 'language' },
          ],
        },
        {
          taskLabel: 'Task 2, 3, 4 & 5',
          summaryType: 'chips',
          items: [
            { num: 'T2', text: '1. read · 2. listen · 3. speak · 4. write' },
            { num: 'T3', text: '1.A · 2.C · 3.D · 4.B' },
            { num: 'T4', text: '1.C · 2.D · 3.B · 4.A · 5.B · 6.A · 7.C' },
            { num: 'T5', text: '1.T · 2.F · 3.F · 4.T' },
          ],
        },
        {
          taskLabel: 'Task 6, 7 & Task 8 (câu 1)',
          summaryType: 'chips',
          items: [
            { num: 'T6', text: '1. comic · 2. cartoons · 3. write · 4. talking' },
            { num: 'T7', text: '1. word · 2. notebook · 3. kitchen · 4. reading · 5. singing' },
            { num: 'T8.1', text: 'She tries to guess its meaning.' },
          ],
        },
      ],
    },
  ],
  164: [
    {
      id: 'key-p164-u7',
      unitNumber: 7,
      unitTitle: 'Unit 7: How do you learn English? (Task 8 tiếp – Task 10)',
      pageRangeNote: 'Bài gốc: Trang 53 – Trang 54',
      jumpPage: 53,
      accent: 'emerald',
      tasks: [
        {
          taskLabel: 'Task 8 (câu 2–5) · Trả lời câu hỏi đọc hiểu',
          summaryType: 'sentences',
          items: [
            { num: '2', text: 'She writes new words in her notebook and reads them aloud.', speak: 'She writes new words in her notebook and reads them aloud.' },
            { num: '3', text: 'She learns to speak English by talking with her foreign friends.', speak: 'She learns to speak English by talking with her foreign friends.' },
            { num: '4', text: 'Because she wants to talk with her foreign friends and watch English cartoons.', speak: 'Because she wants to talk with her foreign friends and watch English cartoons.' },
            { num: '5', text: 'Yes, she does.', speak: 'Yes, she does.' },
          ],
        },
        {
          taskLabel: 'Task 9 · 4 câu sắp xếp',
          summaryType: 'sentences',
          items: [
            { num: '1', text: 'How do you practise speaking English?', speak: 'How do you practise speaking English?' },
            { num: '2', text: 'I speak English every day with my friends.', speak: 'I speak English every day with my friends.' },
            { num: '3', text: 'Why do you learn English?', speak: 'Why do you learn English?' },
            { num: '4', text: 'Because I want to read English comic books.', speak: 'Because I want to read English comic books.' },
          ],
        },
      ],
    },
    {
      id: 'key-p164-u8',
      unitNumber: 8,
      unitTitle: 'Unit 8: What are you reading? (Task 1 – Task 8 câu 1–5)',
      pageRangeNote: 'Bài gốc: Trang 56 – Trang 59',
      jumpPage: 56,
      accent: 'amber',
      tasks: [
        {
          taskLabel: 'Task 1 · 10 câu trắc nghiệm',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'D' },
            { num: '2', text: 'A' },
            { num: '3', text: 'B' },
            { num: '4', text: 'B' },
            { num: '5', text: 'D' },
            { num: '6', text: 'D' },
            { num: '7', text: 'A' },
            { num: '8', text: 'B' },
            { num: '9', text: 'D' },
            { num: '10', text: 'C' },
          ],
        },
        {
          taskLabel: 'Task 2, 3 & 4 · Nối, Đúng/Sai & Hội thoại',
          summaryType: 'chips',
          items: [
            { num: 'T2', text: '1.C · 2.D · 3.H · 4.G · 5.A · 6.E · 7.F · 8.B' },
            { num: 'T3', text: '1.F · 2.T · 3.T · 4.F' },
            { num: 'T4', text: '1.A · 2.E · 3.B · 4.D' },
          ],
        },
        {
          taskLabel: 'Task 5 · 12 từ vựng truyện cổ tích',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'comic' },
            { num: '2', text: 'borrow' },
            { num: '3', text: 'clever' },
            { num: '4', text: 'character' },
            { num: '5', text: 'gentle' },
            { num: '6', text: 'dwarf' },
            { num: '7', text: 'book' },
            { num: '8', text: 'ghost' },
            { num: '9', text: 'fairy' },
            { num: '10', text: 'interesting' },
            { num: '11', text: 'finish' },
            { num: '12', text: 'because' },
          ],
        },
        {
          taskLabel: 'Task 6 & Task 7',
          summaryType: 'chips',
          items: [
            { num: 'T6', text: '1. Seven · 2. Crow · 3. Lamp · 4. funny' },
            { num: 'T7', text: '1. reading · 2. library · 3. animals · 4. meat · 5. story' },
          ],
        },
        {
          taskLabel: 'Task 8 (câu 1–5) · Xếp câu',
          summaryType: 'sentences',
          items: [
            { num: '1', text: 'What are you reading?', speak: 'What are you reading?' },
            { num: '2', text: "I'm reading The Fox and the Crow.", speak: "I'm reading The Fox and the Crow." },
            { num: '3', text: "Who's the main character?", speak: "Who's the main character?" },
            { num: '4', text: 'What is Snow White like?', speak: 'What is Snow White like?' },
            { num: '5', text: "She's kind and gentle.", speak: "She's kind and gentle." },
          ],
        },
      ],
    },
  ],
  165: [
    {
      id: 'key-p165-u8',
      unitNumber: 8,
      unitTitle: 'Unit 8: What are you reading? (Task 8 tiếp – Task 10)',
      pageRangeNote: 'Bài gốc: Trang 59 – Trang 60',
      jumpPage: 59,
      accent: 'amber',
      tasks: [
        {
          taskLabel: 'Task 8 (câu 6–8) · Xếp câu tiếp',
          summaryType: 'sentences',
          items: [
            { num: '6', text: 'The fox is very clever.', speak: 'The fox is very clever.' },
            { num: '7', text: 'Aladdin is brave and generous.', speak: 'Aladdin is brave and generous.' },
            { num: '8', text: 'I like fairy tales very much.', speak: 'I like fairy tales very much.' },
          ],
        },
        {
          taskLabel: 'Task 9 · Điền hội thoại',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'going to do' },
            { num: '2', text: 'What' },
            { num: '3', text: 'Lamp' },
            { num: '4', text: 'time' },
            { num: '5', text: 'reading' },
            { num: '6', text: 'White' },
            { num: '7', text: "don't" },
          ],
        },
      ],
    },
    {
      id: 'key-p165-u9',
      unitNumber: 9,
      unitTitle: 'Unit 9: What did you see at the zoo? (Task 1 – Task 8 câu 1–2)',
      pageRangeNote: 'Bài gốc: Trang 63 – Trang 66',
      jumpPage: 63,
      accent: 'cyan',
      tasks: [
        {
          taskLabel: 'Task 1 · 10 từ vựng sở thú & trạng từ',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'slowly' },
            { num: '2', text: 'roar' },
            { num: '3', text: 'quietly', highlight: true },
            { num: '4', text: 'python' },
            { num: '5', text: 'peacock' },
            { num: '6', text: 'panda' },
            { num: '7', text: 'move' },
            { num: '8', text: 'loudly' },
            { num: '9', text: 'gorilla' },
            { num: '10', text: 'beautifully' },
          ],
          note: 'Đã sửa lỗi chính tả sách in ở số 3: "quitely" → chuẩn là "quietly" (có chữ e trước -ly).',
        },
        {
          taskLabel: 'Task 2, 3 & 4',
          summaryType: 'chips',
          items: [
            { num: 'T2', text: '1.j · 2.d · 3.f · 4.i · 5.a · 6.c · 7.b · 8.h · 9.g · 10.e' },
            { num: 'T3', text: '1.T · 2.F · 3.F · 4.T' },
            { num: 'T4', text: '1.E · 2.D · 3.B · 4.A' },
          ],
        },
        {
          taskLabel: 'Task 5 (A & B), Task 6 & Task 7',
          summaryType: 'chips',
          items: [
            { num: 'T5A', text: 'Where · zoo · How · bus · what · animals' },
            { num: 'T5B', text: 'go · zoo · animals · like · big · slowly' },
            { num: 'T6', text: '1. roared · 2. sprayed · 3. monkeys · 4. pythons · 5. penguin' },
            { num: 'T7', text: '1. peacock · 2. panda · 3. tigers · 4. gorillas · 5. kangaroos' },
          ],
        },
        {
          taskLabel: 'Task 8 (câu 1–2)',
          summaryType: 'sentences',
          items: [
            { num: '1', text: 'What did you see at the zoo?', speak: 'What did you see at the zoo?' },
            { num: '2', text: 'I saw two pythons and a crocodile.', speak: 'I saw two pythons and a crocodile.' },
          ],
        },
      ],
    },
  ],
  166: [
    {
      id: 'key-p166-u9',
      unitNumber: 9,
      unitTitle: 'Unit 9: What did you see at the zoo? (Task 8 tiếp – Task 11)',
      pageRangeNote: 'Bài gốc: Trang 66 – Trang 68',
      jumpPage: 66,
      accent: 'cyan',
      tasks: [
        {
          taskLabel: 'Task 8 (câu 3–8) · Xếp câu tiếp',
          summaryType: 'sentences',
          items: [
            { num: '3', text: 'What did the tigers do when you were there?', speak: 'What did the tigers do when you were there?' },
            { num: '4', text: 'They roared loudly.', speak: 'They roared loudly.' },
            { num: '5', text: 'The pandas ate bamboo slowly.', speak: 'The pandas ate bamboo slowly.' },
            { num: '6', text: 'The peacocks moved beautifully.', speak: 'The peacocks moved beautifully.' },
            { num: '7', text: 'The monkeys jumped up and down quickly.', speak: 'The monkeys jumped up and down quickly.' },
            { num: '8', text: 'My favourite zoo animals are elephants.', speak: 'My favourite zoo animals are elephants.' },
          ],
        },
        {
          taskLabel: 'Task 9 · 5 câu quá khứ đơn (đã sửa lỗi sách in)',
          summaryType: 'sentences',
          items: [
            { num: '1', text: 'I went swimming with my friends yesterday.', speak: 'I went swimming with my friends yesterday.', highlight: true },
            { num: '2', text: 'We went to the zoo by bus.', speak: 'We went to the zoo by bus.' },
            { num: '3', text: 'The gorillas moved quietly.', speak: 'The gorillas moved quietly.' },
            { num: '4', text: 'We took lots of photos of the animals.', speak: 'We took lots of photos of the animals.' },
            { num: '5', text: 'We had a wonderful day at the zoo.', speak: 'We had a wonderful day at the zoo.' },
          ],
          note: 'Đã sửa lỗi gõ của sách in ở câu 1: "I wen swimming" → chuẩn là "I went swimming".',
        },
      ],
    },
    {
      id: 'key-p166-u10',
      unitNumber: 10,
      unitTitle: 'Unit 10: When will Sports Day be? (Task 1 – Task 8 câu 1)',
      pageRangeNote: 'Bài gốc: Trang 72 – Trang 76',
      jumpPage: 72,
      accent: 'rose',
      tasks: [
        {
          taskLabel: 'Task 1, 2, 3 & 4',
          summaryType: 'chips',
          items: [
            { num: 'T1', text: '1.b · 2.a · 3.d · 4.d · 5.b · 6.d' },
            { num: 'T2', text: '1.d · 2.b · 3.c · 4.a · 5.b · 6.c' },
            { num: 'T3', text: "1. Teachers' Day · 2. Music Festival · 3. Children's Day · 4. Independence Day" },
            { num: 'T4', text: '1.T · 2.T · 3.F · 4.F' },
          ],
        },
        {
          taskLabel: 'Task 5 · 20 câu trắc nghiệm tổng hợp',
          summaryType: 'chips',
          items: [
            { num: '1–5', text: '1.b · 2.d · 3.c · 4.c · 5.b' },
            { num: '6–10', text: '6.d · 7.c · 8.b · 9.a · 10.d' },
            { num: '11–15', text: '11.b · 12.d · 13.a · 14.d · 15.b' },
            { num: '16–20', text: '16.a · 17.d · 18.a · 19.b · 20.c' },
          ],
        },
        {
          taskLabel: 'Task 6, Task 7 & Task 8 (câu 1)',
          summaryType: 'chips',
          items: [
            { num: 'T6', text: '1. Sports · 2. swim · 3. football · 4. badminton · 5. win' },
            { num: 'T7', text: "1. Teachers' Day · 2. play · 3. Children's Day · 4. Independence Day" },
            { num: 'T8.1', text: 'When will Sports Day be?' },
          ],
        },
      ],
    },
  ],
  167: [
    {
      id: 'key-p167-u10',
      unitNumber: 10,
      unitTitle: 'Unit 10: When will Sports Day be? (Task 8 câu 2–10 & Task 9)',
      pageRangeNote: 'Bài gốc: Trang 77 – Trang 78',
      jumpPage: 77,
      accent: 'rose',
      tasks: [
        {
          taskLabel: 'Task 8 (câu 2–10) · Xếp câu mẫu',
          summaryType: 'sentences',
          items: [
            { num: '2', text: "It'll be on Saturday.", speak: "It'll be on Saturday." },
            { num: '3', text: 'What are you going to do on Sports Day?', speak: 'What are you going to do on Sports Day?' },
            { num: '4', text: "I'm going to play basketball.", speak: "I'm going to play basketball." },
            { num: '5', text: "She's going to play table tennis.", speak: "She's going to play table tennis." },
            { num: '6', text: "They're going to play football.", speak: "They're going to play football." },
            { num: '7', text: "We're practising very hard for Sports Day.", speak: "We're practising very hard for Sports Day." },
            { num: '8', text: 'Our class hopes to win the match.', speak: 'Our class hopes to win the match.' },
            { num: '9', text: "Teachers' Day will be on November 20th.", speak: "Teachers' Day will be on November 20th." },
            { num: '10', text: "I'll sing a song at the Music Festival.", speak: "I'll sing a song at the Music Festival." },
          ],
        },
        {
          taskLabel: 'Task 9 · Tìm lỗi sai',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'a' },
            { num: '2', text: 'd' },
            { num: '3', text: 'b' },
          ],
        },
      ],
    },
    {
      id: 'key-p167-u11',
      unitNumber: 11,
      unitTitle: "Unit 11: What's the matter with you? (Task 1 – Task 5)",
      pageRangeNote: 'Bài gốc: Trang 81 – Trang 83',
      jumpPage: 81,
      accent: 'pink',
      tasks: [
        {
          taskLabel: 'Task 1 & Task 2 · Khác loại & Định nghĩa bệnh',
          summaryType: 'chips',
          items: [
            { num: 'T1', text: '1.b · 2.d · 3.b · 4.a · 5.b' },
            { num: 'T2', text: '1. sore eye · 2. fever · 3. dentist · 4. headache · 5. sweets' },
          ],
        },
        {
          taskLabel: "Task 3 · 18 câu khuyên với should / shouldn't",
          summaryType: 'chips',
          items: [
            { num: '1–6', text: "1. should · 2. shouldn't · 3. should · 4. shouldn't · 5. should · 6. shouldn't" },
            { num: '7–12', text: "7. should · 8. shouldn't · 9. should · 10. shouldn't · 11. should · 12. shouldn't" },
            { num: '13–18', text: "13. should · 14. should · 15. shouldn't · 16. shouldn't · 17. should* · 18. should", highlight: true },
          ],
          note: "Chú ý sửa lỗi in đáp án câu 17: Khi không thấy khỏe (don't feel well), bạn NÊN (should) đi khám bác sĩ — sách in nhầm thành shouldn't!",
        },
        {
          taskLabel: 'Task 4 · Đọc hiểu Đúng / Sai',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'T' },
            { num: '2', text: 'T' },
            { num: '3', text: 'F' },
            { num: '4', text: 'F' },
            { num: '5', text: 'T' },
          ],
        },
        {
          taskLabel: 'Task 5 · 15 từ vựng sức khỏe trên trang 167',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'doctor' },
            { num: '2', text: 'pain' },
            { num: '3', text: 'matter' },
            { num: '4', text: 'dear' },
            { num: '5', text: 'should' },
            { num: '11', text: 'has' },
            { num: '12', text: 'stomach' },
            { num: '13', text: 'sore' },
            { num: '14', text: 'backache' },
            { num: '15', text: 'later' },
            { num: '21', text: 'tooth' },
            { num: '22', text: 'throat' },
            { num: '23', text: 'fever' },
            { num: '24', text: 'take' },
            { num: '25', text: 'rest' },
          ],
        },
      ],
    },
  ],
};
