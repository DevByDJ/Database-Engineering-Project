const queries = require('../company/queries');
const db = require('../../database');
const { json, request, response } = require('express');
const jwt = require('jsonwebtoken');

//adding new company into db
const createCompany = (request, response) => {
  const { name, indsutry, location } = request.body;

  //check if company exists
  db.query(queries.companyExist, [name], (error, results) => {
    if (results.rows.length) {
      response.send('Company already exists');
    }
  });

  //create company if it doesnt already exist
  db.query(queries.newCompany, [name, indsutry, location], (error, results) => {
    if (error) {
      throw error;
    }

    response.status(201).send('Company Created!');
  });
};

//getting a single company from db
const getCompany = (request, response) => {
  const { company_id } = request.body;
  db.query(queries.getCompany, [company_id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

//get all companies
const getAllCompanies = (request, response) => {
  db.query(queries.getCompanies),
    (error, results) => {
      if (error) throw error;
      response.status(200).json(results.rows);
    };
};

module.exports = {
  createCompany,
  getCompany,
  getAllCompanies,
};
