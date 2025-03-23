import { AuthProvider as AuthContextProvider } from "../hooks/useAuth";

const AuthProvider = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default AuthProvider;