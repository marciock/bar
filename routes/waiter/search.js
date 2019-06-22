const express = require('express');
const router = express.Router();
const records=require('../../lib/records')

let search='';
/* GET home page. */
router.post('/', function(req, res, next) {
 
  // console.log(req.body);
  //res.render('waiter/login');
    search=records(req.body);
  res.json(req.body);
});

router.get('/',(req,res,next)=>{
    res.json(search);
})
module.exports = router;
