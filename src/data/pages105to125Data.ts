import type {
  FillItem,
  GuidedWritingPrompt,
  OrderSentenceItem,
  PageVocabWord,
  ParagraphBlank,
  QuizChoiceItem,
} from './pages1to20Data';
import type { PairMatchItem } from './pages21to41Data';
import type { MistakeItem } from './pages84to104Data';

export interface PageMeta125 {
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
    | 16;
  title: string;
  subtitle: string;
  sectionTag: string;
}

export interface PastVerbRow {
  id: string;
  number: number;
  base: string;
  past: string;
  meaningVi: string;
  kind: 'regular' | 'irregular';
  tip: string;
}

export interface WordBankClozeItem {
  id: string;
  number: number;
  before: string;
  after: string;
  answers: string[];
  bankWord: string;
  explanation: string;
}

export interface StoryCriticPreset {
  id: string;
  iconKey: string;
  storyEn: string;
  storyVi: string;
  characterEn: string;
  characterVi: string;
  adjectiveEn: string;
  adjectiveVi: string;
  question: string;
  answer: string;
  answerVi: string;
  summary: string;
  summaryVi: string;
}

export interface DreamJobPreset {
  id: string;
  iconKey: string;
  article: 'a' | 'an';
  jobEn: string;
  jobVi: string;
  workplace: string;
  workplaceVi: string;
  reasonVerb: string;
  reasonVi: string;
  questionWhat: string;
  answerWhat: string;
  questionWhy: string;
  answerWhy: string;
  tip: string;
}

export interface NeighborhoodPlace {
  id: string;
  iconKey: string;
  nameEn: string;
  nameVi: string;
  streetLabel: string;
  prepositionHighlight: string;
  whereQuestion: string;
  whereAnswer: string;
  whereAnswerVi: string;
  howQuestion: string;
  howAnswer: string;
  howAnswerVi: string;
}

export const PAGES_105_TO_125_INDEX: PageMeta125[] = [
  {
    page: 105,
    unit: 14,
    title: 'Unit 14 · Từ vựng cổ tích & nhân vật (Phần 2 · 25 từ)',
    subtitle: 'Hoàng tử, lâu đài, quả khế vàng, quạ & cáo, tính cách nhân vật (greedy, kind, angry...)',
    sectionTag: 'Từ vựng',
  },
  {
    page: 106,
    unit: 14,
    title: 'Unit 14 · 4 từ cuối & 3 mẫu câu kể chuyện + nhận xét nhân vật',
    subtitle: 'folk tales, honest, wise, stupid · First/Then/Next/In the end & Xưởng bình luận nhân vật',
    sectionTag: 'Từ vựng · Ngữ pháp',
  },
  {
    page: 107,
    unit: 14,
    title: 'Unit 14 · Task 1 (Odd one out), Task 2 (Đổi 10 động từ quá khứ) & Task 3',
    subtitle: 'Luyện phân loại từ, đổi 10 động từ V1 → V2 (found, thought, heard, stood...) & 5 câu trắc nghiệm',
    sectionTag: 'Bài tập',
  },
  {
    page: 108,
    unit: 14,
    title: 'Unit 14 · Task 4 (Cây khế vàng), Task 5 (Thỏ và Rùa) & Task 6 (Câu 1)',
    subtitle: 'Đọc hiểu Đúng/Sai Cây khế, điền 5 chỗ trống Thỏ & Rùa và nhận xét chú Cáo khôn ngoan',
    sectionTag: 'Đọc · Điền tranh',
  },
  {
    page: 109,
    unit: 14,
    title: 'Unit 14 · Task 6 (Câu 2–5) & Task 7 (Sắp xếp 5 câu hỏi chuyện)',
    subtitle: 'Miêu tả Quạ, người anh tham lam, Công chúa, Rùa & ghép 5 câu hỏi về truyện cổ tích',
    sectionTag: 'Tranh · Viết câu',
  },
  {
    page: 110,
    unit: 14,
    title: 'Unit 14 · Task 8 (10 câu điền từ kho 14 từ) & Task 9 (Viết về truyện yêu thích)',
    subtitle: 'Hoàn thành 10 câu chuyện cổ tích có lưu ý thì quá khứ & tự viết bài giới thiệu truyện em thích',
    sectionTag: 'Tổng ôn Unit 14',
  },
  {
    page: 111,
    unit: 15,
    title: 'Unit 15 · Từ vựng nghề nghiệp tương lai (Phần 1 · 19 từ)',
    subtitle: 'What would you like to be in the future? · pilot, architect, engineer, writer, nurse, farmer...',
    sectionTag: 'Từ vựng · Mở đầu Unit 15',
  },
  {
    page: 112,
    unit: 15,
    title: 'Unit 15 · Từ vựng vũ trụ & mơ ước (16 từ) + Mẫu câu would like to be',
    subtitle: 'grow up, look after, patient, design, astronaut, spaceship · Quy tắc dùng a / an nghề nghiệp',
    sectionTag: 'Từ vựng · Ngữ pháp',
  },
  {
    page: 113,
    unit: 15,
    title: 'Unit 15 · Hỏi lý do chọn nghề (Why...?) · Task 1 & Task 2 (6 câu trắc nghiệm)',
    subtitle: 'Sơ đồ ước mơ + Xưởng khám phá 6 nghề nghiệp · Phân loại từ & luyện mẫu Why / Because',
    sectionTag: 'Ngữ pháp · Bài tập',
  },
  {
    page: 114,
    unit: 15,
    title: 'Unit 15 · Task 3 (Đoán 5 nghề qua mô tả) & Task 4 (Thư Jim gửi Ông nội)',
    subtitle: 'Nhìn hình gọi tên teacher, architect, farmer, dancers, policeman & đọc hiểu thư ước mơ phi công',
    sectionTag: 'Đoán nghề · Đọc hiểu',
  },
  {
    page: 115,
    unit: 15,
    title: 'Unit 15 · Task 5 (Sửa 5 lỗi sai viết lại câu) & Task 6 (Ngôi trường mơ ước của Lê)',
    subtitle: 'Bắt lỗi do/would, thiếu like, a/an astronaut, in space, likes & điền 5 từ theo tranh trường học',
    sectionTag: 'Sửa lỗi · Điền tranh',
  },
  {
    page: 116,
    unit: 15,
    title: 'Unit 15 · Task 7 (Nhìn tranh điền 5 nghề) & Task 8 (Sắp xếp câu 1–2)',
    subtitle: 'Luyện viết câu với pilot, football player, architect, nurse, policeman & ghép câu hỏi nghề nghiệp',
    sectionTag: 'Tranh · Viết câu',
  },
  {
    page: 117,
    unit: 15,
    title: 'Unit 15 · Task 8 (Sắp xếp câu 3–5) & Task 9 (Viết về nghề nghiệp mơ ước)',
    subtitle: 'Hoàn tất 5 câu sắp xếp về dream job & tự viết đoạn văn kể nghề em muốn làm khi lớn lên',
    sectionTag: 'Tổng ôn Unit 15',
  },
  {
    page: 118,
    unit: 16,
    title: 'Unit 16 · Từ vựng địa điểm & chỉ đường (Phần 1 · 19 từ)',
    subtitle: 'Where is the post office? · bus stop, pharmacy, museum, theatre, next to, opposite, between...',
    sectionTag: 'Từ vựng · Mở đầu Unit 16',
  },
  {
    page: 119,
    unit: 16,
    title: 'Unit 16 · Từ vựng rẽ hướng (9 từ) & Sơ đồ giới từ chỉ nơi chốn (Phần 1)',
    subtitle: 'turn left, turn right, take a coach/boat · Phân biệt at / in / on / above / over / opposite / in front of',
    sectionTag: 'Từ vựng · Ngữ pháp',
  },
  {
    page: 120,
    unit: 16,
    title: 'Unit 16 · Giới từ nơi chốn (Phần 2), Động từ can & Bản đồ chỉ đường tương tác',
    subtitle: 'behind, at the end of, near/next to · Mẫu How can I get to...? & khám phá bản đồ khu phố',
    sectionTag: 'Ngữ pháp · Tương tác',
  },
  {
    page: 121,
    unit: 16,
    title: 'Unit 16 · 3 cách dùng can · Task 1 (Odd one out) & Task 2 (Câu 1–6)',
    subtitle: 'Khả năng, phỏng đoán, xin phép Can/Could I...? · Luyện phân loại từ & trắc nghiệm giới từ địa điểm',
    sectionTag: 'Ngữ pháp · Bài tập',
  },
  {
    page: 122,
    unit: 16,
    title: 'Unit 16 · Task 2 (Câu 7–8) & Task 3 (Nối 6 địa điểm với công dụng)',
    subtitle: 'at the end of, How can I get to... & ghép hình trạm xe buýt, bảo tàng, nhà hát, thư viện, bưu điện, hiệu thuốc',
    sectionTag: 'Trắc nghiệm · Ghép hình',
  },
  {
    page: 123,
    unit: 16,
    title: 'Unit 16 · Task 4 (Đường đi bộ tới trường mới) & Task 5 (Du lịch Đảo Côn Đảo)',
    subtitle: 'Đọc hiểu bản đồ đường White Street → Pink Street & điền 5 phương tiện du lịch Côn Đảo',
    sectionTag: 'Đọc · Điền tranh',
  },
  {
    page: 124,
    unit: 16,
    title: 'Unit 16 · Task 6 (Nhìn tranh điền 5 câu chỉ vị trí) & Task 7 (Sắp xếp câu 1)',
    subtitle: 'Luyện between, bus stop, post office, opposite, corner & hỏi đường tới bảo tàng thật lịch sự',
    sectionTag: 'Tranh · Viết câu',
  },
  {
    page: 125,
    unit: 16,
    title: 'Unit 16 · Task 7 (Câu 2–5) & Task 8 (Viết về đường tới trường của em)',
    subtitle: 'Hoàn tất trọn vẹn Unit 16 và cán mốc 125 trang sách Tiếng Anh Lớp 5 trực quan!',
    sectionTag: 'Tổng ôn Unit 16',
  },
];

/* =========================================================
   UNIT 14 COMPLETION (PAGES 105–110)
   ========================================================= */

