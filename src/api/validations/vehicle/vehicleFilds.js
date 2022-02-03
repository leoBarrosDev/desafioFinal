const Joi = require('foi').extend(require('@joi/date'));
const BadRequest = require('../../errors/BadRequest');

module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			modelo: Joi.string()
				.required()
				.trim(),

			cor: Joi.string()
				.required()
				.trim(),

			ano: Joi.date()
				.format('YYYY')
				.min('1950-01-01')
				.max('2022-12-31')
				.required(),

			acessorios: Joi.array()
				.min(1)
				.items(
					Joi.object({
						descrição: Joi.string()
							.required()
							.trim()
					})
				)
				.required(),

			quantidadePessoas: Joi.number()
				.integer()
				.required()
		});

		const { error } = await schema.validate(req.body, {
			abortEarly: false,
			allowUnknown: false

		});

		if (error) {
			throw new BadRequest({ details: error.details.map((err) => err.message) });
		}

		next();
	} catch (error) {
		next(error);
	}
};
