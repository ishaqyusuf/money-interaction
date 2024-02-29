import TransactionsTab from "./_components/tabs";

export default function Layout({ children, params, searchParams }) {
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
