import DashboardDrawer from "@/Component/Dashboard/DashboardDrawer/DashboardDrawer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
