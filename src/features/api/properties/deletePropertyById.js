import axiosAuth from "../axiosAuth";

const deletePropertyById = async (accessToken, id) => {
	try {
		const response = await axiosAuth(accessToken).delete(
			`/properties/${id}`
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default deletePropertyById;
