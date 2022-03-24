const express=require("express");
const app=express();


app.get("/",(req,res)=>{
    res.send("Hello abu!!");
});


module.exports=app;