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
import type { LetterFillItem } from './pages42to62Data';

export interface PageMeta83 {
  page: number;
  unit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  title: string;
  subtitle: string;
  sectionTag: string;
}

export interface PastSentenceTask {
  id: string;
  cue: string;
  cueVi: string;
  verbNote: string;
  answers: string[];
  explanation: string;
}

export interface ShouldChoiceItem {
  id: string;
  number: number;
  before: string;
  after: string;
  secondBlankAfter?: string;
  answer: 'should' | "shouldn't";
  secondAnswer?: 'should' | "shouldn't";
  explanation: string;
}

export interface ZooShowcaseAnimal {
  key: string;
  nameEn: string;
  nameVi: string;
  adverbPhrase: string;
  sentence: string;
  sentenceVi: string;
  funFact: string;
}

export interface ClinicSymptomPreset {
  id: string;
  iconKey: string;
  symptomEn: string;
  symptomVi: string;
  article: 'a' | 'an';
  shouldDo: string;
  shouldDoVi: string;
  shouldntDo: string;
  shouldntDoVi: string;
  response: string;
}

export const PAGES_63_TO_83_INDEX: PageMeta83[] = [
  { page: 63, unit: 9, title: 'Unit 9 · Hỏi thời điểm đi sở thú, Task 1 (10 từ chính tả) & Task 2 (Nối 10 cặp)', subtitle: 'When did you go to the zoo? · Luyện viết đúng 10 từ động vật/trạng từ & nối 10 cặp hỏi đáp', sectionTag: 'Ngữ pháp · Chính tả' },
  { page: 64, unit: 9, title: 'Unit 9 · Task 3 (Lịch biểu diễn Sở thú Thứ Bảy) & Task 4 (Hội thoại cô Nga)', subtitle: 'Đọc bảng giờ diễn Early birds / Penguin / Tigers & sắp xếp 5 lượt thoại tham quan sở thú', sectionTag: 'Đọc hiểu · Hội thoại' },
  { page: 65, unit: 9, title: 'Unit 9 · Task 5 (Điền 2 đoạn hội thoại) & Task 6 (Chuyến đi sở thú Chủ nhật)', subtitle: 'Luyện 12 chỗ trống từ gợi ý và đoạn văn 5 hình động vật: tigers, elephant, monkeys, pythons, penguin', sectionTag: 'Điền từ · Đọc' },
  { page: 66, unit: 9, title: 'Unit 9 · Task 7 (Nhìn 5 tranh động vật điền từ) & Task 8 (Câu 1 xếp từ)', subtitle: 'Điền peacock, panda, tigers, gorillas, kangaroos và bắt đầu luyện sắp xếp câu Quá khứ đơn', sectionTag: 'Trực quan · Viết câu' },
  { page: 67, unit: 9, title: 'Unit 9 · Task 8 (Sắp xếp câu 2–8) & Task 9 (Viết câu Quá khứ đơn câu 1–2)', subtitle: 'Ghép 7 câu chuẩn ngữ pháp động vật + trạng từ -ly và chuyển động từ sang quá khứ', sectionTag: 'Viết câu Quá khứ' },
  { page: 68, unit: 9, title: 'Unit 9 · Task 9 (Câu 3–5), Task 10 (Viết về chuyến đi) & Task 11 (Con vật yêu thích)', subtitle: 'Hoàn thành trọn vẹn Unit 9 với viết đoạn văn về bạn thân đi sở thú & bộ sưu tập 8 loài vật', sectionTag: 'Tổng ôn Unit 9' },
  { page: 69, unit: 10, title: 'Unit 10 · Mở đầu & 11 từ vựng Ngày lễ – Hội thao (Phần 1)', subtitle: "When will Sports Day be? — Học Sports Day, Teachers' Day, Independence Day, Children's Day, badminton", sectionTag: 'Từ vựng Unit 10' },
  { page: 70, unit: 10, title: 'Unit 10 · Từ vựng Thể thao (11 từ Phần 2) & Ngữ pháp 1a–1b (be going to)', subtitle: 'Học football, volleyball, basketball, table tennis, take part in & cấu trúc dự định khẳng định/phủ định', sectionTag: 'Từ vựng · Ngữ pháp' },
  { page: 71, unit: 10, title: 'Unit 10 · Ngữ pháp 1c (Câu hỏi be going to) & Xưởng lập kế hoạch Ngày hội Thể thao', subtitle: 'Sơ đồ tương lai gần am/is/are going to + V, lưu ý đặc biệt với go/come & bộ ghép kế hoạch thi đấu', sectionTag: 'Ngữ pháp trực quan' },
  { page: 72, unit: 10, title: 'Unit 10 · Ngữ pháp 2 (What are you going to do?), Task 1 (Odd one out) & Task 2 (Câu 1)', subtitle: 'Hỏi dự định trong sự kiện trường học, chọn từ khác loại 6 câu và bắt đầu tìm lỗi sai', sectionTag: 'Ngữ pháp · Luyện tập' },
  { page: 73, unit: 10, title: 'Unit 10 · Task 2 (Tìm lỗi sai câu 2–6) & Task 3 (Nối 5 ngày lễ trường học)', subtitle: "Sửa lỗi ngữ pháp going to / like V-ing / want to V & ghép mô tả với 5 ngày lễ lớn", sectionTag: 'Sửa lỗi · Nối hình' },
  { page: 74, unit: 10, title: 'Unit 10 · Task 4 (Liên hoan Âm nhạc của Tim) & Task 5 (Trắc nghiệm câu 1–10)', subtitle: 'Đọc hiểu Đúng/Sai về đội nhạc lớp Tim và luyện 10 câu trắc nghiệm đầu tiên của Unit 10', sectionTag: 'Đọc · Trắc nghiệm' },
  { page: 75, unit: 10, title: 'Unit 10 · Task 5 (Trắc nghiệm câu 11–20) & Task 6 (Đoạn văn Ngày hội Thể thao)', subtitle: 'Hoàn thành 10 câu trắc nghiệm tiếp theo và điền 5 hình minh họa về buổi tập luyện thể thao', sectionTag: 'Trắc nghiệm · Đọc' },
  { page: 76, unit: 10, title: 'Unit 10 · Task 7 (Nhìn 4 tranh ngày lễ/nhạc cụ điền từ) & Task 8 (Câu 1 xếp từ)', subtitle: "Điền Teachers' Day, play, Children's Day, Independence Day và luyện xếp câu hỏi When will...?", sectionTag: 'Trực quan · Viết câu' },
  { page: 77, unit: 10, title: 'Unit 10 · Task 8 (Sắp xếp câu 2–10) & Task 9 (Dịch câu sang Tiếng Anh)', subtitle: 'Luyện 9 câu sắp xếp chuẩn mẫu câu tương lai & chọn bản dịch tiếng Anh chính xác', sectionTag: 'Viết câu · Dịch' },
  { page: 78, unit: 11, title: "Unit 10 (Task 10 Viết sự kiện) & Mở đầu Unit 11: What's the matter with you?", subtitle: 'Viết kế hoạch ngày lễ trường em và làm quen 6 từ vựng sức khỏe đầu tiên (fever, headache...)', sectionTag: 'Viết · Mở đầu Unit 11' },
  { page: 79, unit: 11, title: 'Unit 11 · Trọn bộ 25 từ vựng Sức khỏe, Triệu chứng & Chăm sóc cơ thể', subtitle: 'Học toothache, earache, stomach ache, backache, sore throat, dentist, carry heavy things, healthy', sectionTag: 'Từ vựng Unit 11' },
  { page: 80, unit: 11, title: 'Unit 11 · Từ vựng (problem, advice) & Sơ đồ Ngữ pháp 1–2 (Hỏi bệnh & Should/Shouldn’t)', subtitle: "Nắm chắc công thức What's the matter with...? & cách khuyên Nên / Không nên bằng hình ảnh", sectionTag: 'Ngữ pháp trực quan' },
  { page: 81, unit: 11, title: 'Unit 11 · Phòng khám Bác sĩ tương tác (Ngữ pháp 3) & Task 1 (Odd one out câu 1–3)', subtitle: 'Thực hành khám bệnh – kê lời khuyên & đáp lễ (Yes, I will. Thanks / OK, I won’t. Thanks)', sectionTag: 'Giao tiếp · Luyện tập' },
  { page: 82, unit: 11, title: 'Unit 11 · Task 1 (Câu 4–5), Task 2 (5 hình bệnh) & Task 3 (Should / Shouldn’t câu 1–13)', subtitle: 'Đoán bệnh qua hình vẽ và luyện chọn nhanh should / shouldn’t cho 13 tình huống sức khỏe', sectionTag: 'Trực quan · Ngữ pháp' },
  { page: 83, unit: 11, title: 'Unit 11 · Task 3 (Câu 14–18), Task 4 (Bé May đau răng) & Task 5 (27 từ chính tả)', subtitle: 'Hoàn thành chọn should/shouldn’t, đọc hiểu Đúng/Sai về bé May & điền chữ cái 27 từ cốt lõi', sectionTag: 'Tổng ôn Trang 83' },
];

// =========================================================
// UNIT 9 COMPLETION (PAGES 63–68)
// =========================================================

export const U9_TASK1_LETTERS: LetterFillItem[] = [
  { id: 'p63-u9t1-1', pattern: 'S l o _ l y', answers: ['slowly'], meaningVi: 'một cách chậm rãi', hint: 'slow + ly → thiếu chữ w' },
  { id: 'p63-u9t1-2', pattern: 'R o _ r', answers: ['roar'], meaningVi: 'gầm, rú (tiếng sư tử/hổ)', hint: 'r-o-a-r → thiếu chữ a' },
  { id: 'p63-u9t1-3', pattern: 'Q _ i _ t l _', answers: ['quietly'], meaningVi: 'một cách yên lặng, êm ái', hint: 'quiet + ly → thiếu u, e, y' },
  { id: 'p63-u9t1-4', pattern: '_ y t h _ n', answers: ['python'], meaningVi: 'con trăn', hint: 'p-y-t-h-o-n → thiếu p và o' },
  { id: 'p63-u9t1-5', pattern: 'P _ a c _ c _', answers: ['peacock'], meaningVi: 'con công', hint: 'pea + cock → thiếu e, o, k' },
  { id: 'p63-u9t1-6', pattern: 'P _ n d _', answers: ['panda'], meaningVi: 'gấu trúc', hint: 'p-a-n-d-a → thiếu hai chữ a' },
  { id: 'p63-u9t1-7', pattern: '_ o v _', answers: ['move'], meaningVi: 'di chuyển', hint: 'm-o-v-e → thiếu m và e' },
  { id: 'p63-u9t1-8', pattern: 'L _ u _ l y', answers: ['loudly'], meaningVi: 'to tiếng, ầm ĩ', hint: 'loud + ly → thiếu o và d' },
  { id: 'p63-u9t1-9', pattern: '_ o _ i l _ a', answers: ['gorilla'], meaningVi: 'khỉ đột', hint: 'g-o-r-i-l-l-a → thiếu g, r, l' },
  { id: 'p63-u9t1-10', pattern: 'B _ a _ t i f _ l l _', answers: ['beautifully'], meaningVi: 'một cách đẹp đẽ', hint: 'beautiful + ly → thiếu e, u, u, y' },
];

