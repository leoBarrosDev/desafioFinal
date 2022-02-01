const schema = require('../models/people')

class PeopleRepository {
  async create (people) {
    return schema.create(people)
  }

  async list (payload) {
    return schema.find()
  }

  async update (id, payload) {
    return schema.findByIdAndUpdate(id, payload, { new: true })
  }

  async findOnePeople (id) {
    return schema.findById(id)
  }

  async remove (id) {
    return schema.findByIdAndDelete(id)
  }
}

module.exports = new PeopleRepository()
