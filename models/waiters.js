const mongoose=require('mongoose');
//const schema=mongoose.Schema;

let waiterSchema=new mongoose.Schema({
    name:{type:String},
    login:{type:String},
    password:{type:String},
    creation:{type:Date},
    active:{type:Boolean}
})

module.exports=mongoose.model('Waiters',waiterSchema);