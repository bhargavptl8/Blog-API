const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const User = require('../model/user')


exports.SignUp = async (req, res) => {

    try {


        let { firstName, lastName, userName, email, password } = req.body


        if (userName) {
            let checkSignUp = await User.findOne({ userName })

            if (checkSignUp) {
                throw new Error('UserName Already Use! Change Your UserName')
            }
        }

        if (email) {
            let checkSignUp = await User.findOne({ email })

            if (checkSignUp) {
                throw new Error('Email-ID Already Use! Change Your Email-ID')
            }
        }

        password = await bcrypt.hash(password, 10)

        let userCreate = await User.create({ firstName, lastName, userName, email, password })

        res.status(201).json({
            status: 'Success',
            message: 'User SignUp SuccessFully',
            data: userCreate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}


exports.Login = async (req, res) => {

    try {

        let { userName, email, password } = req.body

        let userFind = {}

        if (userName) {

            userFind = await User.findOne({ userName })

            if (!userFind) {
                throw new Error('UserName Not Found')
            }
        }

        if (email) {

            userFind = await User.findOne({ email })

            if (!userFind) {
                throw new Error('Email-ID Not Found')
            }
        }


        passwordCompare = await bcrypt.compare(password, userFind.password)

        if (!passwordCompare) {
            throw new Error('Invalid Password')
        }

        let token = jwt.sign({ id: userFind._id }, 'UserLogin');

        res.status(200).json({
            status: 'Success',
            message: 'User Login SuccessFully',
            data: userFind,
            token
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}