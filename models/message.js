 /**
 * Module dependencies
 */
const mongoose = require('mongoose')
const shortid = require('shortid')

/**
 * `Message` model schema based on Mongoose schema
 */
const messageSchema = new mongoose.Schema({
  pid: {
    type: String,
    required: [true, 'Please enter a project id']
  },
  uid: {
    type: String,
    required: [true, 'Please enter a author']
  },
  message: {
    type: String,
    required: [true, 'Please fill in message']
  },
  createdAt: { type: Date, default: Date.now }
})

/**
 * Expose `Message` model
 */
module.exports = mongoose.model('Message', messageSchema)
