const express = require('express');
const router = express.Router();
const loginValidate=require('../../lib/loginvalidate')





router.post('/', function(req, res, next) {

 // console.log(req.body.logininput)

  
  const mylogin=req.body.logininput;
  const mypass=req.body.passinput;

 const validate= loginValidate(mylogin,mypass);

 console.log(validate)
 if(validate==='true'){
  res.render('waiter/index',{garcon:mylogin});
 }else{
   res.redirect('/login')
 }
  

      //res.render('waiter/index',{garcon:logininput});
        
          
});

module.exports = router;
