const mongoose = require('mongoose')

const Schema = mongoose.Schema

const VehicleSchema = new Schema({
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
})

module.exports = mongoose.model('Vehicle', VehicleSchema)
