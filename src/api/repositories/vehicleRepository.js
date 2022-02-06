const schema = require('../models/vehicle');

class VehicleRepository {
	async create (vehicle) {
		return schema.create(vehicle);
	}

	async list (payload) {
		const paginatedFields = {
			totalDocs: 'total',
			docs: 'Veiculos',
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
