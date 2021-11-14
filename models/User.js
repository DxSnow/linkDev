const mongoose = require('mongoose');
const Schema = mongoose.Schema; //also need to require the Mongoose Schema

//Create schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = User = mongoose.model('User', UserSchema);
// ^^ this means let mongoose take the UserSchema and create a real collection in MongoDB called 'users', then export it.
//it is a combination of the following:
//User = mongoose.model('users', UserSchema);
//module.exports = User
