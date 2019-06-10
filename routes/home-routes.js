const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home', {title: "Business Card Builder"})
})

module.exports = router