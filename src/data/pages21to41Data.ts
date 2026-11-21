import type {
  DialogueOrderItem,
  FillItem,
  GuidedWritingPrompt,
  OrderSentenceItem,
  PageMeta,
  PageVocabWord,
  ParagraphBlank,
  QuizChoiceItem,
} from './pages1to20Data';

export interface PairMatchItem {
  id: string;
  left: string;
  leftVi?: string;
  rightKey: string;
  rightLabel: string;
  iconKey?: string;
  isExample?: boolean;
}

export interface ExtendedPageMeta extends Omit<PageMeta, 'unit'> {
  unit: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

export const PAGES_21_TO_41_INDEX: ExtendedPageMeta[] = [
  { page: 21, unit: 3, title: 'Unit 3 · Task 2 (Alex ở Hội An) & Task 3 (Hội thoại Phong – Mai)', subtitle: 'Điền từ theo khung, đọc hiểu Đúng/Sai và sắp xếp hội thoại kỳ nghỉ', sectionTag: 'Đọc · Giao tiếp' },
  { page: 22, unit: 3, title: 'Unit 3 · Task 4 (Vịnh Hạ Long), Task 5–7 (Từ loại, Phát âm, Trọng âm)', subtitle: 'Điền từ theo tranh, phân biệt âm và trọng âm có loa nghe chuẩn', sectionTag: 'Ngữ âm · Từ vựng' },
  { page: 23, unit: 3, title: 'Unit 3 · Task 8 (Trắc nghiệm) & Task 9 (Sắp xếp câu quá khứ)', subtitle: 'Ôn câu hỏi Where/How ở quá khứ đơn và ghép 4 câu hoàn chỉnh', sectionTag: 'Ngữ pháp · Viết câu' },
  { page: 24, unit: 4, title: 'Unit 3 (Task 10 Viết kỳ nghỉ) & Mở đầu Unit 4: Did you go to the party?', subtitle: 'Tự viết đoạn văn kể kỳ nghỉ vừa qua và làm quen chủ đề tiệc sinh nhật', sectionTag: 'Viết · Mở đầu Unit 4' },
  { page: 25, unit: 4, title: 'Unit 4 · Từ vựng bữa tiệc & lễ hội (25 từ cốt lõi)', subtitle: 'Toàn bộ từ vựng về sinh nhật, trò chơi, đồ ăn thức uống và truyện tranh', sectionTag: 'Từ vựng' },
  { page: 26, unit: 4, title: 'Unit 4 · Từ vựng (cuối) & Thì Quá khứ đơn + Câu hỏi Did you...?', subtitle: 'Sơ đồ dòng thời gian quá khứ và bộ ghép câu hỏi Yes/No với Did', sectionTag: 'Từ vựng · Ngữ pháp' },
  { page: 27, unit: 4, title: 'Unit 4 · Hỏi hoạt động bữa tiệc, sinh nhật, was/were & tặng quà', subtitle: '4 mẫu câu giao tiếp quá khứ đơn: What did you do / When was / Where were / gave', sectionTag: 'Ngữ pháp' },
  { page: 28, unit: 4, title: 'Unit 4 · Task 1 (Odd one out) & Task 2 (Nối định nghĩa với hình)', subtitle: 'Phân loại từ vựng quá khứ và ghép hình picnic, birthday party, cartoon, funfair', sectionTag: 'Bài tập · Ghép hình' },
  { page: 29, unit: 4, title: 'Unit 4 · Task 3 (Đọc hiểu Linda & John) & Task 4 (Sinh nhật Peter)', subtitle: 'Đọc hiểu Đúng/Sai và chia 12 động từ quá khứ đơn theo tranh gợi ý', sectionTag: 'Đọc · Chia động từ' },
  { page: 30, unit: 4, title: 'Unit 4 · Task 4 (Trả lời 10 câu hỏi) & Khung từ Task 5', subtitle: 'Trả lời trọn bộ 10 câu hỏi về bữa tiệc sinh nhật Peter với đáp án chi tiết', sectionTag: 'Đọc hiểu' },
  { page: 31, unit: 4, title: 'Unit 4 · Task 5 (Hội sách Book Fair) & Task 6 (Câu 1)', subtitle: 'Hoàn thành câu chuyện đi hội sách cùng Jack và nhìn hình điền từ', sectionTag: 'Đọc · Từ vựng' },
  { page: 32, unit: 4, title: 'Unit 4 · Task 6 (Nhìn hình điền từ) & Task 7 (Sắp xếp 4 câu hỏi)', subtitle: 'Điền CDs, juice, danced theo tranh và xếp 4 câu hỏi về bữa tiệc', sectionTag: 'Viết câu' },
  { page: 33, unit: 4, title: 'Unit 4 · Task 8 (Viết về tiệc sinh nhật bạn) & Mở đầu Unit 5', subtitle: 'Hoàn thành bài viết về bạn thân và khám phá chủ đề Tương lai đơn Unit 5', sectionTag: 'Tổng ôn Unit 4' },
  { page: 34, unit: 5, title: 'Unit 5 · Từ vựng kỳ nghỉ cuối tuần & bãi biển (23 từ đầy đủ)', subtitle: 'Khám phá hang động, tắm nắng, xây lâu đài cát, ăn hải sản và dã ngoại', sectionTag: 'Từ vựng' },
  { page: 35, unit: 5, title: 'Unit 5 · Thì Tương lai đơn (will / ’ll) & Task 1 (Câu 1–3)', subtitle: 'Sơ đồ 3 thì (Quá khứ – Hiện tại – Tương lai), bộ ghép câu will và Odd one out', sectionTag: 'Ngữ pháp · Bài tập' },
  { page: 36, unit: 5, title: 'Unit 5 · Task 1 (tiếp), Task 2 (Nối 8 câu), Task 3 & Task 4 (Nghệ An)', subtitle: 'Nối 8 cặp hỏi đáp tương lai, trắc nghiệm và đọc hiểu về quê Bác Hồ', sectionTag: 'Tổng hợp' },
  { page: 37, unit: 5, title: 'Unit 5 · Task 5 (Nhìn 5 tranh điền từ về kế hoạch cuối tuần)', subtitle: 'Luyện từ vựng cave, sea, beach, mountains, home qua hình minh họa', sectionTag: 'Trực quan' },
  { page: 38, unit: 5, title: 'Unit 5 · Task 6 (Trại hè), Task 7 (8 từ để hỏi) & Task 8 (Câu 1)', subtitle: 'Hoàn thành bài trại hè, làm chủ 7 từ để hỏi WH- và ghép câu tương lai', sectionTag: 'Đọc · Ngữ pháp' },
  { page: 39, unit: 5, title: 'Unit 5 · Task 8 (Câu 2–4) & Task 9 (Viết về kỳ nghỉ sắp tới)', subtitle: 'Sắp xếp câu hỏi tương lai và tự viết kế hoạch kỳ nghỉ bằng thì will', sectionTag: 'Tổng ôn Unit 5' },
  { page: 40, unit: 6, title: 'Unit 6 · Mở đầu & 15 từ vựng Môn học (Phần 1)', subtitle: 'How many lessons do you have today? — Toàn bộ tên môn học có phát âm chuẩn', sectionTag: 'Từ vựng Unit 6' },
  { page: 41, unit: 6, title: 'Unit 6 · Từ vựng (Phần 2) & Mẫu câu hỏi môn học yêu thích', subtitle: '8 từ thời khóa biểu + công thức What lessons do you like? & Do/Does ... like?', sectionTag: 'Từ vựng · Ngữ pháp' },
];

// ================= UNIT 3 CONTINUATION (PAGES 21–24) =================

export const U3_TASK2_WORDS = ['different', 'visited', 'coach', 'Museum', 'ate'];

export const U3_TASK2_READING_TF = {
  passage:
    'Alex is my penfriend. He lives with his parents in Da Nang. He likes visiting different places and meeting people. Last summer, he visited Hoi An Ancient Town. It is a small town in central Viet Nam. Alex went there by coach. He visited many places like Hoi An Museum of History and Culture, and Japanese Bridge. He ate delicious food and swam in the sea. Alex had a good time there.',
  passageVi:
    'Alex là bạn qua thư của mình. Cậu sống với bố mẹ ở Đà Nẵng. Cậu thích đi thăm nhiều địa điểm khác nhau và gặp gỡ mọi người. Mùa hè năm ngoái, cậu đã thăm Phố cổ Hội An — một thị trấn nhỏ ở miền Trung Việt Nam. Alex đến đó bằng xe khách, thăm Bảo tàng Lịch sử Văn hóa Hội An và Chùa Cầu, ăn đồ ăn ngon và bơi ở biển. Cậu đã có khoảng thời gian thật tuyệt vời.',
  example: '0. He lives with his (0) parents in Da Nang. (Đã điền mẫu sẵn từ parents).',
  statements: [
    { id: 'p21-u3t2-6', text: '6. Alex lives in Da Nang.', isTrue: true, explanation: 'Đúng (True): “He lives with his parents in Da Nang.”' },
    { id: 'p21-u3t2-7', text: '7. His hobby is travelling and meeting people.', isTrue: true, explanation: 'Đúng (True): “He likes visiting different places and meeting people.”' },
    { id: 'p21-u3t2-8', text: '8. He went to Hoi An last summer.', isTrue: true, explanation: 'Đúng (True): “Last summer, he visited Hoi An Ancient Town.”' },
    { id: 'p21-u3t2-9', text: '9. He went there by train.', isTrue: false, explanation: 'Sai (False): Alex đi bằng xe khách (“went there by coach”), không phải tàu hỏa.' },
    { id: 'p21-u3t2-10', text: '10. He enjoyed the trip.', isTrue: true, explanation: 'Đúng (True): “Alex had a good time there” = cậu ấy rất thích chuyến đi.' },
  ],
};

export const U3_TASK3_DIALOGUE: DialogueOrderItem[] = [
  { key: 'D', speaker: 'Phong', text: 'Did you have a nice holiday, Mai?', textVi: 'Mai ơi, bạn có kỳ nghỉ vui không?', correctStep: 0 },
  { key: 'A', speaker: 'Mai', text: 'Yes, I did. I went to the seaside with my brother.', textVi: 'Có chứ. Mình đã đi biển với anh trai.', correctStep: 1 },
  { key: 'C', speaker: 'Phong', text: 'How did you get there?', textVi: 'Bạn đã đến đó bằng phương tiện gì?', correctStep: 2 },
  { key: 'E', speaker: 'Mai', text: 'I went by plane. What about you? Where did you go?', textVi: 'Mình đi máy bay. Còn bạn? Bạn đã đi đâu?', correctStep: 3 },
  { key: 'B', speaker: 'Phong', text: 'I visited my grandparents in the countryside.', textVi: 'Mình đã về thăm ông bà ở vùng quê.', correctStep: 4 },
];

export const U3_TASK4_LINDA_BLANKS: ParagraphBlank[] = [
  { id: 'p22-u3t4-1', index: 1, answers: ['bay'], hint: 'Vịnh Hạ Long: Ha Long ___ (B...)', iconKey: 'bay' },
  { id: 'p22-u3t4-2', index: 2, answers: ['plane'], hint: 'Máy bay (p...)', iconKey: 'plane' },
  { id: 'p22-u3t4-3', index: 3, answers: ['coach', 'bus'], hint: 'Xe khách đường dài (c...)', iconKey: 'coach' },
  { id: 'p22-u3t4-4', index: 4, answers: ['swam'], hint: 'Quá khứ của swim (s...)', iconKey: 'swim' },
  { id: 'p22-u3t4-5', index: 5, answers: ['seafood'], hint: 'Hải sản (s...)', iconKey: 'seafood' },
];

export const U3_TASK5_ODD: QuizChoiceItem[] = [
  { id: 'p22-u3t5-1', prompt: '1. Chọn từ khác loại:', options: ['big', 'small', 'old', 'well'], correctIndex: 3, explanation: '“well” (tốt, giỏi) thường dùng làm trạng từ; big, small, old là tính từ miêu tả kích thước/tuổi.' },
  { id: 'p22-u3t5-2', prompt: '2. Chọn từ khác loại:', options: ['flower', 'lake', 'sea', 'garden'], correctIndex: 0, explanation: '“flower” (bông hoa) là thực vật; lake, sea, garden đều là địa điểm tự nhiên.' },
  { id: 'p22-u3t5-3', prompt: '3. Chọn từ khác loại:', options: ['town', 'city', 'country', 'house'], correctIndex: 3, explanation: '“house” là ngôi nhà riêng lẻ; town, city, country là đơn vị địa lý lớn.' },
  { id: 'p22-u3t5-4', prompt: '4. Chọn từ khác loại:', options: ['travel', 'bike', 'bus', 'car'], correctIndex: 0, explanation: '“travel” (đi du lịch) là động từ; bike, bus, car là danh từ phương tiện giao thông.' },
  { id: 'p22-u3t5-5', prompt: '5. Chọn từ khác loại:', options: ['get', 'leave', 'school', 'start'], correctIndex: 2, explanation: '“school” (trường học) là danh từ; get, leave, start đều là động từ.' },
];

export const U3_TASK6_PHONETICS: QuizChoiceItem[] = [
  { id: 'p22-u3t6-1', prompt: '1. Chọn từ có chữ "e" phát âm khác:', options: ['went (/e/)', 'where (/eə/)', 'never (/e/)', 'get (/e/)'], correctIndex: 1, explanation: '“where” đọc là /weə/ (âm /eə/), còn went, never, get đều đọc âm /e/ ngắn.' },
  { id: 'p22-u3t6-2', prompt: '2. Chọn từ có chữ "i" phát âm khác:', options: ['trip (/ɪ/)', 'did (/ɪ/)', 'with (/ɪ/)', 'nice (/aɪ/)'], correctIndex: 3, explanation: '“nice” đọc là /naɪs/ (âm /aɪ/), còn trip, did, with đọc là /ɪ/.' },
  { id: 'p22-u3t6-3', prompt: '3. Chọn từ có chữ "a" phát âm khác:', options: ['Bay (/eɪ/)', 'play (/eɪ/)', 'stay (/eɪ/)', 'watch (/ɒ/)'], correctIndex: 3, explanation: '“watch” đọc là /wɒtʃ/ (âm /ɒ/), còn Bay, play, stay đều có vần /eɪ/.' },
];

export const U3_TASK7_STRESS: QuizChoiceItem[] = [
  { id: 'p22-u3t7-1', prompt: '1. Chọn từ có trọng âm chính khác:', options: ["'holiday (âm 1)", "'ancient (âm 1)", "im'perial (âm 2)", "'summer (âm 1)"], correctIndex: 2, explanation: '“imperial” /ɪmˈpɪəriəl/ nhấn âm 2; holiday, ancient, summer đều nhấn âm 1.' },
  { id: 'p22-u3t7-2', prompt: '2. Chọn từ có trọng âm chính khác:', options: ["'photo (âm 1)", "'seaside (âm 1)", "'island (âm 1)", "a'bout (âm 2)"], correctIndex: 3, explanation: '“about” /əˈbaʊt/ nhấn âm 2; photo, seaside, island đều nhấn âm 1.' },
];

export const U3_TASK8_MC: QuizChoiceItem[] = [
  { id: 'p22-u3t8-1', prompt: '1. I went _____ a trip with my family.', options: ['in', 'on', 'at', 'of'], correctIndex: 1, explanation: 'Cụm từ cố định: “go on a trip” = đi du lịch/chuyến đi.' },
  { id: 'p23-u3t8-2', prompt: '2. What was the trip _____?', options: ['is', 'was', 'like', 'were'], correctIndex: 2, explanation: 'Hỏi chuyến đi như thế nào: “What was the trip like?”' },
  { id: 'p23-u3t8-3', prompt: '3. _____ did you go on holiday?', options: ['What', 'Where', 'Which', 'How many'], correctIndex: 1, explanation: 'Có động từ “go” (đi đâu) → dùng từ hỏi nơi chốn “Where”.' },
  { id: 'p23-u3t8-4', prompt: '4. She went to Hoi An Ancient _____.', options: ['city', 'village', 'town', 'island'], correctIndex: 2, explanation: 'Phố cổ Hội An là “Hoi An Ancient Town”.' },
  { id: 'p23-u3t8-5', prompt: '5. Where _____ you last summer?', options: ['are', 'was', 'were', 'is'], correctIndex: 2, explanation: '“last summer” là quá khứ + chủ ngữ “you” → dùng to be “were”.' },
];

export const U3_TASK9_ORDERS: OrderSentenceItem[] = [
  { id: 'p23-u3t9-1', words: ['you', 'go', 'did', 'where', 'weekend', 'last', '?'], answer: 'Where did you go last weekend?', meaning: 'Cuối tuần trước bạn đã đi đâu?', explanation: 'Where + did + you + go + last weekend?' },
  { id: 'p23-u3t9-2', words: ['went', 'to', 'I', 'hometown', 'my', '.'], answer: 'I went to my hometown.', meaning: 'Mình đã về quê.', explanation: 'I + went to + my hometown.' },
  { id: 'p23-u3t9-3', words: ['you', 'how', 'there', 'get', 'did', '?'], answer: 'How did you get there?', meaning: 'Bạn đã đến đó bằng cách nào?', explanation: 'How + did + you + get there?' },
  { id: 'p23-u3t9-4', words: ['train', 'went', 'I', 'there', 'by', '.'], answer: 'I went there by train.', meaning: 'Mình đã đến đó bằng tàu hỏa.', explanation: 'I + went there + by train.' },
];

export const U3_TASK10_WRITING: GuidedWritingPrompt[] = [
  { id: 'p24-w0', question: "0. What's your name?", starter: 'My name is', sample: 'An', placeholder: 'Tên của em (vd: An)' },
  { id: 'p24-w1', question: '1. Where do you live?', starter: 'I live', sample: 'in Ha Noi with my family', placeholder: 'in + thành phố/tỉnh của em...' },
  { id: 'p24-w2', question: '2. Where did you go last holiday?', starter: 'Last holiday, I', sample: 'went to Ha Long Bay', placeholder: 'went to + địa điểm...' },
  { id: 'p24-w3', question: '3. How did you get there?', starter: 'I went there by', sample: 'coach', placeholder: 'train / plane / coach / car...' },
  { id: 'p24-w4', question: '4. What was the trip like?', starter: 'It', sample: 'was really wonderful and exciting', placeholder: 'was great / wonderful / fun...' },
];

// ================= UNIT 4 (PAGES 24–33) =================

export const U4_VOCAB_PAGE24: PageVocabWord[] = [
  { word: 'birthday', ipa: '/ˈbɜːθdeɪ/', pos: 'n', meaning: 'ngày sinh nhật', group: 'Tiệc & Lễ hội', example: 'When was your birthday?', exampleVi: 'Sinh nhật của bạn là khi nào?' },
  { word: 'party', ipa: '/ˈpɑːti/', pos: 'n', meaning: 'bữa tiệc', group: 'Tiệc & Lễ hội', example: 'Did you go to the party?', exampleVi: 'Bạn có đi dự tiệc không?' },
];

export const U4_VOCAB_PAGE25: PageVocabWord[] = [
  { word: 'fun', ipa: '/fʌn/', pos: 'n', meaning: 'vui vẻ, niềm vui', group: 'Tiệc & Lễ hội', example: 'We had a lot of fun at the party.', exampleVi: 'Chúng mình rất vui ở bữa tiệc.' },
  { word: 'visit', ipa: '/ˈvɪzɪt/', pos: 'v', meaning: 'đi thăm', group: 'Hoạt động', example: 'Did you visit Tuan Chau Island?', exampleVi: 'Bạn có thăm đảo Tuần Châu không?' },
  { word: 'enjoy', ipa: '/ɪnˈdʒɔɪ/', pos: 'v', meaning: 'thưởng thức, yêu thích', group: 'Hoạt động', example: 'We enjoyed the party very much.', exampleVi: 'Chúng mình rất thích bữa tiệc.' },
  { word: 'funfair', ipa: '/ˈfʌnfeə(r)/', pos: 'n', meaning: 'khu vui chơi, hội chợ', group: 'Tiệc & Lễ hội', example: 'They played games at the funfair.', exampleVi: 'Họ chơi trò chơi ở khu vui chơi.' },
  { word: 'flower', ipa: '/ˈflaʊə(r)/', pos: 'n', meaning: 'bông hoa', group: 'Tiệc & Lễ hội', example: 'Linda went to the festival of flowers.', exampleVi: 'Linda đã đi lễ hội hoa.' },
  { word: 'different', ipa: '/ˈdɪfrənt/', pos: 'adj', meaning: 'khác nhau', group: 'Miêu tả', example: 'They went to different places.', exampleVi: 'Họ đến những địa điểm khác nhau.' },
  { word: 'place', ipa: '/pleɪs/', pos: 'n', meaning: 'địa điểm', group: 'Tiệc & Lễ hội', example: 'Da Lat is a beautiful place.', exampleVi: 'Đà Lạt là một địa điểm đẹp.' },
  { word: 'festival', ipa: '/ˈfestɪvl/', pos: 'n', meaning: 'lễ hội, liên hoan', group: 'Tiệc & Lễ hội', example: 'John joined a festival of sport.', exampleVi: 'John tham gia lễ hội thể thao.' },
  { word: "Teachers' Day", ipa: '/ˈtiːtʃəz deɪ/', pos: 'n', meaning: 'Ngày Nhà giáo', group: 'Tiệc & Lễ hội', example: "We give flowers on Teachers' Day.", exampleVi: 'Chúng em tặng hoa vào Ngày Nhà giáo.' },
  { word: 'hide-and-seek', ipa: '/ˌhaɪd ən ˈsiːk/', pos: 'n', meaning: 'trò chơi trốn tìm', group: 'Hoạt động', example: 'We played hide-and-seek happily.', exampleVi: 'Chúng mình chơi trốn tìm rất vui.' },
  { word: 'cartoon', ipa: '/kɑːˈtuːn/', pos: 'n', meaning: 'phim hoạt hình', group: 'Giải trí & Sách', example: 'We watched a funny cartoon.', exampleVi: 'Chúng mình xem phim hoạt hình vui nhộn.' },
  { word: 'chat', ipa: '/tʃæt/', pos: 'v', meaning: 'tán gẫu, trò chuyện', group: 'Hoạt động', example: 'They chatted with their friends.', exampleVi: 'Họ trò chuyện cùng bạn bè.' },
  { word: 'invite', ipa: '/ɪnˈvaɪt/', pos: 'v', meaning: 'mời', group: 'Hoạt động', example: 'I invited some friends to my party.', exampleVi: 'Mình mời vài người bạn đến bữa tiệc.' },
  { word: 'eat', ipa: '/iːt/', pos: 'v', meaning: 'ăn (quá khứ: ate)', group: 'Hoạt động', example: 'We ate cakes and fruit.', exampleVi: 'Chúng mình đã ăn bánh và hoa quả.', tip: 'Quá khứ bất quy tắc: eat → ate.' },
  { word: 'food and drink', ipa: '/fuːd ænd drɪŋk/', pos: 'n', meaning: 'đồ ăn và thức uống', group: 'Đồ ăn & Quà tặng', example: 'There was nice food and drink.', exampleVi: 'Có nhiều đồ ăn và thức uống ngon.' },
  { word: 'happily', ipa: '/ˈhæpɪli/', pos: 'adv', meaning: 'một cách vui vẻ', group: 'Miêu tả', example: 'We sang and danced happily.', exampleVi: 'Chúng mình hát và nhảy múa vui vẻ.' },
  { word: 'film', ipa: '/fɪlm/', pos: 'n', meaning: 'bộ phim', group: 'Giải trí & Sách', example: 'We watched an interesting film.', exampleVi: 'Chúng mình xem một bộ phim thú vị.' },
  { word: 'present', ipa: '/ˈpreznt/', pos: 'n', meaning: 'món quà tặng', group: 'Đồ ăn & Quà tặng', example: 'What present did you give her?', exampleVi: 'Bạn đã tặng quà gì cho cô ấy?', tip: 'Danh từ “món quà” nhấn âm 1: PRE-zầnt.' },
  { word: 'sweet', ipa: '/swiːt/', pos: 'n', meaning: 'kẹo, đồ ngọt', group: 'Đồ ăn & Quà tặng', example: 'His mother bought cakes and sweets.', exampleVi: 'Mẹ cậu ấy mua bánh và kẹo.' },
  { word: 'candle', ipa: '/ˈkændl/', pos: 'n', meaning: 'cây nến, đèn cầy', group: 'Đồ ăn & Quà tặng', example: 'There are ten candles on the cake.', exampleVi: 'Có 10 cây nến trên bánh sinh nhật.' },
  { word: 'cake', ipa: '/keɪk/', pos: 'n', meaning: 'bánh ngọt', group: 'Đồ ăn & Quà tặng', example: 'We ate birthday cake together.', exampleVi: 'Chúng mình cùng ăn bánh sinh nhật.' },
  { word: 'juice', ipa: '/dʒuːs/', pos: 'n', meaning: 'nước ép hoa quả', group: 'Đồ ăn & Quà tặng', example: 'We drank fruit juice.', exampleVi: 'Chúng mình uống nước ép hoa quả.' },
  { word: 'fruit', ipa: '/fruːt/', pos: 'n', meaning: 'hoa quả, trái cây', group: 'Đồ ăn & Quà tặng', example: 'Fresh fruit is very healthy.', exampleVi: 'Hoa quả tươi rất tốt cho sức khỏe.' },
  { word: 'story book', ipa: '/ˈstɔːri bʊk/', pos: 'n', meaning: 'sách truyện', group: 'Giải trí & Sách', example: 'I bought a story book at the book fair.', exampleVi: 'Mình mua một cuốn truyện ở hội sách.' },
  { word: 'comic book', ipa: '/ˈkɒmɪk bʊk/', pos: 'n', meaning: 'truyện tranh', group: 'Giải trí & Sách', example: 'I bought Doraemon comic books.', exampleVi: 'Mình đã mua truyện tranh Doraemon.' },
];

export const U4_VOCAB_PAGE26: PageVocabWord[] = [
  { word: 'sport', ipa: '/spɔːt/', pos: 'n', meaning: 'thể thao', group: 'Hoạt động', example: 'John joined a festival of sport.', exampleVi: 'John tham gia lễ hội thể thao.' },
  { word: 'start', ipa: '/stɑːt/', pos: 'v', meaning: 'bắt đầu', group: 'Hoạt động', example: 'The party started at 5 p.m.', exampleVi: 'Bữa tiệc bắt đầu lúc 5 giờ chiều.' },
  { word: 'end', ipa: '/end/', pos: 'v', meaning: 'kết thúc', group: 'Hoạt động', example: 'The party ended at 8 p.m.', exampleVi: 'Bữa tiệc kết thúc lúc 8 giờ tối.' },
];

export const U4_TASK1_ODD: QuizChoiceItem[] = [
  { id: 'p28-u4t1-1', prompt: '1. Chọn từ khác loại:', options: ['Sunday', 'Tuesday', 'party', 'Friday'], correctIndex: 2, explanation: '“party” (bữa tiệc) không phải là thứ trong tuần như Sunday, Tuesday, Friday.' },
  { id: 'p28-u4t1-2', prompt: '2. Chọn từ khác loại:', options: ['enjoyed', 'went', 'played', 'joined'], correctIndex: 1, explanation: '“went” là quá khứ bất quy tắc (go → went); 3 động từ còn lại thêm đuôi -ed.' },
  { id: 'p28-u4t1-3', prompt: '3. Chọn từ khác loại:', options: ['had', 'have', 'did', 'went'], correctIndex: 1, explanation: '“have” đang ở thì hiện tại (V1); had, did, went đều ở thì quá khứ (V2).' },
  { id: 'p28-u4t1-4', prompt: '4. Chọn từ khác loại:', options: ['yesterday', 'last Sunday', 'last week', 'today'], correctIndex: 3, explanation: '“today” (hôm nay) chỉ hiện tại; 3 cụm còn lại đều chỉ thời gian trong quá khứ.' },
  { id: 'p28-u4t1-5', prompt: '5. Chọn từ khác loại:', options: ['birthday', 'party', 'cake', 'zoo'], correctIndex: 3, explanation: '“zoo” (sở thú) là địa điểm xem thú; birthday, party, cake cùng chủ đề sinh nhật.' },
];

export const U4_TASK2_MATCH: PairMatchItem[] = [
  { id: 'p28-u4t2-0', left: "0 (Mẫu). It's an occasion when you take a meal to eat outdoors.", leftVi: 'Dịp mang đồ ăn ra ngoài trời ăn cùng nhau.', rightKey: 'picnic', rightLabel: 'Picnic (Dã ngoại)', iconKey: 'picnic', isExample: true },
  { id: 'p28-u4t2-1', left: "1. It's a party for you to celebrate your birthday.", leftVi: 'Bữa tiệc để mừng ngày sinh nhật của bạn.', rightKey: 'birthday', rightLabel: 'Birthday party', iconKey: 'birthday' },
  { id: 'p28-u4t2-2', left: "2. It's a film or television show made by a series of drawings.", leftVi: 'Bộ phim được tạo nên từ chuỗi hình vẽ.', rightKey: 'cartoon', rightLabel: 'Cartoon (Hoạt hình)', iconKey: 'cartoon' },
  { id: 'p28-u4t2-3', left: "3. It's an event for you to see various kinds of flowers at a place.", leftVi: 'Sự kiện ngắm nhiều loài hoa đẹp tại một nơi.', rightKey: 'flower', rightLabel: 'Festival of flowers', iconKey: 'flower' },
  { id: 'p28-u4t2-4', left: "4. It's an outdoor event for you to take part in various kinds of games and entertainment.", leftVi: 'Sự kiện ngoài trời với nhiều trò chơi giải trí.', rightKey: 'funfair', rightLabel: 'Funfair (Hội chợ)', iconKey: 'funfair' },
];

export const U4_TASK3_READING = {
  passage:
    'Last summer, Linda and her friend John were on their holiday. They went to different places of interest. Linda went to the festival of flowers in Da Lat in Viet Nam. John joined The Medway Festival of Sport in England. They enjoyed their holiday very much.',
  passageVi:
    'Mùa hè năm ngoái, Linda và người bạn John đi nghỉ lễ. Hai bạn đến những địa điểm thú vị khác nhau: Linda đi Lễ hội hoa Đà Lạt ở Việt Nam, còn John tham gia Lễ hội Thể thao Medway ở nước Anh. Cả hai đều rất thích kỳ nghỉ của mình.',
  example: '0. Linda and John were on holiday last summer. → True (Đúng).',
  statements: [
    { id: 'p29-u4t3-1', text: '1. They went to Viet Nam and England together.', isTrue: false, explanation: 'Sai (False): Hai bạn đến những nơi khác nhau (“went to different places”).' },
    { id: 'p29-u4t3-2', text: '2. Linda visited the festival of flowers in Da Lat.', isTrue: true, explanation: 'Đúng (True): “Linda went to the festival of flowers in Da Lat in Viet Nam.”' },
    { id: 'p29-u4t3-3', text: '3. John wanted Linda to join a festival of sport in Medway.', isTrue: false, explanation: 'Sai (False): Bài đọc không hề nhắc đến việc John mời Linda.' },
    { id: 'p29-u4t3-4', text: '4. They liked their holiday a lot.', isTrue: true, explanation: 'Đúng (True): “They enjoyed their holiday very much.”' },
  ],
};

export const U4_TASK4_VERBS = [
  { idx: 1, base: 'go', answer: 'went', vi: 'đã đi' },
  { idx: 2, base: 'buy', answer: 'bought', vi: 'đã mua' },
  { idx: 3, base: 'give', answer: 'gave', vi: 'đã tặng' },
  { idx: 4, base: 'be', answer: 'was', vi: 'đã rất (vui)' },
  { idx: 5, base: 'enjoy', answer: 'enjoyed', vi: 'đã thích thú' },
  { idx: 6, base: 'listen', answer: 'listened', vi: 'đã nghe' },
  { idx: 7, base: 'dance', answer: 'danced', vi: 'đã nhảy múa' },
  { idx: 8, base: 'drink', answer: 'drank', vi: 'đã uống' },
  { idx: 9, base: 'eat', answer: 'ate', vi: 'đã ăn' },
  { idx: 10, base: 'play', answer: 'played', vi: 'đã chơi' },
  { idx: 11, base: 'end', answer: 'ended', vi: 'đã kết thúc' },
  { idx: 12, base: 'be', answer: 'were', vi: 'đã rất (vui nhộn)' },
];

export const U4_TASK4_QA: QuizChoiceItem[] = [
  { id: 'p30-u4t4-1', prompt: "1. When was Peter's birthday party?", options: ['It was last Sunday.', 'It was on last Thursday.', 'It was yesterday.', 'It was last Monday.'], correctIndex: 1, explanation: 'Bài viết mở đầu: “Last Thursday, I went to Peter’s birthday party.”' },
  { id: 'p30-u4t4-2', prompt: '2. What present did Linh give to Peter?', options: ['She gave him a comic book.', 'She gave him a pink clock.', 'She gave him a robot.', 'She gave him a football.'], correctIndex: 2, explanation: '“I gave him a robot.” → She gave him a robot.' },
  { id: 'p30-u4t4-3', prompt: "3. What did Peter's mother buy?", options: ['Fruits, cakes and candies.', 'Only orange juice.', 'Robots and comic books.', 'Seafood and noodles.'], correctIndex: 0, explanation: '“His mother bought a lot of fruits, cakes and candies.”' },
  { id: 'p30-u4t4-4', prompt: '4. What did they play?', options: ['They played football.', 'They played some games.', 'They played badminton.', 'They played chess.'], correctIndex: 1, explanation: '“We also played some games.”' },
  { id: 'p30-u4t4-5', prompt: '5. When did the party end?', options: ['It ended at 7 p.m.', 'It ended at 8 p.m.', 'It ended at 9 p.m.', 'It ended at 6 p.m.'], correctIndex: 1, explanation: '“The party ended at 8 pm.”' },
  { id: 'p30-u4t4-6', prompt: '6. Did they enjoy the party?', options: ['Yes, they did.', "No, they didn't.", 'Yes, he did.', "No, she didn't."], correctIndex: 0, explanation: '“We enjoyed the party very much.” → Yes, they did.' },
  { id: 'p30-u4t4-7', prompt: "7. Was Peter sad with Linh's gift?", options: ['Yes, he was.', "No, he wasn't.", 'Yes, they were.', "No, he didn't."], correctIndex: 1, explanation: 'Peter rất vui (“Peter was very happy with my gift”) → No, he wasn’t.' },
  { id: 'p30-u4t4-8', prompt: '8. What did they drink?', options: ['Milk and water.', 'Tea and coffee.', 'Fruit juice and coke.', 'Lemonade only.'], correctIndex: 2, explanation: '“We drank fruit juice and coke.”' },
  { id: 'p30-u4t4-9', prompt: '9. What did they do at the party?', options: ['Only watched TV.', 'Listened to music, danced, drank, ate and played games.', 'Went swimming in the pool.', 'Did their homework together.'], correctIndex: 1, explanation: 'Họ nghe nhạc, nhảy múa, uống nước ép & cô-ca, ăn tất cả đồ ăn và chơi trò chơi.' },
  { id: 'p30-u4t4-10', prompt: '10. Did they sing at the party?', options: ['Yes, they did.', "No, they didn't.", 'Yes, they were.', "No, they weren't."], correctIndex: 1, explanation: 'Trong bài chỉ kể nghe nhạc và nhảy múa (“listened to music and danced”), không nhắc tới hát → No, they didn’t.' },
];

export const U4_TASK5_BOOKFAIR_WORDS = ['bookstall', 'bought', 'books', 'photographs', 'had', 'bookshop (thừa)'];

export const U4_TASK5_BLANKS: ParagraphBlank[] = [
  { id: 'p31-u4t5-1', index: 1, answers: ['bookstall', 'bookshop'], hint: 'gian hàng sách (bookstall)', iconKey: 'bookstall' },
  { id: 'p31-u4t5-2', index: 2, answers: ['bought'], hint: 'đã mua (quá khứ của buy)', iconKey: 'gift' },
  { id: 'p31-u4t5-3', index: 3, answers: ['books', 'comic books'], hint: 'những cuốn sách (books)', iconKey: 'books' },
  { id: 'p31-u4t5-4', index: 4, answers: ['photographs', 'photos'], hint: 'những bức ảnh (photographs)', iconKey: 'camera' },
  { id: 'p31-u4t5-5', index: 5, answers: ['had'], hint: 'đã ăn trưa: ___ lunch (had)', iconKey: 'picnic' },
];

export const U4_TASK6_LOOK_WRITE: FillItem[] = [
  { id: 'p31-u4t6-1', before: '1. I invited some of my friends to the ', after: '.', hint: 'Bữa tiệc (bắt đầu bằng p...)', iconKey: 'party', answers: ['party'], explanation: 'invite friends to the party = mời bạn đến bữa tiệc.' },
  { id: 'p32-u4t6-2', before: '2. They gave me some flowers, robots and music ', after: '.', hint: 'Đĩa nhạc CD số nhiều (CDs)', iconKey: 'cd', answers: ['cds', 'cd'], explanation: 'music CDs = những đĩa nhạc CD.' },
  { id: 'p32-u4t6-3', before: '3. We ate cakes, fruit and drank fruit ', after: '.', hint: 'Nước ép hoa quả (j...)', iconKey: 'juice', answers: ['juice'], explanation: 'drank fruit juice = uống nước ép trái cây.' },
  { id: 'p32-u4t6-4', before: '4. We sang and ', after: ' happily.', hint: 'Quá khứ của dance (d...)', iconKey: 'dance', answers: ['danced'], explanation: 'Song song với “sang” ở quá khứ đơn → “danced”.' },
];

export const U4_TASK7_ORDERS: OrderSentenceItem[] = [
  { id: 'p32-u4t7-1', words: ['you', 'go', 'did', 'party', 'the', 'to', '?'], answer: 'Did you go to the party?', meaning: 'Bạn có đi dự tiệc không?', explanation: 'Did + you + go + to the party?' },
  { id: 'p32-u4t7-2', words: ['the', 'what', 'party', 'was', 'like', '?'], answer: 'What was the party like?', meaning: 'Bữa tiệc như thế nào?', explanation: 'What + was + the party + like?' },
  { id: 'p32-u4t7-3', words: ['there', 'do', 'what', 'did', 'you', '?'], answer: 'What did you do there?', meaning: 'Bạn đã làm gì ở đó?', explanation: 'What + did + you + do + there?' },
  { id: 'p32-u4t7-4', words: ['party', 'enjoy', 'the', 'did', 'you', '?'], answer: 'Did you enjoy the party?', meaning: 'Bạn có thích bữa tiệc không?', explanation: 'Did + you + enjoy + the party?' },
];

export const U4_TASK8_WRITING: GuidedWritingPrompt[] = [
  { id: 'p33-w0', question: "0. What's his/her name?", starter: 'My friend is', sample: 'Nam', placeholder: 'Tên bạn của em (vd: Nam)' },
  { id: 'p33-w1', question: '1. When was his/her last birthday?', starter: 'It was', sample: 'last Sunday', placeholder: 'last Sunday / on 15th October...' },
  { id: 'p33-w2', question: '2. Who did he/she invite to the party?', starter: 'He/She', sample: 'invited all of our classmates to the party', placeholder: 'invited some friends / classmates...' },
  { id: 'p33-w3', question: '3. How was the party?', starter: 'The party', sample: 'was great and really fun', placeholder: 'was fun / wonderful / exciting...' },
  { id: 'p33-w4', question: '4. What did you do there?', starter: 'We', sample: 'ate birthday cake, drank fruit juice, sang and danced happily', placeholder: 'ate cakes, sang, played games...' },
];

// ================= UNIT 5 (PAGES 34–39) =================

export const U5_VOCAB_PAGE34: PageVocabWord[] = [
  { word: 'mountain', ipa: '/ˈmaʊntən/', pos: 'n', meaning: 'ngọn núi', group: 'Địa điểm du lịch', example: 'We will have a picnic in the mountains.', exampleVi: 'Chúng mình sẽ đi dã ngoại trên núi.' },
  { word: 'picnic', ipa: '/ˈpɪknɪk/', pos: 'n', meaning: 'chuyến dã ngoại', group: 'Hoạt động cuối tuần', example: "I'll go for a picnic this Sunday.", exampleVi: 'Chủ nhật này mình sẽ đi dã ngoại.' },
  { word: 'countryside', ipa: '/ˈkʌntrisaɪd/', pos: 'n', meaning: 'vùng quê, nông thôn', group: 'Địa điểm du lịch', example: 'I think I will be in the countryside.', exampleVi: 'Mình nghĩ mình sẽ ở vùng quê.' },
  { word: 'beach', ipa: '/biːtʃ/', pos: 'n', meaning: 'bãi biển', group: 'Biển & Đảo', example: "We'll play sports on the beach.", exampleVi: 'Chúng mình sẽ chơi thể thao trên bãi biển.' },
  { word: 'sea', ipa: '/siː/', pos: 'n', meaning: 'biển', group: 'Biển & Đảo', example: "We'll swim in the sea.", exampleVi: 'Chúng mình sẽ bơi ở biển.' },
  { word: 'English', ipa: '/ˈɪŋɡlɪʃ/', pos: 'n', meaning: 'người Anh / tiếng Anh', group: 'Giao tiếp', example: 'My penfriend is English.', exampleVi: 'Bạn qua thư của mình là người Anh.' },
  { word: 'visit', ipa: '/ˈvɪzɪt/', pos: 'v', meaning: 'thăm quan', group: 'Hoạt động cuối tuần', example: 'Will you visit Tuan Chau Island?', exampleVi: 'Bạn sẽ thăm đảo Tuần Châu chứ?' },
  { word: 'swim', ipa: '/swɪm/', pos: 'v', meaning: 'bơi lội', group: 'Hoạt động cuối tuần', example: "I think I'll swim in the sea.", exampleVi: 'Mình nghĩ mình sẽ bơi dưới biển.' },
  { word: 'explore', ipa: '/ɪkˈsplɔː(r)/', pos: 'v', meaning: 'khám phá', group: 'Hoạt động cuối tuần', example: "She thinks she'll explore the caves.", exampleVi: 'Cô ấy nghĩ sẽ đi khám phá hang động.' },
  { word: 'cave', ipa: '/keɪv/', pos: 'n', meaning: 'hang động', group: 'Địa điểm du lịch', example: 'Ha Long Bay has many amazing caves.', exampleVi: 'Vịnh Hạ Long có nhiều hang động tuyệt đẹp.' },
  { word: 'island', ipa: '/ˈaɪlənd/', pos: 'n', meaning: 'hòn đảo', group: 'Biển & Đảo', example: 'We will take a boat trip around the island.', exampleVi: 'Chúng mình sẽ đi thuyền quanh đảo.' },
  { word: 'bay', ipa: '/beɪ/', pos: 'n', meaning: 'vịnh', group: 'Biển & Đảo', example: 'What will you do at Ha Long Bay?', exampleVi: 'Bạn sẽ làm gì ở Vịnh Hạ Long?' },
  { word: 'park', ipa: '/pɑːk/', pos: 'n', meaning: 'công viên', group: 'Địa điểm du lịch', example: "We'll fly kites in the park.", exampleVi: 'Chúng mình sẽ thả diều ở công viên.' },
  { word: 'sandcastle', ipa: '/ˈsændkɑːsl/', pos: 'n', meaning: 'lâu đài cát', group: 'Biển & Đảo', example: 'Let us build a big sandcastle!', exampleVi: 'Cùng xây một lâu đài cát thật to nào!', tip: 'Ghép 2 từ quen: sand (cát) + castle (lâu đài).' },
  { word: 'tomorrow', ipa: '/təˈmɒrəʊ/', pos: 'adv', meaning: 'ngày mai', group: 'Thời gian tương lai', example: 'Where will you be tomorrow?', exampleVi: 'Ngày mai bạn sẽ ở đâu?' },
  { word: 'weekend', ipa: '/ˌwiːkˈend/', pos: 'n', meaning: 'ngày cuối tuần', group: 'Thời gian tương lai', example: 'Where will you be this weekend?', exampleVi: 'Cuối tuần này bạn sẽ ở đâu?' },
  { word: 'next', ipa: '/nekst/', pos: 'adj', meaning: 'kế tiếp, sắp tới', group: 'Thời gian tương lai', example: 'Where will they go next month?', exampleVi: 'Tháng tới họ sẽ đi đâu?' },
  { word: 'seafood', ipa: '/ˈsiːfuːd/', pos: 'n', meaning: 'hải sản', group: 'Biển & Đảo', example: 'We will eat delicious seafood.', exampleVi: 'Chúng mình sẽ ăn hải sản ngon.' },
  { word: 'sand', ipa: '/sænd/', pos: 'n', meaning: 'cát', group: 'Biển & Đảo', example: 'The beach has white sand.', exampleVi: 'Bãi biển có cát trắng.' },
  { word: 'sunbathe', ipa: '/ˈsʌnbeɪð/', pos: 'v', meaning: 'tắm nắng', group: 'Hoạt động cuối tuần', example: 'My parents will sunbathe on the beach.', exampleVi: 'Bố mẹ mình sẽ tắm nắng trên bãi biển.' },
  { word: 'build', ipa: '/bɪld/', pos: 'v', meaning: 'xây dựng', group: 'Hoạt động cuối tuần', example: "I'll build sandcastles with my sister.", exampleVi: 'Mình sẽ xây lâu đài cát cùng em gái.' },
  { word: 'activity', ipa: '/ækˈtɪvəti/', pos: 'n', meaning: 'hoạt động', group: 'Giao tiếp', example: 'We have many outdoor activities.', exampleVi: 'Chúng mình có nhiều hoạt động ngoài trời.' },
  { word: 'interview', ipa: '/ˈɪntəvjuː/', pos: 'v/n', meaning: 'phỏng vấn', group: 'Giao tiếp', example: 'Interview your classmates about their weekend.', exampleVi: 'Phỏng vấn các bạn về cuối tuần nhé.' },
];

export const U5_TASK1_ODD: QuizChoiceItem[] = [
  { id: 'p35-u5t1-1', prompt: '1. Chọn từ khác loại:', options: ['home', 'beach', 'mountain', 'where'], correctIndex: 3, explanation: '“where” là từ để hỏi; home, beach, mountain là danh từ chỉ địa điểm.' },
  { id: 'p35-u5t1-2', prompt: '2. Chọn từ khác loại:', options: ['seafood', 'build', 'sunbathe', 'visit'], correctIndex: 0, explanation: '“seafood” (hải sản) là danh từ; build, sunbathe, visit đều là động từ.' },
  { id: 'p35-u5t1-3', prompt: '3. Chọn từ khác loại:', options: ['island', 'interview', 'bay', 'cave'], correctIndex: 1, explanation: '“interview” (phỏng vấn) không phải địa danh tự nhiên như island, bay, cave.' },
  { id: 'p36-u5t1-4', prompt: '4. Chọn từ khác loại:', options: ['this weekend', 'tomorrow', 'explore', 'next month'], correctIndex: 2, explanation: '“explore” (khám phá) là động từ; 3 cụm còn lại chỉ thời gian tương lai.' },
  { id: 'p36-u5t1-5', prompt: '5. Chọn từ khác loại:', options: ['by', 'in', 'on', 'trip'], correctIndex: 3, explanation: '“trip” (chuyến đi) là danh từ; by, in, on đều là giới từ.' },
];

export const U5_TASK2_MATCH: PairMatchItem[] = [
  { id: 'p36-u5t2-1', left: '1. Where will you be this weekend?', rightKey: 'h', rightLabel: "h. I think I'll be at home." },
  { id: 'p36-u5t2-2', left: '2. Where will Mai be tomorrow?', rightKey: 'g', rightLabel: "g. She'll be on the beach." },
  { id: 'p36-u5t2-3', left: '3. Where will Hung be next weekend?', rightKey: 'c', rightLabel: "c. He'll be in the mountains." },
  { id: 'p36-u5t2-4', left: '4. What will your family do this weekend?', rightKey: 'f', rightLabel: 'f. I think we will go for a picnic.' },
  { id: 'p36-u5t2-5', left: '5. Will you visit Tuan Chau Island?', rightKey: 'd', rightLabel: 'd. Yes, I will.' },
  { id: 'p36-u5t2-6', left: '6. Where will Tom and Peter be next month?', rightKey: 'a', rightLabel: "a. They'll be by the sea." },
  { id: 'p36-u5t2-7', left: '7. What will you do at Ha Long Bay?', rightKey: 'b', rightLabel: "b. I think I'll swim in the sea." },
  { id: 'p36-u5t2-8', left: '8. Why will you be at home, Hoa?', rightKey: 'e', rightLabel: 'e. Because I have to study.' },
];

export const U5_TASK3_MC: QuizChoiceItem[] = [
  { id: 'p36-u5t3-1', prompt: '1. What will you do _____ Ha Long Bay?', options: ['on', 'in', 'for', 'at'], correctIndex: 3, explanation: 'Dùng “at Ha Long Bay” (tại Vịnh Hạ Long).' },
  { id: 'p36-u5t3-2', prompt: '2. We will take a _____ trip to a small island.', options: ['boat', 'ship', 'good', 'mountain'], correctIndex: 0, explanation: 'Cụm từ chuẩn Unit 5: “take a boat trip” = đi chuyến du ngoạn bằng thuyền.' },
  { id: 'p36-u5t3-3', prompt: '3. My Dad will take the family to Da Nang _____ train.', options: ['with', 'by', 'on', 'in'], correctIndex: 1, explanation: 'Đi bằng phương tiện gì luôn dùng “by + phương tiện” (by train).' },
  { id: 'p36-u5t3-4', prompt: '4. Where _____ you go this weekend?', options: ['did', 'do', 'will', 'are'], correctIndex: 2, explanation: 'Có dấu hiệu tương lai “this weekend” → dùng trợ động từ “will”.' },
  { id: 'p36-u5t3-5', prompt: '5. I _____ we will have a wonderful summer camp.', options: ['take', 'explore', 'have', 'think'], correctIndex: 3, explanation: '“I think + S + will...” = Mình nghĩ rằng... sẽ...' },
];

export const U5_TASK4_READING = {
  passage:
    "My name's Vinh. This weekend, Dad will take the family to Nghe An by train. We will visit Uncle Ho's house and learn about Uncle Ho and his family. It will be amazing to visit Uncle Ho's hometown. I am so happy because it will be the first history lesson I can learn from a trip.",
  passageVi:
    'Tên mình là Vinh. Cuối tuần này, bố sẽ đưa cả gia đình về Nghệ An bằng tàu hỏa. Chúng mình sẽ thăm nhà Bác Hồ và tìm hiểu về Bác cùng gia đình Bác. Thật tuyệt vời khi được thăm quê hương Bác Hồ. Mình rất vui vì đây sẽ là bài học lịch sử đầu tiên mình học được từ một chuyến đi.',
  example: "0. Vinh's family will go to Nghe An. → True (Đúng).",
  statements: [
    { id: 'p36-u5t4-1', text: '1. They will get there by bus.', isTrue: false, explanation: 'Sai (False): Họ đi bằng tàu hỏa (“by train”), không phải xe buýt.' },
    { id: 'p36-u5t4-2', text: '2. They will know about Uncle Ho and his family.', isTrue: true, explanation: 'Đúng (True): “learn about Uncle Ho and his family”.' },
    { id: 'p36-u5t4-3', text: "3. Nghe An is Uncle Ho's hometown.", isTrue: true, explanation: 'Đúng (True): Cả nhà về Nghệ An để thăm quê Bác Hồ.' },
    { id: 'p36-u5t4-4', text: "4. It's Vinh's first history lesson at school.", isTrue: false, explanation: 'Sai (False): Đây là bài học lịch sử từ một chuyến đi (“from a trip”), không phải ở trường.' },
  ],
};

export const U5_TASK5_LOOK_WRITE: FillItem[] = [
  { id: 'p37-u5t5-1', before: "1. She thinks she'll explore the ", after: '.', hint: 'Hang động (c...)', iconKey: 'cave', answers: ['cave', 'caves'], explanation: 'explore the cave(s) = khám phá hang động.' },
  { id: 'p37-u5t5-2', before: "2. We'll swim in the ", after: '.', hint: 'Biển (s...)', iconKey: 'sea', answers: ['sea'], explanation: 'swim in the sea = bơi ở biển.' },
  { id: 'p37-u5t5-3', before: "3. We'll fly a kite on the ", after: '.', hint: 'Bãi biển (b...)', iconKey: 'beach', answers: ['beach'], explanation: 'fly a kite on the beach = thả diều trên bãi biển.' },
  { id: 'p37-u5t5-4', before: '4. Our school will have a picnic in the ', after: ' of Ba Vi this Sunday.', hint: 'Những ngọn núi (m...)', iconKey: 'mountains', answers: ['mountains', 'mountain'], explanation: 'in the mountains of Ba Vi = ở vùng núi Ba Vì.' },
  { id: 'p37-u5t5-5', before: '5. I think I will be at ', after: '.', hint: 'Ở nhà (h...)', iconKey: 'home', answers: ['home'], explanation: 'be at home = ở nhà.' },
];

export const U5_TASK6_CAMP_BLANKS: ParagraphBlank[] = [
  { id: 'p38-u5t6-1', index: 1, answers: ['forest'], hint: 'khu rừng nhiệt đới (f...)', iconKey: 'forest' },
  { id: 'p38-u5t6-2', index: 2, answers: ['home'], hint: 'viện dưỡng lão: nursing ___ (h...)', iconKey: 'home' },
  { id: 'p38-u5t6-3', index: 3, answers: ['boat'], hint: 'chuyến thuyền: ___ trip (b...)', iconKey: 'ship' },
  { id: 'p38-u5t6-4', index: 4, answers: ['sea'], hint: 'biển (s...)', iconKey: 'sea' },
  { id: 'p38-u5t6-5', index: 5, answers: ['summer'], hint: 'trại hè: ___ camp (s...)', iconKey: 'summer' },
];

export const U5_TASK7_WH_WORDS = ['What', 'Where', 'When', 'Who', 'Why', 'How', 'What time'];

export const U5_TASK7_WH_ITEMS: QuizChoiceItem[] = [
  { id: 'p38-u5t7-1', prompt: '1. _____ will they do tomorrow? — I will do my homework.', options: ['What', 'Where', 'When', 'Who'], correctIndex: 0, explanation: 'Hỏi làm việc gì → dùng “What”.' },
  { id: 'p38-u5t7-2', prompt: '2. _____ will go camping next Sunday? — Nam and Quang will.', options: ['What', 'Who', 'Why', 'How'], correctIndex: 1, explanation: 'Câu trả lời chỉ người (Nam and Quang) → dùng “Who”.' },
  { id: 'p38-u5t7-3', prompt: "3. _____ will we meet? — We will meet at Lan's house.", options: ['When', 'Why', 'Where', 'How'], correctIndex: 2, explanation: 'Câu trả lời chỉ địa điểm (at Lan’s house) → dùng “Where”.' },
  { id: 'p38-u5t7-4', prompt: "4. _____ will you be back? — I will be back at 8 o'clock.", options: ['What time', 'Who', 'Why', 'Where'], correctIndex: 0, explanation: 'Câu trả lời có giờ cụ thể (at 8 o’clock) → dùng “What time”.' },
  { id: 'p38-u5t7-5', prompt: '5. _____ will she go to the zoo? — She will go by bus.', options: ['When', 'What', 'How', 'Who'], correctIndex: 2, explanation: 'Câu trả lời chỉ phương tiện (by bus) → dùng “How”.' },
  { id: 'p38-u5t7-6', prompt: '6. _____ will your father travel to Ha Noi? — He will travel next week.', options: ['Where', 'When', 'Why', 'What'], correctIndex: 1, explanation: 'Câu trả lời chỉ thời điểm chung (next week) → dùng “When”.' },
  { id: 'p38-u5t7-7', prompt: '7. _____ will Nam go to bed early tonight? — Because he will have a test tomorrow.', options: ['Who', 'How', 'Why', 'Where'], correctIndex: 2, explanation: 'Câu trả lời bắt đầu bằng “Because...” (bởi vì) → dùng “Why”.' },
  { id: 'p38-u5t7-8', prompt: '8. _____ will Nam go next summer vacation? — I will go to Nha Trang.', options: ['Where', 'What', 'When', 'Who'], correctIndex: 0, explanation: 'Câu trả lời chỉ địa điểm (to Nha Trang) → dùng “Where”.' },
];

export const U5_TASK8_ORDERS_P38: OrderSentenceItem[] = [
  { id: 'p38-u5t8-1', words: ['sports', 'my', 'the', 'play', 'family', 'beach', 'will', 'on', '.'], answer: 'My family will play sports on the beach.', meaning: 'Gia đình mình sẽ chơi thể thao trên bãi biển.', explanation: 'My family + will + play sports + on the beach.' },
];

export const U5_TASK8_ORDERS_P39: OrderSentenceItem[] = [
  { id: 'p39-u5t8-2', words: ['you', 'next', 'will', 'be', 'where', 'year', '?'], answer: 'Where will you be next year?', meaning: 'Năm sau bạn sẽ ở đâu?', explanation: 'Where + will + you + be + next year?' },
  { id: 'p39-u5t8-3', words: ['parents', 'our', 'summer', 'have', 'with', 'a', "we'll", 'holiday', '.'], answer: "We'll have a summer holiday with our parents.", meaning: 'Chúng mình sẽ có một kỳ nghỉ hè cùng bố mẹ.', explanation: "We'll + have a summer holiday + with our parents." },
  { id: 'p39-u5t8-4', words: ['they', 'will', 'the', 'what', 'next', 'do', 'month', 'countryside', 'in', '?'], answer: 'What will they do in the countryside next month?', meaning: 'Tháng tới họ sẽ làm gì ở vùng quê?', explanation: 'What + will + they + do + in the countryside + next month?' },
];

export const U5_TASK9_WRITING: GuidedWritingPrompt[] = [
  { id: 'p39-w0', question: '0. When will your holiday be?', starter: 'My holiday will be', sample: 'next week', placeholder: 'next week / next month / this summer' },
  { id: 'p39-w1', question: '1. Where will you go?', starter: 'I will', sample: 'go to Nha Trang Beach', placeholder: 'go to + địa điểm...' },
  { id: 'p39-w2', question: '2. Who will you be with?', starter: 'I', sample: 'will go with my parents and my brother', placeholder: 'will be with my family / friends...' },
  { id: 'p39-w3', question: '3. What will you do?', starter: 'I', sample: 'will swim in the sea, build sandcastles and eat seafood', placeholder: 'will swim / explore caves / sunbathe...' },
  { id: 'p39-w4', question: '4. What will your holiday be like? Why?', starter: 'I think', sample: 'it will be wonderful because the beach is very beautiful', placeholder: 'it will be great because...' },
];

// ================= UNIT 6 OPENING (PAGES 40–41) =================

export const U6_VOCAB_PAGE40: PageVocabWord[] = [
  { word: 'subject', ipa: '/ˈsʌbdʒɪkt/', pos: 'n', meaning: 'môn học', group: 'Trường lớp', example: "What's your favourite subject?", exampleVi: 'Môn học yêu thích của bạn là gì?' },
  { word: 'Maths', ipa: '/mæθs/', pos: 'n', meaning: 'môn Toán', group: 'Các môn học', example: 'I have Maths four times a week.', exampleVi: 'Mình có môn Toán 4 lần một tuần.' },
  { word: 'Science', ipa: '/ˈsaɪəns/', pos: 'n', meaning: 'môn Khoa học', group: 'Các môn học', example: 'How often do you have Science?', exampleVi: 'Bạn có môn Khoa học mấy lần?' },
  { word: 'IT', ipa: '/ˌaɪ ˈtiː/', pos: 'n', meaning: 'môn Tin học (CNTT)', group: 'Các môn học', example: 'I like Maths and IT.', exampleVi: 'Mình thích môn Toán và Tin học.', tip: 'Viết tắt của Information Technology.' },
  { word: 'Art', ipa: '/ɑːt/', pos: 'n', meaning: 'môn Mỹ thuật', group: 'Các môn học', example: 'Mary has Art once a week.', exampleVi: 'Mary có môn Mỹ thuật 1 lần 1 tuần.' },
  { word: 'Music', ipa: '/ˈmjuːzɪk/', pos: 'n', meaning: 'môn Âm nhạc', group: 'Các môn học', example: 'Does she like Music?', exampleVi: 'Cô ấy có thích môn Âm nhạc không?' },
  { word: 'English', ipa: '/ˈɪŋɡlɪʃ/', pos: 'n', meaning: 'môn Tiếng Anh', group: 'Các môn học', example: 'English is my favourite subject.', exampleVi: 'Tiếng Anh là môn yêu thích của mình.' },
  { word: 'Vietnamese', ipa: '/ˌvjetnəˈmiːz/', pos: 'n', meaning: 'môn Tiếng Việt', group: 'Các môn học', example: 'We have Vietnamese every school day.', exampleVi: 'Chúng mình có môn Tiếng Việt mỗi ngày đi học.' },
  { word: 'PE', ipa: '/ˌpiː ˈiː/', pos: 'n', meaning: 'môn Thể dục', group: 'Các môn học', example: 'She studies PE in the gym.', exampleVi: 'Bạn ấy học Thể dục trong phòng tập.', tip: 'Viết tắt của Physical Education.' },
  { word: 'trip', ipa: '/trɪp/', pos: 'n', meaning: 'chuyến đi', group: 'Từ dùng trong câu', example: 'We had a school trip last week.', exampleVi: 'Chúng mình có chuyến đi dã ngoại tuần trước.' },
  { word: 'lesson', ipa: '/ˈlesn/', pos: 'n', meaning: 'tiết học, bài học', group: 'Trường lớp', example: 'How many lessons do you have today?', exampleVi: 'Hôm nay bạn có bao nhiêu tiết học?' },
  { word: 'still', ipa: '/stɪl/', pos: 'adv', meaning: 'vẫn còn', group: 'Từ dùng trong câu', example: 'I am still at school.', exampleVi: 'Mình vẫn đang ở trường.' },
  { word: 'pupil', ipa: '/ˈpjuːpl/', pos: 'n', meaning: 'học sinh tiểu học', group: 'Trường lớp', example: 'Minh is a primary pupil.', exampleVi: 'Minh là học sinh tiểu học.' },
  { word: 'again', ipa: '/əˈɡen/', pos: 'adv', meaning: 'lại, một lần nữa', group: 'Từ dùng trong câu', example: 'See you again tomorrow!', exampleVi: 'Hẹn gặp lại bạn ngày mai nhé!' },
  { word: 'talk', ipa: '/tɔːk/', pos: 'v', meaning: 'nói chuyện', group: 'Từ dùng trong câu', example: 'Let us talk about our timetable.', exampleVi: 'Cùng nói về thời khóa biểu của chúng mình.' },
];

export const U6_VOCAB_PAGE41: PageVocabWord[] = [
  { word: 'break time', ipa: '/breɪk taɪm/', pos: 'n', meaning: 'giờ ra chơi, giờ giải lao', group: 'Thời khóa biểu', example: 'We play badminton at break time.', exampleVi: 'Chúng mình chơi cầu lông vào giờ ra chơi.' },
  { word: 'school day', ipa: '/skuːl deɪ/', pos: 'n', meaning: 'ngày đi học (Thứ 2 – Thứ 6)', group: 'Thời khóa biểu', example: 'I go to school every school day.', exampleVi: 'Mình đi học vào mọi ngày trong tuần.' },
  { word: 'weekend day', ipa: '/ˌwiːkˈend deɪ/', pos: 'n', meaning: 'ngày cuối tuần (Thứ 7, CN)', group: 'Thời khóa biểu', example: 'Saturday and Sunday are weekend days.', exampleVi: 'Thứ Bảy và Chủ Nhật là ngày cuối tuần.' },
  { word: 'except', ipa: '/ɪkˈsept/', pos: 'prep', meaning: 'ngoại trừ', group: 'Thời khóa biểu', example: 'I go to school every day except Saturday and Sunday.', exampleVi: 'Mình đi học mỗi ngày trừ Thứ Bảy và Chủ Nhật.' },
  { word: 'start', ipa: '/stɑːt/', pos: 'v', meaning: 'bắt đầu', group: 'Thời khóa biểu', example: 'Our first lesson starts at 7:30.', exampleVi: 'Tiết đầu tiên bắt đầu lúc 7 giờ 30.' },
  { word: 'August', ipa: '/ˈɔːɡəst/', pos: 'n', meaning: 'tháng Tám', group: 'Thời khóa biểu', example: 'The new school year starts soon after August.', exampleVi: 'Năm học mới sắp bắt đầu sau tháng Tám.' },
  { word: 'primary school', ipa: '/ˈpraɪməri skuːl/', pos: 'n', meaning: 'trường tiểu học', group: 'Thời khóa biểu', example: 'I study at Nguyen Trai Primary School.', exampleVi: 'Mình học ở trường Tiểu học Nguyễn Trãi.' },
  { word: 'timetable', ipa: '/ˈtaɪmteɪbl/', pos: 'n', meaning: 'thời khóa biểu', group: 'Thời khóa biểu', example: 'Look at my school timetable!', exampleVi: 'Nhìn thời khóa biểu của mình này!' },
];
