const schema = require('../models/vehicle')

class VehicleRepository {
  async create (vehicle) {
    return schema.create(vehicle)
  }

  async list (payoad) {
    return schema.find()
  }

  async update (id, payload) {
    return schema.findByIdAndUpdate(id, payload, { new: true })
  }

  async findOneVehicle (id) {
    return schema.findById(id)
  }

  async remove (id) {
    return schema.findByIdAndDelete(id)
  }
}
module.exports = new VehicleRepository()
