const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ciudades', {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Conected to Database'))

app.use(express.json())

const ciudadesRouter = require('./routes/ciudades')
app.use('/ciudades', ciudadesRouter)

app.listen(3000, () =>{
    console.log("Server started")
})