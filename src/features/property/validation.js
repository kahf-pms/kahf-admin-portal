import Joi from "joi";

const isInvalid = (obj) => {
	const schema = Joi.object({
		name: Joi.string().required(),
		type: Joi.string()
			.valid("Single Family", "Duplex", "Multi Family")
			.required(),
		address: Joi.object({
			street: Joi.string().required(),
			city: Joi.string().required(),
			state: Joi.string().required(),
			country: Joi.string().valid("United States").required(),
			zipcode: Joi.string().required(),
		}).required(),
	});

	const { error } = schema.validate(obj);
	return error;
};

export default isInvalid;
