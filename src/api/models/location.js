const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const locationSchema = mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'people',
      required: true
    },
    data_inicio: {
      type: Date,
      required: true
    },
    data_fim: {
      type: Date,
      required: true
    },
    id_carro: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'car',
      required: true
    },
    id_locadora: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'rental',
      required: true
    },
    valor_final: {
      type: Number
    }
  },
  {
    timestamps: true,
    collection: 'reserve'
  }
);

locationSchema.plugin(mongoosePaginate);
const location = mongoose.model('Location', locationSchema);
location.paginate().then({});

module.exports = mongoose.model('Location', locationSchema);
