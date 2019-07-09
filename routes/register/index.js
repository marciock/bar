const express = require('express');
const router = express.Router();
const menuregister=require('../../lib/menuregister');
/* GET home page. */
router.get('/', function(req, res, next) {
 // console.log(menuhome)
  res.render('register/index',{menus:menuregister});
});





module.exports = router;
