const app = require('./app')
const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "internship_repository",
  password: "cop3710",
  port: "5432"
  
})
// Setup a port to Listen on.
// If a port isn't specified, then use port 8080 as a fallback
const port = process.env.PORT || 5000 

console.log("Listening to Port: " + port)
app.listen(port);

module.exports = pool;