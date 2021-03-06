import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    }
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    };
    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const {errors} = this.props;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your LinkDev account</p>
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
                      'is-invalid': errors.passwordConfirm
                    })}
                  placeholder="Confirm Password"
                  name="passwordConfirm"
                    value = {this.state.passwordConfirm}
                    onChange={this.onChange.bind(this)}
                   />
                    {
                      <div className="invalid-feedback">
                        {errors.passwordConfirm}
                      </div>
                    }
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {registerUser}) (Register);
