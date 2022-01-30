const schema = require('../models/vehicle')

class VehicleRepository {
  async create (vehicle) {
    return schema.create(vehicle)
  }

  async list ({ limit = 0, skip = 0, ...payload }) {
    const filter = {
      $and: [{ ...payload }]
    }
    const count = await schema.count(filter)
      .exec()

    const vehicles = await schema.find(filter)
      .limit(limit)
      .skip((skip === 0) ? skip : skip + 1)
      .exec()

    return new Promise((resolve, reject) => {
      resolve({
        vehicles: vehicles,
        currentPage: skip + 1,
        pageSize: (limit === 0) ? count : limit,
        totalCount: count,
        totalPages: (limit === 0) ? 1 : Math.ceil(count / limit)
      })
    })
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
