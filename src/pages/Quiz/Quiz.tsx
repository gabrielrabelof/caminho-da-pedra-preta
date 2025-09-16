import React, { useState } from 'react';
import Header from '../../components/Header';
import WelcomeScreen from './Welcome';
import QuestionScreen from './Questions';
import CompletionScreen from './CompletionScreen';

const questions = [
  {
    part: 'PARTE I - PERFIL DO(A) RESPONDENTE',
    question: 'Qual é o seu gênero?',
    type: 'radio',
    options: ['Feminino', 'Masculino', 'Outro', 'Prefiro não dizer'],
  },
  {
    part: 'PARTE II - GRAU DE SATISFAÇÃO',
    question: 'Infraestrutura geral acerca das tecnologias digitais na sua escola',
    type: 'radio',
    options: ['1', '2', '3', '4', '5', 'Não sei responder', 'Não desejo responder', 'Não se aplica'],
  },
  {
    part: 'PARTE III - PERGUNTAS ABERTAS',
    question: 'Quais são suas principais expectativas quanto ao curso?',
    type: 'textarea',
    placeholder: 'Digite aqui sua resposta',
  },
];

const Quiz: React.FC = () => {
  const [step, setStep] = useState(0); // 0: welcome, 1-N: questions, N+1: complete
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const totalQuestions = questions.length;
  
  const progressValues: { [key: number]: number } = { 0: 0, 1: 0, 2: 27, 3: 95, 4: 100 };
  const progress = progressValues[step] || 0;

  const handleStart = () => setStep(1);
  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);
  const handleRestart = () => {
    setStep(0);
    setAnswers({});
  };
  const handleAnswerChange = (answer: string) => {
    setAnswers(prev => ({ ...prev, [step - 1]: answer }));
  };

  const renderContent = () => {
    if (step === 0) {
      return <WelcomeScreen onStart={handleStart} />;
    }
    if (step > 0 && step <= totalQuestions) {
      return <QuestionScreen
        questionData={questions[step - 1]}
        currentAnswer={answers[step - 1] || ''}
        onAnswer={handleAnswerChange}
        onNext={handleNext}
      />
    }
    return <CompletionScreen onRestart={handleRestart} />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col items-center p-4 relative overflow-hidden">
      <Header
        progress={progress}
        showBackButton={step > 0 && step <= totalQuestions}
        onBack={handleBack}
      />
      {renderContent()}
    </div>
  );
};

export default Quiz;