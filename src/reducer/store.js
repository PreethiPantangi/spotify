import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import AuthReducer from './auth/authReducer'
import ProfileReducer from './profile/profileReducers'
import PlaylistsReducer from './playlists/playlistsReducers'
import PlaylistReducer from './playlist/playlistReducers'
import RecentlyPlayedReducer from './recentlyPlayed/recentlyPlayedReducer'

const rootReducer = combineReducers({
    auth: AuthReducer,
    profile: ProfileReducer,
    playlists: PlaylistsReducer,
    playlist: PlaylistReducer,
    recentlyPlayed: RecentlyPlayedReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store