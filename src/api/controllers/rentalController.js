const RentalService = require('../services/rentalServices');
const Errors = require('../errors/Errors');

class RentalController {
  async createRental(req, res) {
    try {
      const result = await RentalService.createRental(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async listRental(req, res) {
    try {
      const payload = req.params;
      const rentals = await RentalService.listRental(payload);
      return res.status(200).json(rentals);
    } catch (error) {
      return Errors.badRequest(res, error.message);
    }
  }

  async updateRental(req, res) {
    const { id } = req.params;
    const newRental = req.body;
    try {
      const result = await RentalService.updateRental(id, newRental);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async findOneRental(req, res) {
    const { id } = req.params;
    try {
      const result = await RentalService.findOneRental(id);
      return res.status(200).json(result);
    } catch (error) {
      return Errors.badRequest(res, error.message);
    }
  }

  async removeRental(req, res) {
    const { id } = req.params;
    try {
      await RentalService.removeRental(id);
      return res.status(204).end();
    } catch (error) {
      return Errors.badRequest(res, error.message);
    }
  }
}

module.exports = new RentalController();
