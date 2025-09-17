import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import type { Question, QuestionType } from "../models/Question";

export default function CreateQuiz() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState<Partial<Question>[]>([]);

  const addQuestion = (type: QuestionType) => {
    setQuestions([...questions, { text: "", type, answers: type === "multiple-choice" ? [{ text: "", isCorrect: true }] : undefined }]);
  };

  const handleQuestionChange = (index: number, text: string) => {
    const newQuestions = [...questions];
    newQuestions[index].text = text;
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (qIndex: number, aIndex: number, text: string) => {
    const newQuestions = [...questions];
    if (newQuestions[qIndex].answers) {
      newQuestions[qIndex].answers![aIndex].text = text;
      setQuestions(newQuestions);
    }
  };

  const addAnswer = (qIndex: number) => {
    const newQuestions = [...questions];
    if (newQuestions[qIndex].answers) {
      newQuestions[qIndex].answers!.push({ text: "", isCorrect: false });
      setQuestions(newQuestions);
    }
  };

  const setCorrectAnswer = (qIndex: number, aIndex: number) => {
    const newQuestions = [...questions];
    if (newQuestions[qIndex].answers) {
      newQuestions[qIndex].answers = newQuestions[qIndex].answers!.map((ans, i) => ({ ...ans, isCorrect: i === aIndex }));
      setQuestions(newQuestions);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto p-4 lg:p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Criar Novo Quiz</h1>
          <Link to="/quiz/management" className="text-indigo-600 hover:text-indigo-800">
            &larr; Voltar para o gerenciamento
          </Link>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="mb-6">
            <label htmlFor="title" className="block text-lg font-semibold mb-2">Título do Quiz</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {questions.map((q, qIndex) => (
            <div key={qIndex} className="mb-6 p-4 border rounded-lg bg-gray-50">
              <label className="block text-md font-semibold mb-2">Questão {qIndex + 1}</label>
              <textarea
                value={q.text}
                onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                className="w-full p-2 border rounded-lg"
                rows={2}
              ></textarea>
              {q.type === "multiple-choice" && q.answers && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Respostas de múltipla escolha</h4>
                  {q.answers.map((ans, aIndex) => (
                    <div key={aIndex} className="flex items-center mb-2">
                      <input
                        type="radio"
                        name={`correct-answer-${qIndex}`}
                        checked={ans.isCorrect}
                        onChange={() => setCorrectAnswer(qIndex, aIndex)}
                        className="mr-2"
                      />
                      <input
                        type="text"
                        value={ans.text}
                        onChange={(e) => handleAnswerChange(qIndex, aIndex, e.target.value)}
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>
                  ))}
                  <button onClick={() => addAnswer(qIndex)} className="text-sm text-indigo-600 hover:underline">
                    Adicionar outra resposta
                  </button>
                </div>
              )}
            </div>
          ))}

          <div className="flex space-x-4 mb-6">
            <button onClick={() => addQuestion("multiple-choice")} className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
              Adicionar Questão de Múltipla Escolha
            </button>
            <button onClick={() => addQuestion("open-text")} className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
              Adicionar Questão Aberta
            </button>
          </div>

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            Salvar Quiz
          </button>
        </div>
      </main>
    </div>
  );
}
