
const PeopleRepository = require('../repositories/peopleRepository');

class PeopleServices {
	async createPeople (people) {
		const result = await PeopleRepository.create(people);
		return result;
	}

	async listPeople (payload) {
		const peoples = await PeopleRepository.list(payload);
		return peoples;
	}

	async updatePeople (id, payload) {
		const result = await PeopleRepository.update(id, payload);
		return result;
	}

	async findOnePeople (id) {
		const result = await PeopleRepository.findOnePeople(id);

		return result;
	}

	async removePeople (id) {
		return await PeopleRepository.remove(id);
	}
}

module.exports = new PeopleServices();
