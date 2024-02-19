import {
  ControllerProps,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Props<T> {
  label?: string;
  placeholder?: string;
  className?: string;
  suffix?: string;
  type?: string;
  list?: boolean;
  // defaultValue?:boolean
}
export default function ControlledInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TOptionType = any
>({
  label,
  placeholder,
  className,
  suffix,
  type,
  list,
  ...props
}: Partial<ControllerProps<TFieldValues, TName>> & Props<TOptionType>) {
  return (
    <FormField
      {...(props as any)}
      render={({ field }) => (
        <FormItem className={cn(className)}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <div className={cn(suffix && "flex items-center space-x-1")}>
              {type == "textarea" ? (
                <Textarea
                  placeholder={placeholder}
                  {...(list
                    ? {
                        defaultValue: field.value,
                        onChange: field.onChange,
                      }
                    : field)}
                  // value={""}
                />
              ) : (
                <Input
                  type={type}
                  placeholder={placeholder}
                  // {...field}
                  // value={""}
                  {...(list
                    ? {
                        defaultValue: field.value,
                        //   onChange: field.onChange,
                      }
                    : field)}
                  // defaultValue={field.value}
                  onChange={(e) => {
                    if (type == "number")
                      field.onChange(Number(e.target.value));
                    else field.onChange(e);
                  }}
                />
              )}
              {suffix && (
                <Button type="button" variant={"outline"}>
                  {suffix}
                </Button>
              )}
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
