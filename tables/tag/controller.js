const queries = require('../tag/queries')
const db = require('../../database');
const {json} = require('express')

/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {request.body} id
 * * Get the information of a tag by passing the tag_id from the request.body
 */
const getTag = (request, response) => {
  const { id } = request.body;

  db.query(queries.getTagByTagId, [id], (error, results) => {
    if(error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
} // end of getTag

/**
 * 
 * @param {*} request 
 * @param {*} response
 * * Get information on all the tags 
 */
const getAllTags = (request, response) => {

  db.query(queries.getAllTags, (error, results) => {
    if(error) {
      throw error
    }

    response.status(200).json(results.rows)
  })
} // end of getAllTags


/**
 * 
 * @param {*} request 
 * @param {*} response
 * @param {request.body} id -- tag_id
 * @param {request.body} description -- tag_description
 * * Create a new tag by passing in the new ID and description from the request.body 
 */
const createNewTag = (request, response) => {
  const { id, description } = request.body

  db.query(queries.createNewTag, [id, description], (error, results) => {
    if(error) {
      throw error
    }

    response.status(200).send('Tag Created')
    console.log('Tag Created!')
  })
} // end of createNewTag

/**
 * 
 * @param {*} request 
 * @param {*} response
 * @param {request.body} id -- tag_id
 * @param {request.body} description -- tag_description
 * * Update a tag by passing in the ID. Then the description provided from the request.body will overwrite what's in the db.
 */
const updateTag = (request, response) => {
  const { id, description } = request.body

  db.query(queries.updateTag, [id, description], (error, results) => {
    if(error) {
      throw error
    }

    response.status(200).send('New Description: ', JSON.stringify(description), ' has been added!')
    console.log('New Description: ', description , ' has been added!')
  })
} // end of updateTag


/**
 * 
 * @param {*} request 
 * @param {*} response
 * @param {request.body} id -- tag_id
 * * Delete a tag by passing it's id from the request.body
 */
const deleteTag = (request, response) => {
  const { id } = request.body

  db.query(queries.deleteTag, [id], (error, results) => {
    if(error) {
      throw error
    }

    response.status(200).send('Tag has been deleted!')
    console.log('Tag has been deleted!')
  })
} // end of deleteTag 


module.exports = {
  getTag,
  getAllTags,
  createNewTag,
  updateTag,
  deleteTag,
}