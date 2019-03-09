const express = require('express');
const router = express.Router();
const models=require('../database/models');


router.get('/menu', function(req, res, next) {
 

    res.render('menu/add')
     
  });
router.get('/permition', function(req, res, next) {
  
      res.render('permitions/add')
      
   });

   router.get('/sector', function(req, res, next) {
   
      res.render('sectors/add')
      
   });
   router.get('/user', function(req, res, next) {

      models.sector.findAll().then((sector)=>{
         res.render('users/add',{sectors:sector});

      })
    
   });


  module.exports=router;