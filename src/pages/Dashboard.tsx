import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavSidebar from "../components/NavSidebar";
import AdminHome from "./AdminHome";
import AdminStudents from "./AdminStudents";
import StudentHome from "./StudentHome";
import { useAuth } from "../context/auth";

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <NavSidebar />
      <div className="ml-20 p-8">
        <Routes>
          {user?.role === 'admin' && (
            <>
              <Route path="home" element={<AdminHome />} />
              <Route path="students" element={<AdminStudents />} />
            </>
          )}
          {user?.role === 'student' && (
            <Route path="home" element={<StudentHome />} />
          )}
          <Route index element={<Navigate to="home" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;