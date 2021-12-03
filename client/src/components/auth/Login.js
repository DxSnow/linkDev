// this page is my experiments. what's different from the register page?
// 1. it omitted constructor by using fields directly
// 2. styled by vanilla CSS instead of Bootstrap
// 3. use <button> instead of <input>
// 4. do not have curly braces around error message div


import React, { Component } from 'react'
import axios from 'axios';
import classnames from 'classnames';

export default class Login extends Component {
  state={
    email:"",
    password:"",
    errors:{}
  }
  inputChange=(event) => this.setState({[event.target.name]:event.target.value})



  formSubmit = (event)=>{
    event.preventDefault(); //  大坑警告！ without this, console will show [HMR] Waiting for update signal from WDS...because default is going to other html
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post('/api/users/login', user)
      .then(res => console.log(res.data))
      .catch(err => this.setState({errors: err.response.data}));
  }

  render() {
    const errors = this.state.errors;
    return (
      <div className="login">
        <h1 className="title">Log In</h1>
        <form noValidate onSubmit={this.formSubmit}>
          {/* add noValidate to turn off browser's validation for us. Since not all browsers do validation, we prefer to validate from the server*/}

          {/* email input */}
          <input type="email" name = "email" placeholder = "Email address" value={this.state.email}
          onChange={this.inputChange}
          className={classnames({'my-invalid': errors.email})}/>

          <div className="error">{errors.email}</div>

          {/* password input */}
          <input type="password" name = "password" placeholder = "Password"
          value={this.state.password}
          onChange={this.inputChange}
          className={classnames({'my-invalid': errors.password})}/>

         <div className="error">{errors.password}</div>

          {/* submit button */}
          <button type="submit" className="submit">Submit</button>


        </form>

      </div>
    )
  }
}
