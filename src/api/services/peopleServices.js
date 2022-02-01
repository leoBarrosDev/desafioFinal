
const PeopleRepository = require('../repositories/peopleRepository')

class PeopleServices {
  async create (people) {
    const result = await PeopleRepository.create(people)
    return result
  }

  async list (payload) {
    const peoples = await PeopleRepository.list({
      peoples_id: payload.id,
      nome: payload.nome,
      cpf: payload.cpf,
      data_nascimento: payload.data_nascimento,
      email: payload.email,
      senha: payload.senha,
      habilitado: payload.habilitado
    })
    return peoples
  }

  async update (id, payload) {
    const result = await PeopleRepository.update(id, payload)
    return result
  }

  async findOnePeople (id) {
    const result = await PeopleRepository.findOnePeople(id)

    return result
  }

  async remove (id) {
    return await PeopleRepository.remove(id)
  }
}

module.exports = new PeopleServices()
