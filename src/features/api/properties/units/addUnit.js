import axiosAuth from "../../axiosAuth";

const addUnit = async (accessToken, propertyId, body) => {
	try {
		const response = await axiosAuth(accessToken).post(
			`/properties/${propertyId}/units`,
			body
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default addUnit;
