import React, { ReactNode } from "react";
import { AuthProvider as AuthContextProvider } from "../hooks/useAuth";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default AuthProvider;
