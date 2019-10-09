import React from 'react';
import { Footer } from './footer';

export function AudioPlayer() {
    return (
        <Footer>
            <figure>
                <audio
                    controls
                    src=''>
                    Your browser does not support HTML5 audio tag.
                </audio>
            </figure>
        </Footer>
    )
}