export const U9_TASK2_MATCH: PairMatchItem[] = [
  { id: 'p63-u9t2-1', left: '1. Where did you go yesterday?', leftVi: 'Hôm qua bạn đi đâu?', rightKey: 'j', rightLabel: 'j. I went to the zoo.' },
  { id: 'p63-u9t2-2', left: '2. What did the lions do when you were there?', leftVi: 'Những con sư tử làm gì khi bạn ở đó?', rightKey: 'd', rightLabel: 'd. They roared loudly.' },
  { id: 'p63-u9t2-3', left: '3. When did you go to the zoo?', leftVi: 'Bạn đi sở thú lúc nào?', rightKey: 'f', rightLabel: 'f. I went there at 8 a.m.' },
  { id: 'p63-u9t2-4', left: '4. Who did you go with?', leftVi: 'Bạn đi cùng với ai?', rightKey: 'i', rightLabel: 'i. I went there with my classmates.' },
  { id: 'p63-u9t2-5', left: '5. Did you see any monkeys?', leftVi: 'Bạn có thấy con khỉ nào không?', rightKey: 'a', rightLabel: 'a. Yes, I did. They were really noisy.' },
  { id: 'p63-u9t2-6', left: '6. What are the elephants like?', leftVi: 'Những chú voi trông như thế nào?', rightKey: 'c', rightLabel: 'c. They were big and moved slowly.' },
  { id: 'p63-u9t2-7', left: '7. What did you see at the zoo?', leftVi: 'Bạn đã thấy gì ở sở thú?', rightKey: 'b', rightLabel: 'b. I saw a baby elephant and some other animals.' },
  { id: 'p63-u9t2-8', left: '8. Did you go to the zoo last weekend?', leftVi: 'Cuối tuần trước bạn có đi sở thú không?', rightKey: 'h', rightLabel: "h. No, I didn't." },
  { id: 'p63-u9t2-9', left: '9. How did you get there?', leftVi: 'Bạn đến đó bằng phương tiện gì?', rightKey: 'g', rightLabel: 'g. By bus.' },
  { id: 'p63-u9t2-10', left: '10. Did you see any tigers?', leftVi: 'Bạn có thấy con hổ nào không?', rightKey: 'e', rightLabel: 'e. Yes, the tigers were very fast.' },
];

export const U9_TASK3_SHOWS = [
  {
    name: 'Early birds',
    desc: 'They swim, fly and run to have their breakfast.',
    descVi: 'Những chú chim bơi, bay và chạy để ăn bữa sáng.',
    time: '11:15',
    iconKey: 'peacock',
  },
  {
    name: 'Penguin beach live!',
    desc: 'They jump and swim in their new pool.',
    descVi: 'Chim cánh cụt nhảy và bơi trong bể nước mới.',
    time: '11:30',
    iconKey: 'penguin',
  },
  {
    name: 'Tigers live!',
    desc: '5 new Sumatran tigers.',
    descVi: '5 chú hổ Sumatra mới rất dũng mãnh.',
    time: '12:00',
    iconKey: 'tiger',
  },
];

export const U9_TASK3_READING = {
  passage:
    "Saturday's Shows at the Zoo: Early birds (11:15) – They swim, fly and run to have their breakfast. Penguin beach live! (11:30) – They jump and swim in their new pool. Tigers live! (12:00) – 5 new Sumatran tigers. Ticket prices: Children under 3 years: FREE. Children (3–15 years): £17. Adults: £25.",
  passageVi:
    'Lịch biểu diễn Thứ Bảy ở Sở thú: 11:15 Chim ăn sáng (Early birds); 11:30 Chim cánh cụt nhảy và bơi trong bể mới (Penguin beach live!); 12:00 Ngắm 5 chú hổ Sumatra mới (Tigers live!). Giá vé: Trẻ em dưới 3 tuổi miễn phí (FREE), trẻ từ 3–15 tuổi: £17, người lớn: £25.',
  example: '0. There are 4 shows on Saturday. → False (Chỉ có 3 chương trình biểu diễn).',
  statements: [
    { id: 'p64-u9t3-1', text: '1. Early birds show is at 11:15.', isTrue: true, explanation: 'Đúng (True): Bảng lịch ghi rõ Early birds diễn ra lúc 11:15.' },
    { id: 'p64-u9t3-2', text: '2. Children under 15 are ticket free for all shows.', isTrue: false, explanation: 'Sai (False): Chỉ trẻ dưới 3 tuổi mới miễn phí (FREE); trẻ từ 3–15 tuổi phải mua vé £17.' },
    { id: 'p64-u9t3-3', text: '3. Tiger show is before Penguin show.', isTrue: false, explanation: 'Sai (False): Penguin show lúc 11:30 diễn ra TRƯỚC Tiger show (12:00).' },
    { id: 'p64-u9t3-4', text: '4. Adults must pay for all the shows.', isTrue: true, explanation: 'Đúng (True): Người lớn (Adults) phải trả £25 cho vé xem các chương trình.' },
  ],
};

export const U9_TASK4_DIALOGUE: DialogueOrderItem[] = [
  { key: 'C', speaker: 'Ms Nga', text: "Good morning, children. I'm Nga from the city zoo. Welcome to our zoo.", textVi: 'Chào buổi sáng các em. Cô là Nga ở sở thú thành phố. Chào mừng các em đến thăm sở thú.', correctStep: 0 },
  { key: 'E', speaker: 'Students', text: 'Hi, Ms Nga. Nice to meet you.', textVi: 'Em chào cô Nga ạ. Rất vui được gặp cô.', correctStep: 1 },
  { key: 'D', speaker: 'Ms Nga', text: 'There are hundreds of wild animals here. Do you want to see the monkeys and tigers first?', textVi: 'Ở đây có hàng trăm loài động vật hoang dã. Các em có muốn xem khỉ và hổ trước không?', correctStep: 2 },
  { key: 'B', speaker: 'Students', text: 'Yes, we do.', textVi: 'Dạ có ạ!', correctStep: 3 },
  { key: 'A', speaker: 'Ms Nga', text: "Let's go to see the monkeys and tigers. Then we will see a peacock show. I hope you will enjoy our penguin show in the end.", textVi: 'Chúng ta đi xem khỉ và hổ nhé. Sau đó xem công múa và cuối cùng là màn biểu diễn chim cánh cụt.', correctStep: 4 },
];

export const U9_TASK5A_WORDBANK = ['bus', 'what', 'animals', 'zoo', 'how', 'where'];
export const U9_TASK5A_BLANKS: ParagraphBlank[] = [
  { id: 'p65-u9t5a-1', index: 1, answers: ['where'], hint: 'Hỏi địa điểm → Where' },
  { id: 'p65-u9t5a-2', index: 2, answers: ['zoo'], hint: 'Đi tới sở thú → zoo' },
  { id: 'p65-u9t5a-3', index: 3, answers: ['how'], hint: 'Hỏi phương tiện đi lại → How' },
  { id: 'p65-u9t5a-4', index: 4, answers: ['bus'], hint: 'Đi bằng xe buýt → by bus' },
  { id: 'p65-u9t5a-5', index: 5, answers: ['what'], hint: 'Hỏi đã nhìn thấy gì → What' },
  { id: 'p65-u9t5a-6', index: 6, answers: ['animals'], hint: 'Rất nhiều loài động vật → a lot of animals' },
];

export const U9_TASK5B_WORDBANK = ['like', 'go', 'big', 'slowly', 'zoo', 'animals'];
export const U9_TASK5B_BLANKS: ParagraphBlank[] = [
  { id: 'p65-u9t5b-1', index: 1, answers: ['go'], hint: 'Sau did + you dùng động từ nguyên mẫu → go' },
  { id: 'p65-u9t5b-2', index: 2, answers: ['zoo'], hint: 'I went to the ___ → zoo' },
  { id: 'p65-u9t5b-3', index: 3, answers: ['animals'], hint: 'I saw some ___ → animals' },
  { id: 'p65-u9t5b-4', index: 4, answers: ['like'], hint: 'Hỏi đặc điểm trông như thế nào: What was it ___? → like' },
  { id: 'p65-u9t5b-5', index: 5, answers: ['big'], hint: 'Voi con rất to lớn → big' },
  { id: 'p65-u9t5b-6', index: 6, answers: ['slowly'], hint: 'Di chuyển chậm rãi và êm ái → moved slowly' },
];

export const U9_TASK6_ZOO_BLANKS: ParagraphBlank[] = [
  { id: 'p65-u9t6-1', index: 1, answers: ['roared'], hint: 'Sư tử/hổ gầm to (quá khứ của roar) → roared', iconKey: 'tiger' },
  { id: 'p65-u9t6-2', index: 2, answers: ['sprayed'], hint: 'Voi con phun nước bằng vòi (quá khứ của spray) → sprayed', iconKey: 'elephant' },
  { id: 'p65-u9t6-3', index: 3, answers: ['monkeys'], hint: '3 chú khỉ (số nhiều) rất ồn ào trên cây → monkeys', iconKey: 'monkey' },
  { id: 'p65-u9t6-4', index: 4, answers: ['pythons'], hint: 'Những con trăn bò rất êm ái → pythons', iconKey: 'python' },
  { id: 'p65-u9t6-5', index: 5, answers: ['penguin'], hint: 'Chương trình biểu diễn chim cánh cụt → penguin', iconKey: 'penguin' },
];

export const U9_TASK7_LOOK_WRITE: FillItem[] = [
  { id: 'p66-u9t7-1', before: '1. A ', after: ' danced beautifully.', hint: 'Con công xòe đuôi múa tuyệt đẹp (p...)', iconKey: 'peacock', answers: ['peacock'], explanation: 'Hình con công đang xòe đuôi → peacock (số ít sau "A").' },
  { id: 'p66-u9t7-2', before: '2. A ', after: ' ate a bamboo tree.', hint: 'Gấu trúc đang ăn tre (p...)', iconKey: 'panda', answers: ['panda'], explanation: 'Hình chú gấu trúc trắng đen ăn tre → panda.' },
  { id: 'p66-u9t7-3', before: '3. Two ', after: ' roared loudly.', hint: 'Hai con hổ (nhớ thêm -s số nhiều!)', iconKey: 'tiger', answers: ['tigers'], explanation: 'Có số đếm "Two" (2) → dùng danh từ số nhiều "tigers".' },
  { id: 'p66-u9t7-4', before: '4. I took photos of some ', after: ' for my Science project.', hint: 'Vài chú khỉ đột (số nhiều thêm -s)', iconKey: 'gorilla', answers: ['gorillas'], explanation: 'Sau "some" dùng danh từ đếm được số nhiều → gorillas.' },
  { id: 'p66-u9t7-5', before: '5. I like ', after: ' because they are lovely.', hint: 'Loài chuột túi (số nhiều)', iconKey: 'kangaroo', answers: ['kangaroos'], explanation: 'Chú ý đại từ "they" (chúng) → danh từ số nhiều "kangaroos".' },
];

export const U9_TASK8_ORDERS_P66: OrderSentenceItem[] = [
  { id: 'p66-u9t8-1', words: ['you', 'did', 'see', 'where', 'kangaroos', 'the', '?'], answer: 'Where did you see the kangaroos?', meaning: 'Bạn đã nhìn thấy những chú chuột túi ở đâu?', explanation: 'Từ hỏi Where + did + chủ ngữ you + see + the kangaroos?' },
];

