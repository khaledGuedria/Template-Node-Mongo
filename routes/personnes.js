var express = require('express');
var router = express.Router();
const personneController = require('../controllers/personne.controller');

/*
*
*@Path /personnes
*
*/


/* GET home page. */
router.route('/')
  .get(personneController.fetchAll)
  .post(personneController.create);

router.route('/:id')
  .get(personneController.fetchOne)
  .put(personneController.updateOne)
  .delete(personneController.deleteOne)  

  
module.exports = router;
