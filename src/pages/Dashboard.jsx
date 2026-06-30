import React, { useContext, useEffect, useState } from 'react'
import { AuthDataContext } from '../context/AuthContext'
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  
  const { user , logout}=useContext(AuthDataContext)
  const navigate = useNavigate()

  const LogoutUser = () =>{
    logout();
    navigate("/");
  }
  
  return (
  <div className='Dashboard'>
        <div>
          <h1>Dashboard</h1><br/><br/>
          <h1>Welcome {user?.name} </h1>
          </div>
          <button onClick={LogoutUser}>
            Logout
          </button>
    </div>
  )
}

export default Dashboard