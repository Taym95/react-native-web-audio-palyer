import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TrackList } from '../components';
import { useFetching } from '../hooks';
import { requestTrackList } from '../actions';

const Home = ({ navigation }) => {
    useFetching(requestTrackList);
    return (
        <View style={styles.container}>
            <TrackList navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20
    }
});

export default Home;