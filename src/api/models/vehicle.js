const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

//const Schema = mongoose.Schema;

const VehicleSchema = new mongoose.Schema({
	modelo: {
		type: String,
		require: true
	},
	cor: {
		type: String,
		require: true
	},
	ano: {
		type: String,
		require: true
	},
	acessorios: {
		type: Array,
		require: true
	},
	quantidadePassageiros: {
		type: Number,
		require: true
	}
});

VehicleSchema.plugin(mongoosePaginate);
const vehicle = mongoose.model('Vehicle', VehicleSchema);
vehicle.paginate().then({});

module.exports = mongoose.model('Vehicle', VehicleSchema);
