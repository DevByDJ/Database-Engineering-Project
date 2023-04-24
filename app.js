require('dotenv').config();
const express = require('express')
const registerRouter = require('./routes/register.js') 
const loginRouter = require('./routes/login.js')
const dashboardRouter = require('./routes/dashboard.js')
const protectedRouter = require('./routes/protected.js')
const tagRouter = require('./routes/tag.js')
const surveyRouter = require('./routes/survey.js')
const tableRouter = require('./routes/view.js')
const dotenv = require('dotenv');
// -- The utilities the application uses --
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true}))

app.use(express.static('public'))

app.use(logger)


// -- Routers --

app.use('/register', registerRouter)

app.use('/login', loginRouter)

app.use('/protected', protectedRouter)

app.use('/dashboard', dashboardRouter)

app.use('/tag', tagRouter)

app.use('/survey', surveyRouter)

app.use('/table', tableRouter)



app.get('/', (req, res) => 
{
  console.log('App is running..')
  //res.statusCode(400)
  
})

// -- Middleware that tracks the actions in the application --
function logger(req, res, next) {
  console.log("The current URL path is: " + req.originalUrl)
  next()
}


module.exports = app