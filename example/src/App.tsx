import React from "react";
import { AuthProvider, LoginButton, LogoutButton, useAuth } from "universal-auth-sdk";

const App = () => {
  const { user } = useAuth();

  return (
    <AuthProvider>
      <div>
        <h1>Universal Auth SDK Example</h1>
        {user ? (
          <>
            <p>Welcome, {user.name}!</p>
            <LogoutButton />
          </>
        ) : (
          <LoginButton provider="google" />
        )}
      </div>
    </AuthProvider>
  );
};

export default App;
