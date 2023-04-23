const express = require('express')
const {json} = require('express') 
const controller = require('../tables/tag/controller')

const router = express.Router()

router.use(json())

router.get('/', controller.getTag)

router.get('/all', controller.getAllTags)

router.post('/', controller.createNewTag)

router.put('/', controller.updateTag)

router.delete('/', controller.deleteTag)

// Exports this module as a router to be called by the main router.
module.exports = router