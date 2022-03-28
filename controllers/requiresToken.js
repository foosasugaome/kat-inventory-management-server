// require('dotenv').config()
const jwt = require('jsonwebtoken')
const db = require('../models')

async function requiresToken(req,res, next) {
    try {        
        const token = req.headers.authorization

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)

        const foundUser = await db.Users.findById(decoded.id)

        res.locals.user = foundUser

        next()
    } catch(err) {
        console.log(err)
        res.status(401).json({ msg: 'not allowed '})
        
    }
}
module.exports = requiresToken