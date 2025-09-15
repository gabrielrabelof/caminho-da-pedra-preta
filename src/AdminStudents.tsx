import React, { useState } from "react";
import {
  Search,
  Home,
  Users,
  Settings,
  Plus,
  ChevronRight,
  ChevronLeft,
  User,
  Mail,
  Calendar,
} from "lucide-react";

const AdminStudents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Mock data for students
  const students = Array(50)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      name: `Aluno ${index + 1}`,
      email: `aluno${index + 1}@exemplo.com`,
      enrollmentDate: "04/09/2025",
      status: index % 3 === 0 ? "Ativo" : index % 3 === 1 ? "Inativo" : "Pendente",
      course: "I.A na educação",
    }));

  // Pagination
  const totalPages = Math.ceil(students.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStudents = students.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="mb-8 relative">
        <input
          type="text"
          placeholder="Pesquise o nome do aluno"
          className="w-full max-w-md px-4 py-3 pr-10 rounded-full border border-gray-200 focus:outline-none focus:border-teal-500"
        />
        <Search
          className="absolute right-3 top-3.5 text-gray-400"
          size={20}
        />
      </div>

      {/* Overview Cards */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Visão geral dos alunos
        </h2>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Total de Alunos */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-bold text-lg">50</span>
              </div>
            </div>
            <h3 className="text-gray-800 font-medium mb-1">
              Total de Alunos
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Total de alunos inscritos
            </p>
            <button className="flex items-center text-sm text-gray-600 hover:text-teal-600">
              Ver detalhes
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>

          {/* Alunos Ativos */}
          <div className="bg-gray-800 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <span className="font-bold text-lg">35</span>
              </div>
            </div>
            <h3 className="font-medium mb-1">Alunos Ativos</h3>
            <p className="text-gray-400 text-sm mb-4">
              Alunos atualmente ativos
            </p>
            <button className="flex items-center text-sm hover:text-teal-400">
              Ver detalhes
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>

          {/* Adicionar Aluno */}
          <div className="bg-teal-500 rounded-2xl p-6 text-white cursor-pointer hover:bg-teal-600 transition-colors">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Plus size={24} />
              </div>
              <h3 className="font-semibold text-lg">Adicionar Aluno</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">
            Lista de Alunos
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">
                  Nome
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">
                  Email
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">
                  Data de Inscrição
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">
                  Curso
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {currentStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-gray-50 hover:bg-gray-50"
                >
                  <td className="px-6 py-4 text-sm text-gray-800">
                    <div className="flex items-center">
                      <User size={20} className="mr-3 text-gray-400" />
                      {student.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Mail size={16} className="mr-2 text-gray-400" />
                      {student.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-gray-400" />
                      {student.enrollmentDate}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${student.status === "Ativo"
                        ? "bg-green-100 text-green-800"
                        : student.status === "Inativo"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                        }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {student.course}
                  </td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-2 bg-teal-500 text-white text-sm rounded-lg hover:bg-teal-600 transition-colors">
                      Ver Perfil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <div className="text-sm text-gray-600">
            Mostrando {startIndex + 1} a{" "}
            {Math.min(endIndex, students.length)} de {students.length} alunos
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg ${currentPage === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
            >
              <ChevronLeft size={20} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-lg text-sm ${currentPage === page
                    ? "bg-teal-500 text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg ${currentPage === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStudents;
