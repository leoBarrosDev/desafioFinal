const router = require('express').Router();

const PeopleController = require('../../api/controllers/peopleController');

const peopleListingValidator = require('../../api/validations/people/peopleListingValidator');
const peopleFieldValidator = require('../../api/validations/people/peopleFieldValidator');
const idValidator = require('../../api/validations/idValidator');


router
	.post('/people', peopleFieldValidator,PeopleController.createPeople)
	.get('/people',peopleListingValidator ,PeopleController.listPeople)
	.put('/people/:id',idValidator, peopleFieldValidator ,PeopleController.updatePeople)
	.get('/people/:id', idValidator, PeopleController.findOnePeople)
	.delete('/people/:id', idValidator, PeopleController.removePeople);

module.exports = router;
