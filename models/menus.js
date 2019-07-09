const mongoose=require('mongoose');
//const schema=mongoose.Schema;

let menuSchema=new mongoose.Schema({
    product:{type:String},
    code:{type:Number},
    description:{type:String},
    price:{type:mongoose.Decimal128},
    creation:{type:Date},
    active:{type:Boolean}
})

module.exports=mongoose.model('Menus',menuSchema);