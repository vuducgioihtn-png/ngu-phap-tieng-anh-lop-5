import type { QuizChoiceItem } from './pages1to20Data';
import type { AnswerKeyUnitBlock, PageMeta167 } from './pages147to167Data';

export interface PageMemoryRecap {
  id: string;
  unitTag: string;
  title: string;
  formula: string;
  tipVi: string;
  exampleEn: string;
  exampleVi: string;
  accent: 'pink' | 'amber' | 'sky' | 'emerald' | 'indigo' | 'teal';
}

export interface Semester2CheatCard {
  unit: number;
  title: string;
  titleVi: string;
  jumpPage: number;
  formula: string;
  keyWords: string;
  exampleEn: string;
  exampleVi: string;
  goldenTip: string;
  accent: 'pink' | 'amber' | 'sky' | 'emerald' | 'indigo' | 'teal';
}

/* =========================================================
   INDEX TRANG 168 -> TRANG 177 (10 TRANG CUỐI CÙNG CỦA SÁCH)
   ========================================================= */
export const PAGES_168_TO_177_INDEX: PageMeta167[] = [
  {
    page: 168,
    unit: 99,
    title: 'Đáp án Unit 11 (Task 5–9)',
    subtitle: 'Từ vựng sức khỏe, sửa 18 lỗi sai kinh điển & bài tập bé Sam',
    sectionTag: 'Đáp án chuẩn · HK2',
  },
  {
    page: 169,
    unit: 99,
    title: 'Đáp án Unit 11 (hết) & Unit 12 (Task 1–7)',
    subtitle: 'Lời khuyên sức khỏe & An toàn trong nhà (Don’t + V / may + V)',
    sectionTag: 'Đáp án chuẩn · HK2',
  },
  {
    page: 170,
    unit: 99,
    title: 'Đáp án Unit 12 (hết) & Unit 13 (Task 1–5)',
    subtitle: 'Câu mệnh lệnh an toàn & Hoạt động thời gian rảnh (go + V-ing)',
    sectionTag: 'Đáp án chuẩn · HK2',
  },
  {
    page: 171,
    unit: 99,
    title: 'Đáp án Unit 13 (hết) & Unit 14 (Task 1–7)',
    subtitle: 'Kỳ nghỉ hè & 10 động từ quá khứ truyện cổ tích (Cây khế, Thỏ & Rùa)',
    sectionTag: 'Đáp án chuẩn · HK2',
  },
  {
    page: 172,
    unit: 99,
    title: 'Đáp án Unit 14 (hết) & trọn bộ Unit 15',
    subtitle: 'Nghề nghiệp mơ ước (would like to be a/an...) & trường học của Lê',
    sectionTag: 'Đáp án chuẩn · HK2',
  },
  {
    page: 173,
    unit: 99,
    title: 'Đáp án trọn bộ Unit 16 & Unit 17 (Task 1–6)',
    subtitle: 'Chỉ đường, Đảo Côn Đảo & Đồ ăn – Đồ uống (17 câu trắc nghiệm)',
    sectionTag: 'Đáp án chuẩn · HK2',
  },
  {
    page: 174,
    unit: 99,
    title: 'Đáp án Unit 17 (hết) & Unit 18 (Task 1–9)',
    subtitle: 'Đơn vị đựng đồ ăn (carton/bowl/bar) & Dự báo thời tiết (will be)',
    sectionTag: 'Đáp án chuẩn · HK2',
  },
  {
    page: 175,
    unit: 99,
    title: 'Đáp án Unit 18 (hết), trọn bộ Unit 19 & Unit 20 (đầu)',
    subtitle: '4 mùa, Danh thắng Việt Nam (Phú Quốc, Bái Đính, TP.HCM) & mở đầu Unit 20',
    sectionTag: 'Đáp án chuẩn · HK2',
  },
  {
    page: 176,
    unit: 99,
    title: 'Đáp án Unit 20 (Task 2–10)',
    subtitle: '12 tính từ So sánh hơn, Ngữ điệu "or" (↘ ↗ ↘) & 5 thành phố thế giới',
    sectionTag: 'Đáp án chuẩn · HK2',
  },
  {
    page: 177,
    unit: 99,
    title: 'Đáp án Unit 20 (hết) & Tổng ôn Học kỳ 2 (Trang cuối sách)',
    subtitle: 'Trang 177 cuối sách · Bản đồ công thức Unit 11–20 & Thử thách 10 câu',
    sectionTag: 'Tổng kết 100% sách',
  },
];

/* =========================================================
   ĐÁP ÁN CHI TIẾT TRANG 168 -> TRANG 177 (UNIT 11 -> UNIT 20)
   ========================================================= */
