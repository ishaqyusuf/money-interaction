"use client";
import { NavItem, NavTab } from "@/components/common/nav-tab";
import { usePathname } from "next/navigation";

function composeTab(baseUrl, pathName) {
  return {
    baseUrl,
    tab(title, path) {
      const href = `${baseUrl}${path ? "/" : ""}${path}`;
      return { title, href, active: pathName == href };
    },
  };
}
export default function InteractionsTab({ slug }) {
  const baseUrl = `/interaction-books/${slug}`;
  const pathName = usePathname();
  const tabs = composeTab(baseUrl, pathName);
  const navs = [
    tabs.tab("Dashboard", ""),
    tabs.tab("Interactions", "interactions"),
    tabs.tab("Forms", "forms"),
  ];
  return (
    <NavTab>
      {navs.map((props, index) => (
        <NavItem key={index} {...props}></NavItem>
      ))}
    </NavTab>
  );
}
