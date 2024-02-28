import Breadcrumb from "@/components/common/breadcrumb";
import BreadcrumbItem from "../../components/header/breadcrumb-item";

interface Props {
  bookSlug?: string;
  formSlug?: string;
}
export default async function BreadCrumbServer({}: Props) {
  return (
    <Breadcrumb>
      <BreadcrumbItem />
    </Breadcrumb>
  );
}
