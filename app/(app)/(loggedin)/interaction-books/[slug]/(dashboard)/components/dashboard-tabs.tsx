"use client";

import { getDashboards } from "@/business/dashboard/get-dashboards";
import { ServerResponse } from "@/type";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  db: ServerResponse<typeof getDashboards>;
}
type DashboardTabPermission = NonNullable<
  Props["db"]["bookAccess"]
>["dashboardTabPermissions"][0];
export default function DashboardTabs({ db }: Props) {
  const params = useParams();
  const [currentTab, setCurrentTab] = useState<DashboardTabPermission>();
  useEffect(() => {
    const tab = db?.bookAccess?.dashboardTabPermissions?.find(
      (p) => p.dashboardTab.slug == params.tab
    );
    setCurrentTab(tab);
  }, [params]);
  return (
    <div className="flex m-4 container">
      <div>
        <p className="font-bold capitalize text-3xl">
          {/* {currentTab?.dashboardTab?.title} */}
          Dashboard
        </p>
      </div>
    </div>
  );
}
