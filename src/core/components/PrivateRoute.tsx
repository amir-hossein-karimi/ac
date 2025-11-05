import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

export function PrivateRoute({
  children,
  redirectTo = "/login",
}: PrivateRouteProps) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login page but save the attempted URL
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
