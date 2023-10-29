import axiosAuth from "../axiosAuth";

const getAllProperties = async (accessToken) => {
	try {
		const response = await axiosAuth(accessToken).get("/properties");
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getAllProperties;
