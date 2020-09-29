import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import galleryReducer from "./reducers/galleryReducer";

export const rootReducer = combineReducers({
        authState: authReducer,
        galState:galleryReducer
  });