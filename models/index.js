const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/katims'

mongoose.connect(MONGODB_URI)

const db = mongoose.connection


db.once('open', () => {
    console.log(`Connected to mongodb at ${db.host}:${db.port}`)
})

db.on('error', (err)=> {
    console.error(`Database error: \n ${err}`)
})

module.exports.Users = require('./users')
module.exports.Inventory = require('./inventory')