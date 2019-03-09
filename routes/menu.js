const express = require('express');
const router = express.Router();
const models=require('../database/models');




router.get('/list', function(req, res, next) {
  models.menu.findAll().then((menu)=>{
    console.log(menu)
    res.render('menu/list',{menus:menu})
   
    })
  });

  module.exports=router;