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
  const db = await getDashboards(params.slug);
  //   console.log(db);

  if (!db?.bookAccess?.viewDashboards)
    redirect(`/interaction-books/${params.slug}/interactions`);
  const slug = db.bookAccess.dashboardTabPermissions?.[0]?.dashboardTab?.slug;
  //   if (slug) redirect(`/interaction-books/${params.slug}/${slug}`);
  if (!db.hasFormFields) return <NoFormPage />;
  if (!db.bookAccess.dashboardTabPermissions.length)
    return <NoDashboardPage db={db} />;
  return <div>{children}</div>;
}
