const express=require('express');
const router=express.Router();



router.post("/sendEmail",async (req,res)=>{
    const {to,from,subject,text} =req.body;
    try{
        await require("../services/sendMail.js")(to,from,subject,text);
        res.status(200).send('Email sent sucessfully');

    }
    catch(err){
        res.status(500).send('Some internal problem occured');
    }
    
});



module.exports=router;