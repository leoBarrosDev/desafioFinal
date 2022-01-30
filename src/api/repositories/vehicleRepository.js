const schema = require('../models/vehicle')

class VehicleRepository {
  async create (vehicle) {
    return schema.create(vehicle)
  }

  async list (vehicles) {
    return schema.find(vehicles)
  }

  async update (id, ...payload) {
    return schema.findByIdAndUpdate(id, ...payload)
  }

  async findOneVehicle (id) {
    return schema.findById(id)
  }

  async remove (id) {
    return schema.deleteOne(id)
  }
}
module.exports = new VehicleRepository()
