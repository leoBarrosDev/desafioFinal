const RentalRepository = require('../repositories/rentalRepository');

class RentalServices {
  async createRental(payload, data) {
    let count = 0;
    do {
      const Ceps = payload.endereco;
      const adress = Ceps[count];
      const filds = await RentalRepository.searchCep(adress.cep);
      const { cep, logradouro, complemento, bairro, localidade, uf } = filds;
      adress.cep = cep;
      adress.logradouro = logradouro;
      adress.complemento = complemento;
      adress.bairro = bairro;
      adress.localidade = localidade;
      adress.uf = uf;
      count++;
    } while (count < payload.endereco.length);

    const result = await RentalRepository.createRental(payload, data);
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
