import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Styles/Navbar.css'
const Navbar = () => {
    const navStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }
    return (
        <div className='navbar'>
            <nav>
                <ul>
                    <li>
                        <NavLink style={navStyles} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink style={navStyles} to='/about' >About</NavLink>
                    </li>
                    <li>
                        <NavLink style={navStyles} to='/products'>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Navbar