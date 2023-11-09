import { useEffect, useState } from "react";
import DashboardCard from "../../features/dashboard/dasboardCard/DashboardCard";
import usePageName from "../../features/hooks/usePageName";
import Card from "../../features/ui/card/Card";
import convertToDollar from "../../features/utils/convertToDollar";
import getAllProperties from "../../features/api/properties/getAllProperties";

const DashboardPage = () => {
	usePageName("Admin Dashboard", false);
	const [total, setTotal] = useState(0);

	const fetchTotal = async () => {
		try {
			let tot = 0;
			const response = await getAllProperties("");
			const properties = response.data;
			for (const property of properties) {
				tot += property?.units[0]?.rent;
			}
			setTotal(tot);
		} catch (err) {
			console.warn(err.message);
		}
	};

	useEffect(() => {
		fetchTotal();
	});

	return (
		<>
			<Card>
				<h2>Summary</h2>
				<div className="formGrid">
					<DashboardCard>
						<p className="small">Your MRR:</p>
						<h1>{convertToDollar(total, 0)}</h1>
					</DashboardCard>
				</div>
			</Card>
		</>
	);
};

export default DashboardPage;
