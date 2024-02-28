import Header from "./components/header";
import { SideMenu } from "./components/side-menu";

export default function AppLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="">
        <div className="">{children}</div>
      </div>
    </div>
  );
}
