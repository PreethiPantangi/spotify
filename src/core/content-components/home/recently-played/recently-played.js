import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getRecentlyPlayed } from '../../../../reducer/index'
import { Link } from 'react-router-dom';
import './recently-played.css'

const RecentlyPlayedComponent = ({ recentlyPlayed, fullList }) => {

    const dispatch = useDispatch()

    const [tracks, setTracks] = useState([])

    useEffect(() => {
        dispatch(getRecentlyPlayed())
    }, [dispatch])

    useEffect(() => {
        if (recentlyPlayed) {
            const tracksData = []
            recentlyPlayed.forEach(track => {
                let artists = ''
                track.track.artists.forEach(artist => {
                    artists += artist['name'] + ', '
                })
                artists = artists.slice(0, -2)
                let data = {}
                data = {
                    'id': track.track.id,
                    'image': track.track.album.images[1].url,
                    'name': track.track.name.length > 18 ? track.track.name.slice(0, 18) + '...' : track.track.name,
                    'artists': artists.length > 22 ? artists.slice(0, 22) + '...' : artists
                }
                tracksData.push(data)
            });
            setTracks(tracksData)
        }
    }, [recentlyPlayed])

    return (
        <div className='recentlyPlayedComponent' >
            <div>
                <div className='rpc-heading'>Recently played</div>
                <Link to={{ pathname: '/recentlyPlayed', state: { data: fullList, pageName: 'Recently Played' } }}><div className='rpc-seeall' >See All</div></Link>
            </div>
            <div className='rpc-track' >
                {tracks && tracks.map(track =>
                    <div key={track.id} className='rpc-track-item' >
                        <div className='rpc-track-item-data' >
                            <div><img className='rpc-track-image' src={track.image} alt={track.name} /> </div>
                            <div className='rpc-track-names'>{track.name}</div>
                            <div className='rpc-track-artists'>{track.artists}</div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
}

const mapStateToProps = state => {
    const tracksData = []
    if (state.recentlyPlayed.recentlyPlayed.items) {
        state.recentlyPlayed.recentlyPlayed.items.forEach(track => {
            let artists = ''
            track.track.artists.forEach(artist => {
                artists += artist['name'] + ', '
            })
            artists = artists.slice(0, -2)
            let data = {}
            data = {
                'id': track.track.id,
                'image': track.track.album.images[1].url,
                'name': track.track.name.length > 18 ? track.track.name.slice(0, 18) + '...' : track.track.name,
                'artists': artists.length > 22 ? artists.slice(0, 22) + '...' : artists
            }
            tracksData.push(data)
        });
    }
    return {
        recentlyPlayed: state.recentlyPlayed && state.recentlyPlayed.recentlyPlayed && state.recentlyPlayed.recentlyPlayed.items && state.recentlyPlayed.recentlyPlayed.items.slice(0, 5),
        fullList: tracksData
    }
}

export default connect(mapStateToProps)(RecentlyPlayedComponent);