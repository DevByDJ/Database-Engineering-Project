const createStudent = 'INSERT INTO student (username, grade_level, major, school, email, password) VALUES ($1, $2, $3, $4, $5, $6)'
const getStudents = 'SELECT * FROM student'

module.exports = {
  createStudent,
  getStudents,
}