import { useNavigate } from "react-router-dom";
import Table from "../../features/ui/table/Table";

const PropertiesPage = () => {
	const navigate = useNavigate();

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
			<Table
				columns={[
					{ field: "street", headerName: "Street", width: 200 },
					{ field: "city", headerName: "City", width: 75 },
					{ field: "state", headerName: "State", width: 75 },
					{ field: "zipcode", headerName: "Zip Code", width: 100 },
					{ field: "rent", headerName: "Monthly Rent", width: 150 },
				]}
				rows={rows}
				tableOptions={{
					onRowClick: handleRowClick,
				}}
			/>
		</>
	);
};

export default PropertiesPage;
