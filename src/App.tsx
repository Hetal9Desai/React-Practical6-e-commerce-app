import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';
import { Layout } from './components/Layout/Layout';
import { Signup } from './components/SignUp/SignUp';
import { Signin } from './components/SignIn/SignIn';
import { NotFound } from './components/NotFound/NotFound';
import { ProductsPage } from './components/Product/ProductsPage';
import { ProfilePage } from './components/Header/ProfilePage';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { ErrorBoundary } from './components/Product/ErrorBoundary';

const App: React.FC = () => (
  <AuthProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<ProtectedRoute reverse />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route path="/products" element={<ProtectedRoute />}>
            <Route
              index
              element={
                <ErrorBoundary>
                  <ProductsPage />
                </ErrorBoundary>
              }
            />
          </Route>

          <Route path="/profile" element={<ProtectedRoute />}>
            <Route index element={<ProfilePage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
