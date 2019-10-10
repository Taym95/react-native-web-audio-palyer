import React from 'react'
import { View } from 'react-native';


export function Footer({ children }) {
    return (
        <View style={style}>
            {children}
        </View>
    )
}

const style = {
    position: 'fixed',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor: '#121212',
    flexDirection: 'column',
    height: 100,
    alignItems: 'center',
}