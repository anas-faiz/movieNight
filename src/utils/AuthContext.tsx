import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [logInPage, setLogInPage] = useState(true);
  return (
    <AuthContext.Provider value={{ logInPage, setLogInPage }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
