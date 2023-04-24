const express = require('express');
const { json } = require('express');
const controller = require('../tables/company/controller');

const router = express.Router();

router.use(json());

router.get('/', controller.getCompany);

router.get('/all', controller.getAllCompanies);

router.post('/', controller.createCompany);

module.exports = router;
