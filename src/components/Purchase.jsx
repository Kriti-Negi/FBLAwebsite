import react, { useState} from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import images from '../images';
import BasicButton from './BasicButton';
import BasicInput from './BasicInput';
import '../styles/purchase.css'
import { Link } from 'react-router-dom';

function Purchase(){
    const [stage, setStage] = useState(0);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [cardInfo, setCardInfo] = useState("");

    const id = window.location.pathname.split("/")[2];
    console.log(id);
    const imageInfo = images["imageInfo"][id];

    function buttonToPurchaseFormClicked(){
        //setStage(1);
    }

    return (
        <div>
            <Navbar/>
            <div className='container' hidden = {stage !== 0}>
                <h3>{imageInfo.title}</h3>
                <div className='image-container'>
                    <img src = {imageInfo.url} alt = {imageInfo.title}></img>
                </div>
                <div className = "text-info">
                    <p className='description'>{imageInfo.description}</p>
                    <div className="image-size">
                        <p>Size: <span>{imageInfo.size}</span></p>
                    </div>
                    <Link to = "/shop">
                        <BasicButton
                            buttonText="Back to Gallery"
                            onButtonClicked={buttonToPurchaseFormClicked}
                        />
                    </Link>
                    
                </div>
            </div>
            <div hidden = {stage !== 1}>
                <BasicInput
                    
                />
                <BasicInput
                    
                />
                <BasicInput

                />
                <BasicButton

                />
            </div>
            <div hidden = {stage !== 2}>
                <h3>Thank you for purchasing from WestPine!</h3>
            </div>
            <Footer/>
        </div>
    )
}

export default Purchase;