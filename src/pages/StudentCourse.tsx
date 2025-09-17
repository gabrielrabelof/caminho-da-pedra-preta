import Header from "../components/Header";
import MapPanel from "../components/MapPanel";
import SupportMaterialCard from "../components/SuportMaterialCard";
import { useNavigate, useParams } from "react-router-dom";
import type { Encontro } from "../models/Encontro";

export default function StudentCourse() {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const encontros: Encontro[] = [
    { id: "1", title: 'Plano de curso', type: 'link', resourceId: '1', color: 'border-indigo-900' },
    { id: "2", title: '1º Encontro', type: 'quiz', resourceId: '1', color: 'border-teal-500' },
    { id: "3", title: '2º Encontro', type: 'link', resourceId: '2', color: 'border-cyan-500' },
    { id: "4", title: '3º Encontro', type: 'quiz', resourceId: '2', color: 'border-orange-500' },
    { id: "5", title: '4º Encontro', type: 'link', resourceId: '3', color: 'border-purple-700' },
  ];

  const handleCardClick = (encontro: Encontro) => {
    if (encontro.type === 'quiz') {
      navigate(`/quiz/${encontro.resourceId}`);
    } else {
      navigate(`/student/course/${courseId}/material/${encontro.resourceId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-xl font-semibold mb-6 text-gray-700">Confira os materiais de apoio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {encontros.map((encontro) => (
                <div key={encontro.id} onClick={() => handleCardClick(encontro)} style={{ cursor: 'pointer' }}>
                  <SupportMaterialCard title={encontro.title} borderColorClass={encontro.color} />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <MapPanel />
          </div>
        </div>
      </main>
    </div>
  );
}