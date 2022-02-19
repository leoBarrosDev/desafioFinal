const request = require('./request');
const faker = require('faker-br');
const VehicleService = require('../src/api/services/vehicleServices');
// const PeopleServices = require('../src/api/services/peopleServices');
const TokenGenerator = require('../src/api/utils/tokenGenerator');

const vehicle = {};
let token = '';

describe('Test feature vehicles', () => {
  beforeAll(async () => {
    vehicle.v1 = await VehicleService.createVehicle({
      modelo: 'Fiat Palio Celebration',
      cor: 'preto',
      ano: '2008',
      acessorios: [
        {
          descricao: 'Ar-condicionado'
        },
        {
          descricao: 'Direção hidráulica'
        },
        {
          descricao: 'Pré som'
        }
      ],
      quantidadePassageiros: 5
    });
    vehicle.v2 = await VehicleService.createVehicle({
      modelo: 'Ferrari de Diego',
      cor: 'vermelha',
      ano: '20019',
      acessorios: [
        {
          descricao: 'Ar-condicionado'
        },
        {
          descricao: 'Direção hidráulica'
        },
        {
          descricao: 'Rodas de liga leve'
        }
      ],
      quantidadePassageiros: 2
    });

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

    const fakeUser = createUser();
    console.log(fakeUser);

    token = await TokenGenerator(fakeUser.email, fakeUser.senha);
  });

  it('Should return a list of vehicles', async () => {
    const response = await request.get('/api/v1/car/').set('authorization', token);
    expect(response.status).toBe(401);
  });
});
