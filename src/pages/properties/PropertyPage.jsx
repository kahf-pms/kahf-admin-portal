import { useEffect, useState } from "react";
import usePageName from "../../features/hooks/usePageName";
import Card from "../../features/ui/card/Card";
import { useNavigate, useParams } from "react-router-dom";
import getPropertyById from "../../features/api/properties/getPropertyById";
import Button from "../../features/ui/button/Button";
import deletePropertyById from "../../features/api/properties/deletePropertyById";
import Input from "../../features/ui/input/Input";
import updatePropertyById from "../../features/api/properties/updatePropertyById";

const PropertyPage = () => {
	const navigate = useNavigate();
	const { propertyId } = useParams();
	const [property, setProperty] = useState(null);
	const [canEdit, setCanEdit] = useState(false);

	const [propertyForm, setPropertyForm] = useState({
		name: "",
		type: "",
		address: {
			street: "",
			city: "",
			state: "",
			country: "United States",
			zipcode: "",
		},
	});

	usePageName(`Properties / ${property?.name}`);

	const fetchProperty = async () => {
		try {
			const response = await getPropertyById("", propertyId);
			setProperty(response.data);

			setPropertyForm({
				name: response.data?.name,
				type: response?.data?.type,
				address: {
					street: response.data?.address?.street,
					city: response.data?.address?.city,
					state: response.data?.address?.state,
					country: response.data?.address?.country,
					zipcode: response.data?.address?.zipcode,
				},
			});
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		fetchProperty();
	}, []);

	const handleDeleteProperty = async () => {
		try {
			const result = confirm(
				"Are you sure you want to delete this property? This action cannot be undone."
			);
			if (result) {
				await deletePropertyById("", propertyId);
				navigate(-1);
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	const handleCancel = async () => {
		await fetchProperty();
		setCanEdit(false);
	};

	const handleSaveProperty = async () => {
		try {
			const response = await updatePropertyById(
				"",
				propertyId,
				propertyForm
			);
			await fetchProperty();
		} catch (err) {
			console.error(err.message);
		} finally {
			setCanEdit(false);
		}
	};

	if (!property) return <h2>Loading...</h2>;

	return (
		<>
			<Card>
				<div className="row sb">
					<h3>General Information</h3>
					<div className="row gap05">
						{canEdit ? (
							<>
								<Button onClick={handleCancel}>Cancel</Button>
								<Button onClick={handleSaveProperty}>
									Save
								</Button>
							</>
						) : (
							<>
								<Button onClick={() => setCanEdit(true)}>
									Edit
								</Button>
								{/* <Button
									onClick={handleDeleteProperty}
									type="warn"
								>
									Delete
								</Button> */}
							</>
						)}
					</div>
				</div>
				<div className="formGrid">
					<Input>
						<label htmlFor="name">Name</label>
						<input
							disabled={!canEdit}
							id="name"
							type="text"
							value={propertyForm.name}
							onChange={(e) =>
								setPropertyForm({
									...propertyForm,
									name: e.target.value,
								})
							}
						/>
					</Input>
					<Input>
						<label htmlFor="type">Type</label>
						<input
							disabled={!canEdit}
							id="type"
							type="text"
							value={propertyForm.type}
							onChange={(e) =>
								setPropertyForm({
									...propertyForm,
									type: e.target.value,
								})
							}
						/>
					</Input>
				</div>
				<div className="formGrid">
					<Input>
						<label htmlFor="street">Street</label>
						<input
							disabled={!canEdit}
							id="street"
							type="text"
							value={propertyForm.address.street}
							onChange={(e) =>
								setPropertyForm({
									...propertyForm,
									address: {
										...propertyForm.address,
										street: e.target.value,
									},
								})
							}
						/>
					</Input>
					<Input>
						<label htmlFor="city">City</label>
						<input
							disabled={!canEdit}
							id="city"
							type="text"
							value={propertyForm.address.city}
							onChange={(e) =>
								setPropertyForm({
									...propertyForm,
									address: {
										...propertyForm.address,
										city: e.target.value,
									},
								})
							}
						/>
					</Input>
					<Input>
						<label htmlFor="state">State</label>
						<input
							disabled={!canEdit}
							id="state"
							type="text"
							value={propertyForm.address.state}
							onChange={(e) =>
								setPropertyForm({
									...propertyForm,
									address: {
										...propertyForm.address,
										state: e.target.value,
									},
								})
							}
						/>
					</Input>
					<Input>
						<label htmlFor="country">Country</label>
						<input
							disabled={true}
							id="country"
							type="text"
							value={propertyForm.address.country}
							onChange={(e) =>
								setPropertyForm({
									...propertyForm,
									address: {
										...propertyForm.address,
										country: e.target.value,
									},
								})
							}
						/>
					</Input>
					<Input>
						<label htmlFor="zipcode">Zip Code</label>
						<input
							disabled={!canEdit}
							id="zipcode"
							type="text"
							value={propertyForm.address.zipcode}
							onChange={(e) =>
								setPropertyForm({
									...propertyForm,
									address: {
										...propertyForm.address,
										zipcode: e.target.value,
									},
								})
							}
						/>
					</Input>
				</div>
			</Card>
		</>
	);
};

export default PropertyPage;
