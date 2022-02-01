const router = require('express').Router()
const PeopleController = require('../../api/controllers/peopleController')

router
  .post('/people', PeopleController.create)
  .get('/people', PeopleController.list)
  .put('/people/:id', PeopleController.update)
  .get('/people/:id', PeopleController.findOne)
  .delete('/people/:id', PeopleController.remove)

module.exports = router
