var express = require('express');
var router = express.Router();
var userController  = require('../controller/user');

router.post('/signup', userController.SignUp);
router.post('/login', userController.Login);

module.exports = router;
