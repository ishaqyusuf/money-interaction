"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function TransactionsTab({ slug }) {
  return (
    <div>
      <Tabs onChange={(e) => {}}>
        <TabsList>
          <TabsTrigger asChild value="interactions">
            <Link href={`/interaction-books/${slug}/interactions`}>
              Interactions
            </Link>
          </TabsTrigger>
          <TabsTrigger asChild value="forms">
            <Link href={`/interaction-books/${slug}`}>Forms</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
