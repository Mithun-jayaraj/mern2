const jwt=require('jsonwebtoken');

exports.protect=(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1]
    if(!token ){
        res.status(401).json({message:"not authorized"})
    }
    try {
         
             const decoded = jwt.verify(token,process.env.JWT_SECRET)
                req.user=decoded
                next()
    } catch (error) {
        res.send("invalid token")
    }

}