export interface Student {
  id: string;
  name: string;
  email: string;
  enrollmentDate: string;
  status: 'Ativo' | 'Inativo' | 'Pendente';
  course: string;
}
