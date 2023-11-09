import { useEffect, useState } from "react";
import getUnitById from "../../api/properties/units/getUnitById";
import Input from "../../ui/input/Input";
import Card from "../../ui/card/Card";
import Button from "../../ui/button/Button";
import updateUnitById from "../../api/properties/units/updateUnitById";
import { useNavigate } from "react-router-dom";

const SingleFamilyUnit = ({ property, units }) => {
	const navigate = useNavigate();

	if (units?.length === 0) {
		return (
			<Card>
				<div className="row sb">
					<h4>No Units Found</h4>
					<Button
						onClick={() =>
							navigate(`/properties/${property._id}/units/add`)
						}
					>
						Add Unit
					</Button>
				</div>
			</Card>
		);
	}

	const [loading, setLoading] = useState(false);
	const [canEdit, setCanEdit] = useState(false);
	const [unit, setUnit] = useState({
		name: "",
		beds: 0,
		baths: 0,
		rent: 0,
	});

	const fetchUnit = async () => {
		try {
			const response = await getUnitById("", property._id, units[0]._id);
			setUnit(response.data);
		} catch (err) {
			console.warn(err.message);
		}
	};

	useEffect(() => {
		if (units.length > 0) {
			fetchUnit();
		}
	}, []);

	const handleCancel = async () => {
		setLoading(true);
		try {
			await fetchUnit();
		} catch (err) {
			console.warn(err.message);
		} finally {
			setLoading(false);
			setCanEdit(false);
		}
	};

	const handleSaveUnit = async () => {
		setLoading(true);

		try {
			await updateUnitById("", property._id, units[0]._id, unit);
			await fetchUnit();
			alert("Unit has been updated.");
		} catch (err) {
			console.warn(err.message);
		} finally {
			setCanEdit(false);
			setLoading(false);
		}
	};

	if (!unit) return;
	return (
		<Card>
			<h3>Unit Information</h3>
			<div className="row gap05">
				{canEdit ? (
					<>
						<Button loading={loading} onClick={handleCancel}>
							Cancel
						</Button>
						<Button loading={loading} onClick={handleSaveUnit}>
							Save
						</Button>
					</>
				) : (
					<Button onClick={() => setCanEdit(true)}>Edit</Button>
				)}
			</div>
			<section className="column gap1">
				<div className="formGrid">
					<Input>
						<label htmlFor="beds">Bedrooms</label>
						<input
							disabled={!canEdit}
							id="beds"
							value={unit.beds}
							onChange={(e) =>
								setUnit({
									...unit,
									beds: e.target.value,
								})
							}
						/>
					</Input>
					<Input>
						<label htmlFor="baths">Bathrooms</label>
						<input
							disabled={!canEdit}
							id="baths"
							value={unit.baths}
							onChange={(e) =>
								setUnit({
									...unit,
									baths: e.target.value,
								})
							}
						/>
					</Input>
					<Input>
						<label htmlFor="rent">Rent</label>
						<input
							disabled={!canEdit}
							id="rent"
							value={unit.rent}
							onChange={(e) =>
								setUnit({
									...unit,
									rent: e.target.value,
								})
							}
						/>
					</Input>
				</div>
			</section>
		</Card>
	);
};

export default SingleFamilyUnit;
