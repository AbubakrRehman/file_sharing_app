const express=require('express');
const path=require("path");
const router= express.Router();
const multer=require("multer");
const File=require("../models/files.js");
const { serialize } = require('v8');
//const abc=require("../uploads")

const { v4: uuidv4 } = require('uuid');



const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./uploads");
    },
    filename:(req,file,cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null,`${uniqueSuffix}${path.extname(file.originalname)}`);
    }
});

let upload=multer({
    storage:storage,
}).single('myfile');



router.get("/intro",(req,res)=>{
    res.sendFile(path.join(__dirname,'intro.html'));
})


router.post("/uploadFile",(req,res)=>{
    
    upload(req,res,async (err)=>{
    console.log(req.file);
    
        if(!req.file){
             res.status(400).send("All fields are required");
        }else if(err){
             res.status(500).send({error:err.message});
        }else{
            const data=new File({
                filename:req.file.filename,
                path:req.file.path,
                size:req.file.size,
                uuid:uuidv4()

            });

            const result =await data.save();

            res.status(201).json({file:`http://localhost:4040/file/${result.uuid}`});
            

        }

      
    });
    // const data=new File({
    //     filename:"abu",
    //     path:"abu",
    //     size:10,
    //     uuid:100

    // });
    // await data.save();
    //res.send("Hello hello abdul!!!");
    
    
});


module.exports=router;