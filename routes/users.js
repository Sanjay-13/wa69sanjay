var express = require('express');
var router = express.Router();
let count = 0;
let x = -10
/* GET users listing. */
router.get('/', function(req, res, next) {
 count +=1; 
 res.send(`User accesses are: ${count}`)
 req.send(`Math.abs applied to ${x} is  ${Math.abs(x)}`)
});

module.exports = router;
