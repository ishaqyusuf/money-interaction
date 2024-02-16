import { ServerReponse } from "@/type";
import { _interactionBookEditForm } from "./interaction-books/get-interaction-book-edit-form";
import { _getInteractionFormEditForm } from "./interaction-forms/get-interaction-form-edit-form";
import { _getInteractions } from "./interactions/get-interactions";
import { _getBookFormSchema } from "./interaction-forms/get-schema";
import { InteractionFormValue } from "@prisma/client";
import { transformInteractions } from "./utils/transform-interaction";
import { _getInteractionBooks } from "./interaction-books/get-interaction-books";

export type InteractionBookEditForm = ServerReponse<
  typeof _interactionBookEditForm
>;
export type InteractionFormEditForm = ServerReponse<
  typeof _getInteractionFormEditForm
>;
export type InteractionFormEditForm = ServerReponse<typeof _saveInteraction>;
export type IteractionListItem = NonNullable<
  ReturnType<typeof transformInteractions>
>[0];
export type GetInteractions = ServerReponse<typeof _getInteractions>;
export type GetInteractionBooks = ServerReponse<typeof _getInteractionBooks>;
export type GetBookFormSchema = ServerReponse<typeof _getBookFormSchema>;
export type FieldValueById = { [id in number]: InteractionFormValue };
export interface BaseQuery {}
export interface GetInteractionsQuery extends BaseQuery {}
