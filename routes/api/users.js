const express = require('express');
const router = express.Router();

const user = require('../../models/User');


// setup subroutes
// @route      (GET or POST) /api/users/register   (How to ARRIVE here, INDLUDING THE WHOLE PATH)
// @desc       Register a user    (description. What does this block of code do?)
// @access     public  (Tell viewer who can access this route)
router.post('/register', (req,res) => res.json({msg: 'User works!'}));
// ^ json here mean send json. All communications with the API should be in Json)

module.exports = router;
