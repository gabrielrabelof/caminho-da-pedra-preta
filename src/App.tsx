import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import StudentCourse from "./pages/StudentCourse";
import Quiz from "./pages/Quiz/Quiz";


const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/student/course" element = {<StudentCourse/>} />
          <Route path="/quiz" element = {<Quiz/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
