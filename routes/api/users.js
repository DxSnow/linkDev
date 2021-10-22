const express = require('express');
const router = express.Router();

const user = require('../../models/User');


// setup subroutes
// @route      (GET or POST) /api/users/register   (How to ARRIVE here, INDLUDING THE WHOLE PATH)
// @desc       Register a user    (description. What does this block of code do?)
// @access     public  (Tell viewer who can access this route)
router.post('/register', (req,res) => {
  //query database. Find at least one email data that matches user's new email input)
  User.findOne({email: req.body.email})
    .then(user => {
      if(user){
        //if there is a user found with that email
        return res.status(400).json({email:'Email already exists!'})

      }else{//create a new user's record

      }
    })
    .catch(err =>console.log(err))
});


module.exports = router;
