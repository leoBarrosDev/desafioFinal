const schema = require('../models/fleet');

class FleetRepository {
  async createFleet(fleet) {
    return schema.create(fleet);
  }

  async updateFleet(id, payload) {
    return schema.findByIdAndUpdate(id, payload, { new: true });
  }

  async findOneFleet(id) {
    return schema.findById(id);
  }

  async listFleet(payload) {
    const paginatedFields = {
      totalDocs: 'total',
      docs: 'Fleets',
      page: 'offset',
      nextPage: false,
      prevPage: false,
      totalPages: 'offsets',
      pagingCounter: false,
      meta: false,
      hasPrevPage: false,
      hasNextPage: false
    };
    const options = {
      page: 1,
      limite: 100,
      customLabels: paginatedFields
    };
    return schema.paginate(payload, options, {});
  }

  async removeFleet(id) {
    return schema.findByIdAndDelete(id);
  }
}

module.exports = new FleetRepository();
