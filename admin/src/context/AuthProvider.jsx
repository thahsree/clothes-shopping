import { createContext, useState } from "react";


export const AuthContext = createContext()

export const AuthProvider = ({Children})=>{

    const [auth , setAuth] = useState({})

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {Children}
        </AuthContext.Provider>
    )
}