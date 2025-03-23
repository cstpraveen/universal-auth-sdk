import { useAuth } from "../hooks/useAuth";

const LoginButton = ({ provider }) => {
  const { login } = useAuth();
  
  const handleLogin = () => {
    login({ provider, token: "dummy-token" });
  };

  return <button onClick={handleLogin}>Login with {provider}</button>;
};

export default LoginButton;