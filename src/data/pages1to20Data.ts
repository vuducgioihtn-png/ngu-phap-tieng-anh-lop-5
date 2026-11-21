export interface PageMeta {
  page: number;
  unit: 0 | 1 | 2 | 3;
  title: string;
  subtitle: string;
  sectionTag: string;
}

export interface PageVocabWord {
  word: string;
  ipa: string;
  pos: string;
  meaning: string;
  group: string;
  example: string;
  exampleVi: string;
  tip?: string;
}

export interface QuizChoiceItem {
  id: string;
  prompt: string;
  underlinedWord?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface FillItem {
  id: string;
  before: string;
  after?: string;
  hint: string;
  iconKey: string;
  answers: string[];
  explanation: string;
}

export interface DialogueOrderItem {
  key: string;
  speaker: string;
  text: string;
  textVi: string;
  correctStep: number; // 0 is given
}

export interface ParagraphBlank {
  id: string;
  index: number;
  answers: string[];
  hint: string;
  iconKey?: string;
}

export interface OrderSentenceItem {
  id: string;
  words: string[];
  answer: string;
  meaning: string;
  explanation: string;
}

export interface GuidedWritingPrompt {
  id: string;
  question: string;
  starter: string;
  sample: string;
  placeholder: string;
}

export const PAGES_1_TO_20_INDEX: PageMeta[] = [
  { page: 1, unit: 0, title: 'Bìa sách & Bản đồ học Trang 1–20', subtitle: 'Tổng quan lộ trình Unit 1, Unit 2 và mở đầu Unit 3', sectionTag: 'Giới thiệu' },
  { page: 2, unit: 1, title: 'Unit 1 · Từ vựng địa chỉ & nơi ở (Phần 1)', subtitle: '17 từ vựng cốt lõi về nhà cửa, đường phố và quê hương', sectionTag: 'Từ vựng' },
  { page: 3, unit: 1, title: 'Unit 1 · Từ vựng (Phần 2) & Giới từ ON / IN / AT', subtitle: '7 tính từ miêu tả nơi ở + sơ đồ trực quan ON / IN / AT & cách viết địa chỉ', sectionTag: 'Từ vựng · Ngữ pháp' },
  { page: 4, unit: 1, title: 'Unit 1 · Mẫu câu hỏi địa chỉ, nơi sống & Task 1', subtitle: 'What’s your address? · Where do/does... live? · Bảng đổi Phường/Quận', sectionTag: 'Ngữ pháp · Thực hành' },
  { page: 5, unit: 1, title: 'Unit 1 · Task 1, Task 2 (Đoán từ) & Task 3 (Trắc nghiệm)', subtitle: 'Hoàn thành trọn vẹn 3 dạng bài tập từ vựng & ngữ pháp', sectionTag: 'Bài tập' },
  { page: 6, unit: 1, title: 'Unit 1 · Task 4 (Đọc hiểu Phong), Task 5 (Xếp hội thoại) & Task 6', subtitle: 'Đọc hiểu Đúng/Sai, ghép hội thoại Tony – cô Hà và nhìn hình điền từ', sectionTag: 'Đọc · Giao tiếp' },
  { page: 7, unit: 1, title: 'Unit 1 · Task 6 (tiếp) & Task 7 (Sắp xếp 7 câu đầu)', subtitle: 'Luyện ghép câu hỏi – trả lời địa chỉ và nơi ở bằng thẻ từ', sectionTag: 'Viết câu' },
  { page: 8, unit: 1, title: 'Unit 1 · Task 7 (câu 8–10) & Task 8 (Đoạn văn Jack)', subtitle: 'Hoàn tất 10 câu sắp xếp và điền từ kể chuyện bạn Jack từ Canada', sectionTag: 'Đọc · Viết' },
  { page: 9, unit: 1, title: 'Unit 1 · Task 9 (Tìm lỗi sai) & Task 10 (Viết về bạn thân)', subtitle: 'Bắt lỗi ngữ pháp hay gặp và tự viết đoạn giới thiệu bạn của em', sectionTag: 'Tổng ôn Unit 1' },
  { page: 10, unit: 2, title: 'Unit 2 · Từ vựng thói quen hàng ngày (Phần 1)', subtitle: '17 từ & cụm động từ sinh hoạt từ sáng tới tối', sectionTag: 'Từ vựng' },
  { page: 11, unit: 2, title: 'Unit 2 · Từ vựng (Phần 2) & Thước đo tần suất', subtitle: '14 từ mở rộng + thước đo trực quan 7 ngày (always → never)', sectionTag: 'Từ vựng · Ngữ pháp' },
  { page: 12, unit: 2, title: 'Unit 2 · Quy tắc vị trí trạng từ & Mẫu câu hỏi thói quen', subtitle: 'Trạng từ đứng TRƯỚC động từ thường, SAU to be · Giới từ on / in', sectionTag: 'Ngữ pháp' },
  { page: 13, unit: 2, title: 'Unit 2 · Hỏi "How often...?" & Task 1 (Phát âm)', subtitle: 'Cách nói once / twice / three times a week & luyện nghe phát âm gạch chân', sectionTag: 'Ngữ pháp · Phát âm' },
  { page: 14, unit: 2, title: 'Unit 2 · Task 2 (Trắc nghiệm) & Task 3 (Đoán từ theo hình)', subtitle: 'Chia động từ hiện tại đơn và đoán từ qua mô tả trực quan', sectionTag: 'Bài tập' },
  { page: 15, unit: 2, title: 'Unit 2 · Task 4 (Daisy), Task 5 (Xếp hội thoại) & Task 6', subtitle: 'Đọc hiểu một ngày của Daisy, xếp hội thoại Nam – thầy Tuấn, điền thoại Adam – Susan', sectionTag: 'Đọc · Giao tiếp' },
  { page: 16, unit: 2, title: 'Unit 2 · Task 7 (Một ngày của Joe) & Task 8 (Nhìn lịch điền từ)', subtitle: 'Đọc tranh hoàn thành đoạn văn Joe & nhìn bảng tích ngày viết trạng từ tần suất', sectionTag: 'Trực quan' },
  { page: 17, unit: 2, title: 'Unit 2 · Task 8 (tiếp), Task 9 (Sắp xếp) & Task 10 (Viết)', subtitle: 'Ghép 4 câu chuẩn về thói quen & tự viết đoạn văn về bạn thân', sectionTag: 'Tổng ôn Unit 2' },
  { page: 18, unit: 3, title: 'Unit 3 · Từ vựng kỳ nghỉ & địa điểm (Phần 1)', subtitle: '17 từ vựng về chuyến đi, đảo, vịnh, kinh thành và nhà ga', sectionTag: 'Từ vựng' },
  { page: 19, unit: 3, title: 'Unit 3 · Từ vựng phương tiện (Phần 2) & Quá khứ đơn', subtitle: '11 từ phương tiện & gia đình + mẫu câu Where did you go / What did you do?', sectionTag: 'Từ vựng · Ngữ pháp' },
  { page: 20, unit: 3, title: 'Unit 3 · Hỏi phương tiện "How did you get there?" & Task 1', subtitle: 'Quy tắc dùng "by + phương tiện" & nối 5 câu đố phương tiện với hình minh họa', sectionTag: 'Ngữ pháp · Ghép hình' },
];

// ================= UNIT 1 (PAGES 2–9) =================

export const U1_VOCAB_PAGE2: PageVocabWord[] = [
  { word: 'address', ipa: '/əˈdres/', pos: 'n', meaning: 'địa chỉ', group: 'Địa chỉ & Đường phố', example: "What's your address?", exampleVi: 'Địa chỉ của bạn là gì?', tip: 'Nhấn âm 2: ơ-DRES.' },
  { word: 'lane', ipa: '/leɪn/', pos: 'n', meaning: 'ngõ, hẻm nhỏ', group: 'Địa chỉ & Đường phố', example: 'I live in Lane 15.', exampleVi: 'Mình sống ở ngõ 15.', tip: 'Đường hẹp, ngắn hơn street.' },
  { word: 'road', ipa: '/rəʊd/', pos: 'n', meaning: 'đường (trong làng, ngoại ô)', group: 'Địa chỉ & Đường phố', example: 'It is a quiet village road.', exampleVi: 'Đó là con đường làng yên tĩnh.' },
  { word: 'street', ipa: '/striːt/', pos: 'n', meaning: 'đường phố (trong thành phố)', group: 'Địa chỉ & Đường phố', example: 'My house is at 20 Quang Trung Street.', exampleVi: 'Nhà mình ở số 20 đường Quang Trung.' },
  { word: 'flat', ipa: '/flæt/', pos: 'n', meaning: 'căn hộ (chung cư)', group: 'Nhà ở & Địa danh', example: 'Their flat is big with five rooms.', exampleVi: 'Căn hộ của họ rộng và có 5 phòng.' },
  { word: 'tower', ipa: '/ˈtaʊə(r)/', pos: 'n', meaning: 'tòa tháp, nhà cao tầng', group: 'Nhà ở & Địa danh', example: 'He lives on the sixth floor of Xuan Mai Tower.', exampleVi: 'Cậu ấy sống ở tầng 6 tòa tháp Xuân Mai.' },
  { word: 'village', ipa: '/ˈvɪlɪdʒ/', pos: 'n', meaning: 'ngôi làng', group: 'Nhà ở & Địa danh', example: 'My grandparents live in a small village.', exampleVi: 'Ông bà mình sống ở một ngôi làng nhỏ.' },
  { word: 'mountain', ipa: '/ˈmaʊntən/', pos: 'n', meaning: 'ngọn núi', group: 'Nhà ở & Địa danh', example: 'He lived in a house in the mountains.', exampleVi: 'Cậu ấy từng sống trong ngôi nhà trên núi.' },
  { word: 'district', ipa: '/ˈdɪstrɪkt/', pos: 'n', meaning: 'quận, huyện', group: 'Đơn vị hành chính', example: 'I live in Hoan Kiem District.', exampleVi: 'Mình sống ở quận Hoàn Kiếm.' },
  { word: 'province', ipa: '/ˈprɒvɪns/', pos: 'n', meaning: 'tỉnh', group: 'Đơn vị hành chính', example: 'Quang Binh Province is very beautiful.', exampleVi: 'Tỉnh Quảng Bình rất đẹp.' },
  { word: 'country', ipa: '/ˈkʌntri/', pos: 'n', meaning: 'đất nước', group: 'Đơn vị hành chính', example: 'Viet Nam is a lovely country.', exampleVi: 'Việt Nam là một đất nước đáng yêu.' },
  { word: 'hometown', ipa: '/ˈhəʊmtaʊn/', pos: 'n', meaning: 'quê hương', group: 'Đơn vị hành chính', example: 'His hometown is Da Nang City.', exampleVi: 'Quê hương của cậu ấy là thành phố Đà Nẵng.' },
  { word: 'where', ipa: '/weə(r)/', pos: 'adv', meaning: 'ở đâu', group: 'Từ dùng trong câu', example: 'Where do you live?', exampleVi: 'Bạn sống ở đâu?' },
  { word: 'from', ipa: '/frəm/', pos: 'prep', meaning: 'đến từ / cách xa', group: 'Từ dùng trong câu', example: 'He comes from Canada.', exampleVi: 'Cậu ấy đến từ Canada.' },
  { word: 'pupil', ipa: '/ˈpjuːpl/', pos: 'n', meaning: 'học sinh (tiểu học)', group: 'Từ dùng trong câu', example: 'I am a new pupil in Class 5A.', exampleVi: 'Mình là học sinh mới của lớp 5A.' },
  { word: 'live', ipa: '/lɪv/', pos: 'v', meaning: 'sinh sống', group: 'Từ dùng trong câu', example: 'Where does she live?', exampleVi: 'Cô ấy sống ở đâu?' },
  { word: 'busy', ipa: '/ˈbɪzi/', pos: 'adj', meaning: 'bận rộn, nhộn nhịp', group: 'Tính từ miêu tả', example: 'The city is always busy.', exampleVi: 'Thành phố lúc nào cũng nhộn nhịp.', tip: 'Đọc là BI-zi (không đọc bu-si!).' },
];

export const U1_VOCAB_PAGE3: PageVocabWord[] = [
  { word: 'far', ipa: '/fɑː(r)/', pos: 'adj', meaning: 'xa xôi', group: 'Tính từ miêu tả', example: 'His flat is far from the city centre.', exampleVi: 'Căn hộ của cậu ấy xa trung tâm thành phố.', tip: 'Luôn đi cặp "far from" (xa đâu đó).' },
  { word: 'quiet', ipa: '/ˈkwaɪət/', pos: 'adj', meaning: 'yên tĩnh', group: 'Tính từ miêu tả', example: 'It is a small and quiet village.', exampleVi: 'Đó là một ngôi làng nhỏ và yên tĩnh.' },
  { word: 'crowded', ipa: '/ˈkraʊdɪd/', pos: 'adj', meaning: 'đông đúc', group: 'Tính từ miêu tả', example: 'She lives in a crowded street.', exampleVi: 'Cô ấy sống trên một con phố đông đúc.' },
  { word: 'large', ipa: '/lɑːdʒ/', pos: 'adj', meaning: 'rộng lớn', group: 'Tính từ miêu tả', example: 'My school has a large yard.', exampleVi: 'Trường mình có một sân chơi rộng lớn.' },
  { word: 'small', ipa: '/smɔːl/', pos: 'adj', meaning: 'nhỏ, hẹp', group: 'Tính từ miêu tả', example: 'I lived in a small town near London.', exampleVi: 'Mình từng sống ở thị trấn nhỏ gần Luân Đôn.' },
  { word: 'pretty', ipa: '/ˈprɪti/', pos: 'adj', meaning: 'xinh xắn', group: 'Tính từ miêu tả', example: 'Her flat is pretty and big.', exampleVi: 'Căn hộ của cô ấy xinh xắn và rộng.' },
  { word: 'beautiful', ipa: '/ˈbjuːtɪfl/', pos: 'adj', meaning: 'đẹp', group: 'Tính từ miêu tả', example: 'I live in a beautiful house near West Lake.', exampleVi: 'Mình sống trong ngôi nhà đẹp gần Hồ Tây.' },
];

export const U1_ADDRESS_NOTES = [
  { vi: 'phường Tân Định', en: 'Tan Dinh Ward', note: 'Tên chữ đặt TRƯỚC Ward' },
  { vi: 'phường 3', en: 'Ward 3', note: 'Tên số đặt SAU Ward' },
  { vi: 'phường Bến Nghé', en: 'Ben Nghe Quarter', note: 'Quarter cũng dùng chỉ phường' },
  { vi: 'quận Tân Phú', en: 'Tan Phu District', note: 'Tên chữ đặt TRƯỚC District' },
  { vi: 'quận 1', en: 'District 1', note: 'Tên số đặt SAU District' },
  { vi: 'huyện Củ Chi', en: 'Cu Chi District', note: 'Quận và huyện đều dùng District' },
  { vi: 'tỉnh Quảng Bình', en: 'Quang Binh Province', note: 'Tên tỉnh đặt TRƯỚC Province' },
  { vi: 'Thành phố Nha Trang', en: 'Nha Trang City', note: 'Tên thành phố đặt TRƯỚC City' },
];

export const U1_TASK1_ODD: QuizChoiceItem[] = [
  { id: 'p4-u1t1-1', prompt: 'Câu 1. Chọn từ khác loại:', options: ['new', 'village road', 'floor', 'address'], correctIndex: 0, explanation: '“new” (mới) là tính từ; village road, floor, address đều là danh từ.' },
  { id: 'p4-u1t1-2', prompt: 'Câu 2. Chọn từ khác loại:', options: ['lane', 'street', 'city tower', 'pupil'], correctIndex: 3, explanation: '“pupil” (học sinh) là danh từ chỉ người; 3 từ còn lại chỉ địa điểm/nơi chốn.' },
  { id: 'p5-u1t1-3', prompt: 'Câu 3. Chọn từ khác loại:', options: ['district', 'quiet', 'hometown', 'island'], correctIndex: 1, explanation: '“quiet” (yên tĩnh) là tính từ; district, hometown, island là danh từ.' },
  { id: 'p5-u1t1-4', prompt: 'Câu 4. Chọn từ khác loại:', options: ['small', 'beautiful', 'like', 'busy'], correctIndex: 2, explanation: '“like” (thích / như là) không phải tính từ miêu tả như small, beautiful, busy.' },
  { id: 'p5-u1t1-5', prompt: 'Câu 5. Chọn từ khác loại:', options: ['island', 'town', 'city', 'crowded'], correctIndex: 3, explanation: '“crowded” (đông đúc) là tính từ; island, town, city là danh từ chỉ nơi ở.' },
];

export const U1_TASK2_DEFS: FillItem[] = [
  { id: 'p5-u1t2-1', before: "1. It's a tall building with many floors.", hint: 'Tòa tháp cao nhiều tầng (bắt đầu bằng t...)', iconKey: 'tower', answers: ['tower'], explanation: 'tower = tòa tháp, tòa nhà cao nhiều tầng.' },
  { id: 'p5-u1t2-2', before: "2. It's a long and narrow road.", hint: 'Con ngõ nhỏ và dài (bắt đầu bằng l...)', iconKey: 'lane', answers: ['lane'], explanation: 'lane = con ngõ, hẻm nhỏ hẹp.' },
  { id: 'p5-u1t2-3', before: '3. It is a small town in the countryside.', hint: 'Ngôi làng ở vùng quê (bắt đầu bằng v...)', iconKey: 'village', answers: ['village'], explanation: 'village = ngôi làng nhỏ ở nông thôn.' },
  { id: 'p5-u1t2-4', before: '4. It tells you where a person lives.', hint: 'Địa chỉ nhà (bắt đầu bằng a...)', iconKey: 'address', answers: ['address'], explanation: 'address = địa chỉ (cho biết một người sống ở đâu).' },
];

export const U1_TASK3_MC: QuizChoiceItem[] = [
  { id: 'p5-u1t3-1', prompt: '1. Hanoi is a big _____ in the north.', options: ['street', 'town', 'city', 'lane'], correctIndex: 2, explanation: 'Hà Nội là thành phố lớn (big city) ở miền Bắc.' },
  { id: 'p5-u1t3-2', prompt: '2. She lives in a crowded _____ in Ho Chi Minh City.', options: ['street', 'city', 'village', 'lane'], correctIndex: 0, explanation: '“a crowded street” = một con phố đông đúc trong TP. Hồ Chí Minh.' },
  { id: 'p5-u1t3-3', prompt: '3. His flat is far _____ the city centre.', options: ['from', 'to', 'with', 'of'], correctIndex: 0, explanation: 'Cụm cố định: “far from” = cách xa nơi nào đó.' },
  { id: 'p5-u1t3-4', prompt: '4. There are two tall _____ in my street.', options: ['tower', 'towers', 'town', 'towns'], correctIndex: 1, explanation: 'Có số đếm “two” + tính từ “tall” (cao) → danh từ số nhiều “towers”.' },
  { id: 'p5-u1t3-5', prompt: '5. What subject is he _____ now? — Vietnamese.', options: ['to learn', 'learn', 'learning', 'learned'], correctIndex: 2, explanation: 'Có dấu hiệu “now” (ngay lúc này) + “is” → thì hiện tại tiếp diễn “learning”.' },
  { id: 'p5-u1t3-6', prompt: '6. _____ did she go yesterday morning? — She went to the supermarket.', options: ['What', 'Where', 'When', 'Why'], correctIndex: 1, explanation: 'Câu trả lời chỉ địa điểm (the supermarket) → dùng từ hỏi nơi chốn “Where”.' },
  { id: 'p5-u1t3-7', prompt: '7. Are you free _____ the evening? — Yes, I am.', options: ['in', 'on', 'at', 'to'], correctIndex: 0, explanation: 'Trước các buổi trong ngày luôn dùng giới từ “in”: in the morning / afternoon / evening.' },
];

export const U1_TASK4_READING = {
  passage:
    'Phong lives with his grandparents in Ha Noi. His address is 35, Hang Bai Street, Hoan Kiem District. The family lives on the sixth floor of Xuan Mai Tower. Their flat is big with five rooms. Phong likes his place because it is in the city centre and near his school.',
  passageVi:
    'Phong sống cùng ông bà ở Hà Nội. Địa chỉ của bạn là số 35, phố Hàng Bài, quận Hoàn Kiếm. Gia đình sống ở tầng 6 tòa tháp Xuân Mai. Căn hộ rộng với 5 phòng. Phong thích nơi ở của mình vì nó ở trung tâm thành phố và gần trường học.',
  example: '0. Phong lives with his grandparents in a small town. → False (Sai, vì Phong sống ở Hà Nội).',
  statements: [
    { id: 'p6-u1t4-1', text: '1. Xuan Mai Tower is at 35, Hang Bai Street, Hoan Kiem District.', isTrue: true, explanation: 'Đúng (True): Địa chỉ nhà Phong tại tòa nhà này là số 35 phố Hàng Bài, quận Hoàn Kiếm.' },
    { id: 'p6-u1t4-2', text: "2. Phong's flat is big with five rooms on the 6th floor.", isTrue: true, explanation: 'Đúng (True): Khớp chính xác “sixth floor” (tầng 6) và “big with five rooms”.' },
    { id: 'p6-u1t4-3', text: "3. Phong doesn't like living in the city centre.", isTrue: false, explanation: 'Sai (False): Bài viết nêu “Phong likes his place because it is in the city centre”.' },
    { id: 'p6-u1t4-4', text: "4. Phong's school is near Xuan Mai Tower.", isTrue: true, explanation: 'Đúng (True): Cuối đoạn văn nói nơi ở “near his school” (gần trường học).' },
  ],
};

export const U1_TASK5_DIALOGUE: DialogueOrderItem[] = [
  { key: 'C', speaker: 'Tony', text: "Good morning, Ms Ha. I'm in Hoan Kiem District. I'm your new pupil.", textVi: 'Chào buổi sáng cô Hà. Em ở quận Hoàn Kiếm. Em là học sinh mới của cô.', correctStep: 0 },
  { key: 'A', speaker: 'Tony', text: 'I lived in a small and pretty town near London.', textVi: 'Em đã sống ở một thị trấn nhỏ xinh gần Luân Đôn.', correctStep: 2 },
  { key: 'B', speaker: 'Ms Ha', text: 'And where do you live now in Ha Noi?', textVi: 'Thế bây giờ ở Hà Nội em sống ở đâu?', correctStep: 3 },
  { key: 'D', speaker: 'Ms Ha', text: 'Hi, Tony. Nice to meet you. Where did you live in England?', textVi: 'Chào Tony. Rất vui được gặp em. Ở nước Anh em từng sống ở đâu?', correctStep: 1 },
  { key: 'E', speaker: 'Tony', text: 'I live in a beautiful and quiet house near West Lake.', textVi: 'Em sống trong một ngôi nhà đẹp và yên tĩnh gần Hồ Tây.', correctStep: 4 },
];

export const U1_TASK6_LOOK_WRITE: FillItem[] = [
  { id: 'p6-u1t6-1', before: '1. His address is 10 South ', after: '.', hint: 'Con phố (bắt đầu bằng S...)', iconKey: 'street', answers: ['street'], explanation: '10 South Street = số 10 phố South.' },
  { id: 'p7-u1t6-2', before: '2. He lived in a house in the ', after: '.', hint: 'Những ngọn núi (số nhiều, bắt đầu bằng m...)', iconKey: 'mountains', answers: ['mountains', 'mountain'], explanation: 'in the mountains = ở vùng núi.' },
  { id: 'p7-u1t6-3', before: '3. She lives on the second floor of Ha Noi ', after: '.', hint: 'Tòa tháp (bắt đầu bằng T...)', iconKey: 'tower', answers: ['tower'], explanation: 'Ha Noi Tower = Tòa tháp Hà Nội.' },
  { id: 'p7-u1t6-4', before: '4. Her ', after: ' is pretty and big.', hint: 'Căn hộ chung cư (bắt đầu bằng f...)', iconKey: 'flat', answers: ['flat'], explanation: 'Her flat = Căn hộ của cô ấy.' },
];

export const U1_TASK7_ORDERS_P7: OrderSentenceItem[] = [
  { id: 'p7-u1t7-1', words: ['you', 'do', 'live', 'where', '?'], answer: 'Where do you live?', meaning: 'Bạn sống ở đâu?', explanation: 'Where + do + you + live?' },
  { id: 'p7-u1t7-2', words: ['your', 'is', 'what', 'address', '?'], answer: 'What is your address?', meaning: 'Địa chỉ của bạn là gì?', explanation: 'What + is + your address?' },
  { id: 'p7-u1t7-3', words: ['is', 'your', 'new', 'like', 'place', 'what', '?'], answer: 'What is your new place like?', meaning: 'Nơi ở mới của bạn như thế nào?', explanation: 'What + is + your new place + like?' },
  { id: 'p7-u1t7-4', words: ['hometown', 'what', 'is', 'your', 'like', '?'], answer: 'What is your hometown like?', meaning: 'Quê hương của bạn như thế nào?', explanation: 'What + is + your hometown + like?' },
  { id: 'p7-u1t7-5', words: ['56 Nguyen Trai', 'is', 'Street.', 'It'], answer: 'It is 56 Nguyen Trai Street.', meaning: 'Nó là số 56 đường Nguyễn Trãi.', explanation: 'It + is + số nhà + tên đường.' },
  { id: 'p7-u1t7-6', words: ['she', 'Where', 'does', 'live', '?'], answer: 'Where does she live?', meaning: 'Cô ấy sống ở đâu?', explanation: 'Where + does + she + live?' },
  { id: 'p7-u1t7-7', words: ['Danang', 'hometown', 'His', 'city.', 'is'], answer: 'His hometown is Danang city.', meaning: 'Quê hương của cậu ấy là thành phố Đà Nẵng.', explanation: 'His hometown + is + Danang city.' },
];

export const U1_TASK7_ORDERS_P8: OrderSentenceItem[] = [
  { id: 'p8-u1t7-8', words: ['small', 'quiet', 'village.', 'and', 'It', 'is', 'a'], answer: 'It is a quiet and small village.', meaning: 'Đó là một ngôi làng yên tĩnh và nhỏ bé.', explanation: 'It is + a + quiet and small (hoặc small and quiet) + village.' },
  { id: 'p8-u1t7-9', words: ['you', 'Do', 'your', 'live', 'with', 'parents', '?'], answer: 'Do you live with your parents?', meaning: 'Bạn có sống cùng bố mẹ không?', explanation: 'Do + you + live + with your parents?' },
  { id: 'p8-u1t7-10', words: ['are', 'modern', 'There', 'towers', 'my', 'in', 'city.'], answer: 'There are modern towers in my city.', meaning: 'Có nhiều tòa tháp hiện đại ở thành phố mình.', explanation: 'There are + modern towers + in my city.' },
];

export const U1_TASK8_PARAGRAPH_BLANKS: ParagraphBlank[] = [
  { id: 'p8-u1t8-1', index: 1, answers: ['mountains', 'mountain'], hint: 'vùng núi (m...)', iconKey: 'mountains' },
  { id: 'p8-u1t8-2', index: 2, answers: ['address'], hint: 'địa chỉ (a...)', iconKey: 'address' },
  { id: 'p8-u1t8-3', index: 3, answers: ['tower'], hint: 'tòa tháp (T...)', iconKey: 'tower' },
  { id: 'p8-u1t8-4', index: 4, answers: ['centre', 'center'], hint: 'trung tâm (c...)', iconKey: 'city' },
  { id: 'p8-u1t8-5', index: 5, answers: ['school'], hint: 'trường học (s...)', iconKey: 'school' },
];

export const U1_TASK9_MISTAKES: QuizChoiceItem[] = [
  { id: 'p9-u1t9-1', prompt: '1. I don’t [likes] [living] in the [city] because it’s [too] noisy.', options: ['A. likes', 'B. living', 'C. city', 'D. too'], correctIndex: 0, explanation: 'Sau trợ động từ “don’t” phải dùng động từ nguyên thể → sửa “likes” thành “like”.' },
  { id: 'p9-u1t9-2', prompt: '2. [There] are lots of [car] and [motorbikes] in [my] city.', options: ['A. There', 'B. car', 'C. motorbikes', 'D. my'], correctIndex: 1, explanation: 'Sau “lots of” (rất nhiều) danh từ đếm được phải ở số nhiều → sửa “car” thành “cars”.' },
  { id: 'p9-u1t9-3', prompt: '3. [Whats] the [mountain] like? — [It’s] high and [beautiful].', options: ['A. Whats', 'B. mountain', "C. It's", 'D. beautiful'], correctIndex: 0, explanation: 'Thiếu dấu nháy đơn viết tắt của “What is” → sửa “Whats” thành “What’s”.' },
];

export const U1_TASK10_WRITING: GuidedWritingPrompt[] = [
  { id: 'p9-w0', question: "0. What's his/her name?", starter: 'My friend is', sample: 'Minh', placeholder: 'Tên bạn của em (vd: Minh)' },
  { id: 'p9-w1', question: "1. What's his/her address?", starter: 'He/She lives', sample: 'at 25 Tran Phu Street, Ha Noi', placeholder: 'at + số nhà, tên đường...' },
  { id: 'p9-w2', question: "2. What's his/her home like?", starter: 'His/Her home', sample: 'is big, pretty and quiet', placeholder: 'is big / small / quiet...' },
  { id: 'p9-w3', question: '3. Who does he/she live with?', starter: 'He/She', sample: 'lives with his parents and younger sister', placeholder: 'lives with his/her parents...' },
  { id: 'p9-w4', question: '4. Does he/she like his/her hometown? Why/Why not?', starter: 'He/She', sample: 'likes his hometown because it is peaceful and friendly', placeholder: 'likes it because...' },
];

// ================= UNIT 2 (PAGES 10–17) =================

export const U2_VOCAB_PAGE10: PageVocabWord[] = [
  { word: 'get up', ipa: '/ɡet ʌp/', pos: 'v', meaning: 'thức dậy', group: 'Sinh hoạt buổi sáng', example: 'I always get up early.', exampleVi: 'Mình luôn thức dậy sớm.' },
  { word: 'wash the face', ipa: '/wɒʃ ðə feɪs/', pos: 'v', meaning: 'rửa mặt', group: 'Sinh hoạt buổi sáng', example: 'I wash my face every morning.', exampleVi: 'Mình rửa mặt mỗi sáng.' },
  { word: 'brush the teeth', ipa: '/brʌʃ ðə tiːθ/', pos: 'v', meaning: 'đánh răng', group: 'Sinh hoạt buổi sáng', example: 'I always brush my teeth.', exampleVi: 'Mình luôn luôn đánh răng.' },
  { word: 'have breakfast', ipa: '/hæv ˈbrekfəst/', pos: 'v', meaning: 'ăn sáng', group: 'Sinh hoạt buổi sáng', example: 'I have breakfast at 6:30.', exampleVi: 'Mình ăn sáng lúc 6 giờ 30.' },
  { word: 'do morning exercises', ipa: '/duː ˈmɔːnɪŋ ˈeksəsaɪzɪz/', pos: 'v', meaning: 'tập thể dục buổi sáng', group: 'Sinh hoạt buổi sáng', example: 'They do morning exercises in the yard.', exampleVi: 'Họ tập thể dục buổi sáng ngoài sân.' },
  { word: 'go to school', ipa: '/ɡəʊ tə skuːl/', pos: 'v', meaning: 'đi học', group: 'Học tập & Di chuyển', example: 'I go to school from Monday to Friday.', exampleVi: 'Mình đi học từ thứ Hai đến thứ Sáu.' },
  { word: 'study', ipa: '/ˈstʌdi/', pos: 'v', meaning: 'học bài', group: 'Học tập & Di chuyển', example: 'I often study with a partner.', exampleVi: 'Mình thường học cùng bạn.' },
  { word: 'ride a bike', ipa: '/raɪd ə baɪk/', pos: 'v', meaning: 'đi xe đạp', group: 'Học tập & Di chuyển', example: 'Nancy often rides a bike to school.', exampleVi: 'Nancy thường đạp xe tới trường.' },
  { word: 'have lunch', ipa: '/hæv lʌntʃ/', pos: 'v', meaning: 'ăn trưa', group: 'Sinh hoạt chiều – tối', example: 'We have lunch at 11:30.', exampleVi: 'Chúng mình ăn trưa lúc 11 giờ 30.' },
  { word: 'have dinner', ipa: '/hæv ˈdɪnə(r)/', pos: 'v', meaning: 'ăn tối', group: 'Sinh hoạt chiều – tối', example: 'My family has dinner together.', exampleVi: 'Gia đình mình ăn tối cùng nhau.' },
  { word: 'watch television', ipa: '/wɒtʃ ˈtelɪvɪʒn/', pos: 'v', meaning: 'xem tivi', group: 'Sinh hoạt chiều – tối', example: 'He watches television after dinner.', exampleVi: 'Cậu ấy xem tivi sau bữa tối.' },
  { word: 'cook', ipa: '/kʊk/', pos: 'v', meaning: 'nấu ăn', group: 'Sinh hoạt chiều – tối', example: 'I usually cook dinner after school.', exampleVi: 'Mình thường nấu bữa tối sau giờ học.' },
  { word: 'homework', ipa: '/ˈhəʊmwɜːk/', pos: 'n', meaning: 'bài tập về nhà', group: 'Học tập & Di chuyển', example: 'I always do my homework.', exampleVi: 'Mình luôn làm bài tập về nhà.' },
  { word: 'online', ipa: '/ˌɒnˈlaɪn/', pos: 'adv', meaning: 'trực tuyến', group: 'Học tập & Di chuyển', example: 'I chat with my friends online.', exampleVi: 'Mình trò chuyện trực tuyến với bạn bè.' },
  { word: 'early', ipa: '/ˈɜːli/', pos: 'adv', meaning: 'sớm', group: 'Thời gian & Tần suất', example: 'She always goes to bed early.', exampleVi: 'Cô ấy luôn đi ngủ sớm.' },
  { word: 'always', ipa: '/ˈɔːlweɪz/', pos: 'adv', meaning: 'luôn luôn (7/7 ngày)', group: 'Thời gian & Tần suất', example: 'I always get up early.', exampleVi: 'Mình luôn thức dậy sớm.' },
  { word: 'often', ipa: '/ˈɒfn/', pos: 'adv', meaning: 'thường (4–5/7 ngày)', group: 'Thời gian & Tần suất', example: 'What does she often do in the morning?', exampleVi: 'Cô ấy thường làm gì vào buổi sáng?' },
];

export const U2_VOCAB_PAGE11: PageVocabWord[] = [
  { word: 'usually', ipa: '/ˈjuːʒuəli/', pos: 'adv', meaning: 'thường xuyên (6/7 ngày)', group: 'Trạng từ tần suất', example: 'We usually go to the zoo on Sundays.', exampleVi: 'Chúng mình thường đi sở thú vào Chủ nhật.' },
  { word: 'sometimes', ipa: '/ˈsʌmtaɪmz/', pos: 'adv', meaning: 'thỉnh thoảng (3/7 ngày)', group: 'Trạng từ tần suất', example: 'I sometimes play sports in the evening.', exampleVi: 'Thỉnh thoảng mình chơi thể thao buổi tối.' },
  { word: 'seldom', ipa: '/ˈseldəm/', pos: 'adv', meaning: 'hiếm khi (1–2/7 ngày)', group: 'Trạng từ tần suất', example: 'He is seldom sick.', exampleVi: 'Cậu ấy hiếm khi bị ốm.' },
  { word: 'never', ipa: '/ˈnevə(r)/', pos: 'adv', meaning: 'không bao giờ (0/7 ngày)', group: 'Trạng từ tần suất', example: 'I never surf the internet at night.', exampleVi: 'Mình không bao giờ lướt mạng ban đêm.' },
  { word: 'talk', ipa: '/tɔːk/', pos: 'v', meaning: 'nói chuyện', group: 'Giao tiếp & Thời gian', example: 'I talk with my friends at break time.', exampleVi: 'Mình nói chuyện với bạn giờ ra chơi.' },
  { word: 'after', ipa: '/ˈɑːftə(r)/', pos: 'prep', meaning: 'sau khi, sau', group: 'Giao tiếp & Thời gian', example: 'What do you do after school?', exampleVi: 'Bạn làm gì sau giờ học?' },
  { word: 'before', ipa: '/bɪˈfɔː(r)/', pos: 'prep', meaning: 'trước khi, trước', group: 'Giao tiếp & Thời gian', example: 'Brush your teeth before going to bed.', exampleVi: 'Đánh răng trước khi đi ngủ nhé.' },
  { word: 'surf the internet', ipa: '/sɜːf ði ˈɪntənet/', pos: 'v', meaning: 'truy cập / lướt Internet', group: 'Học tập & Công nghệ', example: 'He surfs the internet to find information.', exampleVi: 'Cậu ấy lướt mạng tìm thông tin.' },
  { word: 'look for', ipa: '/lʊk fɔː(r)/', pos: 'v', meaning: 'tìm kiếm', group: 'Học tập & Công nghệ', example: 'I look for new words online.', exampleVi: 'Mình tìm kiếm từ mới trên mạng.' },
  { word: 'information', ipa: '/ˌɪnfəˈmeɪʃn/', pos: 'n', meaning: 'thông tin', group: 'Học tập & Công nghệ', example: 'We need information for our project.', exampleVi: 'Chúng mình cần thông tin cho dự án.' },
  { word: 'project', ipa: '/ˈprɒdʒekt/', pos: 'n', meaning: 'dự án, bài tập nhóm', group: 'Học tập & Công nghệ', example: 'We work together on an English project.', exampleVi: 'Chúng mình làm chung dự án Tiếng Anh.' },
  { word: 'library', ipa: '/ˈlaɪbrəri/', pos: 'n', meaning: 'thư viện', group: 'Học tập & Công nghệ', example: 'We go to the library once a week.', exampleVi: 'Chúng mình đi thư viện 1 lần 1 tuần.' },
  { word: 'week', ipa: '/wiːk/', pos: 'n', meaning: 'tuần lễ', group: 'Thời gian', example: 'I play football twice a week.', exampleVi: 'Mình đá bóng 2 lần một tuần.' },
  { word: 'month', ipa: '/mʌnθ/', pos: 'n', meaning: 'tháng', group: 'Thời gian', example: 'We visit Grandma once a month.', exampleVi: 'Chúng mình thăm bà 1 lần một tháng.' },
];

export const FREQUENCY_LADDER = [
  { word: 'always', vi: 'luôn luôn', days: 7, percent: 100, color: 'bg-emerald-600', example: 'I always get up early.' },
  { word: 'usually', vi: 'thường xuyên', days: 6, percent: 85, color: 'bg-sky-600', example: 'We usually go to the zoo on Sundays.' },
  { word: 'often', vi: 'thường', days: 5, percent: 70, color: 'bg-cyan-600', example: 'She often gets up early in the morning.' },
  { word: 'sometimes', vi: 'thỉnh thoảng', days: 3, percent: 45, color: 'bg-amber-500', example: 'I sometimes play football on Sunday.' },
  { word: 'seldom / rarely', vi: 'hiếm khi', days: 1, percent: 15, color: 'bg-orange-500', example: 'He rarely stays at home in the afternoon.' },
  { word: 'never', vi: 'không bao giờ', days: 0, percent: 0, color: 'bg-rose-500', example: 'I never surf the internet at night.' },
];

export const U2_TASK1_PHONETICS: QuizChoiceItem[] = [
  { id: 'p13-u2t1-1', prompt: '1. Tìm từ có chữ "y" phát âm khác:', options: ['early (/i/)', 'my (/aɪ/)', 'usually (/i/)', 'city (/i/)'], correctIndex: 1, explanation: '“my” đọc là /maɪ/ (âm /aɪ/), còn early, usually, city có đuôi -y đọc là /i/.' },
  { id: 'p13-u2t1-2', prompt: '2. Tìm từ có chữ "a" phát âm khác:', options: ['always (/eɪ/)', 'play (/eɪ/)', 'have (/æ/)', 'face (/eɪ/)'], correctIndex: 2, explanation: '“have” đọc là /hæv/ (âm /æ/), còn always, play, face đều có vần /eɪ/.' },
  { id: 'p13-u2t1-3', prompt: '3. Tìm từ có chữ "i" phát âm khác:', options: ['like (/aɪ/)', 'evening (/ɪ/)', 'dinner (/ɪ/)', 'film (/ɪ/)'], correctIndex: 0, explanation: '“like” đọc là /laɪk/ (âm /aɪ/), còn evening, dinner, film đọc âm /ɪ/.' },
  { id: 'p13-u2t1-4', prompt: '4. Tìm từ có chữ "u" phát âm khác:', options: ['study (/ʌ/)', 'surf (/ɜː/)', 'up (/ʌ/)', 'bus (/ʌ/)'], correctIndex: 1, explanation: '“surf” đọc là /sɜːf/ (âm /ɜː/), còn study, up, bus đều đọc âm /ʌ/.' },
  { id: 'p13-u2t1-5', prompt: '5. Tìm từ có chữ "i" phát âm khác:', options: ['kind (/aɪ/)', 'ride (/aɪ/)', 'twice (/aɪ/)', 'fishing (/ɪ/)'], correctIndex: 3, explanation: '“fishing” đọc là /ˈfɪʃɪŋ/ (âm /ɪ/), còn kind, ride, twice đọc âm /aɪ/.' },
];

export const U2_TASK2_MC: QuizChoiceItem[] = [
  { id: 'p14-u2t2-1', prompt: '1. They usually _____ early and do morning exercise.', options: ['gets on', 'get up', 'get on', 'gets up'], correctIndex: 1, explanation: '“They” là số nhiều → giữ nguyên động từ “get up” (thức dậy).' },
  { id: 'p14-u2t2-2', prompt: '2. What _____ you do after school? — I usually do my homework.', options: ['do', 'are', 'does', '(không điền)'], correctIndex: 0, explanation: 'Câu hỏi với động từ thường “do” và chủ ngữ “you” → mượn trợ động từ “do”.' },
  { id: 'p14-u2t2-3', prompt: '3. Mary often _____ TV after dinner with her parents.', options: ['watch', 'to watch', 'watches', 'watchs'], correctIndex: 2, explanation: 'Chủ ngữ ngôi 3 số ít “Mary” + động từ kết thúc bằng “ch” → thêm “-es”: watches.' },
  { id: 'p14-u2t2-4', prompt: '4. What does your mother _____ in the evening? — She _____ me with my homework.', options: ['do – help', 'do – helps', 'does – helps', 'does – help'], correctIndex: 1, explanation: 'Sau “does” dùng nguyên thể “do”; câu trả lời có “She” nên “help” thêm “s” → “helps”.' },
  { id: 'p14-u2t2-5', prompt: '5. I sometimes go to the sports centre with my friends _____ the afternoon.', options: ['on', 'at', 'with', 'in'], correctIndex: 3, explanation: 'Trước các buổi trong ngày luôn dùng giới từ “in”: in the afternoon.' },
];

export const U2_TASK3_DEFS: FillItem[] = [
  { id: 'p14-u2t3-1', before: "1. It's the first part of the day.", hint: 'Buổi sáng (bắt đầu bằng m...)', iconKey: 'sun', answers: ['morning'], explanation: 'morning = buổi sáng (phần đầu tiên trong ngày).' },
  { id: 'p14-u2t3-2', before: '2. You do something very often (7/7 days checked!).', hint: 'Luôn luôn (bắt đầu bằng a...)', iconKey: 'calendar7', answers: ['always'], explanation: 'always = luôn luôn (tích đủ cả 7 ngày trong tuần!).' },
  { id: 'p14-u2t3-3', before: '3. Your teacher gives it to you, and asks you to do it at home.', hint: 'Làm bài tập về nhà (homework / do homework)', iconKey: 'homework', answers: ['do homework', 'homework'], explanation: 'homework / do homework = bài tập về nhà.' },
  { id: 'p15-u2t3-4', before: '4. You and a classmate work together for a task.', hint: 'Học cùng bạn (study with a partner)', iconKey: 'partner', answers: ['study with a partner', 'study'], explanation: 'study with a partner = học nhóm / làm bài cùng bạn cùng lớp.' },
];

export const U2_TASK4_READING = {
  passage:
    'Daisy lives with her family in the centre of Ha Noi. She gets up at 5.30 in the morning. She often goes jogging with her father. After breakfast, she takes a bus to school. After school, she plays basketball with her friends three times a week. In the evening, she does her homework. Then she watches TV or reads books. She always goes to bed early.',
  passageVi:
    'Daisy sống cùng gia đình ở trung tâm Hà Nội. Bạn thức dậy lúc 5:30 sáng và thường đi chạy bộ cùng bố. Sau bữa sáng, bạn đi xe buýt tới trường. Tan học, bạn chơi bóng rổ với bạn bè 3 lần một tuần. Buổi tối bạn làm bài tập về nhà trước, sau đó mới xem TV hoặc đọc sách. Bạn luôn đi ngủ sớm.',
  example: '0. Daisy lives with her family in the countryside. → False (Sai, vì Daisy sống ở trung tâm Hà Nội).',
  statements: [
    { id: 'p15-u2t4-1', text: '1. She always gets up early.', isTrue: true, explanation: 'Đúng (True): Bạn ấy dậy từ 5:30 sáng mỗi ngày.' },
    { id: 'p15-u2t4-2', text: '2. She rides a bike to school.', isTrue: false, explanation: 'Sai (False): Bạn ấy đi xe buýt (“takes a bus to school”).' },
    { id: 'p15-u2t4-3', text: '3. She plays basketball three times a week.', isTrue: true, explanation: 'Đúng (True): Khớp chính xác “three times a week”.' },
    { id: 'p15-u2t4-4', text: '4. She often watches TV or reads books before she does her homework.', isTrue: false, explanation: 'Sai (False): Bạn ấy làm bài tập trước (“does her homework. Then she watches TV...”).' },
  ],
};

export const U2_TASK5_DIALOGUE: DialogueOrderItem[] = [
  { key: 'C', speaker: 'Nam', text: 'Good morning, Mr Tuan. How are you?', textVi: 'Chào buổi sáng thầy Tuấn. Thầy có khỏe không ạ?', correctStep: 0 },
  { key: 'A', speaker: 'Mr Tuan', text: 'Oh, really? Do you live far from the school?', textVi: 'Ồ, thế à? Nhà em ở xa trường lắm sao?', correctStep: 3 },
  { key: 'B', speaker: 'Nam', text: 'I go by bus.', textVi: 'Em đi bằng xe buýt ạ.', correctStep: 2 },
  { key: 'D', speaker: 'Mr Tuan', text: "Hi, Nam. I'm fine. Thank you. How do you go to school every day?", textVi: 'Chào Nam. Thầy khỏe, cảm ơn em. Hằng ngày em đi học bằng gì?', correctStep: 1 },
  { key: 'E', speaker: 'Nam', text: "Yes. It's about thirty minutes by bus.", textVi: 'Vâng ạ. Đi xe buýt mất khoảng 30 phút.', correctStep: 4 },
];

export const U2_TASK6_DIALOGUE_WORDS = ['twice', 'after', 'cooking', 'often', 'late', 'are'];

export const U2_TASK6_DIALOGUE_BLANKS = [
  { id: 'p15-u2t6-1', answers: ['are'], hint: 'What ___ you doing?' },
  { id: 'p15-u2t6-2', answers: ['cooking'], hint: "I'm ___ dinner." },
  { id: 'p15-u2t6-3', answers: ['after'], hint: 'cook ___ school' },
  { id: 'p15-u2t6-4', answers: ['late'], hint: 'comes home ___' },
  { id: 'p15-u2t6-5', answers: ['often'], hint: 'How ___ do you go shopping?' },
  { id: 'p15-u2t6-6', answers: ['twice'], hint: '___ a week.' },
];

export const U2_TASK7_JOE_BLANKS: ParagraphBlank[] = [
  { id: 'p16-u2t7-1', index: 1, answers: ['exercise', 'exercises'], hint: 'thể dục (e...)' },
  { id: 'p16-u2t7-2', index: 2, answers: ['basketball'], hint: 'bóng rổ (b...)' },
  { id: 'p16-u2t7-3', index: 3, answers: ['homework'], hint: 'bài tập về nhà (h...)' },
  { id: 'p16-u2t7-4', index: 4, answers: ['bed'], hint: 'đi ngủ: go to ___ (b...)' },
  { id: 'p16-u2t7-5', index: 5, answers: ['10', 'ten'], hint: '10 giờ tối (số 10 / ten)' },
];

export const U2_TASK8_PICTURES: FillItem[] = [
  { id: 'p16-u2t8-1', before: '1. Her sister ', after: ' gets up early in the morning.', hint: 'Lịch tích đủ 7/7 ngày → trạng từ nào?', iconKey: 'calendar7', answers: ['always'], explanation: 'Tích đủ cả 7 ngày (Thứ 2 → Chủ nhật) = always (luôn luôn).' },
  { id: 'p16-u2t8-2', before: '2. Nancy often ', after: ' a bike to school.', hint: 'Đạp xe (chủ ngữ Nancy số ít!)', iconKey: 'bike', answers: ['rides'], explanation: 'Chủ ngữ “Nancy” số ít → động từ “ride” thêm “s” thành “rides”.' },
  { id: 'p16-u2t8-3', before: '3. We go to the library ', after: ' a week.', hint: 'Lịch chỉ tích đúng 1 ngày Thứ 5 → mấy lần?', iconKey: 'calendar1', answers: ['once'], explanation: 'Chỉ tích 1 ngày trong tuần = once a week (1 lần một tuần).' },
  { id: 'p17-u2t8-4', before: '4. I often ', after: ' with my partners in the class.', hint: 'Học bài cùng bạn (bắt đầu bằng s...)', iconKey: 'partner', answers: ['study'], explanation: 'study with my partners = học nhóm với các bạn trong lớp.' },
];

export const U2_TASK9_ORDERS: OrderSentenceItem[] = [
  { id: 'p17-u2t9-1', words: ['you', 'morning', 'do', 'exercise', 'do', 'often', 'how', '?'], answer: 'How often do you do morning exercise?', meaning: 'Bạn tập thể dục buổi sáng mấy lần?', explanation: 'How often + do + you + do morning exercise?' },
  { id: 'p17-u2t9-2', words: ['you', 'in', 'what', 'evening', 'do', 'the', 'do', '?'], answer: 'What do you do in the evening?', meaning: 'Bạn làm gì vào buổi tối?', explanation: 'What + do + you + do + in the evening?' },
  { id: 'p17-u2t9-3', words: ['a', 'goes', 'my', 'once', 'father', 'fishing', 'week.'], answer: 'My father goes fishing once a week.', meaning: 'Bố mình đi câu cá 1 lần một tuần.', explanation: 'My father + goes fishing + once a week.' },
  { id: 'p17-u2t9-4', words: ['never', 'I', 'night.', 'the', 'internet', 'at', 'surf'], answer: 'I never surf the internet at night.', meaning: 'Mình không bao giờ lướt mạng vào ban đêm.', explanation: 'I never + surf the internet + at night.' },
];

export const U2_TASK10_WRITING: GuidedWritingPrompt[] = [
  { id: 'p17-w0', question: "0. What's his/her name?", starter: 'My best friend is', sample: 'Lan', placeholder: 'Tên bạn thân của em (vd: Lan)' },
  { id: 'p17-w1', question: '1. What does he/she usually do before school in the morning?', starter: 'He/She usually', sample: 'gets up early, brushes her teeth and has breakfast', placeholder: 'gets up early, has breakfast...' },
  { id: 'p17-w2', question: '2. What does he/she usually do after school?', starter: 'He/She often', sample: 'plays badminton and does her homework', placeholder: 'does homework / plays sports...' },
  { id: 'p17-w3', question: '3. What does he/she usually do with you?', starter: 'He/She', sample: 'usually studies English and reads comic books with me', placeholder: 'studies / plays with me...' },
  { id: 'p17-w4', question: '4. What do you think of him/her?', starter: 'I think', sample: 'she is kind, funny and hard-working', placeholder: 'he/she is kind and friendly...' },
];

// ================= UNIT 3 (PAGES 18–20) =================

export const U3_VOCAB_PAGE18: PageVocabWord[] = [
  { word: 'holiday', ipa: '/ˈhɒlədeɪ/', pos: 'n', meaning: 'kỳ nghỉ', group: 'Kỳ nghỉ & Chuyến đi', example: 'Where did you go on holiday?', exampleVi: 'Bạn đã đi đâu vào kỳ nghỉ?' },
  { word: 'weekend', ipa: '/ˌwiːkˈend/', pos: 'n', meaning: 'ngày cuối tuần', group: 'Kỳ nghỉ & Chuyến đi', example: 'Where did you go last weekend?', exampleVi: 'Cuối tuần trước bạn đã đi đâu?' },
  { word: 'trip', ipa: '/trɪp/', pos: 'n', meaning: 'chuyến đi', group: 'Kỳ nghỉ & Chuyến đi', example: 'I went on a trip with my family.', exampleVi: 'Mình đã đi du lịch cùng gia đình.' },
  { word: 'island', ipa: '/ˈaɪlənd/', pos: 'n', meaning: 'hòn đảo', group: 'Địa điểm du lịch', example: 'We visited Phu Quoc Island.', exampleVi: 'Chúng mình đã thăm đảo Phú Quốc.', tip: 'Chữ "s" bị câm — đọc là AI-lần!' },
  { word: 'imperial city', ipa: '/ɪmˈpɪəriəl ˈsɪti/', pos: 'n', meaning: 'kinh thành', group: 'Địa điểm du lịch', example: 'They went to Hue Imperial City.', exampleVi: 'Họ đã đi Kinh thành Huế.' },
  { word: 'ancient', ipa: '/ˈeɪnʃənt/', pos: 'adj', meaning: 'cổ, xưa', group: 'Địa điểm du lịch', example: 'Hoi An Ancient Town is lovely.', exampleVi: 'Phố cổ Hội An thật đáng yêu.' },
  { word: 'town', ipa: '/taʊn/', pos: 'n', meaning: 'thị trấn, phố', group: 'Địa điểm du lịch', example: 'It is a small town in central Viet Nam.', exampleVi: 'Đó là thị trấn nhỏ ở miền Trung Việt Nam.' },
  { word: 'bay', ipa: '/beɪ/', pos: 'n', meaning: 'vịnh', group: 'Địa điểm du lịch', example: 'We had a wonderful trip to Ha Long Bay.', exampleVi: 'Chúng mình có chuyến đi tuyệt vời tới Vịnh Hạ Long.' },
  { word: 'seaside', ipa: '/ˈsiːsaɪd/', pos: 'n', meaning: 'bờ biển', group: 'Địa điểm du lịch', example: 'I went to the seaside with my brother.', exampleVi: 'Mình đã đi biển cùng anh trai.' },
  { word: 'really', ipa: '/ˈrɪəli/', pos: 'adv', meaning: 'thật sự', group: 'Cảm nhận', example: 'The trip was really great!', exampleVi: 'Chuyến đi thật sự tuyệt vời!' },
  { word: 'great', ipa: '/ɡreɪt/', pos: 'adj', meaning: 'tuyệt vời', group: 'Cảm nhận', example: 'We had a great time there.', exampleVi: 'Chúng mình đã có khoảng thời gian tuyệt vời.' },
  { word: 'airport', ipa: '/ˈeəpɔːt/', pos: 'n', meaning: 'sân bay', group: 'Nhà ga & Giao thông', example: 'My dad drove us to the airport.', exampleVi: 'Bố chở chúng mình ra sân bay.' },
  { word: 'train station', ipa: '/treɪn ˈsteɪʃn/', pos: 'n', meaning: 'nhà ga (tàu hỏa)', group: 'Nhà ga & Giao thông', example: 'We met at the train station.', exampleVi: 'Chúng mình gặp nhau ở nhà ga.' },
  { word: 'swimming pool', ipa: '/ˈswɪmɪŋ puːl/', pos: 'n', meaning: 'bể bơi', group: 'Địa điểm du lịch', example: 'The hotel has a big swimming pool.', exampleVi: 'Khách sạn có một bể bơi lớn.' },
  { word: 'railway', ipa: '/ˈreɪlweɪ/', pos: 'n', meaning: 'đường sắt (tàu hỏa)', group: 'Nhà ga & Giao thông', example: 'The train runs on the railway.', exampleVi: 'Tàu hỏa chạy trên đường sắt.' },
  { word: 'by', ipa: '/baɪ/', pos: 'prep', meaning: 'bằng (phương tiện gì đó)', group: 'Nhà ga & Giao thông', example: 'I went there by train.', exampleVi: 'Mình đến đó bằng tàu hỏa.' },
  { word: 'train', ipa: '/treɪn/', pos: 'n', meaning: 'tàu hỏa', group: 'Nhà ga & Giao thông', example: 'Going by train is fun.', exampleVi: 'Đi tàu hỏa rất vui.' },
];

export const U3_VOCAB_PAGE19: PageVocabWord[] = [
  { word: 'car', ipa: '/kɑː(r)/', pos: 'n', meaning: 'ô tô', group: 'Phương tiện đi lại', example: 'We went to the countryside by car.', exampleVi: 'Chúng mình về quê bằng ô tô.' },
  { word: 'taxi', ipa: '/ˈtæksi/', pos: 'n', meaning: 'xe taxi', group: 'Phương tiện đi lại', example: 'She went to the airport by taxi.', exampleVi: 'Cô ấy ra sân bay bằng taxi.' },
  { word: 'plane', ipa: '/pleɪn/', pos: 'n', meaning: 'máy bay', group: 'Phương tiện đi lại', example: 'It can fly in the sky — a plane!', exampleVi: 'Nó bay trên bầu trời — máy bay!' },
  { word: 'underground', ipa: '/ˌʌndəˈɡraʊnd/', pos: 'n', meaning: 'tàu điện ngầm', group: 'Phương tiện đi lại', example: 'It is long and goes under the ground.', exampleVi: 'Nó dài và chạy dưới lòng đất.' },
  { word: 'motorbike', ipa: '/ˈməʊtəbaɪk/', pos: 'n', meaning: 'xe máy', group: 'Phương tiện đi lại', example: 'You must wear a helmet on a motorbike.', exampleVi: 'Bạn phải đội mũ bảo hiểm khi đi xe máy.' },
  { word: 'boat', ipa: '/bəʊt/', pos: 'n', meaning: 'tàu thuyền', group: 'Phương tiện đi lại', example: 'We took a boat around the bay.', exampleVi: 'Chúng mình đi thuyền quanh vịnh.' },
  { word: 'hometown', ipa: '/ˈhəʊmtaʊn/', pos: 'n', meaning: 'quê hương', group: 'Gia đình & Chuyến đi', example: 'I went back to my hometown.', exampleVi: 'Mình đã về thăm quê hương.' },
  { word: 'province', ipa: '/ˈprɒvɪns/', pos: 'n', meaning: 'tỉnh', group: 'Gia đình & Chuyến đi', example: 'My hometown is in Hoa Binh Province.', exampleVi: 'Quê mình ở tỉnh Hòa Bình.' },
  { word: 'classmate', ipa: '/ˈklɑːsmeɪt/', pos: 'n', meaning: 'bạn cùng lớp', group: 'Gia đình & Chuyến đi', example: 'I went on a picnic with my classmates.', exampleVi: 'Mình đi dã ngoại cùng bạn cùng lớp.' },
  { word: 'family', ipa: '/ˈfæməli/', pos: 'n', meaning: 'gia đình', group: 'Gia đình & Chuyến đi', example: 'I love travelling with my family.', exampleVi: 'Mình thích đi du lịch cùng gia đình.' },
  { word: 'picnic', ipa: '/ˈpɪknɪk/', pos: 'n', meaning: 'chuyến đi dã ngoại', group: 'Gia đình & Chuyến đi', example: 'We had a nice picnic by the lake.', exampleVi: 'Chúng mình có buổi dã ngoại vui bên hồ.' },
];

export const U3_PAGE20_MATCH_RIDDLES = [
  { id: 'p20-r0', clue: '0 (Mẫu). It is long and it can go on the ground.', clueVi: 'Nó dài và chạy trên mặt đất.', answerKey: 'train', label: 'Train (Tàu hỏa)', isExample: true },
  { id: 'p20-r1', clue: '1. It can fly in the sky.', clueVi: 'Nó có thể bay trên bầu trời.', answerKey: 'plane', label: 'Plane (Máy bay)', isExample: false },
  { id: 'p20-r2', clue: '2. It can go in the sea.', clueVi: 'Nó có thể đi trên biển.', answerKey: 'ship', label: 'Ship / Boat (Tàu thủy)', isExample: false },
  { id: 'p20-r3', clue: '3. It is long. It can go under the ground.', clueVi: 'Nó dài và chạy dưới lòng đất.', answerKey: 'underground', label: 'Underground (Tàu điện ngầm)', isExample: false },
  { id: 'p20-r4', clue: '4. You must wear a helmet when you ride it.', clueVi: 'Bạn phải đội mũ bảo hiểm khi lái nó.', answerKey: 'motorbike', label: 'Motorbike (Xe máy)', isExample: false },
];
