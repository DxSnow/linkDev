const express = require('express');
const router = express.Router(); //create a new instance of express, but specifically, only router this time




// setup subroutes
router.get('/test', (req,res) => res.json({msg: 'profile works!'}));
// ^ json here mean send json. All communications with the API should be in Json)

module.exports = router; // if you don't exports there will be an error because you have required profile.js, so it must not be empty and must have a exports
