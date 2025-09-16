import React from "react";
import {
  CheckCircle,
  Menu,
  X,
  ExternalLink,
  Mail,
  Phone,
  Footprints,
} from "lucide-react";

import logo from "../assets/Logo.png";
import logo_text from "../assets/logo_text.png";
import logo_iff from "../assets/logo_iff.png";
import logo_ucp from "../assets/logo_ucp.png";

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src={logo} alt="Logo do site" />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                className="text-gray-600 hover:text-teal-600 transition"
              >
                Início
              </a>
              <a
                href="#sobre"
                className="text-gray-600 hover:text-teal-600 transition"
              >
                Sobre o projeto
              </a>
              <a
                href="#contato"
                className="text-gray-600 hover:text-teal-600 transition"
              >
                Entre em contato
              </a>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition flex items-center">
                Acessar o curso
                <div className="ml-2 bg-white text-teal-500 rounded-full w-6 h-6 flex items-center justify-center">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </button>
            </nav>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <img src={logo_text} alt="Logo do site" className="mx-auto mb-8" />

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Letramento Digital e{" "}
              <span className="text-teal-500">Formação Continuada</span> de
              Professores
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              Desenvolver uma experiência formativa e colaborativa com foco no
              <br />
              letramento digital docente por meio de Tecnologias Digitais.
            </p>

            <div className="flex items-center justify-center space-x-6">
              <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition flex items-center">
                Saiba mais
                <div className="ml-2 bg-white text-teal-500 rounded-full w-6 h-6 flex items-center justify-center">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </button>

              <div className="flex justify-center items-center space-x-6">
                <img src={logo_iff} alt="Logo IFF" />
                <img src={logo_ucp} alt="Logo UCP" />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative icons */}
        <div className="absolute top-10 left-10 text-gray-200">
          <Footprints className="w-16 h-16 text-zinc-400" strokeWidth={0.75} />
        </div>
        <div className="absolute top-20 right-20 text-gray-200">
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <div className="absolute bottom-10 left-20 text-gray-200">
          <svg
            width="70"
            height="70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 text-gray-200">
          <svg
            width="90"
            height="90"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-teal-500 font-semibold">
                Sobre o Projeto
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Aprender e colaborar com tecnologia digital
              </h2>
              <p className="text-gray-600 mb-6">
                Pesquisa sobre letramento digital e formação continuada de
                professores, promovendo{" "}
                <strong>experiências formativas e colaborativas</strong> com uso
                de tecnologias digitais.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Importância do acesso e do saber a tecnologia.
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Curso gratuito, acesso disponível a todos.
                  </span>
                </div>
              </div>

              <button className="mt-8 bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition flex items-center">
                Acessar o curso
                <div className="ml-2 bg-white text-teal-500 rounded-full w-6 h-6 flex items-center justify-center">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </button>
            </div>

            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-gray-400">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-teal-500 font-semibold">
              O que oferecemos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Materiais e meios de <span className="text-teal-500">apoio</span>{" "}
              ao cursista
            </h2>
            <p className="text-gray-600 mt-4">
              Confira abaixo aquilo que você terá acesso ao se inscrever no
              <br />
              nosso curso, e o melhor, <strong>totalmente gratuito!</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-teal-700 to-teal-800 text-white p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute -top-4 -right-4 text-white/20 text-8xl font-bold">
                01
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">
                Plano de curso
              </h3>
              <p className="text-white/90 relative z-10">
                Planejamento completo do curso, com todas as prioridades,
                metodologia e carga horária.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute -top-4 -right-4 text-white/20 text-8xl font-bold">
                02
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">
                Apostilas
              </h3>
              <p className="text-white/90 relative z-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                sem nisl, varius ac leo et.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-700 to-teal-800 text-white p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute -top-4 -right-4 text-white/20 text-8xl font-bold">
                03
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Suporte</h3>
              <p className="text-white/90 relative z-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                sem nisl, varius ac leo et.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-2">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="font-bold text-lg">CAMINHO</div>
                  <div className="text-xs opacity-80">DA PEDRA PRETA</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Aprender e colaborar com
                <br />
                tecnologia digital
              </h3>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Páginas</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-teal-300 transition">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300 transition">
                    Sobre o projeto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300 transition">
                    Entre em contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300 transition">
                    Acessar o curso
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Entre em contato</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a
                    href="mailto:projeto.caminhodapedrapreta@gmail.com"
                    className="hover:text-teal-300 transition text-sm"
                  >
                    projeto.caminhodapedrapreta@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a
                    href="tel:+552299926472"
                    className="hover:text-teal-300 transition text-sm"
                  >
                    (22) 99926-4721 (Michelle)
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            Copyright © 2023 Caminho da Pedra Preta. Todos os direitos
            reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