export const U14_VOCAB_PAGE105: PageVocabWord[] = [
  { word: 'prince', ipa: '/prɪns/', pos: 'n', meaning: 'hoàng tử', group: 'Nhân vật & Bối cảnh', example: 'The prince visited the castle.', exampleVi: 'Hoàng tử đã đến thăm tòa lâu đài.', tip: 'Phân biệt: prince (hoàng tử) – princess (công chúa).' },
  { word: 'ago', ipa: '/əˈɡəʊ/', pos: 'adv', meaning: 'cách đây (trong quá khứ)', group: 'Thời gian kể chuyện', example: 'Many years ago, there was a kind girl.', exampleVi: 'Nhiều năm về trước, có một cô gái tốt bụng.', tip: 'Luôn đứng sau khoảng thời gian: two years ago, long ago.' },
  { word: 'castle', ipa: '/ˈkɑːsl/', pos: 'n', meaning: 'lâu đài', group: 'Nhân vật & Bối cảnh', example: 'The princess lived in a big castle.', exampleVi: 'Công chúa sống trong một tòa lâu đài lớn.', tip: 'Chữ t bị câm: đọc /ˈkɑːsl/ (không đọc chữ t).' },
  { word: 'magic', ipa: '/ˈmædʒɪk/', pos: 'n/adj', meaning: 'phép thuật, kỳ diệu', group: 'Nhân vật & Bối cảnh', example: 'Aladdin had a magic lamp.', exampleVi: 'Aladdin có một cây đèn thần kỳ diệu.', tip: 'Tính từ mở rộng: magical (kỳ diệu).' },
  { word: 'surprise', ipa: '/səˈpraɪz/', pos: 'n/v', meaning: 'sự ngạc nhiên, làm ngạc nhiên', group: 'Cảm xúc & Tính cách', example: 'Folk tales give me one surprise after another.', exampleVi: 'Truyện dân gian mang đến cho mình hết bất ngờ này đến bất ngờ khác.', tip: 'Cảm thấy bất ngờ dùng tính từ: be surprised.' },
  { word: 'happy', ipa: '/ˈhæpi/', pos: 'adj', meaning: 'vui mừng, hạnh phúc', group: 'Cảm xúc & Tính cách', example: 'They were very happy.', exampleVi: 'Họ đã rất hạnh phúc.', tip: 'Trạng từ: happily (một cách hạnh phúc).' },
  { word: 'walk', ipa: '/wɔːk/', pos: 'v', meaning: 'đi bộ', group: 'Hành động trong truyện', example: 'The tortoise walked very slowly.', exampleVi: 'Chú Rùa bước đi rất chậm rãi.', tip: 'Quá khứ có quy tắc: walk → walked (chữ l câm).' },
  { word: 'run', ipa: '/rʌn/', pos: 'v', meaning: 'chạy', group: 'Hành động trong truyện', example: 'The hare ran very fast.', exampleVi: 'Chú Thỏ chạy rất nhanh.', tip: 'Quá khứ bất quy tắc: run → ran.' },
  { word: 'ever after', ipa: '/ˈevər ˈɑːftə(r)/', pos: 'phr', meaning: 'kể từ đó về sau', group: 'Thời gian kể chuyện', example: 'They lived happily ever after.', exampleVi: 'Họ sống hạnh phúc mãi mãi về sau.', tip: 'Câu kết kinh điển của mọi truyện cổ tích!' },
  { word: 'marry', ipa: '/ˈmæri/', pos: 'v', meaning: 'kết hôn, cưới', group: 'Hành động trong truyện', example: 'The prince married the princess.', exampleVi: 'Hoàng tử đã cưới công chúa.', tip: 'Cụm đồng nghĩa hay dùng: get married → got married.' },
  { word: 'meet', ipa: '/miːt/', pos: 'v', meaning: 'gặp gỡ', group: 'Hành động trong truyện', example: 'He met a beautiful princess.', exampleVi: 'Chàng gặp một nàng công chúa xinh đẹp.', tip: 'Quá khứ bất quy tắc bỏ 1 chữ e: meet → met.' },
  { word: 'star fruit', ipa: '/ˈstɑː fruːt/', pos: 'n', meaning: 'quả khế', group: 'Truyện Cây khế & Quạ Cáo', example: 'The younger brother had one star fruit tree.', exampleVi: 'Người em chỉ có một cây khế.', tip: 'Cắt ngang quả khế có hình ngôi sao (star) nên gọi là star fruit!' },
  { word: 'golden', ipa: '/ˈɡəʊldən/', pos: 'adj', meaning: 'bằng vàng, màu vàng óng', group: 'Truyện Cây khế & Quạ Cáo', example: 'I like The Golden Starfruit Tree.', exampleVi: 'Mình thích truyện Cây khế vàng.', tip: 'gold (vàng - danh từ) → golden (bằng vàng - tính từ).' },
  { word: 'greedy', ipa: '/ˈɡriːdi/', pos: 'adj', meaning: 'tham lam', group: 'Cảm xúc & Tính cách', example: 'The elder brother was very greedy.', exampleVi: 'Người anh trai rất tham lam.', tip: 'Trái nghĩa với greedy là generous (hào phóng) hoặc honest (thật thà).' },
  { word: 'kind', ipa: '/kaɪnd/', pos: 'adj', meaning: 'tốt bụng', group: 'Cảm xúc & Tính cách', example: 'Snow White is beautiful and kind.', exampleVi: 'Bạch Tuyết xinh đẹp và tốt bụng.', tip: 'Lưu ý: danh từ kind còn có nghĩa là "loại" (What kinds of stories...).' },
  { word: 'character', ipa: '/ˈkærəktə(r)/', pos: 'n', meaning: 'nhân vật', group: 'Nhân vật & Bối cảnh', example: 'Who is the main character in the story?', exampleVi: 'Ai là nhân vật chính trong câu chuyện?', tip: 'Chữ ch đọc là /k/: /ˈkærəktə/.' },
  { word: 'angry', ipa: '/ˈæŋɡri/', pos: 'adj', meaning: 'tức giận', group: 'Cảm xúc & Tính cách', example: 'King Hung was angry with An Tiem.', exampleVi: 'Vua Hùng đã tức giận với An Tiêm.', tip: 'Đi với giới từ with: be angry with someone.' },
  { word: 'one day', ipa: '/wʌn deɪ/', pos: 'phr', meaning: 'một ngày nọ', group: 'Thời gian kể chuyện', example: 'One day, An Tiem found some black seeds.', exampleVi: 'Một ngày nọ, An Tiêm tìm thấy vài hạt đen.', tip: 'Thường đặt đầu câu để mở ra bước ngoặt của truyện.' },
  { word: 'roof', ipa: '/ruːf/', pos: 'n', meaning: 'mái nhà', group: 'Truyện Cây khế & Quạ Cáo', example: 'The crow stood on the roof of a house.', exampleVi: 'Con quạ đậu trên mái một ngôi nhà.', tip: 'Số nhiều thêm -s: roofs.' },
  { word: 'piece', ipa: '/piːs/', pos: 'n', meaning: 'mảnh, miếng, mẩu', group: 'Truyện Cây khế & Quạ Cáo', example: 'The crow had a piece of meat.', exampleVi: 'Con quạ có một miếng thịt.', tip: 'Cụm hay gặp: a piece of meat / a piece of cake.' },
  { word: 'meat', ipa: '/miːt/', pos: 'n', meaning: 'thịt', group: 'Truyện Cây khế & Quạ Cáo', example: 'The fox wanted to eat the meat.', exampleVi: 'Con cáo muốn ăn miếng thịt đó.', tip: 'Đồng âm với meet (gặp) nhưng viết là m-e-a-t.' },
  { word: 'give', ipa: '/ɡɪv/', pos: 'v', meaning: 'đưa cho, tặng', group: 'Hành động trong truyện', example: 'Can you give me some meat?', exampleVi: 'Bạn có thể cho mình chút thịt không?', tip: 'Quá khứ bất quy tắc: give → gave.' },
  { word: 'beak', ipa: '/biːk/', pos: 'n', meaning: 'cái mỏ (chim, quạ)', group: 'Truyện Cây khế & Quạ Cáo', example: 'The crow opened its beak to sing.', exampleVi: 'Con quạ há mỏ ra để hát.', tip: 'Đọc âm /iː/ dài giống speak (nói).' },
  { word: 'pick up', ipa: '/pɪk ʌp/', pos: 'phr', meaning: 'nhặt lên, lượm lên', group: 'Hành động trong truyện', example: 'The fox picked up the meat and ran away.', exampleVi: 'Con cáo nhặt miếng thịt lên rồi chạy mất.', tip: 'Quá khứ: picked up.' },
  { word: 'ground', ipa: '/ɡraʊnd/', pos: 'n', meaning: 'mặt đất, nền đất', group: 'Truyện Cây khế & Quạ Cáo', example: 'The meat dropped onto the ground.', exampleVi: 'Miếng thịt rơi xuống mặt đất.', tip: 'Đứng trên mặt đất: on the ground.' },
];

export const U14_VOCAB_PAGE106: PageVocabWord[] = [
  { word: 'folk tales', ipa: '/ˈfəʊk teɪlz/', pos: 'n', meaning: 'truyện dân gian', group: 'Thể loại & Tính cách', example: 'I like reading Vietnamese folk tales.', exampleVi: 'Mình thích đọc truyện dân gian Việt Nam.', tip: 'Chữ l trong folk bị câm: đọc /fəʊk/.' },
  { word: 'honest', ipa: '/ˈɒnɪst/', pos: 'adj', meaning: 'thật thà, trung thực', group: 'Thể loại & Tính cách', example: 'The younger brother was very honest.', exampleVi: 'Người em trai rất thật thà.', tip: 'Chữ h đầu câm hoàn toàn → dùng "an honest boy"!' },
  { word: 'wise', ipa: '/waɪz/', pos: 'adj', meaning: 'khôn ngoan, thông thái', group: 'Thể loại & Tính cách', example: 'I think the fox was wise.', exampleVi: 'Mình nghĩ con cáo rất khôn ngoan.', tip: 'Trái nghĩa trực tiếp với stupid (ngốc nghếch).' },
  { word: 'stupid', ipa: '/ˈstjuːpɪd/', pos: 'adj', meaning: 'ngốc nghếch', group: 'Thể loại & Tính cách', example: 'The crow was stupid to open its beak.', exampleVi: 'Con quạ thật ngốc khi mở mỏ ra hát.', tip: 'Nhớ cặp đối lập trong truyện Cáo và Quạ: wise ↔ stupid.' },
];

export const U14_STORY_CRITIC_PRESETS: StoryCriticPreset[] = [
  {
    id: 'critic-antien',
    iconKey: 'watermelon',
    storyEn: 'The Story of Mai An Tiem',
    storyVi: 'Sự tích Quả dưa hấu',
    characterEn: 'Mai An Tiem',
    characterVi: 'Mai An Tiêm',
    adjectiveEn: 'hard-working and clever',
    adjectiveVi: 'chăm chỉ và thông minh',
    question: 'What do you think of Mai An Tiem?',
    answer: 'I think he is hard-working and clever.',
    answerVi: 'Mình nghĩ anh ấy rất chăm chỉ và thông minh.',
    summary: 'First, King Hung ordered him to live on an island. Then, he found black seeds and grew watermelons. In the end, his family went back home.',
    summaryVi: 'Đầu tiên Vua Hùng đày anh ra đảo. Sau đó anh tìm thấy hạt đen và trồng dưa hấu. Cuối cùng gia đình được trở về nhà.',
  },
  {
    id: 'critic-fox',
    iconKey: 'fox',
    storyEn: 'The Fox and the Crow',
    storyVi: 'Cáo và Quạ',
    characterEn: 'the Fox',
    characterVi: 'Chú Cáo',
    adjectiveEn: 'wise (clever)',
    adjectiveVi: 'khôn ngoan, tinh ranh',
    question: 'What do you think of the Fox?',
    answer: 'I think it is wise.',
    answerVi: 'Mình nghĩ con Cáo rất khôn ngoan.',
    summary: 'First, the fox asked for meat. Then, it asked the crow to dance and sing. In the end, the crow opened its beak and dropped the meat!',
    summaryVi: 'Đầu tiên Cáo xin thịt. Sau đó Cáo dụ Quạ múa rồi hát. Cuối cùng Quạ há mỏ và đánh rơi miếng thịt!',
  },
  {
    id: 'critic-brother',
    iconKey: 'starfruit',
    storyEn: 'The Golden Starfruit Tree',
    storyVi: 'Cây khế vàng',
    characterEn: 'the elder brother',
    characterVi: 'Người anh trai',
    adjectiveEn: 'greedy',
    adjectiveVi: 'tham lam',
    question: 'What do you think of the elder brother?',
    answer: 'I think he is greedy.',
    answerVi: 'Mình nghĩ người anh rất tham lam.',
    summary: 'He took most of the land and sewed a huge bag for gold. In the end, the bag was too heavy and he fell into the sea.',
    summaryVi: 'Anh ta chiếm gần hết đất và lấy thật nhiều vàng. Cuối cùng túi quá nặng nên anh ta rơi xuống biển.',
  },
  {
    id: 'critic-tortoise',
    iconKey: 'tortoise',
    storyEn: 'The Hare and the Tortoise',
    storyVi: 'Thỏ và Rùa',
    characterEn: 'the Tortoise',
    characterVi: 'Chú Rùa',
    adjectiveEn: 'slow, but hard-working',
    adjectiveVi: 'chậm rãi nhưng chăm chỉ',
    question: 'What do you think of the Tortoise?',
    answer: 'I think it is slow, but hard-working.',
    answerVi: 'Mình nghĩ chú Rùa chậm nhưng rất kiên trì, chăm chỉ.',
    summary: 'First, the hare ran fast and fell asleep. Then, the tortoise kept walking slowly. In the end, the tortoise won the race!',
    summaryVi: 'Đầu tiên Thỏ chạy nhanh rồi ngủ quên. Sau đó Rùa vẫn kiên trì bước đi. Cuối cùng Rùa thắng cuộc đua!',
  },
  {
    id: 'critic-snowwhite',
    iconKey: 'princess',
    storyEn: 'Snow White and the Seven Dwarfs',
    storyVi: 'Bạch Tuyết và Bảy chú lùn',
    characterEn: 'Snow White',
    characterVi: 'Công chúa Bạch Tuyết',
    adjectiveEn: 'beautiful and kind',
    adjectiveVi: 'xinh đẹp và tốt bụng',
    question: 'What do you think of Snow White?',
    answer: 'I think she is beautiful and kind.',
    answerVi: 'Mình nghĩ cô ấy xinh đẹp và tốt bụng.',
    summary: 'She lived with seven friendly dwarfs in the forest. In the end, the Prince saved her and they lived happily ever after.',
    summaryVi: 'Cô sống cùng bảy chú lùn tốt bụng trong rừng. Cuối cùng Hoàng tử cứu cô và họ sống hạnh phúc mãi mãi.',
  },
];

export const U14_TASK1_ODD: QuizChoiceItem[] = [
  {
    id: 'p107-t1-1',
    prompt: '1. Chọn từ khác loại với 3 từ còn lại:',
    options: ['story', 'ordered', 'grew', 'exchanged'],
    correctIndex: 0,
    explanation: 'story (câu chuyện) là danh từ; 3 từ ordered, grew, exchanged đều là động từ ở thì quá khứ.',
  },
  {
    id: 'p107-t1-2',
    prompt: '2. Chọn từ khác loại với 3 từ còn lại:',
    options: ['Snow White', 'right', 'An Tiem', 'Mouse'],
    correctIndex: 1,
    explanation: 'right (đúng / bên phải) không phải tên nhân vật; 3 từ kia đều là tên nhân vật cổ tích.',
  },
  {
    id: 'p107-t1-3',
    prompt: '3. Chọn từ khác loại với 3 từ còn lại:',
    options: ['found', 'heard', 'went', 'happened'],
    correctIndex: 3,
    explanation: 'happened là động từ quá khứ CÓ quy tắc (thêm -ed); found, heard, went là động từ BẤT quy tắc.',
  },
  {
    id: 'p107-t1-4',
    prompt: '4. Chọn từ khác loại với 3 từ còn lại:',
    options: ['one day', 'first', 'then', 'next'],
    correctIndex: 0,
    explanation: 'one day là cụm thời gian mở đầu truyện; first, then, next là nhóm từ nối thứ tự diễn biến.',
  },
  {
    id: 'p107-t1-5',
    prompt: '5. Chọn từ khác loại với 3 từ còn lại:',
    options: ['greedy', 'intelligent', 'younger', 'kind'],
    correctIndex: 2,
    explanation: 'younger là tính từ ở dạng so sánh hơn (trẻ hơn/em); 3 từ kia là tính từ nguyên thể chỉ tính cách.',
  },
];

