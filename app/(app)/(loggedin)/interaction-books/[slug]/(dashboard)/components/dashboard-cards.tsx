"use client";

import dashboardData from "@/business/dashboard/get-dashboard-data";
import { Icons } from "@/components/common/icons";
import { useModal } from "@/components/templates/modal/provider";
import { cn } from "@/lib/utils";
import { ServerResponse } from "@/type";
import { useState } from "react";
import ComponentTabModal from "../../../_modals/component-tab-modal";
import { DashboardData } from "@/business/type";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  data: DashboardData;
}
export default function DashboardCards({ data }: Props) {
  const cards = data.cardComponents;
  const spaces = Array(4 - cards.length).fill(null);
  return (
    <div className="grid-cols-2 grid sm:grid-cols-4 gap-2 sm:gap-4 container">
      {cards.map((card, id) => (
        <CardComponent card={card} key={id} />
      ))}
      {spaces.map((s, id) => (
        <EmptyCardComponent data={data} key={id} />
      ))}
    </div>
  );
}

interface CardProps {
  card: Props["data"]["cardComponents"][number];
}
function CardComponent({ card }: CardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {card.component.title}
        </CardTitle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-end">
          <div className="text-2xl font-bold ">
            {/* $45,231.89 */}
            {card.value}
          </div>
          <div className="text-muted-foreground text-sm">
            {card.component.subTitle}
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          {/* +20.1% from last month */}
          {card.comment}
        </p>
      </CardContent>
    </Card>
  );
}
interface EmptyCardComponentProps {
  data: DashboardData;
}
function EmptyCardComponent({ data: _ }: EmptyCardComponentProps) {
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
