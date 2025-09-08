import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
    logInPage:true,
    setLogInPage: ()=>{}
});

export function AuthProvider({ children }) {
  const [logInPage, setLogInPage] = useState(false);
  return (
    <AuthContext.Provider value={{ logInPage, setLogInPage }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