export const U9_TASK8_ORDERS_P67: OrderSentenceItem[] = [
  { id: 'p67-u9t8-2', words: ['did', 'the', 'what', 'do', 'monkeys', 'when', 'saw', 'you', 'them', '?'], answer: 'What did the monkeys do when you saw them?', meaning: 'Những chú khỉ đã làm gì khi bạn nhìn thấy chúng?', explanation: 'What did + the monkeys + do + when you saw them?' },
  { id: 'p67-u9t8-3', words: ['are', 'what', 'favourite', 'your', 'animals', 'zoo', '?'], answer: 'What are your favourite zoo animals?', meaning: 'Những loài động vật ở sở thú mà bạn yêu thích là gì?', explanation: 'What are + your favourite + zoo animals?' },
  { id: 'p67-u9t8-4', words: ['you', 'who', 'go', 'did', 'zoo', 'to', 'the', 'with', '?'], answer: 'Who did you go to the zoo with?', meaning: 'Bạn đã đi sở thú cùng với ai?', explanation: 'Who + did + you + go to the zoo + with?' },
  { id: 'p67-u9t8-5', words: ['gorillas', 'moved', 'the', 'quickly', 'Nam', 'when', 'was', 'zoo', 'the', 'at', '.'], answer: 'The gorillas moved quickly when Nam was at the zoo.', meaning: 'Những con khỉ đột di chuyển rất nhanh khi Nam ở sở thú.', explanation: 'The gorillas + moved quickly + when Nam was at the zoo.' },
  { id: 'p67-u9t8-6', words: ['Mai', 'the', 'liked', 'tigers', 'they', 'because', 'fast', 'were', '.'], answer: 'Mai liked the tigers because they were fast.', meaning: 'Mai thích những chú hổ vì chúng rất nhanh.', explanation: 'Mai liked the tigers + because + they were fast.' },
  { id: 'p67-u9t8-7', words: ['pandas', 'the', 'were', 'cute', 'really', 'and', 'things', 'did', 'slowly', '.'], answer: 'The pandas were really cute and did things slowly.', meaning: 'Những chú gấu trúc thật dễ thương và làm mọi thứ chậm rãi.', explanation: 'The pandas were really cute + and + did things slowly.' },
  { id: 'p67-u9t8-8', words: ['monkeys', 'the', 'jumped', 'and', 'up', 'down', 'quickly', 'very', '.'], answer: 'The monkeys jumped up and down very quickly.', meaning: 'Những chú khỉ nhảy lên nhảy xuống rất nhanh nhẹn.', explanation: 'Cụm cố định: jump up and down (nhảy lên nhảy xuống) + very quickly.' },
];

export const U9_TASK9_PAST_SENTENCES: PastSentenceTask[] = [
  {
    id: 'p67-u9t9-1',
    cue: 'I / go swimming / yesterday.',
    cueVi: 'Hôm qua mình đã đi bơi.',
    verbNote: 'go → went (bất quy tắc)',
    answers: ['I went swimming yesterday.', 'I went swimming yesterday'],
    explanation: 'Có "yesterday" → chia Quá khứ đơn: go → went → I went swimming yesterday.',
  },
  {
    id: 'p67-u9t9-2',
    cue: 'Nhung / wash / the dishes.',
    cueVi: 'Nhung đã rửa bát đĩa.',
    verbNote: 'wash → washed (thêm -ed)',
    answers: ['Nhung washed the dishes.', 'Nhung washed the dishes'],
    explanation: 'Động từ có quy tắc wash + ed = washed → Nhung washed the dishes.',
  },
  {
    id: 'p68-u9t9-3',
    cue: 'My mother / go shopping / with / friends.',
    cueVi: 'Mẹ mình đã đi mua sắm với bạn của mẹ.',
    verbNote: 'go → went · thêm her / my trước friends',
    answers: [
      'My mother went shopping with her friends.',
      'My mother went shopping with her friends',
      'My mother went shopping with friends.',
      'My mother went shopping with friends',
    ],
    explanation: 'Chia go → went và thêm tính từ sở hữu "her" cho tự nhiên: My mother went shopping with her friends.',
  },
  {
    id: 'p68-u9t9-4',
    cue: 'Lan / cook / chicken noodles.',
    cueVi: 'Lan đã nấu món phở/mì gà.',
    verbNote: 'cook → cooked (thêm -ed)',
    answers: ['Lan cooked chicken noodles.', 'Lan cooked chicken noodles'],
    explanation: 'Động từ cook thêm -ed thành cooked → Lan cooked chicken noodles.',
  },
  {
    id: 'p68-u9t9-5',
    cue: 'Nam / I / study / hard / last weekend.',
    cueVi: 'Nam và mình đã học tập chăm chỉ cuối tuần trước.',
    verbNote: 'Nam and I · study → studied (đổi y → ied)',
    answers: ['Nam and I studied hard last weekend.', 'Nam and I studied hard last weekend'],
    explanation: 'Nối 2 chủ ngữ bằng "and", đổi study (phụ âm + y) → studied → Nam and I studied hard last weekend.',
  },
];

export const U9_TASK10_WRITING: GuidedWritingPrompt[] = [
  { id: 'p68-u9t10-1', question: '1. When did he/she go to the zoo with you?', starter: 'We went', placeholder: 'to the zoo last Sunday', sample: 'to the zoo last Sunday.' },
  { id: 'p68-u9t10-2', question: '2. What animals did you see?', starter: 'We', placeholder: 'saw elephants, tigers, monkeys and pandas', sample: 'saw elephants, tigers, monkeys and cute pandas.' },
  { id: 'p68-u9t10-3', question: '3. What shows did you see?', starter: 'We', placeholder: 'saw a peacock show and a penguin show', sample: 'saw a peacock show and a penguin show.' },
  { id: 'p68-u9t10-4', question: '4. What did your friend like the best at the zoo? Why?', starter: 'My friend', placeholder: 'liked the pandas best because they were cute and ate slowly', sample: 'liked the pandas best because they were cute and ate slowly.' },
];

export const U9_TASK11_ANIMAL_SHOWCASE: ZooShowcaseAnimal[] = [
  { key: 'panda', nameEn: 'Panda', nameVi: 'Gấu trúc', adverbPhrase: 'ate bamboo slowly', sentence: 'My favourite zoo animal is the panda. It is cute and eats bamboo slowly.', sentenceVi: 'Con vật sở thú mình thích nhất là gấu trúc. Nó dễ thương và ăn tre chậm rãi.', funFact: 'Gấu trúc dành hơn 10 tiếng mỗi ngày chỉ để nhai tre!' },
  { key: 'elephant', nameEn: 'Elephant', nameVi: 'Con voi', adverbPhrase: 'sprayed water gently', sentence: 'I like elephants because they are big, friendly and move slowly.', sentenceVi: 'Mình thích voi vì chúng to lớn, thân thiện và đi lại khoan thai.', funFact: 'Vòi voi có thể hút nước để tắm mát cực kỳ khéo léo.' },
  { key: 'tiger', nameEn: 'Tiger', nameVi: 'Con hổ', adverbPhrase: 'roared loudly', sentence: 'I like tigers because they are very fast and roar loudly.', sentenceVi: 'Mình thích hổ vì chúng chạy rất nhanh và gầm rất vang.', funFact: 'Vằn trên bộ lông của mỗi chú hổ đều độc nhất như vân tay người.' },
  { key: 'monkey', nameEn: 'Monkey', nameVi: 'Con khỉ', adverbPhrase: 'jumped quickly', sentence: 'I like monkeys because they are funny and jump up and down quickly.', sentenceVi: 'Mình thích khỉ vì chúng vui nhộn và nhảy lên nhảy xuống cực nhanh.', funFact: 'Khỉ dùng đuôi để giữ thăng bằng khi leo trèo trên cây cao.' },
  { key: 'peacock', nameEn: 'Peacock', nameVi: 'Con công', adverbPhrase: 'danced beautifully', sentence: 'I like peacocks because they are colourful and dance beautifully.', sentenceVi: 'Mình thích công vì chúng rực rỡ sắc màu và múa tuyệt đẹp.', funFact: 'Đuôi công đực khi xòe ra trông giống như chiếc quạt khổng lồ.' },
  { key: 'gorilla', nameEn: 'Gorilla', nameVi: 'Khỉ đột', adverbPhrase: 'moved quickly', sentence: 'I saw some big gorillas. They are strong and smart.', sentenceVi: 'Mình thấy vài chú khỉ đột to lớn. Chúng vừa khỏe vừa thông minh.', funFact: 'Khỉ đột sống theo gia đình rất đoàn kết và chăm con chu đáo.' },
  { key: 'kangaroo', nameEn: 'Kangaroo', nameVi: 'Chuột túi', adverbPhrase: 'jumped high', sentence: 'I love kangaroos because they are lovely and jump very high.', sentenceVi: 'Mình thích chuột túi vì chúng đáng yêu và nhảy rất cao.', funFact: 'Chuột túi mẹ có chiếc túi ấm áp trước bụng để địu con nhỏ.' },
  { key: 'penguin', nameEn: 'Penguin', nameVi: 'Chim cánh cụt', adverbPhrase: 'swam happily', sentence: 'I enjoyed the penguin show. The penguins swam happily in the pool.', sentenceVi: 'Mình rất thích màn diễn chim cánh cụt. Chúng bơi vui vẻ trong bể.', funFact: 'Chim cánh cụt không bay được nhưng lại là “vận động viên” bơi cừ khôi.' },
];

// =========================================================
// UNIT 10 FULL (PAGES 69–78: WHEN WILL SPORTS DAY BE?)
// =========================================================

export const U10_VOCAB_PAGE69: PageVocabWord[] = [
  { word: 'festival', ipa: '/ˈfestɪvl/', pos: 'n', meaning: 'lễ hội, liên hoan', example: 'We have a music festival every autumn.', exampleVi: 'Trường mình có liên hoan âm nhạc mỗi mùa thu.', group: 'Ngày lễ & Sự kiện', tip: 'music festival (liên hoan âm nhạc), sports festival (hội thao).' },
  { word: 'Sports Day', ipa: '/spɔːts deɪ/', pos: 'n', meaning: 'Ngày hội Thể thao', example: 'When will Sports Day be? – On Saturday.', exampleVi: 'Khi nào sẽ đến Ngày hội Thể thao? – Vào Thứ Bảy.', group: 'Ngày lễ & Sự kiện', tip: 'Luôn viết hoa chữ S và D; Sports có chữ -s.' },
  { word: "Teachers' Day", ipa: '/ˈtiːtʃəz deɪ/', pos: 'n', meaning: 'Ngày Nhà giáo (20/11)', example: "We give flowers to teachers on Teachers' Day.", exampleVi: 'Chúng em tặng hoa cho thầy cô vào Ngày Nhà giáo.', group: 'Ngày lễ & Sự kiện', tip: "Dấu nháy ' nằm SAU chữ s vì dành cho nhiều thầy cô!" },
  { word: 'Independence Day', ipa: '/ˌɪndɪˈpendəns deɪ/', pos: 'n', meaning: 'Ngày Độc lập / Quốc khánh (2/9)', example: 'Independence Day is on September 2nd.', exampleVi: 'Ngày Quốc khánh là ngày 2 tháng 9.', group: 'Ngày lễ & Sự kiện', tip: 'in-de-pen-dence (4 âm tiết, nhấn âm 3).' },
  { word: "Children's Day", ipa: '/ˈtʃɪldrənz deɪ/', pos: 'n', meaning: 'Ngày Quốc tế Thiếu nhi (1/6)', example: "Children's Day is a special day in June.", exampleVi: 'Ngày Thiếu nhi là một ngày đặc biệt trong tháng Sáu.', group: 'Ngày lễ & Sự kiện', tip: "Children đã là số nhiều nên viết Children's Day." },
  { word: 'contest', ipa: '/ˈkɒntest/', pos: 'n', meaning: 'cuộc thi', example: 'When will the singing contest be?', exampleVi: 'Khi nào cuộc thi hát sẽ diễn ra?', group: 'Thi đấu & Sân bãi', tip: 'singing contest (cuộc thi hát), English contest (thi Tiếng Anh).' },
  { word: 'music festival', ipa: '/ˈmjuːzɪk ˈfestɪvl/', pos: 'n', meaning: 'liên hoan âm nhạc', example: 'Tim is going to play the violin in the music festival.', exampleVi: 'Tim sẽ chơi vĩ cầm trong liên hoan âm nhạc.', group: 'Ngày lễ & Sự kiện' },
  { word: 'gym', ipa: '/dʒɪm/', pos: 'n', meaning: 'phòng tập thể dục', example: 'We practise basketball in the school gym.', exampleVi: 'Chúng mình tập bóng rổ trong phòng thể chất của trường.', group: 'Thi đấu & Sân bãi', tip: 'Viết tắt của gymnasium — ngắn gọn chỉ 3 chữ cái!' },
  { word: 'sports ground', ipa: '/spɔːts ɡraʊnd/', pos: 'n', meaning: 'sân chơi thể thao', example: 'Sports Day will be in the sports ground.', exampleVi: 'Ngày hội Thể thao sẽ tổ chức ở sân thể thao.', group: 'Thi đấu & Sân bãi' },
  { word: 'play against', ipa: '/pleɪ əˈɡenst/', pos: 'phr', meaning: 'thi đấu với (đội nào đó)', example: 'Class 5A will play against Class 5B.', exampleVi: 'Lớp 5A sẽ thi đấu với lớp 5B.', group: 'Thi đấu & Sân bãi', tip: 'against = đối đầu với ai.' },
  { word: 'badminton', ipa: '/ˈbædmɪntən/', pos: 'n', meaning: 'môn cầu lông', example: 'Hoa and Mai are going to play badminton.', exampleVi: 'Hoa và Mai sẽ đánh cầu lông.', group: 'Môn thể thao', tip: 'Không dùng "the" trước tên môn thể thao: play badminton.' },
];

