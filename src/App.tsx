import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup } from './components/SignUp';
import { Signin } from './components/SignIn';
import { AuthProvider } from './components/AuthContext';

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
