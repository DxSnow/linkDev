import {SET_USER} from "../actions/types";
import isEmpty from "../utils/isEmpty";

const initialState= {
  isAuthenticated:false,
  user:{}
}
export default function(state = initialState,action){
  switch (action.type) {
    case SET_USER:
      // We need to return a new state object
      return{
        // that has all the existing state data
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user:action.payload //update state
      }


    default:
      return state;
  }


}
