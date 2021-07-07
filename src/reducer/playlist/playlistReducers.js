import { FETCH_PLAYLIST, FETCH_PLAYLIST_SUCCESS, FETCH_PLAYLIST_ERROR } from './playlistTypes'

const initialState = {
    loading: false,
    playlist: {},
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PLAYLIST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PLAYLIST_SUCCESS:
            return {
                loading: false,
                playlist: action.payload,
                error: ''
            }
        case FETCH_PLAYLIST_ERROR:
            return {
                loading: false,
                playlist: {},
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer