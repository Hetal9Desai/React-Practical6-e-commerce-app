import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup } from '../src/components/SignUp/SignUp';
import { Signin } from '../src/components/SignIn/SignIn';
import { AuthProvider } from '../src/components/auth/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
