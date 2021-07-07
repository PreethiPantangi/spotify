import axios from 'axios'
import { FETCH_PLAYLIST, FETCH_PLAYLIST_SUCCESS, FETCH_PLAYLIST_ERROR } from './playlistTypes'
import { getPlaylistUrl } from '../../api/api'

export const fetchPlaylist = () => {
    return {
        type: FETCH_PLAYLIST
    }
}

export const fetchPlaylistSuccess = (playlist) => {
    return {
        type: FETCH_PLAYLIST_SUCCESS,
        payload: playlist
    }
}

export const fetchPlaylistError = (error) => {
    return {
        type: FETCH_PLAYLIST_ERROR,
        payload: error
    }
}

export const getPlaylist = (playlistId) => {
    return dispatch => {
        dispatch(fetchPlaylist())
        axios.get(getPlaylistUrl(playlistId))
            .then(res => {
                dispatch(fetchPlaylistSuccess(res.data))
            })
            .catch(error => {
                dispatch(fetchPlaylistError(error))
            })
    }
}