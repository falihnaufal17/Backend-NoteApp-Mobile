require('dotenv/config')

const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = process.env.PORT || 1700

// init routes
const categoryRoutes = require('./src/routers/category')
const noteRoutes = require('./src/routers/note')

app.listen(port, () => {
    console.log(`Server noteapp started with port: ${port}`)
})

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

// Routes
app.use('/categories', categoryRoutes)
app.use('/notes', noteRoutes)