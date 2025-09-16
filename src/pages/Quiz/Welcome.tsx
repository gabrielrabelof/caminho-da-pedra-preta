import React from 'react';
import { FootprintsIcon, PencilIcon, GraphIcon, HeadIcon, ArrowRightIcon } from '../../components/Icons';

const WelcomeScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => (
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
        <h2 className="text-teal-500 font-semibold mb-2 text-md">Questionário de Acolhimento</h2>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Prezado(a) cursista,</h1>
        <p className="text-gray-600 mb-6 leading-relaxed max-w-md mx-auto">
          Nesta primeira etapa do nosso curso <strong className="font-semibold text-gray-800">queremos saber um pouco mais</strong> sobre sua experiência com tecnologias digitais relacionadas à sala de aula e suas expectativas.
        </p>
        <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
          Este questionário é fundamental para nossa experiência e <strong className="font-semibold text-gray-800">leva cerca de 10 minutos para ser respondido.</strong> Sua participação é fundamental! <strong className="font-semibold text-gray-800">Contamos com sua colaboração e já agradecemos.</strong>
        </p>
        <div className="mt-10">
          <button onClick={onStart} className="bg-teal-500 text-white font-bold py-3 px-6 rounded-full inline-flex items-center space-x-3 hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            <span>Começar</span>
            <div className="border border-white/60 rounded-full h-8 w-8 flex items-center justify-center">
               <ArrowRightIcon className="w-5 h-5" />
            </div>
          </button>
        </div>
    </div>
  </main>
);

export default WelcomeScreen;
