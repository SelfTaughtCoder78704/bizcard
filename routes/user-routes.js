const express = require('express')
const router = express.Router()

const User = require('../models/UserModel')

router.get('/signup', (req, res) => {
    res.render('signup-form', {title: "Sign Up"})
})

router.post('/signup', (req, res) => {
    let fName = req.body.fName
    let lName = req.body.lName
    let email = req.body.email
    let password = req.body.password

    const newUser = new User({
        fName,
        lName,
        email,
        password
    })
    newUser.save()
    .then((user) => {
        console.log(user)
        res.redirect('/')
    })
})

router.get('/login', ( req, res) => {
    res.render('login-form', {title: 'Log In'})
})

module.exports = router