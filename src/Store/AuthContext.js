import React, { useEffect, useState } from "react";


const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: () => { },
    logout: () => { }
});


export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token')

    const [token, setToken] = useState(initialToken)

    const userLogedIn = !!token

    const loginHandler = (token) => {
        setToken(token)
        localStorage.setItem('token', token)
    }

    const logOutHandler = () => {
        setToken('')
        localStorage.removeItem('token')
    }


    // auto logout
    setTimeout(() => {
        // alert('Session expired')
        localStorage.removeItem('token')
        setToken('')
    }, 2000)


    const contextValue = {
        token: token,
        isLoggedIn: userLogedIn,
        login: loginHandler,
        logout: logOutHandler
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext