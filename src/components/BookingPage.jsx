import react, { useDebugValue, useState } from 'react'
import BasicButton from './BasicButton';
import BasicInput from './BasicInput';
import BasicTextarea from './BasicTextarea';
import Footer from './Footer';
import Navbar from './Navbar';
import '../styles/forms.css'

function BookingPage(){
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [location, setLocation] = useState("");
    const [eventType, setEventType] = useState("");
    const [questions, setQuestions] = useState("");
    const [eventIsBooked, setEventIsBooked] = useState(false);
    
    function inputUpdated(event){
        if(event.target.placeholder === "Full Name"){
            setFullName(event.target.value);
        }else if(event.target.placeholder === "Email"){
            setEmail(event.target.value);
        }else if(event.target.placeholder === "Event Date and Time"){
            setDateTime(event.target.value);
        }else if(event.target.placeholder === "Location"){
            setLocation(event.target.value);
        }else if(event.target.placeholder === "Event type"){
            setEventType(event.target.value);
        }else if(event.target.placeholder === "Questions/Comments"){
            setQuestions(event.target.value);
        }
    }

    function bookEvent(){
        setEventIsBooked(true);
    }

    return (
        <div>
            <Navbar/>
            <div className='form' hidden={eventIsBooked}>
                <div className='form-header'>
                    <h2>Book an Event</h2>
                    <p>Typical cost is $30/hour</p>
                </div>
                
                <div className = "form-inputs" hidden={eventIsBooked}>
                    <BasicInput
                        placeholderText = "Full Name"
                        changedInput = {inputUpdated}
                    />
                    <BasicInput
                        placeholderText = "Email"
                        changedInput = {inputUpdated}
                    />
                    <BasicInput
                        placeholderText = "Event Date and Time"
                        changedInput = {inputUpdated}
                    />
                    <BasicInput
                        placeholderText = "Location"
                        changedInput = {inputUpdated}
                    />
                    <BasicInput
                        placeholderText = "Event Type"
                        changedInput = {inputUpdated}
                    />
                    <BasicTextarea
                        placeholderText = "Questions/Comments"
                        changedInput = {inputUpdated}
                    />
                    <div className = "btn-container">
                        <BasicButton
                            buttonText = "Book Event!"
                            onButtonClicked = {bookEvent}
                        />
                    </div>
                    
                </div>
            </div>
            
            <div className = "form-return" hidden={!eventIsBooked}>
                <p>Thank you, {fullName} for booking with WestPine!</p>
                <p>We have you down for {location} at {dateTime}.</p>
                
            </div>
            <Footer/>
        </div>
    )
}

export default BookingPage;