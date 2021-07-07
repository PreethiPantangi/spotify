import axios from "axios";

const baseUrl = 'https://api.spotify.com/v1'

export const setAuthHeader = () => {
    axios.interceptors.request.use(
        config => {
            if (sessionStorage.getItem('access_token')) {
                config.headers['Authorization'] = 'Bearer ' + sessionStorage.getItem('access_token')
            }
            return config
        },
        error => {
            Promise.reject(error)
        }
    )
}

export const userProfileUrl = () => {
    return `${baseUrl}/me`
}

export const getUserPlaylistUrl = () => {
    return `${baseUrl}/me/playlists`
}

export const getPlaylistUrl = (playlistId) => {
    return `${baseUrl}/playlists/${playlistId}`
}

export const getRecentlyPlayedUrl = () => {
    return `${baseUrl}/me/player/recently-played`
}