const express = require('express');
const app = express();
require('dotenv').config()
const path = require('path')

const userRoute = require('./src/route/api/user.js');


const mongoose = require('mongoose');


//MiddleWare BodyParser
app.use(express.json());

//DB config

const KEY = process.env.MONGO_URI;
//make connection
mongoose.connect(KEY,
    {useNewUrlParser: true, useCreateIndex: true,  });



app.use('/api/user', userRoute);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.info(`the server is running on ${PORT}`));







//handler for 404
app.use((req, res, next)=>{
    res.status(404).send("we cant find any route")
})
//handler for 500
app.use((err, req, res, next)=>{

    console.error(err.stack);
    res.status(500).send("server error")

})

