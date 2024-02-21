import TransactionsTab from "./_components/tabs";

export default function Layout({ children }) {
  return (
    <div className="">
      <div className="">
        <TransactionsTab />
      </div>
      {children}
    </div>
  );
}
