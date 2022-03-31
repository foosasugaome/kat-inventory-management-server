require('dotenv').config()
require('./models')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const db = require('./models')
const cors = require('cors')
const morgan = require('morgan')
const PORT = process.env.PORT || 3001

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


const myMiddleWare = async (req, res, next) => {
    try {
        const adminEmail = 'admin@katims.com'
        const adminUsername = 'admin'
        const adminPassword = 'admin'

        // check if admin account exists
        const userCheck = await db.Users.findOne({ $or: [
            {email: adminEmail,},{username : adminUsername }]
        })

        // if(userCheck) return res.status(409).json({ msg: 'Email/Username already in use.'})
        if(!userCheck) {
            const salt = 12
        const hashedPassword = await bcrypt.hash(adminPassword, salt)
        
        // create a user in the db
        const newUser = await db.Users.create({
            username: adminUsername,
            firstname: 'admin',
            lastname: 'admin',
            email: adminEmail,
            password: hashedPassword,
            manager: true
        })        
        }        
    } catch(err) {
        console.log(err)        
    }    
    next()
}

app.use(myMiddleWare)

app.get('/', myMiddleWare, (req,res)=>{
    res.json({msg : `KAT Software Solutions`})
})

// controller
app.use('/api-v1/users', require('./controllers/api-v1/users'))
app.use('/api-v1/inventory', require('./controllers/api-v1/inventory'))




app.listen(PORT, () => {
    console.log(`KAT Server running on port : ${PORT}`)
})