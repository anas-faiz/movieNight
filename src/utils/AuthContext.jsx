import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  logInPage: boolean;
  setLogInPage: React.Dispatch<React.SetStateAction<boolean>>;
};

// Default value is `undefined` so we can catch missing provider errors
const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [logInPage, setLogInPage] = useState(false);

  return (
    <AuthContext.Provider value={{ logInPage, setLogInPage }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
