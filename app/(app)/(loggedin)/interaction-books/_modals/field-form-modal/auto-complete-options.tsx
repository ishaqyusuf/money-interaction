"use client";

import { Label } from "@/components/ui/label";
import { useFieldFormForm } from ".";
import { useEffect, useState } from "react";
import { getAutoFields } from "../../_actions/get-auto-fields";
import { ServerResponse } from "@/type";
import ControlledSelect from "@/components/controls/controlled-select";

export default function AutoCompleteOptions({ inputType, bookId }) {
  const form = useFieldFormForm();
  const isAutoComplete = () => inputType == "auto-complete";

  const [inputOptions, setInputOptions] = useState<
    ServerResponse<typeof getAutoFields>
  >([]);
  useEffect(() => {
    getAutoFields(bookId).then((data) => {
      setInputOptions(data);
    });
  }, [inputType]);

  if (!isAutoComplete()) return <></>;
  return (
    <div className="col-span-2 grid gap-4 grid-cols-2">
      {/* <div className="col-span-2">
        <Label>Auto Complete Options</Label>
      </div> */}
      <ControlledSelect
        options={inputOptions}
        control={form.control}
        name="autoCompleteFromFieldId"
        label="Auto Complete Field"
      />
    </div>
  );
}
