const queries = require('../student/queries')
const db = require('../../database')

const createStudent = (request, response) => {
  const { username, grade_level, major, school, email, password } = request.body

  db.query(queries.createStudent, [username, grade_level, major, school, email, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('Student created!')
  })
}

const getStudents = (request, response) => {
  db.query(queries.getStudents, (error, results) => {
    if(error) {
      throw error
    }
    response.status(200).json(results.rows);
  })
}


module.exports = {
    createStudent,
    getStudents,
}

