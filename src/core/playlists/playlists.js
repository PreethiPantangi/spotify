import React, { useEffect, useState } from 'react';
import './playlists.css'
import { connect, useDispatch } from 'react-redux';
import { getPlaylists } from '../../reducer/index';
import { Link } from 'react-router-dom';

const PlaylistsComponent = ({ playlists }) => {

    const [selectedPlaylist, setSelectedPlaylist] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlaylists())
    }, [dispatch])

    return (
        <div className='playlistsComponent' >
            {playlists && playlists.map(playlist =>
                <Link onClick={() => { setSelectedPlaylist(playlist.id) }} className={selectedPlaylist === playlist.id ? 'pc-playlist-item pc-playlist-item-selected' : 'pc-playlist-item'} key={playlist.id}>
                    <div >
                        {playlist.name}
                    </div>
                </Link>
            )}
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state.playlists.playlists.items)
    return {
        playlists: state.playlists.playlists && state.playlists.playlists.items
    }
}

export default connect(mapStateToProps)(PlaylistsComponent);