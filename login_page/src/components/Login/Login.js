import React from 'react'
import { useState } from 'react'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const handleSubmit = () =>{
        console.log("handle submit functuion is invoked")
    }
    return (
        <div className='login-wrapper'>
            <form onSubmit={handleSubmit}>

                <p>Enter your mail: </p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <p>Enter the password</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
                
            </form>
        </div>
    )
}

export default Login