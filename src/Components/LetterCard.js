import React, {useEffect, useRef} from 'react';
import {gsap} from "gsap";
import './LetterCard.css';

const specialCharacters = {
    '&': 'Letters_Ampersand.png',
    '@': 'Letters_At.png',
    ':': 'Letters_Colon.png',
    ',': 'Letters_Comma.png',
    '!': 'Letters_Exclamation.png',
    '“': 'Letters_Left Apos.png',
    '%': 'Letters_Percent.png',
    '.': 'Letters_Period.png',
    '?': 'Letters_Question.png', 
    '”': 'Letters_Right Apos.png',
    ';': 'Letters_Semi Colon.png'

}

const LetterCard = props => {

    const letterCardStyles = {
        top: `${props.top - (Math.random() * 1.5 + 1.5)}vh`,
        left: `${props.left}vw`,
        opacity: 0,
        transform: `rotate(${Math.random() * 10 - 5}deg)`
    }

    const cardRef = useRef();

    useEffect(() => {
        setTimeout(() => {
           gsap.to(cardRef.current, {opacity: 1, duration: 0.2, top: `${props.top}vh`, transform: 'rotate(0deg)', ease: "power4.out"})
        }, 500 + (Math.random() * 1250));
    });

    const resolveLetterImage = character => {
        if(specialCharacters.hasOwnProperty(character)){
            const letterImage = `${specialCharacters[character]}`
            return letterImage
        } else {
            const letterImage = `Letters_${character}.png`
            return letterImage;
        }
    }

    return (
        <div className="letter-card" style={letterCardStyles} ref={cardRef}> 
            {props.letter !== ' ' ?
                <img src={require(`../images/LetterCards/${resolveLetterImage(props.letter)}`)} alt=""/>
            :
            <div></div>
            }          
        </div>
    )

}

export default LetterCard;