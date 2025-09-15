import React, { useState } from "react";
import { LogIn, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    navigate("/dashboard");
  };

  const switchToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="w-20 h-20 bg-teal-500 rounded-lg flex items-center justify-center mx-auto mb-8">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Faça login na sua conta
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w-md mx-auto">
          Não tem conta?{" "}
          <a href="#" onClick={(e) => { e.preventDefault(); switchToSignup(); }} className="font-medium text-teal-600 hover:text-teal-500 cursor-pointer">
            Crie uma agora
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-2xl sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="pl-10 pr-3 py-3 appearance-none rounded-lg relative block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  placeholder="Digite seu email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="pl-10 pr-3 py-3 appearance-none rounded-lg relative block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  placeholder="Digite sua senha"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Lembrar-me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-teal-600 hover:text-teal-500">
                  Esqueceu sua senha?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LogIn className="h-5 w-5 text-teal-400 group-hover:text-teal-300" aria-hidden="true" />
                </span>
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
