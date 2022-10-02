require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path=require('path');

const PORT = process.env.PORT || 9002;
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
require('./Connection');
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role:String,
    registerdate:Date,
})
const User = new mongoose.model("User", userSchema)

//Routes signup and
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 
app.post("/register", (req, res)=> {
    const { name, email, password,role,registerdate} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password,
                role,
                registerdate
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 
//all Rotes 
const TaskController=require('./Controller/TaskController');
app.use('/',TaskController)

//===============deployment
const __dirname1=path.resolve();
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname1,"/my-emiza/build")));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname1,"my-emiza/","build","index.html"));
    })
}





app.listen(PORT,() => {
    console.log(`BE started at port ${PORT}`)
})