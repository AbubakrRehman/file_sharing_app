const express=require("express");
const app=express();
const upload=require("./routes/upload.js");
require("./config/db_connection.js");



//middlewares
app.use(express.urlencoded());
app.use(express.json());

//Routes
app.use("/",upload);


module.exports=app;