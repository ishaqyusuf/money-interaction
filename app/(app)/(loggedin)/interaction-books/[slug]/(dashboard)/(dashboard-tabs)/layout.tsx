import { getDashboards } from "@/business/dashboard/get-dashboards";
import { redirect } from "next/navigation";
import DashboardTabs from "../components/dashboard-tabs";

export default async function DashboardLayout({
  searchParams,
  children,
  params,
}) {
  const db = await getDashboards(params.slug);
  //   console.log(db);

  if (!db?.bookAccess?.viewDashboards)
    redirect(`/interaction-books/${params.slug}/interactions`);

  if (!db.hasFormFields || !db.bookAccess.dashboardTabPermissions.length)
    return redirect(`/interaction-books/${params.slug}`);

  return (
    <div>
      <DashboardTabs db={db} />

      {children}
    </div>
  );
}
