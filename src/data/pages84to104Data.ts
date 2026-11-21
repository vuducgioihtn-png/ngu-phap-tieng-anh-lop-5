import type {
  FillItem,
  GuidedWritingPrompt,
  OrderSentenceItem,
  PageVocabWord,
  ParagraphBlank,
  QuizChoiceItem,
} from './pages1to20Data';
import type { PairMatchItem } from './pages21to41Data';
import type { LetterFillItem } from './pages42to62Data';

export interface PageMeta104 {
  page: number;
  unit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
  title: string;
  subtitle: string;
  sectionTag: string;
}

export interface MistakeItem {
  id: string;
  number: number;
  sentence: string;
  wrongPart: string;
  corrections: string[];
  correctedSentence: string;
  explanation: string;
}

export interface SafetyScenePreset {
  id: string;
  iconKey: string;
  labelVi: string;
  action: string;
  warning: string;
  whyQuestion: string;
  consequence: string;
  consequenceVi: string;
  reply: string;
}

export interface ReadingQAItem {
  id: string;
  number: number;
  question: string;
  questionVi: string;
  keywords: string[];
  modelAnswer: string;
  explanation: string;
}

export interface VerbFormItem {
  id: string;
  number: number;
  parts: { text: string; verbCue?: string; answers?: string[] }[];
  fullSentence: string;
  explanation: string;
}

export interface ImperativeRewriteItem {
  id: string;
  number: number;
  original: string;
  originalVi: string;
  direction: 'to-negative' | 'to-positive';
  answers: string[];
  explanation: string;
}

export interface LeaveOneOutItem {
  id: string;
  number: number;
  wordWithExtra: string;
  extraIndex: number;
  correctWord: string;
  meaningVi: string;
  iconKey: string;
  tip: string;
}

export interface StoryStepItem {
  step: number;
  connector: string;
  connectorVi: string;
  iconKey: string;
  sentenceEn: string;
  sentenceVi: string;
  highlightWords: string[];
}

export const PAGES_84_TO_104_INDEX: PageMeta104[] = [
  { page: 84, unit: 11, title: 'Unit 11 · Task 5 (3 từ cuối) & Task 6 (Tìm & sửa 18 lỗi sai sức khỏe)', subtitle: 'Hoàn tất chính tả scratch / both / knee và săn 18 lỗi sai ngữ pháp cực hay gặp trong đề thi', sectionTag: 'Chính tả · Sửa lỗi' },
  { page: 85, unit: 11, title: 'Unit 11 · Task 7 (Điền 6 hình chuyện bé Sam bị sốt) & Task 8 (Câu 1–4)', subtitle: 'Luyện đọc đoạn văn có hình minh họa và viết tên bệnh / lời khuyên từ tranh vẽ trực quan', sectionTag: 'Đọc tranh · Viết câu' },
  { page: 86, unit: 11, title: 'Unit 11 · Task 8 (Câu 5) & Task 9 (Sắp xếp 9 câu chuẩn ngữ pháp)', subtitle: 'Ghép thẻ từ tạo câu hỏi sức khỏe và lời khuyên should / shouldn’t mạch lạc, dễ nhớ', sectionTag: 'Trực quan · Xếp từ' },
  { page: 87, unit: 11, title: 'Unit 11 · Task 9 (Câu 10), Task 10 (Đoạn văn bạn Jim bị lạnh) & Task 11 (Viết lời khuyên)', subtitle: 'Tổng kết trọn vẹn Unit 11 với trắc nghiệm đục lỗ và viết đoạn văn khuyên bạn giữ gìn sức khỏe', sectionTag: 'Tổng ôn Unit 11' },
  { page: 88, unit: 12, title: "Unit 12 · Mở đầu & 20 từ vựng An toàn trong nhà (Phần 1)", subtitle: "Don't ride your bike too fast! — Học knife, stove, burn, matches, stairs, climb the tree, fall off", sectionTag: 'Từ vựng Unit 12' },
  { page: 89, unit: 12, title: 'Unit 12 · 12 từ vựng Phòng tránh tai nạn (Phần 2) & Câu mệnh lệnh (Ngữ pháp 1a–1b)', subtitle: 'Học sharp, dangerous, accident, prevent, roll off, balcony và công thức V + O! / Don’t + V + O!', sectionTag: 'Từ vựng · Ngữ pháp' },
  { page: 90, unit: 12, title: 'Unit 12 · Ngữ pháp 2–3a (Why shouldn’t I...? & may) · Trạm mô phỏng An toàn', subtitle: 'Sơ đồ cảnh báo nguyên nhân – hậu quả (Because you may...) và thực hành 6 tình huống thực tế', sectionTag: 'Ngữ pháp trực quan' },
  { page: 91, unit: 12, title: 'Unit 12 · 3 cách dùng “may” & Phân biệt siêu dễ “maybe” vs “may be”', subtitle: 'Xin phép lịch sự (May I...?), phỏng đoán khả năng, lời chúc & bài luyện phân biệt maybe / may be', sectionTag: 'Ngữ pháp nâng cao' },
  { page: 92, unit: 12, title: 'Unit 12 · Task 1 (Nối 5 cặp cảnh báo an toàn) & Task 2 (12 từ điền chữ cái)', subtitle: 'Ghép câu ngăn cản – lý do – đáp lễ và chinh phục chính tả 12 từ cốt lõi Unit 12', sectionTag: 'Nối câu · Chính tả' },
  { page: 93, unit: 12, title: 'Unit 12 · Task 3 (5 hình tai nạn), Task 4 (Mike nghịch diêm) & Task 5 (Phòng ngã cho bé)', subtitle: 'Đoán cụm từ qua tranh, đọc hiểu Đúng/Sai và trả lời 4 câu hỏi giữ an toàn cho em nhỏ', sectionTag: 'Trực quan · Đọc hiểu' },
  { page: 94, unit: 12, title: 'Unit 12 · Task 6 (Chia động từ 8 câu đa thì) & Task 7 (5 mẹo an toàn mùa hè)', subtitle: 'Luyện chia động từ mệnh lệnh, hiện tại tiếp diễn, quá khứ đơn, tương lai & điền tranh mùa hè', sectionTag: 'Chia động từ · Đọc' },
  { page: 95, unit: 12, title: 'Unit 12 · Task 8 (Nhìn 5 tranh điền từ cảnh báo) & Task 9 (Xếp từ câu 1–2)', subtitle: 'Hoàn thành câu cảnh báo cầu thang, diêm, giường, dao sắc, bếp nóng và xếp 2 câu đầu tiên', sectionTag: 'Trực quan · Xếp từ' },
  { page: 96, unit: 12, title: 'Unit 12 · Task 9 (Sắp xếp câu 3–8) & Task 10 (Đổi câu mệnh lệnh Khẳng định ↔ Phủ định)', subtitle: 'Thành thạo trật tự câu cảnh báo và luyện biến đổi nhanh mệnh lệnh khẳng định ↔ Don’t + V!', sectionTag: 'Xếp từ · Biến đổi câu' },
  { page: 97, unit: 13, title: 'Unit 12 (Task 11 Viết mẹo an toàn) & Mở đầu Unit 13: What do you do in your free time?', subtitle: 'Hoàn tất Unit 12 và học 12 từ vựng Thời gian rảnh đầu tiên (surf the Internet, karate, clean...)', sectionTag: 'Viết · Mở đầu Unit 13' },
  { page: 98, unit: 13, title: 'Unit 13 · 14 từ vựng Giải trí (Phần 2) & Sơ đồ Ngữ pháp 1–2 (do / does · free time)', subtitle: 'Học go fishing, go shopping, go camping, go skating, go hiking & quy tắc go + V-ing / do karate', sectionTag: 'Từ vựng · Ngữ pháp' },
  { page: 99, unit: 13, title: 'Unit 13 · Xưởng hỏi sở thích Gia đình, Task 1 (Odd one out) & Task 2 (Bỏ chữ thừa câu 1–2)', subtitle: 'Luyện biến đổi your / his / her theo thành viên gia đình, chọn từ khác loại & tìm chữ cái thừa', sectionTag: 'Giao tiếp · Luyện tập' },
  { page: 100, unit: 13, title: 'Unit 13 · Task 2 (Bỏ chữ thừa câu 3–5) & Task 3 (Nhìn 5 hình giải trí đoán từ)', subtitle: 'Tương tác bấm xóa chữ cái bị thừa và đoán nhanh karate, camping, fishing, shopping, cinema', sectionTag: 'Trò chơi từ · Trực quan' },
  { page: 101, unit: 13, title: 'Unit 13 · Task 4 (Đọc hiểu Câu cá cùng Bố) & Task 5 (Nhìn tranh điền câu 1–4)', subtitle: 'Luyện đọc hiểu Đúng/Sai về sở thích câu cá và viết hoàn chỉnh 4 câu hoạt động lúc rảnh', sectionTag: 'Đọc hiểu · Viết câu' },
  { page: 102, unit: 13, title: 'Unit 13 · Task 5 (Câu 5), Task 6 (Kỳ nghỉ hè vui vẻ) & Task 7 (Câu 1 xếp từ)', subtitle: 'Điền tranh xe đạp, hoàn thành đoạn văn 5 hình về kỳ nghỉ hè cùng anh Nick và xếp câu đầu tiên', sectionTag: 'Đọc tranh · Xếp từ' },
  { page: 103, unit: 13, title: 'Unit 13 · Task 7 (Sắp xếp câu 2–5) & Task 8 (Viết về thời gian rảnh của em)', subtitle: 'Hoàn thành trọn vẹn Unit 13 với 4 câu sắp xếp chuẩn ngữ pháp và đoạn văn kể sở thích bản thân', sectionTag: 'Tổng ôn Unit 13' },
  { page: 104, unit: 14, title: 'Unit 14 · Mở đầu: What happened in the story? (19 từ vựng Sự tích Quả dưa hấu)', subtitle: 'Học watermelon, seed, island, exchange, lucky, princess & chuỗi kể chuyện First → Then → Next → In the end', sectionTag: 'Mở đầu Unit 14' },
];

// =========================================================
// UNIT 11 COMPLETION (PAGES 84–87)
// =========================================================

export const U11_TASK5_PAGE84: LetterFillItem[] = [
  { id: 'p84-u11t5-10', pattern: 's c r _ t _ h', answers: ['scratch'], meaningVi: 'cào, làm trầy xước', hint: 's-c-r-a-t-c-h → thiếu chữ a và c' },
  { id: 'p84-u11t5-20', pattern: 'b _ t _', answers: ['both'], meaningVi: 'cả hai', hint: 'b-o-t-h → thiếu chữ o và h' },
  { id: 'p84-u11t5-30', pattern: 'k _ _ e', answers: ['knee'], meaningVi: 'đầu gối', hint: 'k-n-e-e → thiếu chữ n và e (chữ k đầu câm!)' },
];

