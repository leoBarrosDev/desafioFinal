const Joi = require('joi').extend(require('@joi/date'));
const Errors = require('../../errors/Errors');

module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			id: Joi.string()
				.min(24)
				.max(24),

			modelo: Joi.string(),

			cor: Joi.string(),

			ano: Joi.date()
				.format('YYYY')
				.min('1950-01-01')
				.max('2022-12-31'),

			acessorios: Joi.array()
				.items(
					Joi.object({
						descricao: Joi.string()
							.required()
					})
				),

			quantidadePassageiros: Joi.number()
				.integer(),

			limit: Joi.number()
				.min(1),
			skip: Joi.number()
				.min(0)
		});
		const { error } = await schema.validate(req.query, { abortEarl: true });

		if (error) throw error;
		return next();
	} catch (error) {
		return Errors.badRequest(res, error.message);
	}
};
