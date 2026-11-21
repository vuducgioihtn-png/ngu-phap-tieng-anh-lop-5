import type {
  FillItem,
  GuidedWritingPrompt,
  OrderSentenceItem,
  PageVocabWord,
  ParagraphBlank,
  QuizChoiceItem,
} from './pages1to20Data';

export interface PageMeta146 {
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
    | 19;
  title: string;
  subtitle: string;
  sectionTag: string;
}

export interface CanteenOrderPreset {
  id: string;
  iconKey: string;
  kind: 'eat' | 'drink';
  containerEn: string;
  containerVi: string;
  foodEn: string;
  foodVi: string;
  phrase: string;
  countableType: 'much' | 'many';
  nounForQuestion: string;
  orderQuestion: string;
  orderAnswer: string;
  quantityQuestion: string;
  quantityAnswer: string;
  tip: string;
}

export interface DialogueChoiceOption {
  letter: string;
  text: string;
  textVi: string;
}

export interface DialogueGapLine {
  id: string;
  speaker: 'Minh' | 'LyLy';
  fixedText?: string;
  fixedVi?: string;
  blankNumber?: number;
  correctLetter?: string;
  explanation?: string;
}

export interface WeatherCityForecast {
  id: string;
  cityEn: string;
  cityVi: string;
  regionVi: string;
  iconKey: string;
  temp: string;
  adjectives: string;
  adjectivesVi: string;
  forecastSentence: string;
  forecastSentenceVi: string;
  adviceVi: string;
}

export interface SeasonCardPreset {
  id: string;
  iconKey: string;
  seasonEn: string;
  seasonVi: string;
  monthsVi: string;
  weatherAdj: string;
  weatherVi: string;
  question: string;
  answer: string;
  answerVi: string;
  activity: string;
  activityVi: string;
}

export interface LandmarkExplorePreset {
  id: string;
  iconKey: string;
  placeEn: string;
  placeVi: string;
  cityVi: string;
  pairAlternativeEn: string;
  pairAlternativeVi: string;
  adjComparative: string;
  adjVi: string;
  whichQuestion: string;
  whichAnswer: string;
  thinkQuestion: string;
  thinkAnswer: string;
  thinkAnswerVi: string;
  tip: string;
}

export const PAGES_126_TO_146_INDEX: PageMeta146[] = [
  {
    page: 126,
    unit: 17,
    title: 'Unit 17 · What would you like to eat? (Từ vựng Phần 1 · 17 từ)',
    subtitle: 'Đơn vị đựng đồ ăn & đồ uống: bowl, glass, packet, bar, carton · món ăn & căng tin trường',
    sectionTag: 'Từ vựng',
  },
  {
    page: 127,
    unit: 17,
    title: 'Unit 17 · 11 từ cuối, Sơ đồ How much / How many & Xưởng gọi món Căng tin',
    subtitle: 'fresh, egg, sausage, butter, diet, vitamin · What would you like to eat/drink? · Xưởng gọi món tương tác',
    sectionTag: 'Từ vựng · Ngữ pháp',
  },
  {
    page: 128,
    unit: 17,
    title: 'Unit 17 · Task 1 (Khác loại) & Task 2 (Trắc nghiệm Câu 1–8)',
    subtitle: 'Phân biệt đơn vị đựng – trái cây – thịt cá – đồ ngọt & luyện chọn đáp án đúng',
    sectionTag: 'Bài tập',
  },
  {
    page: 129,
    unit: 17,
    title: 'Unit 17 · Task 2 (Trắc nghiệm Câu 9–17)',
    subtitle: 'Luyện dùng a/an/some, danh từ đếm được/không đếm được & cụm good for you',
    sectionTag: 'Bài tập',
  },
  {
    page: 130,
    unit: 17,
    title: 'Unit 17 · Task 3 (Đoán món qua định nghĩa) & Task 4 (Đọc hiểu Tom)',
    subtitle: '5 câu đố tiếng Anh kèm tranh minh họa & bài đọc thói quen ăn uống lành mạnh của Tom (Đúng/Sai)',
    sectionTag: 'Từ vựng · Đọc hiểu',
  },
  {
    page: 131,
    unit: 17,
    title: 'Unit 17 · Task 5 (Điền hội thoại Minh – LyLy) & Task 6 (Đoạn văn Lucy)',
    subtitle: 'Ghép 5 câu giao tiếp gọi món & hoàn thành câu chuyện bạn Lucy thích đồ ngọt qua 5 hình ảnh',
    sectionTag: 'Giao tiếp · Đọc điền',
  },
  {
    page: 132,
    unit: 17,
    title: 'Unit 17 · Task 7 (Đọc chọn từ bài của Thu) & Task 8 (Nhìn hình điền đơn vị)',
    subtitle: '5 câu trắc nghiệm đọc hiểu bữa ăn của Thu & 5 tranh luyện carton, glass, bowl, bottles, bars',
    sectionTag: 'Đọc · Trực quan',
  },
  {
    page: 133,
    unit: 17,
    title: 'Unit 17 · Task 9 (Sắp xếp 5 câu) & Task 10 (Viết thói quen ăn uống)',
    subtitle: 'Ghép câu hỏi What would you like / How much & tự viết 5 câu về món ăn yêu thích của em',
    sectionTag: 'Tổng ôn Unit 17',
  },
  {
    page: 134,
    unit: 18,
    title: 'Unit 18 · What will the weather be like tomorrow? (Từ vựng Phần 1 · 20 từ)',
    subtitle: 'Bản tin dự báo thời tiết (forecast), 10 tính từ thời tiết (sunny → snowy) & 4 mùa trong năm',
    sectionTag: 'Từ vựng',
  },
  {
    page: 135,
    unit: 18,
    title: 'Unit 18 · 8 từ cuối & Ngữ pháp 1–2 (Dự báo ngày mai & Các mùa)',
    subtitle: 'plant, flower, country, season, north, south, month, dry · Sơ đồ biến danh từ → tính từ thời tiết',
    sectionTag: 'Từ vựng · Ngữ pháp',
  },
  {
    page: 136,
    unit: 18,
    title: 'Unit 18 · Ngữ pháp 3–4 & Bản tin Dự báo Thời tiết Việt Nam + 4 Mùa tương tác',
    subtitle: 'Hỏi mùa yêu thích, số mùa trong năm, hoạt động theo mùa & Trạm dự báo tương tác 4 thành phố',
    sectionTag: 'Ngữ pháp · Tương tác',
  },
  {
    page: 137,
    unit: 18,
    title: 'Unit 18 · Task 1 (Phát âm 5 câu) & Task 2 (Chọn từ khác loại 5 câu)',
    subtitle: 'Luyện nghe phân biệt nguyên âm gạch chân (take/fall, winter/like, weather/season) & nhóm từ',
    sectionTag: 'Phát âm · Từ vựng',
  },
  {
    page: 138,
    unit: 18,
    title: 'Unit 18 · Task 3 (Đoán từ thời tiết) & Task 4 (Đọc hiểu 4 mùa ở Úc)',
    subtitle: '5 định nghĩa thời tiết kèm hình ảnh & bài đọc so sánh mùa ở Australia và Việt Nam (Đúng/Sai)',
    sectionTag: 'Từ vựng · Đọc hiểu',
  },
  {
    page: 139,
    unit: 18,
    title: 'Unit 18 · Task 5 (Trắc nghiệm tổng hợp Câu 1–13)',
    subtitle: 'Ôn hiện tại tiếp diễn, hoạt động thời gian rảnh, trạng từ tần suất & thời tiết các mùa',
    sectionTag: 'Bài tập',
  },
  {
    page: 140,
    unit: 18,
    title: 'Unit 18 · Task 5 (Câu 14–20) & Task 6 (Bản tin thời tiết Sa Pa – Hà Nội – Đà Nẵng)',
    subtitle: 'Hoàn tất 7 câu trắc nghiệm cuối & nhìn 5 biểu tượng điền bản tin dự báo thời tiết Việt Nam',
    sectionTag: 'Bài tập · Đọc điền',
  },
  {
    page: 141,
    unit: 18,
    title: 'Unit 18 · Task 7 (Nhìn tranh viết 5 câu dự báo thời tiết)',
    subtitle: 'Quan sát 5 biểu tượng thời tiết (sương mù, mùa hè, nắng, mây đen, bão) để hoàn thành câu',
    sectionTag: 'Trực quan',
  },
  {
    page: 142,
    unit: 18,
    title: 'Unit 18 · Task 8 (Điền đoạn văn kho 8 từ) & Task 9 (Sắp xếp 5 câu)',
    subtitle: 'Hoàn thành bài viết về mùa thu & mùa hè bằng kho từ bấm chọn · Sắp xếp 5 câu hỏi – đáp thời tiết',
    sectionTag: 'Đọc · Viết câu',
  },
  {
    page: 143,
    unit: 18,
    title: 'Unit 18 Task 10 (Viết về quê em) & Mở đầu Unit 19 (Which place...?)',
    subtitle: 'Tự viết 5 câu về thời tiết & 4 mùa quê em · Khởi động Unit 19 với visit & pagoda',
    sectionTag: 'Tổng ôn U18 · Mở đầu U19',
  },
  {
    page: 144,
    unit: 19,
    title: 'Unit 19 · Từ vựng danh thắng & cảm nhận (25 từ)',
    subtitle: 'park, temple, theatre, bridge, museum, statue & tính từ khen ngợi exciting, interesting, attractive',
    sectionTag: 'Từ vựng',
  },
  {
    page: 145,
    unit: 19,
    title: 'Unit 19 · Từ cuối, Ngữ pháp 1–3, Xưởng Danh thắng Việt Nam & Task 1',
    subtitle: 'Which place... A or B? · more ... than I expected · Sơ đồ so sánh hơn & 5 câu tìm từ khác loại',
    sectionTag: 'Ngữ pháp · Tương tác',
  },
  {
    page: 146,
    unit: 19,
    title: 'Unit 19 · Task 2 (Trắc nghiệm 6 câu) & Task 3 (Đoán danh thắng Câu 1–2)',
    subtitle: 'Luyện so sánh hơn, thì quá khứ/tương lai, would like to visit & 2 câu đố market – island',
    sectionTag: 'Bài tập · Chốt mốc 146',
  },
];

/* =========================================================
   UNIT 17 VOCABULARY (28 WORDS: P.126 = 17 + P.127 = 11)
   ========================================================= */
