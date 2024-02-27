import React from 'react'
import{Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='navBar'>
                <div className='home'>
                    <Link to="/">Home</Link>
                </div>
                <div className='favourites'>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className='team'>
                    <Link to="/team">Team</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar