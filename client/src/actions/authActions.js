import axios from "axios";
import { SET_USER, GET_ERRORS, CLEAR_ERRORS } from "./types";
import jwt_decode from 'jwt-decode';
import setAuthToken from "../utils/setAuthToken.js";

export const registerUser =(userData,history) => dispatch => {
  axios.post('api/users/register', userData)
    .then(res => {
       history.push('/login')// go to next component without finishing Register's lifecycle
       dispatch({type: CLEAR_ERRORS, payload:{}})//clear error status when submit
      })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));

}

export const loginUser = (userData, history) => dispatch => { //If we want to dispatch many actions in a single method, we can do this

  axios.post('/api/users/login', userData)
    .then(res => {
      //save token to local storage (browser cache)
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      //set the token to the auth header
      setAuthToken(token);
      //decode token
      const decoded = jwt_decode(token);
      //dispatch set_user
      dispatch({type: SET_USER, payload: decoded});
      history.push('/dashboard');
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));

}
//Logout user
export const logoutUser = () => dispatch => {
  //Remove token from localstorage
  localStorage.removeItem('jwtToken');
  //Remove the token from the auth header
  setAuthToken(false);
  //Clean the redux store
  dispatch({
    type: SET_USER,
    payload: {}
  });
}
