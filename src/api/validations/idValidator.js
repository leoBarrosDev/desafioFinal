/* eslint-disable consistent-return */
const Joi = require('joi').extend(require('@joi/date'));
const Errors = require('../errors/Errors');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      id: Joi.string()
        .min(24)
        .max(24)
        .pattern(/^[0-9a-fA-F]{24}$/)
    });

    const { error } = await schema.validate(req.params, { abortEarl: true });

    if (error) throw error;

    if (error) {
      return Errors.notFound(res, error.message);
    }
    next();
  } catch (error) {
    return Errors.badRequest(res.error.message);
  }
};
