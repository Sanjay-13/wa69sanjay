var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    value = Math.floor(Math.random() * Math.floor(15));
    if(req.query.value){
        value = req.query.value
    }
  res.send(`Math.abs function applied to ${value} is ${Math.abs(value)}`);
});

module.exports = router;
