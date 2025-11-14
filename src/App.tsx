import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/core/store/store";
import { Spinner } from "@/core/components/ui/loading";
import { Navigation } from "@/core/components/Navigation";
import { ScrollToTop } from "@/core/components/ScrollToTop";
import { HomePage } from "@/features/home/pages/HomePage";
import { ServicesPage } from "@/features/services/pages/ServicesPage";
import { ProfilePage } from "@/features/profile/pages/ProfilePage";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { PrivateRoute } from "@/core/layouts/PrivateRoute";
import { Toaster } from "@/core/components/ui/sonner";
import RegisterPage from "./features/auth/pages/RegisterPage";

function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
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
      <PersistGate
        persistor={persistor}
        loading={
          <div className="flex min-h-screen items-center justify-center">
            <Spinner size="lg" />
          </div>
        }
      >
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
}
