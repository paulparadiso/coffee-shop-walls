import React, { useContext } from 'react';
import ResolutionProvider, { ResolutionContext } from '../../Contexts/ResolutionProvider';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

const ResolutionProviderTest = () => {

    const resolution = useContext(ResolutionContext);
    
    return (
        <p>{resolution}</p>
    )

}

describe('<ResolutionProvider/> - All Resolutions', () => {
    [
        {'width': 1920, 'height': 1080, 'resolution': 'horizontal'},
        {'width': 1080, 'height': 1920, 'resolution': 'vertical'},
        {'width': 9594, 'height': 1080, 'resolution': 'living-room'},
        {'width': 17760, 'height': 1706, 'resolution': 'charter-house'}
    ].forEach(({width, height, resolution}) => {
        test(`Testing ${resolution}`, () => {
            
            render (
                <ResolutionProvider>
                    <ResolutionProviderTest/>
                </ResolutionProvider>
            );
            
            global.innerWidth = width;
            global.innerHeight = height;

            act(() => {
                global.dispatchEvent(new Event('resize'));
            });

            expect(screen.getByText(resolution)).toBeInTheDocument();

        })
    })
})
