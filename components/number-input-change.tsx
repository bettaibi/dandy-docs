"use client";
import { NumberInput, NumberInputProps } from "dandy-ui";
import { useState } from "react";

export function NumberInputChange({
  value: defaultValue,
  handleValueChange,
  ...props
}: NumberInputProps) {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (val: number) => {
    setValue(val);
  };

  return (
    <NumberInput
      variant="default"
      value={value}
      handleValueChange={handleChange}
      placeholder="Default variant"
      onChange={(e) => handleChange?.(Number(e.target.value))}
      {...props}
    />
  );
}
