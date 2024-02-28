import { getInteractionAction } from "./_actions/crud";
import { BooksGrid } from "./components/books-grid";
import { BooksHeader } from "./components/books-header";
import BreadcrumbItem from "../components/header/breadcrumb-item";
import Shell from "../components/shell";
import BreadCrumbServer from "./components/bread-crumb-server";

export default async function InteractionBooksPage({ searchParams }) {
  const query = searchParams;
  const promise = getInteractionAction(query);
  return (
    <Shell>
      <BreadCrumbServer />
      <div className="grid gap-8 items-start">
        <BooksHeader />
        <BooksGrid promise={promise} />
      </div>
    </Shell>
  );
}
