import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Fader.css';

const Fader = props => {

    const faderRef = useRef();

    useEffect(() => {
        setTimeout(() => gsap.to(faderRef.current, {opacity: 0, duration: 1}), 3000);
    })

    return (
        <div className="fader" ref={faderRef}></div>
    );

}

export default Fader;