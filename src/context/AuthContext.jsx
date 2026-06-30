import React, { createContext, useEffect, useState } from 'react'

export const AuthDataContext = createContext()
const AuthContext = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return JSON.parse(localStorage.getItem("isLoggedIn")) || false;
});
    const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
});

    const login = (email, password) =>{
        const data = localStorage.getItem("user")
        const users = JSON.parse(data)
            if (!users) {
            return false;
             }
          if (
            email === users.email &&
            password === users.password
        ){
            setUser(users)
        setIsLoggedIn(true)
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        return true;
        }
        return false;
    }
    const logout = () =>{
      setUser(null)
      setIsLoggedIn(false)
       localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user")
    }
    
  return (
    
        <AuthDataContext.Provider value={{login, 
                                          user,
                                          isLoggedIn,
                                          logout}}>
            {props.children}
        </AuthDataContext.Provider>
    
  )
}

export default AuthContext