import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { getFromLocalStorage, setToLocalStorage } from '../../utils/storageUtils';
import type { User } from '../../types/User/types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    return getFromLocalStorage<User>('currentUser');
  });

  const login = async (email: string, password: string) => {
    const users = getFromLocalStorage<User[]>('users') || [];
    const found = users.find(user => user.email === email && user.password === password);
    if (!found) {
      return Promise.reject(new Error('Invalid email or password'));
    }
    setToLocalStorage('currentUser', found);
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
