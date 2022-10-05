import { createContext, useState, useEffect } from 'react';

export const ResolutionContext = createContext();

const ratios = [
    {'ratio': 1.77, 'resolution': 'horizontal'},
    {'ratio': 0.5625, 'resolution': 'vertical'},
    {'ratio': 8.88, 'resolution': 'living-room'},
    {'ratio': 10, 'resolution': 'charter-house'},
]

const ResolutionProvider = ({children}) => {

    const [resolution, setResolution] = useState('');

    const resolveResolution = (w, h) => {
        let ratio = w / h;
        let closest = 10;
        let closestResolution = '';
        ratios.map(r => {
            let difference = Math.abs(ratio - r.ratio);
            if(difference < closest) {
                closest = difference;
                closestResolution = r.resolution;
            }
        })
        return closestResolution;
    }

    const handleResize = () => {
        let windowResolution = resolveResolution(window.innerWidth, window.innerHeight);
        setResolution(windowResolution);
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    }, []);

    return(
        <ResolutionContext.Provider value={resolution}>
            {children}
        </ResolutionContext.Provider>
    )

}

export default ResolutionProvider;