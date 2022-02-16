const schema = require('../models/vehicle');

class VehicleRepository {
	async createVehicle (vehicle) {
		return schema.create(vehicle);
	}

	async listVehicle (payload) {
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

	async updateVehicle (id, payload) {
		return schema.findByIdAndUpdate(id, payload, { new: true });
	}

	async findOneVehicle (id) {
		return schema.findById(id);
	}

	async removeVehicle (id) {
		return schema.findByIdAndDelete(id);
	}

	async updateAccessoryVehicle (id, acessorioId, payload){
		return schema.findByIdAndUpdate(
			id,
			{$set: {'acessorios.$[none].descricao': payload.descricao}},
			{arrayFilters: [{'none._id': acessorioId}]}
		)
	}

}
module.exports = new VehicleRepository();
