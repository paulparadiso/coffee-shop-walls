import { React, useEffect, useRef } from 'react';
import './Clock.css';

const minuteHand12 = -180;
const hourHand12 = -90;
let currentTime = "";

const Clock = props => {

    //const [currentTime, updateCurrentTime] = useState("");
    const minuteHandRef = useRef(0);
    const hourHandRef = useRef(1);

    const updateTime = () => {
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const displayHours = hours + (minutes / 60.0);
        const time = `${hours}:${minutes}`;
        if(time !== currentTime) {
            const minutePosition = minuteHand12 + (360.0 * (minutes / 60.0));
            const hourPosition = hourHand12 + (360.0 * (displayHours / 12.0));
            minuteHandRef.current.style.transform = `rotate(${minutePosition}deg)`;
            hourHandRef.current.style.transform = `rotate(${hourPosition}deg)`;
            currentTime = time;
        }
    }

    useEffect(() => {
        setInterval(() => updateTime(), 1000);
    }, []);

    return (
        <div>
            <div className="clock-body">
            </div>
            <div className="hour-hand" ref={hourHandRef}>
            </div>
            <div className="minute-hand" ref={minuteHandRef}>
            </div>
        </div>
    )

}

export default Clock;