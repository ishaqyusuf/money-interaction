import TransactionsTab from "./_components/tabs";

export default async function Layout({ children, params, searchParams }) {
  // const interactionBookTabs =
  return (
    <div className="">
      {/* <InteractionsTab {...params} {...searchParams} /> */}
      <div className="px-8">
        <TransactionsTab slug={params.slug} />
      </div>
      {children}
    </div>
  );
}
