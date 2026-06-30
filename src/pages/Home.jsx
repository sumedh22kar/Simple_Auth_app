import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home'>
      <h1>
        This is home Page
      </h1>
      <div >
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Home