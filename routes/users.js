var express = require('express');
var router = express.Router();
let count = 0;
/* GET users listing. */
router.get('/', function(req, res, next) {
 count +=1; 
 res.send(`User accesses are: ${count}`)
 req.send(`Math.abs applied to ${count} is  ${Math.abs(count)}`)
});

module.exports = router;
