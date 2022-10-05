import { useContext } from 'react';
import Vertical from './Vertical';
import Horizontal from './Horizontal';
import LivingRoom from './LivingRoom';
import CharterHouse from './CharterHouse';
import { ResolutionContext } from '../../Contexts/ResolutionProvider';

const Layout = props => {

    let layout = <div></div>

    const resolution = useContext(ResolutionContext);

    switch (resolution) {
        case 'vertical':
            layout = 
                <Vertical className='vertical'
                >
                </Vertical>
            break;
        case 'horizontal':
            layout =
                <Horizontal className='horizontal'
                >
                </Horizontal>
            break;
        case 'living-room':
            layout =
                <LivingRoom className='living-room'
                >
                </LivingRoom>
            break;
        case 'charter-house':
            layout = 
                <CharterHouse className='charter-house'
                >
                </CharterHouse>
            break;  
        case 'charter-house-device-mode':
            layout = 
                <CharterHouse className='charter-house'
                >
                </CharterHouse>
            break;
        default:
            break;
    }


    return (
        <div className={resolution}>
            {layout}
        </div>
    )

};

export default Layout