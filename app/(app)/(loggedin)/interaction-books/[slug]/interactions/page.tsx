import { _getInteractionForms } from "@/business/interaction-forms/get-interaction-forms";
import { getInteractions } from "../../_actions/get-interactions";
import InteractionList from "./list";
import InteractionHeader from "./header";
import BreadCrumbServer from "../../../components/header/bread-crumb-server";
import Shell from "../../../components/shell";

export default async function InteractionsPage({ params, searchParams }) {
  const sh = getInteractions(params.slug);
  const forms = _getInteractionForms(params.slug);

  const formSchemaId = Number(searchParams.formSchemaId) || undefined;

  return (
    <Shell>
      <BreadCrumbServer bookSlug={params.slug} formSchemaId={formSchemaId} />
      <InteractionHeader promise={forms} />
      <InteractionList promise={sh} />
    </Shell>
  );
}
