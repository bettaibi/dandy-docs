"use client";

import { Rating, RatingProps } from "dandy-ui";
import { useState } from "react";

export function RatingChange({ value: defaultValue, ...props }: RatingProps) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (value: number) => {
    setValue(value);
  };

  return (
    <Rating
      onValueChange={handleChange}
      value={value}
      showValue
      interactive
      {...props}
    />
  );
}
