"use client";

import { getDashboards } from "@/business/dashboard/get-dashboards";
import { useModal } from "@/components/templates/modal/provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServerResponse } from "@/type";
import DashboardTabModal from "../../../_modals/dashboard-tab";

interface Props {
  db: ServerResponse<typeof getDashboards>;
}
export default function NoDashboardPage({ db }: Props) {
  const modal = useModal();
  return (
    <div className="min-h-[80vh] bg-slate-50 flex flex-col justify-center items-center">
      <div className="space-y-4 flex flex-col items-center">
        <p>
          Welcome, create your first dashboard for{" "}
          <Badge variant={"outline"}>{db?.bookAccess?.book?.name}</Badge>
        </p>
        <Button
          onClick={() => {
            modal.openModal(<DashboardTabModal />);
          }}
        >
          Create
        </Button>
      </div>
    </div>
  );
}
