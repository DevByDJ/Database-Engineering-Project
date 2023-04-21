const pgp = require('pg-promise')();

const config = {
  host: 'your_host',
  port: 5432,
  database: 'your_database',
  user: 'your_user',
  password: 'your_password'
};

const db = pgp(config);

module.exports = db;