const faker = require('faker-br');
const request = require('./request');

function createUser() {
  return {
    nome: faker.name.findName(),
    cpf: faker.br.cpf(),
    data_nascimento: '09/02/1987',
    email: faker.internet.email(),
    senha: '123456',
    habilitado: 'Sim'
  };
}

describe('Test features People', () => {
  let id;
  let fakeUser;

  beforeEach(async () => {
    fakeUser = createUser();
    const response = await request.post(`/api/v1/people/`).send(fakeUser);
    id = response.body._id;
  });

  it('should return a list of people', async () => {
    const response = await request.get('/api/v1/people/');
    expect(response.status).toBe(200);
  });

  it('must register a person in the database', async () => {
    const user = createUser();
    const sut = await request.post(`/api/v1/people/`).send(user);
    expect(sut.status).toBe(201);
  });

  it('must update a person', async () => {
    const fakeUserUpdate = {
      ...fakeUser,
      nome: faker.name.findName(),
      email: faker.internet.email()
    };

    const sut = await request.put(`/api/v1/people/${id}`).send(fakeUserUpdate);

    expect(sut.status).toBe(200);
    expect(sut.body.nome).toBe(fakeUserUpdate.nome);
    expect(sut.body.email).toBe(fakeUserUpdate.email);
  });

  it('must delete a person', async () => {
    const sut = await request.delete(`/api/v1/people/${id}`);

    expect(sut.status).toBe(204);
  });

  it('must find a person by id', async () => {
    const sut = await request.get(`/api/v1/people/${id}`);

    expect(sut.status).toBe(200);
    expect(sut.body.nome).toBe(fakeUser.nome);
  });
});
