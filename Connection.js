const mongoose= require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.4zujjfu.mongodb.net/user?retryWrites=true&w=majority`,()=>{
    console.log("db connected")
})