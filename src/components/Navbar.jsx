import react from 'react'
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import logo from './images/logo.png'

function Navbar(){
    return (
        <nav className='nav-styles'>
            <div className='right-items'>
                <Link to = "/" className='logo-link'>
                    <img className = "logo" src = {logo} alt = "logo"></img>
                    <p className = "company-name">West Pine</p>
                </Link>
            </div>
            <div className='left-items'>
                <Link className = 'nav-link' to="/shop">Gallery</Link>
                <Link className = 'nav-link' to = "/booking">Booking Form</Link>
                <Link className = 'nav-link' to = "/contactus">Contact Us</Link>
            </div>
            
        </nav>
    )
}

export default Navbar;