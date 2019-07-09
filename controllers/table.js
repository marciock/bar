const monggose=require('mongoose');
const modelTable=require('../models/tables');

module.exports={
    listAll:(req,res)=>{
        modelTable.find({'active':'true'})
        .then((results)=>{
            res.render('register/register-tables',{data:results});
        })
    
    },
    listDash:(req,res)=>{
        modelTable.find({'active':'true'})
        .then((results)=>{
            res.render('tables/index',{data:results});
        })
    
    },
    search:(req,res)=>{
        let code=req.query.code

      //  console.log(req.query)
       
        modelTable.findOne({'code':code,'active':'true'})
        .then((results)=>{
           
           res.json(results);
        }) 
    }, 
    new:(req,res)=>{
        let newTable=new modelTable({
            name:req.body.name,
            code:req.body.code,
            creation:Date(),
            active:'true'
        });
        newTable.save((err,data)=>{
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

            res.redirect('/register_tables')

        })
    },

    update:(req,res)=>{
        let id=req.body.id;
        console.log(`aqui é o id - ${id}`)
        modelTable.findOne({_id:id},(err,data)=>{
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
                data.name=req.body.name ? req.body.name:data.name;
                data.code=req.body.code ? req.body.code:data.code;
                data.creation=req.body.creation ? req.body.creation:data.creation;
                data.active=req.body.active ? req.body.active:data.active;

                data.save((err,data)=>{
                   
                       // return res.json(data);

                       res.redirect('/register_tables')

                })
            
        })
    },
    listOne:(req,res)=>{
        let id=req.query.id;
        modelTable.findOne({'_id':id})
        .then((results)=>{
            res.json(results);
        })

    }

}