export const ANSWER_KEY_PAGES_168_177: Record<number, AnswerKeyUnitBlock[]> = {
  168: [
    {
      id: 'ak-u11-p168',
      unitNumber: 11,
      unitTitle: 'UNIT 11: What’s the matter with you? (tiếp theo · Task 5–9)',
      pageRangeNote: 'Bài tập gốc Trang 83 – 86',
      jumpPage: 83,
      accent: 'pink',
      tasks: [
        {
          taskLabel: 'Task 5 (tiếp · 15 từ còn lại: 6–10, 16–20, 26–30)',
          summaryType: 'chips',
          items: [
            { num: '6', text: 'heavy', speak: 'heavy' },
            { num: '7', text: 'carry', speak: 'carry' },
            { num: '8', text: 'cold', speak: 'cold' },
            { num: '9', text: 'advice', speak: 'advice' },
            { num: '10', text: 'scratch', speak: 'scratch' },
            { num: '16', text: 'accident', speak: 'accident' },
            { num: '17', text: 'corner', speak: 'corner' },
            { num: '18', text: 'ear', speak: 'ear' },
            { num: '19', text: 'start', speak: 'start' },
            { num: '20', text: 'both', speak: 'both' },
            { num: '26', text: 'safe', speak: 'safe' },
            { num: '27', text: 'hear', speak: 'hear' },
            { num: '28', text: 'get', speak: 'get' },
            { num: '29', text: 'necessary', speak: 'necessary' },
            { num: '30', text: 'knee', speak: 'knee' },
          ],
          note: '15 từ đầu (1–5, 11–15, 21–25) nằm ở cuối Trang 167. Bấm vào biểu tượng loa để luyện phát âm từng từ!',
        },
        {
          taskLabel: 'Task 6 (Tìm và sửa 18 lỗi sai ngữ pháp kinh điển)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'to → with' },
            { num: '2', text: "should → shouldn't" },
            { num: '3', text: "don't → doesn't / does not" },
            { num: '4', text: 'a → an' },
            { num: '5', text: 'has → had' },
            { num: '6', text: 'feels → feel' },
            { num: '7', text: "shouldn't → should" },
            { num: '8', text: 'eated → ate' },
            { num: '9', text: 'speaks → speak' },
            { num: '10', text: 'are → is' },
            { num: '11', text: "not → didn't / did not" },
            { num: '12', text: 'an → a' },
            { num: '13', text: 'bad → good' },
            { num: '14', text: 'came → come' },
            { num: '15', text: 'on → at', highlight: true },
            { num: '16', text: 'throatache → sore throat', highlight: true },
            { num: '17', text: "doesn't → don't" },
            { num: '18', text: "did go → went / didn't go" },
          ],
          note: 'Sách in gốc ở câu 15 bị lỗi gõ thừa chữ ("on → h at"), đáp án đúng là "on → at" (at home / at the moment). Câu 16 nhớ không có từ "throatache", phải dùng "sore throat"!',
        },
        {
          taskLabel: 'Task 7 (Nhìn tranh điền từ — Bé Sam bị sốt)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'football', speak: 'football' },
            { num: '2', text: 'fever', speak: 'fever' },
            { num: '3', text: 'hospital', speak: 'hospital' },
            { num: '4', text: 'should', speak: 'should' },
            { num: '5', text: 'fruits', speak: 'fruits' },
            { num: '6', text: 'drink', speak: 'drink' },
          ],
          note: 'Lưu ý: đề bài ở Trang 85 bị đánh trùng số (4) hai lần nên phần đáp án có đủ 6 vị trí điền từ.',
        },
        {
          taskLabel: 'Task 8 (Nhìn tranh viết từ về bệnh & lời khuyên)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'earache', speak: 'earache' },
            { num: '2', text: 'sore throat', speak: 'sore throat' },
            { num: '3', text: 'cold water', speak: 'cold water' },
            { num: '4', text: 'heavy things', speak: 'heavy things' },
            { num: '5', text: 'watch', speak: 'watch' },
          ],
        },
        {
          taskLabel: 'Task 9 (Sắp xếp từ thành câu — Câu 1–3)',
          summaryType: 'sentences',
          items: [
            {
              num: '1',
              text: "What's the matter with you?",
              speak: "What's the matter with you?",
            },
            {
              num: '2',
              text: 'I have a sore throat.',
              speak: 'I have a sore throat.',
            },
            {
              num: '3',
              text: 'You should see the doctor.',
              speak: 'You should see the doctor.',
            },
          ],
          note: 'Sách in gốc bị gõ nhầm tiêu đề "Task 2.", thực chất đây là Task 9 của Unit 11 (Trang 86). Các câu 4–10 xem tiếp ở Trang 169.',
        },
      ],
    },
  ],

  169: [
    {
      id: 'ak-u11-p169',
      unitNumber: 11,
      unitTitle: 'UNIT 11: What’s the matter with you? (Hoàn thành · Task 9–11)',
      pageRangeNote: 'Bài tập gốc Trang 86 – 87',
      jumpPage: 86,
      accent: 'pink',
      tasks: [
        {
          taskLabel: 'Task 9 (tiếp · Sắp xếp từ thành câu — Câu 4–10)',
          summaryType: 'sentences',
          items: [
            {
              num: '4',
              text: "You shouldn't carry heavy things.",
              speak: "You shouldn't carry heavy things.",
            },
            {
              num: '5',
              text: 'I have a bad cough.',
              speak: 'I have a bad cough.',
            },
            {
              num: '6',
              text: "You shouldn't eat too many sweets.",
              speak: "You shouldn't eat too many sweets.",
              highlight: true,
            },
            {
              num: '7',
              text: 'Playing sports is good for health.',
              speak: 'Playing sports is good for health.',
            },
            {
              num: '8',
              text: 'He did not eat anything last night, but he had a stomach ache.',
              speak: 'He did not eat anything last night, but he had a stomach ache.',
            },
            {
              num: '9',
              text: 'You should do morning exercise every day.',
              speak: 'You should do morning exercise every day.',
            },
            {
              num: '10',
              text: 'Does he have a toothache?',
              speak: 'Does he have a toothache?',
            },
          ],
          note: 'Mẹo ngữ pháp câu 6: Sách in gốc viết "too much sweets", nhưng "sweets" (kẹo) là danh từ đếm được số nhiều nên chuẩn xác nhất là "too many sweets"!',
        },
        {
          taskLabel: 'Task 10 (Đọc hiểu chọn A, B, C, D)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'A' },
            { num: '2', text: 'C' },
            { num: '3', text: 'C' },
            { num: '4', text: 'D' },
            { num: '5', text: 'A' },
          ],
        },
        {
          taskLabel: 'Task 11 (Viết đoạn văn về sức khỏe)',
          summaryType: 'writing',
          items: [
            {
              text: 'Câu trả lời mở của học sinh (đúng ngữ pháp với should / shouldn’t + động từ nguyên mẫu).',
            },
          ],
        },
      ],
    },
    {
      id: 'ak-u12-p169',
      unitNumber: 12,
      unitTitle: 'UNIT 12: Don’t ride your bike too fast! (Task 1–7)',
      pageRangeNote: 'Bài tập gốc Trang 92 – 94',
      jumpPage: 92,
      accent: 'amber',
      tasks: [
        {
          taskLabel: 'Task 1 (Nối đồ vật – hành động nguy hiểm)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'd' },
            { num: '2', text: 'e' },
            { num: '3', text: 'g (b)', highlight: true },
            { num: '4', text: 'a' },
            { num: '5', text: 'c' },
          ],
          note: 'Ở Trang 92 bản in gốc ghi nhầm nhãn đáp án của "A knife" là g thay vì b.',
        },
        {
          taskLabel: 'Task 2 (12 từ vựng về an toàn trong nhà)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'fast', speak: 'fast' },
            { num: '2', text: 'touch', speak: 'touch' },
            { num: '3', text: 'climb', speak: 'climb' },
            { num: '4', text: 'cabbage', speak: 'cabbage' },
            { num: '5', text: 'bored', speak: 'bored' },
            { num: '6', text: 'knife', speak: 'knife' },
            { num: '7', text: 'matches', speak: 'matches' },
            { num: '8', text: 'stair', speak: 'stair' },
            { num: '9', text: 'stove', speak: 'stove' },
            { num: '10', text: 'break', speak: 'break' },
            { num: '11', text: 'dangerous', speak: 'dangerous' },
            { num: '12', text: 'burn', speak: 'burn' },
          ],
        },
        {
          taskLabel: 'Task 3 (Đọc định nghĩa viết cụm từ tai nạn)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'cut yourself', speak: 'cut yourself' },
            { num: '2', text: 'fall off', speak: 'fall off' },
            { num: '3', text: 'get a burn', speak: 'get a burn' },
            { num: '4', text: 'run down', speak: 'run down' },
            { num: '5', text: 'roll off', speak: 'roll off' },
          ],
        },
        {
          taskLabel: 'Task 4 (Đọc hiểu Đúng/Sai — Mike & que diêm)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'T' },
            { num: '2', text: 'F' },
            { num: '3', text: 'T' },
            { num: '4', text: 'F' },
            { num: '5', text: 'F' },
          ],
        },
        {
          taskLabel: 'Task 5 (Trả lời 4 câu hỏi về an toàn cho em nhỏ)',
          summaryType: 'sentences',
          items: [
            { num: '1', text: 'Falling.', speak: 'Falling.' },
            {
              num: '2',
              text: "Make sure he or she can't open any windows.",
              speak: "Make sure he or she can't open any windows.",
            },
            {
              num: '3',
              text: 'He or she may also fall down the stairs.',
              speak: 'He or she may also fall down the stairs.',
            },
            {
              num: '4',
              text: "Make sure he or she can't roll off the bed or the sofa.",
              speak: "Make sure he or she can't roll off the bed or the sofa.",
            },
          ],
        },
        {
          taskLabel: 'Task 6 (Chia thì động từ trong ngoặc · 8 câu)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'let' },
            { num: '2', text: 'is cooking' },
            { num: '3', text: 'am' },
            { num: '4', text: 'climbed – fell – broke', highlight: true },
            { num: '5', text: 'is running' },
            { num: '6', text: 'toothache – will go' },
            { num: '7', text: 'washes' },
            { num: '8', text: 'had' },
          ],
        },
        {
          taskLabel: 'Task 7 (Điền từ vào đoạn văn An toàn kỳ nghỉ hè)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'fall' },
            { num: '2', text: 'climb' },
            { num: '3', text: 'break' },
            { num: '4', text: 'knives' },
            { num: '5', text: 'burn' },
          ],
        },
      ],
    },
  ],

  170: [
    {
      id: 'ak-u12-p170',
      unitNumber: 12,
      unitTitle: 'UNIT 12: Don’t ride your bike too fast! (Hoàn thành · Task 8–11)',
      pageRangeNote: 'Bài tập gốc Trang 95 – 97',
      jumpPage: 95,
      accent: 'amber',
      tasks: [
        {
          taskLabel: 'Task 8 (Nhìn tranh viết cụm từ cảnh báo)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'climb', speak: 'climb' },
            { num: '2', text: 'matches', speak: 'matches' },
            { num: '3', text: 'roll', speak: 'roll' },
            { num: '4', text: 'cut', speak: 'cut' },
            { num: '5', text: 'get a burn', speak: 'get a burn' },
          ],
        },
        {
          taskLabel: 'Task 9 (Sắp xếp từ thành 8 câu đúng)',
          summaryType: 'sentences',
          items: [
            {
              num: '1',
              text: "Why shouldn't I ride too fast?",
              speak: "Why shouldn't I ride too fast?",
            },
            {
              num: '2',
              text: 'What are you doing with the stove?',
              speak: 'What are you doing with the stove?',
            },
            {
              num: '3',
              text: "OK, I won't do that again.",
              speak: "OK, I won't do that again.",
            },
            {
              num: '4',
              text: "Why shouldn't I touch the knife?",
              speak: "Why shouldn't I touch the knife?",
            },
            {
              num: '5',
              text: "Don't play with the cat.",
              speak: "Don't play with the cat.",
            },
            {
              num: '6',
              text: 'He may fall off his bike and break his arm.',
              speak: 'He may fall off his bike and break his arm.',
            },
            {
              num: '7',
              text: 'What are you doing with the matches?',
              speak: 'What are you doing with the matches?',
              highlight: true,
            },
            {
              num: '8',
              text: 'Falling is a common type of accident for young children at home.',
              speak: 'Falling is a common type of accident for young children at home.',
              highlight: true,
            },
          ],
          note: 'Đã bổ sung dấu hỏi (?) cho câu 7 và mạo từ "a" trước "common type" ở câu 8 so với bản in gốc bị sót.',
        },
        {
          taskLabel: 'Task 10 (Viết câu mệnh lệnh khẳng định / phủ định)',
          summaryType: 'sentences',
          items: [
            {
              num: '1',
              text: "Don't ride your bike too fast!",
              speak: "Don't ride your bike too fast!",
            },
            {
              num: '2',
              text: "Don't talk loudly!",
              speak: "Don't talk loudly!",
            },
            {
              num: '3',
              text: "Don't play with the knife!",
              speak: "Don't play with the knife!",
            },
            {
              num: '4',
              text: 'Read magazines!',
              speak: 'Read magazines!',
            },
            {
              num: '5',
              text: "Don't play with the matches!",
              speak: "Don't play with the matches!",
            },
          ],
        },
        {
          taskLabel: 'Task 11 (Viết quy tắc an toàn ở nhà)',
          summaryType: 'writing',
          items: [{ text: 'Câu trả lời mở của học sinh (sử dụng Don’t + V và should / shouldn’t).' }],
        },
      ],
    },
    {
      id: 'ak-u13-p170',
      unitNumber: 13,
      unitTitle: 'UNIT 13: What do you do in your free time? (Task 1–5)',
      pageRangeNote: 'Bài tập gốc Trang 99 – 102',
      jumpPage: 99,
      accent: 'sky',
      tasks: [
        {
          taskLabel: 'Task 1 (Tìm từ khác loại)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'A' },
            { num: '2', text: 'B' },
            { num: '3', text: 'D' },
            { num: '4', text: 'A' },
            { num: '5', text: 'C' },
          ],
        },
        {
          taskLabel: 'Task 2 (Xóa chữ cái thừa để được từ đúng)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'SURF THE INTERNET', speak: 'surf the Internet' },
            { num: '2', text: 'CLEAN', speak: 'clean' },
            { num: '3', text: 'KARATE', speak: 'karate' },
            { num: '4', text: 'WATCH', speak: 'watch', highlight: true },
            { num: '5', text: 'FREE TIME', speak: 'free time', highlight: true },
          ],
          note: 'Ở đề Trang 100, sách đặt FREE TIMES ở câu 4 và WATECH ở câu 6 (đổi vị trí với nhau), em đối chiếu đúng từ là đạt yêu cầu!',
        },
        {
          taskLabel: 'Task 3 (Đọc định nghĩa viết tên hoạt động)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'karate', speak: 'karate' },
            { num: '2', text: 'camping', speak: 'camping' },
            { num: '3', text: 'fishing', speak: 'fishing' },
            { num: '4', text: 'shopping', speak: 'shopping' },
            { num: '5', text: 'cinema', speak: 'cinema' },
          ],
        },
        {
          taskLabel: 'Task 4 (Đọc hiểu Đúng/Sai — Đi câu cá cùng Bố)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'T' },
            { num: '2', text: 'F' },
            { num: '3', text: 'T' },
            { num: '4', text: 'F' },
            { num: '5', text: 'T' },
          ],
        },
        {
          taskLabel: 'Task 5 (Nhìn tranh điền từ sở thích)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'camping', speak: 'camping' },
            { num: '2', text: 'Internet', speak: 'Internet' },
            { num: '3', text: 'skating', speak: 'skating' },
            { num: '4', text: 'karate', speak: 'karate' },
            { num: '5', text: 'bike', speak: 'bike' },
          ],
        },
      ],
    },
  ],

  171: [
    {
      id: 'ak-u13-p171',
      unitNumber: 13,
      unitTitle: 'UNIT 13: What do you do in your free time? (Hoàn thành · Task 6–8)',
      pageRangeNote: 'Bài tập gốc Trang 102 – 103',
      jumpPage: 102,
      accent: 'sky',
      tasks: [
        {
          taskLabel: 'Task 6 (Điền từ đoạn văn Kỳ nghỉ hè)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'swimming', speak: 'swimming' },
            { num: '2', text: 'skate', speak: 'skate' },
            { num: '3', text: 'parents', speak: 'parents' },
            { num: '4', text: 'fishing', speak: 'fishing' },
            { num: '5', text: 'food', speak: 'food' },
          ],
        },
        {
          taskLabel: 'Task 7 (Sắp xếp từ thành 5 câu hoàn chỉnh)',
          summaryType: 'sentences',
          items: [
            {
              num: '1',
              text: 'What do you often do in your free time?',
              speak: 'What do you often do in your free time?',
            },
            {
              num: '2',
              text: 'My sister goes swimming twice a week.',
              speak: 'My sister goes swimming twice a week.',
            },
            {
              num: '3',
              text: 'I often do karate in my free time.',
              speak: 'I often do karate in my free time.',
            },
            {
              num: '4',
              text: 'How often do you go to the English club?',
              speak: 'How often do you go to the English club?',
            },
            {
              num: '5',
              text: "Fishing is one of my brother's hobbies. (hoặc: One of my brother's hobbies is fishing.)",
              speak: "Fishing is one of my brother's hobbies.",
            },
          ],
        },
        {
          taskLabel: 'Task 8 (Viết về hoạt động lúc rảnh rỗi)',
          summaryType: 'writing',
          items: [{ text: 'Câu trả lời mở của học sinh (đúng cấu trúc thì Hiện tại đơn).' }],
        },
      ],
    },
    {
      id: 'ak-u14-p171',
      unitNumber: 14,
      unitTitle: 'UNIT 14: What happened in the story? (Task 1–7)',
      pageRangeNote: 'Bài tập gốc Trang 107 – 109',
      jumpPage: 107,
      accent: 'emerald',
      tasks: [
        {
          taskLabel: 'Task 1 (Tìm từ khác loại)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'A' },
            { num: '2', text: 'B' },
            { num: '3', text: 'D' },
            { num: '4', text: 'A' },
            { num: '5', text: 'C' },
          ],
        },
        {
          taskLabel: 'Task 2 (Đổi 10 động từ sang Quá khứ đơn V2 / V-ed)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'visit → visited', speak: 'visited' },
            { num: '2', text: 'work → worked', speak: 'worked' },
            { num: '3', text: 'find → found', speak: 'found', highlight: true },
            { num: '4', text: 'think → thought', speak: 'thought', highlight: true },
            { num: '5', text: 'watch → watched', speak: 'watched' },
            { num: '6', text: 'read → read (/red/)', speak: 'read', highlight: true },
            { num: '7', text: 'hear → heard', speak: 'heard', highlight: true },
            { num: '8', text: 'stand → stood', speak: 'stood', highlight: true },
            { num: '9', text: 'exchange → exchanged', speak: 'exchanged' },
            { num: '10', text: 'play → played', speak: 'played' },
          ],
          note: 'Các thẻ tô vàng là 5 động từ BẤT QUY TẮC siêu hay ra thi! Đặc biệt "read" viết giống nhau nhưng quá khứ đọc là /red/ (như màu đỏ).',
        },
        {
          taskLabel: 'Task 3 (Trắc nghiệm chọn đáp án đúng)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'A' },
            { num: '2', text: 'C' },
            { num: '3', text: 'B' },
            { num: '4', text: 'D' },
            { num: '5', text: 'C' },
          ],
        },
        {
          taskLabel: 'Task 4 (Đọc hiểu Đúng/Sai — Truyện Cây Khế)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'T' },
            { num: '2', text: 'F' },
            { num: '3', text: 'T' },
            { num: '4', text: 'F' },
            { num: '5', text: 'T' },
          ],
        },
        {
          taskLabel: 'Task 5 (Điền từ — Truyện Thỏ và Rùa)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'hare', speak: 'hare' },
            { num: '2', text: 'asleep', speak: 'asleep' },
            { num: '3', text: 'line', speak: 'line' },
            { num: '4', text: 'animals', speak: 'animals' },
            { num: '5', text: 'winner', speak: 'winner' },
          ],
        },
        {
          taskLabel: 'Task 6 (Nhìn tranh viết tên nhân vật cổ tích)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'fox', speak: 'fox' },
            { num: '2', text: 'crow', speak: 'crow' },
            { num: '3', text: 'brother', speak: 'brother' },
            { num: '4', text: 'princess', speak: 'princess' },
            { num: '5', text: 'tortoise', speak: 'tortoise' },
          ],
        },
        {
          taskLabel: 'Task 7 (Sắp xếp từ thành 5 câu hỏi về truyện)',
          summaryType: 'sentences',
          items: [
            {
              num: '1',
              text: 'What do you think of Snow White?',
              speak: 'What do you think of Snow White?',
            },
            {
              num: '2',
              text: 'Do you like folk tales?',
              speak: 'Do you like folk tales?',
            },
            {
              num: '3',
              text: 'What kinds of stories do you like?',
              speak: 'What kinds of stories do you like?',
            },
            {
              num: '4',
              text: 'How did the story end?',
              speak: 'How did the story end?',
            },
            {
              num: '5',
              text: 'Why do you like the story?',
              speak: 'Why do you like the story?',
            },
          ],
        },
      ],
    },
  ],

  172: [
    {
      id: 'ak-u14-p172',
      unitNumber: 14,
      unitTitle: 'UNIT 14: What happened in the story? (Hoàn thành · Task 8–9)',
      pageRangeNote: 'Bài tập gốc Trang 110',
      jumpPage: 110,
      accent: 'emerald',
      tasks: [
        {
          taskLabel: 'Task 8 (Điền 10 từ từ kho từ vựng cổ tích)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'seed', speak: 'seed' },
            { num: '2', text: 'interesting', speak: 'interesting' },
            { num: '3', text: 'prince', speak: 'prince' },
            { num: '4', text: 'greedy', speak: 'greedy' },
            { num: '5', text: 'character', speak: 'character' },
            { num: '6', text: 'ordered', speak: 'ordered' },
            { num: '7', text: 'exchanged', speak: 'exchanged', highlight: true },
            { num: '8', text: 'surprised', speak: 'surprised' },
            { num: '9', text: 'kind', speak: 'kind' },
            { num: '10', text: 'got married', speak: 'got married', highlight: true },
          ],
          note: 'Đã tự động sửa 2 lỗi bản in gốc: câu 7 in thiếu chữ n ("exchaged" → "exchanged"), câu 10 kể chuyện cổ tích ở quá khứ nên dùng "got married" thay vì "get married"!',
        },
        {
          taskLabel: 'Task 9 (Viết về câu chuyện cổ tích em thích)',
          summaryType: 'writing',
          items: [{ text: 'Câu trả lời mở của học sinh (kể lại sự kiện bằng thì Quá khứ đơn).' }],
        },
      ],
    },
    {
      id: 'ak-u15-p172',
      unitNumber: 15,
      unitTitle: 'UNIT 15: What would you like to be in the future? (Trọn bộ Task 1–9)',
      pageRangeNote: 'Bài tập gốc Trang 113 – 117',
      jumpPage: 113,
      accent: 'sky',
      tasks: [
        {
          taskLabel: 'Task 1 (Tìm từ khác loại)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'C' },
            { num: '2', text: 'A' },
            { num: '3', text: 'B' },
            { num: '4', text: 'D' },
            { num: '5', text: 'A' },
          ],
        },
        {
          taskLabel: 'Task 2 (Trắc nghiệm 6 câu)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'C' },
            { num: '2', text: 'A' },
            { num: '3', text: 'B' },
            { num: '4', text: 'C' },
            { num: '5', text: 'B' },
            { num: '6', text: 'A' },
          ],
        },
        {
          taskLabel: 'Task 3 (Đọc định nghĩa viết tên nghề nghiệp)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'teacher', speak: 'teacher' },
            { num: '2', text: 'architect', speak: 'architect' },
            { num: '3', text: 'farmer', speak: 'farmer' },
            { num: '4', text: 'dancers', speak: 'dancers' },
            { num: '5', text: 'policeman', speak: 'policeman' },
          ],
        },
        {
          taskLabel: 'Task 4 (Đọc hiểu Đúng/Sai — Bức thư của Jim gửi ông)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'T' },
            { num: '2', text: 'F' },
            { num: '3', text: 'F' },
            { num: '4', text: 'T' },
            { num: '5', text: 'T' },
          ],
        },
        {
          taskLabel: 'Task 5 (Viết lại 5 câu đúng ngữ pháp)',
          summaryType: 'sentences',
          items: [
            {
              num: '1',
              text: 'What would you like to be in the future?',
              speak: 'What would you like to be in the future?',
            },
            {
              num: '2',
              text: 'Why would you like to be a teacher? (hoặc: Why do you want to be a teacher?)',
              speak: 'Why would you like to be a teacher?',
            },
            {
              num: '3',
              text: "I'd like to be an astronaut.",
              speak: "I'd like to be an astronaut.",
            },
            {
              num: '4',
              text: 'Because I like travelling in space.',
              speak: 'Because I like travelling in space.',
            },
            {
              num: '5',
              text: 'Because he likes teaching young children.',
              speak: 'Because he likes teaching young children.',
            },
          ],
        },
        {
          taskLabel: 'Task 6 (Điền từ — Ngôi trường mơ ước của Lê)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'school' },
            { num: '2', text: 'classrooms' },
            { num: '3', text: 'library' },
            { num: '4', text: 'playground' },
            { num: '5', text: 'pool' },
          ],
        },
        {
          taskLabel: 'Task 7 (Nhìn tranh viết tên 5 nghề nghiệp)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'pilot', speak: 'pilot' },
            { num: '2', text: 'player', speak: 'player' },
            { num: '3', text: 'architect', speak: 'architect' },
            { num: '4', text: 'nurse', speak: 'nurse' },
            { num: '5', text: 'policeman', speak: 'policeman' },
          ],
        },
        {
          taskLabel: 'Task 8 (Sắp xếp từ thành 5 câu đúng)',
          summaryType: 'sentences',
          items: [
            {
              num: '1',
              text: 'What would you like to do when you grow up?',
              speak: 'What would you like to do when you grow up?',
            },
            {
              num: '2',
              text: 'Where would you like to work?',
              speak: 'Where would you like to work?',
            },
            {
              num: '3',
              text: 'What is your dream job, Susan?',
              speak: 'What is your dream job, Susan?',
            },
            {
              num: '4',
              text: 'She would like to look after old people.',
              speak: 'She would like to look after old people.',
            },
            {
              num: '5',
              text: 'My dream job is teaching Maths.',
              speak: 'My dream job is teaching Maths.',
            },
          ],
        },
        {
          taskLabel: 'Task 9 (Viết về nghề nghiệp mơ ước của em)',
          summaryType: 'writing',
          items: [{ text: 'Câu trả lời mở của học sinh (dùng I’d like to be a/an... because...).' }],
        },
      ],
    },
  ],

  173: [
    {
      id: 'ak-u16-p173',
      unitNumber: 16,
      unitTitle: 'UNIT 16: Where is the post office? (Trọn bộ Task 1–8)',
      pageRangeNote: 'Bài tập gốc Trang 121 – 125',
      jumpPage: 121,
      accent: 'indigo',
      tasks: [
        {
          taskLabel: 'Task 1 (Tìm từ khác loại / phát âm)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'd' },
            { num: '2', text: 'd' },
            { num: '3', text: 'c' },
            { num: '4', text: 'a' },
            { num: '5', text: 'c' },
          ],
        },
        {
          taskLabel: 'Task 2 (Trắc nghiệm 8 câu hỏi đường)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'A' },
            { num: '2', text: 'D' },
            { num: '3', text: 'A' },
            { num: '4', text: 'C' },
            { num: '5', text: 'C' },
            { num: '6', text: 'B' },
            { num: '7', text: 'A' },
            { num: '8', text: 'A' },
          ],
        },
        {
          taskLabel: 'Task 3 (Nối câu hỏi – câu chỉ đường · Câu 1.d làm mẫu)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'd (mẫu)' },
            { num: '2', text: 'c' },
            { num: '3', text: 'b' },
            { num: '4', text: 'f' },
            { num: '5', text: 'a' },
            { num: '6', text: 'e' },
          ],
        },
        {
          taskLabel: 'Task 4 (Đọc hiểu Đúng/Sai — Đường tới trường)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'F' },
            { num: '2', text: 'F' },
            { num: '3', text: 'T' },
            { num: '4', text: 'T' },
            { num: '5', text: 'T' },
          ],
        },
        {
          taskLabel: 'Task 5 (Điền từ — Hành trình đi Đảo Côn Đảo)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'fly', speak: 'fly' },
            { num: '2', text: 'coach', speak: 'coach' },
            { num: '3', text: 'boat', speak: 'boat' },
            { num: '4', text: 'plane', speak: 'plane' },
            { num: '5', text: 'faster', speak: 'faster' },
          ],
        },
        {
          taskLabel: 'Task 6 (Nhìn tranh điền vị trí địa điểm)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'between', speak: 'between' },
            { num: '2', text: 'bus', speak: 'bus' },
            { num: '3', text: 'post', speak: 'post' },
            { num: '4', text: 'opposite', speak: 'opposite' },
            { num: '5', text: 'corner', speak: 'corner' },
          ],
        },
        {
          taskLabel: 'Task 7 (Sắp xếp từ thành 5 câu chỉ đường)',
          summaryType: 'sentences',
          items: [
            {
              num: '1',
              text: 'Excuse me, how can I get to the museum?',
              speak: 'Excuse me, how can I get to the museum?',
            },
            {
              num: '2',
              text: 'The pharmacy is at the end of the street.',
              speak: 'The pharmacy is at the end of the street.',
            },
            {
              num: '3',
              text: 'You can take a coach from Ha Noi to Sa Pa. (hoặc: from Sa Pa to Ha Noi)',
              speak: 'You can take a coach from Ha Noi to Sa Pa.',
            },
            {
              num: '4',
              text: 'The theatre is on the corner of the street.',
              speak: 'The theatre is on the corner of the street.',
            },
            {
              num: '5',
              text: 'It takes fifteen minutes to walk to my school.',
              speak: 'It takes fifteen minutes to walk to my school.',
            },
          ],
        },
        {
          taskLabel: 'Task 8 (Viết chỉ đường từ nhà đến trường)',
          summaryType: 'writing',
          items: [{ text: 'Câu trả lời mở của học sinh (sử dụng go straight, turn left/right, opposite...).' }],
        },
      ],
    },
    {
      id: 'ak-u17-p173',
      unitNumber: 17,
      unitTitle: 'UNIT 17: What would you like to eat? (Task 1–6)',
      pageRangeNote: 'Bài tập gốc Trang 128 – 131',
      jumpPage: 128,
      accent: 'amber',
      tasks: [
        {
          taskLabel: 'Task 1 (Tìm từ khác loại)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'c' },
            { num: '2', text: 'b' },
            { num: '3', text: 'a' },
            { num: '4', text: 'a' },
            { num: '5', text: 'b' },
          ],
        },
        {
          taskLabel: 'Task 2 (17 câu trắc nghiệm Đồ ăn & Số lượng)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'D' },
            { num: '2', text: 'D' },
            { num: '3', text: 'D' },
            { num: '4', text: 'D' },
            { num: '5', text: 'D' },
            { num: '6', text: 'C' },
            { num: '7', text: 'B' },
            { num: '8', text: 'D (fruit)*', highlight: true },
            { num: '9', text: 'C' },
            { num: '10', text: 'C' },
            { num: '11', text: 'B' },
            { num: '12', text: 'B' },
            { num: '13', text: 'A' },
            { num: '14', text: 'B' },
            { num: '15', text: 'A' },
            { num: '16', text: 'A' },
            { num: '17', text: 'D' },
          ],
          note: '*Lưu ý sửa lỗi sách in ở câu 8: Đáp án sách in ghi nhầm 8.A ("drink"), nhưng dưa hấu (watermelon) là trái cây nên đáp án đúng chắc chắn là 8.D ("fruit")!',
        },
        {
          taskLabel: 'Task 3 (Đọc định nghĩa viết tên món ăn / đồ uống)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'chocolate', speak: 'chocolate' },
            { num: '2', text: 'sandwich', speak: 'sandwich' },
            { num: '3', text: 'milk', speak: 'milk' },
            { num: '4', text: 'lemonade', speak: 'lemonade' },
            { num: '5', text: 'meat', speak: 'meat' },
          ],
        },
        {
          taskLabel: 'Task 4 (Đọc hiểu Đúng/Sai — Thói quen ăn uống của Tom)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'T' },
            { num: '2', text: 'F' },
            { num: '3', text: 'F' },
            { num: '4', text: 'T' },
            { num: '5', text: 'F' },
          ],
        },
        {
          taskLabel: 'Task 5 (Sắp xếp hội thoại Minh & LyLy)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'e' },
            { num: '2', text: 'c' },
            { num: '3', text: 'a' },
            { num: '4', text: 'd' },
            { num: '5', text: 'b' },
          ],
        },
        {
          taskLabel: 'Task 6 (Điền từ — Sở thích ăn đồ ngọt của Lucy)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'biscuits', speak: 'biscuits' },
            { num: '2', text: 'milk', speak: 'milk' },
            { num: '3', text: 'a bar (of)', speak: 'a bar of chocolate' },
            { num: '4', text: 'cake', speak: 'cake' },
            { num: '5', text: 'toothache', speak: 'toothache' },
          ],
        },
      ],
    },
  ],

  174: [
    {
      id: 'ak-u17-p174',
      unitNumber: 17,
      unitTitle: 'UNIT 17: What would you like to eat? (Hoàn thành · Task 7–10)',
      pageRangeNote: 'Bài tập gốc Trang 131 – 133',
      jumpPage: 131,
      accent: 'amber',
      tasks: [
        {
          taskLabel: 'Task 7 (Đọc hiểu bữa ăn của Thu — Chọn a, b, c, d)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'a' },
            { num: '2', text: 'a (hoặc b)' },
            { num: '3', text: 'a' },
            { num: '4', text: 'd' },
            { num: '5', text: 'b' },
          ],
        },
        {
          taskLabel: 'Task 8 (Nhìn tranh điền đơn vị đựng đồ ăn / đồ uống)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'carton', speak: 'a carton of apple juice' },
            { num: '2', text: 'glass', speak: 'a glass of orange juice' },
            { num: '3', text: 'bowl', speak: 'a bowl of rice' },
            { num: '4', text: 'bottles', speak: 'two bottles of water' },
            { num: '5', text: 'bars', speak: 'two bars of chocolate' },
          ],
        },
        {
          taskLabel: 'Task 9 (Sắp xếp từ thành 5 câu hoàn chỉnh)',
          summaryType: 'sentences',
          items: [
            {
              num: '1',
              text: 'What would you like to eat?',
              speak: 'What would you like to eat?',
            },
            {
              num: '2',
              text: "I'd like two bars of chocolate.",
              speak: "I'd like two bars of chocolate.",
            },
            {
              num: '3',
              text: 'How much water do you drink every day?',
              speak: 'How much water do you drink every day?',
            },
            {
              num: '4',
              text: 'I drink three bottles.',
              speak: 'I drink three bottles.',
            },
            {
              num: '5',
              text: 'I eat two bowls of rice every day.',
              speak: 'I eat two bowls of rice every day.',
            },
          ],
        },
        {
          taskLabel: 'Task 10 (Viết về thực đơn ăn uống hằng ngày)',
          summaryType: 'writing',
          items: [{ text: 'Câu trả lời mở của học sinh (dùng a bowl of, a glass of, a bottle of...).' }],
        },
      ],
    },
    {
      id: 'ak-u18-p174',
      unitNumber: 18,
      unitTitle: 'UNIT 18: What will the weather be like tomorrow? (Task 1–9 câu 1)',
      pageRangeNote: 'Bài tập gốc Trang 137 – 142',
      jumpPage: 137,
      accent: 'sky',
      tasks: [
        {
          taskLabel: 'Task 1 (Phát âm khác loại)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'D' },
            { num: '2', text: 'C' },
            { num: '3', text: 'B' },
            { num: '4', text: 'A' },
            { num: '5', text: 'B' },
          ],
        },
        {
          taskLabel: 'Task 2 (Từ vựng khác loại)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'B' },
            { num: '2', text: 'C' },
            { num: '3', text: 'B' },
            { num: '4', text: 'D' },
            { num: '5', text: 'C' },
          ],
        },
        {
          taskLabel: 'Task 3 (Đọc định nghĩa viết từ thời tiết / mùa)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'spring', speak: 'spring' },
            { num: '2', text: 'wind', speak: 'wind' },
            { num: '3', text: 'autumn', speak: 'autumn' },
            { num: '4', text: 'foggy', speak: 'foggy' },
            { num: '5', text: 'snowy', speak: 'snowy' },
          ],
        },
        {
          taskLabel: 'Task 4 (Đọc hiểu Đúng/Sai — 4 mùa ở nước Úc)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'F' },
            { num: '2', text: 'F' },
            { num: '3', text: 'T' },
            { num: '4', text: 'T' },
            { num: '5', text: 'T' },
          ],
        },
        {
          taskLabel: 'Task 5 (20 câu trắc nghiệm tổng hợp Thời tiết & 4 mùa)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'C' },
            { num: '2', text: 'A' },
            { num: '3', text: 'C' },
            { num: '4', text: 'D' },
            { num: '5', text: 'D' },
            { num: '6', text: 'C' },
            { num: '7', text: 'B' },
            { num: '8', text: 'D' },
            { num: '9', text: 'B' },
            { num: '10', text: 'C' },
            { num: '11', text: 'B' },
            { num: '12', text: 'B' },
            { num: '13', text: 'C' },
            { num: '14', text: 'A' },
            { num: '15', text: 'B' },
            { num: '16', text: 'C' },
            { num: '17', text: 'A' },
            { num: '18', text: 'C' },
            { num: '19', text: 'C' },
            { num: '20', text: 'C' },
          ],
        },
        {
          taskLabel: 'Task 6 (Điền từ — Bản tin Dự báo Thời tiết)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'snowy', speak: 'snowy' },
            { num: '2', text: 'spring', speak: 'spring' },
            { num: '3', text: 'rain', speak: 'rain' },
            { num: '4', text: 'cool', speak: 'cool' },
            { num: '5', text: 'clouds', speak: 'clouds' },
          ],
        },
        {
          taskLabel: 'Task 7 (Nhìn tranh viết 5 từ thời tiết)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'foggy', speak: 'foggy' },
            { num: '2', text: 'summer', speak: 'summer' },
            { num: '3', text: 'sunny', speak: 'sunny' },
            { num: '4', text: 'clouds', speak: 'clouds' },
            { num: '5', text: 'stormy', speak: 'stormy' },
          ],
        },
        {
          taskLabel: 'Task 8 (Điền từ — Mùa thu & Mùa hè)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'favorite' },
            { num: '2', text: 'colors' },
            { num: '3', text: 'swimming' },
            { num: '4', text: 'my' },
            { num: '5', text: 'with' },
          ],
        },
        {
          taskLabel: 'Task 9 (Sắp xếp từ — Câu 1)',
          summaryType: 'sentences',
          items: [
            {
              num: '1',
              text: 'What will the weather be like tomorrow?',
              speak: 'What will the weather be like tomorrow?',
            },
          ],
          note: 'Các câu 2–5 của Task 9 tiếp tục ngay đầu Trang 175.',
        },
      ],
    },
  ],

  175: [
    {
      id: 'ak-u18-p175',
      unitNumber: 18,
      unitTitle: 'UNIT 18: What will the weather be like tomorrow? (Hoàn thành · Task 9–10)',
      pageRangeNote: 'Bài tập gốc Trang 142 – 143',
      jumpPage: 142,
      accent: 'sky',
      tasks: [
        {
          taskLabel: 'Task 9 (tiếp · Câu 2–5)',
          summaryType: 'sentences',
          items: [
            {
              num: '2',
              text: 'How many seasons are there in the North?',
              speak: 'How many seasons are there in the North?',
            },
            {
              num: '3',
              text: 'I like winter because it is cold.',
              speak: 'I like winter because it is cold.',
            },
            {
              num: '4',
              text: 'What is autumn like in your country?',
              speak: 'What is autumn like in your country?',
            },
            {
              num: '5',
              text: 'It is often hot in the dry season.',
              speak: 'It is often hot in the dry season.',
            },
          ],
        },
        {
          taskLabel: 'Task 10 (Viết về mùa em yêu thích)',
          summaryType: 'writing',
          items: [{ text: 'Câu trả lời mở của học sinh (kể về thời tiết và hoạt động yêu thích trong mùa).' }],
        },
      ],
    },
    {
      id: 'ak-u19-p175',
      unitNumber: 19,
      unitTitle: 'UNIT 19: Which place would you like to visit? (Trọn bộ Task 1–9)',
      pageRangeNote: 'Bài tập gốc Trang 145 – 149',
      jumpPage: 145,
      accent: 'emerald',
      tasks: [
        {
          taskLabel: 'Task 1 (Tìm từ khác loại)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'D' },
            { num: '2', text: 'B' },
            { num: '3', text: 'D' },
            { num: '4', text: 'C' },
            { num: '5', text: 'D' },
          ],
        },
        {
          taskLabel: 'Task 2 (Trắc nghiệm 6 câu danh thắng)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'b' },
            { num: '2', text: 'b' },
            { num: '3', text: 'c' },
            { num: '4', text: 'b' },
            { num: '5', text: 'b' },
            { num: '6', text: 'd' },
          ],
        },
        {
          taskLabel: 'Task 3 (Đọc định nghĩa viết tên địa điểm)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'market', speak: 'market' },
            { num: '2', text: 'island', speak: 'island' },
            { num: '3', text: 'park', speak: 'park' },
            { num: '4', text: 'pagoda', speak: 'pagoda' },
            { num: '5', text: 'theatre', speak: 'theatre' },
          ],
        },
        {
          taskLabel: 'Task 4 (Đọc hiểu Đúng/Sai — Đảo Phú Quốc)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'F' },
            { num: '2', text: 'T' },
            { num: '3', text: 'T' },
            { num: '4', text: 'F' },
            { num: '5', text: 'F' },
          ],
        },
        {
          taskLabel: 'Task 5 (Sắp xếp hội thoại Hoa & Phong — Chùa Bái Đính)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'B' },
            { num: '2', text: 'E' },
            { num: '3', text: 'D' },
            { num: '4', text: 'A' },
            { num: '5', text: 'F' },
          ],
        },
        {
          taskLabel: 'Task 6 (Nhìn tranh điền từ — Chuyến đi TP. Hồ Chí Minh của Tâm)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'weekend', speak: 'weekend' },
            { num: '2', text: 'Market', speak: 'Ben Thanh Market' },
            { num: '3', text: 'food', speak: 'delicious food' },
            { num: '4', text: 'Park', speak: 'Dam Sen Water Park' },
            { num: '5', text: 'play', speak: 'watched a play' },
          ],
        },
        {
          taskLabel: 'Task 7 (Nhìn tranh điền tên 5 danh thắng Việt Nam)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'Pagoda', speak: 'Thien Mu Pagoda' },
            { num: '2', text: 'market', speak: 'market' },
            { num: '3', text: 'Bridge', speak: 'Nhat Tan Bridge' },
            { num: '4', text: 'Temple', speak: 'Hoa Lu Temple' },
            { num: '5', text: 'Village', speak: 'Nhat Tan Flower Village' },
          ],
        },
        {
          taskLabel: 'Task 8 (Sắp xếp từ thành 5 câu hoàn chỉnh)',
          summaryType: 'sentences',
          items: [
            {
              num: '1',
              text: "Let's visit the Museum of History.",
              speak: "Let's visit the Museum of History.",
            },
            {
              num: '2',
              text: "We'd like to go to the zoo.",
              speak: "We'd like to go to the zoo.",
            },
            {
              num: '3',
              text: 'This is my first time in Viet Nam.',
              speak: 'This is my first time in Viet Nam.',
            },
            {
              num: '4',
              text: 'Ha Noi is bigger than I expected.',
              speak: 'Ha Noi is bigger than I expected.',
            },
            {
              num: '5',
              text: "It's fun to play in a water park.",
              speak: "It's fun to play in a water park.",
            },
          ],
        },
        {
          taskLabel: 'Task 9 (Viết về địa điểm em muốn đến thăm)',
          summaryType: 'writing',
          items: [{ text: 'Câu trả lời mở của học sinh (dùng I’d like to visit... because it is more... than I expected).' }],
        },
      ],
    },
    {
      id: 'ak-u20-p175',
      unitNumber: 20,
      unitTitle: 'UNIT 20: Which one is more exciting...? (Task 1 & Task 2 câu 1)',
      pageRangeNote: 'Bài tập gốc Trang 153',
      jumpPage: 153,
      accent: 'teal',
      tasks: [
        {
          taskLabel: 'Task 1 (Tìm từ khác loại)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'd' },
            { num: '2', text: 'c' },
            { num: '3', text: 'b' },
            { num: '4', text: 'd' },
            { num: '5', text: 'c' },
          ],
        },
        {
          taskLabel: 'Task 2 (Tìm và sửa lỗi sai — Câu 1)',
          summaryType: 'chips',
          items: [{ num: '1', text: 'bigger → bigger than', highlight: true }],
          note: 'Xem tiếp câu 2–5 của Task 2 và Task 3–10 ở Trang 176.',
        },
      ],
    },
  ],

  176: [
    {
      id: 'ak-u20-p176',
      unitNumber: 20,
      unitTitle: 'UNIT 20: Which one is more exciting, life in the city or life in the countryside? (Task 2–10)',
      pageRangeNote: 'Bài tập gốc Trang 153 – 157',
      jumpPage: 153,
      accent: 'teal',
      tasks: [
        {
          taskLabel: 'Task 2 (tiếp · Tìm và sửa lỗi sai So sánh hơn — Câu 2–5)',
          summaryType: 'chips',
          items: [
            { num: '2', text: 'larger → larger than', highlight: true },
            { num: '3', text: 'in → is', highlight: true },
            { num: '4', text: 'beautiful → more beautiful', highlight: true },
            { num: '5', text: 'peaceful → more peaceful', highlight: true },
          ],
        },
        {
          taskLabel: 'Task 3 (Đọc định nghĩa viết từ vựng thành phố & làng quê)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'villager', speak: 'villager' },
            { num: '2', text: 'USA', speak: 'U S A' },
            { num: '3', text: 'farm', speak: 'farm' },
            { num: '4', text: 'aunt', speak: 'aunt' },
            { num: '5', text: 'traffic', speak: 'traffic' },
          ],
        },
        {
          taskLabel: 'Task 4 (Bảng biến đổi 12 tính từ sang So sánh hơn)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'Long → longer', speak: 'longer' },
            { num: '2', text: 'Big → bigger', speak: 'bigger', highlight: true },
            { num: '3', text: 'Small → smaller', speak: 'smaller' },
            { num: '4', text: 'Beautiful → more beautiful', speak: 'more beautiful' },
            { num: '5', text: 'Cheap → cheaper', speak: 'cheaper' },
            { num: '6', text: 'Happy → happier', speak: 'happier', highlight: true },
            { num: '7', text: 'Large → larger', speak: 'larger' },
            { num: '8', text: 'Noisy → noisier', speak: 'noisier', highlight: true },
            { num: '9', text: 'Busy → busier', speak: 'busier', highlight: true },
            { num: '10', text: 'Peaceful → more peaceful', speak: 'more peaceful' },
            { num: '11', text: 'Interesting → more interesting', speak: 'more interesting' },
            { num: '12', text: 'Exciting → more exciting', speak: 'more exciting' },
          ],
          note: 'Nhớ kỹ 4 thẻ tô vàng: big gấp đôi chữ g (bigger); happy / noisy / busy đổi -y thành -ier!',
        },
        {
          taskLabel: 'Task 5 (Đọc hiểu Đúng/Sai — Cuộc sống của Nick ở làng quê)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'F' },
            { num: '2', text: 'T' },
            { num: '3', text: 'F' },
            { num: '4', text: 'T' },
            { num: '5', text: 'T' },
          ],
        },
        {
          taskLabel: 'Task 6 (Sắp xếp hội thoại Lan & Phong)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'B' },
            { num: '2', text: 'E' },
            { num: '3', text: 'D' },
            { num: '4', text: 'A' },
            { num: '5', text: 'F' },
          ],
        },
        {
          taskLabel: 'Task 7 (Đánh dấu ngữ điệu câu hỏi lựa chọn "or": ↘ · ↗ · ↘)',
          summaryType: 'sentences',
          items: [
            {
              num: '1',
              text: 'Which one is bigger, ↘ London ↗ or Hai Phong? ↘',
              speak: 'Which one is bigger, London or Hai Phong?',
            },
            {
              num: '2',
              text: 'Which one is larger, ↘ the USA ↗ or Viet Nam? ↘',
              speak: 'Which one is larger, the USA or Viet Nam?',
            },
            {
              num: '3',
              text: 'Which one is more beautiful, ↘ Ha Long City ↗ or Sydney? ↘',
              speak: 'Which one is more beautiful, Ha Long City or Sydney?',
            },
            {
              num: '4',
              text: 'Which one is more peaceful, ↘ Da Lat ↗ or New York City? ↘',
              speak: 'Which one is more peaceful, Da Lat or New York City?',
            },
          ],
        },
        {
          taskLabel: 'Task 8 (Nhìn tranh điền từ — Kate ở Sydney)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'banks', speak: 'banks' },
            { num: '2', text: 'jams', speak: 'traffic jams' },
            { num: '3', text: 'grandparents', speak: 'grandparents' },
            { num: '4', text: 'kilometres', speak: 'kilometres' },
            { num: '5', text: 'goods', speak: 'goods' },
          ],
        },
        {
          taskLabel: 'Task 9 (Nhìn danh thắng viết tên 5 thành phố / quốc gia)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'Paris', speak: 'Paris' },
            { num: '2', text: 'Singapore', speak: 'Singapore' },
            { num: '3', text: 'Bangkok', speak: 'Bangkok' },
            { num: '4', text: 'Tokyo', speak: 'Tokyo' },
            { num: '5', text: 'Australia', speak: 'Australia' },
          ],
        },
        {
          taskLabel: 'Task 10 (Sắp xếp từ thành 5 câu So sánh hơn)',
          summaryType: 'sentences',
          items: [
            {
              num: '1',
              text: 'Ho Chi Minh City is more exciting than Da Nang.',
              speak: 'Ho Chi Minh City is more exciting than Da Nang.',
            },
            {
              num: '2',
              text: 'Da Lat is quieter than Can Tho.',
              speak: 'Da Lat is quieter than Can Tho.',
            },
            {
              num: '3',
              text: 'New York is more modern than Tokyo.',
              speak: 'New York is more modern than Tokyo.',
            },
            {
              num: '4',
              text: 'Which one is larger, Paris or London?',
              speak: 'Which one is larger, Paris or London?',
            },
            {
              num: '5',
              text: 'Which place is more beautiful, Ha Long City or Nha Trang?',
              speak: 'Which place is more beautiful, Ha Long City or Nha Trang?',
            },
          ],
        },
      ],
    },
  ],

  177: [
    {
      id: 'ak-u20-p177',
      unitNumber: 20,
      unitTitle: 'UNIT 20: Life in the city or life in the countryside? (Hoàn thành · Task 11–12 · Trang cuối sách)',
      pageRangeNote: 'Bài tập gốc Trang 157 – 158',
      jumpPage: 157,
      accent: 'teal',
      tasks: [
        {
          taskLabel: 'Task 11 (Đọc hiểu chọn a hoặc b — Nga ở Vĩnh Phúc & Hà Nội)',
          summaryType: 'chips',
          items: [
            { num: '1', text: 'a' },
            { num: '2', text: 'b' },
            { num: '3', text: 'b' },
            { num: '4', text: 'a' },
            { num: '5', text: 'a' },
          ],
        },
        {
          taskLabel: 'Task 12 (Viết so sánh nơi em sống với một thành phố khác)',
          summaryType: 'writing',
          items: [
            {
              text: 'Câu trả lời mở của học sinh (vận dụng câu So sánh hơn: adj-er than / more + long adj + than).',
            },
          ],
        },
      ],
    },
  ],
};

