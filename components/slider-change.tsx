"use client";

import { Slider, SliderProps } from "dandy-ui";
import { useState } from "react";

export function SliderChange({
  label,
  value,
  onChange,
  showValue,
  ...props
}: SliderProps) {
  const [sliderValue, setSliderValue] = useState(value);

  const handleChange = (value: number) => {
    setSliderValue(value);
  };

  return (
    <Slider
      label={label}
      value={sliderValue}
      onChange={handleChange}
      showValue={showValue}
      {...props}
    />
  );
}
