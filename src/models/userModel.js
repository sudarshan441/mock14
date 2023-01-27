const {model,Schema}=require("mongoose");
const userSchema=new Schema({ 
    name:{
        type:String,
        required:true,

    },
    level:{
        type:String,
        required:true,
        enum:["hard","medium","easy"]
    },
    score:{
        type:Number,
        required:true,

    },
   
})
const userModel=model("user",userSchema);

module.exports=userModel