const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

//Import Routes

//Middleware
app.use(bodyParser.json())
app.use(cors())




//connecting to the database
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true , useUnifiedTopology:true},
    () =>{
        console.log("connected to the database")
    }
)

const userRouter = require('./routes/UserRoute.js');
app.use("/user",userRouter);

//server start
app.listen(9000);