const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blogCategorySchema = new Schema({
    
    blogCategoryName : {
        type : String,
        required : true
    },
    blogCategoryImage : {
        type : String,
        require : true
    }
   
});

const BlogCategory = mongoose.model('blogcategory',blogCategorySchema)

module.exports = BlogCategory