export const U17_VOCAB_PAGE126: PageVocabWord[] = [
  {
    word: 'restaurant',
    ipa: '/ˈrest(ə)rɒnt/',
    pos: 'n',
    meaning: 'nhà hàng',
    group: 'Địa điểm ăn uống',
    example: 'My family has dinner at a nice restaurant on Sundays.',
    exampleVi: 'Gia đình mình ăn tối ở một nhà hàng đẹp vào các ngày Chủ nhật.',
    tip: 'Nhấn âm 1: RES-tơ-rơnt (chữ "au" đọc nhẹ như âm ơ).',
  },
  {
    word: 'a bowl of',
    ipa: '/ə bəʊl əv/',
    pos: 'phr',
    meaning: 'một bát (gì đó)',
    group: 'Đơn vị đựng (Containers)',
    example: "I'd like a bowl of noodles, please.",
    exampleVi: 'Cho mình một bát mì nhé.',
    tip: 'Dùng cho món ăn đựng trong bát: a bowl of rice / noodles / soup.',
  },
  {
    word: 'noodle',
    ipa: '/ˈnuːdl/',
    pos: 'n',
    meaning: 'mì (thường dùng số nhiều noodles)',
    group: 'Đồ ăn',
    example: 'She eats a bowl of chicken noodles for breakfast.',
    exampleVi: 'Bạn ấy ăn một bát mì gà cho bữa sáng.',
    tip: 'Vì có nhiều sợi mì nên trong câu hay viết "noodles".',
  },
  {
    word: 'water',
    ipa: '/ˈwɔːtə(r)/',
    pos: 'n',
    meaning: 'nước',
    group: 'Đồ uống',
    example: 'I drink four bottles of water every day.',
    exampleVi: 'Mình uống bốn chai nước mỗi ngày.',
    tip: 'Không đếm được → hỏi bằng "How much water...?"',
  },
  {
    word: 'a glass of',
    ipa: '/ə ɡlɑːs əv/',
    pos: 'phr',
    meaning: 'một ly, một cốc (gì đó)',
    group: 'Đơn vị đựng (Containers)',
    example: "He'd like a glass of orange juice.",
    exampleVi: 'Cậu ấy muốn một cốc nước cam.',
    tip: 'Số nhiều thêm -es: two glasses of milk (hai cốc sữa).',
  },
  {
    word: 'apple juice',
    ipa: '/ˈæpl dʒuːs/',
    pos: 'n',
    meaning: 'nước ép táo',
    group: 'Đồ uống',
    example: 'Apple juice is my favourite drink.',
    exampleVi: 'Nước ép táo là đồ uống yêu thích của mình.',
    tip: 'Ghép tên trái cây + juice: orange juice (nước cam), apple juice (nước táo).',
  },
  {
    word: 'fish',
    ipa: '/fɪʃ/',
    pos: 'n',
    meaning: 'cá',
    group: 'Đồ ăn',
    example: 'We often have rice, fish and vegetables for lunch.',
    exampleVi: 'Chúng mình thường ăn cơm, cá và rau cho bữa trưa.',
    tip: 'Khi nói về thịt cá làm thức ăn, fish không thêm -es.',
  },
  {
    word: 'a packet of',
    ipa: '/ə ˈpækɪt əv/',
    pos: 'phr',
    meaning: 'một gói (gì đó)',
    group: 'Đơn vị đựng (Containers)',
    example: 'She has two packets of biscuits.',
    exampleVi: 'Bạn ấy có hai gói bánh quy.',
    tip: 'Nhớ cặp hay ra thi: a packet of biscuits / candy (một gói bánh quy / kẹo).',
  },
  {
    word: 'biscuit',
    ipa: '/ˈbɪskɪt/',
    pos: 'n',
    meaning: 'bánh quy',
    group: 'Đồ ăn',
    example: "I'd like a packet of biscuits, please.",
    exampleVi: 'Cho mình một gói bánh quy nhé.',
    tip: 'Chữ "u" bị câm, đọc gọn là BIS-kịt!',
  },
  {
    word: 'a bar of',
    ipa: '/ə bɑː(r) əv/',
    pos: 'phr',
    meaning: 'một thanh (gì đó)',
    group: 'Đơn vị đựng (Containers)',
    example: 'He eats a bar of chocolate after lunch.',
    exampleVi: 'Cậu ấy ăn một thanh sô-cô-la sau bữa trưa.',
    tip: 'Luôn nhớ: a bar of chocolate (một thanh sô-cô-la).',
  },
  {
    word: 'a carton of',
    ipa: '/ə ˈkɑːtn əv/',
    pos: 'phr',
    meaning: 'một hộp giấy (gì đó)',
    group: 'Đơn vị đựng (Containers)',
    example: "I'd like a carton of milk, please.",
    exampleVi: 'Cho mình một hộp sữa nhé.',
    tip: 'Carton là hộp giấy đựng chất lỏng: milk, lemonade, apple juice.',
  },
  {
    word: 'lemonade',
    ipa: '/ˌleməˈneɪd/',
    pos: 'n',
    meaning: 'nước chanh',
    group: 'Đồ uống',
    example: 'Tom drinks a glass of lemonade after breakfast.',
    exampleVi: 'Tom uống một cốc nước chanh sau bữa sáng.',
    tip: 'Lemon (quả chanh) + -ade → lemonade (nước chanh), nhấn âm cuối -NADE.',
  },
  {
    word: 'nowadays',
    ipa: '/ˈnaʊədeɪz/',
    pos: 'adv',
    meaning: 'ngày nay',
    group: 'Thời gian & Sức khỏe',
    example: 'Nowadays, many students bring healthy food to school.',
    exampleVi: 'Ngày nay, nhiều học sinh mang đồ ăn lành mạnh đến trường.',
    tip: 'Ghép 3 chữ: now + a + days → nowadays (luôn có chữ s ở cuối).',
  },
  {
    word: 'sandwich',
    ipa: '/ˈsænwɪtʃ/',
    pos: 'n',
    meaning: 'bánh mì kẹp (xăng-uých)',
    group: 'Đồ ăn',
    example: 'He has a sandwich with a lot of vegetables.',
    exampleVi: 'Cậu ấy ăn một chiếc bánh mì kẹp với nhiều rau.',
    tip: 'Số nhiều thêm -es: two sandwiches.',
  },
  {
    word: 'healthy food',
    ipa: '/ˈhelθi fuːd/',
    pos: 'n',
    meaning: 'đồ ăn tốt cho sức khỏe',
    group: 'Thời gian & Sức khỏe',
    example: 'Vegetables and fresh fruits are healthy food.',
    exampleVi: 'Rau củ và trái cây tươi là đồ ăn tốt cho sức khỏe.',
    tip: 'Health (sức khỏe) + -y → healthy (lành mạnh, khỏe mạnh).',
  },
  {
    word: 'meal',
    ipa: '/miːl/',
    pos: 'n',
    meaning: 'bữa ăn',
    group: 'Thời gian & Sức khỏe',
    example: 'We have three meals a day: breakfast, lunch and dinner.',
    exampleVi: 'Chúng mình ăn ba bữa một ngày: sáng, trưa và tối.',
    tip: 'Cụm hay gặp: between meals (giữa các bữa ăn), after meals (sau bữa ăn).',
  },
  {
    word: 'canteen',
    ipa: '/kænˈtiːn/',
    pos: 'n',
    meaning: 'căng tin',
    group: 'Địa điểm ăn uống',
    example: 'My sister and I eat breakfast at the school canteen.',
    exampleVi: 'Chị mình và mình ăn sáng ở căng tin trường.',
    tip: 'Nhấn âm 2: ken-TIN.',
  },
];

export const U17_VOCAB_PAGE127: PageVocabWord[] = [
  {
    word: 'fresh',
    ipa: '/freʃ/',
    pos: 'adj',
    meaning: 'tươi, tươi mới',
    group: 'Tính từ & Dinh dưỡng',
    example: 'My mum buys fresh vegetables every morning.',
    exampleVi: 'Mẹ mình mua rau tươi mỗi sáng.',
    tip: 'Fresh fruit (trái cây tươi), fresh milk (sữa tươi).',
  },
  {
    word: 'egg',
    ipa: '/eɡ/',
    pos: 'n',
    meaning: 'quả trứng',
    group: 'Thực phẩm hằng ngày',
    example: 'I eat an egg every morning.',
    exampleVi: 'Mình ăn một quả trứng mỗi sáng.',
    tip: 'Bắt đầu bằng nguyên âm "e" → dùng "an egg" (không dùng a egg).',
  },
  {
    word: 'sausage',
    ipa: '/ˈsɒsɪdʒ/',
    pos: 'n',
    meaning: 'xúc xích',
    group: 'Thực phẩm hằng ngày',
    example: 'I like eating sausages with bread.',
    exampleVi: 'Mình thích ăn xúc xích cùng bánh mì.',
    tip: 'Đếm được từng chiếc: one sausage, two sausages.',
  },
  {
    word: 'butter',
    ipa: '/ˈbʌtə(r)/',
    pos: 'n',
    meaning: 'bơ',
    group: 'Thực phẩm hằng ngày',
    example: 'She puts some butter on her bread.',
    exampleVi: 'Bạn ấy phết một ít bơ lên bánh mì.',
    tip: 'Butter là danh từ không đếm được → dùng "some butter" / "How much butter?".',
  },
  {
    word: 'bottle',
    ipa: '/ˈbɒtl/',
    pos: 'n',
    meaning: 'cái chai',
    group: 'Đơn vị đựng',
    example: "They'd like three bottles of water.",
    exampleVi: 'Họ muốn ba chai nước.',
    tip: 'A bottle of water (một chai nước) · three bottles of water (ba chai nước).',
  },
  {
    word: 'banana',
    ipa: '/bəˈnɑːnə/',
    pos: 'n',
    meaning: 'quả chuối',
    group: 'Thực phẩm hằng ngày',
    example: 'How many bananas do you eat every day?',
    exampleVi: 'Bạn ăn mấy quả chuối mỗi ngày?',
    tip: 'Đếm được số nhiều → luôn hỏi "How many bananas...?".',
  },
  {
    word: 'diet',
    ipa: '/ˈdaɪət/',
    pos: 'n',
    meaning: 'chế độ ăn uống, sự ăn kiêng',
    group: 'Tính từ & Dinh dưỡng',
    example: 'A healthy diet includes lots of vegetables and fruits.',
    exampleVi: 'Một chế độ ăn lành mạnh gồm nhiều rau củ và trái cây.',
    tip: 'Đọc 2 âm tiết rõ: ĐAI-ợt.',
  },
  {
    word: 'vegetable',
    ipa: '/ˈvedʒtəbl/',
    pos: 'n',
    meaning: 'rau củ',
    group: 'Thực phẩm hằng ngày',
    example: 'Tom eats vegetables and fruits every day.',
    exampleVi: 'Tom ăn rau củ và trái cây mỗi ngày.',
    tip: 'Đọc gọn 3 âm tiết: VEJ-tơ-bồ (không đọc tách thành 4 âm!).',
  },
  {
    word: 'vitamin',
    ipa: '/ˈvɪtəmɪn/',
    pos: 'n',
    meaning: 'chất dinh dưỡng (vitamin)',
    group: 'Tính từ & Dinh dưỡng',
    example: 'Oranges have a lot of vitamin C.',
    exampleVi: 'Quả cam có rất nhiều vitamin C.',
    tip: 'Giống tiếng Việt nhưng tiếng Anh-Anh đọc là VI-tơ-min.',
  },
  {
    word: 'sugar',
    ipa: '/ˈʃʊɡə(r)/',
    pos: 'n',
    meaning: 'đường',
    group: 'Gia vị',
    example: "Don't eat too much sugar! It's bad for your teeth.",
    exampleVi: 'Đừng ăn quá nhiều đường! Nó có hại cho răng của bạn.',
    tip: 'Chữ "s" đầu đọc mạnh là /ʃ/ ("sh"): SHU-gơ! Không đếm được → too much sugar.',
  },
  {
    word: 'salt',
    ipa: '/sɔːlt/',
    pos: 'n',
    meaning: 'muối',
    group: 'Gia vị',
    example: 'Please put a little salt in the soup.',
    exampleVi: 'Vui lòng cho một chút muối vào súp nhé.',
    tip: 'Salt không đếm được → dùng How much salt / a little salt.',
  },
];

/* =========================================================
   UNIT 17 INTERACTIVE CANTEEN PRESETS (PAGE 127)
   ========================================================= */
export const U17_CANTEEN_PRESETS: CanteenOrderPreset[] = [
  {
    id: 'canteen-noodles',
    iconKey: 'bowl',
    kind: 'eat',
    containerEn: 'a bowl of',
    containerVi: 'một bát',
    foodEn: 'noodles',
    foodVi: 'mì nóng',
    phrase: 'a bowl of noodles',
    countableType: 'much',
    nounForQuestion: 'rice',
    orderQuestion: 'What would you like to eat?',
    orderAnswer: "I'd like a bowl of noodles, please.",
    quantityQuestion: 'How much rice do you eat every day?',
    quantityAnswer: 'I eat two bowls of rice every day.',
    tip: 'Cơm (rice) không đếm từng hạt được → dùng HOW MUCH! Nhưng số bát (bowls) thì đếm được: two bowls.',
  },
  {
    id: 'canteen-biscuits',
    iconKey: 'biscuit',
    kind: 'eat',
    containerEn: 'a packet of',
    containerVi: 'một gói',
    foodEn: 'biscuits',
    foodVi: 'bánh quy',
    phrase: 'a packet of biscuits',
    countableType: 'many',
    nounForQuestion: 'biscuits',
    orderQuestion: 'What would you like to eat?',
    orderAnswer: "I'd like a packet of biscuits, please.",
    quantityQuestion: 'How many biscuits do you eat every day?',
    quantityAnswer: 'I eat one packet of biscuits.',
    tip: 'Bánh quy đếm từng chiếc (biscuits) hoặc từng gói (packets) → dùng HOW MANY!',
  },
  {
    id: 'canteen-chocolate',
    iconKey: 'chocolate',
    kind: 'eat',
    containerEn: 'a bar of',
    containerVi: 'một thanh',
    foodEn: 'chocolate',
    foodVi: 'sô-cô-la',
    phrase: 'a bar of chocolate',
    countableType: 'many',
    nounForQuestion: 'bars of chocolate',
    orderQuestion: 'What would you like to eat?',
    orderAnswer: "I'd like a bar of chocolate, please.",
    quantityQuestion: 'How many bars of chocolate do you eat a week?',
    quantityAnswer: 'I eat only one bar of chocolate a week.',
    tip: 'Sô-cô-la tính theo thanh là "a bar of chocolate" (số nhiều: two bars of chocolate).',
  },
  {
    id: 'canteen-milk',
    iconKey: 'milk',
    kind: 'drink',
    containerEn: 'a carton of',
    containerVi: 'một hộp giấy',
    foodEn: 'milk',
    foodVi: 'sữa tươi',
    phrase: 'a carton of milk',
    countableType: 'much',
    nounForQuestion: 'milk',
    orderQuestion: 'What would you like to drink?',
    orderAnswer: "I'd like a carton of milk, please.",
    quantityQuestion: 'How much milk do you drink every day?',
    quantityAnswer: 'I drink two cartons of milk every day.',
    tip: 'Sữa (milk) là chất lỏng không đếm được → dùng HOW MUCH milk!',
  },
  {
    id: 'canteen-lemonade',
    iconKey: 'lemonade',
    kind: 'drink',
    containerEn: 'a glass of',
    containerVi: 'một cốc / ly',
    foodEn: 'lemonade',
    foodVi: 'nước chanh',
    phrase: 'a glass of lemonade',
    countableType: 'much',
    nounForQuestion: 'lemonade',
    orderQuestion: 'What would you like to drink?',
    orderAnswer: "I'd like a glass of lemonade, please.",
    quantityQuestion: 'How much lemonade do you drink every day?',
    quantityAnswer: 'I drink a glass of lemonade.',
    tip: 'Nước chanh (lemonade) là chất lỏng không đếm được → hỏi "How much lemonade...?".',
  },
  {
    id: 'canteen-water',
    iconKey: 'bottle',
    kind: 'drink',
    containerEn: 'a bottle of',
    containerVi: 'một chai',
    foodEn: 'water',
    foodVi: 'nước lọc',
    phrase: 'a bottle of water',
    countableType: 'much',
    nounForQuestion: 'water',
    orderQuestion: 'What would you like to drink?',
    orderAnswer: "I'd like a bottle of water, please.",
    quantityQuestion: 'How much water do you drink every day?',
    quantityAnswer: 'I drink three bottles of water every day.',
    tip: 'Nhớ công thức vàng: How much water...? → I drink three bottles.',
  },
];

/* =========================================================
   UNIT 17 EXERCISES (PAGES 128–133 · OFFICIAL KEY PP. 173–174)
   ========================================================= */
