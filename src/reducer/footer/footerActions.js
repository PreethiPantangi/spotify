import { SET_FOOTER_INFO } from './footerTypes'

export const setFooterInfo = (trackInfo) => {
    return {
        type: SET_FOOTER_INFO,
        payload: trackInfo
    }
}