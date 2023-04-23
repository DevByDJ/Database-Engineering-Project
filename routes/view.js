const express = require('express')
const {json} = require('express') 
const controller = require('../tables/viewTable/controller')

const router = express.Router()

router.use(json())

router.get('/', controller.getTable)

router.post('/', controller.createTable)

// Exports this module as a router to be called by the main router.
module.exports = router