export const U11_TASK6_MISTAKES: MistakeItem[] = [
  {
    id: 'p84-u11t6-1',
    number: 1,
    sentence: "What's the matter to you?",
    wrongPart: 'to',
    corrections: ['with'],
    correctedSentence: "What's the matter with you?",
    explanation: 'Mẫu câu hỏi sức khỏe cố định luôn dùng giới từ "with": What’s the matter with you?',
  },
  {
    id: 'p84-u11t6-2',
    number: 2,
    sentence: 'He should carry heavy things because he has a backache.',
    wrongPart: 'should',
    corrections: ["shouldn't", 'should not'],
    correctedSentence: "He shouldn't carry heavy things because he has a backache.",
    explanation: 'Bị đau lưng (backache) thì KHÔNG NÊN (shouldn’t) mang vác đồ nặng.',
  },
  {
    id: 'p84-u11t6-3',
    number: 3,
    sentence: "She don't have a fever.",
    wrongPart: "don't",
    corrections: ["doesn't", 'does not'],
    correctedSentence: "She doesn't have a fever.",
    explanation: 'Chủ ngữ số ít "She" phải dùng trợ động từ phủ định "doesn’t" (không dùng don’t).',
  },
  {
    id: 'p84-u11t6-4',
    number: 4,
    sentence: 'Lan has a earache.',
    wrongPart: 'a',
    corrections: ['an'],
    correctedSentence: 'Lan has an earache.',
    explanation: '"earache" bắt đầu bằng nguyên âm "e" nên phải dùng mạo từ "an" → an earache.',
  },
  {
    id: 'p84-u11t6-5',
    number: 5,
    sentence: 'Peter has a stomach ache last night.',
    wrongPart: 'has',
    corrections: ['had'],
    correctedSentence: 'Peter had a stomach ache last night.',
    explanation: 'Có dấu hiệu quá khứ "last night" (tối qua) nên chia động từ quá khứ đơn: has → had.',
  },
  {
    id: 'p84-u11t6-6',
    number: 6,
    sentence: "He doesn't feels well.",
    wrongPart: 'feels',
    corrections: ['feel'],
    correctedSentence: "He doesn't feel well.",
    explanation: 'Đã có trợ động từ "doesn’t" thì động từ chính trả về nguyên mẫu "feel" (bỏ s).',
  },
  {
    id: 'p84-u11t6-7',
    number: 7,
    sentence: "You shouldn't brush your teeth twice a day.",
    wrongPart: "shouldn't",
    corrections: ['should'],
    correctedSentence: 'You should brush your teeth twice a day.',
    explanation: 'Đánh răng hai lần mỗi ngày là thói quen tốt → phải khuyên NÊN (should).',
  },
  {
    id: 'p84-u11t6-8',
    number: 8,
    sentence: 'Linda eated too much at dinner last night.',
    wrongPart: 'eated',
    corrections: ['ate'],
    correctedSentence: 'Linda ate too much at dinner last night.',
    explanation: '"eat" là động từ bất quy tắc, quá khứ đơn là "ate" (không phải eated).',
  },
  {
    id: 'p84-u11t6-9',
    number: 9,
    sentence: "He can't speaks.",
    wrongPart: 'speaks',
    corrections: ['speak'],
    correctedSentence: "He can't speak.",
    explanation: 'Sau động từ khuyết thiếu "can / can’t" luôn là động từ nguyên mẫu "speak".',
  },
  {
    id: 'p84-u11t6-10',
    number: 10,
    sentence: 'Quan are in bed.',
    wrongPart: 'are',
    corrections: ['is'],
    correctedSentence: 'Quan is in bed.',
    explanation: '"Quan" là chủ ngữ số ít (1 bạn) nên động từ to be phải là "is".',
  },
  {
    id: 'p84-u11t6-11',
    number: 11,
    sentence: 'He not eat anything last night, but he had a stomach ache.',
    wrongPart: 'not',
    corrections: ["didn't", 'did not'],
    correctedSentence: "He didn't eat anything last night, but he had a stomach ache.",
    explanation: 'Phủ định ở thì quá khứ đơn (last night) phải mượn trợ động từ "didn’t" (did not) trước động từ "eat".',
  },
  {
    id: 'p84-u11t6-12',
    number: 12,
    sentence: 'She has an fever.',
    wrongPart: 'an',
    corrections: ['a'],
    correctedSentence: 'She has a fever.',
    explanation: '"fever" bắt đầu bằng phụ âm "f" nên dùng mạo từ "a" → a fever.',
  },
  {
    id: 'p84-u11t6-13',
    number: 13,
    sentence: 'Doing morning exercise is bad for health.',
    wrongPart: 'bad',
    corrections: ['good'],
    correctedSentence: 'Doing morning exercise is good for health.',
    explanation: 'Tập thể dục buổi sáng rất TỐT cho sức khỏe → good for health (không phải bad).',
  },
  {
    id: 'p84-u11t6-14',
    number: 14,
    sentence: "You shouldn't came to class today, you should take a rest.",
    wrongPart: 'came',
    corrections: ['come'],
    correctedSentence: "You shouldn't come to class today, you should take a rest.",
    explanation: 'Sau "shouldn’t" động từ phải ở dạng nguyên mẫu: came → come.',
  },
  {
    id: 'p84-u11t6-15',
    number: 15,
    sentence: "He's on the corner of the gym.",
    wrongPart: 'on',
    corrections: ['at'],
    correctedSentence: "He's at the corner of the gym.",
    explanation: 'Cụm chỉ vị trí góc phòng/góc sân dùng giới từ "at": at the corner of the gym.',
  },
  {
    id: 'p84-u11t6-16',
    number: 16,
    sentence: 'My father has a throatache.',
    wrongPart: 'throatache',
    corrections: ['sore throat'],
    correctedSentence: 'My father has a sore throat.',
    explanation: 'Trong Tiếng Anh, đau họng là "sore throat" (không nói throatache!).',
  },
  {
    id: 'p84-u11t6-17',
    number: 17,
    sentence: "I doesn't see Phong today.",
    wrongPart: "doesn't",
    corrections: ["don't", 'do not'],
    correctedSentence: "I don't see Phong today.",
    explanation: 'Chủ ngữ "I" đi với trợ động từ phủ định "don’t" (không đi với doesn’t).',
  },
  {
    id: 'p84-u11t6-18',
    number: 18,
    sentence: 'Nam did go to the dentist in the morning.',
    wrongPart: 'did go',
    corrections: ['went', "didn't go"],
    correctedSentence: 'Nam went to the dentist in the morning.',
    explanation: 'Câu khẳng định quá khứ đơn chia trực tiếp động từ thành "went" (hoặc phủ định "didn’t go").',
  },
];

export const U11_TASK7_SAM_BLANKS: ParagraphBlank[] = [
  { id: 'p85-sam-1', index: 1, answers: ['football', 'soccer'], hint: 'Hình quả bóng đá → football', iconKey: 'football' },
  { id: 'p85-sam-2', index: 2, answers: ['fever'], hint: 'Nhiệt kế báo sốt cao → fever', iconKey: 'fever' },
  { id: 'p85-sam-3', index: 3, answers: ['hospital'], hint: 'Bệnh viện có dấu chữ thập đỏ → hospital', iconKey: 'hospital' },
  { id: 'p85-sam-4', index: 4, answers: ['should'], hint: 'Bác sĩ khuyên NÊN nghỉ ngơi → should', iconKey: 'dentist' },
  { id: 'p85-sam-5', index: 5, answers: ['fruits', 'fruit'], hint: 'Chuối, táo và nho đều là hoa quả → fruits', iconKey: 'watermelon' },
  { id: 'p85-sam-6', index: 6, answers: ['drink'], hint: 'Không nên UỐNG nước lạnh → drink', iconKey: 'coldwater' },
];

export const U11_TASK8_P85: FillItem[] = [
  {
    id: 'p85-u11t8-1',
    iconKey: 'earache',
    before: '1. She has an ',
    after: '.',
    answers: ['earache'],
    hint: 'Bạn gái đang ôm tai bị đau → earache (bắt đầu bằng e nên đi sau "an")',
    explanation: 'She has an earache. (Bạn ấy bị đau tai.)',
  },
  {
    id: 'p85-u11t8-2',
    iconKey: 'sorethroat',
    before: '2. She has a ',
    after: '.',
    answers: ['sore throat'],
    hint: 'Cổ họng bị đau đỏ rát → sore throat (2 từ)',
    explanation: 'She has a sore throat. (Bạn ấy bị đau họng.)',
  },
  {
    id: 'p85-u11t8-3',
    iconKey: 'coldwater',
    before: '3. You should not drink ',
    after: '.',
    answers: ['cold water', 'iced water', 'ice water'],
    hint: 'Cốc nước có đá lạnh → cold water',
    explanation: 'You should not drink cold water. (Bạn không nên uống nước lạnh.)',
  },
  {
    id: 'p85-u11t8-4',
    iconKey: 'heavybox',
    before: "4. We shouldn't carry ",
    after: '.',
    answers: ['heavy things'],
    hint: 'Thùng đồ rất nặng ghi 50kg → heavy things',
    explanation: "We shouldn't carry heavy things. (Chúng ta không nên mang vác đồ nặng.)",
  },
];

export const U11_TASK8_P86: FillItem[] = [
  {
    id: 'p86-u11t8-5',
    iconKey: 'cartoon',
    before: "5. She shouldn't ",
    after: ' TV.',
    answers: ['watch'],
    hint: 'Hành động xem ti-vi (nguyên mẫu sau shouldn’t) → watch',
    explanation: "She shouldn't watch TV. (Bạn ấy không nên xem ti-vi quá nhiều.)",
  },
];

export const U11_TASK9_P86: OrderSentenceItem[] = [
  {
    id: 'p86-u11t9-1',
    words: ['with', 'What’s', 'you', 'the', 'matter', '?'],
    answer: 'What’s the matter with you?',
    meaning: 'Bạn bị làm sao thế?',
    explanation: 'Mẫu câu hỏi sức khỏe cố định: What’s the matter with you?',
  },
  {
    id: 'p86-u11t9-2',
    words: ['throat', 'sore', 'I', 'a', 'have', '.'],
    answer: 'I have a sore throat.',
    meaning: 'Mình bị đau họng.',
    explanation: 'I + have + a sore throat.',
  },
  {
    id: 'p86-u11t9-3',
    words: ['see', 'doctor', 'should', 'the', 'You', '.'],
    answer: 'You should see the doctor.',
    meaning: 'Bạn nên đi khám bác sĩ.',
    explanation: 'You + should + see + the doctor.',
  },
  {
    id: 'p86-u11t9-4',
    words: ['heavy', 'things', 'You', 'carry', "shouldn't", '.'],
    answer: "You shouldn't carry heavy things.",
    meaning: 'Bạn không nên mang vác đồ nặng.',
    explanation: 'You + shouldn’t + carry + heavy things.',
  },
  {
    id: 'p86-u11t9-5',
    words: ['cough', 'I', 'bad', 'a', 'have', '.'],
    answer: 'I have a bad cough.',
    meaning: 'Mình bị ho nặng.',
    explanation: 'I + have + a bad cough (tính từ bad đứng trước danh từ cough).',
  },
  {
    id: 'p86-u11t9-6',
    words: ["shouldn't", 'sweets', 'many', 'You', 'eat', 'too', '.'],
    answer: "You shouldn't eat too many sweets.",
    meaning: 'Bạn không nên ăn quá nhiều kẹo ngọt.',
    explanation: 'You + shouldn’t + eat + too many sweets (mẹo chuẩn ngữ pháp: sweets đếm được số nhiều nên dùng too many sweets).',
  },
  {
    id: 'p86-u11t9-7',
    words: ['for', 'is', 'health', 'Playing', 'good', 'sports', '.'],
    answer: 'Playing sports is good for health.',
    meaning: 'Chơi thể thao rất tốt cho sức khỏe.',
    explanation: 'Cụm danh động từ làm chủ ngữ: Playing sports + is good for health.',
  },
  {
    id: 'p86-u11t9-8',
    words: ['He', 'did not', 'eat', 'anything', 'last night,', 'but', 'he', 'had', 'a stomach ache', '.'],
    answer: 'He did not eat anything last night, but he had a stomach ache.',
    meaning: 'Tối qua bạn ấy không ăn gì cả, nhưng vẫn bị đau bụng.',
    explanation: 'Hai vế quá khứ đơn nối bằng "but": He did not eat anything last night, but he had a stomach ache.',
  },
  {
    id: 'p86-u11t9-9',
    words: ['do', 'should', 'every day', 'You', 'morning exercise', '.'],
    answer: 'You should do morning exercise every day.',
    meaning: 'Bạn nên tập thể dục buổi sáng mỗi ngày.',
    explanation: 'You + should + do morning exercise + every day.',
  },
];

export const U11_TASK9_P87: OrderSentenceItem[] = [
  {
    id: 'p87-u11t9-10',
    words: ['have', 'he', 'a', 'Does', 'toothache', '?'],
    answer: 'Does he have a toothache?',
    meaning: 'Bạn ấy có bị đau răng không?',
    explanation: 'Câu hỏi hiện tại đơn với chủ ngữ "he": Does + he + have (nguyên mẫu) + a toothache?',
  },
];

