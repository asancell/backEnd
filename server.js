const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');


require('dotenv').config();
const port = process.env.API_PORT || process.env.PORT
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth',require('./app/routers/auth.router'))
// app.use('/me',require('./app/routers/user.router'))
// response default root path of server
app.get('/',(req,res)=>{
    res.send({server:{
        message : "Hello World Of Midnanae Project"
    }})
})

// listening of server
app.listen(port, () => {
    console.log("server an listen on link "+ port)
})
