import { useState } from "react";
import usePageName from "../../features/hooks/usePageName";
import Button from "../../features/ui/button/Button";
import Card from "../../features/ui/card/Card";

const apiCall = () =>
	new Promise((resolve, reject) => {
		try {
			setTimeout(() => {
				resolve([1, 2, 3, 4, 5]);
			}, 1500);
		} catch (err) {
			reject(err.message);
		}
	});

const DashboardPage = () => {
	usePageName("Admin Dashboard", false);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleClick = async () => {
		try {
			setLoading(true);
			const response = await apiCall();
			console.log(response);
		} catch (err) {
			console.warn(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Card>
				<div>
					<Button loading={loading} onClick={handleClick}>
						Get Data
					</Button>
				</div>
			</Card>
		</>
	);
};

export default DashboardPage;
