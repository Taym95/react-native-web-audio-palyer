import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { getTrack } from '../api'
import { Loading } from '../components/loading';
import { useDispatch } from 'react-redux';
import { playTrack } from '../actions';

const useFetchTrackDetail = (trackId) => {
    const [trackDetail, setTrackDetail] = useState(null);
    const dispatch = useDispatch()
    useEffect(() => {
        getTrack(trackId).then(trackDetail => {
            setTrackDetail(trackDetail);
            dispatch(playTrack(trackDetail));
        });
    }, [trackId])

    return trackDetail;
}

const TrackDetails = ({ navigation, tracks }) => {
    const trackId = navigation.getParam('trackId');
    const trackDetail = useFetchTrackDetail(trackId);


    if (trackDetail) {
        return (
            <View style={styles.container}>
                <Button
                    color="#121212"
                    title="Go back"
                    onPress={() =>
                        navigation.navigate('Home')}
                />
                <View style={styles.trackDetailContainer}>
                    <Image
                        source={{ uri: trackDetail.album.cover_medium }}
                        style={styles.albumImg}
                    />
                    <Text style={styles.trackTitle}>{trackDetail.title}</Text>
                </View>
            </View>)
    } else {
        return <Loading />;
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    },
    albumImg: {
        width: 300,
        height: 300,
    },
    trackDetailContainer: {
        padding: 5,
        alignItems: 'center'
    },
    trackTitle: {
        marginTop: 5,
        fontSize : 20
    }
});

export default TrackDetails;
