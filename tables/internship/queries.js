const newInternship =
  'INSERT INTO internship (company_id, tag_id, position_name, position_type, location, start_date, end_date, semester) values ($1, $2, $3, $4, $5, $6, $7, $8)';

const internshipExist = 'SELECT * FROM internship where job_id = $1';

const allInternships = 'SELECT * FROM internship';

const deleteInternship = 'DELETE FROM internship where job_id = $1';

module.exports = {
  newInternship,
  internshipExist,
  allInternships,
  deleteInternship,
};
