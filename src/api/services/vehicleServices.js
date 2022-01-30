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

  async list (payload) {
    const vehicles = await VehicleRepository.list({
      vehicle_id: payload.vehicle_id,
      modelo: new RegExp(payload.modelo, 'i'),
      cor: payload.cor,
      ano: payload.ano,
      acessorios: payload.acessorios,
      quantidadePassageiros: payload.quantidadePassageiros,
      limit: (payload.limit) ? Number(payload.limit) : undefined,
      skip: (payload.skip) ? Number(payload.skip) : undefined
    })
    return vehicles
  }

  async update (id, payload) {

  }
}

module.exports = new VehicleServices()
