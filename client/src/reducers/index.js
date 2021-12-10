import {combineReducer} from 'redux'; // combine reducers into one object, a more elegant way to register reducer to Redux store
import authReducer from "./authReducer";

export default combineReducer ({
  auth : authReducer
})
//this will be refered as "rootReducer" in store.js
