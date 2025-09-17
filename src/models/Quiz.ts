import type { Question } from './Question';

export interface Quiz {
  id: string;
  title: string;
  courseId: string;
  questions: Question[];
}
