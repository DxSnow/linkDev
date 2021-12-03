import React, { Component } from 'react'
import axios from 'axios';


export default class Login extends Component {
  state={
    email:"",
    password:"",
    errors:{}
  }
  inputChange=(event) => {this.setState({[event.target.name]:event.target.value})}

  submitForm=(event) => {}
  render() {
    return (
      <div class="login">
        <h1 className="title">Log In</h1>
        <form noValidate onSubmit={this.submitForm}>
          {/* add noValidate to turn off browser's validation for us. Since not all browsers do validation, we prefer to validate from the server*/}

          {/* email input */}
          <input type="email" name = "email" placeholder = "Email address" value={this.state.email}
          onChange={this.inputChange}/>

          {/* password input */}
          <input type="password" name = "password" placeholder = "Password"
          value={this.state.password}
          onChange={this.inputChange}/>

          {/* submit button */}
          <button type="submit" className="submit">Submit</button>

        </form>

      </div>
    )
  }
}
