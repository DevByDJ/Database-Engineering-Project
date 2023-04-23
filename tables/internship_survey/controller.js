const queries = require('../internship_survey/queries')
const db = require('../../database');
const { response } = require('express');

/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {request.body} student_id
 * @param {request.body} survey_id
 * * Get a survey completed by a student by passing in their student_id and survey_id within the request body of the api
 */
const getSurvey = (request, response) => {
  const { student_id, survey_id} = request.body;

  db.query(queries.getSurvey, [student_id, survey_id], (error, results) => {
    if(error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
} // end of getSurvey

/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {request.body} student_id
 * @param {request.body} survey_id
 * @param {request.body} job_id
 * * Create a new survey by passing in the survey, student and job id from the request body.
 */
const createSurvey = (request, response) => {
  const { survey_id, student_id, job_id } = request.body

  db.query(queries.createNewSurvey, [survey_id, student_id, job_id], (error, results) => {
    if(error) {
      throw error
    }

    response.status(200).send('Survey has been Created!')
    console.log('Survey has been Created!')
  })
} // end of createSurvey


/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {request.body} survey_id
 * * Delete a survey by passing the survey_id from the request body. 
 */
const deleteSurvey = (request, response) => {
  const { survey_id } = request.body

  db.query(queries.deleteSurvey, [survey_id], (error, results) => {
    if(error) {
      throw error
    }

    response.status(200).send('Survey has been deleted!')
    console.log('Survey has been deleted!')
  })
} // end of deleteSurvey


module.exports = {
  getSurvey,
  createSurvey,
  deleteSurvey,
}