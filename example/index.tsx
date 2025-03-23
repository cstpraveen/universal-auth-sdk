import React from "react";
import ReactDOM from "react-dom";
import AuthProvider from "../src/components/AuthProvider";
import LoginButton from "../src/components/LoginButton";
import LogoutButton from "../src/components/LogoutButton";

const App = () => {
  return (
    <AuthProvider>
      <LoginButton provider="OAuth" />
      <LogoutButton />
    </AuthProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
