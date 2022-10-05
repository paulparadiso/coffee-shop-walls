import './App.css';
import { useEffect, useContext } from 'react';
import Layout from './Components/Layouts/Layout';
import { ConfigContext } from './Contexts/ConfigProvider';
import ResolutionProvider from './Contexts/ResolutionProvider';

function App() {

    const [config, dispatch] = useContext(ConfigContext);

    const scriptLoaded = () => {
        const quotes = window.quotes;
        dispatch({
            'type': 'SET',
            'payload': quotes
        })
    }

    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.onload = () => scriptLoaded();
        script.src = './Config.js';
        document.body.appendChild(script);
    }, [])

    return (
        <ResolutionProvider>
            <Layout/>
        </ResolutionProvider>
    );
}

export default App;

