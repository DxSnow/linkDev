import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';

export default class App extends Component {
  render() { //render is the last step in a component's life cycle.
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>

          <Routes>
              <Route exact path = "/" element = {<Landing />}/>
              <Route exact path = "/register" element = {<Register />} />

          </Routes>

          <Footer/>
        </div>
      </BrowserRouter>


    )
  }
}
