import { _getInteractionForms } from "@/business/interaction-forms/get-interaction-forms";
import PageClient from "./page-client";
import Shell from "../../../components/shell";
import BreadCrumbServer from "../../../components/header/bread-crumb-server";

export default async function InteractionsDashboard({ searchParams, params }) {
  const forms = _getInteractionForms(params.slug);
  return (
    <Shell>
      <BreadCrumbServer bookSlug={params.slug} />

      <PageClient promise={forms} />
    </Shell>
  );
}
