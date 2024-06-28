const mongoose = require('mongoose');
const moment = require('moment-timezone');
const Schema = mongoose.Schema;


const blogContentSchema = new Schema({
    
    blogContentImage : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    blogContent : {
        type : String,
        required : true
    },
    artist_Author : {
        type : Schema.Types.ObjectId,
        ref : 'artist'
    },
    blogCategory : {
        type : Schema.Types.ObjectId,
        ref : 'blogcategory'
    },
    readCount_view : {
        type : Number,
        default : 0
    },
    createTime : {
        type : String,
        default : () => moment().format('L')
    },
    updationTime : {
        type : String
    }
   
});

const BlogContent = mongoose.model('blogcontent',blogContentSchema)

module.exports = BlogContent