export const U10_VOCAB_PAGE70: PageVocabWord[] = [
  { word: 'football', ipa: '/ˈfʊtbɔːl/', pos: 'n', meaning: 'môn bóng đá', example: 'Nam and Hung are going to play in a football match.', exampleVi: 'Nam và Hùng sẽ chơi trong một trận bóng đá.', group: 'Môn thể thao', tip: 'foot (bàn chân) + ball (quả bóng) = bóng đá.' },
  { word: 'volleyball', ipa: '/ˈvɒlibɔːl/', pos: 'n', meaning: 'môn bóng chuyền', example: 'The girls love playing volleyball.', exampleVi: 'Các bạn nữ thích chơi bóng chuyền.', group: 'Môn thể thao' },
  { word: 'basketball', ipa: '/ˈbɑːskɪtbɔːl/', pos: 'n', meaning: 'môn bóng rổ', example: 'They are going to play basketball.', exampleVi: 'Họ dự định chơi bóng rổ.', group: 'Môn thể thao', tip: 'basket (cái rổ) + ball (bóng) = bóng rổ.' },
  { word: 'table tennis', ipa: '/ˈteɪbl ˈtenɪs/', pos: 'n', meaning: 'môn bóng bàn', example: 'She is going to play table tennis in the event.', exampleVi: 'Bạn ấy dự định thi đấu bóng bàn trong sự kiện.', group: 'Môn thể thao', tip: 'table (cái bàn) + tennis (quần vợt) = bóng bàn.' },
  { word: 'practise', ipa: '/ˈpræktɪs/', pos: 'v', meaning: 'thực hành, luyện tập', example: 'We are practising hard for Sports Day.', exampleVi: 'Chúng mình đang luyện tập chăm chỉ cho Ngày hội Thể thao.', group: 'Hoạt động thi đấu', tip: 'Khi thêm -ing bỏ chữ e: practise → practising.' },
  { word: 'competition', ipa: '/ˌkɒmpəˈtɪʃn/', pos: 'n', meaning: 'kỳ thi, cuộc thi đấu', example: 'We hope we will win the competition.', exampleVi: 'Chúng mình hy vọng sẽ thắng cuộc thi.', group: 'Hoạt động thi đấu', tip: 'Đồng nghĩa gần với contest.' },
  { word: 'match', ipa: '/mætʃ/', pos: 'n', meaning: 'trận đấu', example: 'It was an exciting football match.', exampleVi: 'Đó là một trận bóng đá thật kịch tính.', group: 'Hoạt động thi đấu', tip: 'a football match (1 trận bóng đá).' },
  { word: 'take part in', ipa: '/teɪk pɑːt ɪn/', pos: 'phr', meaning: 'tham gia vào', example: 'Are you going to take part in Sports Day?', exampleVi: 'Bạn có định tham gia Ngày hội Thể thao không?', group: 'Hoạt động thi đấu', tip: 'Đồng nghĩa với join / participate in (rất hay gặp trong đề thi!).' },
  { word: 'everyone', ipa: '/ˈevriwʌn/', pos: 'pron', meaning: 'mọi người', example: 'Everyone is excited about the festival.', exampleVi: 'Mọi người đều hào hứng với lễ hội.', group: 'Hoạt động thi đấu', tip: 'Everyone luôn chia động từ số ít (Everyone is...).' },
  { word: 'next', ipa: '/nekst/', pos: 'adj', meaning: 'kế tiếp, tới', example: 'The music festival will be next month.', exampleVi: 'Liên hoan âm nhạc sẽ diễn ra vào tháng tới.', group: 'Hoạt động thi đấu', tip: 'next week / next month / next weekend → dấu hiệu tương lai.' },
  { word: 'win', ipa: '/wɪn/', pos: 'v', meaning: 'chiến thắng', example: 'We hope our team will win the match!', exampleVi: 'Chúng mình hy vọng đội mình sẽ thắng trận đấu!', group: 'Hoạt động thi đấu', tip: 'Quá khứ của win là won.' },
];

export const U10_TASK1_ODD: QuizChoiceItem[] = [
  { id: 'p72-u10t1-1', prompt: '1. Chọn từ khác loại:', options: ['a. years', 'b. subjects', 'c. week', 'd. months'], correctIndex: 1, explanation: 'subjects (các môn học) khác loại; 3 từ kia đều chỉ đơn vị thời gian (năm, tuần, tháng).' },
  { id: 'p72-u10t1-2', prompt: '2. Chọn từ khác loại:', options: ['a. toothache', 'b. mouth', 'c. hand', 'd. stomach'], correctIndex: 0, explanation: 'toothache (đau răng) là căn bệnh; 3 từ còn lại là bộ phận cơ thể (miệng, tay, bụng).' },
  { id: 'p72-u10t1-3', prompt: '3. Chọn từ khác loại:', options: ['a. travelled', 'b. visited', 'c. drove', 'd. speak'], correctIndex: 3, explanation: 'speak ở dạng nguyên mẫu (hiện tại); 3 động từ kia đều đã chia ở thì Quá khứ đơn.' },
  { id: 'p72-u10t1-4', prompt: '4. Chọn từ khác loại:', options: ['a. doing', 'b. going', 'c. swimming', 'd. spring'], correctIndex: 3, explanation: 'spring (mùa xuân) là danh từ; 3 từ kia là động từ thêm đuôi -ing.' },
  { id: 'p72-u10t1-5', prompt: '5. Chọn từ khác loại:', options: ['a. Chinese', 'b. Japan', 'c. American', 'd. Cambodian'], correctIndex: 1, explanation: 'Japan (nước Nhật Bản) là tên quốc gia; 3 từ kia là quốc tịch/ngôn ngữ.' },
  { id: 'p72-u10t1-6', prompt: '6. Chọn từ khác loại:', options: ['a. Monday', 'b. Sunday', 'c. Friday', 'd. today'], correctIndex: 3, explanation: 'today (hôm nay) không phải tên một thứ cụ thể trong tuần như Monday, Sunday, Friday.' },
];

export const U10_TASK2_MISTAKES: QuizChoiceItem[] = [
  { id: 'p72-u10t2-1', prompt: '1. When will Sports Day be on your school?', options: ['A. When', 'B. will', 'C. be', 'D. on'], correctIndex: 3, explanation: 'Sai ở "on" → sửa thành "at" hoặc "in" (at your school = tại trường của bạn).' },
  { id: 'p73-u10t2-2', prompt: '2. I am going to playing football with my classmates on this day.', options: ['A. am', 'B. playing', 'C. with', 'D. on'], correctIndex: 1, explanation: 'Sau "be going to" phải dùng động từ nguyên mẫu → sửa "playing" thành "play".' },
  { id: 'p73-u10t2-3', prompt: '3. Where do Peter and Linda? – They are in the garden.', options: ['A. Where', 'B. Peter and Linda', 'C. do', 'D. in'], correctIndex: 2, explanation: 'Không có động từ thường trong câu hỏi vị trí → sửa "do" thành "are" (Where are Peter and Linda?).' },
  { id: 'p73-u10t2-4', prompt: '4. What you like to take part in the Sports Day at school?', options: ['A. What', 'B. like to', 'C. take part in', 'D. at'], correctIndex: 0, explanation: 'Mẫu câu mời lịch sự là "Would you like to...?" → sửa "What" thành "Would".' },
  { id: 'p73-u10t2-5', prompt: '5. Do you like play computer games?', options: ['A. Do', 'B. play', 'C. computer', 'D. games'], correctIndex: 1, explanation: 'Sau "like" dùng V-ing (hoặc to V) → sửa "play" thành "playing".' },
  { id: 'p73-u10t2-6', prompt: '6. Why do you want play sport?', options: ['A. Why', 'B. do', 'C. play', 'D. sport'], correctIndex: 2, explanation: 'Cấu trúc "want + to + V" (muốn làm gì) → sửa "play" thành "to play".' },
];

export const U10_TASK3_EVENTS_MATCH: PairMatchItem[] = [
  { id: 'p73-u10t3-0', left: '0 (Mẫu). There are no classes at school and children compete in sports events.', leftVi: 'Không có tiết học ở trường và học sinh thi đấu các môn thể thao.', rightKey: 'a-sportsday', rightLabel: 'Sports Day', iconKey: 'sportsday', isExample: true },
  { id: 'p73-u10t3-1', left: '1. A special day at school when children give their teachers flowers to honour them.', leftVi: 'Ngày đặc biệt học sinh tặng hoa tri ân thầy cô giáo.', rightKey: 'b-teachersday', rightLabel: "Teachers' Day", iconKey: 'teachersday' },
  { id: 'p73-u10t3-2', left: '2. A special day at school when children compete in some music events.', leftVi: 'Ngày hội học sinh tranh tài trong các tiết mục âm nhạc.', rightKey: 'c-musicfest', rightLabel: 'Music Festival', iconKey: 'musicfest' },
  { id: 'p73-u10t3-3', left: '3. A special day for children in June.', leftVi: 'Một ngày đặc biệt dành riêng cho thiếu nhi vào tháng Sáu (1/6).', rightKey: 'd-childrensday', rightLabel: "Children's Day", iconKey: 'childrensday' },
  { id: 'p73-u10t3-4', left: '4. A national day in September to celebrate the independence of the country.', leftVi: 'Ngày lễ quốc gia trong tháng Chín (2/9) kỷ niệm ngày Độc lập.', rightKey: 'e-independence', rightLabel: 'Independence Day', iconKey: 'independenceday' },
];

