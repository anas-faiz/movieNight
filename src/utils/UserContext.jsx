import { createContext } from "react";

const UserContext = createContext({
    User:{
        userName: "",
        password: "",
        displayName: ""
    }
});

export default UserContext;