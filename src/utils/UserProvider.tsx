import { useState, type ReactNode } from "react"
import UserContext from "./UserContext";

type UserProviderProps= {
    children :ReactNode
}

const UserProvider = ({children}: UserProviderProps)=>{
const [user,setUser] = useState({
    username: "",
    password: "",
    displayName:"",
});

return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
)
};

export default UserProvider;