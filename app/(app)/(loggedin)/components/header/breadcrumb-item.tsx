"use client";

import { useContext } from "react";
import InteractionSelector from "./interaction-selector";
import { useBreadCrumbProvider } from "@/components/common/breadcurmb/provider";
import { Icons } from "@/components/common/icons";

export default function BreadcrumbItem({ title, icon }) {
  const data = useBreadCrumbProvider();

  return (
    <div className="flex space-x-4 items-center mx-2">
      <div className="flex text-gray-300">/</div>
      <span className="font-medium leading-none  text-base">{title}</span>
      <InteractionSelector />
    </div>
  );
}
