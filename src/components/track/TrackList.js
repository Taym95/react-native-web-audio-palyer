import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { Loading } from '../loading';

// We can use lazy with Suspense so we can have Code-Splitting in our react app

const TrackItem = React.lazy(() => import('./TrackItem'));

function TrackListComponent({ navigation, tracks }) {
    if (tracks.length === 0) {
        return <Loading />
    }
    return (
        <FlatList
            data={tracks}
            renderItem={({ item }) => {
                return <Suspense fallback={<div>Loading...</div>}>
                    <TrackItem track={item} navigation={navigation} />
                </Suspense>
            }}
            keyExtractor={track => track.id.toString()}
        />
    )
}

const mapStateToProps = state => ({ tracks: state.trackReducer.tracks })

export const TrackList = connect(
    mapStateToProps,
    null
)(TrackListComponent);
