const express = require('express');
const router = express.Router();
const User = require('../Models/User');




//add user 
router.post('/newuser', (req, res)=>{
    let newUser= new User(req.body)
    newUser.save( (err, data)=>{
        err? console.log(err) : res.send('User added')    })
})


//get users 
router.get('/', (req, res)=>{
    User.find({}, (err, data)=>{
        err? console.log(err) : res.json(data) 
    })
})


//updta user by id 
router.put('/update/:id', (req,res)=>{
    User.findByIdAndUpdate({_id:req.params.id}, {...res.body} ,(err, msg)=>{
        err? console.log(err) : res.json({msg: "User updated"}) 
    })
})


// delete user by id 
router.delete('/deleteuser/:id', (req, res)=>{
    User.findByIdAndDelete({_id: req.params.id}, (err,msg)=>{
        err? console.log(err) : res.json({msg:'User  deleted'}) 

    })
})

module.exports = router
