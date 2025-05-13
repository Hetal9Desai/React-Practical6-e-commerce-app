import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { User } from '../../types/User/types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('currentUser');
    return saved ? JSON.parse(saved) : null;
  });

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

  return <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
