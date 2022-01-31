const schema = require('../models/people')

class PeopleRepository {
  async create (people) {
    return schema.create(people)
  }
}

module.exports = new PeopleRepository()
