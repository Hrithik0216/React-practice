import React from 'react';
import { TOKEN,setAuth } from '../Utils/Token';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const login = () => {
        console.log("Login button is triggered")
        localStorage.setItem(TOKEN, "addbhdhdsadhiasdsabihabdhidbs")
        console.log(localStorage.getItem(TOKEN))
        setAuth(true);
        navigate("/")
    }
    return (
        <div>
            <button onClick={() => login()}>Login</button>
        </div>
    );
}

export default Login;
