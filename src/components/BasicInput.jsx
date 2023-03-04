import react from 'react';
import '../styles/inputs.css'
function BasicInput(props){
    return (
        <div>
            <input placeholder={props.placeholderText} onChange={(e) => props.changedInput(e)}></input>
        </div>
    )
}

export default BasicInput;