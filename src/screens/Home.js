import React from 'react'
import { TrackList } from '../components';

const Home = (props) => {
    return (
        <TrackList {...props}/>
    )
}

Home.navigationOptions = {
    title: 'Home',
};

export default Home;