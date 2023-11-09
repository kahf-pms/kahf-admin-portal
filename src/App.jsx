import { Route, Routes } from "react-router-dom";
import Layout from "./features/layout/Layout";
import ErrorPage from "./pages/error/ErrorPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import PropertiesPage from "./pages/properties/PropertiesPage";
import PropertyPage from "./pages/properties/PropertyPage";
import AddPropertyPage from "./pages/properties/AddPropertyPage";
import AddUnit from "./pages/properties/units/AddUnit";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<DashboardPage />} />

				<Route path="properties">
					<Route index element={<PropertiesPage />} />
					<Route path="add" element={<AddPropertyPage />} />
					<Route path=":propertyId">
						<Route index element={<PropertyPage />} />
						<Route path="units">
							<Route path="add" element={<AddUnit />} />
						</Route>
					</Route>
				</Route>
			</Route>

			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};

export default App;
