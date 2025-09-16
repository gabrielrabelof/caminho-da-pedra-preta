import React from 'react';
import { ArrowRightIcon } from '../../components/Icons';

const RadioOption: React.FC<{ option: string; selected: boolean; onChange: (value: string) => void; name: string; }> = ({ option, selected, onChange, name }) => (
    <label className={`flex items-center w-full text-left p-4 border rounded-lg cursor-pointer transition-colors ${selected ? 'border-teal-500 bg-teal-50' : 'border-gray-300 bg-white hover:bg-gray-50'}`}>
        <input
            type="radio"
            name={name}
            value={option}
            checked={selected}
            onChange={() => onChange(option)}
            className="sr-only"
        />
        <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mr-4 grid place-items-center ${selected ? 'border-teal-500' : 'border-gray-300'}`}>
            {selected && <div className="w-2.5 h-2.5 bg-teal-500 rounded-full" />}
        </div>
        <span className={`font-medium ${selected ? 'text-teal-700' : 'text-gray-700'}`}>{option}</span>
    </label>
);

const QuestionScreen: React.FC<{
  questionData: any;
  onAnswer: (answer: string) => void;
  onNext: () => void;
  currentAnswer: string;
}> = ({ questionData, onAnswer, onNext, currentAnswer }) => (
  <main className="w-full max-w-xl text-center mt-20 sm:mt-16">
    <h2 className="text-teal-500 font-semibold mb-2 text-md">{questionData.part}</h2>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">{questionData.question}</h1>

    <div className="space-y-4">
      {questionData.type === 'radio' && questionData.options.map((option: string) => (
        <RadioOption
          key={option}
          option={option}
          selected={currentAnswer === option}
          onChange={onAnswer}
          name={questionData.question}
        />
      ))}
      {questionData.type === 'textarea' && (
        <textarea
          value={currentAnswer}
          onChange={(e) => onAnswer(e.target.value)}
          placeholder={questionData.placeholder}
          className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
        />
      )}
    </div>

    <div className="mt-10">
      <button onClick={onNext} className="bg-teal-500 text-white font-bold py-3 px-6 rounded-full inline-flex items-center space-x-3 hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:bg-gray-400 disabled:shadow-none disabled:scale-100" disabled={!currentAnswer}>
        <span>Avançar</span>
        <div className="border border-white/60 rounded-full h-8 w-8 flex items-center justify-center">
           <ArrowRightIcon className="w-5 h-5" />
        </div>
      </button>
    </div>
  </main>
);

export default QuestionScreen;