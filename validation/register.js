const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function (data){

    let errors = {}; //to collect errors

    //check user name
    if (isEmpty(data.name)){
        errors.name = 'Name field is required';
    }else if (!Validator.isLength(data.name,{min:2,Max:30})){
        errors.name = 'Name must be between 2 and 30 characters';
    }

    //check email
    if(isEmpty(data.email)){
        errors.email = 'Email field is required';
    }else if(!Validator.isEmail(data.email)){
        errors.email = 'Please put in a valid email';
    }

    //check password
    if(isEmpty(data.password)){
        errors.password = 'password field is required';
    }else if(!Validator.isLength(data.password, {min:8, Max:30})){
        errors.email = 'Password must be between 8 and 30 characters';
    }

    //confirm password
    if (isEmpty(data.password2)){
        errors.password2 = 'Confirm Password field is required';
      }else if(!Validator.equals(data.password, data.password2)){
        errors.password2 = 'Passwords doesn\'t match';
    }

    return {errors,
            isValid:isEmpty(errors)
            //^^// true or false, It's better to create this bolean in this file, so everytime you need to check if something is valid when you call this function, you can use .isValid instead of check the status of errors outside.
    };
}
