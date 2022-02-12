const RentalService = require('../services/rentalServices');
const Errors = require('../errors/Errors');


class RentalController {

	async create(req, res) {
		try {
			const result = await RentalService.create(req.body);
			return res.status(201).json(result);

		} catch (error) {

			res.status(500).json(error);

		}

	}

	async list (req, res){
		try {
			const payload = req.params;
			const rentals = await RentalService.list(payload);
			res.status(200).json(rentals);
		} catch (error) {
			return Errors.badRequest(res, error.message);
		}
	}

	async update (req, res){
		const { id } = req.params;
		const newRental = req.body;
		try {
			const result = await RentalService.update(id, newRental);
			res.status(200).json(result);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async findOne (req, res){
		const { id } = req.params;
		try {
			const result = await RentalService.findOneRental(id);
			return res.status(200).json(result);
		} catch (error) {
			return Errors.badRequest(res, error.message);
		}
	}

	async remove (req, res){
		const { id } = req.params;
		try {
			await RentalService.remove(id);
			res.status(204).end();
		} catch (error) {
			return Errors.badRequest(res, error.message);
		}
		
	}

}



module.exports = new RentalController();