export const U11_TASK10_JIM: QuizChoiceItem[] = [
  {
    id: 'p87-u11t10-1',
    prompt: 'Chỗ trống (1): Yesterday (1) _____ a terribly cold day...',
    options: ['was', 'were', 'is', 'are'],
    correctIndex: 0,
    explanation: '"Yesterday" là quá khứ và "a terribly cold day" là số ít → dùng "was".',
  },
  {
    id: 'p87-u11t10-2',
    prompt: 'Chỗ trống (2): ...but Jim (2) _____ out without warm clothes...',
    options: ['go', 'going', 'went', 'goes'],
    correctIndex: 2,
    explanation: 'Kể chuyện ngày hôm qua (quá khứ đơn) → quá khứ của "go" là "went".',
  },
  {
    id: 'p87-u11t10-3',
    prompt: 'Chỗ trống (3): ...so he (3) _____ a bad fever.',
    options: ['has', 'have', 'had', 'having'],
    correctIndex: 2,
    explanation: 'Tiếp tục mạch quá khứ đơn → "have" chia thành "had" (đã bị sốt nặng).',
  },
  {
    id: 'p87-u11t10-4',
    prompt: 'Chỗ trống (4): The doctor gave him (4) _____ aspirins...',
    options: ['an', 'a', 'any', 'some'],
    correctIndex: 3,
    explanation: '"aspirins" là danh từ số nhiều trong câu khẳng định → dùng "some" (vài viên thuốc).',
  },
  {
    id: 'p87-u11t10-5',
    prompt: 'Chỗ trống (5): ..."You should (5) _____ warm clothes and you shouldn’t go out."',
    options: ['wear', 'wore', 'wearing', 'to wear'],
    correctIndex: 0,
    explanation: 'Sau "should" động từ luôn ở dạng nguyên mẫu không to → "wear".',
  },
];

export const U11_TASK11_WRITING: GuidedWritingPrompt[] = [
  {
    id: 'p87-w1',
    question: '1. How old is he/she? (Bạn ấy bao nhiêu tuổi?)',
    starter: 'My friend is',
    sample: 'ten years old.',
    placeholder: 'ten years old / eleven years old...',
  },
  {
    id: 'p87-w2',
    question: "2. What's the matter with him/her? (Bạn ấy đang bị bệnh gì?)",
    starter: 'He/She has',
    sample: 'a terrible stomach ache and a fever.',
    placeholder: 'a sore throat / a bad toothache...',
  },
  {
    id: 'p87-w3',
    question: "3. Where's he/she now? (Bây giờ bạn ấy đang ở đâu?)",
    starter: 'He/She is',
    sample: 'at home resting in bed now.',
    placeholder: 'at home / at the hospital...',
  },
  {
    id: 'p87-w4',
    question: '4. What should he/she do? Why? (Bạn ấy nên làm gì và vì sao?)',
    starter: 'He/She should',
    sample: 'see the doctor and drink warm water because it helps him/her get better soon.',
    placeholder: 'take a rest / go to the dentist because...',
  },
  {
    id: 'p87-w5',
    question: '5. What should he/she not do? Why not? (Bạn ấy không nên làm gì và vì sao?)',
    starter: "He/She shouldn't",
    sample: 'eat cold ice cream or too many sweets because they are bad for his/her health.',
    placeholder: 'carry heavy things / eat fast food because...',
  },
];

// =========================================================
// UNIT 12: DON'T RIDE YOUR BIKE TOO FAST! (PAGES 88–97)
// =========================================================

export const U12_VOCAB_PAGE88: PageVocabWord[] = [
  { word: 'knife', ipa: '/naɪf/', pos: 'n', meaning: 'con dao', example: "Don't play with the sharp knife!", exampleVi: 'Đừng nghịch con dao sắc nhé!', tip: 'Chữ "k" đầu bị câm! Số nhiều đổi fe → ves: knives.', group: 'Đồ vật nguy hiểm' },
  { word: 'cut', ipa: '/kʌt/', pos: 'v/n', meaning: 'cắt, vết cắt', example: 'Be careful or you may cut yourself.', exampleVi: 'Cẩn thận không bạn có thể tự làm đứt tay đấy.', tip: 'Quá khứ vẫn là cut – cut – cut.', group: 'Tai nạn & Hậu quả' },
  { word: 'cabbage', ipa: '/ˈkæbɪdʒ/', pos: 'n', meaning: 'cải bắp', example: 'My mom is cutting the cabbage in the kitchen.', exampleVi: 'Mẹ mình đang thái cải bắp trong bếp.', group: 'Đồ vật nguy hiểm' },
  { word: 'stove', ipa: '/stəʊv/', pos: 'n', meaning: 'bếp lò, bếp nấu', example: "Don't touch the hot stove!", exampleVi: 'Đừng chạm vào bếp đang nóng!', group: 'Đồ vật nguy hiểm' },
  { word: 'touch', ipa: '/tʌtʃ/', pos: 'v', meaning: 'chạm vào', example: "Why shouldn't I touch the stove?", exampleVi: 'Tại sao em không nên chạm vào bếp?', group: 'Hành động' },
  { word: 'burn', ipa: '/bɜːn/', pos: 'v/n', meaning: 'vết bỏng, làm bỏng', example: 'You may get a burn.', exampleVi: 'Bạn có thể bị bỏng đấy.', tip: 'Cụm cực hay thi: get a burn (bị bỏng).', group: 'Tai nạn & Hậu quả' },
  { word: 'match', ipa: '/mætʃ/', pos: 'n', meaning: 'que diêm', example: "Don't play with matches!", exampleVi: 'Đừng nghịch những que diêm!', tip: 'Số nhiều thêm -es: matches (nhiều que diêm).', group: 'Đồ vật nguy hiểm' },
  { word: 'run down', ipa: '/rʌn daʊn/', pos: 'phr', meaning: 'chạy xuống', example: "Don't run down the stairs!", exampleVi: 'Đừng chạy xuống cầu thang!', group: 'Hành động' },
  { word: 'stair', ipa: '/steə(r)/', pos: 'n', meaning: 'bậc cầu thang', example: 'Walking carefully on the stairs is safe.', exampleVi: 'Đi cẩn thận trên cầu thang sẽ an toàn.', tip: 'Thường dùng số nhiều "the stairs" để chỉ cả cầu thang.', group: 'Đồ vật nguy hiểm' },
  { word: 'climb the tree', ipa: '/klaɪm ðə triː/', pos: 'phr', meaning: 'trèo cây', example: "Don't climb the tree! You may fall.", exampleVi: 'Đừng trèo cây! Bạn có thể bị ngã đấy.', tip: 'Chữ "b" cuối từ climb bị câm, đọc /klaɪm/.', group: 'Hành động' },
  { word: 'bored', ipa: '/bɔːd/', pos: 'adj', meaning: 'chán, buồn chán', example: 'One day Mike was bored at home.', exampleVi: 'Một ngày nọ Mike cảm thấy buồn chán ở nhà.', group: 'Tính từ & Trạng từ' },
  { word: 'reply', ipa: '/rɪˈplaɪ/', pos: 'v', meaning: 'trả lời, đáp lại', example: 'He replied loudly to his mother.', exampleVi: 'Cậu ấy trả lời mẹ rất to tiếng.', group: 'Hành động' },
  { word: 'loudly', ipa: '/ˈlaʊdli/', pos: 'adv', meaning: 'to tiếng, ầm ĩ', example: "Don't talk loudly in the library.", exampleVi: 'Đừng nói chuyện to tiếng trong thư viện.', group: 'Tính từ & Trạng từ' },
  { word: 'again', ipa: '/əˈɡen/', pos: 'adv', meaning: 'lại, lần nữa', example: "OK, I won't do that again.", exampleVi: 'Vâng, em sẽ không làm thế nữa đâu.', group: 'Tính từ & Trạng từ' },
  { word: 'run', ipa: '/rʌn/', pos: 'v', meaning: 'chạy', example: "Don't run too fast on wet floors.", exampleVi: 'Đừng chạy quá nhanh trên sàn ướt.', group: 'Hành động' },
  { word: 'leg', ipa: '/leɡ/', pos: 'n', meaning: 'chân', example: 'He fell off the tree and broke his leg.', exampleVi: 'Cậu ấy ngã khỏi cây và bị gãy chân.', group: 'Tai nạn & Hậu quả' },
  { word: 'arm', ipa: '/ɑːm/', pos: 'n', meaning: 'cánh tay', example: 'You may break your arm.', exampleVi: 'Bạn có thể bị gãy tay đấy.', group: 'Tai nạn & Hậu quả' },
  { word: 'break', ipa: '/breɪk/', pos: 'v', meaning: 'làm gãy, làm vỡ', example: 'Ride slowly or you may break your leg.', exampleVi: 'Đạp chậm thôi kẻo bạn bị gãy chân.', tip: 'Quá khứ bất quy tắc: break → broke.', group: 'Tai nạn & Hậu quả' },
  { word: 'apple tree', ipa: '/ˈæpl triː/', pos: 'n', meaning: 'cây táo', example: 'Jimmy climbed the apple tree yesterday.', exampleVi: 'Hôm qua Jimmy đã trèo lên cây táo.', group: 'Đồ vật nguy hiểm' },
  { word: 'fall off', ipa: '/fɔːl ɒf/', pos: 'phr', meaning: 'ngã khỏi (xe, giường, cây)', example: 'You may fall off your bike.', exampleVi: 'Bạn có thể bị ngã khỏi xe đạp.', tip: 'Quá khứ của fall là fell.', group: 'Tai nạn & Hậu quả' },
];

export const U12_VOCAB_PAGE89: PageVocabWord[] = [
  { word: 'hold', ipa: '/həʊld/', pos: 'v', meaning: 'cầm, nắm', example: 'What are you holding in your hand?', exampleVi: 'Bạn đang cầm gì trên tay thế?', group: 'Hành động' },
  { word: 'sharp', ipa: '/ʃɑːp/', pos: 'adj', meaning: 'sắc, nhọn', example: 'That knife is very sharp.', exampleVi: 'Con dao đó rất sắc.', group: 'An toàn & Cảnh báo' },
  { word: 'dangerous', ipa: '/ˈdeɪndʒərəs/', pos: 'adj', meaning: 'nguy hiểm', example: 'Playing with fire is very dangerous.', exampleVi: 'Nghịch lửa rất nguy hiểm.', tip: 'Trái nghĩa với safe (an toàn).', group: 'An toàn & Cảnh báo' },
  { word: 'common', ipa: '/ˈkɒmən/', pos: 'adj', meaning: 'thông thường, phổ biến', example: 'Falling is a common accident at home.', exampleVi: 'Ngã là tai nạn phổ biến ở nhà.', group: 'An toàn & Cảnh báo' },
  { word: 'accident', ipa: '/ˈæksɪdənt/', pos: 'n', meaning: 'tai nạn', example: 'We must prevent accidents at home.', exampleVi: 'Chúng ta cần phòng tránh tai nạn ở nhà.', group: 'An toàn & Cảnh báo' },
  { word: 'prevent', ipa: '/prɪˈvent/', pos: 'v', meaning: 'ngăn chặn, phòng tránh', example: 'How can we prevent a child from falling?', exampleVi: 'Làm sao ngăn trẻ nhỏ bị ngã?', tip: 'Cấu trúc: prevent somebody from + V-ing.', group: 'An toàn & Cảnh báo' },
  { word: 'safe', ipa: '/seɪf/', pos: 'adj', meaning: 'an toàn', example: 'These tips keep young children safe.', exampleVi: 'Những mẹo này giúp trẻ nhỏ an toàn.', group: 'An toàn & Cảnh báo' },
  { word: 'young children', ipa: '/jʌŋ ˈtʃɪldrən/', pos: 'n', meaning: 'trẻ nhỏ', example: "Don't leave young children alone near water.", exampleVi: 'Đừng để trẻ nhỏ một mình gần hồ nước.', group: 'An toàn & Cảnh báo' },
  { word: 'roll off', ipa: '/rəʊl ɒf/', pos: 'phr', meaning: 'lăn khỏi (giường, ghế)', example: 'Make sure the baby cannot roll off the bed.', exampleVi: 'Đảm bảo em bé không thể lăn khỏi giường.', group: 'Tai nạn & Hậu quả' },
  { word: 'balcony', ipa: '/ˈbælkəni/', pos: 'n', meaning: 'ban công', example: "Don't let young children play on the balcony.", exampleVi: 'Đừng để trẻ nhỏ chơi ngoài ban công.', group: 'Đồ vật nguy hiểm' },
  { word: 'tip', ipa: '/tɪp/', pos: 'n', meaning: 'mẹo, lời khuyên nhỏ', example: 'Here are some useful tips for summer.', exampleVi: 'Đây là vài mẹo hữu ích cho mùa hè.', group: 'An toàn & Cảnh báo' },
  { word: 'neighbour', ipa: '/ˈneɪbə(r)/', pos: 'n', meaning: 'hàng xóm', example: 'Our neighbour is very kind and helpful.', exampleVi: 'Hàng xóm của chúng mình rất tốt bụng và hay giúp đỡ.', group: 'An toàn & Cảnh báo' },
];

