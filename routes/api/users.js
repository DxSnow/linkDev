const express = require('express');
const router = express.Router();




// setup subroutes
router.get('/register', (req,res) => res.json({msg: 'User works!'}));
// ^ json here mean send json. All communications with the API should be in Json)

module.exports = router;
