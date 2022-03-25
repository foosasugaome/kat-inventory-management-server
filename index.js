require('dotenv').config()
require('./models')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3001

//middleware
app.use(express.json())
app.use(cors())


const myMiddleWare = (req, res, next) => {
    console.log(` ${req.url} : ${req.body.email} logged in.`)        
    next()
}

app.use(myMiddleWare)

app.get('/', myMiddleWare, (req,res)=>{
    res.json({msg : `KAT Software Solutions`})
})

// controller
app.use('/api-v1/users', require('./controllers/api-v1/users'))


app.listen(PORT, () => {
    console.log(`KAT Server running on port : ${PORT}`)
})