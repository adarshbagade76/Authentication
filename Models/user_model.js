const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
   userName: {
    type: String,
    required: true
   },
   email: {
    type: String,
    required: true
   },
   password: {
    type: String,
    required: true
   },
   phoneNumber: {
    type: String
   }
})

const user = mongoose.model('User', UserModel);

module.exports = user;