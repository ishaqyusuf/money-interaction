"use client";

import dashboardData from "@/business/dashboard/get-dashboard-data";
import { Icons } from "@/components/common/icons";
import { useModal } from "@/components/templates/modal/provider";
import { cn } from "@/lib/utils";
import { ServerResponse } from "@/type";
import { useState } from "react";
import ComponentTabModal from "../../../_modals/component-tab-modal";
import { DashboardData } from "@/business/type";

interface Props {
  data: DashboardData;
}
export default function DashboardCards({ data }: Props) {
  const cards = data.components.filter((d) => d.type == "Card");
  const spaces = Array(4 - cards.length).fill(null);
  return (
    <div className="grid-cols-2 grid sm:grid-cols-4 gap-2 sm:gap-4 container">
      {spaces.map((s, id) => (
        <CardComponent data={data} key={id} />
      ))}
    </div>
  );
}
interface CardComponentProps {
  data: DashboardData;
}
function CardComponent({ data: _ }: CardComponentProps) {
  const [data, setData] = useState(null);
  const modal = useModal();
  function addCard() {
    modal.openModal(<ComponentTabModal data={_} type="Card" />);
  }
  return (
    <div className="border p-2 sm:p-4 rounded-lg shadow">
      {!data && (
        <div
          className={cn(
            "flex flex-col items-center justify-center h-24",
            !data && "cursor-pointer"
          )}
          onClick={addCard}
        >
          <Icons.plus className="text-slate-400" />
        </div>
      )}
    </div>
  );
}
