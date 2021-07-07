import React, { useEffect, useState } from 'react';
import './playlist.css'
import { connect, useDispatch } from 'react-redux';
import { getPlaylist } from '../../../reducer/index'

const PlaylistComponent = (props) => {

    const playlistId = props.location.pathname.split('/').slice(-1)[0]
    const playlistName = props.location.state['playlistName']
    const playlistImage = props.location.state['image']

    const [style, setStyle] = useState(false);
    const [currentTrackID, setCurrentTrackID] = useState(0);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlaylist(playlistId))
    }, [dispatch, playlistId])

    return (
        <div className='playlistComponent' >
            <div className='pc-info' >
                <div className='pc-info-left'>
                    <img src={playlistImage.url} alt={playlistName} />
                </div>
                <div className='pc-info-right'>
                    <div className='pc-info-right-content'>
                        <div><h4>PLAYLIST</h4></div>
                        <div><h1>{playlistName}</h1></div>
                        <div> {props.tracks && props.tracks.length} songs, {props.totalDuration}</div>
                    </div>
                </div>
            </div>
            <div className='pc-info-right-tracks' >
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>TRACK</th>
                            <th>ALBUM</th>
                            <th>DATE ADDED</th>
                            <th><i className="fas fa-clock"></i></th>
                        </tr>
                    </thead>
                    {props.tracks && props.tracks.map((track, index) => (
                        <tbody key={track.track.id}>
                            <tr
                                onMouseEnter={(e) => { setStyle(true); setCurrentTrackID(track.track.id) }}
                                onMouseLeave={(e) => { setStyle(false); setCurrentTrackID(track.track.id) }}
                            >
                                <td className='pc-info-right-tracks-play'>{style && track.track.id === currentTrackID ? <i class="fas fa-play"></i> : index + 1}</td>
                                <td>
                                    <div className="pc-info-right-tracks-cell-left">
                                        <div>
                                            {<img src={track.track.album['images'][2].url} height="40" width="40" alt={track.track.name} />}
                                        </div>
                                    </div>
                                    <div className='pc-info-right-tracks-cell-right' >
                                        <div>
                                            {track.track.name.length < 40 ? track.track.name : track.track.name.slice(0, 40) + '...'}
                                        </div>
                                        <div className='pc-info-right-tracks-artist' >
                                            {track.track.artists[0].name}
                                        </div>
                                    </div>
                                </td>
                                <td>{track.track.album.name.length < 40 ? track.track.album.name : track.track.album.name.slice(0, 40) + '...'}</td>
                                <td>{getDate(track.added_at)}</td>
                                <td>{getTime(track.track.duration_ms)}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    );
}

function getDate(d) {
    const [month, date, year] = (new Date(d)).toString().split(" ").slice(1, 4)
    return month + ' ' + date + ',' + year
}

function getTime(duration) {
    var seconds = (duration / 1000).toFixed(0);
    var minutes = Math.floor(seconds / 60);
    var hours = "";
    if (minutes > 59) {
        hours = Math.floor(minutes / 60);
        hours = (hours >= 10) ? hours : "0" + hours;
        minutes = minutes - (hours * 60);
        minutes = (minutes >= 10) ? minutes : "0" + minutes;
    }

    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    if (hours !== "") {
        return hours + ":" + minutes + ":" + seconds;
    }
    return minutes + ":" + seconds;
}

const mapStateToProps = state => {
    const tracks = state.playlist.playlist.tracks && state.playlist.playlist.tracks.items;
    const owner = state.playlist.playlist.owner;
    let time = 0
    state.playlist.playlist.tracks && state.playlist.playlist.tracks.items &&
        state.playlist.playlist.tracks.items.forEach(item => {
            time += item.track.duration_ms
        });
    const duration = getTime(time).toString().split(':')
    let totalDuration = duration.length === 3 ? parseInt(duration[0]) + ' hr ' + parseInt(duration[1]) + ' min' : parseInt(duration[0]) + ' min ' + parseInt(duration[1]) + ' sec'
    return {
        tracks,
        owner,
        totalDuration
    }
}

export default connect(mapStateToProps)(PlaylistComponent);