export const U10_TASK4_READING = {
  passage:
    "There are some events in Tim's school every year. He is going to take part in the school music festival next month. Tim and his classmates are practising hard for this event. He's going to play the violin. Lisa and Linda are going to play the pianos. Bill is going to play the drums. Some girls and boys are going to sing English songs. The school music festival is really an interesting event.",
  passageVi:
    'Mỗi năm trường của Tim có một số sự kiện. Tháng tới cậu sẽ tham gia liên hoan âm nhạc của trường. Tim và các bạn cùng lớp đang luyện tập chăm chỉ. Tim sẽ chơi đàn vĩ cầm. Lisa và Linda sẽ chơi đàn piano. Bill sẽ đánh trống. Một vài bạn nam và nữ sẽ hát các bài hát Tiếng Anh. Liên hoan âm nhạc của trường thật sự là một sự kiện thú vị.',
  example: '0. Tim is going to join a school music event. → True (Đúng).',
  statements: [
    { id: 'p74-u10t4-1', text: '1. The music festival will be next month.', isTrue: true, explanation: 'Đúng (True): Câu 2 nêu rõ “the school music festival next month”.' },
    { id: 'p74-u10t4-2', text: '2. Tim is going to play the violin in the event.', isTrue: true, explanation: 'Đúng (True): “He’s going to play the violin.”' },
    { id: 'p74-u10t4-3', text: '3. Two girls are going to play the drums.', isTrue: false, explanation: 'Sai (False): Bill mới là người đánh trống (play the drums); hai bạn nữ Lisa và Linda chơi đàn piano.' },
    { id: 'p74-u10t4-4', text: '4. Some of the girls and boys are going to dance.', isTrue: false, explanation: 'Sai (False): Các bạn nam và nữ sẽ hát bài hát Tiếng Anh (sing English songs), không phải nhảy múa.' },
  ],
};

export const U10_TASK5_MC_P74: QuizChoiceItem[] = [
  { id: 'p74-u10t5-1', prompt: '1. _____ will the Sports Day take place? – In the school sports ground.', options: ['a. When', 'b. Where', 'c. How', 'd. What'], correctIndex: 1, explanation: 'Câu trả lời chỉ địa điểm “In the school sports ground” → dùng từ hỏi “Where” (Ở đâu).' },
  { id: 'p74-u10t5-2', prompt: '2. We are going to _____ some English songs.', options: ['a. play', 'b. speak', 'c. do', 'd. sing'], correctIndex: 3, explanation: 'Hát các bài hát Tiếng Anh: sing English songs.' },
  { id: 'p74-u10t5-3', prompt: '3. When will Sports Day be? – _____', options: ["a. It's in Saturday.", "b. It'll be in Saturday.", "c. It'll be on Saturday.", "d. It's on Saturday."], correctIndex: 2, explanation: 'Câu hỏi dùng “will” → trả lời “It’ll be...” và trước Thứ luôn dùng giới từ “on”.' },
  { id: 'p74-u10t5-4', prompt: '4. _____ – They are going to play football.', options: ['a. What are they doing?', 'b. What do they do on Sports Day?', 'c. What are they going to do on Sports Day?', 'd. What will they do yesterday?'], correctIndex: 2, explanation: 'Câu trả lời dùng “are going to play” → câu hỏi tương ứng là “What are they going to do...?”' },
  { id: 'p74-u10t5-5', prompt: '5. The singing contest will be on _____.', options: ['a. September', 'b. Friday', 'c. next week', 'd. the afternoon'], correctIndex: 1, explanation: 'Giới từ “on” đi với thứ trong tuần → on Friday (tháng dùng in, next week không cần giới từ).' },
  { id: 'p74-u10t5-6', prompt: '6. Are the boys going to play basketball? – _____.', options: ['a. Yes, they do', 'b. No, they do', 'c. Yes, they will', 'd. Yes, they are'], correctIndex: 3, explanation: 'Câu hỏi bắt đầu bằng “Are the boys...” → trả lời ngắn “Yes, they are.”' },
  { id: 'p74-u10t5-7', prompt: '7. _____ you take part in the sports event? – Yes, I will.', options: ['a. Do', 'b. Are', 'c. Will', 'd. Did'], correctIndex: 2, explanation: 'Câu trả lời “Yes, I will” → câu hỏi bắt đầu bằng “Will”.' },
  { id: 'p74-u10t5-8', prompt: '8. Independence Day is on September _____.', options: ['a. 2', 'b. 2nd', 'c. 2th', 'd. 2st'], correctIndex: 1, explanation: 'Ngày mùng 2 viết số thứ tự là 2nd (second).' },
  { id: 'p74-u10t5-9', prompt: '9. _____ they going to play table tennis?', options: ['a. Are', 'b. Is', 'c. Do', 'd. Will'], correctIndex: 0, explanation: 'Cấu trúc “be going to” với chủ ngữ số nhiều “they” → dùng “Are”.' },
  { id: 'p74-u10t5-10', prompt: '10. _____ is on the twentieth of November.', options: ["a. Children's Day", 'b. Independence Day', 'c. Sports Day', "d. Teachers' Day"], correctIndex: 3, explanation: 'Ngày 20 tháng 11 là Ngày Nhà giáo Việt Nam → Teachers’ Day.' },
];

export const U10_TASK5_MC_P75: QuizChoiceItem[] = [
  { id: 'p75-u10t5-11', prompt: '11. What are Phong and Nam going to do? – _____.', options: ['a. He is going to play basketball', 'b. They are going to play basketball', 'c. They play basketball', 'd. They played basketball'], correctIndex: 1, explanation: 'Phong and Nam là 2 người → thay bằng đại từ “They” + “are going to play...”.' },
  { id: 'p75-u10t5-12', prompt: '12. “take part in” has the same meaning as _____.', options: ['a. look after', 'b. wait for', 'c. listen to', 'd. participate in'], correctIndex: 3, explanation: 'take part in = participate in = join (tham gia vào).' },
  { id: 'p75-u10t5-13', prompt: '13. _____ is on the second of September.', options: ['a. Independence Day', "b. Children's Day", 'c. Sports Day', "d. Teachers' Day"], correctIndex: 0, explanation: 'Ngày 2 tháng 9 là Ngày Quốc khánh → Independence Day.' },
  { id: 'p75-u10t5-14', prompt: '14. Will you take part in Sports Day? – _____.', options: ['a. Yes, I am', 'b. No, I do', "c. Yes, I don't", 'd. Sure'], correctIndex: 3, explanation: '“Sure!” (Chắc chắn rồi!) là cách đáp tự nhiên cho lời hỏi tham gia; các đáp án a/b/c đều sai trợ động từ.' },
  { id: 'p75-u10t5-15', prompt: '15. Do you play table tennis? – _____.', options: ['a. Yes, I am', 'b. No, I play tennis, not table tennis', 'c. Yes, I did', 'd. No, I will not'], correctIndex: 1, explanation: 'Câu hỏi thì hiện tại đơn “Do you play...?” → đáp án b vừa đúng ngữ pháp vừa tự nhiên.' },
  { id: 'p75-u10t5-16', prompt: '16. The children give flowers and _____ to teachers on Teachers’ Day.', options: ['a. badminton', 'b. presents', 'c. football', 'd. matches'], correctIndex: 1, explanation: 'Học sinh tặng hoa (flowers) và quà (presents) cho thầy cô vào Ngày Nhà giáo.' },
  { id: 'p75-u10t5-17', prompt: '17. _____ badminton together! – Good idea!', options: ['a. Play', 'b. Playing', 'c. Let', "d. Let's play"], correctIndex: 3, explanation: 'Câu rủ rê đề nghị: Let’s + V nguyên mẫu! → Let’s play badminton together!' },
  { id: 'p75-u10t5-18', prompt: '18. My _____ sport is volleyball.', options: ['a. favourite', 'b. like', 'c. love', 'd. enjoy'], correctIndex: 0, explanation: 'Trước danh từ “sport” cần tính từ → my favourite sport (môn thể thao yêu thích của tôi).' },
  { id: 'p75-u10t5-19', prompt: '19. Look! The pupils _____ hard for the competition now.', options: ['a. practise', 'b. are practising', 'c. practised', 'd. will practise'], correctIndex: 1, explanation: 'Có “Look!” và “now” → dùng thì Hiện tại tiếp diễn: are practising.' },
  { id: 'p75-u10t5-20', prompt: '20. _____ your favourite school event? – It’s Sports Day.', options: ['a. Who is', 'b. Where is', "c. What's", 'd. When is'], correctIndex: 2, explanation: 'Hỏi sự kiện yêu thích là gì → What’s your favourite school event?' },
];

export const U10_TASK6_SPORTS_BLANKS: ParagraphBlank[] = [
  { id: 'p75-u10t6-1', index: 1, answers: ['sports'], hint: 'Ngày hội Thể thao: ___ Day', iconKey: 'sportsday' },
  { id: 'p75-u10t6-2', index: 2, answers: ['swim'], hint: 'Thích bơi nên sẽ đi bơi: going to ___', iconKey: 'swim' },
  { id: 'p75-u10t6-3', index: 3, answers: ['football'], hint: 'Trận đấu bóng đá: a ___ match', iconKey: 'football' },
  { id: 'p75-u10t6-4', index: 4, answers: ['badminton'], hint: 'Môn cầu lông (hai chiếc vợt & quả cầu)', iconKey: 'badminton' },
  { id: 'p75-u10t6-5', index: 5, answers: ['win'], hint: 'Giành chiến thắng (hình chiếc cúp vàng) → win', iconKey: 'trophy' },
];

export const U10_TASK7_LOOK_WRITE: FillItem[] = [
  { id: 'p76-u10t7-1', before: '1. ', after: ' will be on Monday, the twentieth of November.', hint: "Ngày Nhà giáo 20/11 (T...)", iconKey: 'teachersday', answers: ["teachers' day", "teacher's day", 'teachers day'], explanation: 'Ngày 20 tháng 11 là Ngày Nhà giáo → Teachers’ Day.' },
  { id: 'p76-u10t7-2', before: '2. Mai is going to ', after: ' the violin in the school music festival.', hint: 'Chơi nhạc cụ (p...)', iconKey: 'violin', answers: ['play'], explanation: 'Cụm từ chơi đàn vĩ cầm: play the violin (sau going to là V nguyên mẫu).' },
  { id: 'p76-u10t7-3', before: "3. It's only two weeks until ", after: '.', hint: "Ngày Quốc tế Thiếu nhi 1/6 (C...)", iconKey: 'childrensday', answers: ["children's day", 'childrens day'], explanation: 'Hình các bạn nhỏ vui chơi ngày 1/6 → Children’s Day.' },
  { id: 'p76-u10t7-4', before: '4. Tomorrow is ', after: ', our national holiday.', hint: 'Ngày Quốc khánh 2/9 (I...)', iconKey: 'independenceday', answers: ['independence day'], explanation: 'Hình lá cờ đỏ sao vàng ngày 2/9 → Independence Day.' },
];

export const U10_TASK8_ORDERS_P76: OrderSentenceItem[] = [
  { id: 'p76-u10t8-1', words: ['will', 'when', "Children's Day", 'be', '?'], answer: "When will Children's Day be?", meaning: 'Khi nào sẽ đến Ngày Quốc tế Thiếu nhi?', explanation: "Công thức: When + will + sự kiện (Children's Day) + be?" },
];

