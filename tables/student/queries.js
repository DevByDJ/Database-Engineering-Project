const createStudent = 'INSERT INTO student (username, grade_level, major, school, email, password) VALUES ($1, $2, $3, $4, $5, $6)'
const getStudents = 'SELECT * FROM student'
const checkEmailExists ='SELECT s FROM student s WHERE s.email = $1'
const checkUsernameExists = 'SELECT s FROM student s WHERE s.username = $1'
const loginCredentials = 'SELECT * FROM student WHERE email = $1 AND password = $2'

module.exports = {
  createStudent,
  getStudents,
  checkEmailExists,
  checkUsernameExists,
  loginCredentials,
}