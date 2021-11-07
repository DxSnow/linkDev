const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};



  if (data.name.length === 0 ){
        errors.name = 'Name field is required';
  }else if (data.name.length < 2 || data.name.length > 30){
        errors.name = 'Name must be between 2 and 30 characters';
  }

  if (isEmpty(data.email)){
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)){
    errors.email = 'Email is invalid';
  }

  if (!Validator.isLength(data.password, {min: 6, max:30})){
    errors.password = 'Password must be between 6 and 30 characters';
  }

  if (isEmpty(data.password)){
    errors.password = 'Password field is required';
  }

  if (isEmpty(data.password2)){
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.password2)){
     errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors) // true or false, It's better to create this bolean in this file, so everytime you need to check if something is valid when you call this function, you can use .isValid instead of check the status of errors outside.)
  }
}
