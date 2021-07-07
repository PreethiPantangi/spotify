import React, { useState } from 'react';
import './sidebar.css'
import logo from '../../assets/Spotify_Logo_White.png'
import { Link } from 'react-router-dom';

const SidebarComponent = () => {

    const menu = [
        { key: 0, name: 'Home', iconClass: 'fa fa-home', route: '/' },
        { key: 1, name: 'Search', iconClass: 'fa fa-search', route: '/search' },
        { key: 2, name: 'Your Library', iconClass: 'fab fa-spotify', route: '/collection' },
        { key: 3, name: 'Create Playlist', iconClass: 'fa fa-plus', route: '/createPlaylist' },
        { key: 4, name: 'Liked Songs', iconClass: 'far fa-heart', route: '/likedSongs' },
    ]

    const [selectedItem, setSelectedItem] = useState(0)

    return (
        <div className='sidebarComponent' >
            <img className='sc-logo' src={logo} alt='Spotify' />
            {menu.map(item =>
                <Link to={item.route} onClick={() => { setSelectedItem(item.key) }} key={item.key} className={selectedItem === item.key ? 'sc-menu-item sc-menu-item-selected' : 'sc-menu-item'}>
                    <div >
                        <i className={item.iconClass}></i>{item.name}
                    </div>
                </Link>
            )}
        </div>
    );
}

export default SidebarComponent;