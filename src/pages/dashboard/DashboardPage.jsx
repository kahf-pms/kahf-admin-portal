import usePageName from "../../features/hooks/usePageName";

const DashboardPage = () => {
	usePageName("Admin Dashboard", false);

	return <h3>Dashboard</h3>;
};

export default DashboardPage;
