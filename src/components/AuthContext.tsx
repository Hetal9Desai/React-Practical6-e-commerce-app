import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { User } from '../types/User/types';

interface AuthContextType {
  user: User | null;
  signup: (user: User) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('currentUser');
    return saved ? JSON.parse(saved) : null;
  });

  const signup = async ({ fullName, email, password }: User) => {
    const raw = localStorage.getItem('users');
    const users: User[] = raw ? JSON.parse(raw) : [];

    if (users.some(user => user.email === email)) {
      return Promise.reject(new Error('Email already registered'));
    }

    users.push({ fullName, email, password });
    localStorage.setItem('users', JSON.stringify(users));
  };

  const login = async (email: string, password: string) => {
    const raw = localStorage.getItem('users');
    const users: User[] = raw ? JSON.parse(raw) : [];
    const found = users.find(user => user.email === email && user.password === password);
    if (!found) {
      return Promise.reject(new Error('Invalid email or password'));
    }
    localStorage.setItem('currentUser', JSON.stringify(found));
    setUser(found);
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>{children}</AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