export const U12_SAFETY_SCENES: SafetyScenePreset[] = [
  {
    id: 'knife',
    iconKey: 'knife',
    labelVi: 'Nghịch dao sắc',
    action: 'play with the knife',
    warning: "Don't play with the knife!",
    whyQuestion: "Why shouldn't I play with the knife?",
    consequence: 'Because you may cut yourself.',
    consequenceVi: 'Vì bạn có thể tự làm đứt tay đấy.',
    reply: "OK, I won't.",
  },
  {
    id: 'stove',
    iconKey: 'stove',
    labelVi: 'Chạm bếp nóng',
    action: 'touch the stove',
    warning: "Don't touch the stove!",
    whyQuestion: "Why shouldn't I touch the stove?",
    consequence: 'Because you may get a burn.',
    consequenceVi: 'Vì bạn có thể bị bỏng đấy.',
    reply: "OK, I won't.",
  },
  {
    id: 'matches',
    iconKey: 'matches',
    labelVi: 'Nghịch que diêm',
    action: 'play with matches',
    warning: "Don't play with those matches!",
    whyQuestion: "Why shouldn't I play with matches?",
    consequence: 'Because you may get a burn or start a fire.',
    consequenceVi: 'Vì bạn có thể bị bỏng hoặc gây cháy.',
    reply: "OK, I won't do that again.",
  },
  {
    id: 'bike',
    iconKey: 'bike',
    labelVi: 'Đạp xe quá nhanh',
    action: 'ride your bike too fast',
    warning: "Don't ride your bike too fast!",
    whyQuestion: "Why shouldn't I ride my bike too fast?",
    consequence: 'Because you may fall off your bike and break your arm.',
    consequenceVi: 'Vì bạn có thể ngã khỏi xe đạp và bị gãy tay.',
    reply: "OK, I won't.",
  },
  {
    id: 'tree',
    iconKey: 'climb',
    labelVi: 'Trèo cây cao',
    action: 'climb the tree',
    warning: "Don't climb that tall tree!",
    whyQuestion: "Why shouldn't I climb the tree?",
    consequence: 'Because you may fall down and break your leg.',
    consequenceVi: 'Vì bạn có thể ngã xuống và bị gãy chân.',
    reply: "OK, I won't.",
  },
  {
    id: 'stairs',
    iconKey: 'stairs',
    labelVi: 'Chạy cầu thang',
    action: 'run down the stairs',
    warning: "Don't run down the stairs!",
    whyQuestion: "Why shouldn't I run down the stairs?",
    consequence: 'Because you may fall down and break your arm.',
    consequenceVi: 'Vì bạn có thể ngã lăn xuống và bị gãy tay.',
    reply: "OK, I won't.",
  },
];

export const U12_MAYBE_QUIZ: QuizChoiceItem[] = [
  {
    id: 'p91-maybe-1',
    prompt: '1. _____ I will visit my grandparents this Sunday. (Có lẽ tôi sẽ thăm ông bà Chủ nhật này.)',
    options: ['Maybe', 'May be'],
    correctIndex: 0,
    explanation: 'Đứng đầu câu làm trạng từ (= Perhaps: có lẽ), phía sau đã có động từ "will visit" → dùng "Maybe" (viết liền).',
  },
  {
    id: 'p91-maybe-2',
    prompt: '2. He _____ at home right now because his bike is in the yard. (Bạn ấy có thể đang ở nhà...)',
    options: ['maybe', 'may be'],
    correctIndex: 1,
    explanation: 'Câu chưa có động từ chính! Cần động từ khuyết thiếu "may" + động từ "be" → "may be" (viết tách).',
  },
  {
    id: 'p91-maybe-3',
    prompt: '3. It _____ dangerous to play on the balcony. (Chơi ở ban công có thể rất nguy hiểm.)',
    options: ['maybe', 'may be'],
    correctIndex: 1,
    explanation: 'Sau chủ ngữ "It" và trước tính từ "dangerous" cần động từ "may be" (có thể là).',
  },
  {
    id: 'p91-maybe-4',
    prompt: '4. _____ it will rain this afternoon. Take your umbrella!',
    options: ['Maybe', 'May be'],
    correctIndex: 0,
    explanation: 'Đầu câu có lẽ (trạng từ) + mệnh đề "it will rain" → dùng "Maybe".',
  },
];

export const U12_TASK1_MATCH: PairMatchItem[] = [
  { id: 'p92-u12t1-1', left: "1. Don't play with the knife.", leftVi: 'Đừng nghịch con dao nhé.', rightKey: 'd', rightLabel: "d. OK, I won't." },
  { id: 'p92-u12t1-2', left: '2. He is riding his bike too fast.', leftVi: 'Bạn ấy đang đạp xe quá nhanh.', rightKey: 'e', rightLabel: 'e. He may fall off his bike and break his arm.' },
  { id: 'p92-u12t1-3', left: '3. What are you holding in your hand?', leftVi: 'Bạn đang cầm gì trong tay thế?', rightKey: 'g', rightLabel: 'g. A knife.' },
  { id: 'p92-u12t1-4', left: "4. Why shouldn't I climb a tree?", leftVi: 'Tại sao em không nên trèo cây?', rightKey: 'a', rightLabel: 'a. Because you may fall.' },
  { id: 'p92-u12t1-5', left: "5. Why shouldn't I play with the stove?", leftVi: 'Tại sao em không nên nghịch bếp?', rightKey: 'c', rightLabel: 'c. Because you may get a burn.' },
];

export const U12_TASK2_LETTERS: LetterFillItem[] = [
  { id: 'p92-u12t2-1', pattern: 'F _ S T', answers: ['fast'], meaningVi: 'nhanh', hint: 'f-a-s-t → thiếu chữ A' },
  { id: 'p92-u12t2-2', pattern: 'T O U _ H', answers: ['touch'], meaningVi: 'chạm vào', hint: 't-o-u-c-h → thiếu chữ C' },
  { id: 'p92-u12t2-3', pattern: 'C _ I M B', answers: ['climb'], meaningVi: 'trèo, leo', hint: 'c-l-i-m-b → thiếu chữ L' },
  { id: 'p92-u12t2-4', pattern: 'C A _ B A G E', answers: ['cabbage'], meaningVi: 'cải bắp', hint: 'c-a-b-b-a-g-e (hai chữ B!) → thiếu chữ B' },
  { id: 'p92-u12t2-5', pattern: 'B O R _ D', answers: ['bored'], meaningVi: 'chán nản', hint: 'b-o-r-e-d → thiếu chữ E' },
  { id: 'p92-u12t2-6', pattern: 'K _ I F E', answers: ['knife'], meaningVi: 'con dao', hint: 'k-n-i-f-e → thiếu chữ N' },
  { id: 'p92-u12t2-7', pattern: 'M A _ C H E S', answers: ['matches'], meaningVi: 'que diêm (số nhiều)', hint: 'm-a-t-c-h-e-s → thiếu chữ T' },
  { id: 'p92-u12t2-8', pattern: 'S _ A I R', answers: ['stair'], meaningVi: 'bậc cầu thang', hint: 's-t-a-i-r → thiếu chữ T' },
  { id: 'p92-u12t2-9', pattern: '_ T O V E', answers: ['stove'], meaningVi: 'bếp lò, bếp nấu', hint: 's-t-o-v-e → thiếu chữ S' },
  { id: 'p92-u12t2-10', pattern: 'B _ E A K', answers: ['break'], meaningVi: 'làm gãy, vỡ', hint: 'b-r-e-a-k → thiếu chữ R' },
  { id: 'p92-u12t2-11', pattern: 'D A N _ E R O U S', answers: ['dangerous'], meaningVi: 'nguy hiểm', hint: 'd-a-n-g-e-r-o-u-s → thiếu chữ G' },
  { id: 'p92-u12t2-12', pattern: 'B U _ N', answers: ['burn'], meaningVi: 'vết bỏng, bỏng', hint: 'b-u-r-n → thiếu chữ R' },
];

export const U12_TASK3_DEFS: FillItem[] = [
  {
    id: 'p93-u12t3-1',
    iconKey: 'cutfinger',
    before: '1. You hurt yourself with a knife. → ',
    answers: ['cut yourself'],
    hint: 'Tự làm đứt tay mình (2 từ: c__ y_______)',
    explanation: 'cut yourself = tự làm mình bị đứt tay bằng dao.',
  },
  {
    id: 'p93-u12t3-2',
    iconKey: 'falloff',
    before: '2. You drop yourself from something like a bike or a tree. → ',
    answers: ['fall off'],
    hint: 'Ngã khỏi xe đạp hay cây (2 từ: f___ o__)',
    explanation: 'fall off = ngã rời khỏi xe đạp, cây hay giường.',
  },
  {
    id: 'p93-u12t3-3',
    iconKey: 'burn',
    before: '3. You hurt yourself by touching very hot things like fire. → ',
    answers: ['get a burn', 'burn'],
    hint: 'Bị bỏng vì chạm vào đồ nóng/lửa (3 từ: g__ a b___)',
    explanation: 'get a burn = bị bỏng.',
  },
  {
    id: 'p93-u12t3-4',
    iconKey: 'stairs',
    before: '4. You go down very fast. → ',
    answers: ['run down'],
    hint: 'Chạy xuống rất nhanh (2 từ: r__ d___)',
    explanation: 'run down = chạy xuống (thường dùng: run down the stairs).',
  },
  {
    id: 'p93-u12t3-5',
    iconKey: 'rolloff',
    before: '5. You fall off a bed or a sofa. → ',
    answers: ['roll off'],
    hint: 'Lăn khỏi giường hay ghế sofa (2 từ: r___ o__)',
    explanation: 'roll off = lăn rơi khỏi giường / ghế sofa.',
  },
];

export const U12_TASK4_MIKE_READING = {
  passage:
    "One day Mike was bored. He was in the living room when his mother was in the kitchen. Suddenly, his mother smelled something burned. She went into the living room and said, 'Mike, stop it. Don't play with those matches or you may get a burn'. Mike answered, 'OK, I won't do that again. I'll put them away.'",
  passageVi:
    'Một ngày nọ Mike cảm thấy buồn chán. Cậu đang ở phòng khách khi mẹ đang ở trong bếp. Bỗng nhiên, mẹ cậu ngửi thấy có mùi gì đó cháy khét. Mẹ đi vào phòng khách và nói: "Mike, dừng lại ngay. Đừng nghịch những que diêm đó nếu không con có thể bị bỏng đấy". Mike trả lời: "Vâng ạ, con sẽ không làm thế nữa. Con sẽ cất chúng đi ngay."',
  example: '0. One day, Mike was happy. → False (Trong bài: Mike was bored — buồn chán)',
  statements: [
    {
      id: 'p93-u12t4-1',
      text: '1. He was in the living room.',
      isTrue: true,
      explanation: 'Đúng! Câu 2 nêu rõ: "He was in the living room when his mother was in the kitchen."',
    },
    {
      id: 'p93-u12t4-2',
      text: '2. From the kitchen, his mother could see him playing with matches.',
      isTrue: false,
      explanation: 'Sai! Từ trong bếp mẹ không nhìn thấy mà chỉ ngửi thấy mùi khét ("smelled something burned") rồi mới đi vào phòng khách.',
    },
    {
      id: 'p93-u12t4-3',
      text: '3. She asked Mike to stop playing with them.',
      isTrue: true,
      explanation: 'Đúng! Mẹ bảo: "Mike, stop it. Don’t play with those matches...".',
    },
    {
      id: 'p93-u12t4-4',
      text: '4. Mike got a burn.',
      isTrue: false,
      explanation: 'Sai! Mẹ kịp phát hiện và cảnh báo "you may get a burn" (có thể bị bỏng), Mike chưa hề bị bỏng.',
    },
    {
      id: 'p93-u12t4-5',
      text: '5. He did not want to put away the matches.',
      isTrue: false,
      explanation: 'Sai! Mike rất biết lỗi và nói: "I’ll put them away." (Con sẽ cất chúng đi).',
    },
  ],
};

