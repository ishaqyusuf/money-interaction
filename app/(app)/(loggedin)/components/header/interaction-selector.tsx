"use client";

import { IconType, Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { useBreadCrumbProvider } from "@/components/common/breadcurmb/provider";
import React, { useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function InteractionSelector() {
  const data = useBreadCrumbProvider();
  const [hoverItem, setHoverItem] = React.useState<any>(data.currentSlug);

  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setHoverItem(data.currentSlug);
  }, [open]);
  return (
    <DropdownMenu onOpenChange={setOpen} open={open}>
      <DropdownMenuTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <Icons.upDownChevron className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn("flex", !hoverItem && "border-transparent shadow-none")}
      >
        <div
          className={cn(
            "border-r px-2 py-4 min-w-[250px]",
            !hoverItem && "shadow-xl rounded-lg border"
          )}
        >
          <div className="grid gap-2">
            <div className="px-4">
              <Label>Interactions</Label>
            </div>
            <div className="flex flex-col">
              {data.books.map((item) => (
                <div className="flex" key={item.slug}>
                  {/* <ListBtn
                    title={item.title}
                    checked={item.isCurrent}
                    href={`/interaction-books/${item.slug}`}
                    onMouseEnter={(e) => setHoverItem(item.slug)}
                    onMouseLeave={(e) => setHoverItem(data.currentSlug)}
                    icon="plus"
                    variant={hoverItem === item.slug ? "secondary" : "ghost"}
                  /> */}
                  <Button
                    asChild
                    onMouseEnter={(e) => setHoverItem(item.slug)}
                    onMouseLeave={(e) => setHoverItem(data.currentSlug)}
                    className="justify-start  flex flex-1 space-x-2 px-2"
                    variant={hoverItem === item.slug ? "secondary" : "ghost"}
                    size={"lg"}
                  >
                    <Link href={`/interaction-books/${item.slug}`}>
                      <Icons.plus className="w-4 h-4" />
                      <p>{item.title}</p>
                      <div className="flex-1"></div>
                      <div className="">
                        {item.isCurrent && (
                          <Icons.checkMark className="w-4 h-4" />
                        )}
                      </div>
                    </Link>
                  </Button>
                </div>
              ))}
              <Button
                onMouseEnter={(e) => setHoverItem(null)}
                variant={"outline"}
                size={"lg"}
                className="flex justify-start space-x-4 px-2"
              >
                <Icons.plus className="w-4 h-4" />
                <p>Create Interaction</p>
              </Button>
            </div>
          </div>
        </div>
        <InteractionForms slug={hoverItem} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
function InteractionForms({ slug }) {
  const data = useBreadCrumbProvider();
  let interaction = data.booksBySlug[slug];
  const [hoverItem, setHoverItem] = React.useState<any>(null);
  if (!interaction) return <div className="min-w-[250px] px-2 py-4 "></div>;
  return (
    <div className="min-w-[250px] px-2 py-4 ">
      <div className="grid gap-2">
        <div className="px-4">
          <Label>Forms</Label>
        </div>
        <div className="flex flex-col">
          {interaction.forms.list.map((item) => (
            <div className="flex" key={item.formSchemaId}>
              {/* <ListBtn
                title={item.title}
                checked={item.isCurrent}
                href={`/interaction-books/${item.formSchemaId}`}
                onMouseEnter={(e) => setHoverItem(item.formSchemaId)}
                onMouseLeave={(e) => setHoverItem(null)}
                icon="plus"
                variant={
                  hoverItem === item.formSchemaId || item.isCurrent
                    ? "secondary"
                    : "ghost"
                }
              /> */}
              <Button
                asChild
                onMouseEnter={(e) => setHoverItem(item.formSchemaId)}
                onMouseLeave={(e) => setHoverItem(null)}
                className="justify-start  flex flex-1 space-x-4 px-2"
                variant={
                  hoverItem === item.formSchemaId ? "secondary" : "ghost"
                }
                size={"lg"}
              >
                <Link
                  href={`/interaction-books/${interaction?.slug}/interactions?formSchemaId=${item.formSchemaId}`}
                >
                  <Icons.plus className="w-4 h-4" />
                  <p>{item.title}</p>
                  <div className="flex-1"></div>
                  <div className="">
                    {item.isCurrent && <Icons.checkMark className="w-4 h-4" />}
                  </div>
                </Link>
              </Button>
            </div>
          ))}
          <Button
            onMouseEnter={(e) => setHoverItem(null)}
            variant={"outline"}
            size={"lg"}
            className="flex px-2 justify-start items-center space-x-4"
          >
            {/* <div className="flex-1 flex items-center space-x-4 justify-start"> */}
            <Icons.plus className="w-4 h-4" />
            <p>Create Form</p>
            {/* </div> */}
          </Button>
        </div>
      </div>
    </div>
  );
}

interface ListBtnProps {
  title: string;
  onMouseEnter?;
  onMouseLeave?;
  onClick?;
  href?;
  variant?: "ghost" | "secondary" | "outline";
  size?: "sm" | "lg" | "icon";
  icon?: IconType;
  checked?: boolean;
}
function ListBtn({ href, title, checked, icon, ...props }: ListBtnProps) {
  if (!props.size) props.size = "lg";
  if (!props.variant) props.variant = "ghost";

  function Shell({ children }) {
    return href ? <Link href={href}>{children}</Link> : <>{children}</>;
  }
  const Ico = Icons[icon as any];
  return (
    <Button
      asChild={href != null}
      {...props}
      className="justify-start  flex flex-1 space-x-2 px-2"
    >
      <Shell>
        {Ico && <Ico className="w-4 h-4" />}
        <p>{title}</p>
        <div className="flex-1"></div>
        <div className="">
          {checked && <Icons.checkMark className="w-4 h-4" />}
        </div>
      </Shell>
    </Button>
  );
}
