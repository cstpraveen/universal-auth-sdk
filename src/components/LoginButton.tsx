import React from "react";
import { useAuth } from "../hooks/useAuth";

interface LoginButtonProps {
  provider: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ provider }) => {
  const auth = useAuth();
  
  if (!auth) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { login } = auth;

  const handleLogin = () => {
    login({ provider, token: "dummy-token" });
  };

  return <button onClick={handleLogin}>Login with {provider}</button>;
};

export default LoginButton;
