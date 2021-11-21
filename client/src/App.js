import React, { Component } from 'react'
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';


export default class App extends Component {
  render() { //render is the last step in a component's life cycle.
    return (
      <div className="App">
        <Navbar/>

        <Footer/>
      </div>


    )
  }
}
