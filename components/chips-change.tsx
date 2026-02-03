"use client";

import { Chips, ChipsProps } from "dandy-ui";
import { useState } from "react";

export function ChipsChange({
  chips: defaultChips = [],
  inputValue: defaultValue,
  onInputChange,
  onAddChip,
  onRemoveChip,
  ...props
}: ChipsProps) {
  const [chips, setChips] = useState(defaultChips);
  const [inputValue, setInputValue] = useState(defaultValue);

  return (
    <Chips
      chips={chips}
      inputValue={inputValue}
      onInputChange={setInputValue}
      onAddChip={(chip) => setChips([...chips, chip])}
      onRemoveChip={(_, index) => setChips(chips.filter((_, i) => i !== index))}
      placeholder="Add tags..."
      {...props}
    />
  );
}
