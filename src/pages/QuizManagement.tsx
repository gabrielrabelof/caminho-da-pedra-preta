import Header from "../components/Header";
import { Link } from "react-router-dom";
import type { Quiz } from "../models/Quiz";

export default function QuizManagement() {
  const quizzes: Quiz[] = [
    { id: "1", title: "Quiz de Introdução", courseId: "1", questions: [] },
    { id: "2", title: "Quiz Avançado", courseId: "1", questions: [] },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto p-4 lg:p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Gerenciar Quizzes</h1>
          <Link to="/course/details" className="text-indigo-600 hover:text-indigo-800">
            &larr; Voltar para o curso
          </Link>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex justify-end mb-6">
            <Link to="/quiz/create">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Criar Novo Quiz
              </button>
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 font-semibold">Título do Quiz</th>
                  <th className="p-4 font-semibold text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                {quizzes.map((quiz) => (
                  <tr key={quiz.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">{quiz.title}</td>
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
