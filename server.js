const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());

mongoose
    .connect(
        process.env.MONGO_URID,
    )
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((err) => {console.error('MongoDB connection error:', err);});

app.use('/auth', require('./routes/authroutes'));
app.use('/tasks', require('./routes/taskroutes'));

app.get('/api', (req, res) => {
        res.send('Hello from express');
    });
app.post('/api', (req, res) => {
    const temp = req.body;
    res.send(temp);
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});