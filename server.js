const express = require('express')
const app = express()
const connectDB = require('./config/db')
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json({extended: false}))

connectDB()

app.use('/photo', require('./routes/Photo'))


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`You're running on port: ${PORT}`))