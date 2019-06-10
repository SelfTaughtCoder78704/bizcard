const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const homeRouter = require('./routes/home-routes')
const userRouter = require('./routes/user-routes')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/business_card', {useNewUrlParser: true}, () => {
    console.log("MONGODB CONNECTED")
});


app.use('/', homeRouter)
app.use('/users', userRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server started on ${port}.`)
})