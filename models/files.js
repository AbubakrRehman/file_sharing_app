const { type } = require("express/lib/response");
const mongoose=require("mongoose");
require('dotenv').config();


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
        type:String,
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


const File=mongoose.model(`${process.env.DB_COLLECTION}`,fileSchema);

module.exports=File;