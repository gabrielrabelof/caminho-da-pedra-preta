import type { Answer } from './Answer';

export type QuestionType = 'multiple-choice' | 'open-text';

export interface Question {
  id: string;
  quizId: string;
  text: string;
  type: QuestionType;
  answers?: Answer[]; // Only for multiple-choice
}
