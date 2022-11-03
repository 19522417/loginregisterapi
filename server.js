// dotenv
require('dotenv').config();

// connect DB
const {connectDB} = require('./configs/db');

connectDB();

const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/authRoute');

const app = express();

// cors 
app.use(cors());

// bodyparser
app.use(express.json());

// mount the route
app.use('/api/v1/auth', authRoute);

app.use('/api/v1/auth', (res,req)=>{
    res.send('hi');
});


const port = process.env.APP_PORT;

app.listen(port,()=> {
    console.log(`Server is running on port ${port}`);
})