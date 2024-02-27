import React from 'react'
import './Signin.css'
import { useState } from 'react'


const Signin = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () =>{
        console.log("Hello")
    }
    return (
        <div className="signin-wrapper">
            <h1>Please Sign-In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Enter your name: </p>
                    <input
                        type="text"
                        name=""
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <p>Enter your phone number: </p>
                    <input
                        type="number"
                        name=""
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <p>Mail: </p>
                    <input
                        type="email"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <p>Password: </p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Signin