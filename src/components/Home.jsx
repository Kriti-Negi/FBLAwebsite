import react from 'react'
import BasicButton from './BasicButton';
import Footer from './Footer';
import Navbar from './Navbar';
import img from './images/groupImage.png'
import { Link } from 'react-router-dom';
import '../styles/homeStyles.css'

function Home(){
    return (
        <div>
            <Navbar/>
            <div className = "header-banner">
                <div className = "left">
                    <img src = "https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126_1280.jpg" alt = "camera"></img>
                </div>
                <div className='right'>
                    <h1 className = "header-banner-title">West Pine Photos</h1>
                    <h3 className = "header-banner-subheading">Photos for now. Moments for the past. Memories for the Future.</h3>
                </div>
            </div>
            <div className='hero-banner'>
                <div className='hero-banner-text'>
                    <h1 className = "hero-banner-heading">For the Special Moments</h1>
                    <p className='hero-banner-subheading'>Affordable Professional Photography for birthday parties, weddings, graduation celebrations, and more.</p>
                </div>
                <div className='hero-banner-button'>
                    <Link to = "/booking">
                        <BasicButton
                            buttonText="Book Your Event Now"
                            onButtonClicked={() => {}}
                        />
                    </Link>
                </div>
            </div>
            <div className='gallery-banner'>
                <div className='left'>
                    <div className='gallery-text'>
                        <h2>Gallery</h2>
                        <p>Browse through our endless selection of photos</p>
                    </div>
                    <div className='gallery-button'>
                        <Link to = "/shop">
                            <BasicButton
                                buttonText="Visit the Gallery"
                                onButtonClicked={() => {}}
                            /> 
                        </Link>
                    </div>
                </div>
                <div className='right'>
                    <img src={img} alt = "various images"></img>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;