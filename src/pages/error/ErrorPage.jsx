import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate(-1);
		}, 2000);
	}, []);

	return (
		<>
			<h2>Error: Page not found</h2>
			<p>Redirecting...</p>
		</>
	);
};

export default ErrorPage;
