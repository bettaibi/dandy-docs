"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectProps,
  SelectTrigger,
  SelectValue,
} from "dandy-ui";
import { useState } from "react";

export function SelectValueChange({
  value: defaultValue,
  ...props
}: SelectProps) {
  const [value, setValue] = useState(defaultValue);
  return (
    <Select value="apple" onValueChange={(value) => console.log(value)}>
      <SelectTrigger className="w-64">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  );
}
