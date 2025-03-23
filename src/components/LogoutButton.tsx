import React from "react";
import { useAuth } from "../hooks/useAuth";

const LogoutButton: React.FC = () => {
  const auth = useAuth();

  if (!auth) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { logout } = auth;
  
  return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;
