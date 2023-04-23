const express = require('express');
const { json } = require('express');
const db = require('./db');

const router = express.Router();

router.use(json());

router.use(async (req, res, next) => {
  // ...
});

router.get('/test', (req, res) => {
  res.send('Dashboard test route');
});

router.get('/',  async (req, res) => {
  try {
    const internships = await db.any(`
      SELECT i.id, c.name as company_name, i.location, i.industry, i.start_date, i.semester, t.name as tag_name
      FROM Internship i
      JOIN Company c ON i.company_id = c.id
      JOIN Tag t ON i.tag_id = t.id
    `);

    res.render('dashboard', { internships });
  } catch (error) {
    console.error('Error fetching internships:', error);
    res.status(500).send('Error fetching internships');
  }
});

module.exports = router;
