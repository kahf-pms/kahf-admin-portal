import { Route, Routes } from "react-router-dom";
import Layout from "./features/layout/Layout";
import ErrorPage from "./pages/error/ErrorPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import PropertiesPage from "./pages/properties/PropertiesPage";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<DashboardPage />} />
				<Route path="properties" element={<PropertiesPage />} />
			</Route>

			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};

export default App;
