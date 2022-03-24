const { type } = require("express/lib/response");
const mongoose=require("mongoose");


const fileSchema=new mongoose.Schema({
    filename:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        required:true
    },
    uuid:{
        type:Number,
        required:true
    },
    sender:{
        type:String,
        required:false
    },
    receiver:{
        type:String,
        required:false
    }
},{timestamps:true});


const File=mongoose.model('file',fileSchema);

module.exports=File;