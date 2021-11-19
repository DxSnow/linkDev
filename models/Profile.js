const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User' 
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  company: String,
  website: String,
  location: String,
  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String], //can have many skills, so use array
    required: true
  },
  bio:String,
  githubusername: String,
  //can have many experiences, so use array
  experience: [{
    title: {
      type: String,
      requried: true
    },
    company: {
        type: String,
        required: true
    },
    location: String,
    from: {
      type: Date,
      required: true
    },
    to: Date,
    current: {
      type: Boolean,
      default: false
    },
    description:String
  }],
  education: [{
    school: {
      type: String,
      required: true
    },
    degree: {
      type: String,
      required: true
    },
    fieldofstudy: {
      type: String,
      required: true
    },
    from: {
      type: Date,
      required: true
    },
    to: {
      type: Date
    },
    current: {
      type: Boolean,
      default: false
    }
  }],
   social: {
    youtube: String,
    twitter: String,
    facebook: String,
    linkedin: String,
    instagram: String
  }
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);
