import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import './Layouts.css';
import Background from '../Background';
import LetterCardDisplay from '../LetterCardDisplay';
import WebpAnimation from '../WebpAnimation';
import FramedText from '../FramedText';
import Clock from '../Clock';
import ChalkText from '../ChalkText';
import Fader from '../Fader';
import { ConfigContext } from '../../Contexts/ConfigProvider';

const CharterHouse = props => {

    const [config] = useContext(ConfigContext);

    return (
        <React.Fragment>
            <Background/>
            <Clock />
            <ChalkText
                text={config.ChalkText}
            />
            <LetterCardDisplay
                letterCardStartX={3.6}
                letterCardStartY={22}
                letterCardWidth={0.7}
                letterCardHeight={15.24}
                letterCardMaxPerRow={20}
                text={config.LetterBoard}
            />
            <FramedText
                bg="black-square"
                id="1"
                top="27.02vh"
                quote={config.WoodFrame1.quote}
                attribution={config.WoodFrame1.attribution}
            />
            <FramedText
                bg="grey-square"
                id="2"
                top="10.82vh"
                quote={config.WoodFrame2.quote}
                attribution={config.WoodFrame2.attribution}
            />
            <FramedText
                bg="grey-wide"
                id="3"
                top="28.6vh"
                quote={config.WoodFrame3.quote}
                attribution={config.WoodFrame3.attribution}
            />
            <FramedText
                bg="black-square"
                id="4"
                top="16.76vh"
                quote={config.WoodFrame4.quote}
                attribution={config.WoodFrame4.attribution}
            />
            <WebpAnimation
                left={-5.74}
                top={-0.23}
                width={19.04}
                animation="Lamp2_alien.webp"
            ></WebpAnimation>
            <WebpAnimation
                left={31.27}
                top={-8.9}
                width={17.45}
                animation="Lightbulb1.webp"
            ></WebpAnimation>
            <WebpAnimation
                left={32.83}
                top={31.82}
                width={12.54}
                animation="CoffeeShelf1.webp"
            ></WebpAnimation>
            <WebpAnimation
                left={48.15}
                top={0.11}
                width={13.96}
                animation="Lamp2_alien.webp"
            ></WebpAnimation>
            <WebpAnimation
                left={63.96}
                top={-4.27}
                width={12.75}
                animation="Lightbulb1.webp"
            ></WebpAnimation>
            <WebpAnimation
                left={64.8}
                top={34.4}
                width={12.31}
                animation="CoffeeShelf2.webp"
            ></WebpAnimation>
            <WebpAnimation
                left={75.97}
                top={0}
                width={17.07}
                animation="Lightbulb1.webp"
            ></WebpAnimation>
            <Fader/>
        </React.Fragment>
    );

}

export default observer(CharterHouse);