export const U12_TASK5_FALLING_PASSAGE = {
  en: 'Falling is a common type of accident for young children at home. Your baby brother or sister may fall off a bed or a sofa. He or she may also fall down the stairs. The following tips can help to keep your baby brother or sister safe:\n• Make sure he or she can’t roll off the bed.\n• Make sure he or she can’t open any windows.\n• Don’t let him or her go near the stairs.\n• Don’t let him or her out on the balcony.',
  vi: 'Ngã là một dạng tai nạn phổ biến đối với trẻ nhỏ ở nhà. Em trai hoặc em gái nhỏ của bạn có thể ngã khỏi giường hay ghế sofa. Bé cũng có thể ngã xuống cầu thang. Những mẹo sau đây giúp giữ an toàn cho em nhỏ:\n• Đảm bảo bé không thể lăn khỏi giường.\n• Đảm bảo bé không thể mở bất kỳ cửa sổ nào.\n• Đừng để bé lại gần cầu thang.\n• Đừng để bé ra ngoài ban công.',
};

export const U12_TASK5_QA: ReadingQAItem[] = [
  {
    id: 'p93-u12t5-1',
    number: 1,
    question: 'What is the common type of accident for young children at home?',
    questionVi: 'Loại tai nạn phổ biến đối với trẻ nhỏ ở nhà là gì?',
    keywords: ['falling'],
    modelAnswer: 'Falling (is a common type of accident for young children at home).',
    explanation: 'Ngay câu đầu bài đọc: "Falling is a common type of accident for young children at home."',
  },
  {
    id: 'p93-u12t5-2',
    number: 2,
    question: 'How to prevent a child from falling out of the windows?',
    questionVi: 'Làm thế nào để ngăn trẻ nhỏ ngã ra ngoài cửa sổ?',
    keywords: ['open', 'window'],
    modelAnswer: "Make sure he or she can't open any windows.",
    explanation: 'Dựa vào mẹo số 2: Đảm bảo bé không thể mở bất kỳ cửa sổ nào.',
  },
  {
    id: 'p93-u12t5-3',
    number: 3,
    question: 'What may happen if a child goes near the stairs?',
    questionVi: 'Điều gì có thể xảy ra nếu trẻ nhỏ đến gần cầu thang?',
    keywords: ['fall', 'stairs'],
    modelAnswer: 'He or she may fall down the stairs.',
    explanation: 'Dựa vào câu 3 bài đọc: Bé có thể bị ngã xuống cầu thang ("fall down the stairs").',
  },
  {
    id: 'p93-u12t5-4',
    number: 4,
    question: 'What should we do when a child is on the bed or a sofa?',
    questionVi: 'Chúng ta nên làm gì khi trẻ nhỏ ở trên giường hoặc ghế sofa?',
    keywords: ['roll off', 'bed'],
    modelAnswer: "Make sure he or she can't roll off the bed or the sofa.",
    explanation: 'Dựa vào mẹo số 1: Đảm bảo bé không thể lăn khỏi giường hoặc ghế sofa.',
  },
];

export const U12_TASK6_VERBS: VerbFormItem[] = [
  {
    id: 'p94-u12t6-1',
    number: 1,
    parts: [
      { text: "Don't ", verbCue: 'let', answers: ['let'] },
      { text: ' your child play with a knife.' },
    ],
    fullSentence: "Don't let your child play with a knife.",
    explanation: 'Câu mệnh lệnh phủ định "Don’t + V nguyên mẫu" → giữ nguyên "let".',
  },
  {
    id: 'p94-u12t6-2',
    number: 2,
    parts: [
      { text: 'Mary ', verbCue: 'cook', answers: ['is cooking'] },
      { text: ' in the kitchen at present.' },
    ],
    fullSentence: 'Mary is cooking in the kitchen at present.',
    explanation: '"at present" (hiện tại, lúc này) là dấu hiệu Hiện tại tiếp diễn → Mary + is cooking.',
  },
  {
    id: 'p94-u12t6-3',
    number: 3,
    parts: [
      { text: 'Where are you, Peter? — I ', verbCue: 'be', answers: ['am'] },
      { text: ' upstairs, Mom.' },
    ],
    fullSentence: 'Where are you, Peter? — I am upstairs, Mom.',
    explanation: 'Chủ ngữ "I" ở thì hiện tại đơn chia to be là "am".',
  },
  {
    id: 'p94-u12t6-4',
    number: 4,
    parts: [
      { text: 'Jimmy ', verbCue: 'climb', answers: ['climbed'] },
      { text: ' the apple tree yesterday. He ', verbCue: 'fall', answers: ['fell'] },
      { text: ' and ', verbCue: 'break', answers: ['broke'] },
      { text: ' his leg.' },
    ],
    fullSentence: 'Jimmy climbed the apple tree yesterday. He fell and broke his leg.',
    explanation: '"yesterday" là Quá khứ đơn → climb → climbed, fall → fell (bất quy tắc), break → broke (bất quy tắc).',
  },
  {
    id: 'p94-u12t6-5',
    number: 5,
    parts: [
      { text: 'Look! He ', verbCue: 'run', answers: ['is running'] },
      { text: ' down the stairs. He may break his arm.' },
    ],
    fullSentence: 'Look! He is running down the stairs. He may break his arm.',
    explanation: '"Look!" (Nhìn kìa!) báo hiệu hành động đang xảy ra → Hiện tại tiếp diễn: is running (gấp đôi chữ n).',
  },
  {
    id: 'p94-u12t6-6',
    number: 6,
    parts: [
      { text: 'Mai has a ', verbCue: 'tooth', answers: ['toothache'] },
      { text: '. She ', verbCue: 'go', answers: ['will go', 'is going', 'is going to go'] },
      { text: ' to the dentist tomorrow.' },
    ],
    fullSentence: 'Mai has a toothache. She will go to the dentist tomorrow.',
    explanation: 'Đau răng = toothache; "tomorrow" là tương lai → dùng "will go" (hoặc "is going").',
  },
  {
    id: 'p94-u12t6-7',
    number: 7,
    parts: [
      { text: 'Hoa ', verbCue: 'wash', answers: ['washes'] },
      { text: ' her hair three times a week.' },
    ],
    fullSentence: 'Hoa washes her hair three times a week.',
    explanation: '"three times a week" là thói quen (Hiện tại đơn), chủ ngữ số ít "Hoa", động từ kết thúc bằng -sh → thêm -es: washes.',
  },
  {
    id: 'p94-u12t6-8',
    number: 8,
    parts: [
      { text: 'Last Monday, my mother ', verbCue: 'have', answers: ['had'] },
      { text: ' a bad pain in her stomach.' },
    ],
    fullSentence: 'Last Monday, my mother had a bad pain in her stomach.',
    explanation: '"Last Monday" (thứ Hai tuần trước) là quá khứ đơn → have chia thành "had".',
  },
];

export const U12_TASK7_SUMMER_BLANKS: ParagraphBlank[] = [
  { id: 'p94-sum-1', index: 1, answers: ['fall'], hint: 'Ngã xuống nước (sau may + V nguyên mẫu) → fall', iconKey: 'swim' },
  { id: 'p94-sum-2', index: 2, answers: ['climb'], hint: 'Trèo cây (let them + V nguyên mẫu) → climb', iconKey: 'climb' },
  { id: 'p94-sum-3', index: 3, answers: ['break'], hint: 'Bị gãy tay hoặc chân → break', iconKey: 'brokenarm' },
  { id: 'p94-sum-4', index: 4, answers: ['knives', 'knife'], hint: 'Những con dao sắc (số nhiều song song với matches) → knives', iconKey: 'knife' },
  { id: 'p94-sum-5', index: 5, answers: ['burn'], hint: 'Bị bỏng (get a _____) → burn', iconKey: 'burn' },
];

export const U12_TASK8_PICTURES: FillItem[] = [
  {
    id: 'p95-u12t8-1',
    iconKey: 'stairs',
    before: "1. Don't ",
    after: ' the stairs.',
    answers: ['climb', 'run down'],
    hint: 'Đừng leo nghịch hoặc chạy trên cầu thang → climb (hoặc run down)',
    explanation: "Don't climb the stairs. (Đừng leo nghịch cầu thang! Đáp án sách: climb; run down cũng hợp nghĩa.)",
  },
  {
    id: 'p95-u12t8-2',
    iconKey: 'matches',
    before: "2. You shouldn't play with ",
    after: '.',
    answers: ['matches'],
    hint: 'Hình bao diêm và que diêm cháy → matches',
    explanation: "You shouldn't play with matches. (Bạn không nên nghịch diêm.)",
  },
  {
    id: 'p95-u12t8-3',
    iconKey: 'rolloff',
    before: '3. He is easy to ',
    after: ' off the bed.',
    answers: ['roll', 'fall'],
    hint: 'Em bé dễ bị lăn khỏi giường → roll (off the bed)',
    explanation: 'He is easy to roll off the bed. (Em bé rất dễ lăn khỏi giường.)',
  },
  {
    id: 'p95-u12t8-4',
    iconKey: 'cutfinger',
    before: '4. The knife is very sharp, you may ',
    after: ' yourself.',
    answers: ['cut'],
    hint: 'Dao rất sắc, bạn có thể tự làm đứt tay → cut',
    explanation: 'The knife is very sharp, you may cut yourself.',
  },
  {
    id: 'p95-u12t8-5',
    iconKey: 'burn',
    before: '5. The stove is very hot, you may ',
    after: '.',
    answers: ['get a burn', 'burn'],
    hint: 'Bếp rất nóng, bạn có thể bị bỏng (3 từ: get a burn)',
    explanation: 'The stove is very hot, you may get a burn. (Bếp rất nóng, bạn có thể bị bỏng đấy.)',
  },
];

export const U12_TASK9_P95: OrderSentenceItem[] = [
  {
    id: 'p95-u12t9-1',
    words: ['too', 'I', "shouldn't", 'Why', 'fast', 'ride', '?'],
    answer: "Why shouldn't I ride too fast?",
    meaning: 'Tại sao em không nên đạp xe quá nhanh?',
    explanation: 'Why + shouldn’t + I + ride + too fast?',
  },
  {
    id: 'p95-u12t9-2',
    words: ['doing', 'What', 'with', 'are', 'stove', 'you', 'the', '?'],
    answer: 'What are you doing with the stove?',
    meaning: 'Bạn đang làm gì với cái bếp thế?',
    explanation: 'What + are + you + doing + with the stove?',
  },
];

export const U12_TASK9_P96: OrderSentenceItem[] = [
  {
    id: 'p96-u12t9-3',
    words: ["won't", 'do', 'OK,', 'again', 'that', 'I', '.'],
    answer: "OK, I won't do that again.",
    meaning: 'Vâng, em sẽ không làm thế nữa đâu.',
    explanation: 'OK, I + won’t + do that + again.',
  },
  {
    id: 'p96-u12t9-4',
    words: ['knife', 'touch', 'Why', 'the', "shouldn't", 'I', '?'],
    answer: "Why shouldn't I touch the knife?",
    meaning: 'Tại sao em không nên chạm vào con dao?',
    explanation: 'Why + shouldn’t + I + touch + the knife?',
  },
  {
    id: 'p96-u12t9-5',
    words: ['cat', 'with', 'play', "Don't", 'the', '.'],
    answer: "Don't play with the cat.",
    meaning: 'Đừng trêu nghịch con mèo.',
    explanation: 'Câu mệnh lệnh phủ định: Don’t + play with + the cat.',
  },
  {
    id: 'p96-u12t9-6',
    words: ['arm', 'may', 'fall off', 'He', 'his bike', 'and', 'break', 'his', '.'],
    answer: 'He may fall off his bike and break his arm.',
    meaning: 'Bạn ấy có thể ngã khỏi xe đạp và bị gãy tay.',
    explanation: 'He + may + fall off his bike + and + break his arm.',
  },
  {
    id: 'p96-u12t9-7',
    words: ['matches', 'doing', 'the', 'What', 'are', 'with', 'you', '?'],
    answer: 'What are you doing with the matches?',
    meaning: 'Bạn đang làm gì với những que diêm thế?',
    explanation: 'What + are + you + doing + with the matches?',
  },
  {
    id: 'p96-u12t9-8',
    words: ['is', 'accident', 'a common type of', 'Falling', 'for', 'young children', 'at home', '.'],
    answer: 'Falling is a common type of accident for young children at home.',
    meaning: 'Ngã là một dạng tai nạn phổ biến đối với trẻ nhỏ ở nhà.',
    explanation: 'Falling + is + a common type of accident + for young children + at home.',
  },
];

