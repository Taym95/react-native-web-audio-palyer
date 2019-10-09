import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { getTrack } from '../api'
import { NotFound } from '../components/notFound';
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
                <Text>{trackDetail.title}</Text>
            </View>)
    } else {
        return <NotFound />;
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    },
});

export default TrackDetails;
