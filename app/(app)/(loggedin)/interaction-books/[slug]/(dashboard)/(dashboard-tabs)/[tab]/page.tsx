import DashboardCards from "@/app/(app)/(loggedin)/interaction-books/[slug]/(dashboard)/components/dashboard-cards";
import getDashboardData from "@/business/dashboard/get-dashboard-data";

export default async function DashboardTab({ searchParams, params }) {
  const { slug, tab } = params;

  const db = await getDashboardData(slug, tab);
  console.log(db.cardComponents);

  return (
    <div className="min-h-[70vh] flex flex-col bg-slate-50">
      <DashboardCards data={db} />
    </div>
  );
}
