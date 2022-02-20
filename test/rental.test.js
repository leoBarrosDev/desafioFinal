const faker = require('faker-br');
const request = require('./request');

function createRental() {
  return {
    nome: faker.name.findName(),
    cnpj: faker.br.cnpj(),
    atividades: 'Locação de veículos populares',
    endereco: [
      {
        cep: '69914288',
        number: '191',
        complemento: 'Sl 02',
        isFilial: true
      }
    ]
  };
}

describe('Test features Rental', () => {
  let id;
  let fakeRental;

  beforeEach(async () => {
    fakeRental = createRental();
    const response = await request.post('/api/v1/rental/').send(fakeRental);
    id = response.body._id;
  });

  it('should return a list of rental', async () => {
    const response = await request.get('/api/v1/rental/');
    expect(response.status).toBe(200);
  });

  it('must register a rental in the database', async () => {
    const rental = createRental();
    const sut = await request.post(`/api/v1/rental/`).send(rental);
    expect(sut.status).toBe(201);
  });

  it('must a delete a rental', async () => {
    const sut = await request.delete(`/api/v1/rental/${id}`);
    expect(sut.status).toBe(204);
  });

  it('must find a rental by id', async () => {
    const sut = await request.get(`/api/v1/rental/${id}`);

    expect(sut.status).toBe(200);
    expect(sut.body.nome).toBe(fakeRental.nome);
  });
});