/* =========================================================
   MẸO GHI NHỚ SIÊU TỐC THEO TỪNG TRANG ĐÁP ÁN (168 -> 177)
   ========================================================= */
export const PAGE_MEMORY_RECAPS_168_177: Record<number, PageMemoryRecap[]> = {
  168: [
    {
      id: 'recap-168-1',
      unitTag: 'Unit 11 · Tránh 3 bẫy dễ sai nhất',
      title: 'Hỏi bệnh dùng WITH & sau SHOULD động từ giữ nguyên',
      formula: "What's the matter WITH you?  |  should / shouldn't + V (nguyên mẫu)",
      tipVi: 'Không dùng "matter to", không chia "-s/-ed" sau should, và đau họng là "sore throat" (không phải throatache).',
      exampleEn: "What's the matter with you? I have a sore throat. You shouldn't drink cold water.",
      exampleVi: 'Bạn bị sao thế? Mình bị đau họng. Bạn không nên uống nước lạnh đâu.',
      accent: 'pink',
    },
  ],
  169: [
    {
      id: 'recap-169-1',
      unitTag: 'Unit 11 · Đếm được hay không đếm được?',
      title: 'Phân biệt TOO MANY và TOO MUCH',
      formula: 'too many + danh từ số nhiều (sweets)  |  too much + không đếm được (water)',
      tipVi: 'Kẹo (sweets) đếm từng viên được nên dùng "too many sweets" để khuyên bạn tránh sâu răng.',
      exampleEn: "You shouldn't eat too many sweets because you may have a toothache.",
      exampleVi: 'Bạn không nên ăn quá nhiều kẹo vì có thể bị đau răng đấy.',
      accent: 'pink',
    },
    {
      id: 'recap-169-2',
      unitTag: 'Unit 12 · Cảnh báo tai nạn trong nhà',
      title: 'Khuyên ngăn với DON’T và dự đoán hậu quả với MAY',
      formula: "Don't + V nguyên mẫu!  →  You may + V (cut yourself / get a burn / fall off)",
      tipVi: 'Sau "may" (có thể xảy ra) động từ luôn giữ nguyên dạng gốc, không thêm -s hay -ed.',
      exampleEn: "Don't touch the stove! You may get a burn.",
      exampleVi: 'Đừng chạm vào bếp! Em có thể bị bỏng đấy.',
      accent: 'amber',
    },
  ],
  170: [
    {
      id: 'recap-170-1',
      unitTag: 'Unit 12 · Câu mệnh lệnh siêu ngắn',
      title: 'Khẳng định dùng V đầu câu — Cấm đoán thêm DON’T phía trước',
      formula: 'Khẳng định: V + ...!   |   Phủ định: Don’t + V + ...!',
      tipVi: 'Muốn khuyên làm điều tốt: "Read magazines!". Muốn ngăn việc nguy hiểm: "Don’t play with the knife!".',
      exampleEn: "Don't play with the matches! Read magazines instead.",
      exampleVi: 'Đừng nghịch diêm! Hãy đọc tạp chí đi.',
      accent: 'amber',
    },
    {
      id: 'recap-170-2',
      unitTag: 'Unit 13 · Cụm động từ sở thích',
      title: 'Nhớ bộ 3 động từ vàng: GO / DO / SURF',
      formula: 'go + V-ing (camping, fishing, skating)  |  do karate  |  surf the Internet',
      tipVi: 'Đi hoạt động ngoài trời dùng "go + V-ing", tập võ dùng "do karate", lướt mạng dùng "surf the Internet".',
      exampleEn: 'I often go fishing with my dad and do karate in my free time.',
      exampleVi: 'Mình thường đi câu cá với bố và tập võ karate vào thời gian rảnh.',
      accent: 'sky',
    },
  ],
  171: [
    {
      id: 'recap-171-1',
      unitTag: 'Unit 13 · Chia động từ ngôi thứ 3 số ít',
      title: 'Chủ ngữ He / She / My sister phải thêm -s / -es',
      formula: 'My sister GOES swimming twice a week.',
      tipVi: 'Đừng quên đổi "go → goes" khi nói về anh/chị/em hoặc bố mẹ (số ít) ở thì Hiện tại đơn.',
      exampleEn: 'My sister goes swimming twice a week and goes to the English club on Sundays.',
      exampleVi: 'Chị gái mình đi bơi hai lần một tuần và đến câu lạc bộ Tiếng Anh vào Chủ nhật.',
      accent: 'sky',
    },
    {
      id: 'recap-171-2',
      unitTag: 'Unit 14 · 5 động từ Quá khứ Bất quy tắc hay thi nhất',
      title: 'Học thuộc theo nhịp vần siêu nhanh',
      formula: 'find → found · think → thought · read → read (/red/) · hear → heard · stand → stood',
      tipVi: 'Khi kể truyện cổ tích (Once upon a time...), tất cả hành động đều chia ở quá khứ V2/V-ed!',
      exampleEn: 'The crow stood on the tree and heard the clever fox.',
      exampleVi: 'Con quạ đứng trên cây và nghe chú cáo thông minh nói.',
      accent: 'emerald',
    },
  ],
  172: [
    {
      id: 'recap-172-1',
      unitTag: 'Unit 14 · Hỏi cảm nhận về nhân vật',
      title: 'Mẫu câu hỏi "Bạn nghĩ gì về..."',
      formula: 'What do you think of + [Nhân vật]?  →  I think he/she is + [tính từ].',
      tipVi: 'Nhớ giới từ "of" sau "think" và các tính từ tính cách: kind (tốt bụng), greedy (tham lam), clever (thông minh).',
      exampleEn: 'What do you think of Snow White? I think she is kind and gentle.',
      exampleVi: 'Bạn nghĩ gì về Bạch Tuyết? Mình nghĩ cô ấy tốt bụng và dịu dàng.',
      accent: 'emerald',
    },
    {
      id: 'recap-172-2',
      unitTag: 'Unit 15 · Nghề nghiệp mơ ước',
      title: 'Luôn có TO BE và mạo từ A / AN trước nghề nghiệp',
      formula: "I'd like to be + A / AN + [Nghề nghiệp]  |  because I like + V-ing",
      tipVi: 'Dùng "an" trước âm nguyên âm u-e-o-a-i: an architect, an astronaut. Sau "like" dùng động từ thêm -ing!',
      exampleEn: "I'd like to be an astronaut because I like travelling in space.",
      exampleVi: 'Mình muốn trở thành phi hành gia vì mình thích du hành trong vũ trụ.',
      accent: 'sky',
    },
  ],
  173: [
    {
      id: 'recap-173-1',
      unitTag: 'Unit 16 · Hỏi đường lịch sự & vị trí',
      title: '3 cụm giới từ vị trí + 1 cụm thời gian di chuyển',
      formula: 'between A and B · opposite · on the corner of · at the end of the street',
      tipVi: 'Nói mất bao lâu để đi bộ: "It takes + [thời gian] + to walk to...".',
      exampleEn: 'Excuse me, how can I get to the museum? The pharmacy is at the end of the street.',
      exampleVi: 'Xin lỗi, tôi đến bảo tàng bằng cách nào? Hiệu thuốc nằm ở cuối đường.',
      accent: 'indigo',
    },
    {
      id: 'recap-173-2',
      unitTag: 'Unit 17 · Phân nhóm Thực phẩm chuẩn xác',
      title: 'Phân biệt Fruit (trái cây) – Food (đồ ăn) – Drink (đồ uống)',
      formula: 'watermelon = fruit  |  biscuits/chocolate/meat = food  |  milk/lemonade = drink',
      tipVi: 'Đọc kỹ nghĩa câu trước khi chọn đáp án để không bị nhầm nhóm trái cây với đồ uống như lỗi in ở câu 8!',
      exampleEn: 'Watermelon is my favourite fruit, and lemonade is my favourite drink.',
      exampleVi: 'Dưa hấu là trái cây yêu thích của mình, còn nước chanh là đồ uống yêu thích.',
      accent: 'amber',
    },
  ],
  174: [
    {
      id: 'recap-174-1',
      unitTag: 'Unit 17 · Đơn vị đựng đồ ăn số ít & số nhiều',
      title: 'Từ 2 trở lên phải thêm -s vào đơn vị đựng!',
      formula: 'a carton / glass / bowl of...  →  two bottles / two bars / two bowls of...',
      tipVi: 'Không thêm -s vào water, rice, chocolate — chỉ thêm -s vào đơn vị đựng (bottles, bowls, bars)!',
      exampleEn: 'I eat two bowls of rice and drink three bottles of water every day.',
      exampleVi: 'Mình ăn hai bát cơm và uống ba chai nước mỗi ngày.',
      accent: 'amber',
    },
    {
      id: 'recap-174-2',
      unitTag: 'Unit 18 · Dự báo thời tiết ngày mai',
      title: 'Tương lai luôn có WILL BE trước tính từ thời tiết',
      formula: 'What WILL the weather BE like tomorrow?  →  It WILL BE + [sunny/rainy/cool].',
      tipVi: 'Đừng quên chữ "be" đi sau "will" khi theo sau là tính từ (sunny, foggy, snowy, stormy)!',
      exampleEn: 'What will the weather be like tomorrow? It will be cool and cloudy.',
      exampleVi: 'Ngày mai thời tiết sẽ như thế nào? Trời sẽ mát mẻ và nhiều mây.',
      accent: 'sky',
    },
  ],
  175: [
    {
      id: 'recap-175-1',
      unitTag: 'Unit 18 · Hỏi đặc trưng từng mùa',
      title: 'Khác nhau giữa hỏi ngày mai (WILL BE) và hỏi mùa (IS)',
      formula: 'What IS autumn like in your country?  →  It is cool and windy.',
      tipVi: 'Hỏi đặc điểm chung của một mùa ở đất nước dùng Hiện tại đơn "What is ... like?".',
      exampleEn: 'What is autumn like in your country? It is cool and the leaves turn yellow.',
      exampleVi: 'Mùa thu ở nước bạn như thế nào? Trời mát mẻ và lá cây chuyển màu vàng.',
      accent: 'sky',
    },
    {
      id: 'recap-175-2',
      unitTag: 'Unit 19 · Bày tỏ cảm xúc bất ngờ khi đi du lịch',
      title: 'Cấu trúc "hơn mình tưởng tượng"',
      formula: '[Địa danh] + is/was + [adj-er / more adj] + THAN I EXPECTED.',
      tipVi: 'Rất hay xuất hiện trong bài sắp xếp câu và viết đoạn văn về chuyến du lịch Hà Nội, TP.HCM, Phú Quốc!',
      exampleEn: 'Ha Noi is bigger and more exciting than I expected.',
      exampleVi: 'Hà Nội rộng lớn và sôi động hơn mình tưởng tượng.',
      accent: 'emerald',
    },
  ],
  176: [
    {
      id: 'recap-176-1',
      unitTag: 'Unit 20 · 4 quy tắc So sánh hơn bất bại',
      title: 'Ngắn thêm -ER · Dài thêm MORE · Luôn có THAN khi so sánh 2 nơi',
      formula: 'short → shorter  |  big → bigger  |  noisy → noisier  |  peaceful → more peaceful',
      tipVi: 'Tính từ 2 âm tiết kết thúc bằng -y (happy, busy, noisy) đổi y → ier. Còn lại đa số từ 2 âm tiết trở lên dùng "more"!',
      exampleEn: 'Ho Chi Minh City is more exciting than Da Nang, and Da Lat is quieter than Can Tho.',
      exampleVi: 'TP. Hồ Chí Minh sôi động hơn Đà Nẵng, còn Đà Lạt yên tĩnh hơn Cần Thơ.',
      accent: 'teal',
    },
    {
      id: 'recap-176-2',
      unitTag: 'Unit 20 · Quy tắc Ngữ điệu câu hỏi "OR"',
      title: 'Nhớ điệu nhạc 3 nhịp: Xuống (↘) · Lên (↗) · Xuống (↘)',
      formula: 'Which one is bigger, (↘)  London (↗)  or  Hai Phong? (↘)',
      tipVi: 'Lựa chọn trước "or" lên giọng để người nghe biết còn nữa; lựa chọn cuối hạ giọng để kết thúc câu hỏi.',
      exampleEn: 'Which one is more peaceful, Da Lat or New York City?',
      exampleVi: 'Nơi nào yên bình hơn, Đà Lạt hay Thành phố New York?',
      accent: 'indigo',
    },
  ],
  177: [
    {
      id: 'recap-177-1',
      unitTag: 'Tổng kết Trang 177 · Trang cuối cùng của sách',
      title: 'Bí quyết đạt điểm 10 Tiếng Anh Lớp 5 & IOE',
      formula: 'Nghe đều 10 phút/ngày + Nắm chắc 3 thì (Quá khứ · Hiện tại · Tương lai) + So sánh hơn',
      tipVi: 'Em đã hoàn thành toàn bộ 177 trang sách! Hãy dùng Bản đồ Học kỳ 2 và Thử thách 10 câu ngay bên dưới để khóa chặt toàn bộ kiến thức nhé!',
      exampleEn: 'Practice makes perfect! I am ready for my Grade 5 English exam.',
      exampleVi: 'Có công mài sắt có ngày nên kim! Mình đã sẵn sàng cho kỳ thi Tiếng Anh Lớp 5 rồi.',
      accent: 'teal',
    },
  ],
};

