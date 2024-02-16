import { getInteractionAction } from "./_actions/crud";
import { BooksGrid } from "./components/books-grid";
import { BooksHeader } from "./components/books-header";

export default async function InteractionBooksPage({ searchParams }) {
  const query = searchParams;
  const promise = getInteractionAction(query);
  return (
    <div>
      <BooksHeader />
      <BooksGrid promise={promise} />
    </div>
  );
}