export const U17_TASK1_ODD: QuizChoiceItem[] = [
  {
    id: 'p128-t1-1',
    prompt: '1. Chọn từ khác loại:',
    options: ['a. bowl', 'b. cup', 'c. sweet', 'd. bunch'],
    correctIndex: 2,
    explanation: 'bowl (bát), cup (tách), bunch (nải/chùm) là đơn vị chứa/đếm; còn "sweet" là viên kẹo / vị ngọt.',
  },
  {
    id: 'p128-t1-2',
    prompt: '2. Chọn từ khác loại:',
    options: ['a. banana', 'b. bread', 'c. orange', 'd. apple'],
    correctIndex: 1,
    explanation: 'banana (chuối), orange (cam), apple (táo) là trái cây; còn "bread" là bánh mì.',
  },
  {
    id: 'p128-t1-3',
    prompt: '3. Chọn từ khác loại:',
    options: ['a. noodles', 'b. fish', 'c. pork', 'd. beef'],
    correctIndex: 0,
    explanation: 'fish (cá), pork (thịt lợn), beef (thịt bò) là nhóm thịt/cá; còn "noodles" là mì sợi.',
  },
  {
    id: 'p128-t1-4',
    prompt: '4. Chọn từ khác loại:',
    options: ['a. cabbage', 'b. chocolate', 'c. biscuit', 'd. sweet'],
    correctIndex: 0,
    explanation: 'chocolate, biscuit, sweet là đồ ngọt; còn "cabbage" là rau bắp cải.',
  },
  {
    id: 'p128-t1-5',
    prompt: '5. Chọn từ khác loại:',
    options: ['a. milk', 'b. bottle', 'c. tea', 'd. water'],
    correctIndex: 1,
    explanation: 'milk (sữa), tea (trà), water (nước) là đồ uống; còn "bottle" là cái chai đựng.',
  },
];

export const U17_TASK2_P128: QuizChoiceItem[] = [
  {
    id: 'p128-t2-1',
    prompt: "1. What's your favorite drink? – _____",
    options: ['A. Chicken', 'B. Orange', 'C. Lettuce', 'D. Soda'],
    correctIndex: 3,
    explanation: 'Câu hỏi hỏi về đồ uống (drink) → chỉ có "Soda" là đồ uống; 3 từ kia là đồ ăn/trái cây/rau.',
  },
  {
    id: 'p128-t2-2',
    prompt: "2. What's the matter? – I'm very hungry. I want some _____.",
    options: ['A. knives', 'B. iced tea', 'C. lemonade', 'D. sandwiches'],
    correctIndex: 3,
    explanation: '"I’m very hungry" (Mình rất đói) → cần đồ ăn: "sandwiches" (bánh mì kẹp).',
  },
  {
    id: 'p128-t2-3',
    prompt: "3. Which are your brother's favorite dishes? – _____",
    options: [
      'A. No, thanks.',
      "B. I'm thirsty.",
      'C. Cartoons.',
      'D. Chicken noodles and apple pies.',
    ],
    correctIndex: 3,
    explanation: 'Hỏi các món ăn yêu thích (favorite dishes) → đáp án D: Mì gà và bánh táo.',
  },
  {
    id: 'p128-t2-4',
    prompt: "4. _____ is there to eat? – There're some apples.",
    options: ['A. Who', 'B. Where', 'C. When', 'D. What'],
    correctIndex: 3,
    explanation: '"What is there to eat?" nghĩa là "Có gì để ăn thế?".',
  },
  {
    id: 'p128-t2-5',
    prompt: '5. _____ do you feel? – I feel very hungry.',
    options: ['A. Who', 'B. Why', 'C. Which', 'D. How'],
    correctIndex: 3,
    explanation: 'Hỏi cảm giác thế nào dùng "How do you feel?".',
  },
  {
    id: 'p128-t2-6',
    prompt: "6. We're very _____ now. We don't want any more food or drink.",
    options: ['A. cold', 'B. hot', 'C. full', 'D. hungry'],
    correctIndex: 2,
    explanation: 'Không muốn ăn hay uống thêm nữa → đang rất no: "full".',
  },
  {
    id: 'p128-t2-7',
    prompt: '7. I would like _____ orange.',
    options: ['A. a', 'B. an', 'C. much', 'D. any'],
    correctIndex: 1,
    explanation: '"orange" bắt đầu bằng nguyên âm "o" (đếm được số ít) nên dùng mạo từ "an".',
  },
  {
    id: 'p128-t2-8',
    prompt: '8. Watermelon is his favorite _____.',
    options: ['A. drink', 'B. vegetable', 'C. meat', 'D. fruit'],
    correctIndex: 3,
    explanation: 'Watermelon (dưa hấu) là một loại trái cây → "fruit"! (Sách in đáp án cuối sách bị nhầm A, chuẩn xác là D. fruit).',
  },
];

export const U17_TASK2_P129: QuizChoiceItem[] = [
  {
    id: 'p129-t2-9',
    prompt: '9. We want five _____.',
    options: ['A. milk', 'B. bread', 'C. melons', 'D. cheese'],
    correctIndex: 2,
    explanation: 'Sau số đếm "five" phải là danh từ đếm được số nhiều → "melons" (những quả dưa). Milk, bread, cheese không đếm được.',
  },
  {
    id: 'p129-t2-10',
    prompt: '10. How about a _____?',
    options: ['A. meat', 'B. cheese', 'C. sandwich', 'D. sugar'],
    correctIndex: 2,
    explanation: 'Sau mạo từ "a" phải là danh từ đếm được số ít → "sandwich".',
  },
  {
    id: 'p129-t2-11',
    prompt: '11. They have _____ apple juice.',
    options: ['A. apple', 'B. some', 'C. an', 'D. any'],
    correctIndex: 1,
    explanation: 'Câu khẳng định đi với danh từ không đếm được (apple juice) → dùng "some" (một ít).',
  },
  {
    id: 'p129-t2-12',
    prompt: '12. _____ does Alice want? – She wants some ice-cream.',
    options: ['A. Who', 'B. What', 'C. How', 'D. Why'],
    correctIndex: 1,
    explanation: 'Hỏi Alice muốn thứ gì → dùng "What".',
  },
  {
    id: 'p129-t2-13',
    prompt: "13. It's a good idea to drink _____ juice between meals.",
    options: ['A. some', 'B. these', 'C. an', 'D. any'],
    correctIndex: 0,
    explanation: '"juice" là danh từ không đếm được trong câu khẳng định → dùng "some".',
  },
  {
    id: 'p129-t2-14',
    prompt: "14. I'm hungry. I want some _____.",
    options: ['A. books', 'B. cakes', 'C. water', 'D. pencils'],
    correctIndex: 1,
    explanation: 'Đang đói (hungry) nên muốn ăn bánh → "cakes".',
  },
  {
    id: 'p129-t2-15',
    prompt: '15. Would you like _____ glass of hot milk?',
    options: ['A. a', 'B. some', 'C. any', 'D. an'],
    correctIndex: 0,
    explanation: 'Cụm đơn vị số ít "a glass of hot milk" (một cốc sữa nóng).',
  },
  {
    id: 'p129-t2-16',
    prompt: '16. Lemonade is my favorite _____.',
    options: ['A. drink', 'B. fruit', 'C. meat', 'D. vegetable'],
    correctIndex: 0,
    explanation: 'Lemonade (nước chanh) là một loại đồ uống → "drink".',
  },
  {
    id: 'p129-t2-17',
    prompt: '17. Tomatoes are very good _____ you.',
    options: ['A. to', 'B. at', 'C. on', 'D. for'],
    correctIndex: 3,
    explanation: 'Cấu trúc cố định: be good for + ai đó (tốt cho ai đó).',
  },
];

export const U17_TASK3_DEFS: FillItem[] = [
  {
    id: 'p130-t3-1',
    before: '1. sweet and brown candy →',
    hint: 'kẹo ngọt màu nâu (9 chữ cái, bắt đầu bằng c)',
    iconKey: 'chocolate',
    answers: ['chocolate'],
    explanation: 'Kẹo ngọt màu nâu là "chocolate" (sô-cô-la).',
  },
  {
    id: 'p130-t3-2',
    before: '2. meat (or cheese) and vegetables between two pieces of bread →',
    hint: 'bánh mì kẹp (8 chữ cái, bắt đầu bằng s)',
    iconKey: 'sandwich',
    answers: ['sandwich'],
    explanation: 'Thịt/phô mai và rau kẹp giữa 2 lát bánh mì là "sandwich".',
  },
  {
    id: 'p130-t3-3',
    before: '3. white drink from cows →',
    hint: 'đồ uống màu trắng từ bò sữa (4 chữ cái)',
    iconKey: 'milk',
    answers: ['milk'],
    explanation: 'Thức uống trắng từ bò là "milk" (sữa).',
  },
  {
    id: 'p130-t3-4',
    before: '4. drink made from lemons →',
    hint: 'nước uống làm từ quả chanh (8 chữ cái)',
    iconKey: 'lemonade',
    answers: ['lemonade'],
    explanation: 'Đồ uống làm từ chanh là "lemonade" (nước chanh).',
  },
  {
    id: 'p130-t3-5',
    before: '5. food from pigs or cows →',
    hint: 'thực phẩm từ lợn hoặc bò (4 chữ cái)',
    iconKey: 'meat',
    answers: ['meat'],
    explanation: 'Thức ăn lấy từ lợn hoặc bò là "meat" (thịt).',
  },
];

export const U17_TASK4_TOM_READING = {
  title: 'Task 4 · Read and tick True or False (Thói quen ăn uống của Tom)',
  passage:
    'Tom is my classmate. He has good eating habits. He always eats breakfast in the morning. For breakfast, he has a sandwich with a lot of vegetables. Then he drinks a glass of lemonade. For lunch and dinner, he often has some salad, fish and noodles. He drinks a lot of water between meals. He eats fruits and drinks milk every day. He eats meat only twice a week. He rarely eats sweets.',
  passageVi:
    'Tom là bạn cùng lớp của mình. Cậu ấy có thói quen ăn uống rất tốt. Cậu ấy luôn ăn sáng vào buổi sáng. Bữa sáng, cậu ấy ăn một chiếc bánh mì kẹp với nhiều rau. Sau đó cậu ấy uống một cốc nước chanh. Bữa trưa và bữa tối, cậu ấy thường ăn một ít sa-lát, cá và mì. Cậu ấy uống rất nhiều nước giữa các bữa ăn. Cậu ấy ăn trái cây và uống sữa mỗi ngày. Cậu ấy chỉ ăn thịt hai lần một tuần và hiếm khi ăn đồ ngọt.',
  statements: [
    {
      id: 'p130-t4-1',
      text: '1. He has sandwiches for breakfast.',
      isTrue: true,
      explanation: 'Đúng (True). Bài đọc nêu: "For breakfast, he has a sandwich with a lot of vegetables."',
    },
    {
      id: 'p130-t4-2',
      text: '2. He has two glasses of lemonade after breakfast.',
      isTrue: false,
      explanation: 'Sai (False). Tom chỉ uống MỘT cốc nước chanh ("a glass of lemonade"), không phải hai cốc.',
    },
    {
      id: 'p130-t4-3',
      text: '3. He drinks a lot of milk between meals.',
      isTrue: false,
      explanation: 'Sai (False). Giữa các bữa ăn, Tom uống nhiều NƯỚC ("a lot of water between meals"), không phải sữa.',
    },
    {
      id: 'p130-t4-4',
      text: '4. He eats vegetables and fruits every day.',
      isTrue: true,
      explanation: 'Đúng (True). Cậu ấy ăn bánh kẹp nhiều rau, sa-lát và ăn trái cây mỗi ngày.',
    },
    {
      id: 'p130-t4-5',
      text: '5. He never eats sweets.',
      isTrue: false,
      explanation: 'Sai (False). Trong bài dùng "rarely" (hiếm khi) chứ không phải "never" (không bao giờ)!',
    },
  ],
};

export const U17_TASK5_OPTIONS: DialogueChoiceOption[] = [
  { letter: 'a', text: 'What would you like to eat?', textVi: 'Bạn muốn ăn gì?' },
  { letter: 'b', text: 'I like milk.', textVi: 'Mình thích sữa.' },
  { letter: 'c', text: "I'd like a glass of apple juice.", textVi: 'Mình muốn một cốc nước ép táo.' },
  { letter: 'd', text: 'I like eating sausage.', textVi: 'Mình thích ăn xúc xích.' },
  { letter: 'e', text: 'Could we have a drink?', textVi: 'Chúng mình gọi đồ uống nhé?' },
];

export const U17_TASK5_LINES: DialogueGapLine[] = [
  {
    id: 'p131-t5-0a',
    speaker: 'Minh',
    fixedText: "I'm thirsty, LyLy.",
    fixedVi: 'Mình khát quá, LyLy ơi.',
  },
  {
    id: 'p131-t5-1',
    speaker: 'Minh',
    blankNumber: 1,
    correctLetter: 'e',
    explanation: 'Minh vừa nói khát nước → tiếp theo rủ gọi đồ uống: "e. Could we have a drink?"',
  },
  {
    id: 'p131-t5-0b',
    speaker: 'LyLy',
    fixedText: 'Yes, good idea. What would you like to drink?',
    fixedVi: 'Ừ, ý hay đấy. Bạn muốn uống gì?',
  },
  {
    id: 'p131-t5-2',
    speaker: 'Minh',
    blankNumber: 2,
    correctLetter: 'c',
    explanation: 'LyLy hỏi "What would you like to drink?" → Minh đáp: "c. I’d like a glass of apple juice."',
  },
  {
    id: 'p131-t5-0c',
    speaker: 'LyLy',
    fixedText: 'Oh, I like apple juice, too.',
    fixedVi: 'Ồ, mình cũng thích nước ép táo.',
  },
  {
    id: 'p131-t5-3',
    speaker: 'Minh',
    blankNumber: 3,
    correctLetter: 'a',
    explanation: 'Câu sau LyLy trả lời "I’d like a packet of biscuits" (đồ ăn) → Minh phải hỏi: "a. What would you like to eat?"',
  },
  {
    id: 'p131-t5-0d',
    speaker: 'LyLy',
    fixedText: "I'd like a packet of biscuits.",
    fixedVi: 'Mình muốn một gói bánh quy.',
  },
  {
    id: 'p131-t5-0e',
    speaker: 'LyLy',
    fixedText: 'What is your favorite food?',
    fixedVi: 'Món ăn yêu thích của bạn là gì?',
  },
  {
    id: 'p131-t5-4',
    speaker: 'Minh',
    blankNumber: 4,
    correctLetter: 'd',
    explanation: 'Trả lời cho "favorite food" (đồ ăn yêu thích) → "d. I like eating sausage."',
  },
  {
    id: 'p131-t5-0f',
    speaker: 'LyLy',
    fixedText: 'What is your favorite drink?',
    fixedVi: 'Đồ uống yêu thích của bạn là gì?',
  },
  {
    id: 'p131-t5-5',
    speaker: 'Minh',
    blankNumber: 5,
    correctLetter: 'b',
    explanation: 'Trả lời cho "favorite drink" (đồ uống yêu thích) → "b. I like milk."',
  },
];

