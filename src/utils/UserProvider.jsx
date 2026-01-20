import { useState, type ReactNode } from "react";
import { UserContext, type UserType } from "./UserContext";

type UserProviderProps = {
  children: ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserType>({
    username: "",
    password: "",
    displayName: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
