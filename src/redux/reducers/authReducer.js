import { SET_CURRENT_USER, CLEAR_CURRENT_USER } from "../actionTypes"

const initialState = {
    user:null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SET_CURRENT_USER:
        const userJson=JSON.stringify(payload)
        localStorage.setItem('user',userJson)
        return { ...state, user:payload }

    case CLEAR_CURRENT_USER:
        localStorage.removeItem('user')
        return { ...state, user:null }

    default:
        return state
    }
}
