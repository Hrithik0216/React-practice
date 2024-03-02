import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul className='header'>
                <li><Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
