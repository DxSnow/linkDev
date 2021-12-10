import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers'; //if no subfolder is specified, this folder's index.js is the entry point
import thunk from 'redux-thunk';

const middleware = [thunk]; //break data into smaller chunks
const store = createStore(
  rootReducer, //register reducers here
  {}, //set default value
  compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())); //applyMiddleware is an enhancement. thunk breaks up data into smaller chunks so that we can write parallelly to the store, thus enhance spead.

export default store;
