import { useNavigate } from "react-router-dom";
import Table from "../../features/ui/table/Table";
import ControlBar from "../../features/ui/controlBar/ControlBar";
import Button from "../../features/ui/button/Button";
import SearchBar from "../../features/ui/searchBar/SearchBar";
import { useEffect, useState } from "react";
import getAllProperties from "../../features/api/properties/getAllProperties";
import usePageName from "../../features/hooks/usePageName";
import Card from "../../features/ui/card/Card";
import Grid from "../../features/ui/grid/Grid";
import PropertyCard from "../../features/property/propertyCard/PropertyCard";
import convertToDollar from "../../features/utils/convertToDollar";

const PropertiesPage = () => {
	usePageName("All Properties");
	const navigate = useNavigate();
	const [properties, setProperties] = useState(null);
	const [isLaptop, setIsLaptop] = useState(window.innerWidth > 1200);

	useEffect(() => {
		const handleResize = () => {
			setIsLaptop(window.innerWidth > 1200);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const fetchProperties = async () => {
			try {
				const response = await getAllProperties("");
				setProperties(response.data);
			} catch (err) {
				console.error(err.message);
			}
		};
		fetchProperties();
	}, []);

	const handleRowClick = (params) => {
		const { row } = params;
		navigate(`/properties/${row.id}`);
	};

	if (!properties) return <h2>Loading...</h2>;

	return (
		<Card>
			<ControlBar>
				<Button onClick={() => navigate("/properties/add")}>
					Add Property
				</Button>
			</ControlBar>
			{isLaptop ? (
				<Table
					columns={[
						{ field: "name", headerName: "Name", width: 150 },
						{
							field: "street",
							headerName: "Street",
							width: 200,
						},
						{ field: "city", headerName: "City", width: 150 },
						{ field: "state", headerName: "State", width: 100 },
						{
							field: "zipcode",
							headerName: "Zip Code",
							width: 100,
						},
						{
							field: "rent",
							headerName: "Monthly Rent",
							width: 150,
						},
					]}
					rows={properties?.map((property) => ({
						id: property?._id,
						name: property?.name,
						street: property?.address?.street,
						city: property?.address?.city,
						state: property?.address?.state,
						zipcode: property?.address?.zipcode,
						rent: convertToDollar(property?.units[0]?.rent),
					}))}
					tableOptions={{
						onRowClick: handleRowClick,
					}}
				/>
			) : (
				<Grid>
					{properties.map((property) => (
						<PropertyCard key={property._id} property={property} />
					))}
				</Grid>
			)}
		</Card>
	);
};

export default PropertiesPage;
