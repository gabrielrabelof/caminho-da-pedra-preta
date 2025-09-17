import { createContext, useContext } from "react";

interface User {
  role: 'admin' | 'student';
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (role: 'admin' | 'student') => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};