export const U14_TASK2_PAST_VERBS: PastVerbRow[] = [
  { id: 'p107-t2-1', number: 1, base: 'visit', past: 'visited', meaningVi: 'thăm', kind: 'regular', tip: 'Có quy tắc → thêm -ed (đọc /ɪd/).' },
  { id: 'p107-t2-2', number: 2, base: 'work', past: 'worked', meaningVi: 'làm việc', kind: 'regular', tip: 'Có quy tắc → thêm -ed (đọc /t/).' },
  { id: 'p107-t2-3', number: 3, base: 'find', past: 'found', meaningVi: 'tìm thấy', kind: 'irregular', tip: 'Bất quy tắc: i → ou (find → found).' },
  { id: 'p107-t2-4', number: 4, base: 'think', past: 'thought', meaningVi: 'nghĩ', kind: 'irregular', tip: 'Bất quy tắc: think → thought (đọc /θɔːt/).' },
  { id: 'p107-t2-5', number: 5, base: 'watch', past: 'watched', meaningVi: 'xem', kind: 'regular', tip: 'Có quy tắc → thêm -ed.' },
  { id: 'p107-t2-6', number: 6, base: 'read', past: 'read', meaningVi: 'đọc', kind: 'irregular', tip: 'Viết GIỐNG HỆT nhau, nhưng quá khứ đọc là /red/ (như màu đỏ)!' },
  { id: 'p107-t2-7', number: 7, base: 'hear', past: 'heard', meaningVi: 'nghe thấy', kind: 'irregular', tip: 'Bất quy tắc: thêm -d thành heard, đọc /hɜːd/.' },
  { id: 'p107-t2-8', number: 8, base: 'stand', past: 'stood', meaningVi: 'đứng', kind: 'irregular', tip: 'Bất quy tắc: stand → stood.' },
  { id: 'p107-t2-9', number: 9, base: 'exchange', past: 'exchanged', meaningVi: 'trao đổi', kind: 'regular', tip: 'Tận cùng có sẵn chữ e → chỉ thêm -d.' },
  { id: 'p107-t2-10', number: 10, base: 'play', past: 'played', meaningVi: 'chơi', kind: 'regular', tip: 'Trước y là nguyên âm a → giữ nguyên y rồi thêm -ed.' },
];

export const U14_TASK3_MC: QuizChoiceItem[] = [
  {
    id: 'p107-t3-1',
    prompt: '1. What do you think _____ An Tiem?',
    options: ['of', 'to', 'with', 'behind'],
    correctIndex: 0,
    explanation: 'Mẫu câu chuẩn hỏi cảm nghĩ: "What do you think of + nhân vật?".',
  },
  {
    id: 'p107-t3-2',
    prompt: '2. One day, An Tiem _____ some black seeds.',
    options: ['finding', 'find', 'found', 'going'],
    correctIndex: 2,
    explanation: 'Kể truyện quá khứ ("One day...") dùng động từ quá khứ của find là found.',
  },
  {
    id: 'p107-t3-3',
    prompt: '3. _____ character do you like best? – It is Snow White.',
    options: ['Why', 'Which', 'Who', 'a & c'],
    correctIndex: 1,
    explanation: 'Trước danh từ "character" (nhân vật nào) phải dùng "Which character...?".',
  },
  {
    id: 'p107-t3-4',
    prompt: '4. Many years ago, there _____ a beautiful girl who lived in a castle.',
    options: ['had', 'have', 'were', 'was'],
    correctIndex: 3,
    explanation: 'Mở đầu truyện quá khứ + danh từ số ít "a beautiful girl" → dùng "there was".',
  },
  {
    id: 'p107-t3-5',
    prompt: '5. We have a Vietnamese story about _____ called the story of Mai An Tiem.',
    options: ['oranges', 'apples', 'watermelons', 'All are correct'],
    correctIndex: 2,
    explanation: 'Truyện Mai An Tiêm là sự tích quả dưa hấu (watermelons).',
  },
];

export const U14_TASK4_STARFRUIT_READING = {
  title: 'The Golden Starfruit Tree (Sự tích Cây khế vàng)',
  passage:
    'A long time ago, the father of two brothers died. The elder brother got most of the land and the younger brother got only one starfruit tree. One day, a big bird came and ate the starfruit. Then it carried the younger brother to an island to get gold. His brother knew about this. He waited for the bird. And the bird also brought him to the island to get gold. He was greedy and got a lot of gold. The bag was very heavy and he fell off the bird, into the sea.',
  passageVi:
    'Ngày xửa ngày xưa, cha của hai anh em qua đời. Người anh chiếm gần hết ruộng đất, còn người em chỉ nhận được đúng một cây khế. Một ngày nọ, một con chim lớn bay đến ăn khế. Sau đó chim chở người em ra đảo lấy vàng. Người anh biết chuyện nên cũng chờ chim đến. Con chim cũng đưa anh ta ra đảo lấy vàng. Vì quá tham lam, anh ta lấy rất nhiều vàng. Chiếc túi quá nặng nên anh ta bị ngã khỏi lưng chim, rơi xuống biển.',
  statements: [
    {
      id: 'p108-t4-1',
      text: '1. The younger brother had only one starfruit tree.',
      isTrue: true,
      explanation: 'Đúng! Đoạn văn ghi rõ: "the younger brother got only one starfruit tree".',
    },
    {
      id: 'p108-t4-2',
      text: '2. A big bird ate the starfruit and paid gold for the elder brother.',
      isTrue: false,
      explanation: 'Sai! Chim ăn khế và trả vàng cho người EM (the younger brother) chứ không phải người anh.',
    },
    {
      id: 'p108-t4-3',
      text: '3. The bird also carried the elder brother to the island to get gold.',
      isTrue: true,
      explanation: 'Đúng! Câu văn ghi: "And the bird also brought him to the island to get gold".',
    },
    {
      id: 'p108-t4-4',
      text: '4. The younger brother got a lot of gold and carried the bird home.',
      isTrue: false,
      explanation: 'Sai! Con chim chở người em chứ không phải người em chở con chim về nhà!',
    },
    {
      id: 'p108-t4-5',
      text: '5. The greedy elder brother fell into the sea because of the heavy gold.',
      isTrue: true,
      explanation: 'Đúng! Túi vàng quá nặng (very heavy) khiến người anh tham lam rơi xuống biển.',
    },
  ],
};

export const U14_TASK5_HARE_BLANKS: ParagraphBlank[] = [
  { id: 'p108-t5-1', index: 1, answers: ['hare', 'rabbit'], hint: 'Chú Thỏ rừng (4 chữ cái: h _ _ _)', iconKey: 'hare' },
  { id: 'p108-t5-2', index: 2, answers: ['asleep'], hint: 'Ngủ thiếp đi: fell ______ (6 chữ cái)', iconKey: 'moon' },
  { id: 'p108-t5-3', index: 3, answers: ['line'], hint: 'Vạch đích: finish ____ (4 chữ cái)', iconKey: 'finishline' },
  { id: 'p108-t5-4', index: 4, answers: ['animals'], hint: 'Các loài vật cổ vũ (số nhiều: a _ _ _ _ _ s)', iconKey: 'panda' },
  { id: 'p108-t5-5', index: 5, answers: ['winner'], hint: 'Người chiến thắng nhận cúp (w _ _ _ _ _)', iconKey: 'trophy' },
];

export const U14_TASK6_P108: FillItem[] = [
  {
    id: 'p108-t6-1',
    before: '1. The',
    after: 'was wise.',
    hint: 'Con cáo khôn ngoan (3 chữ cái: f _ _)',
    iconKey: 'fox',
    answers: ['fox'],
    explanation: 'Trong truyện Cáo và Quạ, chú cáo (fox) rất khôn ngoan (wise).',
  },
];

export const U14_TASK6_P109: FillItem[] = [
  {
    id: 'p109-t6-2',
    before: '2. The',
    after: 'was stupid.',
    hint: 'Con quạ đen (4 chữ cái: c _ _ _)',
    iconKey: 'crow',
    answers: ['crow'],
    explanation: 'Con quạ (crow) mắc lừa mở mỏ hát làm rơi miếng thịt nên được miêu tả là stupid.',
  },
  {
    id: 'p109-t6-3',
    before: '3. The elder',
    after: 'was greedy.',
    hint: 'Người anh trai (7 chữ cái: b _ _ _ _ _ _)',
    iconKey: 'partner',
    answers: ['brother'],
    explanation: 'The elder brother (người anh trai) trong Cây khế rất tham lam (greedy).',
  },
  {
    id: 'p109-t6-4',
    before: '4. The',
    after: 'was beautiful and kind.',
    hint: 'Nàng công chúa đội vương miện (8 chữ cái: p _ _ _ _ _ _ _)',
    iconKey: 'princess',
    answers: ['princess'],
    explanation: 'The princess (nàng công chúa) xinh đẹp và tốt bụng.',
  },
  {
    id: 'p109-t6-5',
    before: '5. The',
    after: 'was slow, but hard-working.',
    hint: 'Chú rùa (8 chữ cái: t _ _ _ _ _ _ _)',
    iconKey: 'tortoise',
    answers: ['tortoise', 'turtle'],
    explanation: 'Chú rùa (tortoise) đi chậm nhưng rất chăm chỉ, kiên trì.',
  },
];

export const U14_TASK7_ORDERS: OrderSentenceItem[] = [
  {
    id: 'p109-t7-1',
    words: ['think', 'What', 'you', 'of', 'do', 'Snow White?'],
    answer: 'What do you think of Snow White?',
    meaning: 'Bạn nghĩ sao về nàng Bạch Tuyết?',
    explanation: 'Mẫu câu hỏi cảm nghĩ: What + do + you + think of + tên nhân vật?',
  },
  {
    id: 'p109-t7-2',
    words: ['Do', 'folk tales?', 'you', 'like'],
    answer: 'Do you like folk tales?',
    meaning: 'Bạn có thích truyện dân gian không?',
    explanation: 'Câu hỏi Yes/No hiện tại đơn: Do + you + like + folk tales?',
  },
  {
    id: 'p109-t7-3',
    words: ['like?', 'What', 'of', 'stories', 'kinds', 'do', 'you'],
    answer: 'What kinds of stories do you like?',
    meaning: 'Bạn thích những thể loại truyện nào?',
    explanation: 'Cụm từ hỏi: What kinds of stories + do you like?',
  },
  {
    id: 'p109-t7-4',
    words: ['end?', 'How', 'story', 'did', 'the'],
    answer: 'How did the story end?',
    meaning: 'Câu chuyện kết thúc như thế nào?',
    explanation: 'Câu hỏi quá khứ đơn: How + did + the story + end?',
  },
  {
    id: 'p109-t7-5',
    words: ['like', 'Why', 'the story?', 'do', 'you'],
    answer: 'Why do you like the story?',
    meaning: 'Tại sao bạn lại thích câu chuyện đó?',
    explanation: 'Câu hỏi lý do: Why + do + you + like + the story?',
  },
];

export const U14_TASK8_WORD_BANK: string[] = [
  'Prince',
  'magical apple',
  'castle',
  'got married',
  'seed',
  'exchange',
  'order',
  'greedy',
  'character',
  'surprise',
  'type',
  'interesting',
  'delicious',
  'kind',
];

export const U14_TASK8_CLOZE: WordBankClozeItem[] = [
  {
    id: 'p110-t8-1',
    number: 1,
    before: 'An Tiem received some',
    after: 'from the crow. He grew them.',
    answers: ['seeds', 'seed'],
    bankWord: 'seed',
    explanation: 'Sau "some" dùng danh từ số nhiều: seeds (hạt giống). Chấp nhận cả seed theo khung từ.',
  },
  {
    id: 'p110-t8-2',
    number: 2,
    before: 'Folk tales are usually short and',
    after: '. They give me one surprise after another.',
    answers: ['interesting'],
    bankWord: 'interesting',
    explanation: 'Truyện dân gian thường ngắn gọn và thú vị (interesting).',
  },
  {
    id: 'p110-t8-3',
    number: 3,
    before: 'The',
    after: 'visited the castle and he met the beautiful princess.',
    answers: ['prince', 'Prince'],
    bankWord: 'Prince',
    explanation: 'Hoàng tử (Prince) đến thăm lâu đài và gặp công chúa xinh đẹp.',
  },
  {
    id: 'p110-t8-4',
    number: 4,
    before: 'The brother in the story was so',
    after: '. He wanted to have all of the money.',
    answers: ['greedy'],
    bankWord: 'greedy',
    explanation: 'Muốn giữ toàn bộ tiền bạc → rất tham lam (greedy).',
  },
  {
    id: 'p110-t8-5',
    number: 5,
    before: 'The main',
    after: 'in this story is Snow White.',
    answers: ['character'],
    bankWord: 'character',
    explanation: 'Cụm từ cố định: main character (nhân vật chính).',
  },
  {
    id: 'p110-t8-6',
    number: 6,
    before: 'The King',
    after: 'the princess not to go outside. The princess was very upset.',
    answers: ['ordered', 'order'],
    bankWord: 'order',
    explanation: 'Động từ kể chuyện quá khứ: order → ordered (ra lệnh).',
  },
  {
    id: 'p110-t8-7',
    number: 7,
    before: 'In the past, people often',
    after: 'salt for food and drink.',
    answers: ['exchanged', 'exchange'],
    bankWord: 'exchange',
    explanation: '"In the past" (trong quá khứ) nên chia exchange → exchanged (trao đổi lấy).',
  },
  {
    id: 'p110-t8-8',
    number: 8,
    before: 'My mother was very',
    after: 'when we had a big birthday party for her.',
    answers: ['surprised', 'surprise'],
    bankWord: 'surprise',
    explanation: 'Chỉ cảm xúc của mẹ (ngạc nhiên) dùng tính từ đuôi -ed: surprised.',
  },
  {
    id: 'p110-t8-9',
    number: 9,
    before: 'Linda is a',
    after: 'person. She often helps other people when they have trouble.',
    answers: ['kind'],
    bankWord: 'kind',
    explanation: 'Hay giúp đỡ mọi người khi gặp khó khăn → người tốt bụng (kind).',
  },
  {
    id: 'p110-t8-10',
    number: 10,
    before: 'In the end, the Prince and the Princess',
    after: 'and lived happily ever after.',
    answers: ['got married', 'get married'],
    bankWord: 'got married',
    explanation: 'Hoàng tử và Công chúa kết hôn (got married) và sống hạnh phúc mãi mãi.',
  },
];

