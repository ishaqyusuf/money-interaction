import Breadcrumb from "@/components/common/breadcurmb/breadcrumb";
import BreadcrumbItem from "./breadcrumb-item";
import { getBreadcrumbHeaderAction } from "./_get-bread-crumb-header";
import { ServerResponse } from "@/type";

interface Props {
  bookSlug?: string;
  formSchemaId?: number;
}
export type BreadCrumHeader = ServerResponse<typeof getBreadcrumbHeaderAction>;
export default async function BreadCrumbServer({
  bookSlug,
  formSchemaId,
}: Props) {
  const header = await getBreadcrumbHeaderAction(bookSlug, formSchemaId);

  return (
    <Breadcrumb value={header}>
      <BreadcrumbItem {...header.currentBook} />
      {header.currentBookForm && <BreadcrumbItem {...header.currentBookForm} />}
    </Breadcrumb>
  );
}
