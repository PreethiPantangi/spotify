import { FETCH_USER_PROFILE, FETCH_USER_PROFILE_SUCCESS, FETCH_USER_PROFILE_ERROR } from './profileTypes'

const initialState = {
    loading: false,
    user: {},
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_PROFILE:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_PROFILE_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: ''
            }
        case FETCH_USER_PROFILE_ERROR:
            return {
                loading: false,
                user: {},
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer