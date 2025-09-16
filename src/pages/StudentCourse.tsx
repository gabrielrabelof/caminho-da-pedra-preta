import Header from "../components/Header"
import MapPanel from "../components/MapPanel"
import SupportMaterialCard from "../components/SuportMaterialCard"

export default function StudentCourse() {

const supportMaterials = [
  { title: 'Plano de curso', color: 'border-indigo-900' },
  { title: '1º Encontro', color: 'border-teal-500' },
  { title: '2º Encontro', color: 'border-cyan-500' },
  { title: '3º Encontro', color: 'border-orange-500' },
  { title: '4º Encontro', color: 'border-purple-700' },
];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
            <Header />
            <main className="container mx-auto p-4 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5">
                        <h2 className="text-xl font-semibold mb-6 text-gray-700">Confira os materiais de apoio</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {supportMaterials.map((material) => (
                                <SupportMaterialCard key={material.title} title={material.title} borderColorClass={material.color} />
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <MapPanel />
                    </div>
                </div>
            </main>
        </div>
    )
}