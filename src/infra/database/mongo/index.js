const mongoose = require('mongoose');
require('dotenv').config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });

class MongoDb {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect(process.env.HOST);
  }
}

module.exports = new MongoDb().connect();
