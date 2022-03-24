const mongoose=require("mongoose");
const url="mongodb+srv://AR:JTZ8GBq8SIfzNTZ8@cluster0.uma8g.mongodb.net/files?retryWrites=true&w=majority";

mongoose.connect(url)
.then(()=>console.log("database connected!!!"))
.catch((err)=>console.log(err))
    //mongoose.connection.once('open',()=>console.log("connected to database")



