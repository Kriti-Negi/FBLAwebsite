import react from 'react';
import '../styles/inputs.css'
function BasicTextarea(props){
    return (
        <textarea placeholder={props.placeholderText} onChange={(e) => {props.changedInput(e)}}></textarea>
    )
}

export default BasicTextarea;