
const express = require('express')
const mongoose = require('mongoose')
const {Router }= require('./routes/route')
const app = express()
const cors = require('cors')

app.use(cors())

let url = 'mongodb+srv://konain7:Kaunain%4099@cluster0.rmyvhx6.mongodb.net/newTodo'
mongoose.connect(url).then(()=>console.log('db is connected '))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',Router)

app.listen(3000)