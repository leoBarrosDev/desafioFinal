const VehicleRepository = require('../repositories/vehicleRepository');

class VehicleServices {
	async create (vehicle) {
		const result = await VehicleRepository.create(vehicle);
		return result;
	}

	async list (payload) {
		const vehicles = await VehicleRepository.list({
			vehicles_id: payload.id,
			modelo: payload.modelo,
			cor: payload.cor,
			acessorios: payload.acessorios,
			quantidadePassageiros: payload.quantidadePassageiros
		});
		return vehicles;
	}

	async update (id, payload) {
		const result = await VehicleRepository.update(id, payload);
		return result;
	}

	async findOneVehicle (id) {
		const result = await VehicleRepository.findOneVehicle(id);

		return result;
	}

	async remove (id) {
		return await VehicleRepository.remove(id);
	}
}

module.exports = new VehicleServices();
