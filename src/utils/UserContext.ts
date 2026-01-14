import { createContext } from "react";

export type UserType = {
  username: string;
  password: string;
  displayName: string;
};

export type UserContextType = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

export const UserContext = createContext<UserContextType | null>(null);