/* =========================================================
   TRANG 177: BẢN ĐỒ CÔNG THỨC HỌC KỲ 2 (UNIT 11 -> UNIT 20)
   ========================================================= */
export const SEMESTER_2_CHEAT_SHEET: Semester2CheatCard[] = [
  {
    unit: 11,
    title: "What's the matter with you?",
    titleVi: 'Sức khỏe & Lời khuyên',
    jumpPage: 78,
    formula: "What's the matter with you? → I have a [bệnh]. You should / shouldn't + V.",
    keyWords: 'sore throat, fever, earache, toothache, stomach ache, carry heavy things',
    exampleEn: "I have a fever. You should see the doctor and shouldn't go to school.",
    exampleVi: 'Mình bị sốt. Bạn nên đi khám bác sĩ và không nên đi học.',
    goldenTip: 'Luôn dùng giới từ WITH (matter with) và động từ nguyên mẫu sau should / shouldn’t.',
    accent: 'pink',
  },
  {
    unit: 12,
    title: "Don't ride your bike too fast!",
    titleVi: 'An toàn trong nhà',
    jumpPage: 88,
    formula: "Don't + V!  |  Why shouldn't I + V? → Because you may + V.",
    keyWords: 'knife, matches, stove, stairs, cut yourself, get a burn, fall off, roll off',
    exampleEn: "Why shouldn't I play with the knife? Because you may cut yourself.",
    exampleVi: 'Tại sao con không nên nghịch dao? Vì con có thể tự cắt vào tay.',
    goldenTip: 'Phân biệt "may be" (động từ: có thể là) và "maybe" (trạng từ đầu câu: có lẽ).',
    accent: 'amber',
  },
  {
    unit: 13,
    title: 'What do you do in your free time?',
    titleVi: 'Thời gian rảnh rỗi',
    jumpPage: 97,
    formula: 'What do you do in your free time? → I often + V / go + V-ing.',
    keyWords: 'surf the Internet, do karate, go camping, go fishing, go skating, clean the house',
    exampleEn: 'My sister goes swimming twice a week and surfs the Internet in the evening.',
    exampleVi: 'Chị mình đi bơi hai lần một tuần và lướt mạng vào buổi tối.',
    goldenTip: 'Nhớ thêm -s / -es vào động từ khi chủ ngữ là he / she / my father / my sister.',
    accent: 'sky',
  },
  {
    unit: 14,
    title: 'What happened in the story?',
    titleVi: 'Truyện cổ tích (Quá khứ đơn)',
    jumpPage: 104,
    formula: 'First / Then / Next / In the end + S + V2/V-ed.  |  What do you think of...?',
    keyWords: 'seed, watermelon, fox, crow, tortoise, hare, greedy, kind, clever, found, thought',
    exampleEn: 'What do you think of the older brother? I think he was greedy.',
    exampleVi: 'Bạn nghĩ gì về người anh trai? Mình nghĩ anh ấy rất tham lam.',
    goldenTip: 'Học thuộc 5 động từ bất quy tắc: find→found, think→thought, hear→heard, stand→stood, read→read (/red/).',
    accent: 'emerald',
  },
  {
    unit: 15,
    title: 'What would you like to be in the future?',
    titleVi: 'Nghề nghiệp mơ ước',
    jumpPage: 111,
    formula: "I'd like to be + a/an + [nghề] + because I'd like to + V / like + V-ing.",
    keyWords: 'pilot, architect, astronaut, nurse, writer, farmer, look after patients, fly a plane',
    exampleEn: "I'd like to be an architect because I'd like to design buildings.",
    exampleVi: 'Mình muốn làm kiến trúc sư vì mình thích thiết kế các tòa nhà.',
    goldenTip: 'Đừng quên "to be" sau "would like" và dùng "an" trước architect / astronaut!',
    accent: 'sky',
  },
  {
    unit: 16,
    title: 'Where is the post office?',
    titleVi: 'Chỉ đường & Phương tiện',
    jumpPage: 118,
    formula: 'Excuse me, where is / how can I get to...? → Go straight, turn left/right.',
    keyWords: 'post office, pharmacy, museum, theatre, opposite, between, on the corner, coach',
    exampleEn: 'The pharmacy is opposite the cinema, on the corner of the street.',
    exampleVi: 'Hiệu thuốc nằm đối diện rạp chiếu phim, ngay góc đường.',
    goldenTip: 'Nhớ cụm "It takes + [thời gian] + to walk/get to..." và "take a coach/bus".',
    accent: 'indigo',
  },
  {
    unit: 17,
    title: 'What would you like to eat?',
    titleVi: 'Đồ ăn, đồ uống & Lượng từ',
    jumpPage: 126,
    formula: "I'd like + a/two + [đơn vị đựng] + of + [đồ ăn].  |  How much / How many...?",
    keyWords: 'a packet of biscuits, a bar of chocolate, a bowl of rice, a carton of juice, a glass of milk',
    exampleEn: "I'd like two bars of chocolate and a carton of apple juice, please.",
    exampleVi: 'Cho mình hai thanh sô-cô-la và một hộp nước ép táo nhé.',
    goldenTip: 'How much + danh từ không đếm được (water, rice); How many + danh từ đếm được số nhiều (apples, bottles).',
    accent: 'amber',
  },
  {
    unit: 18,
    title: 'What will the weather be like tomorrow?',
    titleVi: 'Thời tiết & 4 mùa',
    jumpPage: 134,
    formula: 'Tomorrow: What will the weather be like? → It will be + adj.  |  Season: What is [mùa] like?',
    keyWords: 'sunny, rainy, windy, foggy, snowy, stormy, spring, summer, autumn, winter, dry/rainy season',
    exampleEn: 'It will be cold and snowy tomorrow. I like spring because it is warm.',
    exampleVi: 'Ngày mai trời sẽ lạnh và có tuyết. Mình thích mùa xuân vì trời ấm áp.',
    goldenTip: 'Luôn có chữ "be" sau "will" trước tính từ thời tiết (will be sunny / will be cool).',
    accent: 'sky',
  },
  {
    unit: 19,
    title: 'Which place would you like to visit?',
    titleVi: 'Danh thắng Việt Nam',
    jumpPage: 143,
    formula: "Which place would you like to visit, A or B? → I'd like to visit... It is more... than I expected.",
    keyWords: 'pagoda, temple, bridge, museum, island, water park, attractive, exciting, expected',
    exampleEn: 'Dam Sen Water Park was more exciting than I expected.',
    exampleVi: 'Công viên nước Đầm Sen sôi động hơn mình tưởng tượng.',
    goldenTip: 'Dùng "Which place" khi có lựa chọn A or B; và nhớ cụm vàng "... than I expected".',
    accent: 'emerald',
  },
  {
    unit: 20,
    title: 'Life in the city or life in the countryside?',
    titleVi: 'So sánh hơn & Thành phố thế giới',
    jumpPage: 150,
    formula: 'Which one is [adj-er / more adj], A ↗ or B ↘?  →  A is [adj-er / more adj] than B.',
    keyWords: 'bigger, larger, noisier, busier, quieter, more peaceful, more exciting, more modern, traffic jams',
    exampleEn: 'Which one is more peaceful, Da Lat or New York City? I think Da Lat is.',
    exampleVi: 'Nơi nào yên bình hơn, Đà Lạt hay New York? Mình nghĩ là Đà Lạt.',
    goldenTip: 'Gấp đôi phụ âm với big → bigger; đổi -y thành -ier với noisy/busy/happy; từ dài dùng "more ... than".',
    accent: 'teal',
  },
];

