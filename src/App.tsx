import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';
import { Signup } from './components/SignUp/SignUp';
import { Signin } from './components/SignIn/SignIn';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

const App: React.FC = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute reverse />}>
          <Route
            path="/login"
            element={
              <AuthProvider>
                <Signin />
              </AuthProvider>
            }
          />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
