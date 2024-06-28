const BlogCategory = require('../model/blogCategory');


exports.BlogCategoryCreate = async (req, res) => {

    try {

        let {  blogCategoryName, blogCategoryImage } = req.body

        blogCategoryImage = req.file.filename;

        let blogCategoryCreate = await BlogCategory.create({ blogCategoryName, blogCategoryImage})

        res.status(201).json({
            status: 'Success',
            message: 'BlogCategory Create SuccessFully',
            data: blogCategoryCreate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.BlogCategoryFind = async (req, res) => {

    try {

        let blogCategoryFind = await BlogCategory.find();

        res.status(200).json({
            status: 'Success',
            message: 'BlogCategory Find SuccessFully',
            data: blogCategoryFind
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.BlogCategoryDelete = async (req, res) => {

    try {

        let blogCategoryId = req.params.blogCategoryId

        let blogCategoryDelete = await BlogCategory.findByIdAndDelete(blogCategoryId);

        if(!blogCategoryDelete)
            {
                throw new Error('BlogCategory Not Found');
            }

        res.status(301).json({
            status: 'Success',
            message: 'BlogCategory Delete SuccessFully',
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.BlogCategoryUpdate = async (req, res) => {

    try {

        let blogCategoryId = req.params.blogCategoryId

        let find = await BlogCategory.findById(blogCategoryId);

        let{blogCategoryName} = req.body;

        if(!blogCategoryName)
            {
                req.body.blogCategoryName = find.blogCategoryName
            }

        req.body.blogCategoryImage = req.file?.filename

        let blogCategoryUpdate = await BlogCategory.findByIdAndUpdate(blogCategoryId, req.body, {new : true});

        if(!blogCategoryUpdate)
            {
                throw new Error('BlogCategory Not Found');
            }

        res.status(201).json({
            status: 'Success',
            message: 'BlogCategory Update SuccessFully',
            data : blogCategoryUpdate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}
