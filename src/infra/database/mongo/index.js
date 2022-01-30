const mongoose = require('mongoose')
require('dotenv').config()

class MongoDb {
  constructor () {
    this.connect()
  }

  connect () {
    return mongoose.connect(process.env.HOST)
  }
}

module.exports = new MongoDb().connect()