export const U17_TASK6_LUCY_BLANKS: ParagraphBlank[] = [
  {
    id: 'p131-t6-1',
    index: 1,
    answers: ['biscuits', 'biscuit'],
    hint: 'bánh quy (số nhiều sau two packets of)',
    iconKey: 'biscuit',
  },
  {
    id: 'p131-t6-2',
    index: 2,
    answers: ['milk'],
    hint: 'sữa tươi (một cốc sữa)',
    iconKey: 'milk',
  },
  {
    id: 'p131-t6-3',
    index: 3,
    answers: ['a bar', 'bar', 'a bar of'],
    hint: 'một thanh (sô-cô-la)',
    iconKey: 'chocolate',
  },
  {
    id: 'p131-t6-4',
    index: 4,
    answers: ['cake'],
    hint: 'chiếc bánh ngọt lớn',
    iconKey: 'cake',
  },
  {
    id: 'p131-t6-5',
    index: 5,
    answers: ['toothache'],
    hint: 'bệnh đau răng (gặp nha sĩ dentist)',
    iconKey: 'toothache',
  },
];

export const U17_TASK7_THU_MC: QuizChoiceItem[] = [
  {
    id: 'p132-t7-1',
    prompt: 'Chỗ trống (1): My sister and I (1) _____ our breakfast at school.',
    options: ['a. eat', 'b. eats', 'c. want', 'd. wants'],
    correctIndex: 0,
    explanation: 'Chủ ngữ số nhiều "My sister and I" (2 người) → động từ giữ nguyên: "eat" (ăn bữa sáng).',
  },
  {
    id: 'p132-t7-2',
    prompt: 'Chỗ trống (2): She (2) _____ some noodles and a hot drink.',
    options: ['a. likes', 'b. wants', 'c. is liking', 'd. is wanting'],
    correctIndex: 0,
    explanation: 'Chủ ngữ số ít "She" ở thì hiện tại đơn kể thói quen → đáp án chuẩn theo sách là "likes" (không chia tiếp diễn is liking/is wanting).',
  },
  {
    id: 'p132-t7-3',
    prompt: 'Chỗ trống (3): I (3) _____ some bread and some milk.',
    options: ['a. would like', 'b. would like to', 'c. would want', 'd. would want to'],
    correctIndex: 0,
    explanation: 'Theo sau là danh từ "some bread and some milk" nên dùng "would like + danh từ" (không thêm to).',
  },
  {
    id: 'p132-t7-4',
    prompt: 'Chỗ trống (4): We have rice, chicken, cabbage and some apples (4) _____ lunch.',
    options: ['a. in', 'b. on', 'c. at', 'd. for'],
    correctIndex: 3,
    explanation: 'Cụm cố định: for breakfast / for lunch / for dinner (cho bữa sáng / trưa / tối).',
  },
  {
    id: 'p132-t7-5',
    prompt: 'Chỗ trống (5): Apple is my (5) _____ fruit.',
    options: ['a. favor', 'b. favorite', 'c. health', 'd. healthy'],
    correctIndex: 1,
    explanation: '"my favorite fruit" nghĩa là loại trái cây yêu thích của mình.',
  },
];

export const U17_TASK8_PICTURES: FillItem[] = [
  {
    id: 'p132-t8-1',
    before: "1. I'd like a",
    after: 'of milk, please.',
    hint: 'hộp giấy đựng sữa (6 chữ cái)',
    iconKey: 'milk',
    answers: ['carton'],
    explanation: 'Một hộp giấy sữa: "a carton of milk".',
  },
  {
    id: 'p132-t8-2',
    before: "2. He'd like a",
    after: 'of orange juice.',
    hint: 'cái cốc / ly thủy tinh (5 chữ cái)',
    iconKey: 'juice',
    answers: ['glass'],
    explanation: 'Một cốc nước cam: "a glass of orange juice".',
  },
  {
    id: 'p132-t8-3',
    before: "3. She'd like a",
    after: 'of rice.',
    hint: 'cái bát (4 chữ cái)',
    iconKey: 'bowl',
    answers: ['bowl'],
    explanation: 'Một bát cơm: "a bowl of rice".',
  },
  {
    id: 'p132-t8-4',
    before: "4. They'd like three",
    after: 'of water.',
    hint: 'những cái chai (số nhiều sau three)',
    iconKey: 'bottle',
    answers: ['bottles'],
    explanation: 'Ba chai nước (có số đếm three nên thêm -s): "three bottles of water".',
  },
  {
    id: 'p132-t8-5',
    before: "5. They'd like four",
    after: 'of chocolate.',
    hint: 'những thanh sô-cô-la (số nhiều sau four)',
    iconKey: 'chocolate',
    answers: ['bars'],
    explanation: 'Bốn thanh sô-cô-la (thêm -s sau four): "four bars of chocolate".',
  },
];

export const U17_TASK9_ORDERS: OrderSentenceItem[] = [
  {
    id: 'p133-t9-1',
    words: ['eat?', 'would', 'to', 'like', 'What', 'you'],
    answer: 'What would you like to eat?',
    meaning: 'Bạn muốn ăn gì nào?',
    explanation: 'Công thức chuẩn: What + would + you + like + to eat?',
  },
  {
    id: 'p133-t9-2',
    words: ['bars', 'of', "I'd", 'like', 'two', 'chocolate.'],
    answer: "I'd like two bars of chocolate.",
    meaning: 'Mình muốn hai thanh sô-cô-la.',
    explanation: "I'd like + số lượng + đơn vị (two bars) + of + món (chocolate).",
  },
  {
    id: 'p133-t9-3',
    words: ['water', 'drink', 'much', 'How', 'every', 'do', 'you', 'day?'],
    answer: 'How much water do you drink every day?',
    meaning: 'Bạn uống bao nhiêu nước mỗi ngày?',
    explanation: 'How much + water + do + you + drink + every day?',
  },
  {
    id: 'p133-t9-4',
    words: ['bottles.', 'drink', 'three', 'I'],
    answer: 'I drink three bottles.',
    meaning: 'Mình uống ba chai.',
    explanation: 'I + drink + three bottles.',
  },
  {
    id: 'p133-t9-5',
    words: ['bowls', 'eat', 'two', 'every', 'I', 'of', 'day.', 'rice'],
    answer: 'I eat two bowls of rice every day.',
    meaning: 'Mình ăn hai bát cơm mỗi ngày.',
    explanation: 'I + eat + two bowls of rice + every day.',
  },
];

export const U17_TASK10_WRITING: GuidedWritingPrompt[] = [
  {
    id: 'p133-t10-1',
    question: "1. What's your favorite food?",
    starter: 'My favorite food is ',
    sample: 'My favorite food is chicken noodles and fish.',
    placeholder: 'chicken noodles / pizza / sandwiches...',
  },
  {
    id: 'p133-t10-2',
    question: "2. What's your favorite drink?",
    starter: 'My favorite drink is ',
    sample: 'My favorite drink is orange juice and fresh milk.',
    placeholder: 'orange juice / lemonade / milk...',
  },
  {
    id: 'p133-t10-3',
    question: '3. How much water do you drink every day?',
    starter: 'I drink ',
    sample: 'I drink four bottles of water every day.',
    placeholder: 'three bottles of water every day...',
  },
  {
    id: 'p133-t10-4',
    question: '4. How much rice do you eat every day?',
    starter: 'I eat ',
    sample: 'I eat three bowls of rice every day.',
    placeholder: 'two bowls of rice every day...',
  },
  {
    id: 'p133-t10-5',
    question: '5. Do you like sweets? Why or why not?',
    starter: 'No, I rarely eat sweets because ',
    sample: "No, I rarely eat sweets because too much sugar isn't good for my teeth.",
    placeholder: 'too much sugar causes toothache...',
  },
];

/* =========================================================
   UNIT 18 VOCABULARY (28 WORDS: P.134 = 20 + P.135 = 8)
   ========================================================= */
export const U18_VOCAB_PAGE134: PageVocabWord[] = [
  {
    word: 'weather',
    ipa: '/ˈweðə(r)/',
    pos: 'n',
    meaning: 'thời tiết',
    group: 'Dự báo & Nhiệt độ',
    example: 'What will the weather be like tomorrow?',
    exampleVi: 'Thời tiết ngày mai sẽ như thế nào?',
    tip: 'Cụm "ea" trong weather đọc là /e/ (WE-đơ), khác với season (/iː/).',
  },
  {
    word: 'forecast',
    ipa: '/ˈfɔːkɑːst/',
    pos: 'n',
    meaning: 'dự báo (thời tiết)',
    group: 'Dự báo & Nhiệt độ',
    example: 'Good evening and welcome to the weather forecast.',
    exampleVi: 'Chào buổi tối và mừng quý vị đến với bản tin dự báo thời tiết.',
    tip: 'Fore (trước) + cast (phát tin) → bản tin báo trước thời tiết.',
  },
  {
    word: 'hot',
    ipa: '/hɒt/',
    pos: 'adj',
    meaning: 'nóng',
    group: 'Nhiệt độ',
    example: "It's usually hot in summer.",
    exampleVi: 'Mùa hè trời thường nóng.',
    tip: 'Trái nghĩa với hot là cold (lạnh).',
  },
  {
    word: 'cold',
    ipa: '/kəʊld/',
    pos: 'adj',
    meaning: 'lạnh',
    group: 'Nhiệt độ',
    example: "It'll be cold and windy tomorrow.",
    exampleVi: 'Ngày mai trời sẽ lạnh và có gió.',
    tip: 'Chữ "o" đọc là /əʊ/ (KÔU-đ), khác với hot (/ɒ/).',
  },
  {
    word: 'windy',
    ipa: '/ˈwɪndi/',
    pos: 'adj',
    meaning: 'có gió',
    group: 'Tính từ thời tiết (-y)',
    example: 'Autumn is cool and windy.',
    exampleVi: 'Mùa thu mát mẻ và có gió.',
    tip: 'Wind (gió) + y → windy (có gió).',
  },
  {
    word: 'sunny',
    ipa: '/ˈsʌni/',
    pos: 'adj',
    meaning: 'có nắng',
    group: 'Tính từ thời tiết (-y)',
    example: 'It is usually sunny at this time of the year.',
    exampleVi: 'Vào thời điểm này trong năm trời thường có nắng.',
    tip: 'Nhớ gấp đôi chữ "n": sun → sunny!',
  },
  {
    word: 'cloudy',
    ipa: '/ˈklaʊdi/',
    pos: 'adj',
    meaning: 'nhiều mây',
    group: 'Tính từ thời tiết (-y)',
    example: 'Today is cool and cloudy.',
    exampleVi: 'Hôm nay trời mát và nhiều mây.',
    tip: 'Cloud (đám mây) + y → cloudy (nhiều mây).',
  },
  {
    word: 'stormy',
    ipa: '/ˈstɔːmi/',
    pos: 'adj',
    meaning: 'có bão',
    group: 'Tính từ thời tiết (-y)',
    example: 'It will be stormy tomorrow.',
    exampleVi: 'Ngày mai trời sẽ có bão.',
    tip: 'Storm (cơn bão) + y → stormy (có bão).',
  },
  {
    word: 'cool',
    ipa: '/kuːl/',
    pos: 'adj',
    meaning: 'mát mẻ',
    group: 'Nhiệt độ',
    example: 'I like autumn because the weather is cool.',
    exampleVi: 'Mình thích mùa thu vì thời tiết mát mẻ.',
    tip: 'Nhớ bộ 4 nhiệt độ: hot (nóng) · warm (ấm) · cool (mát) · cold (lạnh).',
  },
  {
    word: 'rainy',
    ipa: '/ˈreɪni/',
    pos: 'adj',
    meaning: 'có mưa',
    group: 'Tính từ thời tiết (-y)',
    example: 'Take a raincoat because it will be rainy.',
    exampleVi: 'Mang áo mưa nhé vì trời sẽ có mưa.',
    tip: 'Rain (mưa) + y → rainy (có mưa).',
  },
  {
    word: 'warm',
    ipa: '/wɔːm/',
    pos: 'adj',
    meaning: 'ấm áp',
    group: 'Nhiệt độ',
    example: "It's usually warm in spring.",
    exampleVi: 'Mùa xuân trời thường ấm áp.',
    tip: 'Gắn liền với mùa xuân (spring → warm).',
  },
  {
    word: 'snowy',
    ipa: '/ˈsnəʊi/',
    pos: 'adj',
    meaning: 'có tuyết rơi',
    group: 'Tính từ thời tiết (-y)',
    example: 'In Sa Pa, it will be snowy and very cold.',
    exampleVi: 'Ở Sa Pa, trời sẽ có tuyết và rất lạnh.',
    tip: 'Snow (tuyết) + y → snowy (có tuyết).',
  },
  {
    word: 'tomorrow',
    ipa: '/təˈmɒrəʊ/',
    pos: 'n',
    meaning: 'ngày mai',
    group: 'Dự báo & Nhiệt độ',
    example: 'What will the weather be like tomorrow?',
    exampleVi: 'Thời tiết ngày mai sẽ ra sao?',
    tip: 'Dấu hiệu nhận biết thì tương lai đơn "will"!',
  },
  {
    word: 'temperature',
    ipa: '/ˈtemprətʃə(r)/',
    pos: 'n',
    meaning: 'nhiệt độ',
    group: 'Dự báo & Nhiệt độ',
    example: 'The temperature is between 22 and 26 degrees.',
    exampleVi: 'Nhiệt độ dao động từ 22 đến 26 độ.',
    tip: 'Đọc nhanh 3 âm: TEM-prơ-chơ.',
  },
  {
    word: 'popcorn',
    ipa: '/ˈpɒpkɔːn/',
    pos: 'n',
    meaning: 'bỏng ngô',
    group: 'Dự báo & Nhiệt độ',
    example: 'We eat popcorn and watch cartoons on rainy days.',
    exampleVi: 'Chúng mình ăn bỏng ngô và xem hoạt hình vào những ngày mưa.',
    tip: 'Pop (nổ lách tách) + corn (ngô) → bỏng ngô.',
  },
  {
    word: 'foggy',
    ipa: '/ˈfɒɡi/',
    pos: 'adj',
    meaning: 'có sương mù',
    group: 'Tính từ thời tiết (-y)',
    example: 'It will be foggy in London tomorrow.',
    exampleVi: 'Ngày mai ở Luân Đôn trời sẽ có sương mù.',
    tip: 'Nhớ gấp đôi chữ "g": fog → foggy!',
  },
  {
    word: 'spring',
    ipa: '/sprɪŋ/',
    pos: 'n',
    meaning: 'mùa xuân',
    group: '4 Mùa trong năm',
    example: 'There are lots of flowers in spring.',
    exampleVi: 'Vào mùa xuân có rất nhiều hoa.',
    tip: 'Spring = ấm áp (warm) + hoa nở (flowers).',
  },
  {
    word: 'summer',
    ipa: '/ˈsʌmə(r)/',
    pos: 'n',
    meaning: 'mùa hè',
    group: '4 Mùa trong năm',
    example: 'My favourite season is summer because I can go swimming.',
    exampleVi: 'Mùa yêu thích của mình là mùa hè vì mình được đi bơi.',
    tip: 'Summer = nóng (hot) + nắng (sunny).',
  },
  {
    word: 'autumn',
    ipa: '/ˈɔːtəm/',
    pos: 'n',
    meaning: 'mùa thu',
    group: '4 Mùa trong năm',
    example: 'Trees drop their leaves in autumn.',
    exampleVi: 'Cây cối rụng lá vào mùa thu.',
    tip: 'Chữ "n" cuối câm (đọc là O-tầm). Tiếng Anh-Mỹ gọi mùa thu là "fall".',
  },
  {
    word: 'winter',
    ipa: '/ˈwɪntə(r)/',
    pos: 'n',
    meaning: 'mùa đông',
    group: '4 Mùa trong năm',
    example: 'Winter lasts three months in Australia.',
    exampleVi: 'Mùa đông kéo dài ba tháng ở Úc.',
    tip: 'Winter = lạnh (cold) + tuyết/gió bấc.',
  },
];

