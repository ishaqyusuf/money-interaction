import { getDashboards } from "@/business/dashboard/get-dashboards";
import { redirect } from "next/navigation";
import NoFormPage from "./components/no-form";
import NoDashboardPage from "./components/no-dashboard";
import DashboardTabs from "./components/dashboard-tabs";

export default async function DashboardLayout({
  searchParams,
  children,
  params,
}) {
  return <div>{children}</div>;
}
