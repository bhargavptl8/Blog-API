const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
   
    firstName : {
        type : String,
        require : true
    },
    lastName : {
        type : String,
        required : true
    },
    userName : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },

});

const User = mongoose.model('user',userSchema)

module.exports = User