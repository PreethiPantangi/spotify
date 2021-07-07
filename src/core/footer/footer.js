import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './footer.css'

const FooterComponent = ({ trackId }) => {

    console.log(trackId);

    useEffect(() => {
        if (trackId !== 0) {
            axios.get(`https://api.spotify.com/v1/tracks/${trackId}`)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    })

    return (
        <div className='footerComponent' >
            <div className='fc-song-info'>
                Details
            </div>
            <div className='fc-song-player'>Player</div>
            <div className='fc-song-controls'>Controls</div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        trackId: state.songInfo.trackInfo
    }
}

export default connect(mapStateToProps)(FooterComponent);