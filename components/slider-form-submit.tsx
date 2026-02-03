"use client";

import { Button } from "dandy-ui";
import { SliderChange } from "./slider-change";

export function SliderFormSubmit() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Form submitted!");
      }}
    >
      <SliderChange
        name="rating"
        label="Rating"
        min={1}
        max={5}
        value={3}
        showValue
      />
      <Button type="submit" style={{ marginTop: "1rem" }}>
        Submit
      </Button>
    </form>
  );
}
