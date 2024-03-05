import DashboardCards from "@/app/(app)/(loggedin)/interaction-books/[slug]/(dashboard)/components/dashboard-cards";
import dashboardData from "@/business/dashboard/dashboard-data";

export default async function DashboardTab({ searchParams, params }) {
  const { slug, tab } = params;

  const db = await dashboardData(slug, tab);
  console.log(db);
  return (
    <div className="min-h-[70vh] flex flex-col bg-slate-50">
      <DashboardCards data={db} />
    </div>
  );
}
