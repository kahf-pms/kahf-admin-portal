import axiosAuth from "../../axiosAuth";

const getUnitById = async (accessToken, propertyId, unitId) => {
	try {
		const response = await axiosAuth(accessToken).get(
			`/properties/${propertyId}/units/${unitId}`
		);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getUnitById;
