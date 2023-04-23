const queries = require('../internship_survey/queries')
const db = require('../../database');
const { response } = require('express');

const getSurvey = (request, response) => {
  const { student_id, survey_id} = request.body;

  db.query(queries.getSurvey, [student_id, survey_id], (error, results) => {
    if(error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const createSurvey = (request, response) => {
  const { survey_id, student_id, job_id } = request.body

  db.query(queries.createNewSurvey, [survey_id, student_id, job_id], (error, results) => {
    if(error) {
      throw error
    }

    response.status(200).send('Survey has been Created!')
    console.log('Survey has been Created!')
  })
}


const deleteSurvey = (request, response) => {
  const { survey_id } = request.body

  db.query(queries.deleteSurvey, [survey_id], (error, results) => {
    if(error) {
      throw error
    }

    response.status(200).send('Survey has been deleted!')
    console.log('Survey has been deleted!')
  })
}

module.exports = {
  getSurvey,
  createSurvey,
  deleteSurvey,
}