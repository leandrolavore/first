const express = require('express');
const app = express();
require('dotenv').config()


const userRoute = require('./src/route/api/user.js');


const mongoose = require('mongoose');


//MiddleWare BodyParser
app.use(express.json());

//DB config

const KEY = process.env.MONGO_URI;
//make connection
mongoose.connect(KEY,
    {useNewUrlParser: true, useCreateIndex: true,  });






const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.info(`the server is running on ${PORT}`));



app.use('/api/user', userRoute);


app.use(express.static('public'));

//handler for 404
app.use((req, res, next)=>{
    res.status(404).send("we cant find any route")
})
//handler for 500
app.use((err, req, res, next)=>{

    console.error(err.stack);
    res.status(500).send("server error")

})

