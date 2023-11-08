import { useEffect, useState } from "react";
import usePageName from "../../features/hooks/usePageName";
import Card from "../../features/ui/card/Card";
import { useNavigate, useParams } from "react-router-dom";
import getPropertyById from "../../features/api/properties/getPropertyById";
import Button from "../../features/ui/button/Button";
import deletePropertyById from "../../features/api/properties/deletePropertyById";
import Input from "../../features/ui/input/Input";
import updatePropertyById from "../../features/api/properties/updatePropertyById";
import propertyModel from "../../features/property/model";
import isInvalid from "../../features/property/validation";

const PropertyPage = () => {
	const navigate = useNavigate();
	const { propertyId } = useParams();
	const [loading, setLoading] = useState(false);
	const [property, setProperty] = useState(null);
	const [canEdit, setCanEdit] = useState(false);
	const [propertyForm, setPropertyForm] = useState(propertyModel);
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
				size: response.data?.size,
				yearBuilt: response.data?.yearBuilt,
				purchaseDate: response.data?.purchaseDate,
				units: response.data?.units,
				owners: response.data?.owners,
				managers: response.data?.managers,
			});
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		fetchProperty();
	}, []);

	const handleDeleteProperty = async () => {
		setLoading(true);
		try {
			const result = prompt(
				'WARNING: This action cannot be undone! To confirm, type "delete".'
			);
			if (result === "delete") {
				await deletePropertyById("", propertyId);
				navigate(-1);
			} else {
				alert("Property was not deleted.");
			}
		} catch (err) {
			console.error(err.message);
		} finally {
			setLoading(false);
		}
	};

	const handleCancel = async () => {
		try {
			setLoading(true);
			await fetchProperty();
		} catch (err) {
			console.warn(err.message);
		} finally {
			setLoading(false);
			setCanEdit(false);
		}
	};

	const handleSaveProperty = async () => {
		setLoading(true);

		try {
			const error = isInvalid(propertyForm);
			if (error) return alert(error);

			await updatePropertyById("", propertyId, propertyForm);

			await fetchProperty();
			alert("Property has been updated.");
		} catch (err) {
			console.error(err.message);
		} finally {
			setCanEdit(false);
			setLoading(false);
		}
	};

	if (!property) return <h2>Loading...</h2>;

	return (
		<>
			<Card>
				<div className="row sb">
					<span></span>
					<div className="row gap05">
						{canEdit ? (
							<>
								<Button
									loading={loading}
									onClick={handleCancel}
								>
									Cancel
								</Button>
								<Button
									loading={loading}
									onClick={handleSaveProperty}
								>
									Save
								</Button>
							</>
						) : (
							<>
								<Button onClick={() => setCanEdit(true)}>
									Edit
								</Button>
								<Button
									loading={loading}
									onClick={handleDeleteProperty}
									type="warn"
								>
									Delete
								</Button>
							</>
						)}
					</div>
				</div>
				<section className="column gap1">
					<h4>General Information</h4>
					<div className="formGrid">
						<Input>
							<label htmlFor="name">Name</label>
							<input
								disabled={!canEdit}
								id="name"
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
							<select
								disabled={!canEdit}
								id="type"
								value={propertyForm.type}
								onChange={(e) =>
									setPropertyForm({
										...propertyForm,
										type: e.target.value,
									})
								}
							>
								<option value="Single Family">
									Single Family
								</option>
								<option value="Duplex">Duplex</option>
								<option value="Multi Family">
									Multi Family
								</option>
							</select>
						</Input>
					</div>
				</section>
				<section className="column gap1">
					<h4>Address</h4>
					<div className="formGrid">
						<Input>
							<label htmlFor="street">Street</label>
							<input
								disabled={!canEdit}
								id="street"
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
				</section>
				<section className="column gap1">
					<h4>Property Information</h4>
					<div className="formGrid">
						<Input>
							<label htmlFor="yearBuilt">Year Built</label>
							<input
								disabled={!canEdit}
								id="yearBuilt"
								value={propertyForm.yearBuilt}
								onChange={(e) =>
									setPropertyForm({
										...propertyForm,
										yearBuilt: e.target.value,
									})
								}
							/>
						</Input>
						<Input>
							<label htmlFor="purchaseDate">Purchase Date</label>
							<input
								disabled={!canEdit}
								id="purchaseDate"
								type="date"
								value={propertyForm.purchaseDate}
								onChange={(e) =>
									setPropertyForm({
										...propertyForm,
										purchaseDate: e.target.value,
									})
								}
							/>
						</Input>
						<Input>
							<label htmlFor="purchasePrice">
								Purchase Price
							</label>
							<input
								disabled={!canEdit}
								id="purchasePrice"
								type="number"
								value={propertyForm.purchasePrice}
								onChange={(e) =>
									setPropertyForm({
										...propertyForm,
										purchasePrice: e.target.value,
									})
								}
							/>
						</Input>
						<Input>
							<label htmlFor="size">Lot Size</label>
							<input
								disabled={!canEdit}
								id="size"
								type="text"
								value={propertyForm.size}
								onChange={(e) =>
									setPropertyForm({
										...propertyForm,
										size: e.target.value,
									})
								}
							/>
						</Input>
					</div>
				</section>
			</Card>
		</>
	);
};

export default PropertyPage;
