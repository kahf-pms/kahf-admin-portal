import axiosAuth from "../axiosAuth";

const addProperty = async (accessToken, data) => {
	try {
		const response = await axiosAuth(accessToken).post("/properties", data);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default addProperty;
