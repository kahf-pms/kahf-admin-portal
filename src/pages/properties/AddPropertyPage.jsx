import { useState } from "react";
import usePageName from "../../features/hooks/usePageName";
import Button from "../../features/ui/button/Button";
import Card from "../../features/ui/card/Card";
import Input from "../../features/ui/input/Input";
import addProperty from "../../features/api/properties/addProperty";
import isInvalid from "../../features/property/validation";
import propertyModel from "../../features/property/model";

const AddPropertyPage = () => {
	const [loading, setLoading] = useState(false);
	const [propertyForm, setPropertyForm] = useState(propertyModel);
	usePageName("Add Property");

	const handleAddProperty = async () => {
		setLoading(true);

		try {
			const error = isInvalid(propertyForm);
			if (error) return alert(error);

			await addProperty("", propertyForm);

			alert("Property has been added.");
			setPropertyForm(propertyModel);
		} catch (err) {
			console.warn(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Card>
			<div className="row sb">
				<span></span>
				<Button loading={loading} onClick={handleAddProperty}>
					Add Property
				</Button>
			</div>
			<section className="column gap1">
				<h4>General Information</h4>
				<div className="formGrid">
					<Input>
						<label htmlFor="name">Name</label>
						<input
							required
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
						<select
							id="type"
							value={propertyForm.type}
							onChange={(e) =>
								setPropertyForm({
									...propertyForm,
									type: e.target.value,
								})
							}
						>
							<option value="Single Family">Single Family</option>
							<option value="Duplex">Duplex</option>
							<option value="Multi Family">Multi Family</option>
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
			</section>
		</Card>
	);
};

export default AddPropertyPage;
