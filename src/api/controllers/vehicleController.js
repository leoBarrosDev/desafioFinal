const VehicleServices = require('../services/vehicleServices');
const Errors = require('../errors/Errors');

class VehicleController {
  async createVehicle(req, res) {
    const newVehicle = req.body;
    try {
      const result = await VehicleServices.createVehicle(newVehicle);
      return res.status(201).json(result);
    } catch (error) {
      return Errors.badRequest(res, error.message);
    }
  }

  async listVehicle(req, res) {
    try {
      const payload = req.query;
      const vehicles = await VehicleServices.listVehicle(payload);
      return res.status(200).json(vehicles);
    } catch (error) {
      return Errors.badRequest(res, error.message);
    }
  }

  async updateVehicle(req, res) {
    const { id } = req.params;
    const newVehicle = req.body;
    try {
      const result = await VehicleServices.updateVehicle(id, newVehicle);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async findOneVehicle(req, res) {
    const { id } = req.params;
    try {
      const result = await VehicleServices.findOneVehicle(id);
      return res.status(200).json(result);
    } catch (error) {
      return Errors.badRequest(res, error.message);
    }
  }

  async removeVehicle(req, res) {
    const { id } = req.params;
    try {
      await VehicleServices.removeVehicle(id);
      return res.status(204).end();
    } catch (error) {
      return Errors.badRequest(res, error.message);
    }
  }

  async updateAccessoryVehicle(req, res) {
    const { id, acessorioId } = req.params;
    const payload = req.body;

    try {
      const result = await VehicleServices.updateAccessoryVehicle(id, acessorioId, payload);

      return res.status(200).json(result);
    } catch (error) {
      return Errors.badRequest(res, error.message);
    }
  }
}

module.exports = new VehicleController();