export const U14_TASK9_WRITING: GuidedWritingPrompt[] = [
  {
    id: 'p110-w1',
    question: "1. What's your favourite story? (Câu chuyện yêu thích của em là gì?)",
    starter: 'My favourite story is',
    sample: 'The Story of Mai An Tiem.',
    placeholder: 'The Story of Mai An Tiem / The Golden Starfruit Tree...',
  },
  {
    id: 'p110-w2',
    question: '2. Who is the main character in the story? (Ai là nhân vật chính?)',
    starter: 'The main character is',
    sample: 'Mai An Tiem.',
    placeholder: 'Mai An Tiem / Snow White / the Tortoise...',
  },
  {
    id: 'p110-w3',
    question: '3. What happened in the story? (Chuyện gì đã xảy ra trong truyện?)',
    starter: 'First,',
    sample: 'King Hung ordered him to live on a faraway island. Then, An Tiem found some black seeds and grew delicious watermelons.',
    placeholder: 'King Hung ordered... Then, he found...',
  },
  {
    id: 'p110-w4',
    question: '4. How did the story end? (Câu chuyện kết thúc thế nào?)',
    starter: 'In the end,',
    sample: 'King Hung heard about the story and let An Tiem and his family go back home.',
    placeholder: 'King Hung heard about the story and...',
  },
  {
    id: 'p110-w5',
    question: '5. What do you think of the main character? Why? (Em nghĩ sao về nhân vật chính?)',
    starter: 'I think he/she is',
    sample: 'hard-working and clever because he never gave up on the island.',
    placeholder: 'hard-working and kind because...',
  },
];

/* =========================================================
   FULL UNIT 15 (PAGES 111–117)
   ========================================================= */

export const U15_VOCAB_PAGE111: PageVocabWord[] = [
  { word: 'future', ipa: '/ˈfjuːtʃə(r)/', pos: 'n', meaning: 'tương lai', group: 'Tương lai & Cảm xúc', example: 'What would you like to be in the future?', exampleVi: 'Bạn muốn làm nghề gì trong tương lai?', tip: 'Luôn đi với cụm "in the future".' },
  { word: 'pilot', ipa: '/ˈpaɪlət/', pos: 'n', meaning: 'phi công', group: 'Nghề nghiệp mơ ước', example: "I'd like to be a pilot.", exampleVi: 'Mình muốn trở thành phi công.', tip: 'Gắn liền với hành động: fly a plane (lái máy bay).' },
  { word: 'doctor', ipa: '/ˈdɒktə(r)/', pos: 'n', meaning: 'bác sĩ', group: 'Nghề nghiệp mơ ước', example: 'A doctor works in a hospital.', exampleVi: 'Bác sĩ làm việc ở bệnh viện.', tip: 'Đuôi -or, không phải -er: d-o-c-t-o-r.' },
  { word: 'teacher', ipa: '/ˈtiːtʃə(r)/', pos: 'n', meaning: 'giáo viên', group: 'Nghề nghiệp mơ ước', example: 'She wants to be a teacher to teach children.', exampleVi: 'Bạn ấy muốn làm giáo viên để dạy trẻ em.', tip: 'teach (dạy) + -er = teacher.' },
  { word: 'architect', ipa: '/ˈɑːkɪtekt/', pos: 'n', meaning: 'kiến trúc sư', group: 'Nghề nghiệp mơ ước', example: "He'd like to be an architect.", exampleVi: 'Cậu ấy muốn làm kiến trúc sư.', tip: 'Bắt đầu bằng âm nguyên âm → dùng "an architect"!' },
  { word: 'engineer', ipa: '/ˌendʒɪˈnɪə(r)/', pos: 'n', meaning: 'kỹ sư', group: 'Nghề nghiệp mơ ước', example: 'My father is an engineer.', exampleVi: 'Bố mình là kỹ sư.', tip: 'Cũng dùng mạo từ "an": an engineer.' },
  { word: 'writer', ipa: '/ˈraɪtə(r)/', pos: 'n', meaning: 'nhà văn', group: 'Nghề nghiệp mơ ước', example: "She'd like to be a writer.", exampleVi: 'Bạn ấy muốn trở thành nhà văn.', tip: 'Chữ w đầu bị câm: đọc /ˈraɪtə/.' },
  { word: 'accountant', ipa: '/əˈkaʊntənt/', pos: 'n', meaning: 'kế toán viên', group: 'Nghề nghiệp mơ ước', example: 'My aunt is an accountant in a bank.', exampleVi: 'Cô mình là kế toán trong ngân hàng.', tip: 'Dùng "an accountant" vì bắt đầu bằng âm /ə/.' },
  { word: 'business person', ipa: '/ˈbɪznəs ˈpɜːsn/', pos: 'n', meaning: 'doanh nhân', group: 'Nghề nghiệp mơ ước', example: 'He wants to be a good business person.', exampleVi: 'Cậu ấy muốn trở thành một doanh nhân giỏi.', tip: 'Business chỉ có 2 âm tiết: /ˈbɪz-nəs/.' },
  { word: 'nurse', ipa: '/nɜːs/', pos: 'n', meaning: 'y tá', group: 'Nghề nghiệp mơ ước', example: 'A nurse looks after patients.', exampleVi: 'Y tá chăm sóc bệnh nhân.', tip: 'Âm /ɜː/ dài giống từ bird, girl.' },
  { word: 'artist', ipa: '/ˈɑːtɪst/', pos: 'n', meaning: 'họa sĩ, nghệ sĩ', group: 'Nghệ thuật & Nông nghiệp', example: 'She draws well and wants to be an artist.', exampleVi: 'Bạn ấy vẽ đẹp và muốn làm họa sĩ.', tip: 'art (mỹ thuật) + -ist = artist → dùng "an artist".' },
  { word: 'musician', ipa: '/mjuˈzɪʃn/', pos: 'n', meaning: 'nhạc sĩ', group: 'Nghệ thuật & Nông nghiệp', example: 'My brother loves music and wants to be a musician.', exampleVi: 'Anh mình yêu âm nhạc và muốn làm nhạc sĩ.', tip: 'music → musician (nhấn âm 2).' },
  { word: 'singer', ipa: '/ˈsɪŋə(r)/', pos: 'n', meaning: 'ca sĩ', group: 'Nghệ thuật & Nông nghiệp', example: 'She is a famous singer.', exampleVi: 'Cô ấy là một ca sĩ nổi tiếng.', tip: 'sing (hát) + -er = singer.' },
  { word: 'farmer', ipa: '/ˈfɑːmə(r)/', pos: 'n', meaning: 'nông dân', group: 'Nghệ thuật & Nông nghiệp', example: 'A farmer works on a farm.', exampleVi: 'Nông dân làm việc trên nông trại.', tip: 'farm (nông trại) + -er = farmer.' },
  { word: 'dancer', ipa: '/ˈdɑːnsə(r)/', pos: 'n', meaning: 'vũ công, diễn viên múa', group: 'Nghệ thuật & Nông nghiệp', example: 'Their job is dancing. They are dancers.', exampleVi: 'Công việc của họ là múa. Họ là vũ công.', tip: 'dance + -r = dancer.' },
  { word: 'fly', ipa: '/flaɪ/', pos: 'v', meaning: 'bay, lái (máy bay)', group: 'Tương lai & Cảm xúc', example: 'Pilots fly planes around the world.', exampleVi: 'Phi công lái máy bay đi khắp thế giới.', tip: 'Quá khứ bất quy tắc: fly → flew.' },
  { word: 'of course', ipa: '/əv kɔːs/', pos: 'phr', meaning: 'tất nhiên rồi', group: 'Tương lai & Cảm xúc', example: 'Do you want to be a pilot? — Of course!', exampleVi: 'Bạn có muốn làm phi công không? — Tất nhiên rồi!', tip: 'Dùng đáp lời đồng ý đầy hào hứng.' },
  { word: 'scared', ipa: '/skeəd/', pos: 'adj', meaning: 'sợ hãi', group: 'Tương lai & Cảm xúc', example: "I'm scared of heights.", exampleVi: 'Mình sợ độ cao.', tip: 'Sợ điều gì đó: be scared of + N/V-ing.' },
  { word: 'leave', ipa: '/liːv/', pos: 'v', meaning: 'rời đi, để lại', group: 'Tương lai & Cảm xúc', example: 'We leave home at seven o’clock.', exampleVi: 'Chúng mình rời nhà lúc 7 giờ.', tip: 'Phân biệt leave /liːv/ (rời đi) với live /lɪv/ (sống).' },
];

export const U15_VOCAB_PAGE112: PageVocabWord[] = [
  { word: 'grow up', ipa: '/ɡrəʊ ʌp/', pos: 'phr', meaning: 'lớn lên, trưởng thành', group: 'Ước mơ & Công việc', example: 'What would you like to do when you grow up?', exampleVi: 'Bạn muốn làm gì khi lớn lên?', tip: 'Cụm động từ cố định đi liền nhau: grow up.' },
  { word: 'look after', ipa: '/lʊk ˈɑːftə(r)/', pos: 'phr', meaning: 'chăm sóc', group: 'Ước mơ & Công việc', example: 'Nurses look after patients in the hospital.', exampleVi: 'Y tá chăm sóc bệnh nhân trong bệnh viện.', tip: 'Đồng nghĩa với "take care of".' },
  { word: 'patient', ipa: '/ˈpeɪʃnt/', pos: 'n', meaning: 'bệnh nhân', group: 'Ước mơ & Công việc', example: 'The doctor helps many patients every day.', exampleVi: 'Bác sĩ giúp đỡ nhiều bệnh nhân mỗi ngày.', tip: 'Khi là tính từ, patient còn có nghĩa là "kiên nhẫn".' },
  { word: 'design', ipa: '/dɪˈzaɪn/', pos: 'v', meaning: 'thiết kế', group: 'Ước mơ & Công việc', example: 'Architects design houses and buildings.', exampleVi: 'Kiến trúc sư thiết kế nhà cửa và các tòa nhà.', tip: 'Chữ g bị câm: đọc /dɪˈzaɪn/.' },
  { word: 'building', ipa: '/ˈbɪldɪŋ/', pos: 'n', meaning: 'tòa nhà', group: 'Ước mơ & Công việc', example: 'There are many classrooms in this building.', exampleVi: 'Có nhiều phòng học trong tòa nhà này.', tip: 'build (xây dựng) + -ing = building.' },
  { word: 'comic story', ipa: '/ˈkɒmɪk ˈstɔːri/', pos: 'n', meaning: 'truyện tranh', group: 'Ước mơ & Công việc', example: 'He wants to write comic stories for children.', exampleVi: 'Cậu ấy muốn viết truyện tranh cho thiếu nhi.', tip: 'Số nhiều đổi y → ies: comic stories.' },
  { word: 'farm', ipa: '/fɑːm/', pos: 'n', meaning: 'nông trại, trang trại', group: 'Nông thôn & Vũ trụ', example: 'My uncle works on a big farm.', exampleVi: 'Chú mình làm việc ở một nông trại lớn.', tip: 'Trên nông trại luôn dùng giới từ ON: on a farm.' },
  { word: 'countryside', ipa: '/ˈkʌntrisaɪd/', pos: 'n', meaning: 'miền quê, nông thôn', group: 'Nông thôn & Vũ trụ', example: 'I love the fresh air in the countryside.', exampleVi: 'Mình yêu không khí trong lành ở miền quê.', tip: 'Ở miền quê dùng cụm: in the countryside.' },
  { word: 'space', ipa: '/speɪs/', pos: 'n', meaning: 'vũ trụ, không gian', group: 'Nông thôn & Vũ trụ', example: 'Astronauts travel in space.', exampleVi: 'Phi hành gia du hành trong không gian.', tip: 'Trong vũ trụ dùng giới từ IN: in space (không dùng on space!).' },
  { word: 'spaceship', ipa: '/ˈspeɪsʃɪp/', pos: 'n', meaning: 'tàu vũ trụ', group: 'Nông thôn & Vũ trụ', example: 'He dreams of flying a spaceship.', exampleVi: 'Cậu ấy mơ ước lái một con tàu vũ trụ.', tip: 'Ghép từ siêu dễ nhớ: space (vũ trụ) + ship (con tàu).' },
  { word: 'astronaut', ipa: '/ˈæstrənɔːt/', pos: 'n', meaning: 'phi hành gia', group: 'Nông thôn & Vũ trụ', example: "I'd like to be an astronaut.", exampleVi: 'Mình muốn trở thành phi hành gia.', tip: 'Bắt đầu bằng âm /æ/ → luôn dùng "an astronaut"!' },
  { word: 'planet', ipa: '/ˈplænɪt/', pos: 'n', meaning: 'hành tinh', group: 'Nông thôn & Vũ trụ', example: 'He wants to visit other planets.', exampleVi: 'Cậu ấy muốn ghé thăm các hành tinh khác.', tip: 'Trái Đất là planet Earth.' },
  { word: 'important', ipa: '/ɪmˈpɔːtnt/', pos: 'adj', meaning: 'quan trọng', group: 'Ước mơ & Công việc', example: 'Every job is important.', exampleVi: 'Mỗi nghề nghiệp đều quan trọng.', tip: 'Nhấn âm 2: im-POR-tant.' },
  { word: 'dream', ipa: '/driːm/', pos: 'n/v', meaning: 'giấc mơ, ước mơ', group: 'Ước mơ & Công việc', example: 'What is your dream job?', exampleVi: 'Nghề nghiệp mơ ước của bạn là gì?', tip: 'Cụm cực hay: dream job (nghề mơ ước).' },
  { word: 'true', ipa: '/truː/', pos: 'adj', meaning: 'đúng, thành sự thật', group: 'Ước mơ & Công việc', example: 'I hope my dream will come true.', exampleVi: 'Mình hy vọng ước mơ của mình sẽ thành hiện thực.', tip: 'Cụm "come true" = trở thành hiện thực.' },
  { word: 'job', ipa: '/dʒɒb/', pos: 'n', meaning: 'nghề nghiệp, công việc', group: 'Ước mơ & Công việc', example: 'My dream job is teaching Maths.', exampleVi: 'Công việc mơ ước của mình là dạy môn Toán.', tip: 'Đếm được: a job, two jobs.' },
];

