"use client";

import { SnackbarProvider, useSnackbar, Button } from "../dandy";

function SnackbarDemoButton({
  label,
  variant,
}: {
  label?: string;
  variant?:  any
}) {
  const { showSnackbarMsg } = useSnackbar();
  return (
    <Button
      variant={
        variant 
      }
      onClick={() =>
        showSnackbarMsg(label || "Notification message", { variant })
      }
    >
      {label || "Show Notification"}
    </Button>
  );
}

export function SnackbarBasicDemo() {
  return (
    <SnackbarProvider>
      <SnackbarDemoButton label="Show Default" variant="default" />
    </SnackbarProvider>
  );
}

export function SnackbarVariantsDemo() {
  return (
    <SnackbarProvider>
      <SnackbarDemoButton label="Default" variant="default" />
      <SnackbarDemoButton label="Success" variant="success" />
      <SnackbarDemoButton label="Warning" variant="warning" />
      <SnackbarDemoButton label="Error" variant="error" />
      <SnackbarDemoButton label="Info" variant="info" />
    </SnackbarProvider>
  );
}
