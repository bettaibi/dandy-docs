"use client";

import { CircularProgress } from "dandy-ui";

export function CircularProgressCompleteFeedback() {
  return (
    <CircularProgress
      value={10}
      variant="success"
      onComplete={() => alert("Countdown complete!")}
    />
  );
}
