import React, { useContext,  useEffect,  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthDataContext } from '../context/AuthContext'

const Login = () => {
     
     const { login, } = useContext(AuthDataContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navgate = useNavigate()
    

    const LoginUser = () =>{
        const success = login(email,password)
        
        if (success)   
        {
            navgate('/dashboard')
        }else{
            console.log("Invalid Credentials");
        }
        
    }
   
  return (
    <div className='login'>
        <input type="text" placeholder='Enter Username' value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }}/><br/><br/>
        <input type="password" placeholder='Password' value={password}
        onChange={(e)=>{
            setPassword(e.target.value)
        }}/><br/><br/>
        <button onClick={LoginUser}>Sumbmit</button>
    </div>
  )
}

export default Login