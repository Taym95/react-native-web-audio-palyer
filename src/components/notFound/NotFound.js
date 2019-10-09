import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

export function NotFound() {
    return (
        <View style={styles.container}>
            <Text><span role="img" aria-label="">🤷‍🤷🤷‍</span>!!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 200
    },
});