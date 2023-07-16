const mongoose=require("mongoose")
const Schema= mongoose.Schema

const StudentSchema= new Schema({
    name:{type:String,require:true},
    rollNum:{type:String, require:true,unique: true},
    cgpa:{type:String,default: '' },
    proj:{type:String,default: ''},
    intern:{type:String,default: ''},
    leet:{type:String,default: ''},
    // sub6:{type:String},
    // sub7:{type:String},
    // sub8:{type:String},
    // sub9:{type:String},
    // cgpa0:{type:String},
    // cgpa1:{type:String},
    // cgpa2:{type:String},
    // cgpa3:{type:String},
    // cgpa4:{type:String},
    // cgpa5:{type:String},
    // cgpa6:{type:String},
    // cgpa7:{type:String},
})

const studentModel=mongoose.model('Students',StudentSchema)
module.exports=studentModel