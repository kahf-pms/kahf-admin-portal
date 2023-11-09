import Joi from "joi";

const isInvalidUnit = (obj) => {
	const schema = Joi.object({
		name: Joi.string().allow(""),
		baths: Joi.number(),
		beds: Joi.number(),
		rent: Joi.number(),
	});

	const { error } = schema.validate(obj);
	return error;
};

export default isInvalidUnit;
