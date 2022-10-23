//jshint esversion:6
import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import homeRoute from "./routers/home.js";
import registerRoute from "./routers/register.js";
import loginRouter from "./routers/login.js";


const app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
const connect = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://admin-RahulKandaswamy:1234@cluster0.w9ew7ye.mongodb.net/UsersDB?retryWrites=true&w=majority")
        console.log("Connected to Mongoose");
    }
    catch(err){
        console.log(err);
    }
}


app.use("/",homeRoute);
app.use("/register",registerRoute);
app.use("/login",loginRouter);
app.get("/logout",(req,res)=>{
    res.render("home");
})


// app.get("/secrets",(req,res)=>{
//     res.render("home");
// })
// app.get("/submit",(req,res)=>{
//     res.render("home");
// })





app.listen(5000,()=>{
    connect();
    console.log("Connected to the port successfully");
});