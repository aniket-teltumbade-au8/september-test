import { ADD_TASK, REMOVE_TASK, UPDATE_TASK, DISPLAY_TASK } from "../actionTypes"

const initialState = {
    tasks:null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_TASK:
        return { ...state, tasks:payload }
    case REMOVE_TASK:
        return { ...state, tasks:payload }
    case UPDATE_TASK:
        return { ...state, tasks:payload }
    case DISPLAY_TASK:
        return { ...state, tasks:payload }

    default:
        return state
    }
}
