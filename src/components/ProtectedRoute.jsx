import React, { useContext } from 'react'
import Login from '../pages/Login'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { AuthDataContext } from '../context/AuthContext'
const ProtectedRoute = () => {


    const { isLoggedIn } = useContext(AuthDataContext);

    if(isLoggedIn){
       return <Outlet/>
    } 
  return <Navigate to='/login' />
    
       
        
    
  
}

export default ProtectedRoute