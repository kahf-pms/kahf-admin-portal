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
		size: Joi.string(),
		yearBuilt: Joi.string(),
		purchaseDate: Joi.string(),
		purchasePrice: Joi.number(),
		units: Joi.array(),
		owners: Joi.array(),
		managers: Joi.array(),
	});

	const { error } = schema.validate(obj);
	return error;
};

export default isInvalid;
