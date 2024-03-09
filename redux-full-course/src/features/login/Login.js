import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDetails } from './LoginSlice';

const Login = () => {
    const user = useSelector(state => state.user.value)
    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [age, setAge] = useState("")

    return (
        <div>
            <h1>Profile Info</h1>
            <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} value={name} />
            <input type="text" placeholder='Enter Mail' onChange={(e) => setMail(e.target.value)} value={mail} />
            <input type="text" placeholder='Enter Age' onChange={(e) => setAge(e.target.value)} value={age} />
            <button onClick={() => {
                dispatch(changeDetails(
                    { name: name, mail: mail, age: age }
                ))
            }}>Change</button>
        </div>
    );
}

export default Login;
