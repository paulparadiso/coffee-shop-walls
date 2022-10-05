import React, { useEffect, useState, useContext } from 'react';
import { ConfigContext } from '../Contexts/ConfigProvider';
import LetterCard from './LetterCard';
import './LetterCardDisplay.css';

const LetterCardDisplay = props => {

    const [letterCards, updateLetterCards] = useState([]);

    const getWords = text => {
        let words = text.split(' ');
        return words;
    }

    const [config, dispatch] = useContext(ConfigContext);

    const makeLetters = text => {
        let words = getWords(text);
        let currentRow = 0;
        let currentColumn = 0;
        updateLetterCards(letterCards => []);
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (word.length > (props.letterCardMaxPerRow - currentColumn)) {
                currentRow = currentRow + 1;
                currentColumn = 0;
            }
            for (let j = 0; j < word.length; j++) {
                let top = props.letterCardStartY + (currentRow * props.letterCardHeight);
                let left = props.letterCardStartX + (currentColumn * props.letterCardWidth)
                updateLetterCards(letterCards => [...letterCards,
                <LetterCard
                    key={`letter-${i}-${j}-${word.charAt(i)}`}
                    letter={word.charAt(j).toUpperCase()}
                    top={top}
                    left={left}
                >
                </LetterCard>
                ]);
                currentColumn += 1;
            }
            currentColumn += 1;
        }
    }

    useEffect(() => {
        setTimeout(() => makeLetters(config.LetterBoard), 2000);
    }, [config]);

    return (
        <div className="letter-card-display">
            {props.backgroundImage === 'vertical' ?
            <img className="letter-card-display-bars" src={require("../images/Letter Shelf-portrait.png")} alt=""></img>
            :
            <img className="letter-card-display-bars" src={require("../images/Letterboard Bars-01.png")} alt=""></img>
            }
            {letterCards}
        </div>
    )

}

export default LetterCardDisplay;