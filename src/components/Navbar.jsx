import react from 'react'
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
function Navbar(){
    return (
        <nav className='nav-styles'>
            <div className='right-items'>
                
            </div>
            <div className='left-items'>
                <Link className = 'nav-link' to="/">Home</Link>
                <Link className = 'nav-link' to="/shop">Gallery</Link>
                <Link className = 'nav-link' to = "/booking">Booking Form</Link>
                <Link className = 'nav-link' to = "/contactus">Contact Us</Link>
            </div>
            
        </nav>
    )
}

export default Navbar;