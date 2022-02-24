const Joi = require('joi').extend(require('@joi/date'));
const Errors = require('../../errors/Errors');
const cnpjValidator = require('../../utils/cnpjValidator');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string().trim().required(),
      atividades: Joi.string().trim().required(),
      cnpj: Joi.string()
        .trim()
        .min(14)
        .max(14)
        .required()
        .custom((value, help) => {
          if (!cnpjValidator(value)) {
            return help.message(`O CNPJ ${value} is invalid`);
          }
          return true;
        }),

      endereço: Joi.array()
        .unique('cep')
        .min(1)
        .items(
          Joi.object({
            cep: Joi.string().trim().min(8).max(8).required(),
            number: Joi.string().trim().required(),
            complemento: Joi.string().trim(),
            isFilial: Joi.boolean().required
          })
        )
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
