import "./AuthHeader.css";

export function AuthHeader() {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex h-16 w-16 bg-blue-600 rounded-xl items-center justify-center mb-4">
        <span className="text-white text-2xl">B</span>
      </div>
      <h1 className="mb-2">Welcome to BluePro</h1>
      <p className="text-muted-foreground">Sign in to access your account</p>
    </div>
  );
}
