"use client";

import {
  Select,
  SelectProps,
} from "dandy-ui";
import { useState } from "react";

export function SelectValueChange({
  value: defaultValue,
  ...props
}: SelectProps) {
  const [value, setValue] = useState(defaultValue);
  return (
    <Select value="apple" onValueChange={(value) => console.log(value)}  {...props}>
      <Select.Trigger className="w-64">
        <Select.Value placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
      </Select.Content>
    </Select>
  );
}
