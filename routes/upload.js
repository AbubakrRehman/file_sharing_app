const express=require('express');

const router= express.Router();
const multer=require("multer");
const File=require("../models/files.js");


const storage=multer.diskStorage({
    destination:(req,file,cb)=>cb(null,"../uploads"),
    filename:(req,file,cb)=>cb(null,`${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`)
});

const upload=multer({
    storage:storage,
}).single('myfile');


router.get("/upload",async (req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err);
        }
    });
    const data=new File({
        filename:"abu",
        path:"abu",
        size:10,
        uuid:100

    });
    await data.save();
    res.send("Hello hello abdul!!!");
});


module.exports=router;