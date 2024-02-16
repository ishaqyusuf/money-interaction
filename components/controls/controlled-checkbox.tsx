import {
    ControllerProps,
    FieldPath,
    FieldValues,
    useFormContext,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

interface Props<T> {
    label?: string;
    description?: string;
    className?: string;
    placeholder?: string;
}
export default function ControlledCheckbox<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TOptionType = any
>({
    label,
    description,
    className,
    placeholder,
    ...props
}: Partial<ControllerProps<TFieldValues, TName>> & Props<TOptionType>) {
    return (
        <FormField
            {...(props as any)}
            render={({ field }) => (
                <FormItem
                    className={cn(
                        "flex flex-row items-start space-x-3 space-y-0 rounded-md",
                        className
                    )}
                >
                    <FormControl className="mt-0.5">
                        <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                        {label && <FormLabel>{label}</FormLabel>}
                        {description && (
                            <FormDescription>{description}</FormDescription>
                        )}
                    </div>
                </FormItem>
            )}
        />
    );
}
