export type EncontroType = 'quiz' | 'link';

export interface Encontro {
  id: string;
  title: string;
  type: EncontroType;
  resourceId: string; // This will be the quizId or a linkId
  color: string;
}
