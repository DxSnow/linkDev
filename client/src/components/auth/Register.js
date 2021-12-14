// Note: this page uses Bootstrap, Login page uses vanilla CSS. Just to practice both and compare them.

import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {registerUserAction} from '../../actions/authActions';
import PropTypes from 'prop-types';


class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }
  }

  onChange(e){ //e is for event. React pass in the event for us
    this.setState({[e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    // when event is triggered, Register component uses the function given by its wrapper/parent component, the "newUser" argument is thus passes to its wrapper component.(Note that Register's wrapper is anonymous, created by connect() )
    this.props.registerUserAction(newUser);

    // axios is moved to action creator in order to keep UI component light.
    axios.post('api/users/register', userData)
    .then(res => history.push('/login'))

  }

  render() {
    const {errors} = this.state;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <form noValidate onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.name
                    })}
                    placeholder="Name"
                    name="name"
                    value = {this.state.name}
                    onChange={this.onChange.bind(this)}
                    />
                    {
                      <div className="invalid-feedback">
                        {errors.name}
                      </div>
                    }
                </div>
                <div className="form-group">
                  <input
                  type="email"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                    })}
                  placeholder="Email Address"
                  name="email"
                    value = {this.state.email}
                    onChange={this.onChange.bind(this)}
                   />
                  <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                    {
                      <div className="invalid-feedback">
                        {errors.email}
                      </div>
                    }
                </div>
                <div className="form-group">
                  <input
                  type="password"
                  className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    })}
                  placeholder="Password"
                  name="password"
                    value = {this.state.password}
                    onChange={this.onChange.bind(this)}
                   />
                    {
                      <div className="invalid-feedback">
                        {errors.password}
                      </div>
                    }
                </div>
                <div className="form-group">
                  <input
                  type="password"
                  className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password2
                    })}
                  placeholder="Confirm Password"
                  name="password2"
                    value = {this.state.password2}
                    onChange={this.onChange.bind(this)}
                   />
                    {
                      <div className="invalid-feedback">
                        {errors.password2}
                      </div>
                    }
                </div>
                <input type="submit" className="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>

    )

  }
}
Register.propTypes = {
  registerUserAction: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({auth : state.auth})

// export wrapper component created by connect()(), which is a function that returns a class
export default connect(mapStateToProps,{registerUserAction})(Register);
