import { prisma } from "@/business/db";
import Shell from "../../../components/shell";
import { getDashboards } from "@/business/dashboard/get-dashboards";
import { redirect } from "next/navigation";
import NoFormPage from "./components/no-form";
import NoDashboardPage from "./components/no-dashboard";

export default async function InteractionBooksPage({ params, searchParams }) {
  const db = await getDashboards(params.slug);
  //   console.log(db);

  if (!db?.bookAccess?.viewDashboards)
    redirect(`/interaction-books/${params.slug}/interactions`);
  const slug = db.bookAccess.dashboardTabPermissions?.[0]?.dashboardTab?.slug;
  if (slug) redirect(`/interaction-books/${params.slug}/${slug}`);
  if (!db.hasFormFields) return <NoFormPage />;

  return <NoDashboardPage db={db} />;
}
