const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const Admin = require('../model/admin')


exports.SignUp = async (req, res) => {

    try {

        let { email, password } = req.body

        password = await bcrypt.hash(password, 10)

        let adminCreate = await Admin.create({ email, password })

        res.status(201).json({
            status: 'Success',
            message: 'Admin SignUp SuccessFully',
            data: adminCreate
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

        let { email, password } = req.body

        let adminFind = await Admin.findOne({ email })

            if (!adminFind) {
                throw new Error('Email-ID Not Found')
            }


        let passwordCompare = await bcrypt.compare(password, adminFind.password)

        if (!passwordCompare) {
            throw new Error('Invalid Password')
        }

        let token = jwt.sign({ id: adminFind._id }, 'AdminLogin');

        res.status(200).json({
            status: 'Success',
            message: 'Admin Login SuccessFully',
            data: adminFind,
            token
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}