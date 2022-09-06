var express = require('express');
var router = express.Router();


/*
*
*@Path /users
*
*/

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.status(200).json({name: "Khaled", prenom: "Guedria"});
  
});


module.exports = router;
