var express = require('express');
var router = express.Router();
var artistController  = require('../controller/artist');
var adminAuthentication  = require('../authentication/admin');

router.post('/create', adminAuthentication.sequre , artistController.ArtistCreate);
router.get('/find', adminAuthentication.sequre, artistController.ArtistFind);
router.delete('/delete/:artistId', adminAuthentication.sequre, artistController.ArtistDelete);
router.patch('/update/:artistId', adminAuthentication.sequre, artistController.ArtistUpdate);

module.exports = router;
