//this is the main entry point when npm start

//import is called require in JS
const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const passport = require('passport');

//process user's input during routing:
// 1.  encode(transform Emojis and characters in any languages to unicode)
app.use(express.urlencoded());
// 2. turn user's input to json format
app.use(express.json());

//passport configuration
app.use(passport.initialize());
require('./config/passport')(passport);


//routes
app.get('/',(req,res)=> res.send('Hello LinkDev'));

app.use('/api/users', users);
// ^^ use means use other javascript files
app.use('/api/profile', profile);
app.use('/api/posts', posts);

//Connect to MangoDB
mongoose.connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const port = 5555;
app.listen(port,()=>console.log(`Server is running on port ${port}`));
//^listen is an Express method. Starts a UNIX socket and listens for connections on the given path. format: app.listen(path, [callback])
