import Breadcrumb from "@/components/common/breadcurmb/breadcrumb";
import BreadcrumbItem from "./breadcrumb-item";
import { getBreadcrumbHeaderAction } from "./_get-bread-crumb-header";
import { ServerResponse } from "@/type";

interface Props {
  bookSlug?: string;
  formSlug?: string;
}
export type BreadCrumHeader = ServerResponse<typeof getBreadcrumbHeaderAction>;
export default async function BreadCrumbServer({ bookSlug, formSlug }: Props) {
  const header = await getBreadcrumbHeaderAction(bookSlug, formSlug);
  return (
    <Breadcrumb value={header}>
      <BreadcrumbItem />
    </Breadcrumb>
  );
}
