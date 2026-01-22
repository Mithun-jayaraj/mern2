const Task = require('../models/task')

exports.createTask = async (req, res) => {
       try {
           const task = await Task.create({
                   title : req.body.title,
                   description : req.body.description,
                   status : req.body.status||'pending',
                   user : req.user.id
                    
              })
              res.status(201).send({message:"task created successfully"})


       } catch (error) {
        res.status(500).send(error);
       }

}
exports.getTasks = async (req, res) => {
       try {
                 const tasks = await Task.find({user:req.user.id})
                       res.json(tasks)
       } catch (error) {
              res.status(500).send(error);
       }
}
exports.getTasksById = async (req, res) => {
       try {
              const task = await Task.findOne({
                     _id:req.params.id,
                     user:req.user.id
              })
              res.json(task)
       } catch (error) {    
               res.json(error)
       }
}

exports.updateTask = async (req, res) => {
       try{
      const task = await Task.findOneAndUpdate({
               _id:req.params.id,
               user:req.user.id
      },
       {
              title : req.body.title,
              description : req.body.description,
              status : req.body.status    

       },
      { new: true })
      if(!task){
              res.json({message:"no task exists"})
      }
      res.json(task)
   } catch (error) {
       res.status(500).send(error);
   }
}
exports.deleteTask = async (req, res) => {
       try {
              const task = await Task.findOneAndDelete({
                     _id:req.params.id,
                     user:req.user.id
              })
              res.json({message:"task deleted successfully"})
       } catch (error) {    
               res.json(error)
       }                    
}