export const U15_DREAM_JOB_PRESETS: DreamJobPreset[] = [
  {
    id: 'job-pilot',
    iconKey: 'pilot',
    article: 'a',
    jobEn: 'pilot',
    jobVi: 'phi công',
    workplace: 'on a plane / in the sky',
    workplaceVi: 'trên máy bay',
    reasonVerb: 'fly a plane and visit many countries',
    reasonVi: 'lái máy bay và thăm nhiều quốc gia',
    questionWhat: 'What would you like to be in the future?',
    answerWhat: "I'd like to be a pilot.",
    questionWhy: 'Why would you like to be a pilot?',
    answerWhy: "Because I'd like to fly a plane and visit many countries.",
    tip: 'pilot bắt đầu bằng phụ âm /p/ → dùng "a pilot".',
  },
  {
    id: 'job-architect',
    iconKey: 'architect',
    article: 'an',
    jobEn: 'architect',
    jobVi: 'kiến trúc sư',
    workplace: 'in a design office',
    workplaceVi: 'ở văn phòng thiết kế',
    reasonVerb: 'design beautiful houses and schools',
    reasonVi: 'thiết kế những ngôi nhà và trường học đẹp',
    questionWhat: 'What would you like to be in the future?',
    answerWhat: "I'd like to be an architect.",
    questionWhy: 'Why would you like to be an architect?',
    answerWhy: "Because I'd like to design beautiful houses and schools.",
    tip: 'architect bắt đầu bằng nguyên âm a → BẮT BUỘC dùng "an architect"!',
  },
  {
    id: 'job-nurse',
    iconKey: 'nurse',
    article: 'a',
    jobEn: 'nurse',
    jobVi: 'y tá',
    workplace: 'in a hospital',
    workplaceVi: 'trong bệnh viện',
    reasonVerb: 'look after patients',
    reasonVi: 'chăm sóc bệnh nhân',
    questionWhat: 'What would she like to be in the future?',
    answerWhat: "She'd like to be a nurse.",
    questionWhy: 'Why would she like to be a nurse?',
    answerWhy: "Because she'd like to look after patients.",
    tip: 'Cụm hay ra thi: nurse / doctor ↔ look after patients.',
  },
  {
    id: 'job-teacher',
    iconKey: 'teacher',
    article: 'a',
    jobEn: 'teacher',
    jobVi: 'giáo viên',
    workplace: 'in a primary school',
    workplaceVi: 'ở trường tiểu học',
    reasonVerb: 'teach young children',
    reasonVi: 'dạy học cho các em nhỏ',
    questionWhat: 'What would you like to be in the future?',
    answerWhat: "I'd like to be a teacher.",
    questionWhy: 'Why would you like to be a teacher?',
    answerWhy: "Because I'd like to teach young children.",
    tip: 'teacher ↔ teach young children (dạy trẻ nhỏ).',
  },
  {
    id: 'job-writer',
    iconKey: 'write',
    article: 'a',
    jobEn: 'writer',
    jobVi: 'nhà văn',
    workplace: 'at home or a quiet library',
    workplaceVi: 'ở nhà hoặc thư viện yên tĩnh',
    reasonVerb: 'write comic stories for children',
    reasonVi: 'viết truyện tranh cho thiếu nhi',
    questionWhat: 'What would he like to be in the future?',
    answerWhat: "He'd like to be a writer.",
    questionWhy: 'Why would he like to be a writer?',
    answerWhy: "Because he'd like to write comic stories for children.",
    tip: 'writer phát âm /ˈraɪtə/ (chữ w câm) → dùng "a writer".',
  },
  {
    id: 'job-astronaut',
    iconKey: 'astronaut',
    article: 'an',
    jobEn: 'astronaut',
    jobVi: 'phi hành gia',
    workplace: 'in a spaceship in space',
    workplaceVi: 'trên tàu vũ trụ trong không gian',
    reasonVerb: 'fly a spaceship and travel in space',
    reasonVi: 'lái tàu vũ trụ và du hành trong không gian',
    questionWhat: 'What would you like to be in the future?',
    answerWhat: "I'd like to be an astronaut.",
    questionWhy: 'Why would you like to be an astronaut?',
    answerWhy: "Because I'd like to fly a spaceship and travel in space.",
    tip: 'Nhớ 2 bẫy thi: "an astronaut" và "in space" (không phải on space)!',
  },
];

export const U15_TASK1_ODD: QuizChoiceItem[] = [
  {
    id: 'p113-t1-1',
    prompt: '1. Chọn từ khác loại:',
    options: ['pilot', 'doctor', 'future', 'architect'],
    correctIndex: 2,
    explanation: 'future (tương lai) là danh từ chỉ thời gian; 3 từ kia đều là nghề nghiệp.',
  },
  {
    id: 'p113-t1-2',
    prompt: '2. Chọn từ khác loại:',
    options: ['fly', 'writer', 'nurse', 'teacher'],
    correctIndex: 0,
    explanation: 'fly (bay/lái máy bay) là động từ; writer, nurse, teacher đều là danh từ nghề nghiệp.',
  },
  {
    id: 'p113-t1-3',
    prompt: '3. Chọn từ khác loại:',
    options: ['fly', 'problem', 'design', 'look after'],
    correctIndex: 1,
    explanation: 'problem (vấn đề) là danh từ; fly, design, look after đều là động từ.',
  },
  {
    id: 'p113-t1-4',
    prompt: '4. Chọn từ khác loại:',
    options: ['farmer', 'driver', 'nurse', 'patient'],
    correctIndex: 3,
    explanation: 'patient (bệnh nhân) không phải nghề nghiệp; farmer, driver, nurse đều là nghề nghiệp.',
  },
  {
    id: 'p113-t1-5',
    prompt: '5. Chọn từ khác loại:',
    options: ['write', 'story', 'plane', 'hospital'],
    correctIndex: 0,
    explanation: 'write (viết) là động từ; story, plane, hospital đều là danh từ.',
  },
];

export const U15_TASK2_MC: QuizChoiceItem[] = [
  {
    id: 'p113-t2-1',
    prompt: '1. _____ would you like to be in the future?',
    options: ['Which', 'Who', 'What'],
    correctIndex: 2,
    explanation: 'Hỏi nghề nghiệp mơ ước luôn dùng: "What would you like to be in the future?".',
  },
  {
    id: 'p113-t2-2',
    prompt: "2. I'd _____ to be a teacher.",
    options: ['like', 'likes', 'liked'],
    correctIndex: 0,
    explanation: "I'd = I would. Sau động từ khiếm khuyết would, động từ luôn giữ nguyên mẫu: like.",
  },
  {
    id: 'p113-t2-3',
    prompt: "3. Maria wants to be a teacher _____ she'd like to _____ children.",
    options: ['why / teach', 'because / teach', 'and / teaches'],
    correctIndex: 1,
    explanation: 'Nối mệnh đề lý do dùng "because", và sau "would like to" dùng động từ nguyên mẫu "teach".',
  },
  {
    id: 'p113-t2-4',
    prompt: "4. _____ would he like to work? – He'd like to work in a school.",
    options: ['When', 'Who', 'Where'],
    correctIndex: 2,
    explanation: 'Câu trả lời chỉ nơi làm việc ("in a school") nên từ hỏi là Where (ở đâu).',
  },
  {
    id: 'p113-t2-5',
    prompt: '5. Rosie would like to be a nurse because she wants to _____ patients.',
    options: ['do', 'look after', 'grow'],
    correctIndex: 1,
    explanation: 'Y tá (nurse) muốn chăm sóc (look after) bệnh nhân (patients).',
  },
  {
    id: 'p113-t2-6',
    prompt: "6. _____ would you like to be an architect? – Because I'd like to _____ buildings.",
    options: ['Why / design', 'Who / designs', 'What / designed'],
    correctIndex: 0,
    explanation: 'Câu trả lời bắt đầu bằng "Because" → hỏi bằng Why; sau "like to" → nguyên mẫu "design".',
  },
];

export const U15_TASK3_DEFS: FillItem[] = [
  {
    id: 'p114-t3-1',
    before: '1. He loves children and helps them to learn. → He is a',
    after: '.',
    hint: 'Giáo viên (7 chữ cái: t _ _ _ _ _ _)',
    iconKey: 'teacher',
    answers: ['teacher'],
    explanation: 'Yêu trẻ nhỏ và giúp các em học tập → teacher (giáo viên).',
  },
  {
    id: 'p114-t3-2',
    before: '2. He designs houses and buildings. → He is an',
    after: '.',
    hint: 'Kiến trúc sư (9 chữ cái: a _ _ _ _ _ _ _ _)',
    iconKey: 'architect',
    answers: ['architect'],
    explanation: 'Người thiết kế nhà cửa và các tòa nhà → architect (kiến trúc sư).',
  },
  {
    id: 'p114-t3-3',
    before: '3. He/She works in a field or on a farm. → He/She is a',
    after: '.',
    hint: 'Nông dân (6 chữ cái: f _ _ _ _ _)',
    iconKey: 'farmer',
    answers: ['farmer'],
    explanation: 'Làm việc trên cánh đồng hoặc nông trại → farmer (nông dân).',
  },
  {
    id: 'p114-t3-4',
    before: '4. Their job is dancing. → They are',
    after: '.',
    hint: 'Các vũ công (số nhiều 7 chữ cái: d _ _ _ _ _ s)',
    iconKey: 'dancer',
    answers: ['dancers', 'dancer'],
    explanation: 'Công việc là múa/nhảy (dancing) + chủ ngữ số nhiều "Their" → dancers (các vũ công).',
  },
  {
    id: 'p114-t3-5',
    before: '5. He can keep our town or city safe. → He is a',
    after: '.',
    hint: 'Chú cảnh sát (9 chữ cái: p _ _ _ _ _ _ _ _)',
    iconKey: 'policeman',
    answers: ['policeman', 'police officer'],
    explanation: 'Giữ gìn an toàn cho thị trấn và thành phố → policeman (cảnh sát).',
  },
];

