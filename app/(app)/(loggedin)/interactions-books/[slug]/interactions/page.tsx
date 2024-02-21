import { _getInteractionForms } from "@/business/interaction-forms/get-interaction-forms";
import { getInteractions } from "../../_actions/get-interactions";
import InteractionList from "./list";
import InteractionHeader from "./header";

export default async function InteractionsPage({ params }) {
  const sh = getInteractions(params.slug);

  const forms = _getInteractionForms(params.slug);
  return (
    <div>
      <InteractionHeader promise={forms} />
      <InteractionList promise={sh} />
    </div>
  );
}
