import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import PxToV from './PxToV';
import Background from '../Background';
import Clock from '../Clock';
import LetterCardDisplay from '../LetterCardDisplay';
import WebpAnimation from '../WebpAnimation';
import Fader from '../Fader';
import { ConfigContext } from '../../Contexts/ConfigProvider';

const Vertical = props => {

    const w = 1080.0;
    const h = 1920.0;

    const pxToV = new PxToV(w, h);

    const [config] = useContext(ConfigContext);

    return (
        <React.Fragment>
            <Background/>
            <Clock/>
            <LetterCardDisplay 
                letterCardStartX={pxToV.toVw(51)}
                letterCardStartY={pxToV.toVh(631)}
                letterCardWidth={pxToV.toVw(57.4)}
                letterCardHeight={pxToV.toVh(129)}
                letterCardMaxPerRow={17}
                backgroundImage="vertical"
                text={config.LetterBoard}
            />
            <WebpAnimation
                left={pxToV.toVw(-76)}
                top={pxToV.toVh(1300)}
                width={113.7}
                animation="CoffeeShelf2.webp"
            ></WebpAnimation>
            <Fader/>
        </React.Fragment>
    );
}

export default observer(Vertical);
