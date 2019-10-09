import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function TrackItem({ navigation }) {

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('TrackDetails', {
                trackId: 'id',
            })}
            style={[styles.item]}
        >
            <Text style={styles.title}>{"title"}</Text>
            <Text style={styles.title}>></Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
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