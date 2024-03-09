import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TOKEN, isAuth } from '../Utils/Token';

const Header = () => {
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.setItem(TOKEN, "")
        isAuth = false
        navigate("/login")
    }
    return (
        <div>
            <ul className='header'>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/login">Login</Link>
                    <li><span >Logout</span></li>
                    <li><button onClick={() => logOut()}>Logout</button></li>
                </li>
            </ul>
        </div>
    );
}

export default Header;
