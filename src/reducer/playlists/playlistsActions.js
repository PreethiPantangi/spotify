import axios from 'axios'
import { FETCH_PLAYLISTS, FETCH_PLAYLISTS_SUCCESS, FETCH_PLAYLISTS_ERROR } from './playlistsTypes'
import { getUserPlaylistUrl } from '../../api/api'

export const fetchPlaylists = () => {
    return {
        type: FETCH_PLAYLISTS
    }
}

export const fetchPlaylistsSuccess = (playlists) => {
    return {
        type: FETCH_PLAYLISTS_SUCCESS,
        payload: playlists
    }
}

export const fetchPlaylistsError = (error) => {
    return {
        type: FETCH_PLAYLISTS_ERROR,
        payload: error
    }
}

export const getPlaylists = () => {
    return dispatch => {
        dispatch(fetchPlaylists())
        axios.get(getUserPlaylistUrl())
            .then(res => {
                dispatch(fetchPlaylistsSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchPlaylistsError(err))
            })
    }
}