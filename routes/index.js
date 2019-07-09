const express = require('express');
const router = express.Router();
const menuhome=require('../lib/menuhome');
/* GET home page. */
router.get('/', function(req, res, next) {
 // console.log(menuhome)
  res.render('layouts/home',{menus:menuhome});
});

module.exports = router;
