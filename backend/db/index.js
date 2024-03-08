const mongoose =require("mongoose");
// const { Schema } = require("zod");

mongoose.connect ( "mongodb+srv://ijatinyadav:Gag0cYxkjHs2LrjE@cluster0.ndb9da0.mongodb.net/PayTM-clone").then(()=>{
    console.log("DataBaseConnected")
})

const UserSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const accountSchema =new  mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:"User",
        required:true,
    },
    balance : { 
        type:Number,
        required:true
    }
});

const User=mongoose.model( "User", UserSchema);
const Accounts =mongoose.model("Accounts", accountSchema);
module.exports = {User,Accounts};