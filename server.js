const app = require('./app')

// Setup a port to Listen on.
// If a port isn't specified, then use port 8080 as a fallback
const port = process.env.PORT || 5000 

console.log("Listening to Port: " + port)
app.listen(port);

