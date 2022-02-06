
const VehicleServices = require('../services/vehicleServices');
const Errors = require('../errors/Errors');

class VehicleController {
	async create (req, res) {
		const newVehicle = req.body;
		try {
			const result = await VehicleServices.create(newVehicle);
			return res.status(201).json(result);
		} catch (error) {
			return Errors.badRequest(res, error.message);
		}
	}

	async list (req, res) {
		try {
			const payload = req.query;
			const vehicles = await VehicleServices.list(payload);
			res.status(200).json(vehicles);
		} catch (error) {
			return Errors.badRequest(res, error.message);
		}
	}

	async update (req, res) {
		const { id } = req.params;
		const newVehicle = req.body;
		try {
			const result = await VehicleServices.update(id, newVehicle);
			return res.status(200).json(result);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async findOne (req, res) {
		const { id } = req.params;
		try {
			const result = await VehicleServices.findOneVehicle(id);
			return res.status(200).json(result);
		} catch (error) {
			return Errors.badRequest(res, error.message);
		}
	}

	async remove (req, res) {
		const { id } = req.params;
		try {
			await VehicleServices.remove(id);
			res.status(204).end();
		} catch (error) {
			return Errors.badRequest(res, error.message);
		}
	}
}

module.exports = new VehicleController();
