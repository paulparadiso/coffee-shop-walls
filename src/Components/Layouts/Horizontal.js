import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import PxToV from './PxToV';
import Background from '../Background';
import LetterCardDisplay from '../LetterCardDisplay';
import WebpAnimation from '../WebpAnimation';
import Fader from '../Fader';
import FramedText from '../FramedText';
import { ConfigContext } from '../../Contexts/ConfigProvider';

const Horizontal = props => {

    const w = 1920.0;
    const h = 1080.0;

    const pxToV = new PxToV(w, h);

    const [config] = useContext(ConfigContext);

    const main = (
        <React.Fragment>
            <Background/>
            <WebpAnimation
                left={pxToV.toVw(-340)}
                width={54}
                animation="Lamp1.webp"
            >
            </WebpAnimation>
            <WebpAnimation
                left={pxToV.toVh(1199)}
                width={48}
                animation="Lightbulb2.webp"
            >
            </WebpAnimation>
            <WebpAnimation
                left={pxToV.toVw(1368)}
                top={pxToV.toVh(516)}
                width={58}
                animation="CoffeeShelf2.webp"
            ></WebpAnimation>
            <WebpAnimation
                left={pxToV.toVw(-471)}
                top={pxToV.toVh(522)}
                width={55}
                animation="CoffeeShelf1.webp"
            ></WebpAnimation>
            <LetterCardDisplay
                letterCardStartX={pxToV.toVw(292)}
                letterCardStartY={pxToV.toVh(171)}
                letterCardWidth={pxToV.toVw(58)}
                letterCardHeight={pxToV.toVh(121)}
                letterCardMaxPerRow={20}
                text={config.LetterBoard}
            >
            </LetterCardDisplay>
            <FramedText
                bg="black-tall"
                id="1"
                top="125px"
                quote={config.WoodFrame1.quote}
                attribution={config.WoodFrame1.attribution}
            >

            </FramedText>
            <Fader></Fader>
        </React.Fragment> 
    );

    return (
        main
    );

}

export default observer(Horizontal);