/* =========================================================
   TRANG 177: THỬ THÁCH TỔNG ÔN HỌC KỲ 2 (10 CÂU — UNIT 11 -> 20)
   ========================================================= */
export const GRAND_REVIEW_QUIZ_U11_U20: QuizChoiceItem[] = [
  {
    id: 'p177-gr-1',
    prompt: "[Unit 11] What's the matter ______ you? — I have a bad sore throat.",
    options: ['to', 'with', 'for', 'at'],
    correctIndex: 1,
    explanation: 'Cấu trúc hỏi sức khỏe chuẩn luôn đi với giới từ WITH: "What’s the matter with you?"',
  },
  {
    id: 'p177-gr-2',
    prompt: "[Unit 12] Don't touch the hot stove! You may ______ a burn.",
    options: ['gets', 'got', 'get', 'getting'],
    correctIndex: 2,
    explanation: 'Sau động từ khuyết thiếu "may" (có thể), động từ luôn ở dạng nguyên mẫu: "may get a burn".',
  },
  {
    id: 'p177-gr-3',
    prompt: '[Unit 13] My sister ______ swimming twice a week in her free time.',
    options: ['go', 'goes', 'going', 'went'],
    correctIndex: 1,
    explanation: 'Thì Hiện tại đơn với "twice a week" và chủ ngữ số ít "My sister" phải chia "goes".',
  },
  {
    id: 'p177-gr-4',
    prompt: '[Unit 14] Yesterday, I ______ a great folk tale about a clever fox and a crow.',
    options: ['read (/red/)', 'reads', 'reading', 'to read'],
    correctIndex: 0,
    explanation: 'Có "Yesterday" nên chia Quá khứ đơn: động từ "read" vẫn viết là "read" nhưng phát âm là /red/!',
  },
  {
    id: 'p177-gr-5',
    prompt: "[Unit 15] I'd like to be ______ astronaut because I like travelling in space.",
    options: ['a', 'an', 'the', 'two'],
    correctIndex: 1,
    explanation: '"astronaut" bắt đầu bằng nguyên âm /æ/ nên bắt buộc dùng mạo từ "an".',
  },
  {
    id: 'p177-gr-6',
    prompt: '[Unit 16] The pharmacy is ______ the end of the street, opposite the cinema.',
    options: ['at', 'in', 'between', 'from'],
    correctIndex: 0,
    explanation: 'Cụm chỉ vị trí cố định: "at the end of the street" (ở cuối con đường).',
  },
  {
    id: 'p177-gr-7',
    prompt: '[Unit 17] How ______ water do you drink every day? — I drink three bottles.',
    options: ['many', 'often', 'much', 'far'],
    correctIndex: 2,
    explanation: '"water" là danh từ không đếm được nên phải hỏi bằng "How much water".',
  },
  {
    id: 'p177-gr-8',
    prompt: '[Unit 18] What will the weather be like tomorrow? — It ______ cool and windy.',
    options: ['is', 'will', 'will be', 'was'],
    correctIndex: 2,
    explanation: 'Câu dự báo ngày mai dùng tương lai đơn với tính từ nên bắt buộc có "will be".',
  },
  {
    id: 'p177-gr-9',
    prompt: '[Unit 19] Ha Noi is bigger and more exciting ______ I expected.',
    options: ['then', 'that', 'as', 'than'],
    correctIndex: 3,
    explanation: 'Cấu trúc so sánh hơn bày tỏ sự bất ngờ: "... than I expected" (hơn mình tưởng tượng).',
  },
  {
    id: 'p177-gr-10',
    prompt: '[Unit 20] Life in the city is ______ than life in the countryside.',
    options: ['noisy', 'more noisy', 'noisier', 'noisiest'],
    correctIndex: 2,
    explanation: '"noisy" có 2 âm tiết tận cùng là -y nên khi chuyển sang so sánh hơn phải đổi -y thành -ier: "noisier"!',
  },
];
