const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const artistSchema = new Schema({
   
    firstName : {
        type : String,
        require : true
    },
    lastName : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    noOfArticleCreate : {
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

const Artist = mongoose.model('artist',artistSchema)

module.exports = Artist