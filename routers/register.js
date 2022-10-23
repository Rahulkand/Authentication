
import express from "express";
import { Router } from "express";
import bcrypt, { hash } from "bcrypt";
import userModel from "../models/users.js";
const saltRounds = 15;
const registerRoute = express.Router();
registerRoute.get("/",(req,res)=>{
    res.render("register");
});
registerRoute.post("/", async (req,res)=>{
    bcrypt.hash(req.body.password,saltRounds, async function(err,hash){
        const newUser = new userModel({
            email:req.body.username,
            password: hash,
        })
        try{
            const userSaved = await newUser.save();
            console.log("user created successfully");
            res.render("secrets");
        }
        catch(err){
            console.log(err);
        }
    });
   
   
});
export default (registerRoute);
