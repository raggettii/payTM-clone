const express=require("express");
const jwt =require("jsonwebtoken");
const JWT_SECRET =require("../JWT_SECRET")
// naya router define kar diya 
const userRouter =express.Router()
// import rootRouter from ".";
const z = require("zod"); 
const middleware =require("../middlewares/middleware")

const {User,Accounts}=require("../db/index");

const signupBody = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password : z.string()
})

// const emailSchema =z.string().email();



userRouter.post("/signup" ,async(req,res)=>{

    const {success}  = signupBody.safeParse(req.body);

    if(!success) {
        return res.status(411).json({
            message:"Incorrect inputs"
        })
    }

    const existingUser =await User.findOne({
        email : req.body.email
    });

    if(existingUser){
        res.status(411).json({
            message:"User exists try login"
        })
    }

    const user =await User.create ({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password
    })

    const userId = user._id;
    const email = req.body.email;
    const token = jwt.sign({
        email
    }, JWT_SECRET);
    await Accounts.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    res.json({
        message: "User created successfully",
        token: token
    })

    // const firstName= req.body.firstName;
    // const lastName = req.body.lastName ; 
    // const email =req.body.email;
    // try{
    //     // kaafi mistakes hai isme parse kiya par 
    //     // sahi hua ki nhi usse fark nhi pata seedhe aage 
    //     // bad gaye
    //     emailSchema.parse(email);
    //     if(await User.find({email:email})){
    //         res.json({
    //             msg:"User exist try login"
    //         })
    //     }else{
    //         const user =await User.create ({
    //             firstName:firstName,
    //             lastName:lastName,
    //             email:email,
    //             password:password
    //         })
    //         const userId = user._id;
    //     }
    //     res.json({
    //         message:"New user created successfully",
    //         // msg:`${newId} of newly added user`
    //     })
    // }catch(error){
    //     res.json({
    //         msg:"Email is invalid"
    //     })
    // }
})


userRouter.post("/signin",async (req,res)=>{
    // below can be better by using zod same as above 
    // but continue for now 
    const email=req.body.email;
    const password=req.body.password;
    if(await User.find({email:email})){
        const token= jwt.sign({email},JWT_SECRET);
        res.status(200).json(token);
    }else{
        res.status(411).json({
            message: "Error while logging in"
        })
    }
})

userRouter.put("/update",middleware,async(req,res)=>{
    const updateBody = z.object({
        firstName:z.string().optional(),
        lastName:z.string().optional(),
        password:z.string().optional(),
    })

    const {success} = updateBody.safeParse(req.body);

    if(!success){
        res.status(411).json({
            message:"Incorrect inputs"
        })
    }

    const {firstName,lastName,password}= req.body;

    const updateObject ={};

    if(firstName){updateObject.firstName=firstName;}
    if(lastName) {updateObject.lastName=lastName;}
    if(password) {updateObject.password=password;}
    await User.updateOne({
        email:req.email
    },{$set: updateObject});

    res.json({
        message:"Updates successfully"
    })
})

userRouter.get("/bulk",async(req,res)=>{
    const toFind = req.query.filter;
    const foundUser = await User.find({$or:[{firstName:toFind},{lastName:toFind}]})

    // res.status(200).json({
    //     users:foundUser
    // })
    // above one i wrote 
    // works fine but we don't want to
    //  display password so have to choose what to display on the screen
    try{

    res.json({
        user: foundUser.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
}catch(error){
    res.status(500).json({
        msg:"Error bruhhh"
    })
}

})

module.exports =userRouter;