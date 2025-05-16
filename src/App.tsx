import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup } from './components/SignUp/SignUp';
import { Signin } from './components/SignIn/SignIn';
import { AuthProvider } from './components/auth/AuthContext';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/signin"
          element={
            <AuthProvider>
              <Signin />
            </AuthProvider>
          }
        />

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