export const U15_TASK4_JIM_READING = {
  title: 'Thư bạn Jim gửi Ông nội (Dear Grandpa)',
  passage:
    "Dear Grandpa, How are you? Last week, Dad took me to Kid City. There were a lot of people and interesting things to see there. I was very excited to be on a plane, and watched some video clips about pilots. It was great to see them fly lots of planes. I'd like to be a pilot in the future like you. I want to fly to many countries around the world. Now I prepare for my dream job by running two kilometres in the morning. A good pilot must be strong, right? Love you, Jim",
  passageVi:
    'Ông nội kính mến, Ông có khỏe không ạ? Tuần trước, bố đưa cháu đến Kid City. Ở đó có rất nhiều người và nhiều điều thú vị. Cháu rất hào hứng khi được lên máy bay và xem một số đoạn video về các phi công. Thật tuyệt khi thấy họ lái rất nhiều máy bay. Cháu muốn trở thành phi công trong tương lai giống như ông. Cháu muốn bay đến nhiều quốc gia khắp thế giới. Bây giờ cháu đang chuẩn bị cho ước mơ bằng cách chạy bộ 2 ki-lô-mét mỗi sáng. Một phi công giỏi phải thật khỏe mạnh, đúng không ạ? Cháu yêu ông, Jim.',
  statements: [
    {
      id: 'p114-t4-1',
      text: "1. Jim's father took him to Kid City.",
      isTrue: true,
      explanation: 'Đúng! Bức thư viết: "Last week, Dad took me to Kid City".',
    },
    {
      id: 'p114-t4-2',
      text: '2. He saw a lot of pilots there.',
      isTrue: false,
      explanation: 'Sai! Jim chỉ xem các đoạn video về phi công ("watched some video clips about pilots"), không phải gặp trực tiếp nhiều phi công.',
    },
    {
      id: 'p114-t4-3',
      text: '3. His father is a pilot.',
      isTrue: false,
      explanation: 'Sai! Bức thư gửi ông nội ("Dear Grandpa") và Jim nói "like you" → Ông nội của Jim mới là phi công!',
    },
    {
      id: 'p114-t4-4',
      text: '4. He does morning exercise by running 2 kilometres to be strong.',
      isTrue: true,
      explanation: 'Đúng! Jim chạy 2 km mỗi sáng để thật khỏe mạnh cho nghề phi công.',
    },
    {
      id: 'p114-t4-5',
      text: '5. He wants to be a pilot in the future.',
      isTrue: true,
      explanation: 'Đúng! Câu thư: "I’d like to be a pilot in the future like you".',
    },
  ],
};

export const U15_TASK5_MISTAKES: MistakeItem[] = [
  {
    id: 'p115-t5-1',
    number: 1,
    sentence: 'What do you like to be in the future?',
    wrongPart: 'do',
    corrections: [
      'What would you like to be in the future?',
      'What would you like to be in the future',
    ],
    correctedSentence: 'What would you like to be in the future?',
    explanation: 'Hỏi nghề nghiệp mơ ước dùng "would like to be", không dùng "do like to be" → đổi do thành would.',
  },
  {
    id: 'p115-t5-2',
    number: 2,
    sentence: 'Why would you to be a teacher?',
    wrongPart: 'would you to be',
    corrections: [
      'Why would you like to be a teacher?',
      'Why would you like to be a teacher',
      'Why do you want to be a teacher?',
      'Why do you want to be a teacher',
    ],
    correctedSentence: 'Why would you like to be a teacher?',
    explanation: 'Thiếu động từ "like" trong cấu trúc "would you like to be...?" → thêm like.',
  },
  {
    id: 'p115-t5-3',
    number: 3,
    sentence: "I'd like to be a astronaut.",
    wrongPart: 'a',
    corrections: [
      "I'd like to be an astronaut.",
      "I'd like to be an astronaut",
      'I would like to be an astronaut.',
      'I would like to be an astronaut',
    ],
    correctedSentence: "I'd like to be an astronaut.",
    explanation: '"astronaut" bắt đầu bằng nguyên âm a (/æ/) nên phải dùng mạo từ "an" → an astronaut.',
  },
  {
    id: 'p115-t5-4',
    number: 4,
    sentence: 'Because I like travelling on space.',
    wrongPart: 'on',
    corrections: [
      'Because I like travelling in space.',
      'Because I like travelling in space',
      'Because I like traveling in space.',
      'Because I like traveling in space',
    ],
    correctedSentence: 'Because I like travelling in space.',
    explanation: 'Trong không gian/vũ trụ luôn dùng giới từ IN → in space (không dùng on space).',
  },
  {
    id: 'p115-t5-5',
    number: 5,
    sentence: 'Because he like teaching young children.',
    wrongPart: 'like',
    corrections: [
      'Because he likes teaching young children.',
      'Because he likes teaching young children',
    ],
    correctedSentence: 'Because he likes teaching young children.',
    explanation: 'Chủ ngữ ngôi thứ ba số ít "he" ở hiện tại đơn phải thêm -s vào động từ → likes.',
  },
];

export const U15_TASK6_LE_BLANKS: ParagraphBlank[] = [
  { id: 'p115-t6-1', index: 1, answers: ['school'], hint: 'Ngôi trường tiểu học (s _ _ _ _ _)', iconKey: 'school' },
  { id: 'p115-t6-2', index: 2, answers: ['classrooms', 'classroom'], hint: 'Nhiều phòng học (sau many thêm -s: c _ _ _ _ _ _ _ _ s)', iconKey: 'classroom' },
  { id: 'p115-t6-3', index: 3, answers: ['library'], hint: 'Thư viện có nhiều sách (l _ _ _ _ _ _)', iconKey: 'book' },
  { id: 'p115-t6-4', index: 4, answers: ['playground'], hint: 'Sân chơi trường học (p _ _ _ _ _ _ _ _ _)', iconKey: 'playground' },
  { id: 'p115-t6-5', index: 5, answers: ['pool'], hint: 'Hồ bơi: swimming ____ (4 chữ cái)', iconKey: 'swim' },
];

export const U15_TASK7_PICTURES: FillItem[] = [
  {
    id: 'p116-t7-1',
    before: '1. He would like to be a',
    after: '.',
    hint: 'Phi công đứng cạnh máy bay (5 chữ cái: p _ _ _ _)',
    iconKey: 'pilot',
    answers: ['pilot'],
    explanation: 'Chú phi công lái máy bay → pilot.',
  },
  {
    id: 'p116-t7-2',
    before: '2. He wants to be a great football',
    after: '.',
    hint: 'Cầu thủ bóng đá (6 chữ cái: p _ _ _ _ _)',
    iconKey: 'football',
    answers: ['player'],
    explanation: 'Cầu thủ bóng đá là "football player".',
  },
  {
    id: 'p116-t7-3',
    before: "3. He'd like to be an",
    after: 'in the future.',
    hint: 'Kiến trúc sư cầm bản vẽ (9 chữ cái: a _ _ _ _ _ _ _ _)',
    iconKey: 'architect',
    answers: ['architect'],
    explanation: 'Đi sau mạo từ "an" và cầm bản thiết kế tòa nhà → architect.',
  },
  {
    id: 'p116-t7-4',
    before: '4. Her dream is to be a',
    after: 'in the hospital.',
    hint: 'Cô y tá ở bệnh viện (5 chữ cái: n _ _ _ _)',
    iconKey: 'nurse',
    answers: ['nurse'],
    explanation: 'Cô y tá chăm sóc người bệnh trong bệnh viện → nurse.',
  },
  {
    id: 'p116-t7-5',
    before: '5. He wants to be a',
    after: 'like his father.',
    hint: 'Chú cảnh sát (9 chữ cái: p _ _ _ _ _ _ _ _)',
    iconKey: 'policeman',
    answers: ['policeman', 'police officer'],
    explanation: 'Chú cảnh sát giữ trật tự thành phố → policeman.',
  },
];

export const U15_TASK8_P116: OrderSentenceItem[] = [
  {
    id: 'p116-t8-1',
    words: ['you', 'What', 'would', 'to', 'do', 'like', 'when', 'grow up?', 'you'],
    answer: 'What would you like to do when you grow up?',
    meaning: 'Bạn muốn làm gì khi bạn lớn lên?',
    explanation: 'Cấu trúc: What would you like to do + when you grow up?',
  },
  {
    id: 'p116-t8-2',
    words: ['like', 'Where', 'would', 'work?', 'you', 'to'],
    answer: 'Where would you like to work?',
    meaning: 'Bạn muốn làm việc ở đâu?',
    explanation: 'Where + would + you + like to + work?',
  },
];

export const U15_TASK8_P117: OrderSentenceItem[] = [
  {
    id: 'p117-t8-3',
    words: ['your', 'What', 'is', 'dream', 'job,', 'Susan?'],
    answer: 'What is your dream job, Susan?',
    meaning: 'Nghề nghiệp mơ ước của bạn là gì, Susan?',
    explanation: 'What is + your dream job, + tên người nghe?',
  },
  {
    id: 'p117-t8-4',
    words: ['would', 'She', 'look after', 'like', 'to', 'old people.'],
    answer: 'She would like to look after old people.',
    meaning: 'Cô ấy muốn chăm sóc những người lớn tuổi.',
    explanation: 'Chủ ngữ She + would like to + look after + old people.',
  },
  {
    id: 'p117-t8-5',
    words: ['dream', 'My', 'is', 'job', 'teaching', 'Maths.'],
    answer: 'My dream job is teaching Maths.',
    meaning: 'Công việc mơ ước của mình là dạy môn Toán.',
    explanation: 'My dream job + is + V-ing (teaching Maths).',
  },
];

export const U15_TASK9_WRITING: GuidedWritingPrompt[] = [
  {
    id: 'p117-w1',
    question: '1. What would you like to do when you grow up? (Em muốn làm nghề gì khi lớn lên?)',
    starter: "I'd like",
    sample: 'to be an architect when I grow up.',
    placeholder: 'to be a pilot / a teacher / an architect...',
  },
  {
    id: 'p117-w2',
    question: '2. Where would you like to work? (Em muốn làm việc ở đâu?)',
    starter: "I'd like to work",
    sample: 'in a big design company in Ha Noi.',
    placeholder: 'in a school / in a hospital / in a big company...',
  },
  {
    id: 'p117-w3',
    question: '3. Who would you like to work with? (Em muốn làm việc cùng ai?)',
    starter: "I'd like to work with",
    sample: 'friendly and creative engineers.',
    placeholder: 'kind doctors / lovely children / creative friends...',
  },
  {
    id: 'p117-w4',
    question: '4. Why would you like to do that job? (Tại sao em muốn làm nghề đó?)',
    starter: "I'd like to do that job because",
    sample: 'I want to design beautiful schools and houses for children.',
    placeholder: 'I want to help patients / fly planes / teach children...',
  },
  {
    id: 'p117-w5',
    question: '5. What should you do now to be able to do that job in the future? (Bây giờ em nên làm gì?)',
    starter: 'I should',
    sample: 'study Maths, Art and English hard every day.',
    placeholder: 'study hard and exercise every day...',
  },
];

/* =========================================================
   FULL UNIT 16 (PAGES 118–125)
   ========================================================= */

