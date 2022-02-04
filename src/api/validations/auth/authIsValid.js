const Joi = require('joi').extend(require('@joi/date'));



module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			email: Joi.string()
				.email()
				.required(),
				
			senha: Joi.string()
				.required()
				.min(6)
               
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