export const U12_TASK10_REWRITE: ImperativeRewriteItem[] = [
  {
    id: 'p96-u12t10-1',
    number: 1,
    original: 'Ride your bike too fast!',
    originalVi: 'Đạp xe quá nhanh đi! → Đổi sang câu ngăn cản',
    direction: 'to-negative',
    answers: ["Don't ride your bike too fast!", "Don't ride your bike too fast", 'Do not ride your bike too fast!', 'Do not ride your bike too fast'],
    explanation: 'Thêm "Don’t" lên đầu câu và viết thường chữ "ride": Don’t ride your bike too fast!',
  },
  {
    id: 'p96-u12t10-2',
    number: 2,
    original: 'Talk loudly!',
    originalVi: 'Nói thật to đi! → Đổi sang câu ngăn cản',
    direction: 'to-negative',
    answers: ["Don't talk loudly!", "Don't talk loudly", 'Do not talk loudly!', 'Do not talk loudly'],
    explanation: 'Thêm "Don’t" trước động từ nguyên mẫu: Don’t talk loudly!',
  },
  {
    id: 'p96-u12t10-3',
    number: 3,
    original: 'Play with the knife!',
    originalVi: 'Nghịch dao đi! → Đổi sang câu ngăn cản',
    direction: 'to-negative',
    answers: ["Don't play with the knife!", "Don't play with the knife", 'Do not play with the knife!', 'Do not play with the knife'],
    explanation: 'Thêm "Don’t" lên đầu câu: Don’t play with the knife!',
  },
  {
    id: 'p96-u12t10-4',
    number: 4,
    original: "Don't read magazines!",
    originalVi: 'Đừng đọc tạp chí! → Đổi sang câu mệnh lệnh khẳng định',
    direction: 'to-positive',
    answers: ['Read magazines!', 'Read magazines'],
    explanation: 'Bỏ "Don’t" đi và viết hoa chữ đầu "Read": Read magazines!',
  },
  {
    id: 'p96-u12t10-5',
    number: 5,
    original: 'Play with the matches!',
    originalVi: 'Nghịch diêm đi! → Đổi sang câu ngăn cản',
    direction: 'to-negative',
    answers: ["Don't play with the matches!", "Don't play with the matches", 'Do not play with the matches!', 'Do not play with the matches'],
    explanation: 'Thêm "Don’t" lên đầu câu: Don’t play with the matches!',
  },
];

export const U12_TASK11_WRITING: GuidedWritingPrompt[] = [
  {
    id: 'p97-w1',
    question: "1. Why shouldn't children play with a knife?",
    starter: "They shouldn't play with a knife because",
    sample: 'they may cut themselves.',
    placeholder: 'they may cut themselves...',
  },
  {
    id: 'p97-w2',
    question: "2. Why shouldn't children play with matches?",
    starter: "They shouldn't play with matches because",
    sample: 'they may get a burn.',
    placeholder: 'they may get a burn...',
  },
  {
    id: 'p97-w3',
    question: "3. Why shouldn't children ride their bike too fast?",
    starter: "They shouldn't ride their bike too fast because",
    sample: 'they may fall off their bike and break their arms or legs.',
    placeholder: 'they may fall off their bike...',
  },
  {
    id: 'p97-w4',
    question: "4. Why shouldn't children go out alone?",
    starter: "They shouldn't go out alone because",
    sample: 'they may get lost.',
    placeholder: 'they may get lost / meet danger...',
  },
  {
    id: 'p97-w5',
    question: "5. Why shouldn't children play on the balcony?",
    starter: "They shouldn't play on the balcony because",
    sample: 'they may fall down and get hurt.',
    placeholder: 'they may fall down...',
  },
];

// =========================================================
// UNIT 13: WHAT DO YOU DO IN YOUR FREE TIME? (PAGES 97–103)
// =========================================================

export const U13_VOCAB_PAGE97: PageVocabWord[] = [
  { word: 'free time', ipa: '/friː taɪm/', pos: 'n', meaning: 'thời gian rảnh rỗi', example: 'What do you do in your free time?', exampleVi: 'Bạn làm gì vào thời gian rảnh?', group: 'Hoạt động trong nhà' },
  { word: 'watch', ipa: '/wɒtʃ/', pos: 'v', meaning: 'xem (TV, phim)', example: 'I watch cartoons after dinner.', exampleVi: 'Mình xem phim hoạt hình sau bữa tối.', tip: 'Với he/she chia thành watches.', group: 'Hoạt động trong nhà' },
  { word: 'surf the Internet', ipa: '/sɜːf ði ˈɪntənet/', pos: 'phr', meaning: 'lướt mạng Internet', example: 'He often surfs the Internet in the evening.', exampleVi: 'Bạn ấy thường lướt mạng vào buổi tối.', group: 'Hoạt động trong nhà' },
  { word: 'ride the bike', ipa: '/raɪd ðə baɪk/', pos: 'phr', meaning: 'đạp xe đạp', example: 'I ride my bike in the park on Sundays.', exampleVi: 'Mình đạp xe trong công viên vào Chủ nhật.', group: 'Thể thao & Câu lạc bộ' },
  { word: 'animal', ipa: '/ˈænɪml/', pos: 'n', meaning: 'động vật', example: 'She loves watching animal programmes.', exampleVi: 'Bạn ấy thích xem chương trình thế giới động vật.', group: 'Hoạt động trong nhà' },
  { word: 'programme', ipa: '/ˈprəʊɡræm/', pos: 'n', meaning: 'chương trình (TV)', example: 'My favourite programme is World of Animals.', exampleVi: 'Chương trình yêu thích của mình là Thế giới Động vật.', tip: 'Anh-Anh viết programme, Anh-Mỹ viết program đều đúng.', group: 'Hoạt động trong nhà' },
  { word: 'clean', ipa: '/kliːn/', pos: 'v', meaning: 'dọn dẹp, lau chùi', example: 'I help my mum clean the house.', exampleVi: 'Mình giúp mẹ dọn dẹp nhà cửa.', group: 'Hoạt động trong nhà' },
  { word: 'karate', ipa: '/kəˈrɑːti/', pos: 'n', meaning: 'môn võ karate', example: 'My brother does karate in the gym.', exampleVi: 'Em trai mình tập võ karate ở phòng tập.', tip: 'Luôn dùng động từ DO với karate: do karate / does karate!', group: 'Thể thao & Câu lạc bộ' },
  { word: 'sport', ipa: '/spɔːt/', pos: 'n', meaning: 'thể thao', example: 'Fishing is a quiet sport.', exampleVi: 'Câu cá là một môn thể thao yên tĩnh.', group: 'Thể thao & Câu lạc bộ' },
  { word: 'club', ipa: '/klʌb/', pos: 'n', meaning: 'câu lạc bộ', example: 'How often do you go to the English club?', exampleVi: 'Bạn đến câu lạc bộ Tiếng Anh thường xuyên thế nào?', group: 'Thể thao & Câu lạc bộ' },
  { word: 'dance', ipa: '/dɑːns/', pos: 'v', meaning: 'nhảy, múa', example: 'She likes singing and dancing.', exampleVi: 'Bạn ấy thích hát và nhảy múa.', group: 'Thể thao & Câu lạc bộ' },
  { word: 'sing', ipa: '/sɪŋ/', pos: 'v', meaning: 'ca hát', example: 'We sing English songs at the club.', exampleVi: 'Chúng mình hát các bài tiếng Anh ở câu lạc bộ.', group: 'Thể thao & Câu lạc bộ' },
];

export const U13_VOCAB_PAGE98: PageVocabWord[] = [
  { word: 'question', ipa: '/ˈkwestʃən/', pos: 'n', meaning: 'câu hỏi', example: 'Ask your classmates three questions.', exampleVi: 'Hỏi các bạn cùng lớp ba câu hỏi.', group: 'Khảo sát & Thiên nhiên' },
  { word: 'survey', ipa: '/ˈsɜːveɪ/', pos: 'n', meaning: 'cuộc khảo sát', example: 'We are doing a survey about free time.', exampleVi: 'Chúng mình đang làm khảo sát về thời gian rảnh.', group: 'Khảo sát & Thiên nhiên' },
  { word: 'cartoon', ipa: '/kɑːˈtuːn/', pos: 'n', meaning: 'phim hoạt hình', example: 'Linda watches cartoons every evening.', exampleVi: 'Linda xem phim hoạt hình mỗi tối.', group: 'Hoạt động trong nhà' },
  { word: 'ask', ipa: '/ɑːsk/', pos: 'v', meaning: 'hỏi', example: 'Ask your partner about his hobby.', exampleVi: 'Hỏi bạn cùng bàn về sở thích của cậu ấy.', group: 'Khảo sát & Thiên nhiên' },
  { word: 'go fishing', ipa: '/ɡəʊ ˈfɪʃɪŋ/', pos: 'phr', meaning: 'đi câu cá', example: 'My father often goes fishing at the weekend.', exampleVi: 'Bố mình thường đi câu cá vào cuối tuần.', tip: 'Mẫu go + V-ing cực dễ nhớ: go fishing / shopping / swimming / camping / skating / hiking!', group: 'Đi chơi (go + V-ing)' },
  { word: 'go shopping', ipa: '/ɡəʊ ˈʃɒpɪŋ/', pos: 'phr', meaning: 'đi mua sắm', example: 'My mother goes shopping on Saturday mornings.', exampleVi: 'Mẹ mình đi mua sắm vào sáng thứ Bảy.', group: 'Đi chơi (go + V-ing)' },
  { word: 'go swimming', ipa: '/ɡəʊ ˈswɪmɪŋ/', pos: 'phr', meaning: 'đi bơi', example: 'My sister goes swimming twice a week.', exampleVi: 'Chị mình đi bơi hai lần một tuần.', group: 'Đi chơi (go + V-ing)' },
  { word: 'go camping', ipa: '/ɡəʊ ˈkæmpɪŋ/', pos: 'phr', meaning: 'đi cắm trại', example: 'They often go camping in summer.', exampleVi: 'Họ thường đi cắm trại vào mùa hè.', group: 'Đi chơi (go + V-ing)' },
  { word: 'go skating', ipa: '/ɡəʊ ˈskeɪtɪŋ/', pos: 'phr', meaning: 'đi trượt pa-tanh', example: 'Phong goes skating every Sunday.', exampleVi: 'Phong đi trượt pa-tanh mỗi Chủ nhật.', group: 'Đi chơi (go + V-ing)' },
  { word: 'go hiking', ipa: '/ɡəʊ ˈhaɪkɪŋ/', pos: 'phr', meaning: 'đi bộ đường dài / leo núi', example: 'We love going hiking in the forest.', exampleVi: 'Chúng mình thích đi bộ khám phá trong rừng.', group: 'Đi chơi (go + V-ing)' },
  { word: 'draw', ipa: '/drɔː/', pos: 'v', meaning: 'vẽ', example: 'I often draw pictures in my free time.', exampleVi: 'Mình thường vẽ tranh lúc rảnh rỗi.', group: 'Hoạt động trong nhà' },
  { word: 'Red River', ipa: '/red ˈrɪvə(r)/', pos: 'n', meaning: 'Sông Hồng', example: 'The Red River flows through Ha Noi.', exampleVi: 'Sông Hồng chảy qua Hà Nội.', group: 'Khảo sát & Thiên nhiên' },
  { word: 'forest', ipa: '/ˈfɒrɪst/', pos: 'n', meaning: 'khu rừng', example: 'They went camping in a green forest.', exampleVi: 'Họ đã đi cắm trại trong một khu rừng xanh.', group: 'Khảo sát & Thiên nhiên' },
  { word: 'camp', ipa: '/kæmp/', pos: 'n/v', meaning: 'trại, cắm trại', example: 'We built a small camp near the lake.', exampleVi: 'Chúng mình dựng một khu trại nhỏ gần hồ.', group: 'Khảo sát & Thiên nhiên' },
];

