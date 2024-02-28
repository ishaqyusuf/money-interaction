import { Header } from "./components/header";
import { SideMenu } from "./components/side-menu";

export default function AppLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="grid gap-12 flex-1 lg:grid-cols-[200px_1fr] min-h-screen">
        <SideMenu>{/*  */}</SideMenu>
        <div className="">{children}</div>
      </div>
    </div>
  );
}
