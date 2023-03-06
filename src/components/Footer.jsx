import react, { useState } from 'react'
import '../styles/footer.css'
import BasicButton from './BasicButton';
import BasicInput from './BasicInput';
function Footer(){
    const [subscribed, setSubscribed] = useState(false);

    return (
        <footer>
            <div className='footer'>
                <div className='right-footer'>
                    <h6 className = "subscribe">Subscribe to our Newsletter!</h6>
                    <div className = "inputs" hidden={subscribed}>
                        <div className='text-input' hidden={subscribed}>
                            <BasicInput
                                placeholderText = "Email"
                                changedInput = {() => {}}
                                color = "dark"
                            />
                        </div>
                        <div className = "button-input" hidden={subscribed}>
                            <BasicButton
                                buttonText="Subscribe!"
                                onButtonClicked = {() => {setSubscribed(!subscribed)}}
                            />
                        </div>
                    </div>
                    <p hidden={!subscribed}>Subscribed! Thank you!</p>
                </div>
                <div className = "left-footer">
                    <h6 className='socials-header'>Socials</h6>
                    <p className='footer-text'>LinkedIn: West-Pine-Photos</p>
                    <p className='footer-text'>Instagram: @westpinephotos</p>
                </div>
            </div>
            <p className='copyright'>@2023 westpinephotos by Sanskriti Negi and Tony Zhang. Images from Pixabay. Descriptions from ChatGPT</p>
        </footer>
    )
}

export default Footer;