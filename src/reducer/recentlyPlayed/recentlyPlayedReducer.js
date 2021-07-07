import { FETCH_RECENTLY_PLAYED, FETCH_RECENTLY_PLAYED_SUCCESS, FETCH_RECENTLY_PLAYED_ERROR } from './recentlyPlayedTypes'

const initialState = {
    loading: false,
    recentlyPlayed: {},
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECENTLY_PLAYED:
            return {
                ...state,
                loading: true
            }
        case FETCH_RECENTLY_PLAYED_SUCCESS:
            return {
                loading: false,
                recentlyPlayed: action.payload,
                error: ''
            }
        case FETCH_RECENTLY_PLAYED_ERROR:
            return {
                loading: false,
                recentlyPlayed: {},
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer
