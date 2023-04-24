const createStudent = 'INSERT INTO student (username, grade_level, major, school, email, password) VALUES ($1, $2, $3, $4, $5, $6)'
const getAllStudents = 'SELECT * FROM student'
const checkEmailExists ='SELECT s FROM student s WHERE s.email = $1'
const checkUsernameExists = 'SELECT s FROM student s WHERE s.username = $1'
const loginCredentials = 'SELECT s FROM student s WHERE s.password = $1'

module.exports = {
  createStudent,
  getAllStudents,
  checkEmailExists,
  checkUsernameExists,
  loginCredentials,
}