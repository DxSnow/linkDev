import React, { Component } from 'react'
import Footer from './components/layout/Footer';
import './App.css';

export default class App extends Component {
  render() { //render is the last step in a component's life cycle.
    return (
      <div className="App">

        <Footer/>
      </div>


    )
  }
}
