
const PeopleRepository = require('../repositories/peopleRepository')

class PeopleServices {
  async create (people) {
    const result = await PeopleRepository.create(people)
    return result
  }
}

module.exports = new PeopleServices()
