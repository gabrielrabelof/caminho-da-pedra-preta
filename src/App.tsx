import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/auth";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import StudentHome from "./pages/StudentHome";
import StudentCourse from "./pages/StudentCourse";
import CourseDetails from "./pages/CourseDetails";
import QuizManagement from "./pages/QuizManagement";
import CreateQuiz from "./pages/CreateQuiz";
import SupportMaterialPage from "./pages/SupportMaterialPage";
import Quiz from "./pages/Quiz/Quiz";

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/lp" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Admin Routes */}
      {user?.role === 'admin' ? (
        <>
          <Route path="/admin/course/:courseId" element={<CourseDetails />} />
        </>
      ) : (
        <Route path="/admin/course/:courseId" element={<Navigate to="/login" />} />
      )}

      {/* Student Routes */}
      {user?.role === 'student' ? (
        <>
          <Route path="/student/course/:courseId" element={<StudentCourse />} />
          <Route path="/student/home" element={<StudentHome />} />
          <Route path="/student/course/:courseId/material/:materialId" element={<SupportMaterialPage />} />
        </>
      ) : (
        <>
          <Route path="/student/course/:courseId" element={<Navigate to="/login" />} />
          <Route path="/student/home" element={<Navigate to="/login" />} />
        </>
      )}

      <Route path="/quiz/management" element={<QuizManagement />} />
      <Route path="/quiz/create" element={<CreateQuiz />} />
      <Route path="/quiz/:quizId" element={<Quiz />} />
    </Routes>
  );
}


const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;