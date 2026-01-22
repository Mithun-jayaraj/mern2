const jwt=require('jsonwebtoken')

exports.protect=(req,res,next)=>{
    const token=req.headers.authoriztaion
    if(!token || token.startsWith('Bearer')){
        res.status(401).json({msg:"Not authorized"})
    }
    try{
        token=token.split(' ')[1];
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next()
    } catch (error){
        res.send("Invalid token")
    }
}