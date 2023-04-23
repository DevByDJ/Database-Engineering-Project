const queries = require('../viewTable/queries')
const db = require('../../database');
const {json} = require('express')

/**
 * 
 * @param {*} request 
 * @param {*} response
 * * Create a view table (details can be viewed in /viewTable/queries.js)
 */
const createTable = (request, response) => {

  db.query(queries.createTable, (error, results) => {
    if(error) {
      throw error
    }
    response.status(200).send('Success building Table')
  })
} // end of Create Table

/**
 * 
 * @param {*} request 
 * @param {*} response
 * * Get the view table (details can be viewed in /viewTable/queries.js)
 */
const getTable = (request, response) => {
  
  db.query(queries.getTable, (error, results) => {
    if(error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
} // end of getTable

module.exports = {
  createTable,
  getTable,
}