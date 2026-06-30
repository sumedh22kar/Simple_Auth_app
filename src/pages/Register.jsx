import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [contact, setContact] = useState('')
   const [password, setPassword] = useState('')
   const navigate= useNavigate()
   const submitUser = () =>{
    const user = {
         name,
         email,
         contact,
         password
    }
    localStorage.setItem("user",JSON.stringify(user))
    navigate("/login");
    console.log("User Saved");
    
   }
   
  return (
    <div className='regi'>
         <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)}/><br/><br/>
         <input type="email" placeholder='Enter Email' value={email}onChange={(e) => setEmail(e.target.value)}/><br/><br/>
         <input type="text" placeholder='Enter Contact' value={contact}onChange={(e)=> setContact(e.target.value)}/><br/><br/>
        <input type="password" placeholder='Password' value={password}onChange={(e) => setPassword(e.target.value)}/><br/><br/>
        <button onClick={submitUser}>Sumbit</button>
    </div>
  )
}

export default Register