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
    console.log(`Request made  at : ${req.url}`)        
    next()
}

app.use(myMiddleWare)

app.get('/', myMiddleWare, (req,res)=>{
    res.json({msg : `KAT Software Solutions`})
})

// controller
app.use('/api-v1/users', myMiddleWare, require('./controllers/api-v1/users'))
app.use('/api-v1/inventory', require('./controllers/api-v1/inventory'))


app.listen(PORT, () => {
    console.log(`KAT Server running on port : ${PORT}`)
})