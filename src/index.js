const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const userModel = require("./models/userModel");

const app=express();
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    let arr=["el chapo","pablo","garcia","rafa","pacino","mexico","colombia","cali cartel","medellin cartel","scarface","peru"];

 res.send({word:arr[Math.floor(Math.random()*arr.length)]})
})

app.post("/",async(req,res)=>{
   const {name,level,score}=req.body;
   const user=await userModel.create({name:name,level:level,score:score})
              user.save();
 res.send(user)
})
app.get("/user",async(req,res)=>{
    const user=await userModel.find()
  res.send(user)
 })
mongoose.connect("mongodb+srv://sudarshan:sudarshan@cluster0.ydgncyl.mongodb.net/mock1a").then(()=>{
    app.listen(8003,()=>{
        console.log("server started")
    })
})