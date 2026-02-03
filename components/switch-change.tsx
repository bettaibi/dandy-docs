"use client";

import { Switch } from "dandy-ui";

export function SwitchChange() {
  return (
    <Switch onCheckedChange={(checked) => console.log("Checked:", checked)} />
  );
}
