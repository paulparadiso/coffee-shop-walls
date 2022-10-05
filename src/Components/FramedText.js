import React, { useEffect, useRef } from 'react';
import './FramedText.css';
import { gsap } from 'gsap';

const FramedText = props => {

    const frameRef = useRef(0);

    useEffect(() => {
        setTimeout(() => {
            //frameRef.current.style.top = props.top;
            const randomRotation = Math.random() * 30.0 - 15.0;
            const randomTime = Math.random() * 2.0 + 2.0;
            let val = parseFloat(props.top);
            let unit = props.top.replace(val.toString(), '');
            let upperVal = val - 100;
            if(unit === 'vh') {
                upperVal = val - 0.056;
            }
            frameRef.current.style.top = `${upperVal}${unit}`
            frameRef.current.style.transform = `rotateZ(${randomRotation * -1}deg)`;
            //gsap.to(frameRef.current, {top: props.top, duration: randomTime, ease: "bounce.out"});
            gsap.to(frameRef.current, {top: props.top, duration: 0.25});
            //gsap.to(frameRef.current, {rotationZ: `${randomRotation}deg`, duration: randomTime * 2, ease: "elastic.out(2, 0.4)"});
            gsap.to(frameRef.current, {rotationZ: `${randomRotation}deg`, duration: 1, ease: "elastic.out(2, 0.4)"});
        }, 4000);
    }, []);

    return (
        <div className={`framed-text ${props.bg}-${props.id}`} ref={frameRef}>
            <img src={require(`../images/Frames/wood-${props.bg}.png`)} className="frame-image" alt=""></img>
            <div className={`framed-text-${props.bg}-${props.id}`}>
                <div className={`framed-text-quote-${props.id}`}>{props.quote}</div>
                <div className={`framed-text-attribution-${props.id}`}>-{props.attribution}</div>
            </div>
        </div>
    );

}

export default FramedText;