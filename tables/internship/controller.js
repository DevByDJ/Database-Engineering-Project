const queries = require('../internship/queries');
const db = require('../../database');
const { json, request, response } = require('express');
const jwt = require('jsonwebtoken');

//adding new internship
const createInternsip = (request, response0) => {
  const {
    job_id,
    company_id,
    tag_id,
    position_name,
    position_type,
    location,
    start_date,
    end_date,
    semester,
  } = request.body;

  //check if internship exists
  db.query(queries.internshipExist, [job_id], (error, results) => {
    if (results.rows.length) response.send('Company already exists');
  });

  //creating internship
  db.query(
    queries.createInternsip,
    [
      company_id,
      tag_id,
      position_name,
      position_type,
      location,
      start_date,
      end_date,
      semester,
    ],
    (error, results) => {
      if (error) throw error;
      response.status(201).send('Internship Created!');
    }
  );
};

//getting single internship from db
const getInternship = (request, response) => {
  const { job_id } = request.body;
  db.query(queries.internshipExist, [job_id], (error, results) => {
    if (error) throw error;

    response.status(200).json(results.rows);
  });
};

//getting all internships in db
const allInternships = (request, response) => {
  db.query(queries.allInternships, (error, results) => {
    if (error) throw error;

    response.status(200).json(results.rows);
  });
};

//delete internship
const deleteInternship = (request, response) => {
  const { job_id } = request.body;
  db.query(queries.deleteInternship, [job_id], (error, resutls) => {
    if (error) throw error;

    response.status(201).send('Internship deleted!');
  });
};

module.exports = {
  createInternsip,
  allInternships,
  getInternship,
  deleteInternship,
};
