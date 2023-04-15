require('dotenv').config()

const express = require('express')
const {json} = require('express') 
const jwt = require('jsonwebtoken')

const router = express.Router()

router.use(json())

router.get('/', (req, res) =>
{
  res.render('login')
})

router.post('/', )

// Exports this module as a router to be called by the main router.
module.exports = router