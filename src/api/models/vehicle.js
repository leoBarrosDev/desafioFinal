const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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
  acessorios: [
    {
      descricao: {
        type: String,
        required: true
      }
    }
  ],
  quantidadePassageiros: {
    type: Number,
    require: true
  }
});

VehicleSchema.plugin(mongoosePaginate);
const vehicle = mongoose.model('Vehicle', VehicleSchema);
vehicle.paginate().then({});

module.exports = mongoose.model('Vehicle', VehicleSchema);
