import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/features/auth/hooks/useAuth";
import { login } from "@/features/auth/store/authSlice";
import { toast } from "sonner";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/core/components/ui/Tabs";
import { AuthHeader } from "@/features/auth/components/AuthHeader/AuthHeader";
import { LoginForm } from "@/features/auth/components/LoginForm/LoginForm";
import { SignupForm } from "@/features/auth/components/SignupForm/SignupForm";

export function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Mock authentication - accept any email/password for demo
      if (email && password) {
        const mockUser = {
          id: "1",
          email: email,
          name: email.split("@")[0],
        };
        const mockToken = "mock-jwt-token-" + Date.now();

        dispatch(login({ user: mockUser, token: mockToken }));
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error("Please enter email and password");
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleSignup = async (
    name: string,
    email: string,
    password: string
  ) => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (name && email && password) {
        const mockUser = {
          id: "1",
          email: email,
          name: name,
        };
        const mockToken = "mock-jwt-token-" + Date.now();

        dispatch(login({ user: mockUser, token: mockToken }));
        toast.success("Account created successfully!");
        navigate("/");
      } else {
        toast.error("Please fill in all fields");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <AuthHeader />

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
          </TabsContent>

          <TabsContent value="signup">
            <SignupForm onSubmit={handleSignup} isLoading={isLoading} />
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center text-muted-foreground">
          <p>Demo app - Use any email and password to login</p>
        </div>
      </div>
    </div>
  );
}
