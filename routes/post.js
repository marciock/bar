const express=require('express');
const router=express.Router();
const models=require('../database/models');

const converteValue=(value)=>{
  let valor=value;

  if(valor==='on'){
    valor=1;
  }
  if(valor===undefined){
    valor=0;
  }

  return valor;
}

router.post('/menu',(req,res)=>{
  const active=converteValue(req.body.menu.active);

  const menu={
    title:req.body.menu.title,
    image:req.body.menu.image,
    folder:req.body.menu.folder,
    description:req.body.menu.description,
    active:active
  } 

    models.menu.create(menu);
     res.redirect('/list/menu')
})

router.post('/permition',(req,res)=>{
 
  const active=converteValue(req.body.permition.active);
 
  const permition={
    setor:req.body.permition.sector,
    menu:req.body.permition.menu,
    active:active
  }
  models.permition.create(permition);
  res.redirect('/list/permition')
  
})

router.post('/sector',(req,res)=>{

  const active=converteValue(req.body.user.active);
  const sector=
    {
      sector:req.body.sectors.sector,
      description:req.body.sectors.description,
      active:active
    }
  ;

  console.log(sector);
  models.sector.create(sector);
  res.redirect('/list/sector')
})

router.post('/user',(req,res)=>{
  const active=converteValue(req.body.user.active);

  const user={
    name:req.body.user.name,
    email:req.body.user.email,
    password:req.body.user.password,
    active:active
  }


  console.log(active)
  //models.user.create(user);
  res.redirect('/list/user')
})

module.exports=router;