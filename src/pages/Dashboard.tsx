import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavSidebar from "../components/NavSidebar";
import AdminHome from "./AdminHome";
import AdminStudents from "./AdminStudents";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavSidebar />
      <div className="ml-20 p-8">
        <Routes>
          <Route path="home" element={<AdminHome />} />
          <Route path="students" element={<AdminStudents />} />
          <Route path="settings" element={<div>Settings Page</div>} />
          <Route index element={<Navigate to="home" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
