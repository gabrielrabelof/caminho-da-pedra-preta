import React from "react";
import { Link } from "react-router-dom";
import type { Course } from "../models/Course";
import { Users } from "lucide-react";

const StudentHome: React.FC = () => {
  const courses: Course[] = [
    {
      id: "1",
      name: "Trilha de Conhecimento",
      status: "Em andamento",
      students: 27,
      totalStudents: 45,
      startDate: "04/09/2025",
      endDate: "09/12/2025",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Meus Cursos</h1>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
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
              {courses.map((course) => (
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
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {course.startDate}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {course.endDate}
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`/student/course/${course.id}`}>
                      <button className="px-4 py-2 bg-teal-500 text-white text-sm rounded-lg hover:bg-teal-600 transition-colors">
                        Acessar
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
