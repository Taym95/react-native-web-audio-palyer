import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Footer } from '../footer';

function AudioPlayerComponent({ track }) {
    return (
        <Footer>
            <Text style={style}>{track ? track.title : ''}</Text>
            <figure>
                <audio
                    controls
                    src={track ? track.preview : ''} autoplay >
                    Your browser does not support HTML5 audio tag.
                </audio>
            </figure>
        </Footer>
    )
}

const style = {
    color: '#fff',
}

const mapStateToProps = state => ({ track: state.currentPlayedtrack.track })

export const AudioPlayer = connect(
    mapStateToProps,
    null
)(AudioPlayerComponent);