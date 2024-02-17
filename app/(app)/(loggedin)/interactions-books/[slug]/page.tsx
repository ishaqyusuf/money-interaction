import { _getInteractionForms } from "@/business/interaction-forms/get-interaction-forms";
import PageClient from "./page-client";

export default async function InteractionsDashboard({ searchParams, params }) {
  const forms = _getInteractionForms(params.slug);
  return (
    <div>
      <p>{params.slug}</p>
      <PageClient promise={forms} />
    </div>
  );
}
