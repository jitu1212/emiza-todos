const mongoose= require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.xwzuddn.mongodb.net/?retryWrites=true&w=majority`,()=>{
    console.log("db connected")
})
