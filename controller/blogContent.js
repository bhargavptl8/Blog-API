const moment = require('moment-timezone');
const BlogContent = require('../model/blogContent');

exports.BlogContentCreate = async (req, res) => {

    try {

        let { blogContentImage, title, blogContent, artist_Author, blogCategory } = req.body

        blogContentImage = req.file.filename;

        let blogContentCreate = await BlogContent.create({ blogContentImage, title, blogContent, artist_Author, blogCategory })

        res.status(201).json({
            status: 'Success',
            message: 'BlogContent Create SuccessFully',
            data: blogContentCreate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.BlogContentFind = async (req, res) => {

    try {

        let blogContentFind = await BlogContent.find().populate(['artist_Author','blogCategory']);

        res.status(200).json({
            status: 'Success',
            message: 'BlogContent Find SuccessFully',
            data: blogContentFind
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.BlogContentDelete = async (req, res) => {

    try {

        let blogContentId = req.params.blogContentId

        let blogContentDelete = await BlogContent.findByIdAndDelete(blogContentId);

        if (!blogContentDelete) {
            throw new Error('BlogContent Not Found');
        }

        res.status(301).json({
            status: 'Success',
            message: 'BlogContent Delete SuccessFully',
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.BlogContentUpdate = async (req, res) => {

    try {

        let blogContentId = req.params.blogContentId

        let find = await BlogContent.findById(blogContentId);

        let { title, blogContent, artist_Author, blogCategory} = req.body;

        if (!title) {
            req.body.title = find?.title
        }

        if (!blogContent) {
            req.body.blogContent = find?.blogContent
        }

        if (!artist_Author) {
            req.body.artist_Author = find?.artist_Author
        }

        if (!blogCategory) {
            req.body.blogCategory = find?.blogCategory
        }


        req.body.blogContentImage = req.file?.filename

        req.body.updationTime = moment().format('L');

        let blogContentUpdate = await BlogContent.findByIdAndUpdate(blogContentId, req.body, { new: true });

        if (!blogContentUpdate) {
            throw new Error('BlogContent Not Found');
        }

        res.status(201).json({
            status: 'Success',
            message: 'BlogContent Update SuccessFully',
            data: blogContentUpdate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}


exports.BlogViewCountUpdate = async (req, res) => {

    try {

        let blogContentId = req.params.blogContentId

        let blogViewCountUpdate = await BlogContent.findByIdAndUpdate(blogContentId, {$inc : {readCount_view : 1}}, { new: true });

        if (!blogViewCountUpdate) {
            throw new Error('BlogContent Not Found');
        }

        res.status(201).json({
            status: 'Success',
            message: 'BlogContent Update SuccessFully',
            data: blogViewCountUpdate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}