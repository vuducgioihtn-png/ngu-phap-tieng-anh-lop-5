export interface VocabItem {
  id: string;
  word: string;
  ipa: string;
  pos: string;
  meaning: string;
  example: string;
  exampleVi: string;
  memoryTip?: string;
}

export interface FormulaPart {
  label: string;
  text: string;
  role: 'wh' | 'aux' | 'subject' | 'verb' | 'object' | 'prep' | 'time';
}

export interface SentenceBuilderRow {
  subject: string;
  pattern: string;
  example: string;
  meaning: string;
  note: string;
}

export interface GrammarPoint {
  id: string;
  title: string;
  summary: string;
  formula: FormulaPart[];
  examples: { en: string; vi: string }[];
  tip: string;
  builder?: {
    prompt: string;
    choices: SentenceBuilderRow[];
  };
}

export interface MultipleChoiceTask {
  id: string;
  category: 'odd_one_out' | 'choice' | 'mistake';
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TrueFalseReading {
  title: string;
  passage: string;
  passageVi: string;
  statements: {
    id: string;
    text: string;
    isTrue: boolean;
    explanation: string;
  }[];
}

export interface WordOrderTask {
  id: string;
  words: string[];
  answer: string;
  meaning: string;
  explanation: string;
}

export type IOEQuestionType = 'FILL_BLANK' | 'REARRANGE' | 'LISTEN_CHOICE' | 'MATCHING';

export interface IOEPair {
  left: string;
  right: string;
}

export interface IOEQuestion {
  id: string;
  grade: number;
  unit: string;
  type: IOEQuestionType;
  question_text: string;
  audio_script: string | null;
  options?: string[] | null;
  segments?: string[] | null;
  pairs?: IOEPair[] | null;
  correct_answer: string;
  explanation: string;
}

export interface UnitData {
  id: number;
  semester: 1 | 2;
  title: string;
  titleVi: string;
  themeColor: string;
  pdfPageStart: number;
  goal: string;
  vocab: VocabItem[];
  grammar: GrammarPoint[];
  workbookChoices: MultipleChoiceTask[];
  reading: TrueFalseReading;
  wordOrders: WordOrderTask[];
  ioeQuestions: IOEQuestion[];
}

export interface StudentProgress {
  masteredVocabIds: string[];
  completedTaskIds: string[];
  unitBestScores: Record<number, number>;
  totalStars: number;
  streakDays: number;
  lastActiveUnitId: number;
}
