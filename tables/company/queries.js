const newCompany =
  'INSERT INTO company (name, industry, location) values ($1, $2, $3)';

const companyExist = 'SELECT company.name FROM company where company.name = $1';

const getCompany = 'SELECT * FROM company where company.name = $1';

const getCompanies = 'SELECT * FROM company';

module.exports = {
  newCompany,
  companyExist,
  getCompanies,
  getCompany,
};
