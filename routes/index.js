var express = require('express');
var router = express.Router();


/*
*
*@Path /
*
*/


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Liverpool' });
});

module.exports = router;
