import react, {useState} from 'react';
import BasicButton from './BasicButton';
import BasicInput from './BasicInput';
import BasicTextarea from './BasicTextarea';
import Footer from './Footer';
import Navbar from './Navbar';

function ContactUs(){
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [otherComments, setOtherComments] = useState("");
    const [formIsVisible, setIsVisible] = useState(true);

    function inputUpdated(event){
        if(event.target.placeholder === "Full Name"){
            setFullName(event.target.value);
        }else if(event.target.placeholder === "Email"){
            setEmail(event.target.value);
        }else if(event.target.placeholder === "Question/Message/Comment"){
            setOtherComments(event.target.value);
        }
    }

    function onMessageSent(){
        setIsVisible(false);
    }
    return (
        <div>
            <Navbar/>

            <div className = "form" hidden={!formIsVisible}>
                <h2 className='form-header'>Contact Us</h2>
                <div className = "form-inputs">
                    <BasicInput
                            placeholderText = "Full Name"
                            changedInput = {inputUpdated}
                    />
                    <BasicInput
                            placeholderText = "Email"
                            changedInput = {inputUpdated}
                    />
                    <BasicTextarea
                        placeholderText = "Question/Message/Comment"
                        changedInput = {inputUpdated}
                    />
                    <div className = "btn-container">
                        <BasicButton
                            buttonText = "Send Message"
                            onButtonClicked = {onMessageSent}
                        />
                    </div>
                </div>
            </div>
            <div className = "form-return" hidden={formIsVisible}>
                <p>Thank you, {fullName} for your message!</p>
                <p>We will get back to you in 1-2 buisness days</p>
            </div>
            
            <Footer/>
        </div>
    )
}

export default ContactUs;