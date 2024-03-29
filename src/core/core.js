import './core.css'
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SidebarComponent from './sidebar/sidebar';
import PlaylistsComponent from './playlists/playlists';
import NavigationComponent from './navigation/navigation';
import ProfileComponent from './profile/profile'
import HomeComponent from './content-components/home/home'
import SearchComponent from './content-components/search/search'
import LibraryComponent from './content-components/library/library'
import CreatePlaylistComponent from './content-components/create-playlist/create-playlist'
import LikedSongsComponent from './content-components/liked-songs/liked-songs';
import PlaylistComponent from './playlists/playlist/playlist';
import FooterComponent from './footer/footer'
import SeeAllComponent from './content-components/home/see-all/see-all'

const CoreComponent = () => {
    return (
        <div>
            <div className='core-left' >
                <div className='core-left-logo'>
                    <SidebarComponent />
                </div>
                <hr size='1' />
                <div className='core-left-playlists'>
                    <PlaylistsComponent />
                </div>
            </div>
            <div className='core-right' >
                <div className='core-profile'>
                    <div className='core-profile-navigation'>
                        <NavigationComponent />
                    </div>
                    <div className='core-profile-uname' ><ProfileComponent /></div>
                </div>
                <div className='core-content'>
                    <Switch>
                        <Route exact path='/' component={HomeComponent}></Route>
                        <Route exact path='/search' component={SearchComponent}></Route>
                        <Route exact path='/collection' component={LibraryComponent}></Route>
                        <Route exact path='/createPlaylist' component={CreatePlaylistComponent}></Route>
                        <Route exact path='/likedSongs' component={LikedSongsComponent}></Route>
                        <Route exact path='/playlist/:id' component={PlaylistComponent} />
                        <Route exact path='/:seeAllType' component={SeeAllComponent} />
                    </Switch>
                </div>
            </div>
            <div className='core-footer' >
                <FooterComponent />
            </div>
        </div>
    );
}

export default CoreComponent;