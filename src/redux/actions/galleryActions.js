import { ALBUM_LISTING } from "../actionTypes";
import { axios } from "axios";

export const listAlbum = () => async (dispatch) => {
    try {
    const response=await fetch('https://jsonplaceholder.typicode.com/photos')
    const res=await response.json()
      dispatch({
        type: ALBUM_LISTING,
        payload:res
      });
    } catch (error) {
      console.log(error);
    }
  };