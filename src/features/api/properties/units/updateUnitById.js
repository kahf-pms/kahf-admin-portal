import axiosAuth from "../../axiosAuth";

const updateUnitById = async (accessToken, propertyId, unitId, body) => {
	try {
		const response = await axiosAuth(accessToken).put(
			`/properties/${propertyId}/units/${unitId}`,
			body
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default updateUnitById;
