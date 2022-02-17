const VehicleRepository = require('../repositories/vehicleRepository');

class VehicleServices {
  async createVehicle(vehicle) {
    const result = await VehicleRepository.createVehicle(vehicle);
    return result;
  }

  async listVehicle(payload) {
    const vehicles = await VehicleRepository.listVehicle(payload);
    return vehicles;
  }

  async updateVehicle(id, payload) {
    const result = await VehicleRepository.updateVehicle(id, payload);
    return result;
  }

  async findOneVehicle(id) {
    const result = await VehicleRepository.findOneVehicle(id);

    return result;
  }

  async removeVehicle(id) {
    return VehicleRepository.removeVehicle(id);
  }

  async updateAccessoryVehicle(id, acessorioId, payload) {
    const result = await VehicleRepository.updateAccessoryVehicle(id, acessorioId, payload);
    return result;
  }
}

module.exports = new VehicleServices();
