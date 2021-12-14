import React, { Component } from 'react'
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
// for redux
import store from './store';
import {Provider} from 'react-redux'; //The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.


export default class App extends Component {
  render() { //render is the last step in a component's life cycle.
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar/>
                <Route exact path = "/" component = {Landing}/>
                <Route exact path = "/register" component = {Register} />
                <Route exact path = "/login" component = {Login} />
            <Footer/>
          </div>
        </BrowserRouter>
      </Provider>


    )
  }
}