export const U10_TASK8_ORDERS_P77: OrderSentenceItem[] = [
  { id: 'p77-u10t8-2', words: ['festival', 'there', 'a', 'will', 'music', 'be', 'weekend', 'next', '.'], answer: 'There will be a music festival next weekend.', meaning: 'Cuối tuần tới sẽ có một liên hoan âm nhạc.', explanation: 'There will be + a music festival + next weekend.' },
  { id: 'p77-u10t8-3', words: ['going', 'what', 'you', 'are', 'to', 'do', 'on', 'Sports Day', '?'], answer: 'What are you going to do on Sports Day?', meaning: 'Bạn dự định làm gì vào Ngày hội Thể thao?', explanation: 'What + are + you + going to do + on Sports Day?' },
  { id: 'p77-u10t8-4', words: ['going', 'she', 'is', 'to', 'table tennis', 'play', 'the', 'in', 'event', '.'], answer: 'She is going to play table tennis in the event.', meaning: 'Bạn ấy dự định chơi bóng bàn trong sự kiện.', explanation: 'She is going to + play table tennis + in the event.' },
  { id: 'p77-u10t8-5', words: ['give', 'we', 'flowers', 'cards', 'and', 'to', 'teachers', 'the', 'on', "Teachers' Day", '.'], answer: "We give flowers and cards to the teachers on Teachers' Day.", meaning: 'Chúng em tặng hoa và thiệp cho thầy cô vào Ngày Nhà giáo.', explanation: "We give flowers and cards to the teachers + on Teachers' Day." },
  { id: 'p77-u10t8-6', words: ['school', 'my', 'had', 'a', 'sports festival', 'Sunday', 'last', '.'], answer: 'My school had a sports festival last Sunday.', meaning: 'Trường mình đã có một hội thao vào Chủ nhật tuần trước.', explanation: 'My school + had + a sports festival + last Sunday.' },
  { id: 'p77-u10t8-7', words: ['stadium', 'there', 'is', 'a', 'our', 'near', 'school', '.'], answer: 'There is a stadium near our school.', meaning: 'Có một sân vận động gần trường chúng mình.', explanation: 'There is + a stadium + near our school.' },
  { id: 'p77-u10t8-8', words: ['today', 'our', 'is', "Teachers' Day", '.'], answer: "Today is our Teachers' Day.", meaning: 'Hôm nay là Ngày Nhà giáo của chúng em.', explanation: "Today + is + our Teachers' Day." },
  { id: 'p77-u10t8-9', words: ['Lan', 'and', 'Nga', 'singing', 'are', 'in', 'room', 'the', '.'], answer: 'Lan and Nga are singing in the room.', meaning: 'Lan và Nga đang hát trong phòng.', explanation: 'Hiện tại tiếp diễn: Lan and Nga + are singing + in the room.' },
  { id: 'p77-u10t8-10', words: ['be', 'when', 'will', 'singing', 'the', 'contest', '?'], answer: 'When will the singing contest be?', meaning: 'Khi nào cuộc thi hát sẽ diễn ra?', explanation: 'When + will + the singing contest + be?' },
];

export const U10_TASK9_TRANSLATE: QuizChoiceItem[] = [
  {
    id: 'p77-u10t9-1',
    prompt: '1. Dịch sang Tiếng Anh: “Ngày Quốc Tế Thiếu Nhi diễn ra vào ngày nào?”',
    options: [
      "a. When will Children's Day be?",
      "b. Where will Children's Day be?",
      "c. What will Children's Day be?",
      "d. How will Children's Day be?",
    ],
    correctIndex: 0,
    explanation: 'Hỏi thời điểm trong tương lai dùng “When will + sự kiện + be?”.',
  },
  {
    id: 'p77-u10t9-2',
    prompt: '2. Dịch sang Tiếng Anh: “Hằng sẽ tham gia hoạt động gì trong Ngày hội thể thao?”',
    options: [
      'a. What does Hang do on Sports Day?',
      'b. What did Hang do on Sports Day?',
      'c. Where is Hang going to go on Sports Day?',
      'd. What is Hang going to do on Sports Day?',
    ],
    correctIndex: 3,
    explanation: 'Hỏi dự định làm hoạt động gì cho chủ ngữ số ít “Hang” → What is Hang going to do on Sports Day?',
  },
  {
    id: 'p78-u10t9-3',
    prompt: '3. Dịch sang Tiếng Anh: “Bạn thích môn thể thao nào? – Tôi thích chơi cờ.”',
    options: [
      'a. What subject do you like? – I like chess.',
      'b. What sports do you like? – I like playing chess.',
      'c. What sport did you play? – I played chess.',
      'd. Do you like sports? – Yes, I play chess.',
    ],
    correctIndex: 1,
    explanation: '“Môn thể thao nào” = What sports · “Tôi thích chơi cờ” = I like playing chess.',
  },
];

export const U10_TASK10_WRITING: GuidedWritingPrompt[] = [
  { id: 'p78-u10t10-1', question: '1. What event will there be in your school?', starter: 'There will be', placeholder: 'Sports Day / a music festival in my school', sample: 'Sports Day in my school.' },
  { id: 'p78-u10t10-2', question: '2. When will it be?', starter: 'It will be', placeholder: 'next Friday / on Saturday morning', sample: 'next Friday in the school sports ground.' },
  { id: 'p78-u10t10-3', question: '3. What are you going to do on that day?', starter: 'I am going to', placeholder: 'play badminton with my best friend', sample: 'play badminton with my best friend.' },
  { id: 'p78-u10t10-4', question: '4. What are your classmates going to do?', starter: 'My classmates are going to', placeholder: 'play football and cheer for our team', sample: 'play football and cheer for our class team.' },
];

// =========================================================
// UNIT 11 (PAGES 78–83: WHAT'S THE MATTER WITH YOU?)
// =========================================================

export const U11_VOCAB_PAGE78: PageVocabWord[] = [
  { word: 'breakfast', ipa: '/ˈbrekfəst/', pos: 'n', meaning: 'bữa sáng', example: 'You should have breakfast every morning.', exampleVi: 'Bạn nên ăn sáng mỗi buổi sáng.', group: 'Sinh hoạt & Mở đầu', tip: 'break (phá vỡ) + fast (cơn đói qua đêm) = bữa sáng.' },
  { word: 'ready', ipa: '/ˈredi/', pos: 'adj', meaning: 'sẵn sàng', example: 'Are you ready for school?', exampleVi: 'Bạn đã sẵn sàng đi học chưa?', group: 'Sinh hoạt & Mở đầu' },
  { word: 'matter', ipa: '/ˈmætə(r)/', pos: 'n', meaning: 'vấn đề', example: "What's the matter with you?", exampleVi: 'Bạn bị làm sao thế / Có vấn đề gì vậy?', group: 'Triệu chứng bệnh', tip: 'Mẫu câu ruột của Unit 11: What’s the matter with...?' },
  { word: 'fever', ipa: '/ˈfiːvə(r)/', pos: 'n', meaning: 'cơn sốt', example: 'Mai has a high fever today.', exampleVi: 'Hôm nay Mai bị sốt cao.', group: 'Triệu chứng bệnh', tip: 'have a fever (bị sốt) = have a high temperature.' },
  { word: 'temperature', ipa: '/ˈtemprətʃə(r)/', pos: 'n', meaning: 'nhiệt độ (cơ thể)', example: 'He has a high temperature.', exampleVi: 'Bạn ấy bị sốt cao (nhiệt độ cao).', group: 'Triệu chứng bệnh', tip: 'Đọc nhanh 3 âm tiết: /ˈtem-prə-tʃə/.' },
  { word: 'headache', ipa: '/ˈhedeɪk/', pos: 'n', meaning: 'đau đầu', example: 'I have a bad headache.', exampleVi: 'Mình bị đau đầu dữ dội.', group: 'Triệu chứng bệnh', tip: 'head (đầu) + ache (đau) = đau đầu.' },
];

export const U11_VOCAB_PAGE79: PageVocabWord[] = [
  { word: 'toothache', ipa: '/ˈtuːθeɪk/', pos: 'n', meaning: 'đau răng', example: 'She has a toothache so she sees the dentist.', exampleVi: 'Bạn ấy bị đau răng nên đi khám nha sĩ.', group: 'Bệnh có đuôi -ache', tip: 'tooth (răng) + ache (đau) = đau răng.' },
  { word: 'earache', ipa: '/ˈɪəreɪk/', pos: 'n', meaning: 'đau tai', example: 'Tony has an earache.', exampleVi: 'Tony bị đau tai.', group: 'Bệnh có đuôi -ache', tip: 'Nhớ dùng "an earache" vì bắt đầu bằng nguyên âm e!' },
  { word: 'stomach ache', ipa: '/ˈstʌmək eɪk/', pos: 'n', meaning: 'đau bụng', example: 'Nam has a stomach ache.', exampleVi: 'Nam bị đau bụng.', group: 'Bệnh có đuôi -ache', tip: 'Chữ ch trong stomach đọc là /k/ chứ không phải /tʃ/!' },
  { word: 'backache', ipa: '/ˈbækeɪk/', pos: 'n', meaning: 'đau lưng', example: 'My grandpa has a backache.', exampleVi: 'Ông mình bị đau lưng.', group: 'Bệnh có đuôi -ache', tip: 'back (lưng) + ache (đau) = đau lưng.' },
  { word: 'sore throat', ipa: '/sɔː θrəʊt/', pos: 'n', meaning: 'đau họng', example: 'I have a sore throat. I should drink warm water.', exampleVi: 'Mình bị đau họng. Mình nên uống nước ấm.', group: 'Bệnh với “sore” & Cảm giác', tip: 'sore = đau rát · throat = cổ họng.' },
  { word: 'sore eyes', ipa: '/sɔː aɪz/', pos: 'n', meaning: 'đau mắt, đỏ mắt', example: 'Your eyes are red. You have sore eyes.', exampleVi: 'Mắt bạn bị đỏ rồi. Bạn bị đau mắt đấy.', group: 'Bệnh với “sore” & Cảm giác' },
  { word: 'hot', ipa: '/hɒt/', pos: 'adj', meaning: 'nóng', example: 'He feels very hot because he has a fever.', exampleVi: 'Bạn ấy thấy rất nóng vì bị sốt.', group: 'Bệnh với “sore” & Cảm giác' },
  { word: 'cold', ipa: '/kəʊld/', pos: 'adj/n', meaning: 'lạnh / cảm lạnh', example: 'Put on your coat or you may catch a cold.', exampleVi: 'Mặc áo khoác vào kẻo bị cảm lạnh đấy.', group: 'Bệnh với “sore” & Cảm giác' },
  { word: 'throat', ipa: '/θrəʊt/', pos: 'n', meaning: 'cổ họng', example: 'My throat hurts when I speak.', exampleVi: 'Cổ họng mình đau khi nói.', group: 'Bệnh với “sore” & Cảm giác' },
  { word: 'pain', ipa: '/peɪn/', pos: 'n', meaning: 'cơn đau', example: 'May had a terrible pain in her tooth.', exampleVi: 'Bé May bị một cơn đau răng khủng khiếp.', group: 'Bệnh với “sore” & Cảm giác', tip: 'a pain in your head = headache.' },
  { word: 'feel', ipa: '/fiːl/', pos: 'v', meaning: 'cảm thấy', example: 'I do not feel well today.', exampleVi: 'Hôm nay mình thấy không khỏe.', group: 'Bệnh với “sore” & Cảm giác' },
  { word: 'doctor', ipa: '/ˈdɒktə(r)/', pos: 'n', meaning: 'bác sĩ', example: 'You should go to the doctor.', exampleVi: 'Bạn nên đi khám bác sĩ.', group: 'Y tế & Chăm sóc' },
  { word: 'dentist', ipa: '/ˈdentɪst/', pos: 'n', meaning: 'nha sĩ', example: 'When you have a toothache, see the dentist.', exampleVi: 'Khi bị đau răng, hãy đi gặp nha sĩ.', group: 'Y tế & Chăm sóc', tip: 'Gắn liền với toothache!' },
  { word: 'rest', ipa: '/rest/', pos: 'n/v', meaning: 'nghỉ ngơi', example: 'You look tired. Take a rest!', exampleVi: 'Trông bạn mệt rồi. Nghỉ ngơi chút đi!', group: 'Y tế & Chăm sóc', tip: 'Cụm quen thuộc: take a rest (nghỉ ngơi).' },
  { word: 'fruit', ipa: '/fruːt/', pos: 'n', meaning: 'trái cây, hoa quả', example: 'You should eat a lot of fresh fruit.', exampleVi: 'Bạn nên ăn nhiều hoa quả tươi.', group: 'Y tế & Chăm sóc' },
  { word: 'heavy', ipa: '/ˈhevi/', pos: 'adj', meaning: 'nặng', example: "Don't carry heavy things!", exampleVi: 'Đừng mang vác đồ nặng nhé!', group: 'Thói quen tốt & xấu' },
  { word: 'carry', ipa: '/ˈkæri/', pos: 'v', meaning: 'mang, vác', example: "He shouldn't carry heavy boxes.", exampleVi: 'Ông ấy không nên bê những chiếc hộp nặng.', group: 'Thói quen tốt & xấu', tip: 'Cụm hay thi: carry heavy things (mang vác đồ nặng).' },
  { word: 'sweet', ipa: '/swiːt/', pos: 'n/adj', meaning: 'đồ ngọt, kẹo / ngọt', example: "You shouldn't eat too many sweets.", exampleVi: 'Bạn không nên ăn quá nhiều kẹo ngọt.', group: 'Thói quen tốt & xấu' },
  { word: 'karate', ipa: '/kəˈrɑːti/', pos: 'n', meaning: 'võ ka-ra-te', example: 'Phong practises karate to stay strong.', exampleVi: 'Phong tập võ karate để luôn khỏe mạnh.', group: 'Thói quen tốt & xấu' },
  { word: 'nail', ipa: '/neɪl/', pos: 'n', meaning: 'móng tay', example: 'Keep your nails short and clean.', exampleVi: 'Hãy giữ móng tay ngắn và sạch sẽ.', group: 'Thói quen tốt & xấu' },
  { word: 'brush', ipa: '/brʌʃ/', pos: 'v', meaning: 'chải, đánh (răng)', example: 'Brush your teeth after meals.', exampleVi: 'Hãy đánh răng sau các bữa ăn.', group: 'Thói quen tốt & xấu', tip: 'brush your teeth (đánh răng).' },
  { word: 'hand', ipa: '/hænd/', pos: 'n', meaning: 'bàn tay', example: 'Wash your hands before meals.', exampleVi: 'Hãy rửa tay trước khi ăn.', group: 'Thói quen tốt & xấu' },
  { word: 'healthy', ipa: '/ˈhelθi/', pos: 'adj', meaning: 'khỏe mạnh, lành mạnh', example: 'Doing morning exercise keeps you healthy.', exampleVi: 'Tập thể dục buổi sáng giúp bạn khỏe mạnh.', group: 'Y tế & Chăm sóc' },
  { word: 'regularly', ipa: '/ˈreɡjələli/', pos: 'adv', meaning: 'thường xuyên, đều đặn', example: 'You should do exercise regularly.', exampleVi: 'Bạn nên tập thể dục đều đặn.', group: 'Y tế & Chăm sóc' },
  { word: 'meal', ipa: '/miːl/', pos: 'n', meaning: 'bữa ăn', example: 'We have three meals a day.', exampleVi: 'Chúng ta có ba bữa ăn mỗi ngày.', group: 'Thói quen tốt & xấu', tip: 'before meals (trước bữa ăn) · after meals (sau bữa ăn).' },
];

