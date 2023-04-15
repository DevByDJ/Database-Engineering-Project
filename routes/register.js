const express = require('express')
const {json} = require('express')
const controller = require('../tables/student/controller')

const router = express.Router()

router.use(json())

router.get('/', (req, res) =>
{
  console.log('register page')
  res.render('register')
})


router.post('/', controller.createStudent)


module.exports = router