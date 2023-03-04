import react from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import images from '../images';
import Card from './Card';
import '../styles/gallery.css'

function Shop(){

    function changeScreen(){}

    return (
        <div>
            <Navbar/>
            <h1 className='cards-heading'>Gallery</h1>
            <div className = "cards">
                {images["imageInfo"].map((element, key) => {return <Card key = {key} imgIndex={key} imgUrl={element.url} description={element.description} title={element.title} goToNewScreen={changeScreen}/> })}
            </div>
            <Footer/>
        </div>
    )
}

export default Shop;