export const U13_FAMILY_PRESETS = [
  {
    id: 'you',
    labelVi: 'Bạn (you)',
    aux: 'do',
    subjectQ: 'you',
    possessiveQ: 'your',
    subjectA: 'I',
    isThirdSingular: false,
  },
  {
    id: 'father',
    labelVi: 'Bố bạn (your father)',
    aux: 'does',
    subjectQ: 'your father',
    possessiveQ: 'his',
    subjectA: 'He',
    isThirdSingular: true,
  },
  {
    id: 'mother',
    labelVi: 'Mẹ bạn (your mother)',
    aux: 'does',
    subjectQ: 'your mother',
    possessiveQ: 'her',
    subjectA: 'She',
    isThirdSingular: true,
  },
  {
    id: 'brother',
    labelVi: 'Anh/Em trai (your brother)',
    aux: 'does',
    subjectQ: 'your brother',
    possessiveQ: 'his',
    subjectA: 'He',
    isThirdSingular: true,
  },
  {
    id: 'sister',
    labelVi: 'Chị/Em gái (your sister)',
    aux: 'does',
    subjectQ: 'your sister',
    possessiveQ: 'her',
    subjectA: 'She',
    isThirdSingular: true,
  },
];

export const U13_ACTIVITY_PRESETS = [
  { id: 'fishing', iconKey: 'fishing', labelVi: 'Đi câu cá', base: 'go fishing', third: 'goes fishing' },
  { id: 'shopping', iconKey: 'shopping', labelVi: 'Đi mua sắm', base: 'go shopping', third: 'goes shopping' },
  { id: 'karate', iconKey: 'karate', labelVi: 'Tập võ karate', base: 'do karate', third: 'does karate' },
  { id: 'surfing', iconKey: 'surfing', labelVi: 'Lướt Internet', base: 'surf the Internet', third: 'surfs the Internet' },
  { id: 'skating', iconKey: 'skating', labelVi: 'Trượt pa-tanh', base: 'go skating', third: 'goes skating' },
  { id: 'cleaning', iconKey: 'cleaning', labelVi: 'Dọn dẹp nhà', base: 'clean the house', third: 'cleans the house' },
];

export const U13_TASK1_ODD: QuizChoiceItem[] = [
  {
    id: 'p99-u13t1-1',
    prompt: '1. Chọn từ khác loại:',
    options: ['karate', 'clean', 'surf', 'do'],
    correctIndex: 0,
    explanation: '"karate" là danh từ (môn võ), 3 từ còn lại (clean, surf, do) đều là động từ.',
  },
  {
    id: 'p99-u13t1-2',
    prompt: '2. Chọn từ khác loại:',
    options: ['beach', 'programme', 'house', 'cinema'],
    correctIndex: 1,
    explanation: '"programme" là chương trình TV, 3 từ còn lại (beach, house, cinema) đều là địa điểm.',
  },
  {
    id: 'p99-u13t1-3',
    prompt: '3. Chọn từ khác loại:',
    options: ['come', 'ride', 'watch', 'free'],
    correctIndex: 3,
    explanation: '"free" là tính từ (rảnh rỗi), 3 từ còn lại (come, ride, watch) đều là động từ.',
  },
  {
    id: 'p99-u13t1-4',
    prompt: '4. Chọn từ khác loại:',
    options: ['sing', 'fishing', 'swimming', 'skating'],
    correctIndex: 0,
    explanation: '"sing" là động từ nguyên mẫu, 3 từ còn lại đều là dạng V-ing đi sau "go".',
  },
  {
    id: 'p99-u13t1-5',
    prompt: '5. Chọn từ khác loại:',
    options: ['mother', 'father', 'friend', 'brother'],
    correctIndex: 2,
    explanation: '"friend" là bạn bè, 3 từ còn lại (mother, father, brother) đều là thành viên trong gia đình.',
  },
];

export const U13_TASK2_P99: LeaveOneOutItem[] = [
  {
    id: 'p99-u13t2-1',
    number: 1,
    wordWithExtra: 'SUORF THE INTERNET',
    extraIndex: 2,
    correctWord: 'SURF THE INTERNET',
    meaningVi: 'lướt mạng Internet',
    iconKey: 'surfing',
    tip: 'Bỏ chữ "O" thừa trong SUORF → SURF THE INTERNET!',
  },
  {
    id: 'p99-u13t2-2',
    number: 2,
    wordWithExtra: 'CLEDAN',
    extraIndex: 3,
    correctWord: 'CLEAN',
    meaningVi: 'dọn dẹp, lau chùi',
    iconKey: 'cleaning',
    tip: 'Bỏ chữ "D" thừa trong CLEDAN → CLEAN!',
  },
];

export const U13_TASK2_P100: LeaveOneOutItem[] = [
  {
    id: 'p100-u13t2-3',
    number: 3,
    wordWithExtra: 'KASRATE',
    extraIndex: 2,
    correctWord: 'KARATE',
    meaningVi: 'môn võ karate',
    iconKey: 'karate',
    tip: 'Bỏ chữ "S" thừa trong KASRATE → KARATE!',
  },
  {
    id: 'p100-u13t2-4',
    number: 4,
    wordWithExtra: 'FREE TIMES',
    extraIndex: 9,
    correctWord: 'FREE TIME',
    meaningVi: 'thời gian rảnh rỗi',
    iconKey: 'sun',
    tip: 'Thời gian rảnh là danh từ không đếm được → bỏ chữ "S" cuối để thành FREE TIME!',
  },
  {
    id: 'p100-u13t2-5',
    number: 5,
    wordWithExtra: 'WATECH',
    extraIndex: 3,
    correctWord: 'WATCH',
    meaningVi: 'xem (ti-vi, phim)',
    iconKey: 'cartoon',
    tip: 'Bỏ chữ "E" thừa trong WATECH → WATCH!',
  },
];

export const U13_TASK3_DEFS: FillItem[] = [
  {
    id: 'p100-u13t3-1',
    iconKey: 'karate',
    before: '1. You use hands and feet as weapons in fighting. → ',
    answers: ['karate'],
    hint: 'Môn võ dùng tay và chân (k_____) → karate',
    explanation: 'karate = môn võ karate.',
  },
  {
    id: 'p100-u13t3-2',
    iconKey: 'camping',
    before: '2. You live in a tent on holiday. → ',
    answers: ['camping'],
    hint: 'Ở trong lều vào kỳ nghỉ (c______) → camping',
    explanation: 'camping = hoạt động cắm trại.',
  },
  {
    id: 'p100-u13t3-3',
    iconKey: 'fishing',
    before: '3. The sport or business of catching fish. → ',
    answers: ['fishing'],
    hint: 'Môn thể thao bắt cá bằng cần câu (f______) → fishing',
    explanation: 'fishing = câu cá.',
  },
  {
    id: 'p100-u13t3-4',
    iconKey: 'shopping',
    before: '4. You go to stores and buy things. → ',
    answers: ['shopping'],
    hint: 'Đến cửa hàng và mua sắm đồ đạc (s_______) → shopping',
    explanation: 'shopping = mua sắm.',
  },
  {
    id: 'p100-u13t3-5',
    iconKey: 'cinema',
    before: '5. You go to this building to watch films. → ',
    answers: ['cinema'],
    hint: 'Tòa nhà để xem phim chiếu rạp (c_____) → cinema',
    explanation: 'cinema = rạp chiếu phim.',
  },
];

export const U13_TASK4_FISHING_READING = {
  passage:
    'My dad and I have the same hobby. We both like fishing very much because it is a quiet sport. There are a lot of big trees around quiet ponds and rivers in our neighbourhood. We often go fishing there. Dad and I can sit for hours to wait for the fish. We often talk about my study or our relatives.',
  passageVi:
    'Bố và mình có chung một sở thích. Cả hai bố con đều rất thích câu cá vì đó là một môn thể thao yên tĩnh. Có rất nhiều cây to quanh những cái ao và dòng sông êm ả trong khu dân cư của chúng mình. Hai bố con thường ra đó câu cá. Bố và mình có thể ngồi hàng giờ liền để chờ cá cắn câu. Chúng mình thường trò chuyện về việc học của mình hoặc về họ hàng.',
  example: '0. My father and I like different sports. → False (Hai bố con có cùng sở thích: have the same hobby)',
  statements: [
    {
      id: 'p101-u13t4-1',
      text: '1. Fishing is a quiet sport.',
      isTrue: true,
      explanation: 'Đúng! Câu 2 viết: "We both like fishing very much because it is a quiet sport."',
    },
    {
      id: 'p101-u13t4-2',
      text: '2. We often go fishing in the forest.',
      isTrue: false,
      explanation: 'Sai! Hai bố con câu cá ở các ao và sông trong khu dân cư ("ponds and rivers in our neighbourhood"), không phải trong rừng.',
    },
    {
      id: 'p101-u13t4-3',
      text: '3. My father and I often talk to each other while fishing.',
      isTrue: true,
      explanation: 'Đúng! Câu cuối nói: "We often talk about my study or our relatives."',
    },
    {
      id: 'p101-u13t4-4',
      text: "4. We can't sit long when we go fishing.",
      isTrue: false,
      explanation: 'Sai! Hai bố con có thể ngồi hàng giờ liền ("Dad and I can sit for hours").',
    },
    {
      id: 'p101-u13t4-5',
      text: '5. We have friendly chats while fishing.',
      isTrue: true,
      explanation: 'Đúng! Hai bố con trò chuyện thân mật về chuyện học hành và người thân.',
    },
  ],
};

export const U13_TASK5_P101: FillItem[] = [
  {
    id: 'p101-u13t5-1',
    iconKey: 'camping',
    before: '1. They often go ',
    after: ' in summer.',
    answers: ['camping'],
    hint: 'Hình chiếc lều cắm trại → camping (go camping)',
    explanation: 'They often go camping in summer. (Họ thường đi cắm trại vào mùa hè.)',
  },
  {
    id: 'p101-u13t5-2',
    iconKey: 'surfing',
    before: '2. He often surfs the ',
    after: ' in the evening.',
    answers: ['Internet', 'internet'],
    hint: 'Lướt mạng trên máy tính → Internet (nhớ viết hoa chữ I càng đẹp!)',
    explanation: 'He often surfs the Internet in the evening. (Bạn ấy thường lướt mạng vào buổi tối.)',
  },
  {
    id: 'p101-u13t5-3',
    iconKey: 'skating',
    before: '3. Phong goes ',
    after: ' every Sunday.',
    answers: ['skating'],
    hint: 'Hình đôi giày trượt pa-tanh → skating (go skating)',
    explanation: 'Phong goes skating every Sunday. (Phong đi trượt pa-tanh mỗi Chủ nhật.)',
  },
  {
    id: 'p101-u13t5-4',
    iconKey: 'karate',
    before: '4. My younger brother often does ',
    after: ' in the gym.',
    answers: ['karate'],
    hint: 'Môn võ mặc võ phục trắng đai đen → karate (does karate)',
    explanation: 'My younger brother often does karate in the gym. (Em trai mình thường tập karate trong phòng tập.)',
  },
];

export const U13_TASK5_P102: FillItem[] = [
  {
    id: 'p102-u13t5-5',
    iconKey: 'bike',
    before: '5. I ride my ',
    after: ' to school every day.',
    answers: ['bike', 'bicycle'],
    hint: 'Hình chiếc xe đạp → bike',
    explanation: 'I ride my bike to school every day. (Mình đạp xe đến trường mỗi ngày.)',
  },
];

