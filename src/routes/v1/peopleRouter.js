const router = require('express').Router()
const PeopleController = require('../../api/controllers/peopleController')

router
  .post('/people', PeopleController.create)

module.exports = router
