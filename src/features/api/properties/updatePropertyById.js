import axiosAuth from "../axiosAuth";

const updatePropertyById = async (accessToken, id, data) => {
	try {
		const response = await axiosAuth(accessToken).put(
			`/properties/${id}`,
			data
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default updatePropertyById;
