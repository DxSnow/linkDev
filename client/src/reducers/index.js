// combine reducers into one object, a more elegant way to register reducer to Redux store


import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer
}) //combineReducers() returns an Object including all your reducer. just to simplify signing up reducers when create a store.

export default rootReducer; //this will be used in store.js
