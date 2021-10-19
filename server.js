const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/',(req,res)=> res.send('Hello LinkDev'));

const port = 5000;
app.listen(port,()=>console.log(`Server is running on port ${port}`));
//^listen is an Express method. Starts a UNIX socket and listens for connections on the given path. format: app.listen(path, [callback]) means if connection to path is successful, do the callback function.


