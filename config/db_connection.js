const mongoose = require("mongoose");
require('dotenv').config();
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.uma8g.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(url)
    .then(() => console.log("database connected!!!"))
    .catch((err) => console.log(err))
    //mongoose.connection.once('open',()=>console.log("connected to database")



