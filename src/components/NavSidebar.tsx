import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, Users, LogOut } from "lucide-react";
import { useAuth } from "../context/auth";

const NavSidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-white shadow-lg flex flex-col items-center py-6 space-y-8">
      <div className="w-12 h-12 rounded-lg overflow-hidden">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>

      <nav className="flex flex-col space-y-6">
        <Link
          to="/dashboard/home"
          className={`p-3 rounded-lg ${
            isActive("/dashboard/home")
              ? "bg-teal-50 text-teal-600"
              : "text-gray-400 hover:bg-gray-50"
          }`}
        >
          <Home size={24} />
        </Link>
        <Link
          to="/dashboard/students"
          className={`p-3 rounded-lg ${
            isActive("/dashboard/students")
              ? "bg-teal-50 text-teal-600"
              : "text-gray-400 hover:bg-gray-50"
          }`}
        >
          <Users size={24} />
        </Link>
      </nav>

      <button
        onClick={handleLogout}
        className="p-3 rounded-lg text-red-500 hover:bg-red-50 mt-auto"
      >
        <LogOut size={24} />
      </button>
    </div>
  );
};

export default NavSidebar;
