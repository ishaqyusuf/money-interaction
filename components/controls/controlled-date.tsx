import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input, InputProps } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DateFormats, formatDate } from "@/lib/use-day";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  ControllerProps,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { Icons } from "../common/icons";

interface Props<T> {
  // @ts-ignore
  placeholder?: string;
  label?: string;
  className?: string;
  format?: DateFormats;
}
export default function ControlledDate<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TOptionType = any
>({
  label,
  placeholder,
  format = "YYYY-MM-DD",
  className,
  ...props
}: Partial<ControllerProps<TFieldValues, TName>> & Props<TOptionType>) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <FormField
        {...(props as any)}
        render={({ field }) => (
          <FormItem className={cn(className)}>
            {label && <FormLabel className="block">{label}</FormLabel>}
            <FormControl>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px]s spl-3 w-full text-left font-normal",
                        !field.value && "text-muted-foreground",
                        className
                      )}
                    >
                      {field.value ? (
                        formatDate(field.value, format)
                      ) : (
                        <span>{placeholder}</span>
                      )}
                      <Icons.calendar className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(e) => {
                      field.onChange(e);
                      setOpen(false);
                    }}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
