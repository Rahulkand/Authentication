import express from "express";
import bcrypt, { hash } from "bcrypt";
import userModel from "../models/users.js";
const loginRouter = express.Router();
loginRouter.get("/",(req,res)=>{
    res.render("login");
})
loginRouter.post("/",async (req,res)=>{
    const user = {
        username : req.body.username,
        password : req.body.password,
    } 
    try{
    const find = await userModel.findOne({
        email: user.username,
       
    })
    if(!find){
        console.log("User Not found in DB plz create one");
        res.redirect("register");
    }
    else{
        bcrypt.compare(user.password,find.password,(err,result)=>{
            if(result===true){
                console.log("Successfully logged in");
                res.render("secrets");
            }
            else{
                console.log("Wrong Password");
            }
        })
    }
}
    
    catch(err){

    }
    
})
export default loginRouter;