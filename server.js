const app = require('./app')

// Setup a port to Listen on.
// If a port isn't specified, then use port 8080 as a fallback
const port = process.env.PORT || 3000 

require('dotenv').config();

console.log("Listening to Port: " + port)

app.listen(port)