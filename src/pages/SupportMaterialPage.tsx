import React from "react";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";

// Mock data for a link resource
const mockLink = {
  id: "1",
  url: "http://example.com/plano-de-curso.pdf",
  title: "Plano de Curso",
  description: "Este é o plano de curso detalhado para a Trilha de Conhecimento. Ele contém informações sobre os tópicos que serão abordados, o cronograma e os métodos de avaliação."
};

export default function SupportMaterialPage() {
  const { materialId } = useParams();

  // In a real app, you would fetch the material based on the materialId
  console.log(materialId);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto p-4 lg:p-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">{mockLink.title}</h1>
            <Link to="/student/course/1" className="text-indigo-600 hover:text-indigo-800">
              &larr; Voltar para o curso
            </Link>
          </div>
          <p className="mb-6 text-gray-600">{mockLink.description}</p>
          <a
            href={mockLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Acessar Material
          </a>
        </div>
      </main>
    </div>
  );
}
