const PeopleServices = require('../services/peopleServices')

class PeopleController {
  async create (req, res) {
    const newPeople = req.body
    try {
      const result = await PeopleServices.create(newPeople)
      return res.status(201).json(result)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = new PeopleController()
