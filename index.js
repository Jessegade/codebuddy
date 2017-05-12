/**
 * Module dependencies
 */
const mongoose = require('mongoose')
const dbConfig = require('./config/mongodb')
const winston = require('winston')

/**
 * Initiate MongoDB connection
 */
mongoose.Promise = global.Promise // Tell Mongoose to use ES6 promises
mongoose.connect(dbConfig.url, (err) => {
  if (err) {
    winston.error(`⚠️  ${err.message}`)
    return
  }
  winston.info('✅  Connect to MongoDB successfully')
})
mongoose.connection.on('error', (err) => {
  winston.error(`⚠️  ${err.message}`)
})
require('./models/User')
require('./models/Project')

/**
 * Start server and initiate socket.io server
 */
const app = require('./server')

const server = app.listen(process.env.PORT || 8080, () => {
  winston.info(`✅  Listening on localhost:${server.address().port}`)
})

require('./handlers/socket')(server)
