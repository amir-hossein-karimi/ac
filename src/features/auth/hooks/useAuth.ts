import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState, AppDispatch } from "@/core/store/store";
import type { User } from "../store/authSlice";
import { authApi } from "@/core/store/api/authApi";
import {
  login as loginAction,
  logout as logoutAction,
} from "../store/authSlice";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const [loginMutation] = authApi.useLoginMutation();
  const [logoutMutation] = authApi.useLogoutMutation();

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        const result = await loginMutation({ email, password }).unwrap();
        // Update auth slice so redux-persist will persist it
        if (result && result.user && result.token) {
          dispatch(loginAction({ user: result.user, token: result.token }));
        }
        return result;
      } catch (error) {
        throw error;
      }
    },
    [loginMutation, dispatch]
  );

  const logout = useCallback(async () => {
    try {
      await logoutMutation().unwrap();
      // Clear auth state in store
      dispatch(logoutAction());
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      // Still clear local state even if server logout fails
      dispatch(logoutAction());
      navigate("/login");
    }
  }, [logoutMutation, navigate, dispatch]);

  return {
    isAuthenticated: auth.isAuthenticated,
    user: auth.user,
    token: auth.token,
    login,
    logout,
  };
};

// Type guard to check if user is authenticated
export const isUserAuthenticated = (user: User | null): user is User => {
  return user !== null;
};