export const U11_VOCAB_PAGE80: PageVocabWord[] = [
  { word: 'problem', ipa: '/ˈprɒbləm/', pos: 'n', meaning: 'vấn đề, trục trặc', example: 'Tell the doctor about your health problem.', exampleVi: 'Hãy kể với bác sĩ về vấn đề sức khỏe của bạn.', group: 'Y tế & Chăm sóc', tip: 'health problem = vấn đề sức khỏe.' },
  { word: 'advice', ipa: '/ədˈvaɪs/', pos: 'n', meaning: 'lời khuyên', example: 'The doctor gave me good advice.', exampleVi: 'Bác sĩ đã cho mình lời khuyên hữu ích.', group: 'Y tế & Chăm sóc', tip: 'Danh từ không đếm được (không thêm -s).' },
];

export const U11_CLINIC_PRESETS: ClinicSymptomPreset[] = [
  {
    id: 'toothache',
    iconKey: 'toothache',
    symptomEn: 'toothache',
    symptomVi: 'đau răng',
    article: 'a',
    shouldDo: 'go to the dentist and brush your teeth after meals',
    shouldDoVi: 'đi khám nha sĩ và đánh răng sau bữa ăn',
    shouldntDo: 'eat a lot of sweets',
    shouldntDoVi: 'ăn nhiều kẹo ngọt',
    response: "Yes, I will. Thanks. / OK, I won't. Thanks.",
  },
  {
    id: 'headache',
    iconKey: 'headache',
    symptomEn: 'headache',
    symptomVi: 'đau đầu',
    article: 'a',
    shouldDo: 'take a rest and go to bed early',
    shouldDoVi: 'nghỉ ngơi và đi ngủ sớm',
    shouldntDo: 'watch too much TV',
    shouldntDoVi: 'xem ti vi quá nhiều',
    response: 'Yes, I will. Thanks.',
  },
  {
    id: 'backache',
    iconKey: 'backache',
    symptomEn: 'backache',
    symptomVi: 'đau lưng',
    article: 'a',
    shouldDo: 'take a rest',
    shouldDoVi: 'nghỉ ngơi',
    shouldntDo: 'carry heavy things',
    shouldntDoVi: 'mang vác đồ nặng',
    response: "OK, I won't. Thanks.",
  },
  {
    id: 'sorethroat',
    iconKey: 'sorethroat',
    symptomEn: 'sore throat',
    symptomVi: 'đau họng',
    article: 'a',
    shouldDo: 'drink warm water and go to the doctor',
    shouldDoVi: 'uống nước ấm và đi khám bác sĩ',
    shouldntDo: 'eat ice cream or drink cold water',
    shouldntDoVi: 'ăn kem hoặc uống nước lạnh',
    response: 'Yes, I will. Thanks.',
  },
  {
    id: 'fever',
    iconKey: 'fever',
    symptomEn: 'fever',
    symptomVi: 'sốt cao',
    article: 'a',
    shouldDo: 'go to the doctor and stay in bed',
    shouldDoVi: 'đi khám bác sĩ và nằm nghỉ trên giường',
    shouldntDo: 'go out in the rain',
    shouldntDoVi: 'ra ngoài trời mưa',
    response: 'Yes, I will. Thanks.',
  },
  {
    id: 'stomachache',
    iconKey: 'stomachache',
    symptomEn: 'stomach ache',
    symptomVi: 'đau bụng',
    article: 'a',
    shouldDo: 'see the doctor and drink warm water',
    shouldDoVi: 'gặp bác sĩ và uống nước ấm',
    shouldntDo: 'eat too much fast food',
    shouldntDoVi: 'ăn quá nhiều đồ ăn nhanh',
    response: "OK, I won't. Thanks.",
  },
];

export const U11_TASK1_ODD: QuizChoiceItem[] = [
  { id: 'p81-u11t1-1', prompt: '1. Chọn từ khác loại:', options: ['a. cough', 'b. weak', 'c. headache', 'd. sore throat'], correctIndex: 1, explanation: 'weak (yếu ớt) là tính từ; 3 từ kia đều là danh từ chỉ triệu chứng bệnh (ho, đau đầu, đau họng).' },
  { id: 'p81-u11t1-2', prompt: '2. Chọn từ khác loại:', options: ['a. flu', 'b. stomachache', 'c. cold', 'd. fat'], correctIndex: 3, explanation: 'fat (béo) là tính từ miêu tả vóc dáng; 3 từ kia là tên bệnh (cúm, đau bụng, cảm lạnh).' },
  { id: 'p81-u11t1-3', prompt: '3. Chọn từ khác loại:', options: ['a. sleep', 'b. happy', 'c. live', 'd. smile'], correctIndex: 1, explanation: 'happy (vui vẻ) là tính từ; 3 từ kia là động từ (ngủ, sống, mỉm cười).' },
  { id: 'p82-u11t1-4', prompt: '4. Chọn từ khác loại:', options: ['a. fever', 'b. dentist', 'c. nurse', 'd. doctor'], correctIndex: 0, explanation: 'fever (cơn sốt) là triệu chứng bệnh; 3 từ kia đều là nghề nghiệp ngành y (nha sĩ, y tá, bác sĩ).' },
  { id: 'p82-u11t1-5', prompt: '5. Chọn từ khác loại:', options: ['a. eat fruits', 'b. heavy', 'c. take a rest', 'd. go to the dentist'], correctIndex: 1, explanation: 'heavy (nặng) là tính từ; 3 cụm kia là các hành động chăm sóc sức khỏe.' },
];

export const U11_TASK2_HEALTH_DEFS: FillItem[] = [
  { id: 'p82-u11t2-1', before: '1. Your eyes become red. → ', after: '', hint: 'Đau mắt đỏ (s... e...)', iconKey: 'soreeye', answers: ['sore eye', 'sore eyes'], explanation: 'Mắt trở nên đỏ → sore eye / sore eyes (đau mắt).' },
  { id: 'p82-u11t2-2', before: "2. It's a high temperature. → ", after: '', hint: 'Cơn sốt (f...)', iconKey: 'fever', answers: ['fever', 'a fever'], explanation: 'Nhiệt độ cơ thể cao (high temperature) chính là cơn sốt → fever.' },
  { id: 'p82-u11t2-3', before: '3. You go to see him/her when you have a bad tooth. → ', after: '', hint: 'Nha sĩ (d...)', iconKey: 'dentist', answers: ['dentist', 'a dentist'], explanation: 'Người khám khi đau răng sâu (bad tooth) → dentist (nha sĩ).' },
  { id: 'p82-u11t2-4', before: '4. You have a pain in your head. → ', after: '', hint: 'Đau đầu (h...)', iconKey: 'headache', answers: ['headache', 'a headache'], explanation: 'Cơn đau ở đầu (pain in your head) → headache.' },
  { id: 'p82-u11t2-5', before: "5. You have a toothache. You shouldn't eat them. → ", after: '', hint: 'Kẹo ngọt, đồ ngọt (s...)', iconKey: 'sweets', answers: ['sweets', 'sweet', 'candies'], explanation: 'Đau răng thì không nên ăn đồ ngọt/kẹo → sweets.' },
];

