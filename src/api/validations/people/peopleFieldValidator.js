const Joi = require('joi').extend(require('@joi/date'));
const cpfValidator = require('../../utils/cpfValidator');
const Errors = require('../../errors/Errors');
const ageValidator = require('../../utils/ageValidator');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string().trim().required(),

      cpf: Joi.string()
        .trim()
        .required()
        .min(11)
        .max(11)
        .custom((value, help) => {
          if (!cpfValidator(value)) {
            console.log('cpf invalido');
            return help.message(`O CPF ${value} é inválido, tente novamente`);
          }
          return true;
        }),

      data_nascimento: Joi.date()
        .required()
        .format('DD/MM/YYYY')
        .max('now')
        // eslint-disable-next-line consistent-return
        .custom((value, help) => {
          if (ageValidator(new Date(value)) === false) {
            return help.message('You cannot register, come back with a guardian');
          }
        }),
      email: Joi.string().trim().required().email(),
      senha: Joi.string().trim().required().min(6),
      habilitado: Joi.string().trim().required()
    });

    const { error } = await schema.validate(req.body, {
      abortEarly: false,
      allowUnknown: false
    });
    if (error) throw error;
    return next();
  } catch (error) {
    return Errors.badRequest(res, error.message);
  }
};
