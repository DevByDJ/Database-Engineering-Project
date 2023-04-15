const express = require('express')
const {json} = require('express')
const { authenticateToken } = require('../authentication.js')

const router = express.Router()

router.use(json())

router.use(async(req, res, next) => {

})

router.get('/', (req, res) => {

  res.render('dashboard')

})

module.exports = router