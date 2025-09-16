import React from 'react';
import { FootprintsIcon, PencilIcon, GraphIcon, HeadIcon, ArrowRightIcon, ArrowUpRightIcon } from '../../components/Icons';

const CompletionScreen: React.FC<{ onRestart: () => void }> = ({ onRestart }) => (
    <main className="w-full max-w-xl text-center relative mt-20 sm:mt-16">
        <div className="absolute top-[-4rem] left-[-2rem] transform -rotate-12 scale-75 sm:scale-100">
            <FootprintsIcon />
        </div>
        <div className="absolute top-[-3rem] right-[-1rem] transform rotate-12 scale-75 sm:scale-100">
            <PencilIcon />
        </div>
        <div className="absolute bottom-[-3rem] left-[-1rem] transform -rotate-12 scale-75 sm:scale-100">
            <GraphIcon />
        </div>
        <div className="absolute bottom-[-2rem] right-[-2rem] transform rotate-12 scale-75 sm:scale-100">
            <HeadIcon />
        </div>
        <div className="relative z-10">
            <h2 className="text-teal-500 font-semibold mb-2 text-md">Questionário finalizado</h2>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Parabéns!!!</h1>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-md mx-auto">
                Você concluiu o questionário de acolhimento, agora você já pode ir direto para o nosso percurso das principais atrações, ou caso prefira, voltar para a tela inicial.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={onRestart} className="bg-white text-teal-500 font-bold py-3 px-6 rounded-full inline-flex items-center space-x-3 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 border border-gray-200">
                <span>Voltar para a tela inicial</span>
                <div className="border border-teal-500/60 rounded-full h-8 w-8 flex items-center justify-center">
                   <ArrowUpRightIcon className="w-5 h-5 text-teal-500" />
                </div>
              </button>
              <button className="bg-teal-500 text-white font-bold py-3 px-6 rounded-full inline-flex items-center space-x-3 hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                <span>Começar</span>
                <div className="border border-white/60 rounded-full h-8 w-8 flex items-center justify-center">
                   <ArrowRightIcon className="w-5 h-5" />
                </div>
              </button>
            </div>
        </div>
    </main>
);

export default CompletionScreen;