import react from 'react'
import '../styles/button.css'
function BasicButton(props){
    return (
        <button onClick={() => {props.onButtonClicked()}}>{props.buttonText}</button>
    )
}

export default BasicButton;