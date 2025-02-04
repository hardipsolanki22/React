import React from "react";
import { useContext } from "react";

const userContext = React.createContext({
    setUser : () => {},
    setPass : () => {}
})

export default userContext

export const UserProvider = userContext.Provider

export const useUser = () => {
    return useContext(userContext)
}