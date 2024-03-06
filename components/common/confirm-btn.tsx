"use client";

import { Button, ButtonProps } from "../ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Info, Trash } from "lucide-react";
import { Icons } from "./icons";

interface Props extends ButtonProps {
  Icon?;
  trash?: Boolean;
}

export default function ConfirmBtn({
  className,
  Icon,
  size,
  onClick,
  trash,
  children,
  ...props
}: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [confirm, setConfirm] = useState(false);
  async function _onClick(e) {
    e.preventDefault();
    if (!confirm) {
      setConfirm(true);
      setTimeout(() => {
        setConfirm(false);
      }, 3000);
      return;
    }
    setConfirm(false);
    startTransition(async () => {
      onClick && (await onClick(e));
    });
  }
  const Icone: any = confirm
    ? Info
    : isPending
    ? Icons.spinner
    : size == "icon"
    ? Icons.delete
    : null;
  return (
    <Button
      size={size}
      disabled={isPending}
      onClick={_onClick}
      className={cn(
        className,
        size == "icon" && "h-8 w-8 p-0",
        trash && "text-red-500 hover:text-red-600"
      )}
      {...props}
    >
      {Icone && (
        <Icone
          className={`${isPending ? "h-3.5 w-3.5 animate-spin" : "h-4 w-4"}`}
        />
      )}
      <div className="">{children}</div>
    </Button>
  );
}
