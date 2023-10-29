import { Route, Routes } from "react-router-dom";
import Layout from "./features/layout/Layout";
import ErrorPage from "./pages/error/ErrorPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import PropertiesPage from "./pages/properties/PropertiesPage";
import PropertyPage from "./pages/properties/PropertyPage";
import AddPropertyPage from "./pages/properties/AddPropertyPage";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<DashboardPage />} />

				<Route path="properties">
					<Route index element={<PropertiesPage />} />
					<Route path="add" element={<AddPropertyPage />} />
					<Route path=":propertyId" element={<PropertyPage />} />
				</Route>
			</Route>

			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};

export default App;
