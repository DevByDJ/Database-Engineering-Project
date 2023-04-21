const queries = require('../student/queries');
const db = require('../../database');
const { json } = require('express');
const jwt = require('jsonwebtoken');

const createStudent = (request, response) => {
  const { username, grade_level, major, school, email, password } =
    request.body;

  // Check if the email is already be used..
  db.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      response.send('Email already exists');
    }
  });

  // Check if the username is already be used..
  db.query(queries.checkUsernameExists, [username], (error, results) => {
    if (results.rows.length) {
      response.send('Username already exists');
    }
  });

  // Create the student if the other two requirements are satisfied!
  db.query(
    queries.createStudent,
    [username, grade_level, major, school, email, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send('Student created!');
    }
  );
};

//getting all students in db
const getStudents = (request, response) => {
  db.query(queries.getStudents, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

//checking if user is authorized
const validateStudent = (request, response) => {
  const { email, password } = request.body;
  db.query(queries.loginCredentials, [email, password], (error, results) => {
    if (error) {
      throw error;
    }

    if (results.rowCount > 0) {
      console.log('Results from Query: ' + JSON.stringify(results));
      const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
      response.json({ accessToken: accessToken }).status(200);
    } else {
      response.send('LOG IN FAILED!').status(400);
    }
  });
};

//looking for a single student
const getSingleStudent = (request, response) => {
  const { username } = request.body;
  db.query(queries.checkUsernameExists, [username], (error, results) => {
    if (error) throw error;

    response.status(200).json(results.rows);
  });
};

module.exports = {
  createStudent,
  getStudents,
  validateStudent,
  getSingleStudent,
};
