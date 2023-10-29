import { useNavigate } from "react-router-dom";
import Table from "../../features/ui/table/Table";
import ControlBar from "../../features/ui/controlBar/ControlBar";
import Button from "../../features/ui/button/Button";
import SearchBar from "../../features/ui/searchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getProperties, setProperties } from "../../features/app/propertySlice";
import { useEffect } from "react";
import getAllProperties from "../../features/api/properties/getAllProperties";
import { setPageName } from "../../features/app/globalSlice";

const PropertiesPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const properties = useSelector(getProperties);

	useEffect(() => {
		const fetchProperties = async () => {
			try {
				const response = await getAllProperties("");
				dispatch(setProperties(response.data));
			} catch (err) {
				console.err(err.message);
			}
		};

		dispatch(setPageName("View All Properties"));
		fetchProperties();
	}, []);

	useEffect(() => {
		console.log(properties);
	}, [properties]);

	const handleRowClick = (params) => {
		const { row } = params;
		navigate(`/properties/${row._id}`);
	};

	const rows = [
		{
			id: "1",
			street: "123 Example Street",
			city: "Joplin",
			state: "MO",
			zipcode: "64801",
			type: "Single Family",
			rent: "$1,200",
		},
		{
			id: "2",
			street: "123 Example Street",
			city: "Joplin",
			state: "MO",
			zipcode: "64801",
			type: "Single Family",
			rent: "$1,200",
		},
		{
			id: "3",
			street: "123 Example Street",
			city: "Joplin",
			state: "MO",
			zipcode: "64801",
			type: "Single Family",
			rent: "$1,200",
		},
		{
			id: "4",
			street: "123 Example Street",
			city: "Joplin",
			state: "MO",
			zipcode: "64801",
			type: "Single Family",
			rent: "$1,200",
		},
		{
			id: "5",
			street: "123 Example Street",
			city: "Joplin",
			state: "MO",
			zipcode: "64801",
			type: "Single Family",
			rent: "$1,200",
		},
		{
			id: "6",
			street: "123 Example Street",
			city: "Joplin",
			state: "MO",
			zipcode: "64801",
			type: "Single Family",
			rent: "$1,200",
		},
		{
			id: "7",
			street: "123 Example Street",
			city: "Joplin",
			state: "MO",
			zipcode: "64801",
			type: "Single Family",
			rent: "$1,200",
		},
		{
			id: "8",
			street: "123 Example Street",
			city: "Joplin",
			state: "MO",
			zipcode: "64801",
			type: "Single Family",
			rent: "$1,200",
		},
		{
			id: "9",
			street: "123 Example Street",
			city: "Joplin",
			state: "MO",
			zipcode: "64801",
			type: "Single Family",
			rent: "$1,200",
		},
	];

	return (
		<>
			<ControlBar>
				<SearchBar />
				<Button onClick={() => navigate("/properties/add")}>
					Add Property
				</Button>
			</ControlBar>
			<Table
				columns={[
					{ field: "street", headerName: "Street", width: 200 },
					{ field: "city", headerName: "City", width: 150 },
					{ field: "state", headerName: "State", width: 100 },
					{ field: "zipcode", headerName: "Zip Code", width: 100 },
					{ field: "rent", headerName: "Monthly Rent", width: 150 },
				]}
				rows={properties?.map((property) => ({
					id: property._id,
					street: property.address.street,
					city: property.address.city,
					state: property.address.state,
					zipcode: property.address.zipcode,
					rent: "$1,234",
				}))}
				tableOptions={{
					onRowClick: handleRowClick,
				}}
			/>
		</>
	);
};

export default PropertiesPage;
