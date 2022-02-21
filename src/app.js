const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
require('./infra/database/mongo/index');

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.express.use('/api/', routes);
  }

  middlewares() {
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cors());
    this.express.use(express.json());
  }
}

module.exports = new App().express;
