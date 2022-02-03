const schema = require('../models/vehicle');

class VehicleRepository {
	async create (vehicle) {
		return schema.create(vehicle);
	}

	async list (payload) {
		return schema.find (payload);
	}

	async update (id, payload) {
		return schema.findByIdAndUpdate(id, payload, { new: true });
	}

	async findOneVehicle (id) {
		return schema.findById(id);
	}

	async remove (id) {
		return schema.findByIdAndDelete(id);
	}
}
module.exports = new VehicleRepository();
