const app=require("./app.js");
require('dotenv').config();

const port=process.env.PORT || 2000;


app.listen(port  ,()=>console.log(`listening to ${port} port `));