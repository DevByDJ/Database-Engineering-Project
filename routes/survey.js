const express = require('express')
const {json} = require('express') 
const controller = require('../tables/internship_survey/controller')

const router = express.Router()

router.use(json())

router.get('/', controller.getSurvey)

router.post('/', controller.createSurvey)

router.delete('/', controller.deleteSurvey)

// Exports this module as a router to be called by the main router.
module.exports = router