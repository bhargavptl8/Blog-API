var express = require('express');
var router = express.Router();
const multer  = require('multer')
var blogContentController  = require('../controller/blogContent');
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

router.post('/create', adminAuthentication.sequre , upload.single('blogContentImage') , blogContentController.BlogContentCreate);
router.get('/find', adminAuthentication.sequre, blogContentController.BlogContentFind);
router.delete('/delete/:blogContentId', adminAuthentication.sequre, blogContentController.BlogContentDelete);
router.patch('/update/:blogContentId', adminAuthentication.sequre, upload.single('blogContentImage') , blogContentController.BlogContentUpdate);

module.exports = router;
