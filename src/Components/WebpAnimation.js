import React, { useEffect, useRef } from 'react';
import './WebpAnimation.css';

const WebpAnimation = props => {

    const imgRef = useRef(0);

    const reset = () => {
        const currentSrc = imgRef.current.src;
        imgRef.current.src = '';
        imgRef.current.src = currentSrc;
        imgRef.current.style={opacity: 1}
    }

    useEffect(() => {
        setTimeout(() => reset(), 4000);
    }, []);

    return (
        <div className="webp-animation-container" style={{top:`${props.top}vh`, left:`${props.left}vw`, width: `${props.width}vw`}}>
            <img className="webp-animation" src={require(`../animations/${props.animation}`)} alt="" ref={imgRef} style={{opacity: 0}}/>
        </div>
    )

}

export default WebpAnimation;