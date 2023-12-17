import React, { useState } from "react";


const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: () => { },
    logout: () => { }
});


export const AuthContextProvider = (props) =>{

    const [token , setToken] = useState('')

    const userLogedIn = !!token

    const loginHandler = (token) =>{
        setToken(token)
    }

    const logOutHandler = () =>{
        setToken('')
    }

    const contextValue = {
        token : token,
        isLoggedIn : userLogedIn,
        login : loginHandler,
        logout : logOutHandler
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext