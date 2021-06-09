const express = require('express');
const mongoose = require('mongoose');
const app= express();

require('dotenv').config(); 

//connexion 
const mongoUrl = "mongodb+srv://Marie:hello123@devconnecter.rop2e.mongodb.net/test?authSource=admin&replicaSet=atlas-3u043x-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"   
app.use(express.json()) 

app.use('/users', require('./Routes/userRoutes'))

mongoose.connect( mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true }, (err)=>{
    if(err) throw err;
    console.log('MongoDB Connected ...')
})

const port = 5000
app.listen(port,(err)=>{
  if(err) throw err;
    console.log('server is running on port 5000')  
})


