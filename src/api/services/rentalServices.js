const RentalRepository = require('../repositories/rentalRepository');

class RentalServices {
  async createRental(payload, fields) {
    let count = 0;
    do {
      const ceps = payload.endereco;
      const address = ceps[count];
      // eslint-disable-next-line no-shadow
      const fields = RentalRepository.searchCep(address.cep);
      const { cep, logradouro, complemento, bairro, localidade, uf } = fields;

      address.cep = cep;
      address.logradouro = logradouro;
      address.complemento = complemento;
      address.bairro = bairro;
      address.localidade = localidade;
      address.uf = uf;

      count += 1;
    } while (count < payload.endereco.length);

    const result = await RentalRepository.create(payload, fields);
    return result;
  }

  async listRental(payload) {
    const rentals = await RentalRepository.listRental(payload);
    return rentals;
  }

  async updateRental(id, payload) {
    const result = await RentalRepository.updateRental(id, payload);
    return result;
  }

  async findOneRental(id) {
    const result = await RentalRepository.findOneRental(id);
    return result;
  }

  async removeRental(id) {
    return RentalRepository.removeRental(id);
  }
}

module.exports = new RentalServices();
