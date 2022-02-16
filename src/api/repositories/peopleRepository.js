const schema = require('../models/people');

class PeopleRepository {
	async createPeople (people) {
		return schema.create(people);
	}

	async listPeople (payload) {
		const paginatedFields = {
			totalDocs: 'total',
			docs: 'People',
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

	async updatePeople (id, payload) {
		return schema.findByIdAndUpdate(id, payload, { new: true });
	}

	async findOnePeople (id) {
		return schema.findById(id);
	}

	async removePeople (id) {
		return schema.findByIdAndDelete(id);
	}
}

module.exports = new PeopleRepository();
