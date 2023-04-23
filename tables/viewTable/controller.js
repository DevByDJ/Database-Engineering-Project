const queries = require('../viewTable/queries')
const db = require('../../database');
const {json} = require('express')

const createTable = (request, response) => {

  db.query(queries.createTable, (error, results) => {
    if(error) {
      throw error
    }
    response.status(200).send('Success building Table')
  })
}

const getTable = (request, response) => {
  
  db.query(queries.getTable, (error, results) => {
    if(error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  createTable,
  getTable,
}