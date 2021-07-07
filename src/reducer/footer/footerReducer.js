import { SET_FOOTER_INFO } from './footerTypes'

const initialState = {
    trackInfo: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FOOTER_INFO:
            return {
                trackInfo: action.payload
            }
        default:
            return state
    }
}

export default reducer