const Joi = require('joi').extend(require('@joi/date'));

 
module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			modelo: Joi.string()
				.trim()
				.required(),
 
			cor: Joi.string()
				.trim()
				.required(),
 
			ano: Joi.date()
				.format('YYYY')
				.min('1950-01-01')
				.max('2022-12-31')
				.required(),
 
			acessorios: Joi.array()
				.min(1)
				.items(
					Joi.object({
						descricao: Joi.string()
							.trim()
							.required()
					})
				)
				.required(),
 
			quantidadePassageiros: Joi.number()
				.integer()
				.required()
		});
 
		const { error } = await schema.validate(req.body, {
			abortEarly: false,
			allowUnknown: false
		});
 
		if (error) throw error;
		return next();
	} catch (error) {
		return res.status(400).json(error);
	}
};