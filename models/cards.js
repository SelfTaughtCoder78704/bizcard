const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const cardSchema = new Schema({
    name: {
        type: String
    
    },
    email: {
        type: String
    },
    business: {
        name: {
            type: String
        },
        street: {
            type: String
        },
        city: {
            type: String
        },
        zip: {
            type: Number
        }
    },
    phone: {
        type: String
    }, 
    logo: {
        type: String
    }
    
});

const Card = mongoose.model('Card', cardSchema)
module.exports = Card