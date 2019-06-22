const express = require('express');
const router = express.Router();
const table=require('../../data/tables');

/* GET home page. */
router.get('/', function(req, res, next) {
 
    //console.log(tables);
  res.render('tables/index',{tables:table});
});

module.exports = router;
