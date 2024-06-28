var express = require('express');
var router = express.Router();
const multer  = require('multer')
var blogCategoryController  = require('../controller/blogCategory');
var adminAuthentication  = require('../authentication/admin');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/create', adminAuthentication.sequre , upload.single('blogCategoryImage') , blogCategoryController.BlogCategoryCreate);
router.get('/find', adminAuthentication.sequre, blogCategoryController.BlogCategoryFind);
router.delete('/delete/:blogCategoryId', adminAuthentication.sequre, blogCategoryController.BlogCategoryDelete);
router.patch('/update/:blogCategoryId', adminAuthentication.sequre, upload.single('blogCategoryImage') , blogCategoryController.BlogCategoryUpdate);

module.exports = router;
