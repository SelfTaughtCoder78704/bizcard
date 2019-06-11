const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passport  = require('passport')
const localStrategy = require('passport-local')
const passportLocalMongoose = require('passport-local-mongoose')
const Card = require('./cards');



const userSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    cards: [
       {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Card"
       }
    ]
})
userSchema.plugin(passportLocalMongoose)
const User = mongoose.model("User", userSchema)

module.exports = User