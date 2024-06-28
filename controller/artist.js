const bcrypt = require('bcrypt');
const Artist = require('../model/artist');


exports.ArtistCreate = async (req, res) => {

    try {

        let { firstName, lastName, country, state, city, noOfArticleCreate, userName, email, password } = req.body

        password = await bcrypt.hash(password, 10)

        let artistCreate = await Artist.create({ firstName, lastName, country, state, city, noOfArticleCreate, userName, email, password })

        res.status(201).json({
            status: 'Success',
            message: 'Artist Create SuccessFully',
            data: artistCreate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.ArtistFind = async (req, res) => {

    try {

        let artistFind = await Artist.find();

        res.status(200).json({
            status: 'Success',
            message: 'Artist Find SuccessFully',
            data: artistFind
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.ArtistDelete = async (req, res) => {

    try {

        let artistId = req.params.artistId

        let artistDelete = await Artist.findByIdAndDelete(artistId);

        if(!artistDelete)
            {
                throw new Error('Artist Not Found');
            }


        res.status(301).json({
            status: 'Success',
            message: 'Artist Delete SuccessFully',
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.ArtistUpdate = async (req, res) => {

    try {

        let artistId = req.params.artistId

        let artistUpdate = await Artist.findByIdAndUpdate(artistId, req.body, {new : true});

        if(!artistUpdate)
            {
                throw new Error('Artist Not Found');
            }


        res.status(201).json({
            status: 'Success',
            message: 'Artist Update SuccessFully',
            data : artistUpdate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}