export const U11_TASK3_SHOULD_P82: ShouldChoiceItem[] = [
  { id: 'p82-u11t3-1', number: 1, before: 'You have a toothache. You', after: 'go to the dentist.', answer: 'should', explanation: 'Bị đau răng thì NÊN (should) đi khám nha sĩ.' },
  { id: 'p82-u11t3-2', number: 2, before: 'You have a bad toothache. You', after: 'eat too many candies.', answer: "shouldn't", explanation: 'Bị đau răng thì KHÔNG NÊN (shouldn’t) ăn quá nhiều kẹo.' },
  { id: 'p82-u11t3-3', number: 3, before: 'Your teeth are not good. You', after: 'eat a lot of sweets.', answer: "shouldn't", explanation: 'Răng không tốt thì KHÔNG NÊN ăn nhiều đồ ngọt.' },
  { id: 'p82-u11t3-4', number: 4, before: 'You', after: 'wash your hands before meals.', answer: 'should', explanation: 'NÊN rửa tay sạch sẽ trước các bữa ăn.' },
  { id: 'p82-u11t3-5', number: 5, before: 'My grandpa has a backache. He', after: 'carry heavy things.', answer: "shouldn't", explanation: 'Ông bị đau lưng nên KHÔNG NÊN mang vác đồ nặng.' },
  { id: 'p82-u11t3-6', number: 6, before: 'If you have a stomach ache, you', after: 'see a doctor.', answer: 'should', explanation: 'Nếu bị đau bụng, bạn NÊN đi khám bác sĩ.' },
  { id: 'p82-u11t3-7', number: 7, before: 'When you have a cold, you', after: 'wear warm clothes.', answer: 'should', explanation: 'Khi bị cảm lạnh, bạn NÊN mặc quần áo ấm.' },
  { id: 'p82-u11t3-8', number: 8, before: 'When you have a sore throat, you', after: 'eat ice cream.', answer: "shouldn't", explanation: 'Khi bị đau họng thì KHÔNG NÊN ăn kem lạnh.' },
  { id: 'p82-u11t3-9', number: 9, before: 'You', after: 'brush your teeth twice a day.', answer: 'should', explanation: 'Bạn NÊN đánh răng 2 lần mỗi ngày để bảo vệ răng.' },
  { id: 'p82-u11t3-10', number: 10, before: 'You', after: 'eat a lot of fresh fruit and vegetables.', answer: 'should', explanation: 'Bạn NÊN ăn nhiều rau củ quả tươi để khỏe mạnh.' },
  { id: 'p82-u11t3-11', number: 11, before: 'When you have a fever, you', after: 'go out and play in the rain.', answer: "shouldn't", explanation: 'Đang bị sốt thì KHÔNG NÊN ra ngoài chơi dưới mưa.' },
  { id: 'p82-u11t3-12', number: 12, before: 'You look very tired. You', after: 'take a rest.', answer: 'should', explanation: 'Trông bạn rất mệt rồi, bạn NÊN nghỉ ngơi.' },
  { id: 'p82-u11t3-13', number: 13, before: 'You', after: 'stay up late before a school day.', answer: "shouldn't", explanation: 'Bạn KHÔNG NÊN thức khuya trước ngày đi học.' },
];

export const U11_TASK3_SHOULD_P83: ShouldChoiceItem[] = [
  { id: 'p83-u11t3-14', number: 14, before: 'Drinking enough water is very good for health, so everyone', after: 'do it.', answer: 'should', explanation: 'Uống đủ nước rất tốt cho sức khỏe nên mọi người ĐỀU NÊN (should) làm.' },
  { id: 'p83-u11t3-15', number: 15, before: 'In the morning, you', after: 'do morning exercise to feel well, and you', secondBlankAfter: 'have breakfast.', answer: 'should', secondAnswer: 'should', explanation: 'Buổi sáng NÊN tập thể dục (should) VÀ NÊN ăn bữa sáng (should).' },
  { id: 'p83-u11t3-16', number: 16, before: 'You', after: "eat too much fast food because it's fatty.", answer: "shouldn't", explanation: 'Đồ ăn nhanh chứa nhiều dầu mỡ (fatty) → KHÔNG NÊN (shouldn’t) ăn quá nhiều.' },
  { id: 'p83-u11t3-17', number: 17, before: "When you don't feel well, you", after: 'go to the doctor now.', answer: 'should', explanation: 'Khi cảm thấy không khỏe, bạn NÊN (should) đi khám bác sĩ ngay.' },
  { id: 'p83-u11t3-18', number: 18, before: 'When you have a high temperature, you', after: 'take some aspirins.', answer: 'should', explanation: 'Khi sốt cao (high temperature), bạn NÊN uống thuốc hạ sốt theo hướng dẫn.' },
];

export const U11_TASK4_READING = {
  passage:
    'My sister May is four years old. She likes eating candy in the evening. She does not like brushing her teeth before going to bed. Yesterday she could not sleep because she had a terrible pain in her tooth. In the morning, Mum took her to the hospital to see the dentist. The dentist said that May should brush her teeth after meals. She should not eat sweet things in the evening.',
  passageVi:
    'Em gái mình tên May, 4 tuổi. Bé thích ăn kẹo vào buổi tối và không thích đánh răng trước khi đi ngủ. Hôm qua bé không ngủ được vì bị một cơn đau răng khủng khiếp. Sáng hôm sau, mẹ đưa bé đến bệnh viện gặp nha sĩ. Nha sĩ dặn bé May nên đánh răng sau các bữa ăn và không nên ăn đồ ngọt vào buổi tối.',
  example: '0. My sister is 4 years old. → True (Đúng).',
  statements: [
    { id: 'p83-u11t4-1', text: '1. She likes eating sweet things in the evening.', isTrue: true, explanation: 'Đúng (True): “She likes eating candy in the evening.” (candy = sweet things).' },
    { id: 'p83-u11t4-2', text: '2. She had a toothache yesterday.', isTrue: true, explanation: 'Đúng (True): “Yesterday she had a terrible pain in her tooth” = bị đau răng.' },
    { id: 'p83-u11t4-3', text: '3. She went to the hospital with her father.', isTrue: false, explanation: 'Sai (False): Mẹ (Mum) là người đưa May đến bệnh viện, không phải bố.' },
    { id: 'p83-u11t4-4', text: '4. The dentist said that she should brush her teeth every morning.', isTrue: false, explanation: 'Sai (False): Nha sĩ dặn đánh răng sau các bữa ăn (after meals), không phải chỉ mỗi buổi sáng.' },
    { id: 'p83-u11t4-5', text: "5. May shouldn't eat sweet things in the evening.", isTrue: true, explanation: 'Đúng (True): Câu cuối nêu rõ “She should not eat sweet things in the evening.”' },
  ],
};

export const U11_TASK5_LETTERS: LetterFillItem[] = [
  { id: 'p83-u11t5-1', pattern: 'd o _ t _ r', answers: ['doctor'], meaningVi: 'bác sĩ', hint: 'd-o-c-t-o-r → thiếu c và o' },
  { id: 'p83-u11t5-2', pattern: 'p _ _ n', answers: ['pain'], meaningVi: 'cơn đau', hint: 'p-a-i-n → thiếu a và i' },
  { id: 'p83-u11t5-3', pattern: 'm a _ _ _ r', answers: ['matter'], meaningVi: 'vấn đề', hint: 'm-a-t-t-e-r → thiếu t, t, e' },
  { id: 'p83-u11t5-4', pattern: 'd e _ r', answers: ['dear'], meaningVi: 'thân mến, trời ơi (Oh dear!)', hint: 'd-e-a-r → thiếu chữ a' },
  { id: 'p83-u11t5-5', pattern: 's h _ _ l d', answers: ['should'], meaningVi: 'nên', hint: 's-h-o-u-l-d → thiếu o và u' },
  { id: 'p83-u11t5-6', pattern: 'h _ _ v y', answers: ['heavy'], meaningVi: 'nặng', hint: 'h-e-a-v-y → thiếu e và a' },
  { id: 'p83-u11t5-7', pattern: 'c a _ r _', answers: ['carry'], meaningVi: 'mang, vác', hint: 'c-a-r-r-y → thiếu r và y' },
  { id: 'p83-u11t5-8', pattern: 'c _ l d', answers: ['cold'], meaningVi: 'lạnh / cảm lạnh', hint: 'c-o-l-d → thiếu chữ o' },
  { id: 'p83-u11t5-9', pattern: 'a d _ i _ e', answers: ['advice'], meaningVi: 'lời khuyên', hint: 'a-d-v-i-c-e → thiếu v và c' },
  { id: 'p83-u11t5-10', pattern: 'h _ s', answers: ['has'], meaningVi: 'có / bị (cho He/She)', hint: 'h-a-s → thiếu chữ a' },
  { id: 'p83-u11t5-11', pattern: 's t _ m _ c _', answers: ['stomach'], meaningVi: 'bụng, dạ dày', hint: 's-t-o-m-a-c-h → thiếu o, a, h' },
  { id: 'p83-u11t5-12', pattern: 's _ r _', answers: ['sore'], meaningVi: 'đau rát (sore throat)', hint: 's-o-r-e → thiếu o và e' },
  { id: 'p83-u11t5-13', pattern: 'b _ c _ a c h _', answers: ['backache'], meaningVi: 'đau lưng', hint: 'back + ache → thiếu a, k, e' },
  { id: 'p83-u11t5-14', pattern: 'l _ t _ r', answers: ['later', 'liter', 'letter'], meaningVi: 'sau đó / lít nước', hint: 'l-a-t-e-r (hoặc l-i-t-e-r)' },
  { id: 'p83-u11t5-15', pattern: 'a c c _ d _ n t', answers: ['accident'], meaningVi: 'tai nạn', hint: 'a-c-c-i-d-e-n-t → thiếu i và e' },
  { id: 'p83-u11t5-16', pattern: 'c o _ n _ r', answers: ['corner'], meaningVi: 'góc đường, góc phòng', hint: 'c-o-r-n-e-r → thiếu r và e' },
  { id: 'p83-u11t5-17', pattern: 'e _ r', answers: ['ear'], meaningVi: 'cái tai', hint: 'e-a-r → thiếu chữ a' },
  { id: 'p83-u11t5-18', pattern: 's t _ r t', answers: ['start'], meaningVi: 'bắt đầu', hint: 's-t-a-r-t → thiếu chữ a' },
  { id: 'p83-u11t5-19', pattern: 't _ _ t h', answers: ['tooth', 'teeth'], meaningVi: 'cái răng / hàm răng', hint: 't-o-o-t-h (hoặc t-e-e-t-h)' },
  { id: 'p83-u11t5-20', pattern: 't h _ o _ t', answers: ['throat'], meaningVi: 'cổ họng', hint: 't-h-r-o-a-t → thiếu r và a' },
  { id: 'p83-u11t5-21', pattern: 'f _ v _ r', answers: ['fever'], meaningVi: 'cơn sốt', hint: 'f-e-v-e-r → thiếu hai chữ e' },
  { id: 'p83-u11t5-22', pattern: 't a _ e', answers: ['take'], meaningVi: 'lấy, uống (take a rest)', hint: 't-a-k-e → thiếu chữ k' },
  { id: 'p83-u11t5-23', pattern: 'r _ s t', answers: ['rest'], meaningVi: 'nghỉ ngơi', hint: 'r-e-s-t → thiếu chữ e' },
  { id: 'p83-u11t5-24', pattern: 's _ f _', answers: ['safe'], meaningVi: 'an toàn', hint: 's-a-f-e → thiếu a và e' },
  { id: 'p83-u11t5-25', pattern: 'h _ _ r', answers: ['hear'], meaningVi: 'nghe thấy', hint: 'h-e-a-r → thiếu e và a' },
  { id: 'p83-u11t5-26', pattern: 'g _ t', answers: ['get'], meaningVi: 'nhận được, bị', hint: 'g-e-t → thiếu chữ e' },
  { id: 'p83-u11t5-27', pattern: 'n e _ e s _ a r _', answers: ['necessary'], meaningVi: 'cần thiết', hint: 'n-e-c-e-s-s-a-r-y → thiếu c, s, y' },
];
