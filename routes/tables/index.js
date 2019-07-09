const express = require('express');
const router = express.Router();
//const table=require('../../data/tables');
const tables=require('../../controllers/table')

/* GET home page. 
router.get('/', function(req, res, next) {
 
    //console.log(tables);
  res.render('tables/index',{tables:table});
});*/

router.get('/',tables.listDash)

module.exports = router;
