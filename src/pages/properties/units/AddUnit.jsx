import { useEffect, useState } from "react";
import usePageName from "../../../features/hooks/usePageName";
import getPropertyById from "../../../features/api/properties/getPropertyById";
import { useParams } from "react-router-dom";
import Card from "../../../features/ui/card/Card";
import Button from "../../../features/ui/button/Button";
import unitsModel from "../../../features/property/units/model";
import Input from "../../../features/ui/input/Input";
import isInvalidUnit from "../../../features/property/units/validation";
import addUnit from "../../../features/api/properties/units/addUnit";

const AddUnit = () => {
	const { propertyId } = useParams();
	const [loading, setLoading] = useState(false);
	const [property, setProperty] = useState(null);
	const [unit, setUnit] = useState(unitsModel);
	usePageName(`Properties / ${property?.name} / Add Unit`);

	const fetchProperty = async () => {
		try {
			const response = await getPropertyById("", propertyId);
			setProperty(response.data);
		} catch (err) {
			console.warn(err.message);
		}
	};

	useEffect(() => {
		fetchProperty();
	}, []);

	const handleAddUnit = async () => {
		setLoading(true);

		try {
			const error = isInvalidUnit(unit);
			if (error) return alert(error);

			await addUnit("", propertyId, unit);

			alert("Unit has been added.");
			setUnit(unitsModel);
		} catch (err) {
			console.warn(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Card>
				<div className="row sb">
					<h3>Add Unit</h3>
					<Button loading={loading} onClick={handleAddUnit}>
						Save
					</Button>
				</div>
				<div className="formGrid">
					<Input>
						<label htmlFor="beds">Number of Bedrooms</label>
						<input
							required
							id="beds"
							value={unit.beds}
							onChange={(e) =>
								setUnit({ ...unit, beds: e.target.value })
							}
						/>
					</Input>
					<Input>
						<label htmlFor="baths">Number of Bathrooms</label>
						<input
							required
							id="baths"
							value={unit.baths}
							onChange={(e) =>
								setUnit({ ...unit, baths: e.target.value })
							}
						/>
					</Input>
					<Input>
						<label htmlFor="rent">Rent Amount</label>
						<input
							required
							id="rent"
							value={unit.rent}
							onChange={(e) =>
								setUnit({ ...unit, rent: e.target.value })
							}
						/>
					</Input>
				</div>
			</Card>
		</>
	);
};

export default AddUnit;
