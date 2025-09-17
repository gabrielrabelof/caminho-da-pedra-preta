import Header from "../components/Header";
import { type Course } from "../models/Course";
import { type Student } from "../models/Student";
import type { Encontro } from "../models/Encontro";
import { Link } from "react-router-dom";
import { UserMinusIcon, MailIcon, UserPlusIcon, XCircleIcon } from "../components/Icons";

export default function CourseDetails() {
  const course: Course = {
    id: "1",
    name: "Trilha de Conhecimento",
    status: "Em andamento",
    students: 2,
    totalStudents: 30,
    startDate: "2024-01-15",
    endDate: "2024-05-30",
  };

  const participants: Student[] = [
    { id: "1", name: "João da Silva", email: "joao.silva@example.com", enrollmentDate: "2024-01-10", status: "Ativo", course: "Trilha de Conhecimento" },
    { id: "2", name: "Maria Oliveira", email: "maria.oliveira@example.com", enrollmentDate: "2024-01-12", status: "Ativo", course: "Trilha de Conhecimento" },
  ];

  const waitingList: Student[] = [
    { id: "3", name: "Pedro Martins", email: "pedro.martins@example.com", enrollmentDate: "2024-01-18", status: "Pendente", course: "Trilha de Conhecimento" },
  ];

  const encontros: Encontro[] = [
    { id: "1", title: 'Plano de curso', type: 'link', resourceId: 'http://example.com/plano-de-curso.pdf', color: 'border-indigo-900' },
    { id: "2", title: '1º Encontro', type: 'quiz', resourceId: '1', color: 'border-teal-500' },
    { id: "3", title: '2º Encontro', type: 'link', resourceId: 'http://example.com/encontro-2', color: 'border-cyan-500' },
    { id: "4", title: '3º Encontro', type: 'quiz', resourceId: '2', color: 'border-orange-500' },
    { id: "5", title: '4º Encontro', type: 'link', resourceId: 'http://example.com/encontro-4', color: 'border-purple-700' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto p-4 lg:p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-800">{course.name}</h1>
            <Link to="/dashboard" className="flex items-center text-indigo-600 hover:text-indigo-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Voltar para o painel
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-500 font-semibold text-sm">Status</p>
              <p className="text-2xl font-bold text-gray-900">{course.status}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-500 font-semibold text-sm">Alunos</p>
              <p className="text-2xl font-bold text-gray-900">{course.students}/{course.totalStudents}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-500 font-semibold text-sm">Período</p>
              <p className="text-md font-semibold text-gray-900">{new Date(course.startDate).toLocaleDateString()} - {new Date(course.endDate).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Participantes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 font-semibold">Nome</th>
                  <th className="p-4 font-semibold">Email</th>
                  <th className="p-4 font-semibold text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                {participants.map((student) => (
                  <tr key={student.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">{student.name}</td>
                    <td className="p-4 text-gray-600">{student.email}</td>
                    <td className="p-4 flex justify-center space-x-2">
                      <button className="flex items-center justify-center w-10 h-10 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors">
                        <UserMinusIcon className="w-5 h-5" />
                      </button>
                      <button className="flex items-center justify-center w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200 transition-colors">
                        <MailIcon className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Fila de Espera</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 font-semibold">Nome</th>
                  <th className="p-4 font-semibold">Email</th>
                  <th className="p-4 font-semibold text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                {waitingList.map((student) => (
                  <tr key={student.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">{student.name}</td>
                    <td className="p-4 text-gray-600">{student.email}</td>
                    <td className="p-4 flex justify-center space-x-2">
                      <button className="flex items-center justify-center w-10 h-10 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors">
                        <UserPlusIcon className="w-5 h-5" />
                      </button>
                      <button className="flex items-center justify-center w-10 h-10 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors">
                        <XCircleIcon className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg mt-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Quizzes</h2>
          <Link to="/quiz/management">
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Gerenciar Quizzes
            </button>
          </Link>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Encontros</h2>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Adicionar Encontro
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 font-semibold">Título</th>
                  <th className="p-4 font-semibold">Tipo</th>
                  <th className="p-4 font-semibold text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                {encontros.map((encontro) => (
                  <tr key={encontro.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">{encontro.title}</td>
                    <td className="p-4 text-gray-600">{encontro.type}</td>
                    <td className="p-4 flex justify-center space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-800">Editar</button>
                      <button className="text-red-500 hover:text-red-700">Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
