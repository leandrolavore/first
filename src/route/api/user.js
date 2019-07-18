const express = require('express');
const router = express.Router();
const User = require('../../model/usermodel');

router.post('/',(req, res, next)=>{
    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      user: req.body.user,
      position: req.body.position,
      password: req.body.password,
      email: req.body.email,
    })
    newUser.save()
    .then(res.json(newUser))
    
}) 
router.get('/',(req, res, next)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(500).json(err))
})
router.delete('/:id', (req, res, next)=>{
    User.findById(req.params.id)
    .then(User=>User.remove())
    .then(res.json({success: true}))
    .catch(res.status(404).json({success: false}))
})


module.exports = router