import { SET_USER } from "./types";

export const registerUserAction = userData => {
  return{
    type: SET_USER,
    payload: userData
  }
}