export const U18_VOCAB_PAGE135: PageVocabWord[] = [
  {
    word: 'plant',
    ipa: '/plɑːnt/',
    pos: 'n',
    meaning: 'cây cối, thực vật',
    group: 'Thiên nhiên',
    example: 'Green plants grow fast in spring.',
    exampleVi: 'Cây xanh lớn nhanh vào mùa xuân.',
    tip: 'Vừa là danh từ (cây) vừa là động từ (trồng cây).',
  },
  {
    word: 'flower',
    ipa: '/ˈflaʊə(r)/',
    pos: 'n',
    meaning: 'bông hoa',
    group: 'Thiên nhiên',
    example: 'There are lots of beautiful flowers in the park.',
    exampleVi: 'Có rất nhiều bông hoa đẹp trong công viên.',
    tip: 'Số nhiều thêm -s: flowers → đi với "There are".',
  },
  {
    word: 'country',
    ipa: '/ˈkʌntri/',
    pos: 'n',
    meaning: 'đất nước, quốc gia',
    group: 'Địa lý & Thời gian',
    example: "What's autumn like in your country?",
    exampleVi: 'Mùa thu ở đất nước bạn như thế nào?',
    tip: 'Số nhiều đổi y → ies: countries.',
  },
  {
    word: 'season',
    ipa: '/ˈsiːzn/',
    pos: 'n',
    meaning: 'mùa',
    group: 'Địa lý & Thời gian',
    example: 'There are four seasons in a year.',
    exampleVi: 'Có bốn mùa trong một năm.',
    tip: 'Cụm "ea" đọc dài /iː/: SI-zần!',
  },
  {
    word: 'north',
    ipa: '/nɔːθ/',
    pos: 'n',
    meaning: 'miền Bắc, hướng Bắc',
    group: 'Địa lý & Thời gian',
    example: 'How many seasons are there in the North of Viet Nam?',
    exampleVi: 'Có bao nhiêu mùa ở miền Bắc Việt Nam?',
    tip: 'Miền Bắc nước ta có 4 mùa rõ rệt (spring, summer, autumn, winter).',
  },
  {
    word: 'south',
    ipa: '/saʊθ/',
    pos: 'n',
    meaning: 'miền Nam, hướng Nam',
    group: 'Địa lý & Thời gian',
    example: 'There are two seasons in the South: the dry season and the rainy season.',
    exampleVi: 'Ở miền Nam có hai mùa: mùa khô và mùa mưa.',
    tip: 'North (Bắc) ↔ South (Nam).',
  },
  {
    word: 'month',
    ipa: '/mʌnθ/',
    pos: 'n',
    meaning: 'tháng',
    group: 'Địa lý & Thời gian',
    example: 'The dry season lasts seven months.',
    exampleVi: 'Mùa khô kéo dài bảy tháng.',
    tip: 'Một năm có 12 tháng: twelve months.',
  },
  {
    word: 'dry',
    ipa: '/draɪ/',
    pos: 'adj',
    meaning: 'khô, hanh khô',
    group: 'Thiên nhiên',
    example: 'It is often hot in the dry season.',
    exampleVi: 'Trời thường nóng vào mùa khô.',
    tip: 'Trái nghĩa với dry (khô) là wet (ẩm ướt / mùa mưa).',
  },
];

/* =========================================================
   UNIT 18 INTERACTIVE WEATHER & SEASONS STUDIO (PAGE 136)
   ========================================================= */
export const U18_CITY_FORECASTS: WeatherCityForecast[] = [
  {
    id: 'city-sapa',
    cityEn: 'Sa Pa',
    cityVi: 'Sa Pa (Lào Cai)',
    regionVi: 'Vùng núi phía Bắc',
    iconKey: 'snowy',
    temp: '2°C – 6°C',
    adjectives: 'cold and snowy',
    adjectivesVi: 'rất lạnh và có tuyết rơi',
    forecastSentence: 'In Sa Pa, it will be very cold and snowy tomorrow.',
    forecastSentenceVi: 'Ở Sa Pa, ngày mai trời sẽ rất lạnh và có tuyết rơi.',
    adviceVi: 'Mặc áo khoác dày, khăn choàng và găng tay giữ ấm nhé!',
  },
  {
    id: 'city-hanoi',
    cityEn: 'Ha Noi',
    cityVi: 'Hà Nội',
    regionVi: 'Miền Bắc (4 mùa)',
    iconKey: 'rainy',
    temp: '18°C – 22°C',
    adjectives: 'warm and rainy',
    adjectivesVi: 'ấm áp nhưng có mưa',
    forecastSentence: 'In Ha Noi, it will be warm and rainy tomorrow.',
    forecastSentenceVi: 'Ở Hà Nội, ngày mai trời sẽ ấm áp và có mưa.',
    adviceVi: 'Nhớ mang theo ô hoặc áo mưa khi đi học nhé!',
  },
  {
    id: 'city-danang',
    cityEn: 'Da Nang',
    cityVi: 'Đà Nẵng',
    regionVi: 'Miền Trung',
    iconKey: 'cloudy',
    temp: '22°C – 26°C',
    adjectives: 'cool and cloudy',
    adjectivesVi: 'mát mẻ và có nhiều mây',
    forecastSentence: 'In Da Nang, it will be cool and cloudy tomorrow.',
    forecastSentenceVi: 'Ở Đà Nẵng, ngày mai trời sẽ mát mẻ và nhiều mây.',
    adviceVi: 'Thời tiết thật dễ chịu để đi dạo bờ biển hoặc công viên!',
  },
  {
    id: 'city-hcmc',
    cityEn: 'Ho Chi Minh City',
    cityVi: 'TP. Hồ Chí Minh',
    regionVi: 'Miền Nam (2 mùa: khô & mưa)',
    iconKey: 'sun',
    temp: '30°C – 35°C',
    adjectives: 'hot and sunny',
    adjectivesVi: 'nóng bức và nhiều nắng',
    forecastSentence: 'In Ho Chi Minh City, it will be hot and sunny tomorrow.',
    forecastSentenceVi: 'Ở TP. Hồ Chí Minh, ngày mai trời sẽ nóng và nhiều nắng.',
    adviceVi: 'Đội mũ rộng vành và uống thật nhiều nước lọc nhé!',
  },
];

export const U18_SEASON_CARDS: SeasonCardPreset[] = [
  {
    id: 'season-spring',
    iconKey: 'spring',
    seasonEn: 'Spring',
    seasonVi: 'Mùa xuân',
    monthsVi: 'Tháng 2 – Tháng 4',
    weatherAdj: 'warm and nice',
    weatherVi: 'ấm áp, hoa nở khắp nơi',
    question: "What's spring like in your country?",
    answer: "It's usually warm. There are lots of flowers and green plants.",
    answerVi: 'Trời thường ấm áp. Có rất nhiều hoa và cây cối xanh tươi.',
    activity: 'We usually visit relatives and go to the park in spring.',
    activityVi: 'Chúng mình thường đi chúc Tết họ hàng và ra công viên vào mùa xuân.',
  },
  {
    id: 'season-summer',
    iconKey: 'sun',
    seasonEn: 'Summer',
    seasonVi: 'Mùa hè',
    monthsVi: 'Tháng 5 – Tháng 7',
    weatherAdj: 'hot and sunny',
    weatherVi: 'nóng và nhiều nắng',
    question: "What's summer like in your country?",
    answer: "It's usually hot and sunny. Sometimes there is heavy rain.",
    answerVi: 'Trời thường nóng và có nắng. Thỉnh thoảng có mưa rào lớn.',
    activity: 'I usually go swimming and go to the beach in summer.',
    activityVi: 'Mình thường đi bơi và đi biển vào mùa hè.',
  },
  {
    id: 'season-autumn',
    iconKey: 'autumn',
    seasonEn: 'Autumn (Fall)',
    seasonVi: 'Mùa thu',
    monthsVi: 'Tháng 8 – Tháng 10',
    weatherAdj: 'cool and windy',
    weatherVi: 'mát mẻ, có gió heo may',
    question: "What's autumn like in your country?",
    answer: "It's usually cool and windy. Trees drop their yellow leaves.",
    answerVi: 'Trời thường mát mẻ và có gió. Cây cối rụng những chiếc lá vàng.',
    activity: 'We often fly kites and walk in the park in autumn.',
    activityVi: 'Chúng mình thường thả diều và đi dạo công viên vào mùa thu.',
  },
  {
    id: 'season-winter',
    iconKey: 'snowy',
    seasonEn: 'Winter',
    seasonVi: 'Mùa đông',
    monthsVi: 'Tháng 11 – Tháng 1',
    weatherAdj: 'cold and foggy',
    weatherVi: 'lạnh giá, hay có sương mù',
    question: "What's winter like in your country?",
    answer: "It's usually cold and dry. Sometimes it is foggy in the morning.",
    answerVi: 'Trời thường lạnh và khô. Đôi khi buổi sáng có sương mù.',
    activity: 'I wear a warm coat and stay at home to read books in winter.',
    activityVi: 'Mình mặc áo khoác ấm và ở nhà đọc sách vào mùa đông.',
  },
];

/* =========================================================
   UNIT 18 EXERCISES (PAGES 137–143 · OFFICIAL KEY PP. 174–175)
   ========================================================= */
export const U18_TASK1_PHONETICS: QuizChoiceItem[] = [
  {
    id: 'p137-t1-1',
    prompt: '1. Chọn từ có phần chữ "a" phát âm khác:',
    options: ['A. t[a]ke', 'B. l[a]te', 'C. t[a]ble', 'D. f[a]ll'],
    correctIndex: 3,
    explanation: 'take, late, table đều đọc "a" là /eɪ/; riêng "fall" đọc là /ɔː/.',
  },
  {
    id: 'p137-t1-2',
    prompt: '2. Chọn từ có phần chữ "i" phát âm khác:',
    options: ['A. w[i]nter', 'B. spr[i]ng', 'C. l[i]ke', 'D. f[i]shing'],
    correctIndex: 2,
    explanation: 'winter, spring, fishing đều đọc "i" ngắn /ɪ/; riêng "like" đọc là /aɪ/.',
  },
  {
    id: 'p137-t1-3',
    prompt: '3. Chọn từ có phần chữ "o" phát âm khác:',
    options: ['A. h[o]t', 'B. c[o]ld', 'C. s[o]ccer', 'D. v[o]lleyball'],
    correctIndex: 1,
    explanation: 'hot, soccer, volleyball đọc "o" là /ɒ/; riêng "cold" đọc là /əʊ/.',
  },
  {
    id: 'p137-t1-4',
    prompt: '4. Chọn từ có phần chữ "u" phát âm khác:',
    options: ['A. m[u]sic', 'B. h[u]ndred', 'C. s[u]mmer', 'D. b[u]s'],
    correctIndex: 0,
    explanation: 'hundred, summer, bus đều đọc "u" là /ʌ/; riêng "music" đọc là /juː/.',
  },
  {
    id: 'p137-t1-5',
    prompt: '5. Chọn từ có phần chữ "ea" phát âm khác:',
    options: ['A. w[ea]ther', 'B. s[ea]son', 'C. w[ea]r', 'D. br[ea]kfast'],
    correctIndex: 1,
    explanation: 'season đọc "ea" dài là /iː/; còn weather, breakfast (/e/) và wear (/eə/) không đọc /iː/.',
  },
];

