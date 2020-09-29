import { ALBUM_LISTING } from "../actionTypes"

const initialState = {
    album:null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ALBUM_LISTING:
        return { ...state, album:payload }

    default:
        return state
    }
}
