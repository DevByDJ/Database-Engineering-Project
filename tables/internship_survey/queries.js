const getSurvey='SELECT s.student_id, s.username, isu.survey_id, i.job_id, i.position_name, c.name FROM internship i INNER JOIN internship_survey isu ON i.job_id = isu.job_id INNER JOIN student s ON isu.student_id = s.student_id LEFT OUTER JOIN company c ON i.company_id = c.company_id WHERE s.student_id = $1 AND isu.survey_id = $2 ORDER BY isu.survey_id'
const createNewSurvey='INSERT into internship_survey(survey_id, student_id, job_id) VALUES ($1, $2, $3)'
const deleteSurvey='DELETE FROM internship_survey WHERE survey_id = $1'


module.exports = {
  getSurvey,
  createNewSurvey,
  deleteSurvey,
}