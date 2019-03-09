const express = require('express');
const router = express.Router();
const models=require('../database/models');


router.get('/menu', function(req, res, next) {
  models.menu.findAll().then((menu)=>{
    console.log(menu)
    res.render('menu/list',{menus:menu})
   
    })
  });
router.get('/permition', function(req, res, next) {
    models.permition.findAll().then((permition)=>{
      console.log(permition)
      res.render('permitions/list',{permitions:permition})
      
      })
   });

   router.get('/sector', function(req, res, next) {
    models.sector.findAll().then((sector)=>{
      console.log(sector)
      res.render('sectors/list',{sectors:sector})
      
      })
   });
   router.get('/user', function(req, res, next) {

    models.user.findAll().then((user)=>{
      console.log(user)
        
      res.render('users/list',{users:user})
      
      })
   });


  module.exports=router;