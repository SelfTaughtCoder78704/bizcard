const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const localStrategy = require('passport-local')
const passportLocalMongoose = require('passport-local-mongoose')
const User = require('./models/users')
const homeRouter = require('./routes/home-routes')
const userRouter = require('./routes/user-routes')
const app = express()


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('express-session')({
    secret: "thisishowwedoit",
    resave: false,
    saveUninitialized: false
}))

app.set('view engine', 'ejs')
app.use(express.static('public'))



app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use('/', homeRouter)
app.use('/users', userRouter)

mongoose.connect('mongodb://localhost:27017/business_card', {useNewUrlParser: true}, () => {
    console.log("MONGODB CONNECTED")
});
mongoose.set('useCreateIndex', true);




const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server started on ${port}.`)
})