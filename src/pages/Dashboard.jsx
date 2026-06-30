import React, { useContext, useEffect, useState } from 'react'
import { AuthDataContext } from '../context/AuthContext'

const Dashboard = () => {
  const { user }=useContext(AuthDataContext)
  
  return (
  <div className='Dashboard'>
        <div>
          <h1>Dashboard</h1><br/><br/>
          <h1>Welcome {user?.name} </h1>
          </div>
    </div>
  )
}

export default Dashboard