const express=require("express");
const app=express();
//const upload=require("./routes/upload.js");
require("./config/db_connection.js");



//middlewares
//app.use(express.urlencoded());
//app.use(express.json());

//Routes
app.use("/",require("./routes/upload.js"));



module.exports=app;