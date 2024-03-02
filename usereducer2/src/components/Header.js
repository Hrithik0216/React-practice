import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/about">Dashboard</Link></li>
            </ul>
        </div>
    )
}

export default Header