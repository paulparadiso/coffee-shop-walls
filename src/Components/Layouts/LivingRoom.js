import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import PxToV from './PxToV';
import './Layouts.css';
import Background from '../Background';
import LetterCardDisplay from '../LetterCardDisplay';
import ChalkText from '../ChalkText';
import FramedText from '../FramedText';
import WebpAnimation from '../WebpAnimation';
import Clock from '../Clock';
import Fader from '../Fader';
import { ConfigContext } from '../../Contexts/ConfigProvider';

const LivingRoom = props => {

    const w = 9594.0;
    const h = 1080.0;

    const pxToV = new PxToV(w, h);

    const [config] = useContext(ConfigContext);

    return (
        <React.Fragment>
            <Background/>
            <Clock />
            <ChalkText
                text={config.ChalkText}
            />
            <FramedText
                bg="grey-wide"
                id="1"
                top="522px"
                quote={config.WoodFrame1.quote}
                attribution={config.WoodFrame1.attribution}
            />
            <FramedText
                bg="black-tall"
                id="2"
                top="265px"
                quote={config.WoodFrame2.quote}
                attribution={config.WoodFrame2.attribution}
            />
            <FramedText
                bg="black-wide"
                id="3"
                top="623.57px"
                quote={config.WoodFrame3.quote}
                attribution={config.WoodFrame3.attribution}
            />
            <FramedText
                bg="grey-square"
                id="4"
                top="215px"
                quote={config.WoodFrame4.quote}
                attribution={config.WoodFrame4.attribution}
            />
            <FramedText
                bg="black-wide"
                id="5"
                top="443.31px"
                quote={config.WoodFrame5.quote}
                attribution={config.WoodFrame5.attribution}
            />
            <FramedText
                bg="grey-wide"
                id="6"
                top="602px"
                quote={config.WoodFrame6.quote}
                attribution={config.WoodFrame6.attribution}
            />
            <FramedText
                bg="black-wide"
                id="7"
                top="193px"
                quote={config.WoodFrame7.quote}
                attribution={config.WoodFrame7.attribution}
            />
            <FramedText
                bg="black-square"
                id="8"
                top="213px"
                quote={config.WoodFrame8.quote}
                attribution={config.WoodFrame8.attribution}
            />
            <FramedText
                bg="grey-square"
                id="9"
                top="658px"
                quote={config.WoodFrame9.quote}
                attribution={config.WoodFrame9.attribution}
            />
            <FramedText
                bg="black-wide"
                id="10"
                top="335px"
                quote={config.WoodFrame10.quote}
                attribution={config.WoodFrame10.attribution}
            />
            <LetterCardDisplay
                letterCardStartX={pxToV.toVw(335)}
                letterCardStartY={pxToV.toVh(195)}
                letterCardWidth={pxToV.toVw(65)}
                letterCardHeight={pxToV.toVh(136)}
                letterCardMaxPerRow={20}
                text={config.LetterBoard}
            ></LetterCardDisplay>
            <WebpAnimation
                left={pxToV.toVw(925)}
                top={pxToV.toVh(-1)}
                width={14.1}
                animation="Lamp1.webp"
            ></WebpAnimation>
            <WebpAnimation
                left={pxToV.toVw(2434)}
                top={pxToV.toVh(418)}
                width={11.31}
                animation="CoffeeShelf1.webp"
            ></WebpAnimation>
            <WebpAnimation
                left={pxToV.toVw(2865)}
                top={pxToV.toVh(-8)}
                width={11.29}
                animation="Lightbulb1.webp"
            ></WebpAnimation>
            <WebpAnimation
                left={pxToV.toVw(3975)}
                top={pxToV.toVh(-66)}
                width={11.4}
                animation="Lightbulb2.webp"
            ></WebpAnimation>
            <WebpAnimation
                left={pxToV.toVw(4840)}
                top={pxToV.toVh(-10)}
                width={16.09}
                animation="Lamp2_alien.webp"
            ></WebpAnimation>
            <WebpAnimation
                left={pxToV.toVw(5940)}
                top={pxToV.toVh(440)}
                width={10.92}
                animation="CoffeeShelf2.webp"
            ></WebpAnimation>
            <WebpAnimation
                left={pxToV.toVw(6890)}
                top={pxToV.toVh(-22)}
                width={8.2}
                animation="Lightbulb1.webp"
            ></WebpAnimation>
            <WebpAnimation
                left={pxToV.toVw(6567)}
                top={pxToV.toVh(9)}
                width={11.86}
                animation="Lightbulb2.webp"
            ></WebpAnimation>
            <Fader/>
        </React.Fragment>
    );

}

export default observer(LivingRoom);