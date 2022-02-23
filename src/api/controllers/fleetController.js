const FleetServices = require('../services/fleetServices');
const Errors = require('../errors/Errors');

class FleetController {
  async createFleet(req, res) {
    const newFleet = req.body;
    try {
      const result = await FleetServices.createFleet(newFleet);
      return res.status(201).json(result);
    } catch (error) {
      return Errors.badRequest(res, error.message);
    }
  }

  async listFleet(req, res) {
    const payload = req.query;
    try {
      const fleets = await FleetServices.listFleet(payload);
      return res.status(200).json(fleets);
    } catch (error) {
      return Errors.badRequest(res, error.message);
    }
  }

  async updateFleet(req, res) {
    const { id } = req.params;
    const newFleet = req.body;
    try {
      const result = await FleetServices.updateFleet(id, newFleet);
      return res.status(200).json(result);
    } catch (error) {
      return Errors.badRequest(res, error.message);
    }
  }

  async findOneFleet(req, res) {
    const { id } = req.params;
    try {
      const result = await FleetServices.removeFleet(id);
      return res.status(200).json(result);
    } catch (error) {
      return Errors.badRequest(res, error.message);
    }
  }

  async removeFleet(req, res) {
    const { id } = req.params;
    try {
      await FleetServices.removeFleet(id);
      return res.status(204).end();
    } catch (error) {
      return Errors.badRequest(res, error.message);
    }
  }
}

module.exports = new FleetController();
