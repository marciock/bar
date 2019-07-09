const mongoose=require('mongoose');
const modelCashier=require('../models/cashiers');
const Notes=mongoose.model('Notes');
const Menus=mongoose.model('Menus');

module.exports={
    listAll:(req,res)=>{
        let tab=req.body.tableId;
        let net=req.body.noteId
        modelCashier.find({'active':'true','tableId':tab,'noteId':noteId})
        .then((results)=>{
            res.json(results);
           // res.render('register/register-menus',{data:results});
        })
    
    },
    new:(req,res)=>{
     
        let newCashier=new modelCashier({
            tables:req.body.table,
            notes:req.body.note,
            menus:req.body.menu,
            total:'0',
            creation:Date(),
            active:'true'
        });

        newCashier.save((err,data)=>{
            if(err){
                return res.status(500).json({
                    message:'Error saving data',
                    error:err
                });
            }
           return res.json({
                message:'saved',
                _id:data._id
            });
           

        })

        
    },
    list:(req,res)=>{
        modelCashier.find({},(err,cashie)=>{
            Menus.populate(cashie,{path:'menus._id'},(err,cashie)=>{
               // res.json(cashie);
              
            Notes.populate(cashie,{path:'notes'},(err,cashie)=>{
                res.json(cashie);
            })
            })

        })
    }
}