const mongoose=require('mongoose');
//const schema=mongoose.Schema;


const Notes=mongoose.model('Notes');
const Tables=mongoose.model('Tables');
const Menus=mongoose.model('Tables');

let cashierSchema=new mongoose.Schema({
    tables:{type: mongoose.Schema.Types.ObjectId, ref: 'Tables'},
    notes:{type: mongoose.Schema.Types.ObjectId, ref: 'Notes'},
    menus:[{menu:{type: mongoose.Schema.Types.ObjectId, ref: 'Menus'}}],
    total:{type:mongoose.Decimal128},
    creation:{type:Date},
    active:{type:Boolean}
})

module.exports=mongoose.model('Cashiers',cashierSchema);