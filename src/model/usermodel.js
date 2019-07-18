const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
       
      },
      lastname: {
        type: String,
        required: true,
       
      },
      user: {
        type: String,
        required: true,
        unique: true
      },
      password:{
      
        type:String
       
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      position: {
        type: String,
      },
      terms: false,
      registered:{
          type: Date,
          default: Date.now
      }
});

module.exports = mongoose.model('User', UserSchema);