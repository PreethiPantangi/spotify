import React from 'react';
import './home.css'
import RecentlyPlayedComponent from './recently-played/recently-played'

const HomeComponent = () => {

    return (
        <div className='homeComponent' >
            <RecentlyPlayedComponent />
        </div>
    );
}


export default HomeComponent;