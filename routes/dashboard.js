const express = require('express');
const { json } = require('express');
const db = require('./db');

const router = express.Router();

router.use(json());

router.get('/', async (req, res) => {
  try {
    const sortBy = req.query.sortBy || 'company_name'; // Set a default sorting column

    // prevent SQL injectionnpm
    const allowedSortColumns = [
      'company_name',
      'location',
      'industry',
      'start_date',
      'semester',
      'tag_description',
    ];
    if (!allowedSortColumns.includes(sortBy)) {
      throw new Error('Invalid sort column');
    }
    const internships = await db.any(`
      SELECT i.job_id, c.name as company_name, i.location, c.industry, i.start_date, i.semester, t.description as tag_description
      FROM internship i
      JOIN company c ON i.company_id = c.company_id
      JOIN tag t ON i.tag_id = t.tag_id
      ORDER BY ${sortBy}
    `);

    res.render('dashboard', { internships, sortBy });
  } catch (error) {
    console.error('Error fetching internships:', error.message);
    console.error('Error details: ', error);
    res.status(500).send('Error fetching internships');
  }
});

module.exports = router;