export const U18_TASK2_ODD: QuizChoiceItem[] = [
  {
    id: 'p137-t2-1',
    prompt: '1. Chọn từ khác loại:',
    options: ['A. summer', 'B. cold', 'C. winter', 'D. spring'],
    correctIndex: 1,
    explanation: 'summer, winter, spring là tên các mùa; còn "cold" là tính từ chỉ thời tiết (lạnh).',
  },
  {
    id: 'p137-t2-2',
    prompt: '2. Chọn từ khác loại:',
    options: ['A. swimming', 'B. volleyball', 'C. bike', 'D. basketball'],
    correctIndex: 2,
    explanation: 'swimming, volleyball, basketball là môn thể thao; còn "bike" là phương tiện (xe đạp).',
  },
  {
    id: 'p137-t2-3',
    prompt: '3. Chọn từ khác loại:',
    options: ['A. play', 'B. badminton', 'C. go', 'D. ride'],
    correctIndex: 1,
    explanation: 'play, go, ride là động từ; còn "badminton" là danh từ môn cầu lông.',
  },
  {
    id: 'p137-t2-4',
    prompt: '4. Chọn từ khác loại:',
    options: ['A. activity', 'B. season', 'C. weather', 'D. like'],
    correctIndex: 3,
    explanation: 'activity, season, weather là danh từ; còn "like" là động từ/giới từ.',
  },
  {
    id: 'p137-t2-5',
    prompt: '5. Chọn từ khác loại:',
    options: ['A. cool', 'B. warm', 'C. fall', 'D. hot'],
    correctIndex: 2,
    explanation: 'cool, warm, hot là tính từ chỉ nhiệt độ; còn "fall" là danh từ mùa thu.',
  },
];

export const U18_TASK3_DEFS: FillItem[] = [
  {
    id: 'p138-t3-1',
    before: "1. It's usually warm and sunny in this season. →",
    hint: 'mùa xuân (6 chữ cái)',
    iconKey: 'spring',
    answers: ['spring'],
    explanation: 'Mùa ấm áp và nắng nhẹ là "spring" (mùa xuân).',
  },
  {
    id: 'p138-t3-2',
    before: '2. The natural movement of air. →',
    hint: 'gió (4 chữ cái)',
    iconKey: 'windy',
    answers: ['wind'],
    explanation: 'Sự chuyển động tự nhiên của không khí là "wind" (gió).',
  },
  {
    id: 'p138-t3-3',
    before: '3. This season comes after summer and before winter. →',
    hint: 'mùa thu (autumn hoặc fall)',
    iconKey: 'autumn',
    answers: ['autumn', 'fall'],
    explanation: 'Mùa sau mùa hè và trước mùa đông là "autumn" (hoặc "fall").',
  },
  {
    id: 'p138-t3-4',
    before: "4. It's very difficult to see through a thick cloud of very small drops of water in the air. →",
    hint: 'có sương mù (5 chữ cái, gấp đôi g)',
    iconKey: 'foggy',
    answers: ['foggy', 'fog'],
    explanation: 'Lớp mây hạt nước nhỏ dày đặc khó nhìn đường là "foggy" (có sương mù).',
  },
  {
    id: 'p138-t3-5',
    before: '5. When there are a lot of snow falls. →',
    hint: 'có nhiều tuyết rơi (5 chữ cái)',
    iconKey: 'snowy',
    answers: ['snowy'],
    explanation: 'Khi tuyết rơi nhiều là thời tiết "snowy".',
  },
];

export const U18_TASK4_AUSTRALIA_READING = {
  title: 'Task 4 · Read and tick True or False (Bốn mùa ngược ở nước Úc)',
  passage:
    'Australia is a beautiful country with different types of weather. There are four seasons across most of the country and a wet and dry season in the North. The seasons in Australia are at opposite times to those in Viet Nam. From December to February, it is summer. Autumn lasts from March to May. Between June and August is winter. Spring starts in September and ends in November. The wet season is between November and March. The dry season lasts from April to October.',
  passageVi:
    'Úc là một đất nước xinh đẹp với nhiều kiểu thời tiết khác nhau. Hầu hết đất nước có bốn mùa, còn miền Bắc nước Úc có hai mùa là mùa mưa và mùa khô. Các mùa ở Úc ngược thời điểm với Việt Nam. Từ tháng 12 đến tháng 2 là mùa hè. Mùa thu kéo dài từ tháng 3 đến tháng 5. Từ tháng 6 đến tháng 8 là mùa đông. Mùa xuân bắt đầu từ tháng 9 và kết thúc vào tháng 11. Mùa mưa từ tháng 11 đến tháng 3. Mùa khô kéo dài từ tháng 4 đến tháng 10.',
  statements: [
    {
      id: 'p138-t4-1',
      text: '1. There are four seasons in the North of Australia.',
      isTrue: false,
      explanation: 'Sai (False). Ở miền Bắc nước Úc chỉ có HAI mùa: mùa mưa (wet) và mùa khô (dry).',
    },
    {
      id: 'p138-t4-2',
      text: "2. Australia's seasons are similar to those in Viet Nam.",
      isTrue: false,
      explanation: 'Sai (False). Các mùa ở Úc NGƯỢC (opposite) với Việt Nam, không giống (similar).',
    },
    {
      id: 'p138-t4-3',
      text: '3. January is in summer in Australia.',
      isTrue: true,
      explanation: 'Đúng (True). Mùa hè ở Úc kéo dài từ tháng 12 đến tháng 2 → tháng 1 (January) là mùa hè.',
    },
    {
      id: 'p138-t4-4',
      text: '4. Winter lasts three months.',
      isTrue: true,
      explanation: 'Đúng (True). Mùa đông từ tháng 6 đến tháng 8 (tháng 6, 7, 8 → 3 tháng).',
    },
    {
      id: 'p138-t4-5',
      text: '5. The dry season lasts seven months.',
      isTrue: true,
      explanation: 'Đúng (True). Mùa khô từ tháng 4 đến tháng 10 (tháng 4, 5, 6, 7, 8, 9, 10 → đúng 7 tháng!).',
    },
  ],
};

export const U18_TASK5_P139: QuizChoiceItem[] = [
  {
    id: 'p139-t5-1',
    prompt: '1. She _____ doing aerobics.',
    options: ['A. are', 'B. does', 'C. is', 'D. has'],
    correctIndex: 2,
    explanation: 'Thì hiện tại tiếp diễn với "She" dùng to be "is" + V-ing (is doing).',
  },
  {
    id: 'p139-t5-2',
    prompt: '2. Lan: "_____ are you doing, Mai?" – Mai: "I\'m reading."',
    options: ['A. What', 'B. Who', 'C. Which', 'D. When'],
    correctIndex: 0,
    explanation: 'Hỏi đang làm gì dùng "What are you doing?".',
  },
  {
    id: 'p139-t5-3',
    prompt: '3. Mr Anh: "_____ sports do you play, Binh?" – Binh: "I play soccer."',
    options: ['A. Where', 'B. Who', 'C. Which', 'D. When'],
    correctIndex: 2,
    explanation: 'Hỏi bạn chơi môn thể thao nào dùng "Which sports do you play?".',
  },
  {
    id: 'p139-t5-4',
    prompt: '4. What do you do in your _____ time?',
    options: ['A. home', 'B. busy', 'C. good', 'D. free'],
    correctIndex: 3,
    explanation: 'Cụm cố định: in your free time (vào thời gian rảnh của bạn).',
  },
  {
    id: 'p139-t5-5',
    prompt: '5. "How _____ do you go swimming?" – "Once a week."',
    options: ['A. many', 'B. much', 'C. old', 'D. often'],
    correctIndex: 3,
    explanation: 'Câu trả lời "Once a week" (1 lần/tuần) chỉ tần suất → hỏi bằng "How often".',
  },
  {
    id: 'p139-t5-6',
    prompt: "6. Thu's brother plays tennis three _____ a week.",
    options: ['A. time', 'B. day', 'C. times', 'D. hour'],
    correctIndex: 2,
    explanation: 'Ba lần một tuần là "three times a week" (times có -s).',
  },
  {
    id: 'p139-t5-7',
    prompt: '7. My students sometimes _____ their kites.',
    options: ['A. play', 'B. fly', 'C. flys', 'D. run'],
    correctIndex: 1,
    explanation: 'Thả diều là "fly kites"; chủ ngữ số nhiều "My students" → giữ nguyên "fly".',
  },
  {
    id: 'p139-t5-8',
    prompt: '8. "_____ does Jack often do on Saturdays?" – "He often goes fishing."',
    options: ['A. When', 'B. Why', 'C. Where', 'D. What'],
    correctIndex: 3,
    explanation: 'Hỏi Jack thường làm gì vào thứ Bảy → dùng "What".',
  },
  {
    id: 'p139-t5-9',
    prompt: '9. How _____ seasons are there in a year?',
    options: ['A. much', 'B. many', 'C. long', 'D. often'],
    correctIndex: 1,
    explanation: '"seasons" đếm được số nhiều → dùng "How many seasons".',
  },
  {
    id: 'p139-t5-10',
    prompt: '10. George _____ before he goes to the club.',
    options: [
      'A. usually is swimming',
      'B. is usually swimming',
      'C. usually swims',
      'D. swims usually',
    ],
    correctIndex: 2,
    explanation: 'Trạng từ tần suất "usually" đứng TRƯỚC động từ thường; chủ ngữ George số ít → "usually swims".',
  },
  {
    id: 'p139-t5-11',
    prompt: "11. It's _____ in the summer.",
    options: ['A. cold', 'B. hot', 'C. cool', 'D. warm'],
    correctIndex: 1,
    explanation: 'Mùa hè (summer) trời nóng → "hot".',
  },
  {
    id: 'p139-t5-12',
    prompt: "12. It's cold in the _____.",
    options: ['A. Summer', 'B. Winter', 'C. Fall', 'D. Spring'],
    correctIndex: 1,
    explanation: 'Trời lạnh (cold) vào mùa đông → "Winter".',
  },
  {
    id: 'p139-t5-13',
    prompt: "13. Ba goes _____ when it's hot.",
    options: ['A. swim', 'B. swims', 'C. swimming', 'D. to the swim'],
    correctIndex: 2,
    explanation: 'Đi bơi là cụm cố định: go + V-ing → "goes swimming".',
  },
];

export const U18_TASK5_P140: QuizChoiceItem[] = [
  {
    id: 'p140-t5-14',
    prompt: '14. An: "What do you _____ when it\'s hot?" – "I go swimming."',
    options: ['A. do', 'B. does', 'C. doing', "D. don't"],
    correctIndex: 0,
    explanation: 'Sau trợ động từ "do you" dùng động từ nguyên thể → "do".',
  },
  {
    id: 'p140-t5-15',
    prompt: '15. What do you do _____ the Spring?',
    options: ['A. on', 'B. in', 'C. at', 'D. of'],
    correctIndex: 1,
    explanation: 'Trước các mùa trong năm luôn dùng giới từ "in" (in the Spring / in summer).',
  },
  {
    id: 'p140-t5-16',
    prompt: '16. I like Fall because the _____ is cool.',
    options: ['A. sport', 'B. seasons', 'C. weather', 'D. activities'],
    correctIndex: 2,
    explanation: 'Động từ số ít "is cool" → chủ ngữ là "weather" (thời tiết mát mẻ).',
  },
  {
    id: 'p140-t5-17',
    prompt: '17. When _____ warm, Ba goes fishing.',
    options: ["A. it's", 'B. it', 'C. they', "D. they're"],
    correctIndex: 0,
    explanation: 'Nói về thời tiết phải có chủ ngữ "it" + to be "is" → viết tắt "it’s warm".',
  },
  {
    id: 'p140-t5-18',
    prompt: '18. There are four _____ in a year.',
    options: ['A. spring', 'B. summer', 'C. seasons', 'D. winter'],
    correctIndex: 2,
    explanation: 'Có bốn mùa trong một năm → "four seasons".',
  },
  {
    id: 'p140-t5-19',
    prompt: '19. _____ you going to visit Hue this summer?',
    options: ['A. Do', 'B. Does', 'C. Are', 'D. Is'],
    correctIndex: 2,
    explanation: 'Cấu trúc dự định tương lai "be going to" với chủ ngữ "you" → "Are you going to...?".',
  },
  {
    id: 'p140-t5-20',
    prompt: '20. Trees drop their leaves in _____.',
    options: ['A. spring', 'B. summer', 'C. autumn', 'D. winter'],
    correctIndex: 2,
    explanation: 'Cây cối rụng lá vào mùa thu → "autumn".',
  },
];

export const U18_TASK6_WEATHER_BLANKS: ParagraphBlank[] = [
  {
    id: 'p140-t6-1',
    index: 1,
    answers: ['snowy'],
    hint: 'có tuyết rơi (bông tuyết ở Sa Pa)',
    iconKey: 'snowy',
  },
  {
    id: 'p140-t6-2',
    index: 2,
    answers: ['spring'],
    hint: 'mùa xuân (hoa nở ấm áp ở Hà Nội)',
    iconKey: 'spring',
  },
  {
    id: 'p140-t6-3',
    index: 3,
    answers: ['rain'],
    hint: 'mưa lớn (heavy ___ là danh từ)',
    iconKey: 'rainy',
  },
  {
    id: 'p140-t6-4',
    index: 4,
    answers: ['cool', 'windy'],
    hint: 'mát mẻ (22–26°C ở Đà Nẵng)',
    iconKey: 'windy',
  },
  {
    id: 'p140-t6-5',
    index: 5,
    answers: ['clouds'],
    hint: 'nhiều đám mây (danh từ số nhiều sau lots of)',
    iconKey: 'cloudy',
  },
];

