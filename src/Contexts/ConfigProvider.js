import { createContext, useReducer } from 'react';

export const ConfigContext = createContext(); 

const defaultConfig = {
    "LetterBoard": "Thank you for all",
    "WoodFrame1": {
        "quote": "Do your work, be honest, keep your word, help when you can, be fair",
        "attribution": "J.P. Morgan, Jr."
    },
    "ChalkText" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "WoodFrame2": {
        "quote": "Do your work, be honest, keep your word, help when you can, be fair",
        "attribution": "J.P. Morgan, Jr."
    },
    "WoodFrame3": {
        "quote": "Do your work, be honest, keep your word, help when you can, be fair",
        "attribution": "J.P. Morgan, Jr."
    },
    "WoodFrame4": {
        "quote": "Do your work, be honest, keep your word, help when you can, be fair",
        "attribution": "J.P. Morgan, Jr."
    },
    "WoodFrame5": {
        "quote": "Do your work, be honest, keep your word, help when you can, be fair",
        "attribution": "J.P. Morgan, Jr."
    },
    "WoodFrame6": {
        "quote": "Do your work, be honest, keep your word, help when you can, be fair",
        "attribution": "J.P. Morgan, Jr."
    },
    "WoodFrame7": {
        "quote": "Do your work, be honest, keep your word, help when you can, be fair",
        "attribution": "J.P. Morgan, Jr."
    },
    "WoodFrame8": {
        "quote": "Do your work, be honest, keep your word, help when you can, be fair",
        "attribution": "J.P. Morgan, Jr."
    },
    "WoodFrame9": {
        "quote": "Do your work, be honest, keep your word, help when you can, be fair",
        "attribution": "J.P. Morgan, Jr."
    },
    "WoodFrame10": {
        "quote": "Do your work, be honest, keep your word, help when you can, be fair",
        "attribution": "J.P. Morgan, Jr."
    },
    "id": 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET':
            state = action.payload;
        default:
            state = action.payload;
    }
    return state;
}

const ConfigProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, defaultConfig);

    return(
        <ConfigContext.Provider value={[state, dispatch]}>
            {children}
        </ConfigContext.Provider>
    )

}

export default ConfigProvider;