export const U16_VOCAB_PAGE118: PageVocabWord[] = [
  { word: 'place', ipa: '/pleɪs/', pos: 'n', meaning: 'nơi, địa điểm', group: 'Địa điểm trong thành phố', example: 'This is a quiet place to read books.', exampleVi: 'Đây là một nơi yên tĩnh để đọc sách.', tip: 'Chữ c đứng trước e đọc là /s/: /pleɪs/.' },
  { word: 'post office', ipa: '/ˈpəʊst ɒfɪs/', pos: 'n', meaning: 'bưu điện', group: 'Địa điểm trong thành phố', example: 'I go to the post office to send a postcard.', exampleVi: 'Mình đến bưu điện để gửi bưu thiếp.', tip: 'Nơi gửi thư (letter), tem (stamp), bưu thiếp (postcard).' },
  { word: 'bus stop', ipa: '/ˈbʌs stɒp/', pos: 'n', meaning: 'trạm dừng xe buýt', group: 'Địa điểm trong thành phố', example: 'We wait for the bus at the bus stop.', exampleVi: 'Chúng mình đợi xe buýt ở trạm dừng xe buýt.', tip: 'Dùng giới từ AT: at the bus stop.' },
  { word: 'pharmacy', ipa: '/ˈfɑːməsi/', pos: 'n', meaning: 'hiệu thuốc, nhà thuốc', group: 'Địa điểm trong thành phố', example: 'We buy medicine at the pharmacy.', exampleVi: 'Chúng mình mua thuốc ở hiệu thuốc.', tip: 'Chữ ph đọc là /f/: /ˈfɑːməsi/.' },
  { word: 'cinema', ipa: '/ˈsɪnəmə/', pos: 'n', meaning: 'rạp chiếu phim', group: 'Địa điểm trong thành phố', example: 'The cinema is opposite the park.', exampleVi: 'Rạp chiếu phim đối diện công viên.', tip: 'Nhấn âm 1: SI-nơ-mơ.' },
  { word: 'museum', ipa: '/mjuˈziːəm/', pos: 'n', meaning: 'bảo tàng', group: 'Địa điểm trong thành phố', example: 'We see ancient things at the museum.', exampleVi: 'Chúng mình ngắm đồ cổ tại bảo tàng.', tip: 'Nhấn âm 2: miu-ZI-ầm.' },
  { word: 'park', ipa: '/pɑːk/', pos: 'n', meaning: 'công viên', group: 'Địa điểm trong thành phố', example: 'My school is next to a green park.', exampleVi: 'Trường mình nằm cạnh một công viên xanh.', tip: 'Âm /ɑː/ kéo dài giống car, star.' },
  { word: 'zoo', ipa: '/zuː/', pos: 'n', meaning: 'sở thú', group: 'Địa điểm trong thành phố', example: 'There is a bus stop next to the zoo.', exampleVi: 'Có một trạm xe buýt ở cạnh sở thú.', tip: 'Âm /z/ rung nhẹ đầu lưỡi.' },
  { word: 'theatre', ipa: '/ˈθɪətə(r)/', pos: 'n', meaning: 'nhà hát', group: 'Địa điểm trong thành phố', example: 'We watch plays and operas at the theatre.', exampleVi: 'Chúng mình xem kịch và nhạc kịch ở nhà hát.', tip: 'Khác với cinema (xem phim) — theatre là xem kịch, biểu diễn sân khấu.' },
  { word: 'restaurant', ipa: '/ˈrestrɒnt/', pos: 'n', meaning: 'nhà hàng', group: 'Địa điểm trong thành phố', example: 'Let’s have dinner at a nice restaurant.', exampleVi: 'Chúng ta hãy ăn tối ở một nhà hàng đẹp nhé.', tip: 'Thường đọc gọn 2 âm tiết: /ˈres-trɒnt/.' },
  { word: 'supermarket', ipa: '/ˈsuːpəmɑːkɪt/', pos: 'n', meaning: 'siêu thị', group: 'Địa điểm trong thành phố', example: 'There is a supermarket opposite the hospital.', exampleVi: 'Có một siêu thị đối diện bệnh viện.', tip: 'Ghép super (siêu) + market (chợ).' },
  { word: 'next to', ipa: '/nekst tuː/', pos: 'prep', meaning: 'bên cạnh, kế bên', group: 'Giới từ vị trí', example: 'My house is next to a bookshop.', exampleVi: 'Nhà mình ở ngay cạnh một hiệu sách.', tip: 'Bắt buộc phải có chữ TO đi kèm: next to!' },
  { word: 'behind', ipa: '/bɪˈhaɪnd/', pos: 'prep', meaning: 'ở phía sau', group: 'Giới từ vị trí', example: 'There is a small garden behind my house.', exampleVi: 'Có một khu vườn nhỏ phía sau nhà mình.', tip: 'Trái nghĩa: in front of (ở phía trước).' },
  { word: 'in front of', ipa: '/ɪn frʌnt əv/', pos: 'prep', meaning: 'ở phía trước (bên ngoài)', group: 'Giới từ vị trí', example: 'The bus stop is in front of the school.', exampleVi: 'Trạm xe buýt ở phía trước cổng trường.', tip: 'Không có "the" khi đứng ngoài vật; "in the front of" là phần đầu bên trong xe/phòng.' },
  { word: 'opposite', ipa: '/ˈɒpəzɪt/', pos: 'prep', meaning: 'đối diện (qua đường)', group: 'Giới từ vị trí', example: 'The theatre is opposite the bakery.', exampleVi: 'Nhà hát đối diện tiệm bánh.', tip: 'KHÔNG thêm "to" sau opposite! Sai: opposite to X → Đúng: opposite X.' },
  { word: 'between', ipa: '/bɪˈtwiːn/', pos: 'prep', meaning: 'ở giữa (2 địa điểm)', group: 'Giới từ vị trí', example: 'The bookshop is between the museum and the cinema.', exampleVi: 'Hiệu sách nằm giữa bảo tàng và rạp chiếu phim.', tip: 'Luôn đi theo cặp: between A and B.' },
  { word: 'on the corner', ipa: '/ɒn ðə ˈkɔːnə(r)/', pos: 'phr', meaning: 'ở góc đường', group: 'Chỉ đường', example: 'The theatre is on the corner of the street.', exampleVi: 'Nhà hát nằm ở góc con phố.', tip: 'Góc phố ngoài trời thường dùng "on/at the corner of the street".' },
  { word: 'go straight', ipa: '/ɡəʊ streɪt/', pos: 'phr', meaning: 'đi thẳng', group: 'Chỉ đường', example: 'Go straight ahead for five minutes.', exampleVi: 'Đi thẳng phía trước trong năm phút.', tip: 'Chữ gh trong straight bị câm: đọc /streɪt/.' },
  { word: 'ahead', ipa: '/əˈhed/', pos: 'adv', meaning: 'về phía trước', group: 'Chỉ đường', example: 'Go straight ahead and turn left.', exampleVi: 'Đi thẳng phía trước rồi rẽ trái.', tip: 'Nhấn âm 2: ơ-HED.' },
];

export const U16_VOCAB_PAGE119: PageVocabWord[] = [
  { word: 'turn left', ipa: '/tɜːn left/', pos: 'phr', meaning: 'rẽ trái', group: 'Chỉ đường & Phương tiện', example: 'Then turn left at Pink Street.', exampleVi: 'Sau đó rẽ trái ở phố Pink.', tip: 'Mẹo nhớ: L là Left (trái) – giơ ngón cái và trỏ tay trái tạo thành chữ L!' },
  { word: 'turn right', ipa: '/tɜːn raɪt/', pos: 'phr', meaning: 'rẽ phải', group: 'Chỉ đường & Phương tiện', example: 'Turn right at the corner.', exampleVi: 'Rẽ phải ở góc đường.', tip: 'Chữ gh trong right câm: đọc /raɪt/.' },
  { word: 'at the end', ipa: '/æt ði end/', pos: 'phr', meaning: 'ở cuối (đường)', group: 'Chỉ đường & Phương tiện', example: 'The pharmacy is at the end of the street.', exampleVi: 'Hiệu thuốc nằm ở cuối con phố.', tip: 'Cụm cố định: at the end of the street.' },
  { word: 'near', ipa: '/nɪə(r)/', pos: 'prep', meaning: 'gần', group: 'Chỉ đường & Phương tiện', example: 'My school is near the park.', exampleVi: 'Trường mình ở gần công viên.', tip: 'KHÔNG thêm "to" sau near! (Đúng: near the park; next to the park).' },
  { word: 'take a coach', ipa: '/teɪk ə kəʊtʃ/', pos: 'phr', meaning: 'đi xe khách đường dài', group: 'Chỉ đường & Phương tiện', example: 'You can take a coach from Ha Noi to Sa Pa.', exampleVi: 'Bạn có thể đi xe khách từ Hà Nội tới Sa Pa.', tip: 'take a + phương tiện = go by + phương tiện.' },
  { word: 'take a boat', ipa: '/teɪk ə bəʊt/', pos: 'phr', meaning: 'đi thuyền, tàu thủy', group: 'Chỉ đường & Phương tiện', example: 'Then take a boat to Con Dao Island.', exampleVi: 'Sau đó đi tàu ra đảo Côn Đảo.', tip: 'Dùng khi đi ra đảo (island).' },
  { word: 'go by plane', ipa: '/ɡəʊ baɪ pleɪn/', pos: 'phr', meaning: 'đi bằng máy bay', group: 'Chỉ đường & Phương tiện', example: 'Or you can go by plane. It is faster.', exampleVi: 'Hoặc bạn có thể đi bằng máy bay. Nhanh hơn nhiều.', tip: 'Sau "by" KHÔNG có a/an/the: by plane, by bus.' },
  { word: 'giving directions', ipa: '/ˈɡɪvɪŋ dəˈrekʃnz/', pos: 'phr', meaning: 'chỉ đường', group: 'Chỉ đường & Phương tiện', example: 'Nam is good at giving directions.', exampleVi: 'Nam rất giỏi chỉ đường.', tip: 'ask for directions (hỏi đường) ↔ give directions (chỉ đường).' },
  { word: 'fence', ipa: '/fens/', pos: 'n', meaning: 'hàng rào', group: 'Chỉ đường & Phương tiện', example: 'The cat jumped over the fence.', exampleVi: 'Con mèo nhảy qua hàng rào.', tip: 'Ví dụ kinh điển cho giới từ OVER (vượt qua bên trên).' },
];

export const U16_NEIGHBORHOOD_PLACES: NeighborhoodPlace[] = [
  {
    id: 'place-postoffice',
    iconKey: 'postoffice',
    nameEn: 'Post Office',
    nameVi: 'Bưu điện',
    streetLabel: 'Green Street (góc phố)',
    prepositionHighlight: 'on the corner of',
    whereQuestion: 'Excuse me, where is the post office?',
    whereAnswer: "It's on the corner of Green Street, opposite the park.",
    whereAnswerVi: 'Nó nằm ở góc phố Green, đối diện công viên.',
    howQuestion: 'How can I get to the post office?',
    howAnswer: 'Go straight ahead for two minutes. It is on your left.',
    howAnswerVi: 'Đi thẳng phía trước hai phút. Nó ở bên tay trái bạn.',
  },
  {
    id: 'place-bookshop',
    iconKey: 'book',
    nameEn: 'Bookshop',
    nameVi: 'Hiệu sách',
    streetLabel: 'Green Street (giữa Bảo tàng & Rạp phim)',
    prepositionHighlight: 'between ... and ...',
    whereQuestion: 'Excuse me, where is the bookshop?',
    whereAnswer: "It's between the museum and the cinema.",
    whereAnswerVi: 'Nó nằm giữa bảo tàng và rạp chiếu phim.',
    howQuestion: 'How can I get to the bookshop?',
    howAnswer: 'Walk along Green Street and look on your right.',
    howAnswerVi: 'Đi dọc theo phố Green rồi nhìn sang tay phải.',
  },
  {
    id: 'place-pharmacy',
    iconKey: 'pharmacy',
    nameEn: 'Pharmacy',
    nameVi: 'Hiệu thuốc',
    streetLabel: 'Cuối phố Pink Street',
    prepositionHighlight: 'at the end of',
    whereQuestion: 'Excuse me, where is the pharmacy?',
    whereAnswer: "It's at the end of Pink Street.",
    whereAnswerVi: 'Nó nằm ở cuối phố Pink.',
    howQuestion: 'How can I get to the pharmacy?',
    howAnswer: 'Go straight ahead, then turn right at Pink Street. Walk to the end.',
    howAnswerVi: 'Đi thẳng, sau đó rẽ phải ở phố Pink rồi đi tới cuối đường.',
  },
  {
    id: 'place-busstop',
    iconKey: 'busstop',
    nameEn: 'Bus Stop',
    nameVi: 'Trạm xe buýt',
    streetLabel: 'Ngay cạnh Sở thú (Zoo)',
    prepositionHighlight: 'next to',
    whereQuestion: 'Excuse me, where is the bus stop?',
    whereAnswer: "It's next to the zoo and in front of the park.",
    whereAnswerVi: 'Nó ở cạnh sở thú và phía trước công viên.',
    howQuestion: 'How can I get to the bus stop?',
    howAnswer: 'You can walk for five minutes. Turn left at the corner.',
    howAnswerVi: 'Bạn có thể đi bộ 5 phút. Rẽ trái ở góc phố.',
  },
  {
    id: 'place-theatre',
    iconKey: 'theatre',
    nameEn: 'Theatre',
    nameVi: 'Nhà hát',
    streetLabel: 'Đối diện Tiệm bánh (Bakery)',
    prepositionHighlight: 'opposite',
    whereQuestion: 'Excuse me, where is the theatre?',
    whereAnswer: "It's opposite the bakery.",
    whereAnswerVi: 'Nó nằm đối diện tiệm bánh.',
    howQuestion: 'How can I get to the theatre?',
    howAnswer: 'You can take a bus or walk straight ahead for ten minutes.',
    howAnswerVi: 'Bạn có thể đi xe buýt hoặc đi bộ thẳng mười phút.',
  },
  {
    id: 'place-museum',
    iconKey: 'museum',
    nameEn: 'Museum',
    nameVi: 'Bảo tàng',
    streetLabel: 'Cạnh Hiệu sách & đối diện Công viên',
    prepositionHighlight: 'near / next to',
    whereQuestion: 'Excuse me, where is the museum?',
    whereAnswer: "It's next to the bookshop and near the post office.",
    whereAnswerVi: 'Nó nằm cạnh hiệu sách và gần bưu điện.',
    howQuestion: 'How can I get to the museum?',
    howAnswer: 'Go straight ahead and turn right. You can see it on the left.',
    howAnswerVi: 'Đi thẳng rồi rẽ phải. Bạn sẽ thấy nó ở bên tay trái.',
  },
];

export const U16_TASK1_ODD: QuizChoiceItem[] = [
  {
    id: 'p121-t1-1',
    prompt: '1. Chọn từ khác loại:',
    options: ['envelope', 'stamp', 'letter', 'opposite'],
    correctIndex: 3,
    explanation: 'opposite (đối diện) là giới từ vị trí; envelope (phong bì), stamp (tem), letter (thư) là đồ vật ở bưu điện.',
  },
  {
    id: 'p121-t1-2',
    prompt: '2. Chọn từ khác loại:',
    options: ['next to', 'between', 'on the corner', 'get'],
    correctIndex: 3,
    explanation: 'get (đến/lấy) là động từ; 3 cụm kia đều là giới từ/cụm chỉ vị trí.',
  },
  {
    id: 'p121-t1-3',
    prompt: '3. Chọn từ khác loại:',
    options: ['bus stop', 'pharmacy', 'minute', 'supermarket'],
    correctIndex: 2,
    explanation: 'minute (phút) là đơn vị thời gian; bus stop, pharmacy, supermarket đều là địa điểm.',
  },
  {
    id: 'p121-t1-4',
    prompt: '4. Chọn từ khác loại:',
    options: ['walk', 'boat', 'plane', 'coach'],
    correctIndex: 0,
    explanation: 'walk (đi bộ) là động từ; boat, plane, coach đều là danh từ phương tiện giao thông.',
  },
  {
    id: 'p121-t1-5',
    prompt: '5. Chọn từ khác loại:',
    options: ['right', 'left', 'kind', 'straight'],
    correctIndex: 2,
    explanation: 'kind (tốt bụng) là tính từ tính cách; right, left, straight đều là hướng chỉ đường.',
  },
];

