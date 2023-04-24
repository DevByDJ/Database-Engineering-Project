// -- View Table Queries --
const createTable = 'CREATE VIEW project_view AS SELECT s.student_id, s.username, s.grade_level, s.major, s.school, s.email, i.job_id, i.position_name, i.position_type, i.location, i.start_date, i.end_date, i.semester, c.company_id, c.name AS company_name, c.industry, c.location AS company_location, t.tag_id, t.description AS tag_description, su.survey_id FROM student s JOIN internship_survey su ON s.student_id = su.student_id JOIN internship i ON su.job_id = i.job_id JOIN company c ON i.company_id = c.company_id JOIN tag t ON i.tag_id = t.tag_id'
const getTable = 'SELECT * FROM project_view'

module.exports = {
  createTable,
  getTable,
}