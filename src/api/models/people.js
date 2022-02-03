const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeopleSchema = new Schema({
	nome: {
		type: String,
		require: true
	},
	cpf: {
		type: String,
		require: true

	},
	data_nascimento: {
		type: Date,
		require: true
	},
	email: {
		type: String,
		require: true
	},
	senha: {
		type: String,
		require: true,
		select: false
	},
	habilitado: {
		type: String,
		enum: ['Sim', 'Não'],
		require: true
	}
});

module.exports = mongoose.model('People', PeopleSchema);
