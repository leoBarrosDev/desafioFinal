const request = require('./request');

const peopleExemple = {
  nome: 'Exemplo de pessoa',
  cpf: '06019679411',
  data_nascimento: '09/02/1987',
  email: 'exemplo@email.com',
  senha: '123456',
  habilitado: 'Sim'
};

describe('Test features authenticate', () => {
  it('Should success authenticate', async () => {
    await request.post('/api/v1/people/').send(peopleExemple);
    const response = await request.post('/api/v1/authenticate').send({
      email: peopleExemple.email,
      senha: peopleExemple.senha
    });
    expect(response.status).toBe(200);
  });

  it('Should return error 400, due to invalid email', async () => {
    const response = await request.post('/api/v1/authenticate').send({
      email: 'emailfake@email.com',
      senha: peopleExemple.senha
    });
    expect(response.status).toBe(400);
  });

  it('Should return error 400, due to invalid senha', async () => {
    const response = await request.post('/api/v1/authenticate').send({
      email: peopleExemple.email,
      senha: '12345'
    });
    expect(response.status).toBe(400);
  });
});
