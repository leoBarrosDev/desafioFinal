const PeopleServices = require('../services/peopleServices');

class PeopleController {
	async create (req, res) {
		const newPeople = req.body;
		try {
			const result = await PeopleServices.create(newPeople);
			return res.status(201).json(result);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async list (req, res, next) {
		const payload = req.query;
		try {
			const peoples = await PeopleServices.list(payload);
			res.status(200).json(peoples);
		} catch (error) {
			next(error);
		}
	}

	async update (req, res) {
		const { id } = req.params;
		const newPeople = req.body;
		try {
			const result = await PeopleServices.update(id, newPeople);
			return res.status(200).json(result);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async findOne (req, res) {
		const { id } = req.params;
		try {
			const result = await PeopleServices.findOnePeople(id);
			return res.status(200).json(result);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async remove (req, res) {
		const { id } = req.params;
		try {
			await PeopleServices.remove(id);
			res.status(204).end();
		} catch (error) {
			res.status(500).json(error);
		}
	}
}

module.exports = new PeopleController();
