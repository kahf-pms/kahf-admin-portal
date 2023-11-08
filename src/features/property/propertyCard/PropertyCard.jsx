import { useNavigate } from "react-router-dom";
import { StyledPropertyCard } from "./PropertyCard.styled";

const PropertyCard = ({ property }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/properties/${property._id}`);
	};

	return (
		<StyledPropertyCard onClick={handleClick}>
			<div>
				<h4>{property.name}</h4>
				<p>{property.address.street}</p>
				<p>{`${property.address.city}, ${property.address.state} ${property.address.zipcode}`}</p>
			</div>
		</StyledPropertyCard>
	);
};

export default PropertyCard;
