const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{console.log("MongoDb connected successfully")})
    .catch((err)=>{console.log(err)});
app.use('/api/auth',require('./routes/authroutes'))
app.use('/api/tasks',require('./routes/taskroutes'))
app.get('/api',(req,res)=>{
    res.send('hi from express')
})
app.post('/api',(req,res)=>{
    temp=req.body;
    res.send(temp);
})
app.listen(4000,()=>{
    console.log('Server is running in 4000')
})