import { FETCH_PLAYLISTS, FETCH_PLAYLISTS_SUCCESS, FETCH_PLAYLISTS_ERROR } from './playlistsTypes'

const initialState = {
    loading: false,
    playlists: {},
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PLAYLISTS:
            return {
                ...state,
                loading: true
            }
        case FETCH_PLAYLISTS_SUCCESS:
            return {
                loading: false,
                playlists: action.payload,
                error: ''
            }
        case FETCH_PLAYLISTS_ERROR:
            return {
                loading: false,
                playlists: {},
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer