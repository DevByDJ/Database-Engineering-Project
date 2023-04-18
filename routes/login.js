const express = require('express')
const {json} = require('express') 
const controller = require('../tables/student/controller')

const router = express.Router()

router.use(json())

router.get('/', (req, res) =>
{
  res.render('login')
})

router.post('/', controller.validateStudent)

// Exports this module as a router to be called by the main router.
module.exports = router