export const U18_TASK7_PICTURES: FillItem[] = [
  {
    id: 'p141-t7-1',
    before: '1. It will be',
    after: 'in London tomorrow.',
    hint: 'có sương mù (5 chữ cái, gấp đôi g)',
    iconKey: 'foggy',
    answers: ['foggy'],
    explanation: 'Hình sương mù dày đặc → "foggy" (It will be foggy in London tomorrow).',
  },
  {
    id: 'p141-t7-2',
    before: '2. My favourite season is',
    after: '.',
    hint: 'mùa hè rực nắng (6 chữ cái)',
    iconKey: 'sun',
    answers: ['summer'],
    explanation: 'Mùa hè nắng rực rỡ → "summer".',
  },
  {
    id: 'p141-t7-3',
    before: '3. It is usually',
    after: 'at this time of the year.',
    hint: 'có nắng (5 chữ cái, gấp đôi n)',
    iconKey: 'sun',
    answers: ['sunny'],
    explanation: 'Sau "is usually" cần tính từ thời tiết có nắng → "sunny".',
  },
  {
    id: 'p141-t7-4',
    before: '4. There are black',
    after: 'in the sky.',
    hint: 'những đám mây đen (danh từ số nhiều)',
    iconKey: 'cloudy',
    answers: ['clouds'],
    explanation: 'Có "There are" nên danh từ đám mây ở dạng số nhiều → "clouds".',
  },
  {
    id: 'p141-t7-5',
    before: '5. It will be',
    after: 'tomorrow.',
    hint: 'có bão sấm chớp (6 chữ cái)',
    iconKey: 'stormy',
    answers: ['stormy'],
    explanation: 'Biểu tượng mưa bão và tia chớp → "stormy".',
  },
];

export const U18_TASK8_WORD_BANK = [
  'Pastimes',
  'free',
  'favorite',
  'their',
  'colors',
  'my',
  'with',
  'swimming',
];

export const U18_TASK8_BLANKS: ParagraphBlank[] = [
  {
    id: 'p142-t8-1',
    index: 1,
    answers: ['favorite', 'favourite'],
    hint: 'yêu thích (mùa yêu thích của mình)',
  },
  {
    id: 'p142-t8-2',
    index: 2,
    answers: ['colors', 'colours'],
    hint: 'những màu sắc (nâu, vàng, cam, đỏ)',
  },
  {
    id: 'p142-t8-3',
    index: 3,
    answers: ['swimming'],
    hint: 'đi bơi (go ___ every day)',
  },
  {
    id: 'p142-t8-4',
    index: 4,
    answers: ['my'],
    hint: 'của mình (đi chơi với bạn của mình)',
  },
  {
    id: 'p142-t8-5',
    index: 5,
    answers: ['with'],
    hint: 'cùng với (đi biển cùng gia đình)',
  },
];

export const U18_TASK9_ORDERS: OrderSentenceItem[] = [
  {
    id: 'p142-t9-1',
    words: ['will', 'the', 'What', 'be', 'tomorrow?', 'weather', 'like'],
    answer: 'What will the weather be like tomorrow?',
    meaning: 'Thời tiết ngày mai sẽ như thế nào?',
    explanation: 'Mẫu câu hỏi dự báo chuẩn: What will the weather be like tomorrow?',
  },
  {
    id: 'p142-t9-2',
    words: ['seasons', 'in', 'many', 'there', 'How', 'are', 'North?', 'the'],
    answer: 'How many seasons are there in the North?',
    meaning: 'Ở miền Bắc có bao nhiêu mùa?',
    explanation: 'How many seasons + are there + in the North?',
  },
  {
    id: 'p142-t9-3',
    words: ['is', 'because', 'cold.', 'winter', 'like', 'I', 'it'],
    answer: 'I like winter because it is cold.',
    meaning: 'Mình thích mùa đông vì trời lạnh.',
    explanation: 'I like + mùa + because + it is + tính từ thời tiết.',
  },
  {
    id: 'p142-t9-4',
    words: ['country?', 'autumn', 'is', 'in', 'What', 'your', 'like'],
    answer: 'What is autumn like in your country?',
    meaning: 'Mùa thu ở đất nước bạn như thế nào?',
    explanation: 'What is + mùa (autumn) + like + in your country?',
  },
  {
    id: 'p142-t9-5',
    words: ['season.', 'is', 'hot', 'in', 'It', 'often', 'dry', 'the'],
    answer: 'It is often hot in the dry season.',
    meaning: 'Trời thường nóng vào mùa khô.',
    explanation: 'Trạng từ tần suất "often" đứng SAU to be "is": It is often hot in the dry season.',
  },
];

export const U18_TASK10_WRITING: GuidedWritingPrompt[] = [
  {
    id: 'p143-t10-1',
    question: '1. Where do you live? How many seasons are there in your hometown?',
    starter: 'I live in ',
    sample: 'I live in Ha Noi. There are four seasons in my hometown: spring, summer, autumn and winter.',
    placeholder: 'Ha Noi / Ho Chi Minh City / Da Nang...',
  },
  {
    id: 'p143-t10-2',
    question: '2. What is your favourite season?',
    starter: 'My favourite season is ',
    sample: 'My favourite season is autumn.',
    placeholder: 'spring / summer / autumn / winter...',
  },
  {
    id: 'p143-t10-3',
    question: '3. What is the weather like in that season?',
    starter: 'It is usually ',
    sample: 'It is usually cool, dry and windy.',
    placeholder: 'cool and windy / warm and sunny...',
  },
  {
    id: 'p143-t10-4',
    question: '4. What do you usually do in your favourite season?',
    starter: 'I usually ',
    sample: 'I usually fly a kite and ride my bike in the park with my friends.',
    placeholder: 'go swimming / fly a kite / walk in the park...',
  },
  {
    id: 'p143-t10-5',
    question: '5. What will the weather be like tomorrow in your city?',
    starter: 'Tomorrow, it will be ',
    sample: 'Tomorrow, it will be warm and sunny in my city.',
    placeholder: 'warm and sunny / cool and cloudy...',
  },
];

/* =========================================================
   UNIT 19 VOCABULARY (28 WORDS: P.143 = 2 + P.144 = 25 + P.145 = 1)
   ========================================================= */
export const U19_VOCAB_PAGE143: PageVocabWord[] = [
  {
    word: 'visit',
    ipa: '/ˈvɪzɪt/',
    pos: 'v',
    meaning: 'thăm, ghé thăm',
    group: 'Động từ du lịch',
    example: "I'd like to visit Ha Long Bay one day.",
    exampleVi: 'Mình muốn ghé thăm Vịnh Hạ Long một ngày nào đó.',
    tip: 'Lưu ý: visit + địa điểm (KHÔNG thêm "to" sau visit: visit Hue, không viết visit to Hue!).',
  },
  {
    word: 'pagoda',
    ipa: '/pəˈɡəʊdə/',
    pos: 'n',
    meaning: 'ngôi chùa',
    group: 'Công trình & Địa danh',
    example: 'Thien Mu Pagoda is very famous in Hue.',
    exampleVi: 'Chùa Thiên Mụ rất nổi tiếng ở Huế.',
    tip: 'Phân biệt nhanh: pagoda = ngôi chùa (Phật giáo) · temple = ngôi đền.',
  },
];

export const U19_VOCAB_PAGE144: PageVocabWord[] = [
  {
    word: 'park',
    ipa: '/pɑːk/',
    pos: 'n',
    meaning: 'công viên',
    group: 'Công trình & Địa danh',
    example: "I'd like to visit Thong Nhat Park.",
    exampleVi: 'Mình muốn thăm Công viên Thống Nhất.',
    tip: 'Dam Sen Park (Công viên Đầm Sen), Thong Nhat Park (Công viên Thống Nhất).',
  },
  {
    word: 'temple',
    ipa: '/ˈtempl/',
    pos: 'n',
    meaning: 'ngôi đền',
    group: 'Công trình & Địa danh',
    example: 'Ngoc Son Temple is in the middle of Hoan Kiem Lake.',
    exampleVi: 'Đền Ngọc Sơn nằm ở giữa hồ Hoàn Kiếm.',
    tip: 'Đọc rõ 2 âm: TEM-pồ.',
  },
  {
    word: 'theatre',
    ipa: '/ˈθɪətə(r)/',
    pos: 'n',
    meaning: 'nhà hát',
    group: 'Công trình & Địa danh',
    example: 'Ha Noi Opera House is a famous theatre.',
    exampleVi: 'Nhà hát Lớn Hà Nội là một nhà hát nổi tiếng.',
    tip: 'Anh-Anh viết "theatre", Anh-Mỹ viết "theater" đều đúng.',
  },
  {
    word: 'bridge',
    ipa: '/brɪdʒ/',
    pos: 'n',
    meaning: 'cây cầu',
    group: 'Công trình & Địa danh',
    example: 'Trang Tien Bridge is in Hue.',
    exampleVi: 'Cầu Tràng Tiền ở Huế.',
    tip: 'Chữ "d" không đọc riêng, cụm "dge" đọc gọn /dʒ/: BRIJ.',
  },
  {
    word: 'city',
    ipa: '/ˈsɪti/',
    pos: 'n',
    meaning: 'thành phố',
    group: 'Địa điểm & Khu vực',
    example: 'Hue Imperial City is very old and beautiful.',
    exampleVi: 'Kinh thành Huế rất cổ kính và xinh đẹp.',
    tip: 'Số nhiều đổi y → ies: cities.',
  },
  {
    word: 'village',
    ipa: '/ˈvɪlɪdʒ/',
    pos: 'n',
    meaning: 'ngôi làng',
    group: 'Địa điểm & Khu vực',
    example: 'Life in the village is quiet and peaceful.',
    exampleVi: 'Cuộc sống ở ngôi làng thật yên tĩnh và thanh bình.',
    tip: 'Gần nghĩa với countryside (nông thôn).',
  },
  {
    word: 'town',
    ipa: '/taʊn/',
    pos: 'n',
    meaning: 'thị trấn, phố cổ',
    group: 'Địa điểm & Khu vực',
    example: 'Hoi An Ancient Town is more attractive than I expected.',
    exampleVi: 'Phố cổ Hội An hấp dẫn hơn mình tưởng.',
    tip: 'Quy mô: village (làng) < town (thị trấn) < city (thành phố).',
  },
  {
    word: 'museum',
    ipa: '/mjuˈziːəm/',
    pos: 'n',
    meaning: 'bảo tàng',
    group: 'Công trình & Địa danh',
    example: 'We visited the Museum of History last weekend.',
    exampleVi: 'Chúng mình đã thăm Bảo tàng Lịch sử cuối tuần trước.',
    tip: 'Nhấn âm 2: miu-ZI-ầm.',
  },
  {
    word: 'centre',
    ipa: '/ˈsentə(r)/',
    pos: 'n',
    meaning: 'trung tâm',
    group: 'Địa điểm & Khu vực',
    example: 'Ben Thanh Market is in the city centre.',
    exampleVi: 'Chợ Bến Thành nằm ở trung tâm thành phố.',
    tip: 'Cụm hay gặp: the city centre (trung tâm thành phố).',
  },
  {
    word: 'somewhere',
    ipa: '/ˈsʌmweə(r)/',
    pos: 'adv',
    meaning: 'một nơi nào đó',
    group: 'Địa điểm & Khu vực',
    example: "Let's go somewhere exciting this weekend!",
    exampleVi: 'Cuối tuần này mình đi đâu đó thật thú vị đi!',
    tip: 'Ghép some + where → một nơi nào đó.',
  },
  {
    word: 'zoo',
    ipa: '/zuː/',
    pos: 'n',
    meaning: 'sở thú',
    group: 'Công trình & Địa danh',
    example: 'The children love visiting the zoo.',
    exampleVi: 'Các bạn nhỏ rất thích đi thăm sở thú.',
    tip: 'Hai chữ "oo" đọc dài /uː/.',
  },
  {
    word: 'lake',
    ipa: '/leɪk/',
    pos: 'n',
    meaning: 'cái hồ',
    group: 'Công trình & Địa danh',
    example: 'Hoan Kiem Lake is in the centre of Ha Noi.',
    exampleVi: 'Hồ Hoàn Kiếm nằm ở trung tâm Hà Nội.',
    tip: 'Âm "a" đọc /eɪ/: LÊIK.',
  },
  {
    word: 'enjoy',
    ipa: '/ɪnˈdʒɔɪ/',
    pos: 'v',
    meaning: 'thích thú, tận hưởng',
    group: 'Cảm nhận & Trải nghiệm',
    example: 'Did you enjoy your trip to Nha Trang?',
    exampleVi: 'Bạn có thích chuyến đi Nha Trang không?',
    tip: 'Sau enjoy nếu có động từ thì thêm -ing (enjoy visiting).',
  },
  {
    word: 'expect',
    ipa: '/ɪkˈspekt/',
    pos: 'v',
    meaning: 'mong đợi, nghĩ rằng',
    group: 'Cảm nhận & Trải nghiệm',
    example: "It's more beautiful than I expected.",
    exampleVi: 'Nó đẹp hơn mình tưởng tượng.',
    tip: 'Quá khứ thêm -ed: expected! Luôn nằm trong cụm "than I expected".',
  },
  {
    word: 'exciting',
    ipa: '/ɪkˈsaɪtɪŋ/',
    pos: 'adj',
    meaning: 'hào hứng, sôi động, thú vị',
    group: 'Tính từ cảm nhận',
    example: 'Dam Sen Park is more exciting than I expected.',
    exampleVi: 'Công viên Đầm Sen sôi động hơn mình nghĩ.',
    tip: 'Tính từ dài (3 âm tiết) → so sánh hơn: MORE exciting (không viết excitinger!).',
  },
  {
    word: 'interesting',
    ipa: '/ˈɪntrəstɪŋ/',
    pos: 'adj',
    meaning: 'thú vị, lý thú',
    group: 'Tính từ cảm nhận',
    example: 'The Museum of History is more interesting than I expected.',
    exampleVi: 'Bảo tàng Lịch sử thú vị hơn mình tưởng.',
    tip: 'So sánh hơn: MORE interesting than...',
  },
  {
    word: 'attractive',
    ipa: '/əˈtræktɪv/',
    pos: 'adj',
    meaning: 'hấp dẫn, cuốn hút',
    group: 'Tính từ cảm nhận',
    example: 'Ha Long Bay is more attractive than I expected.',
    exampleVi: 'Vịnh Hạ Long hấp dẫn hơn mình tưởng.',
    tip: 'So sánh hơn: MORE attractive than... (đề thi Unit 19 cực hay hỏi từ này!).',
  },
  {
    word: 'in the middle of',
    ipa: '/ɪn ðə ˈmɪdl əv/',
    pos: 'phr',
    meaning: 'ở giữa (cái gì đó)',
    group: 'Địa điểm & Khu vực',
    example: 'Turtle Tower is in the middle of Hoan Kiem Lake.',
    exampleVi: 'Tháp Rùa nằm ở chính giữa hồ Hoàn Kiếm.',
    tip: 'Nhớ đủ 4 chữ: in + the + middle + of.',
  },
  {
    word: 'weekend',
    ipa: '/ˌwiːkˈend/',
    pos: 'n',
    meaning: 'cuối tuần',
    group: 'Thời gian & Con người',
    example: 'Where did you go last weekend?',
    exampleVi: 'Cuối tuần trước bạn đã đi đâu?',
    tip: 'Week (tuần) + end (kết thúc) → cuối tuần (thứ Bảy & Chủ nhật).',
  },
  {
    word: 'delicious',
    ipa: '/dɪˈlɪʃəs/',
    pos: 'adj',
    meaning: 'ngon miệng',
    group: 'Tính từ cảm nhận',
    example: 'The food in Hue is very delicious.',
    exampleVi: 'Đồ ăn ở Huế rất ngon.',
    tip: 'Nhấn âm 2: đi-LI-shợt.',
  },
  {
    word: 'people',
    ipa: '/ˈpiːpl/',
    pos: 'n',
    meaning: 'người, con người (số nhiều)',
    group: 'Thời gian & Con người',
    example: 'The people there are very friendly.',
    exampleVi: 'Con người ở đó rất thân thiện.',
    tip: 'People luôn là số nhiều → đi với "are / were" (The people are friendly).',
  },
  {
    word: 'history',
    ipa: '/ˈhɪstri/',
    pos: 'n',
    meaning: 'lịch sử',
    group: 'Cảm nhận & Trải nghiệm',
    example: 'We learn about Vietnamese history at the museum.',
    exampleVi: 'Chúng mình tìm hiểu lịch sử Việt Nam ở bảo tàng.',
    tip: 'Museum of History = Bảo tàng Lịch sử.',
  },
  {
    word: 'statue',
    ipa: '/ˈstætʃuː/',
    pos: 'n',
    meaning: 'bức tượng',
    group: 'Công trình & Địa danh',
    example: 'There is a big statue in the middle of the yard.',
    exampleVi: 'Có một bức tượng lớn ở giữa sân.',
    tip: 'Đọc là STAE-chu.',
  },
  {
    word: 'yard',
    ipa: '/jɑːd/',
    pos: 'n',
    meaning: 'cái sân',
    group: 'Địa điểm & Khu vực',
    example: 'Students play games in the school yard.',
    exampleVi: 'Học sinh chơi trò chơi ở sân trường.',
    tip: 'School yard = sân trường.',
  },
  {
    word: 'holiday',
    ipa: '/ˈhɒlədeɪ/',
    pos: 'n',
    meaning: 'kỳ nghỉ, ngày lễ',
    group: 'Thời gian & Con người',
    example: 'We had a wonderful summer holiday in Phu Quoc.',
    exampleVi: 'Chúng mình đã có một kỳ nghỉ hè tuyệt vời ở Phú Quốc.',
    tip: 'On holiday = đang đi nghỉ mát.',
  },
];

