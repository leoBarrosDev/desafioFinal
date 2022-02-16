const PeopleServices = require('../services/peopleServices');
const Errors = require('../errors/Errors');

class PeopleController {
	async createPeople (req, res) {
		const newPeople = req.body;
		try {
			const result = await PeopleServices.create(newPeople);
			return res.status(201).json(result);
		} catch (error) {
			return Errors.badRequest(res, error.message);
		}
	}

	async listPeople (req, res) {
		const payload = req.query;
		try {
			const peoples = await PeopleServices.list(payload);
			return res.status(200).json(peoples);
		} catch (error) {
			return Errors.badRequest(res, error.message);
		}
	}

	async updatePeople (req, res) {
		const { id } = req.params;
		const newPeople = req.body;
		try {
			const result = await PeopleServices.update(id, newPeople);
			return res.status(200).json(result);
		} catch (error) {
			return Errors.badRequest(res, error.message);
		}
	}

	async findOnePeople (req, res) {
		const { id } = req.params;
		try {
			const result = await PeopleServices.findOnePeople(id);
			return res.status(200).json(result);
		} catch (error) {
			return Errors.badRequest(res, error.message);
		}
	}

	async removePeople (req, res) {
		const { id } = req.params;
		try {
			await PeopleServices.remove(id);
			return res.status(204).end();
		} catch (error) {
			return Errors.badRequest(res, error.message);
		}
	}
}

module.exports = new PeopleController();
