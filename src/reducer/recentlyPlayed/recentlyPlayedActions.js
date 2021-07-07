import axios from 'axios'
import { FETCH_RECENTLY_PLAYED, FETCH_RECENTLY_PLAYED_SUCCESS, FETCH_RECENTLY_PLAYED_ERROR } from './recentlyPlayedTypes'
import { getRecentlyPlayedUrl } from '../../api/api'

export const fetchRecentlyPlayed = () => {
    return {
        type: FETCH_RECENTLY_PLAYED
    }
}

export const fetchRecentlyPlayedSuccess = (recentlyPlayed) => {
    return {
        type: FETCH_RECENTLY_PLAYED_SUCCESS,
        payload: recentlyPlayed
    }
}

export const fetchRecentlyPlayedError = (error) => {
    return {
        type: FETCH_RECENTLY_PLAYED_ERROR,
        payload: error
    }
}

export const getRecentlyPlayed = () => {
    return dispatch => {
        dispatch(fetchRecentlyPlayed())
        axios.get(getRecentlyPlayedUrl())
            .then(res => {
                dispatch(fetchRecentlyPlayedSuccess(res.data))
            })
            .catch(error => {
                dispatch(fetchRecentlyPlayedError(error))
            })
    }
}