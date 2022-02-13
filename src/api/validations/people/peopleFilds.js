const Joi = require('joi').extend(require('@joi/date'));
const isCpf = require('../../utils/isCpf');
const Errors = require('../../errors/Errors');
const isAdult = require('../../utils/isAdult');



module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			nome: Joi.string()
				.required(),

			cpf: Joi.string()
				.required()
				.min(11)
				.max(11)
				.custom((value, help) => {
					if (!isCpf(value)) {
						console.log('cpf invalido')
						return help.message(`O CPF ${value} é inválido, tente novamente`);
					}
					return true;
				}),

			data_nascimento: Joi.date()
				.required()
				.format('DD/MM/YYYY')
				.max('now')
				.custom((value, help) => {
					if (isAdult(new Date(value)) === false) {
						return help.message('You cannot register, come back with a guardian');
					}
				}),				
			email: Joi.string()
				.required()
				.email(),
			senha: Joi.string()
				.required()
				.min(6),
			habilitado: Joi.string()
				.required()
                
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