export const U16_TASK2_P121: QuizChoiceItem[] = [
  {
    id: 'p121-t2-1',
    prompt: '1. Is it _____ from school?',
    options: ['far', 'near', 'next to', 'behind'],
    correctIndex: 0,
    explanation: 'Chỉ có "far" mới đi với giới từ "from": far from school (xa trường).',
  },
  {
    id: 'p121-t2-2',
    prompt: '2. We are _____ to have a school trip next weekend.',
    options: ['go', 'goes', 'went', 'going'],
    correctIndex: 3,
    explanation: 'Cấu trúc dự định tương lai: be + going to + V → are going to have.',
  },
  {
    id: 'p121-t2-3',
    prompt: '3. _____ go to the park.',
    options: ["Let's", "Why don't we", 'Should we', 'b & c'],
    correctIndex: 0,
    explanation: "Câu rủ rê kết thúc bằng dấu chấm (không phải dấu hỏi) nên dùng Let's + V nguyên mẫu!",
  },
  {
    id: 'p121-t2-4',
    prompt: '4. His house is _____ to my house.',
    options: ['behind', 'in front', 'next', 'near'],
    correctIndex: 2,
    explanation: 'Đã có chữ "to" phía sau → chỉ có "next to" (bên cạnh) là đúng ngữ pháp.',
  },
  {
    id: 'p121-t2-5',
    prompt: '5. How _____ is it from your house to school?',
    options: ['long', 'much', 'far', 'All are correct'],
    correctIndex: 2,
    explanation: 'Hỏi khoảng cách từ nơi A đến nơi B luôn dùng: "How far is it from A to B?".',
  },
  {
    id: 'p121-t2-6',
    prompt: '6. The supermarket is _____ the hospital.',
    options: ['near to', 'opposite', 'behinds', 'in front'],
    correctIndex: 1,
    explanation: 'near KHÔNG có to, behind KHÔNG có s, in front thiếu of → chỉ có "opposite" chuẩn 100%!',
  },
];

export const U16_TASK2_P122: QuizChoiceItem[] = [
  {
    id: 'p122-t2-7',
    prompt: '7. It is _____ the end of the street.',
    options: ['at', 'on', 'of', 'with'],
    correctIndex: 0,
    explanation: 'Cụm cố định: "at the end of the street" (ở cuối con phố).',
  },
  {
    id: 'p122-t2-8',
    prompt: '8. How can I _____ to the post office?',
    options: ['get', 'to get', 'getting', 'to getting'],
    correctIndex: 0,
    explanation: 'Sau động từ khiếm khuyết "can" luôn dùng động từ nguyên mẫu không to → get.',
  },
];

export const U16_TASK3_PLACE_MATCH: PairMatchItem[] = [
  {
    id: 'p122-t3-1',
    left: '1. Bus stop (Trạm xe buýt)',
    leftVi: 'Nơi đứng chờ xe buýt',
    rightKey: 'd',
    rightLabel: 'd. We wait for the bus at this place.',
    iconKey: 'busstop',
    isExample: true,
  },
  {
    id: 'p122-t3-2',
    left: '2. Museum (Bảo tàng)',
    leftVi: 'Nơi trưng bày hiện vật cổ xưa',
    rightKey: 'c',
    rightLabel: 'c. We see different ancient things at this place.',
    iconKey: 'museum',
  },
  {
    id: 'p122-t3-3',
    left: '3. Theatre (Nhà hát)',
    leftVi: 'Nơi biểu diễn kịch và nhạc kịch',
    rightKey: 'b',
    rightLabel: 'b. We see plays and operas at this place.',
    iconKey: 'theatre',
  },
  {
    id: 'p122-t3-4',
    left: '4. Library (Thư viện)',
    leftVi: 'Không gian yên tĩnh đọc sách',
    rightKey: 'f',
    rightLabel: "f. It's a quiet place for people to read books.",
    iconKey: 'book',
  },
  {
    id: 'p122-t3-5',
    left: '5. Post office (Bưu điện)',
    leftVi: 'Nơi gửi bưu thiếp và thư từ',
    rightKey: 'a',
    rightLabel: 'a. We send postcards and letters at this place.',
    iconKey: 'postoffice',
  },
  {
    id: 'p122-t3-6',
    left: '6. Pharmacy (Hiệu thuốc)',
    leftVi: 'Nơi mua thuốc chữa bệnh',
    rightKey: 'e',
    rightLabel: 'e. We buy medicine at this place.',
    iconKey: 'pharmacy',
  },
];

export const U16_TASK4_SCHOOL_READING = {
  title: 'Đường đi bộ đến ngôi trường mới (My New School)',
  passage:
    "My house is in White Street. My new school is not very far from my house. It's in Pink Street. Every morning, I get out of my house, turn right and walk along the street for five minutes. Then I turn left at Pink Street. From the street corner, I can see my big, yellow school. It's between a green park and a museum.",
  passageVi:
    'Nhà mình ở phố White. Ngôi trường mới không quá xa nhà mình. Trường nằm trên phố Pink. Mỗi buổi sáng, mình ra khỏi nhà, rẽ phải rồi đi bộ dọc theo con phố mất 5 phút. Sau đó mình rẽ trái ở phố Pink. Từ góc phố, mình có thể nhìn thấy ngôi trường to lớn sơn màu vàng. Trường nằm giữa một công viên xanh mát và một bảo tàng.',
  statements: [
    {
      id: 'p123-t4-1',
      text: '1. I go to school in the afternoon.',
      isTrue: false,
      explanation: 'Sai! Đoạn văn viết "Every morning" (mỗi buổi sáng), không phải buổi chiều.',
    },
    {
      id: 'p123-t4-2',
      text: '2. My school is near Pink Street.',
      isTrue: false,
      explanation: 'Sai! Ngôi trường nằm NGAY TRÊN phố Pink ("It’s in Pink Street"), không chỉ ở gần.',
    },
    {
      id: 'p123-t4-3',
      text: '3. It takes more than five minutes to go to my school.',
      isTrue: true,
      explanation: 'Đúng! Đi bộ dọc phố White đã mất 5 phút, sau đó còn rẽ trái ở phố Pink đi tiếp tới trường nên tổng thời gian nhiều hơn 5 phút.',
    },
    {
      id: 'p123-t4-4',
      text: '4. My school is big and yellow.',
      isTrue: true,
      explanation: 'Đúng! Chi tiết ghi rõ: "my big, yellow school".',
    },
    {
      id: 'p123-t4-5',
      text: '5. My school is next to a green park.',
      isTrue: true,
      explanation: 'Đúng! Trường nằm giữa công viên xanh và bảo tàng ("between a green park and a museum") nên cũng nằm ngay cạnh công viên xanh.',
    },
  ],
};

export const U16_TASK5_CONDAO_BLANKS: ParagraphBlank[] = [
  { id: 'p123-t5-1', index: 1, answers: ['fly'], hint: 'Động từ bay từ Hà Nội vào TP.HCM (3 chữ cái: f _ _)', iconKey: 'pilot' },
  { id: 'p123-t5-2', index: 2, answers: ['coach'], hint: 'Xe khách đi Vũng Tàu (5 chữ cái: c _ _ _ _)', iconKey: 'coach' },
  { id: 'p123-t5-3', index: 3, answers: ['boat', 'ship'], hint: 'Đi thuyền/tàu ra đảo Côn Đảo (4 chữ cái: b _ _ _)', iconKey: 'ship' },
  { id: 'p123-t5-4', index: 4, answers: ['plane'], hint: 'Đi bằng máy bay: go by _____ (5 chữ cái)', iconKey: 'plane' },
  { id: 'p123-t5-5', index: 5, answers: ['faster'], hint: 'Nhanh hơn (so sánh hơn của fast: f _ _ _ _ _)', iconKey: 'fastspeed' },
];

export const U16_TASK6_PICTURES: FillItem[] = [
  {
    id: 'p124-t6-1',
    before: '1. The bookshop is',
    after: 'the museum and the cinema.',
    hint: 'Ở giữa hai nơi (7 chữ cái: b _ _ _ _ _ _)',
    iconKey: 'museum',
    answers: ['between'],
    explanation: 'Có 2 địa điểm nối với nhau bằng "and" → dùng giới từ between.',
  },
  {
    id: 'p124-t6-2',
    before: '2. There is a',
    after: 'stop next to the zoo.',
    hint: 'Trạm xe buýt: ___ stop (3 chữ cái)',
    iconKey: 'busstop',
    answers: ['bus'],
    explanation: 'Cụm danh từ trạm xe buýt là "bus stop".',
  },
  {
    id: 'p124-t6-3',
    before: '3. I go to the',
    after: 'office to send a postcard.',
    hint: 'Bưu điện: ____ office (4 chữ cái)',
    iconKey: 'postoffice',
    answers: ['post'],
    explanation: 'Nơi gửi bưu thiếp (postcard) là bưu điện: "post office".',
  },
  {
    id: 'p124-t6-4',
    before: '4. There is a theatre',
    after: 'the bakery.',
    hint: 'Đối diện qua đường (8 chữ cái: o _ _ _ _ _ _ _)',
    iconKey: 'bakery',
    answers: ['opposite'],
    explanation: 'Hai tòa nhà quay mặt vào nhau qua con đường → opposite (đối diện).',
  },
  {
    id: 'p124-t6-5',
    before: '5. The cinema is at the',
    after: 'of the street.',
    hint: 'Góc đường (6 chữ cái: c _ _ _ _ _)',
    iconKey: 'mapcorner',
    answers: ['corner', 'end'],
    explanation: 'Đáp án sách: corner ("at the corner of the street" = ở góc phố; cũng chấp nhận end nếu xét "ở cuối phố").',
  },
];

export const U16_TASK7_P124: OrderSentenceItem[] = [
  {
    id: 'p124-t7-1',
    words: ['me,', 'Excuse', 'get', 'how', 'can', 'I', 'to', 'the museum?'],
    answer: 'Excuse me, how can I get to the museum?',
    meaning: 'Xin lỗi, cho mình hỏi làm thế nào để đến bảo tàng?',
    explanation: 'Mở đầu lịch sự "Excuse me," + mẫu hỏi đường "how can I get to + địa điểm?".',
  },
];

export const U16_TASK7_P125: OrderSentenceItem[] = [
  {
    id: 'p125-t7-2',
    words: ['is', 'The pharmacy', 'at', 'of', 'the end', 'the street.'],
    answer: 'The pharmacy is at the end of the street.',
    meaning: 'Hiệu thuốc nằm ở cuối con phố.',
    explanation: 'Chủ ngữ The pharmacy + is + cụm vị trí "at the end of the street".',
  },
  {
    id: 'p125-t7-3',
    words: ['take', 'You', 'a coach', 'can', 'from', 'Ha Noi', 'to', 'Sa Pa.'],
    answer: 'You can take a coach from Ha Noi to Sa Pa.',
    meaning: 'Bạn có thể đi xe khách từ Hà Nội đến Sa Pa.',
    explanation: 'You can + take a coach + from A to B.',
  },
  {
    id: 'p125-t7-4',
    words: ['the corner', 'The theatre', 'on', 'is', 'of', 'the street.'],
    answer: 'The theatre is on the corner of the street.',
    meaning: 'Nhà hát nằm ở góc con phố.',
    explanation: 'The theatre + is + on the corner of the street.',
  },
  {
    id: 'p125-t7-5',
    words: ['fifteen', 'It', 'takes', 'minutes', 'to', 'walk', 'to', 'my school.'],
    answer: 'It takes fifteen minutes to walk to my school.',
    meaning: 'Mất 15 phút để đi bộ đến trường mình.',
    explanation: 'Mẫu câu chỉ thời gian di chuyển: It takes + thời gian + to + V.',
  },
];

export const U16_TASK8_WRITING: GuidedWritingPrompt[] = [
  {
    id: 'p125-w1',
    question: '1. How far is it from your school to your house? (Trường cách nhà em bao xa?)',
    starter: 'My school is',
    sample: 'about two kilometres from my house.',
    placeholder: 'about 500 metres / two kilometres from my house...',
  },
  {
    id: 'p125-w2',
    question: '2. Where is your school (include the name of the street)? (Trường em ở phố nào?)',
    starter: 'It is',
    sample: 'in Nguyen Trai Street, opposite the bookshop.',
    placeholder: 'in Le Loi Street, near the park...',
  },
  {
    id: 'p125-w3',
    question: '3. Are there any buildings next to your school? (Có tòa nhà nào cạnh trường không?)',
    starter: 'Yes, there is',
    sample: 'a big library and a supermarket next to my school.',
    placeholder: 'a post office and a pharmacy next to my school...',
  },
  {
    id: 'p125-w4',
    question: '4. How do you often get to your school? (Em thường đi học bằng gì?)',
    starter: 'I often',
    sample: 'walk or ride my bike to school.',
    placeholder: 'go to school by bike / walk to school...',
  },
  {
    id: 'p125-w5',
    question: '5. How long does it take you to go to school? (Em đi hết bao lâu?)',
    starter: 'It takes',
    sample: 'about fifteen minutes to walk to my school.',
    placeholder: 'about ten minutes to get to school...',
  },
];
