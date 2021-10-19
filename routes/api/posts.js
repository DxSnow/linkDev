const express = require('express');
const router = express.Router();




// setup subroutes
router.get('/test', (req,res) => res.json({msg: 'posts works!'}));
// ^ json here mean send json. All communications with the API should be in Json)

module.exports = router;
