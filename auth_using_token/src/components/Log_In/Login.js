import React, { useState } from 'react';
import "./Login.css";

const Login = ({ setToken, setMessage,setLogout }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

   
    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = JSON.parse(localStorage.getItem('users'))
        console.log(userData)
        if (Array.isArray(userData)) {
            const user = userData.find(user => user.mail === email && user.password === password)

            if (user) {
                setToken(true)
                setErrorMessage("")
                setMessage(user.message)
                console.log("Sucess")
            } else {
                setErrorMessage("Enter proper mail_id and password")
            }
        } else {
            setErrorMessage("No user foun")
        }


    };
    

    return (
        <div className='login-wrapper'>
            <form onSubmit={handleSubmit}>
                <p>Enter your mail: </p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <p>Enter the password</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
                {/* <p>Want to create an account?</p>
                <button onClick={handleSignout}>Sigin</button>
                {errorMessage && <p className="error-message"><b>{errorMessage}</b></p>} */}

            </form>
        </div>
    );
};

export default Login;
