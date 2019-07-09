const monggose=require('mongoose');
const modelMenu=require('../models/menus');

module.exports={
    listAll:(req,res)=>{
        modelMenu.find({'active':'true'})
        .then((results)=>{
            
            res.render('register/register-menus',{data:results});
        })
    
    },
    search:(req,res)=>{
        let code=req.query.code
       
       if(code !==''){
        modelMenu.findOne({'code':code,'active':'true'})
        .then((results)=>{
            //console.log(`menu - ${results}`)
            code='';
          return res.json(results);

        }) 
       }
       
    }, 
    new:(req,res)=>{
       
        let newMenu=new modelMenu({
            product:req.body.product,
            code:req.body.code,
            description:req.body.description,
            price:req.body.price,
            creation:Date(),
            active:'true'
        });
        newMenu.save((err,data)=>{
            if(err){
                return res.status(500).json({
                    message:'Error saving data',
                    error:err
                });
            }
           /* return res.json({
                message:'saved',
                _id:data._id
            });*/
            console.log(`esse login - ${data}`)
            res.redirect('/register_menus')

        })
    },

    update:(req,res)=>{
        let id=req.body.id;
        console.log(`aqui é o id - ${id}`)
        modelMenu.findOne({_id:id},(err,data)=>{
            if(err){
                return res.status(500).json({
                    message:'Error saving data',
                    error:err
                });
            }
                if(!data){
                    return res.status(404).json({
                        message:'No such data'
                    });
                }
                data.product=req.body.product ? req.body.product:data.product;
                data.code=req.body.code ? req.body.code:data.code;
                data.description=req.body.description ? req.body.description:data.description;
                data.price=req.body.price ? req.body.price:data.price;
                data.creation=req.body.creation ? req.body.creation:data.creation;
                data.active=req.body.active ? req.body.active:data.active;

                data.save((err,data)=>{
                   
                       // return res.json(data);

                       res.redirect('/register_menus')

                })
            
        })
    },
    listOne:(req,res)=>{
        let id=req.query.id;
        console.log(id)
        modelMenu.findOne({'_id':id})
        .then((results)=>{
            res.json(results);
        })

    }

}