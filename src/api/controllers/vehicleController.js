
const VehicleServices = require('../services/vehicleServices');

class VehicleController {
	async create (req, res) {
		const newVehicle = req.body;
		try {
			const result = await VehicleServices.create(newVehicle);
			return res.status(201).json(result);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async list (req, res, next) {
		try {
			const payload = req.query;
			const vehicles = await VehicleServices.list({
				vehicles_id: payload.id,
				modelo: payload.modelo,
				cor: payload.cor,
				acessorios: payload.acessorios,
				quantidadePassageiros: payload.quantidadePassageiros
			});
			res.status(200).json(vehicles);
		} catch (error) {
			next(error);
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
			res.status(500).json(error);
		}
	}

	async remove (req, res) {
		const { id } = req.params;
		try {
			await VehicleServices.remove(id);
			res.status(204).end();
		} catch (error) {
			res.status(500).json(error);
		}
	}
}

module.exports = new VehicleController();
