const FleetRepository = require('../repositories/fleetRepository');

class FleetServices {
  async createFleet(fleet) {
    const result = await FleetRepository.createFleet(fleet);
    return result;
  }

  async listFleet(payload) {
    const peoples = await FleetRepository.listPeople(payload);
    return peoples;
  }

  async updateFleet(id, payload) {
    const result = await FleetRepository.updatePeople(id, payload);
    return result;
  }

  async findOneFleet(id) {
    const result = await FleetRepository.findOnePeople(id);

    return result;
  }

  async removeFleet(id) {
    return FleetRepository.removePeople(id);
  }
}

module.exports = new FleetServices();
