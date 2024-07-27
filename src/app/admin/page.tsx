import DashboardLayout from "./AdminLayout";

const Dashboard = () => {
    return (
        <DashboardLayout>
      <h1 className="text-3xl font-bold text-neutral-primary-text">Welcome to my dashboard!</h1>
      <p className="mt-2 text-neutral-secondary-text">
        This is an example dashboard using Tailwind CSS with enhanced styling.
      </p>
    </DashboardLayout>
    );
}

export default Dashboard;