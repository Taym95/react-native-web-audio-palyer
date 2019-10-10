import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// We can speed up the component re-rendring process 
// by using React.memo(), wih will memoized our component


function TrackItem({ navigation, track }) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('TrackDetails', {
                trackId: track.id,
            })}
            style={[styles.item]}
        >
            <Text style={styles.title} numberOfLines={1}>{track.title}</Text>
            <Text style={styles.title}>></Text>
        </TouchableOpacity>
    )
}

const MemoizedTrackItem = React.memo(TrackItem);

export default MemoizedTrackItem;

const styles = StyleSheet.create({
    item: {
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#121212',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        color: '#fff',
        fontSize: 32,
    },
});