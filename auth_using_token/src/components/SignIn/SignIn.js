import React, { useState } from 'react';
import './SignIn.css';

const SignIn = ({ setToken, setMessage, message }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!password || !mail) {
            return;
        }

        const newData = {
            mail: mail,
            password: password,
            message: `Hey ${name}! Your mail is ${mail} and the phone number is ${phone}`
        };

        // Retrieve existing users data from localStorage or initialize as an empty array if no data exists
        let existingData = JSON.parse(localStorage.getItem('users'));

        if (!Array.isArray(existingData)) {
            existingData = [];
        }

        // Append the new data to the existing array
        const updatedData = [...existingData, newData];

        // Stringify and store the updated array back to localStorage
        localStorage.setItem('users', JSON.stringify(updatedData));


        setMessage(`Hey ${name}! Your mail is ${mail} and the phone number is ${phone}`);


        setName('');
        setPhone('');
        setMail('');
        setPassword('');
        // setMessage('')
        setToken(true);
    };


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

            {message}
        </div>
    );
};

export default SignIn;
