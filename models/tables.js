const mongoose=require('mongoose');
//const schema=mongoose.Schema;

let tableSchema=new mongoose.Schema({
    name:{type:String},
    code:{type:Number},
    creation:{type:Date},
    active:{type:Boolean}
})

module.exports=mongoose.model('Tables',tableSchema);