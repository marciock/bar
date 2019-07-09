const monggose=require('mongoose');
const modelNote=require('../models/notes');

module.exports={
    listAll:(req,res)=>{
        modelNote.find({'active':'true'})
        .then((results)=>{
            
            res.render('register/register-notes',{data:results});
        })
    
    },
    search:(req,res)=>{
        let code=req.query.code;
       
       
        modelNote.findOne({'code':code,'active':'true'})
        .then((results)=>{
           
           res.json(results);
        }) 
    }, 
    new:(req,res)=>{
       
        let newNote=new modelNote({
            name:req.body.name,
            code:req.body.code,
            creation:Date(),
            use:'false',
            active:'true',
        });
        newNote.save((err,data)=>{
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
            res.redirect('/register_notes')

        })
    },

    update:(req,res)=>{
        let id=req.body.id;
       // console.log(`aqui é o id - ${id}`)
        modelNote.findOne({_id:id},(err,data)=>{
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
                data.use=req.body.use ? req.body.use:data.use;
                data.active=req.body.active ? req.body.active:data.active;

                data.save((err,data)=>{
                   
                       // return res.json(data);

                       res.redirect('/register_notes')

                })
            
        })
    },
    listOne:(req,res)=>{
        let id=req.query.id;
        modelNote.findOne({'_id':id})
        .then((results)=>{
            res.json(results);
        })

    }

}