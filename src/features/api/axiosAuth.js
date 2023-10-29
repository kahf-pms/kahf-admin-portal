import axios from "axios";
import { URL } from "../../constants";

const axiosAuth = (token) => {
	return axios.create({
		baseURL: URL,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		withCredentials: true,
	});
};

export default axiosAuth;
