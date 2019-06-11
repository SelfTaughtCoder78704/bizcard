const express = require('express')
const User = require('../models/users')
const passport = require('passport')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home', {title: "Business Card Builder"})
})
router.get('/signup', (req, res) => {
    res.render('signup-form', {title: "Sign Up"})
})

router.post('/signup', (req, res) => {
    User.register(new User({ 
        fName: req.body.fName,
        lName: req.body.lName,
        username: req.body.username}), 
        req.body.password, (err, user) => {
        if(err) {
            console.log(err)
            return res.render('signup-form', {title: "Sign Up"})
        }
        passport.authenticate('local')(req, res, function() {
            res.redirect('/')
        })
    })
})

router.get('/login', ( req, res) => {
    res.render('login-form', {title: 'Log In'})
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}), (req, res) => {
   
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login')
}
module.exports = router