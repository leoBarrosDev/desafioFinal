const res = require('express/lib/response')
const VehicleRepository = require('../repositories/vehicleRepository')

class VehicleServices {
  async create (vehicle) {
    try {
      const result = await VehicleRepository.create(vehicle)
      return result
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async list () {
    const vehicles = await VehicleRepository.list()
    return vehicles
  }

  async update (id, payload) {
    const vehicle = await this.findOneVehicle(id)
    const mutables = ['modelo', 'cor', 'ano', 'acessorios', 'quantidadePassageiros']

    mutables.forEach(key => {
      if (payload[key] !== undefined) {
        vehicle[key] = payload[key]
      }
    })
    await VehicleRepository.update(vehicle)
    return vehicle
  }

  async findOneVehicle (id) {

  }

  async delete (id) {

  }
}

module.exports = new VehicleServices()