export const U13_TASK6_SUMMER_BLANKS: ParagraphBlank[] = [
  { id: 'p102-sum-1', index: 1, answers: ['swimming'], hint: 'Thích bơi lội (sau like + V-ing) → swimming', iconKey: 'swim' },
  { id: 'p102-sum-2', index: 2, answers: ['skate'], hint: 'Sau "can" dùng động từ nguyên mẫu trượt pa-tanh → skate', iconKey: 'skating' },
  { id: 'p102-sum-3', index: 3, answers: ['parents'], hint: 'Bố và mẹ (đi với động từ "are") → parents', iconKey: 'partner' },
  { id: 'p102-sum-4', index: 4, answers: ['fishing'], hint: 'Đi câu cá (go + V-ing) → fishing', iconKey: 'fishing' },
  { id: 'p102-sum-5', index: 5, answers: ['food'], hint: 'Mẹ chuẩn bị rất nhiều đồ ăn ngon → food', iconKey: 'seafood' },
];

export const U13_TASK7_P102: OrderSentenceItem[] = [
  {
    id: 'p102-u13t7-1',
    words: ['often', 'do', 'What', 'free', 'your', 'in', 'you', 'time', 'do', '?'],
    answer: 'What do you often do in your free time?',
    meaning: 'Bạn thường làm gì vào thời gian rảnh?',
    explanation: 'What + do + you + often + do + in your free time?',
  },
];

export const U13_TASK7_P103: OrderSentenceItem[] = [
  {
    id: 'p103-u13t7-2',
    words: ['swimming', 'a', 'My', 'goes', 'week', 'twice', 'sister', '.'],
    answer: 'My sister goes swimming twice a week.',
    meaning: 'Chị gái mình đi bơi hai lần một tuần.',
    explanation: 'My sister + goes swimming + twice a week.',
  },
  {
    id: 'p103-u13t7-3',
    words: ['do', 'free', 'in', 'I', 'my', 'often', 'karate', 'time', '.'],
    answer: 'I often do karate in my free time.',
    meaning: 'Mình thường tập võ karate trong thời gian rảnh.',
    explanation: 'I + often + do karate + in my free time.',
  },
  {
    id: 'p103-u13t7-4',
    words: ['club', 'How', 'English', 'you', 'go to', 'do', 'often', 'the', '?'],
    answer: 'How often do you go to the English club?',
    meaning: 'Bạn đến câu lạc bộ Tiếng Anh thường xuyên thế nào?',
    explanation: 'How often + do + you + go to + the English club?',
  },
  {
    id: 'p103-u13t7-5',
    words: ['Fishing', 'hobbies', 'is', "my brother's", 'one of', '.'],
    answer: "Fishing is one of my brother's hobbies.",
    meaning: 'Câu cá là một trong những sở thích của anh trai mình.',
    explanation: "Fishing + is + one of + my brother's hobbies. (Hoặc: One of my brother's hobbies is fishing.)",
  },
];

export const U13_TASK8_WRITING: GuidedWritingPrompt[] = [
  {
    id: 'p103-w1',
    question: '1. What do you do in your free time? (Em làm gì vào thời gian rảnh?)',
    starter: 'In my free time, I often',
    sample: 'draw pictures and surf the Internet.',
    placeholder: 'go swimming / do karate / watch cartoons...',
  },
  {
    id: 'p103-w2',
    question: '2. Why do you do that in your free time? (Vì sao em thích hoạt động đó?)',
    starter: 'I like it because',
    sample: 'it is fun and helps me relax after school.',
    placeholder: 'it is interesting and good for my health...',
  },
  {
    id: 'p103-w3',
    question: '3. How often do you do that? (Em làm việc đó thường xuyên thế nào?)',
    starter: 'I',
    sample: 'do it three times a week.',
    placeholder: 'do it every weekend / twice a week...',
  },
  {
    id: 'p103-w4',
    question: '4. Who do you like to spend your free time with? (Em thích dành thời gian rảnh với ai?)',
    starter: 'I like to spend my free time with',
    sample: 'my best friend and my family.',
    placeholder: 'my parents / my classmates...',
  },
  {
    id: 'p103-w5',
    question: '5. What do your parents often do in their free time? (Bố mẹ em thường làm gì lúc rảnh?)',
    starter: 'My parents often',
    sample: 'go fishing and cook delicious food at the weekend.',
    placeholder: 'go shopping / clean the house / watch TV...',
  },
];

// =========================================================
// UNIT 14 OPENING (PAGE 104: WHAT HAPPENED IN THE STORY?)
// =========================================================

export const U14_VOCAB_PAGE104: PageVocabWord[] = [
  { word: 'story', ipa: '/ˈstɔːri/', pos: 'n', meaning: 'câu chuyện', example: 'What happened in the story?', exampleVi: 'Chuyện gì đã xảy ra trong câu chuyện?', group: 'Kể chuyện & Nhân vật' },
  { word: 'watermelon', ipa: '/ˈwɔːtəmelən/', pos: 'n', meaning: 'quả dưa hấu', example: 'The seeds gave delicious red watermelons.', exampleVi: 'Những hạt giống cho ra quả dưa hấu ruột đỏ thơm ngon.', tip: 'Ghép cực dễ nhớ: water (nước) + melon (dưa) = quả dưa mọng nước!', group: 'Sự tích Quả dưa hấu' },
  { word: 'delicious', ipa: '/dɪˈlɪʃəs/', pos: 'adj', meaning: 'ngon miệng', example: 'The watermelons were sweet and delicious.', exampleVi: 'Những quả dưa hấu ngọt và rất ngon.', group: 'Sự tích Quả dưa hấu' },
  { word: 'happen', ipa: '/ˈhæpən/', pos: 'v', meaning: 'xảy ra', example: 'What happened next in the story?', exampleVi: 'Chuyện gì đã xảy ra tiếp theo trong truyện?', group: 'Kể chuyện & Nhân vật' },
  { word: 'island', ipa: '/ˈaɪlənd/', pos: 'n', meaning: 'hòn đảo', example: 'An Tiem lived on a faraway island.', exampleVi: 'An Tiêm sống trên một hòn đảo xa xôi.', tip: 'Chữ "s" trong island bị câm, đọc /ˈaɪlənd/.', group: 'Sự tích Quả dưa hấu' },
  { word: 'order', ipa: '/ˈɔːdə(r)/', pos: 'v', meaning: 'ra lệnh', example: 'King Hung ordered An Tiem to live on an island.', exampleVi: 'Vua Hùng ra lệnh cho An Tiêm ra sống ngoài đảo.', group: 'Sự tích Quả dưa hấu' },
  { word: 'far away', ipa: '/fɑːr əˈweɪ/', pos: 'adv', meaning: 'xa xôi', example: 'The island was very far away.', exampleVi: 'Hòn đảo ở rất xa xôi.', group: 'Sự tích Quả dưa hấu' },
  { word: 'seed', ipa: '/siːd/', pos: 'n', meaning: 'hạt giống', example: 'An Tiem found some black seeds.', exampleVi: 'An Tiêm tìm thấy một vài hạt màu đen.', group: 'Sự tích Quả dưa hấu' },
  { word: 'grow', ipa: '/ɡrəʊ/', pos: 'v', meaning: 'trồng, gieo trồng', example: 'He grew the black seeds carefully.', exampleVi: 'Anh ấy gieo trồng những hạt đen cẩn thận.', tip: 'Quá khứ bất quy tắc: grow → grew.', group: 'Sự tích Quả dưa hấu' },
  { word: 'exchange', ipa: '/ɪksˈtʃeɪndʒ/', pos: 'v', meaning: 'trao đổi', example: 'They exchanged watermelons for food and drink.', exampleVi: 'Họ đổi dưa hấu lấy thức ăn và nước uống.', tip: 'Đi với giới từ FOR: exchange A for B.', group: 'Sự tích Quả dưa hấu' },
  { word: 'lucky', ipa: '/ˈlʌki/', pos: 'adj', meaning: 'may mắn', example: 'An Tiem’s family was lucky and hard-working.', exampleVi: 'Gia đình An Tiêm thật may mắn và chăm chỉ.', group: 'Kể chuyện & Nhân vật' },
  { word: 'in the end', ipa: '/ɪn ði end/', pos: 'phr', meaning: 'cuối cùng', example: 'In the end, King Hung let them go back home.', exampleVi: 'Cuối cùng, Vua Hùng cho gia đình họ trở về nhà.', group: '4 từ nối kể chuyện' },
  { word: 'hear about', ipa: '/hɪər əˈbaʊt/', pos: 'phr', meaning: 'nghe kể về', example: 'King Hung heard about the story.', exampleVi: 'Vua Hùng nghe kể về câu chuyện.', tip: 'Quá khứ của hear là heard (/hɜːd/).', group: 'Sự tích Quả dưa hấu' },
  { word: 'let', ipa: '/let/', pos: 'v', meaning: 'cho phép', example: 'The King let An Tiem go back home.', exampleVi: 'Nhà Vua cho phép An Tiêm trở về nhà.', tip: 'Sau let + tân ngữ + V nguyên mẫu (không to).', group: 'Sự tích Quả dưa hấu' },
  { word: 'go back', ipa: '/ɡəʊ bæk/', pos: 'phr', meaning: 'trở lại, quay về', example: 'They were happy to go back home.', exampleVi: 'Họ rất vui mừng được quay trở về nhà.', group: 'Sự tích Quả dưa hấu' },
  { word: 'first', ipa: '/fɜːst/', pos: 'adv', meaning: 'đầu tiên', example: 'First, King Hung ordered An Tiem to live on an island.', exampleVi: 'Đầu tiên, Vua Hùng lệnh cho An Tiêm ra đảo sống.', group: '4 từ nối kể chuyện' },
  { word: 'then', ipa: '/ðen/', pos: 'adv', meaning: 'sau đó', example: 'Then, An Tiem found some black seeds and grew them.', exampleVi: 'Sau đó, An Tiêm tìm thấy vài hạt đen và đem trồng.', group: '4 từ nối kể chuyện' },
  { word: 'next', ipa: '/nekst/', pos: 'adv', meaning: 'kế tiếp', example: 'Next, they exchanged watermelons for food and drink.', exampleVi: 'Kế tiếp, họ đổi dưa hấu lấy thức ăn và nước uống.', group: '4 từ nối kể chuyện' },
  { word: 'princess', ipa: '/ˌprɪnˈses/', pos: 'n', meaning: 'công chúa', example: 'The princess lived in a beautiful castle.', exampleVi: 'Nàng công chúa sống trong một tòa lâu đài xinh đẹp.', group: 'Kể chuyện & Nhân vật' },
];

export const U14_WATERMELON_STORY_STEPS: StoryStepItem[] = [
  {
    step: 1,
    connector: 'First,',
    connectorVi: 'Đầu tiên',
    iconKey: 'bay',
    sentenceEn: 'King Hung ordered Mai An Tiem and his family to live on an island far away.',
    sentenceVi: 'Vua Hùng ra lệnh cho Mai An Tiêm và gia đình ra sinh sống trên một hòn đảo xa xôi.',
    highlightWords: ['ordered', 'island', 'far away'],
  },
  {
    step: 2,
    connector: 'Then,',
    connectorVi: 'Sau đó',
    iconKey: 'seeds',
    sentenceEn: 'One day, An Tiem found some black seeds and he grew them.',
    sentenceVi: 'Một ngày nọ, An Tiêm tìm thấy vài hạt màu đen và anh đem gieo trồng chúng.',
    highlightWords: ['found', 'seeds', 'grew'],
  },
  {
    step: 3,
    connector: 'Next,',
    connectorVi: 'Kế tiếp',
    iconKey: 'watermelon',
    sentenceEn: 'The seeds gave delicious watermelons. His family exchanged them for food and drink.',
    sentenceVi: 'Hạt giống cho ra những quả dưa hấu thơm ngon. Gia đình anh đổi dưa lấy thức ăn và nước uống.',
    highlightWords: ['delicious', 'watermelon', 'exchanged'],
  },
  {
    step: 4,
    connector: 'In the end,',
    connectorVi: 'Cuối cùng',
    iconKey: 'princess',
    sentenceEn: 'King Hung heard about the story and he let An Tiem and his family go back home.',
    sentenceVi: 'Vua Hùng nghe kể về câu chuyện và cho phép gia đình An Tiêm trở về nhà.',
    highlightWords: ['heard about', 'let', 'go back'],
  },
];
