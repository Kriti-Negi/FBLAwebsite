import react from 'react'
import { Link } from 'react-router-dom';
import BasicButton from './BasicButton';
import '../styles/card.css'

function Card(props){
    return(
        <div className='card'>
            <img className = "card-image" src = {props.imgUrl} alt = {props.description}></img>
            <p className = "card-title">{props.title}</p>
            <p className='card-description'>{props.description.substring(0, 50)}..</p>
            <Link to = {"/purchase/" + props.imgIndex}>
                <BasicButton
                    buttonText="View Info"
                    onButtonClicked = {props.goToNewScreen}
                />
            </Link>
        </div>
    )
}

export default Card;