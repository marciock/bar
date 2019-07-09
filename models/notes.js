const mongoose=require('mongoose');
//const schema=mongoose.Schema;

let noteSchema=new mongoose.Schema({
    name:{type:String},
    code:{type:Number},
    creation:{type:Date},
    use:{type:Boolean},
    active:{type:Boolean},
})

module.exports=mongoose.model('Notes',noteSchema);