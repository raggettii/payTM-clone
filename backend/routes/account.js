const express=require("express");
const middleware = require("../middlewares/middleware")
const accountRouter= express.Router();
const {User, Accounts} = require("../db");
const z =require("zod");

accountRouter.get("/balance",middleware,async(req,res)=>{
    // console.log("HHIIII");
    const balanceUser = await User.findOne({
        email:req.email
    })
    // console.log(balanceUser);
    const account = await Accounts.findOne({
        userId : balanceUser._id,
    })

    res.json({
        balance : account.balance
    })
})

const transferBody = z.object({
    to: z.string(),
    amount: z.number(),
})

accountRouter.post("/transfer",middleware,async(req,res)=>{
    const {success} = transferBody.safeParse(req.body);
    // console.log("One")
    if(!success){
        res.status(411).json({
            message:"invailid inputs"
        })
    }
    // console.log("two")
    const fromUser = await User.findOne({
        email:req.email
    })
    // console.log("three")
    const fromUserId =await Accounts.findOne({
        userId : fromUser._id,
    })
    // console.log("four")
    await Accounts.updateOne({
        userId:req.body.to
    },{$inc : {balance:req.body.amount}})
    // console.log("five")
    await Accounts.updateOne({
        userId:fromUserId
    },{$inc : {balance:-req.body.amount}})
    res.json({
        msg:"Transaction Done Successfully"
    })
})

module.exports =accountRouter;