import { AUTH_TOKEN } from './authTypes'

const initialState = {
    loading: false,
    authToken: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_TOKEN:
            return {
                loading: false,
                authToken: action.payload
            }
        default:
            return state
    }
}

export default reducer