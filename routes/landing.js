var express = require('express');
var router = express.Router();
var blogCategoryController  = require('../controller/blogCategory');
var blogContentController  = require('../controller/blogContent');

router.get('/blogcategory/find', blogCategoryController.BlogCategoryFind);
router.get('/blogcontent/find', blogContentController.BlogContentFind);

router.patch('/blogcontent/view/:blogContentId', blogContentController.BlogViewCountUpdate);

module.exports = router;
