const monggose=require('mongoose');
const modelWaiter=require('../models/waiters');

module.exports={
    listAll:(req,res)=>{
        modelWaiter.find({'active':'true'})
        .then((results)=>{
            
            res.render('register/register-waiters',{data:results});
        })
    
    },
    login:(req,res)=>{
        let id=req.body.login
        let pass=req.body.password

       // console.log(`esse é o login -${id}`)
        modelWaiter.findOne({'login':id,'password':pass})
        .then((results)=>{
          //  console.log(`results -${results}`);
            if(results !==null){
                res.render('waiter/index',{data:results});
            }else{
                res.redirect('/login')
            }
        })        
    },
    new:(req,res)=>{
       
        let newWaiter=new modelWaiter({
            name:req.body.name,
            login:req.body.login,
            password:req.body.password,
            creation:Date(),
            active:'true'
        });
        newWaiter.save((err,data)=>{
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
         //   console.log(`esse login - ${data}`)
            res.redirect('/register_waiters')

        })
    },

    update:(req,res)=>{
        let id=req.body.id;
        console.log(`aqui é o id - ${id}`)
        modelWaiter.findOne({_id:id},(err,data)=>{
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
                data.login=req.body.login ? req.body.login:data.login;
                data.password=req.body.password ? req.body.password:data.password;
                data.creation=req.body.creation ? req.body.creation:data.creation;
                data.active=req.body.active ? req.body.active:data.active;

                data.save((err,data)=>{
                   
                       // return res.json(data);

                       res.redirect('/register_waiters')

                })
            
        })
    },
    listOne:(req,res)=>{
        let id=req.query.id;
        modelWaiter.findOne({'_id':id})
        .then((results)=>{
            res.json(results);
        })

    }

}