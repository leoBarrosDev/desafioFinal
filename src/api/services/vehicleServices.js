const VehicleRepository = require('../repositories/vehicleRepository');


class VehicleServices {
	async createVehicle (vehicle) {
		const result = await VehicleRepository.create(vehicle);
		return result;
	}

	async listVehicle (payload) {
		const vehicles = await VehicleRepository.list(payload);
		return vehicles;
	}

	async updateVehicle (id, payload) {
		const result = await VehicleRepository.update(id, payload);
		return result;
	}

	async findOneVehicle (id) {
		const result = await VehicleRepository.findOneVehicle(id);

		return result;
	}

	async removeVehicle (id) {
		return await VehicleRepository.remove(id);
	}

	async updateAccessoryVehicle(id, acessorioId, payload){
		const result = await VehicleRepository.updateAccessory(id, acessorioId, payload);
		return result;
	}

}

module.exports = new VehicleServices();
