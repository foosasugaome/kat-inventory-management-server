require('dotenv').config()
require('./models')
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const PORT = process.env.PORT || 3001

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


// const myMiddleWare = (req, res, next) => {
//     console.log(`Request made  at : ${req.url}`)        
//     next()
// }

// app.use(myMiddleWare)

app.get('/', (req,res)=>{
    res.json({msg : `KAT Software Solutions`})
})

// controller
app.use('/api-v1/users', require('./controllers/api-v1/users'))
app.use('/api-v1/inventory', require('./controllers/api-v1/inventory'))




app.listen(PORT, () => {
    console.log(`KAT Server running on port : ${PORT}`)
})