import React, { useState } from "react";
import {
  Search,
  Home,
  Users,
  Settings,
  Plus,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const CourseDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Dados mockados para demonstração
  const courses = Array(32)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      name: "I.A na educação",
      status: index === 0 ? "Concluído" : "Em progresso",
      students: 27,
      totalStudents: 45,
      startDate: "04/09/2025",
      endDate: "09/12/2025",
    }));

  // Paginação
  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCourses = courses.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-20 bg-white shadow-lg flex flex-col items-center py-6 space-y-8">
        <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
          <div className="text-white text-xl font-bold">M</div>
        </div>

        <nav className="flex flex-col space-y-6">
          <button className="p-3 rounded-lg bg-teal-50 text-teal-600">
            <Home size={24} />
          </button>
          <button className="p-3 rounded-lg text-gray-400 hover:bg-gray-50">
            <Users size={24} />
          </button>
          <button className="p-3 rounded-lg text-gray-400 hover:bg-gray-50">
            <Settings size={24} />
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-20 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8 relative">
            <input
              type="text"
              placeholder="Pesquise o nome do curso"
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
              Visão geral dos cursos
            </h2>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {/* Total de Cursos */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold text-lg">32</span>
                  </div>
                </div>
                <h3 className="text-gray-800 font-medium mb-1">
                  Total de Cursos
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Total de cursos criados
                </p>
                <button className="flex items-center text-sm text-gray-600 hover:text-teal-600">
                  Ver detalhes
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>

              {/* Cursos completados */}
              <div className="bg-gray-800 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-lg">22</span>
                  </div>
                </div>
                <h3 className="font-medium mb-1">Cursos completados</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Total de cursos completados
                </p>
                <button className="flex items-center text-sm hover:text-teal-400">
                  Ver detalhes
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>

              {/* Adicionar Curso */}
              <div className="bg-teal-500 rounded-2xl p-6 text-white cursor-pointer hover:bg-teal-600 transition-colors">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Plus size={24} />
                  </div>
                  <h3 className="font-semibold text-lg">Adicionar Curso</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Courses Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800">
                Meus cursos
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">
                      Nome do Curso
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">
                      Status
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">
                      Nº de Alunos
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">
                      Data de Início
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">
                      Data de Término
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentCourses.map((course, index) => (
                    <tr
                      key={course.id}
                      className="border-b border-gray-50 hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-sm text-gray-800">
                        {course.name}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span
                            className={`w-2 h-2 rounded-full mr-2 ${
                              course.status === "Concluído"
                                ? "bg-green-500"
                                : "bg-yellow-400"
                            }`}
                          ></span>
                          <span className="text-sm text-gray-700">
                            {course.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Users size={16} className="mr-2" />
                          {course.students} / {course.totalStudents}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {course.startDate}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {course.endDate}
                      </td>
                      <td className="px-6 py-4">
                        <button className="px-4 py-2 bg-teal-500 text-white text-sm rounded-lg hover:bg-teal-600 transition-colors">
                          Ver curso
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
                {Math.min(endIndex, courses.length)} de {courses.length} cursos
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg ${
                    currentPage === 1
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
                      className={`px-3 py-1 rounded-lg text-sm ${
                        currentPage === page
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
                  className={`p-2 rounded-lg ${
                    currentPage === totalPages
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
      </div>
    </div>
  );
};

export default CourseDashboard;
