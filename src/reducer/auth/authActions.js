import { AUTH_TOKEN } from './authTypes'

export const setAuthToken = (token) => {
    return {
        type: AUTH_TOKEN,
        playload: token
    }
}

