"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TransactionsTab() {
  return (
    <div>
      <Tabs>
        <TabsList>
          <TabsTrigger value="interactions">Interactions</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
