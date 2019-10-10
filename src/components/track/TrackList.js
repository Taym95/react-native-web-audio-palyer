import React from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { Loading } from '../loading';
import { MemoizedTrackItem } from './TrackItem';


function TrackListComponent({ navigation, tracks }) {
    if (tracks.length === 0) {
        return <Loading />
    }
    return (
        <FlatList
            data={tracks}
            renderItem={({ item }) => <MemoizedTrackItem track={item} navigation={navigation} />}
            keyExtractor={track => track.id}
        />
    )
}

const mapStateToProps = state => ({ tracks: state.trackReducer.tracks })

export const TrackList = connect(
    mapStateToProps,
    null
)(TrackListComponent);
