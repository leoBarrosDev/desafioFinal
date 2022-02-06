const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const bcrypt = require('bcryptjs');
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

PeopleSchema.pre('save', async function (next) {
	const hash = await bcrypt.hash(this.senha, 10);
	this.senha = hash;
	next();
});

PeopleSchema.plugin(mongoosePaginate);
const people = mongoose.model('People', PeopleSchema);
people.paginate().then({});

module.exports = mongoose.model('People', PeopleSchema);
