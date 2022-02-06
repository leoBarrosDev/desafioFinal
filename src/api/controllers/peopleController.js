const PeopleServices = require('../services/peopleServices');
const Errors = require('../errors/Errors');

class PeopleController {
	async create (req, res) {
		const newPeople = req.body;
		try {
			const result = await PeopleServices.create(newPeople);
			return res.status(201).json(result);
		} catch (error) {
			return Errors.badRequest(res, error.message);
		}
	}

	async list (req, res) {
		const payload = req.query;
		try {
			const peoples = await PeopleServices.list(payload);
			res.status(200).json(peoples);
		} catch (error) {
			return Errors.badRequest(res, error.message);
		}
	}

	async update (req, res) {
		const { id } = req.params;
		const newPeople = req.body;
		try {
			const result = await PeopleServices.update(id, newPeople);
			return res.status(200).json(result);
		} catch (error) {
			return Errors.badRequest(res, error.message);
		}
	}

	async findOne (req, res) {
		const { id } = req.params;
		try {
			const result = await PeopleServices.findOnePeople(id);
			return res.status(200).json(result);
		} catch (error) {
			return Errors.badRequest(res, error.message);
		}
	}

	async remove (req, res) {
		const { id } = req.params;
		try {
			await PeopleServices.remove(id);
			res.status(204).end();
		} catch (error) {
			return Errors.badRequest(res, error.message);
		}
	}
}

module.exports = new PeopleController();
