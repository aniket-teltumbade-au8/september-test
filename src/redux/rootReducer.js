import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import galleryReducer from "./reducers/galleryReducer";
import taskReducer from "./reducers/taskReducer";

export const rootReducer = combineReducers({
        authState: authReducer,
        galState:galleryReducer,
        taskState:taskReducer
  });