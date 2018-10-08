const Joi = require("joi");

module.exports.schema = {
    name: Joi.string().min(3).max(30).required(),
    course: Joi.string().alphanum().min(3).required(),
    grade: Joi.number().required()
}