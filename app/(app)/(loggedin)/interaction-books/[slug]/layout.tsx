import TransactionsTab from "./_components/tabs";

export default function Layout({ children, params }) {
  return (
    <div className="">
      <div className="px-8">
        <TransactionsTab slug={params.slug} />
      </div>
      {children}
    </div>
  );
}
