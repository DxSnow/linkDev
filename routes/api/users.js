const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const Keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');


// setup subroutes
// @route      POST /api/users/register   (How to ARRIVE here, INDLUDING THE WHOLE PATH)
// @desc       Register a user    (description. What does this block of code do?)
// @access     public  (Tell viewer who can access this route)
router.post('/register', (req,res) => {
  //Validate user input
  const output = validateRegisterInput(req.body)
  if (!output.isValid){
    return res.status(400).json(output.errors);
  }

  //query database. Find at least one email data that matches user's new email input)
  User.findOne({email: req.body.email})
    .then(user => {
      if(user){
        //if there is a user found with that email
        return res.status(400).json({email:'Email already exists!'})

      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          avatar: gravatar.url(req.body.email, {s:'200',r:'pg',d:'mm'})
        }) // end of newUser registration

        //hash password
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err;
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          }
          );// end of bcrypt.hash
        }//end of genSalt call back
        );
      } // end of else
    })  //end of findOne.then
    .catch(err => console.log(err)) //end of findOne.catch
} // end of (req,res)
)// end of router.post

// @route   POST /api/users/login
// @desc    Login a user
// @access  Public
router.post('/login', (req, res) => {
  User.findOne({email: req.body.email})
    .then(user => {
      //Check if user exists
      if (!user){
        return res.status(400).json({email: 'User not found!'});
      }

      //Check the password
      bcrypt.compare(req.body.password, user.password)
        .then(isMatch => { //true or false
          if (isMatch == false){
            return res.status(400).json({password: 'Password incorrect'});
          } else {
            // generate token
            const payload ={
              id:user.id,
              name: user.name,
              avatar: user.avatar
            };
            jwt.sign(payload,Keys.secretOrKey,{expiresIn:3600}, (err,token)=>res.json({token:"Bearer " + token}))
            //added "Bearer " because it is required in HTTP header. Format is: Authorization: Bearer <token> Do not forget this space between Bearer and token. We can also omit Bear here and hand write it in Authorization header while useing Postman. To save time, we put "Bearer " here.
          }
        }
      )
  })

})

// @route      GET  /api/users/register
// @desc       return current user info
// @access     Private

router.get(
  '/current',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    res.json(req.user);
});

module.exports = router;
