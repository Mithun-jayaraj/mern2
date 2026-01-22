const Task= require('../models/task')

exports.createTask=async(req,res)=>{   
    try{
    
    const task = await Task.create({
        
        title : req.body.title,
        description : req.body.description,
        status: req.body.status || 'pending',
        user :req.user.id,
    })
    res.status(201).send({message:"task created successfully"})
    }
    catch(error){
    res.status(500).send({message:"internal server error"})
    }
}