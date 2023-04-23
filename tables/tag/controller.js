const queries = require('../tag/queries')
const db = require('../../database');
const {json} = require('express')

const getTag = (request, response) => {
  const { id } = request.body;

  db.query(queries.getTagByTagId, [id], (error, results) => {
    if(error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getAllTags = (request, response) => {

  db.query(queries.getAllTags, (error, results) => {
    if(error) {
      throw error
    }

    response.status(200).json(results.rows)
  })
}

const createNewTag = (request, response) => {
  const { id, description } = request.body

  db.query(queries.createNewTag, [id, description], (error, results) => {
    if(error) {
      throw error
    }

    response.status(200).send('Tag Created')
    console.log('Tag Created!')
  })
}

const updateTag = (request, response) => {
  const { id, description } = request.body

  db.query(queries.updateTag, [id, description], (error, results) => {
    if(error) {
      throw error
    }

    response.status(200).send('New Description: ', JSON.stringify(description), ' has been added!')
    console.log('New Description: ', description , ' has been added!')
  })
}

const deleteTag = (request, response) => {
  const { id } = request.body

  db.query(queries.deleteTag, [id], (error, results) => {
    if(error) {
      throw error
    }

    response.status(200).send('Tag has been deleted!')
    console.log('Tag has been deleted!')
  })
}

module.exports = {
  getTag,
  getAllTags,
  createNewTag,
  updateTag,
  deleteTag,
}