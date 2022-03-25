require('dotenv').config()
const express = require('express')
const router = express.Router()
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
const db = require('../../models')
// const requiresToken = require('../requiresToken')

router.get('/inventory', async (req, res) => {
    
})
module.exports = router