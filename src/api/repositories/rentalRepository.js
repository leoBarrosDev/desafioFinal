const schema = require('../models/rental');
const axios = require('axios');

class RentalRepository{

	async createRental(payload){
		return await schema.create(payload);
	}

	async searchCep(cep){
		const result = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

		return result.data;
	}

	async listRental(payload){
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

	async updateRental (id, payload){
		return schema.findByIdAndUpdate(id, payload, {new: true});
	}

	async findOneRental(id){
		return schema.findById(id);
	}

	async removeRental(id){
		return schema.findByIdAndDelete(id);
	}

	
}

module.exports = new RentalRepository();