export const U19_VOCAB_PAGE145: PageVocabWord[] = [
  {
    word: 'place',
    ipa: '/pleɪs/',
    pos: 'n',
    meaning: 'địa điểm, nơi chốn',
    group: 'Địa điểm & Khu vực',
    example: 'Which place would you like to visit?',
    exampleVi: 'Bạn muốn ghé thăm địa điểm nào?',
    tip: 'Từ khóa chính của tựa đề Unit 19: "Which place...?".',
  },
];

/* =========================================================
   UNIT 19 INTERACTIVE LANDMARK EXPLORER (PAGE 145)
   ========================================================= */
export const U19_LANDMARK_PRESETS: LandmarkExplorePreset[] = [
  {
    id: 'lm-halong',
    iconKey: 'island',
    placeEn: 'Ha Long Bay',
    placeVi: 'Vịnh Hạ Long',
    cityVi: 'Quảng Ninh',
    pairAlternativeEn: 'Phu Quoc Island',
    pairAlternativeVi: 'Đảo Phú Quốc',
    adjComparative: 'more attractive',
    adjVi: 'hấp dẫn hơn',
    whichQuestion: 'Which place would you like to visit, Ha Long Bay or Phu Quoc Island?',
    whichAnswer: "I'd like to visit Ha Long Bay.",
    thinkQuestion: 'What do you think of Ha Long Bay?',
    thinkAnswer: "It's more attractive than I expected.",
    thinkAnswerVi: 'Vịnh Hạ Long hấp dẫn hơn mình tưởng rất nhiều!',
    tip: 'attractive có 3 âm tiết (tính từ dài) → dùng "more attractive than I expected".',
  },
  {
    id: 'lm-thienmu',
    iconKey: 'pagoda',
    placeEn: 'Thien Mu Pagoda',
    placeVi: 'Chùa Thiên Mụ',
    cityVi: 'Huế',
    pairAlternativeEn: 'Trang Tien Bridge',
    pairAlternativeVi: 'Cầu Tràng Tiền',
    adjComparative: 'more beautiful',
    adjVi: 'xinh đẹp hơn',
    whichQuestion: 'Which place would you like to visit, Thien Mu Pagoda or Trang Tien Bridge?',
    whichAnswer: "I'd like to visit Thien Mu Pagoda.",
    thinkQuestion: 'What do you think of Thien Mu Pagoda?',
    thinkAnswer: "It's more beautiful than I expected.",
    thinkAnswerVi: 'Chùa Thiên Mụ đẹp hơn mình tưởng!',
    tip: 'Có 2 lựa chọn nối bằng "or" → dùng từ hỏi "Which place...?".',
  },
  {
    id: 'lm-damsen',
    iconKey: 'park',
    placeEn: 'Dam Sen Park',
    placeVi: 'Công viên Đầm Sen',
    cityVi: 'TP. Hồ Chí Minh',
    pairAlternativeEn: 'Ben Thanh Market',
    pairAlternativeVi: 'Chợ Bến Thành',
    adjComparative: 'more exciting',
    adjVi: 'sôi động / thú vị hơn',
    whichQuestion: 'Which place would you like to visit, Dam Sen Park or Ben Thanh Market?',
    whichAnswer: "I'd like to visit Dam Sen Park.",
    thinkQuestion: 'What do you think of Dam Sen Park?',
    thinkAnswer: "It's more exciting than I expected.",
    thinkAnswerVi: 'Công viên Đầm Sen sôi động hơn mình nghĩ!',
    tip: 'exciting là tính từ dài → KHÔNG thêm -er, phải dùng "more exciting".',
  },
  {
    id: 'lm-museum',
    iconKey: 'museum',
    placeEn: 'the Museum of History',
    placeVi: 'Bảo tàng Lịch sử',
    cityVi: 'Hà Nội',
    pairAlternativeEn: 'Thong Nhat Park',
    pairAlternativeVi: 'Công viên Thống Nhất',
    adjComparative: 'more interesting',
    adjVi: 'lý thú hơn',
    whichQuestion: 'Which place would you like to visit, Thong Nhat Park or the Museum of History?',
    whichAnswer: "I'd like to visit the Museum of History.",
    thinkQuestion: 'What do you think of the Museum of History?',
    thinkAnswer: "It's more interesting than I expected.",
    thinkAnswerVi: 'Bảo tàng Lịch sử thú vị hơn mình tưởng!',
    tip: 'Sau "I’d like" luôn đi với "to + V nguyên thể": I’d like to visit...',
  },
  {
    id: 'lm-ngocson',
    iconKey: 'temple',
    placeEn: 'Ngoc Son Temple',
    placeVi: 'Đền Ngọc Sơn',
    cityVi: 'Hà Nội',
    pairAlternativeEn: 'Trang Tien Bridge',
    pairAlternativeVi: 'Cầu Tràng Tiền',
    adjComparative: 'bigger',
    adjVi: 'lớn hơn',
    whichQuestion: 'Which place would you like to visit, Ngoc Son Temple or Trang Tien Bridge?',
    whichAnswer: "I'd like to visit Ngoc Son Temple.",
    thinkQuestion: 'What do you think of Ngoc Son Temple?',
    thinkAnswer: "It's bigger than I expected.",
    thinkAnswerVi: 'Đền Ngọc Sơn lớn hơn mình tưởng!',
    tip: 'big là tính từ NGẮN (1 âm tiết) → gấp đôi g + er: "bigger than I expected"!',
  },
];

/* =========================================================
   UNIT 19 EXERCISES PART 1 (PAGES 145–146 · OFFICIAL KEY P. 175)
   ========================================================= */
export const U19_TASK1_ODD: QuizChoiceItem[] = [
  {
    id: 'p145-t1-1',
    prompt: '1. Chọn từ khác loại:',
    options: ['A. park', 'B. pagoda', 'C. market', 'D. place'],
    correctIndex: 3,
    explanation: 'park (công viên), pagoda (chùa), market (chợ) là địa điểm cụ thể; còn "place" là danh từ chung (địa điểm).',
  },
  {
    id: 'p145-t1-2',
    prompt: '2. Chọn từ khác loại:',
    options: ['A. visit', 'B. weather', 'C. get', 'D. expect'],
    correctIndex: 1,
    explanation: 'visit, get, expect là động từ; còn "weather" là danh từ (thời tiết).',
  },
  {
    id: 'p145-t1-3',
    prompt: '3. Chọn từ khác loại:',
    options: ['A. beautiful', 'B. delicious', 'C. friendly', 'D. really'],
    correctIndex: 3,
    explanation: 'beautiful, delicious, friendly là tính từ; còn "really" là trạng từ (thật sự).',
  },
  {
    id: 'p145-t1-4',
    prompt: '4. Chọn từ khác loại:',
    options: ['A. interesting', 'B. exciting', 'C. living', 'D. attractive'],
    correctIndex: 2,
    explanation: 'interesting, exciting, attractive là tính từ miêu tả cảm nhận thú vị/hấp dẫn; còn "living" là động từ V-ing (sống).',
  },
  {
    id: 'p145-t1-5',
    prompt: '5. Chọn từ khác loại:',
    options: ['A. museum', 'B. theatre', 'C. island', 'D. people'],
    correctIndex: 3,
    explanation: 'museum (bảo tàng), theatre (nhà hát), island (hòn đảo) là địa điểm; còn "people" là con người.',
  },
];

export const U19_TASK2_MC: QuizChoiceItem[] = [
  {
    id: 'p146-t2-1',
    prompt: '1. Ha Long Bay is _____ than I expected.',
    options: ['A. attracter', 'B. more attractive', 'C. attractiveness', 'D. attractively'],
    correctIndex: 1,
    explanation: 'Có "than" (so sánh hơn) và "attractive" là tính từ dài → dùng "more attractive".',
  },
  {
    id: 'p146-t2-2',
    prompt: '2. There _____ a lot of flowers at the festival last week.',
    options: ['A. are', 'B. were', 'C. was', 'D. is'],
    correctIndex: 1,
    explanation: 'Có "last week" (quá khứ) và "a lot of flowers" (số nhiều) → dùng "were".',
  },
  {
    id: 'p146-t2-3',
    prompt: '3. I think I _____ it one day.',
    options: ['A. visit', 'B. visited', 'C. will visit', 'D. visiting'],
    correctIndex: 2,
    explanation: '"I think ... one day" (mình nghĩ một ngày nào đó mình sẽ...) → dùng thì tương lai đơn "will visit".',
  },
  {
    id: 'p146-t2-4',
    prompt: '4. _____ you going to Nha Trang next week?',
    options: ['A. Is', 'B. Are', 'C. Do', 'D. Did'],
    correctIndex: 1,
    explanation: 'Đi với chủ ngữ "you" và "going to" → dùng trợ động từ to be "Are".',
  },
  {
    id: 'p146-t2-5',
    prompt: "5. I'd like _____ Thong Nhat Park.",
    options: ['A. visit', 'B. to visit', 'C. visiting', 'D. visited'],
    correctIndex: 1,
    explanation: 'Cấu trúc chuẩn: would like + to + động từ nguyên thể → "to visit".',
  },
  {
    id: 'p146-t2-6',
    prompt: '6. Which place would you like to visit, Ben Thanh Market _____ the city centre?',
    options: ['A. and', 'B. but', 'C. with', 'D. or'],
    correctIndex: 3,
    explanation: 'Câu hỏi lựa chọn 1 trong 2 phương án dùng liên từ "or" (hay là).',
  },
];

export const U19_TASK3_P146: FillItem[] = [
  {
    id: 'p146-t3-1',
    before: "1. It's a place, often in the countryside, for people to buy and sell things. →",
    hint: 'khu chợ mua bán hàng hóa (6 chữ cái)',
    iconKey: 'market',
    answers: ['market'],
    explanation: 'Nơi mọi người mua và bán hàng hóa là "market" (chợ).',
  },
  {
    id: 'p146-t3-2',
    before: '2. It is land surrounded by water. →',
    hint: 'hòn đảo (vùng đất được nước bao quanh, 6 chữ cái)',
    iconKey: 'island',
    answers: ['island'],
    explanation: 'Vùng đất được nước bao quanh bốn bề là "island" (hòn đảo · chữ s bị câm!).',
  },
];
