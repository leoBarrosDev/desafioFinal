const PeopleRepository = require('../repositories/peopleRepository');

class PeopleServices {
  async createPeople(people) {
    const result = await PeopleRepository.createPeople(people);
    return result;
  }

  async listPeople(payload) {
    const peoples = await PeopleRepository.listPeople(payload);
    return peoples;
  }

  async updatePeople(id, payload) {
    const result = await PeopleRepository.updatePeople(id, payload);
    return result;
  }

  async findOnePeople(id) {
    const result = await PeopleRepository.findOnePeople(id);

    return result;
  }

  async removePeople(id) {
    return PeopleRepository.removePeople(id);
  }
}

module.exports = new PeopleServices();
