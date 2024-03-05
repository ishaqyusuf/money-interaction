import { ServerResponse } from "@/type";
import { _getInteractionBookEditForm } from "./interaction-books/get-interaction-book-edit-form";
import { _getInteractionFormEditForm } from "./interaction-forms/get-interaction-form-edit-form";
import { _getInteractions } from "./interactions/get-interactions";
import { _getBookFormSchema } from "./interaction-forms/get-schema";
import { InteractionFormValue } from "@prisma/client";
import { transformInteractions } from "./utils/transform-interaction";
import { _getInteractionBooks } from "./interaction-books/get-interaction-books";
import { _getInteractionForms } from "./interaction-forms/get-interaction-forms";
import { _getInteractionEntryForm } from "./interaction-entries/get-entry-form";
import { _saveEntryForm } from "./interaction-entries/save-entry-form";
import dashboardData from "./dashboard/dashboard-data";

export type InteractionBookEditForm = ServerResponse<
  typeof _getInteractionBookEditForm
>;
export type InteractionFormEditForm = ServerResponse<
  typeof _getInteractionFormEditForm
>;
export type GetInteractionForms = ServerResponse<typeof _getInteractionForms>;
export type GetInteractionEntryForm = ServerResponse<
  typeof _getInteractionEntryForm
>;
export type SaveEntryForm = ServerResponse<typeof _saveEntryForm>;

export type FormFieldDataTypes =
  | "default"
  | "text"
  | "number"
  | "auto-complete"
  | "date"
  | "checkbox";
export type DashboardComponentType = "card" | "chart" | "top-5";
export type FormType = "default" | "analytic";
export type IteractionListItem = NonNullable<
  ReturnType<typeof transformInteractions>
>[0];
export type GetInteractions = ServerResponse<typeof _getInteractions>;
export type GetInteractionBooks = ServerResponse<typeof _getInteractionBooks>;
export type GetBookFormSchema = ServerResponse<typeof _getBookFormSchema>;
export type FieldValueById = { [id in number]: InteractionFormValue };
export interface BaseQuery {}
export interface GetInteractionsQuery extends BaseQuery {}

export type DashboardData = ServerResponse<typeof dashboardData>;
