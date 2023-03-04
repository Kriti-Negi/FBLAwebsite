import react from 'react';
import '../styles/inputs.css'
function BasicInput(props){
    return (
        <div>
            <input className = {props.color && "opposite"} placeholder={props.placeholderText} onChange={(e) => props.changedInput(e)}></input>
        </div>
    )
}

export default BasicInput;