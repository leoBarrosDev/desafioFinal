const Joi = require('joi').extend(require('@joi/date'));
const isCpf = require('../../utils/isCpf');

const BadRequest = require('../../errors/BadRequest');

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
					if (isCpf(value)) {
						return help.message(`O CPF ${value} é inválido, tente novamente`);
					}
					return true;
				}),

			data_nascimento: Joi.date()
				.required()
				.format('DD/MM/YYYY')
				.less('2004-01-01')
				.max('now'),
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
		if(error){
			throw new BadRequest({details: error.details.map((err)=> err.message)});
		}
		next();
	} catch (error) {
		next(error);
	}

};