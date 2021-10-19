//this is the main entry point when npm start

/import is called require in JS
const express = require('express');
const app = express();
const db = require('./config/keys');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

//routes
app.get('/',(req,res)=> res.send('Hello LinkDev'));

app.use('/api/users', users)
// ^^ use means use other javascript files
app.use('/api/profile', profile)
app.use('/api/posts', posts)

//Connect to MangoDB
console.log(db.mongoURI);
mongoose.connect(db.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const port = 5000;
app.listen(port,()=>console.log(`Server is running on port ${port}`));
//^listen is an Express method. Starts a UNIX socket and listens for connections on the given path. format: app.listen(path, [callback]) means if connection to path is successful, do the callback function.
