
import express from "express";
import { Router } from "express";
const homeRoute = express.Router();
homeRoute.get("/",(req,res)=>{
    res.render("home");
});
export default (homeRoute);