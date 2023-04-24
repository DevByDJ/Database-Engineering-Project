// -- Tag Queries --
const getTagByTagId='SELECT * FROM tag where tag.tag_id = $1'
const getAllTags='SELECT * FROM tag'
const createNewTag='INSERT into tag(tag_id, description) VALUES ($1, $2)'
const updateTag='UPDATE tag SET description = $2 WHERE tag_id = $1'
const deleteTag='DELETE FROM tag WHERE tag_id = $1'


module.exports = {
  getTagByTagId,
  getAllTags,
  createNewTag,
  updateTag,
  deleteTag,
}