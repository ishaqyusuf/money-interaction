import { Header } from "./components/header";
import { SideMenu } from "./components/side-menu";

export default function AppLayout({ children }) {
  return (
    <div className="lg:flex min-h-screen">
      <SideMenu>{/*  */}</SideMenu>
      <div className="lg:flex-1">
        <Header />
        {children}
      </div>
    </div>
  );
}
