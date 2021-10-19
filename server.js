const express = require('express');
const app = express();
const db = require('./config/keys');
const mongoose = require('mongoose');

//first route
app.get('/',(req,res)=> res.send('Hello LinkDev'));


//Connect to MangoDB
console.log(db.mongoURI);
mongoose.connect(db.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const port = 5000;
app.listen(port,()=>console.log(`Server is running on port ${port}`));
//^listen is an Express method. Starts a UNIX socket and listens for connections on the given path. format: app.listen(path, [callback]) means if connection to path is successful, do the callback function.
