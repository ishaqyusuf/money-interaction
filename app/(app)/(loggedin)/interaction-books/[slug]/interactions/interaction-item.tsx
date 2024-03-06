"use client";

import { GetInteractions } from "@/business/type";
import { transformDisplay } from "../../utils/transform-display";
import Tiptap from "@/components/common/tip-tap";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/use-day";
import Btn from "@/components/common/btn";
import { Icons } from "@/components/common/icons";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ConfirmBtn from "@/components/common/confirm-btn";
import { deleteInteractionBac } from "@/business/interactions/delete-interaction";
import { toast } from "sonner";
import { _revalidatePath } from "@/business/utils/revalidate-path";

interface Props {
  item: GetInteractions["items"][0];
}
export function InteractionItem({ item }: Props) {
  const layouts = item.bookForm.formSchema.displayLayouts.map((l) => {
    l.text = transformDisplay(l.text as any, item.fieldValues);

    return l;
  });
  const [hover, setHover] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  async function deleteItem() {
    const resp = await deleteInteractionBac(item.id);
    if (resp.msg) {
      toast.success(resp.msg);
      await _revalidatePath("interactions");
    }
  }
  return (
    <div
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
      className="border-b p-2 py-4 hover:bg-slate-50"
    >
      <div className="flex justify-between">
        <div className="">
          <div className="flex mb-2 space-x-2 items-start">
            <Badge variant={"outline"} className="text-purple-900">
              {item.bookForm.formSchema.title}
            </Badge>
            {item.fieldValues
              .filter((fv) => fv.field.primaryField)
              .map((f) => (
                <Badge variant={"outline"} key={f.id}>
                  {f.value}
                </Badge>
              ))}
          </div>
          {layouts.map((v) => (
            <div className="flex flex-col" key={v.id}>
              <Tiptap value={v.text} readOnly />
            </div>
          ))}
        </div>

        <div className="gap-2 flex flex-col">
          <div className="text-sm text-slate-500">
            {formatDate(item.createdAt)}
          </div>
          <div className="flex justify-end gap-2">
            <ConfirmBtn
              onClick={deleteItem}
              onMouseEnter={(e) => setBtnHover(true)}
              onMouseLeave={(e) => setBtnHover(false)}
              size={"icon"}
              variant={hover ? (btnHover ? "destructive" : "outline") : "ghost"}
              className={cn(!hover && "text-slate-500")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
