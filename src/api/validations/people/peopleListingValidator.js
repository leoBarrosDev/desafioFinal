const Joi = require('joi').extend(require('@joi/date'));
const cpfValidator = require('../../utils/cpfValidator');
const Errors = require('../../errors/Errors');


module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			nome: Joi.string(),

			cpf: Joi.string()
				.min(11)
				.max(11)
				.custom((value, help) => {
					if (cpfValidator(value)) {
						return help.message(`O CPF ${value} não é válido`);
					}
					return true;
				}),

			data_nascimento: Joi.date()
				.format('DD/MM/YYYY')
				.max('now'),

			email: Joi.string()
				.email(),

			senha: Joi.string()
				.min(6),

			habilitado: Joi.string()
		});
		const { error } = await schema.validate(req.query, { abortEarl: true });

		if (error) throw error;
		return next();
	} catch (error) {
		return Errors.badRequest(res, error.message);
	}
};
