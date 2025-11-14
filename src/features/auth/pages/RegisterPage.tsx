import { useState } from "react";
import { AuthHeader } from "../components/AuthHeader/AuthHeader";
import { SignupForm } from "../components/SignupForm/SignupForm";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { login } from "../store/authSlice";
import { useAppDispatch } from "../hooks/useAuth";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSignup = async (
    name: string,
    email: string,
    password: string
  ) => {
    setIsLoading(true);
    setTimeout(() => {
      if (name && email && password) {
        const mockUser = {
          id: "1",
          email: email,
          name: name,
        };
        const mockToken = "mock-jwt-token-" + Date.now();
        dispatch(login({ user: mockUser, token: mockToken }));
      } else {
        toast.error("Please fill in all fields");
      }
      setIsLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <AuthHeader />
        <SignupForm onSubmit={handleSignup} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default RegisterPage;
