// we need to verify the JWT
const JWT_SECRET =require("../JWT_SECRET");
const User =require("../db/index");
const jwt =require("jsonwebtoken");

const middleware = async(req,res,next)=>{
    const authToken=req.headers.authorization;
    // console.log(authToken);
    const yetToSplitToken =authToken.split(' ');
    // console.log(yetToSplitToken);
    const actualToken=yetToSplitToken[1];
    // console.log(actualToken);
    const decodedValue =jwt.verify(actualToken,JWT_SECRET);
    // console.log(decodedValue,"<<<---");
    if(decodedValue.email){
        req.email=decodedValue.email;
        // console.log("next se just pehle")
        next();
    }
    else{
        res.status(403).json({
            msg:"You are not authenticated"
        })
    }
}


module.exports =middleware;
