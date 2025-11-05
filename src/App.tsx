import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './core/store/store';
import { Navigation } from './core/components/Navigation';
import { ScrollToTop } from './core/components/ScrollToTop';
import { HomePage } from './features/home/components/HomePage';
import { ServicesPage } from './features/services/components/ServicesPage';
import { ProfilePage } from './features/profile/components/ProfilePage';
import { LoginPage } from './features/auth/components/LoginPage';
import { PrivateRoute } from './core/layouts/PrivateRoute';
import { Toaster } from './components/ui/sonner';

function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Private Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <div className="min-h-screen">
                <Navigation />
                <HomePage />
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/services"
          element={
            <PrivateRoute>
              <div className="min-h-screen">
                <Navigation />
                <ServicesPage />
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <div className="min-h-screen">
                <Navigation />
                <ProfilePage />
              </div>
            </PrivateRoute>
          }
        />
        
        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}
