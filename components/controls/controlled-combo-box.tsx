import {
    ControllerProps,
    FieldPath,
    FieldValues,
    useFormContext,
} from "react-hook-form";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useMemo } from "react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";

interface Props<T> {
    className?: string;
    suffix?: string;
    label?;
    placeholder?;
    options?: T[];
    SelectItem?({ option }: { option: T });
    Item?({ option }: { option: T });
    valueKey?: keyof T;
    titleKey?: keyof T;
    onSelect?(selection: T);
}
export default function ControlledPlaceInput<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TOptionType = any
>({
    label,
    placeholder,
    className,
    onSelect,
    suffix,
    options,
    ...props
}: Partial<ControllerProps<TFieldValues, TName>> & Props<TOptionType>) {
    return (
        <FormField
            {...(props as any)}
            render={({ field }) => (
                <FormItem className={cn(className)}>
                    {label && <FormLabel>{label}</FormLabel>}
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                        "w-full justify-between",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    {/* {field.value
                    ? data.find(
                        (sel) => sel. === field.value
                      )?.label
                    : "Select language"} */}
                                    <span className="">
                                        {field.value || placeholder}
                                    </span>
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                            <Command>
                                <CommandInput
                                    onValueChange={(e) => {
                                        // console.log(e);
                                        // setValue(e);
                                    }}
                                    placeholder={placeholder}
                                    className="h-9"
                                />
                                <CommandEmpty>No framework found.</CommandEmpty>
                                {/* <CommandGroup>
                                    {options?.map((language, index) => (
                                        <CommandItem
                                            value={language.description}
                                            key={index}
                                            onSelect={() => {
                                                field.onChange(
                                                    language.description
                                                );
                                                onSelect && onSelect(language);
                                                // data.setValue("language", language.value);
                                            }}
                                        >
                                            {language.description}
                                            <CheckIcon
                                                className={cn(
                                                    "ml-auto h-4 w-4",
                                                    language.description ===
                                                        field.value
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                </CommandGroup> */}
                            </Command>
                        </PopoverContent>
                    </Popover>
                </FormItem>
            )}
        />
    );
}
