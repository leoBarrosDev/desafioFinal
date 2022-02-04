const router = require('express').Router();

const PeopleController = require('../../api/controllers/peopleController');

const listPeoples = require('../../api/validations/people/listPeoples');
const peopleFields = require('../../api/validations/people/peopleFilds');
const isId = require('../../api/validations/isId');

router
	.post('/people', peopleFields,PeopleController.create)
	.get('/people',listPeoples ,PeopleController.list)
	.put('/people/:id',isId, peopleFields ,PeopleController.update)
	.get('/people/:id', isId, PeopleController.findOne)
	.delete('/people/:id', isId, PeopleController.remove);

module.exports = router;
