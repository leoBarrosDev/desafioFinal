const request = require('./request');

// eslint-disable-next-line no-unused-vars
let tokenBearer = null;
let result = {};

beforeAll(async () => {
  const peopleExemple = {
    nome: 'Exemplo de pessoa',
    cpf: '06019679411',
    data_nascimento: '09/02/1987',
    email: 'exemplo@email.com',
    senha: '123456',
    habilitado: 'Sim'
  };

  await request.post('/api/v1/people/').send(peopleExemple);
  result = await request.post('/api/v1/authenticate').send({
    email: peopleExemple.email,
    senha: peopleExemple.senha
  });

  const { body } = result;
  tokenBearer = body.token;
});

let carExemple = {};

describe('Test features car', () => {
  beforeEach(async () => {
    carExemple = {
      modelo: 'Exemplo de veículo',
      cor: 'preto',
      ano: '2010',
      acessorios: [{ descricao: 'acessorio Nº 1' }, { descricao: 'acessorio Nº 2' }, { descricao: 'acessorio Nº 3' }],
      quantidadePassageiros: 5
    };

    result = await request.post('/api/v1/car').set('Authorization', `Bearer ${tokenBearer}`).send(carExemple);
  });

  it('Should return status 201', (done) => {
    const { status } = result;
    expect(status).toBe(201);
    done();
  });

  it('Should a list the cars', async () => {
    const response = await request.get('/api/v1/car').set('Authorization', `Bearer ${tokenBearer}`);
    expect(response.status).toBe(200);
  });

  it('Should a list the cars', async () => {
    const response = await request.get('/api/v1/cars').set('Authorization', `Bearer ${tokenBearer}`);
    expect(response.status).toBe(404);
  });

  it('Should a list the cars', async () => {
    const response = await request.get('/api/v1/car');
    expect(response.status).toBe(401);
  });
});
