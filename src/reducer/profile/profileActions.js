import axios from 'axios'
import { FETCH_USER_PROFILE, FETCH_USER_PROFILE_SUCCESS, FETCH_USER_PROFILE_ERROR } from './profileTypes'
import { userProfileUrl } from '../../api/api'

export const fetchUserProfile = () => {
    return {
        type: FETCH_USER_PROFILE
    }
}

export const fetchUserProfileSuccess = (user) => {
    return {
        type: FETCH_USER_PROFILE_SUCCESS,
        payload: user
    }
}

export const fetchUserProfileError = (err) => {
    return {
        type: FETCH_USER_PROFILE_ERROR,
        payload: err
    }
}


export const fetchUserDetails = () => {
    return dispatch => {
        dispatch(fetchUserProfile())
        axios.get(userProfileUrl())
            .then(res => {
                sessionStorage.setItem('uid', res.data.id);
                dispatch(fetchUserProfileSuccess(res.data))
            })
            .catch(err => {
                console.log(err);
                dispatch(fetchUserProfileError(err))
            })
    }
}