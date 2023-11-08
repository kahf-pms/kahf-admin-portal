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
				<p className="bold">{property.name}</p>
				<p className="sm">{property.address.street}</p>
				<p className="sm">{`${property.address.city}, ${property.address.state} ${property.address.zipcode}`}</p>
			</div>
		</StyledPropertyCard>
	);
};

export default PropertyCard;
