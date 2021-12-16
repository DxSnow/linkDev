// combine reducers into one object, a more elegant way to register reducer to Redux store
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer
}) //combineReducers() returns an Object including all your reducer. just to simplify signing up reducers when create a store.
//the keys here will be the keys for looking up redux store status!!

export default rootReducer; //this will be used in store.js
