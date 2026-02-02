"use client";

import { ReactNode } from "react";

export function ComponentPreview({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-2 flex-wrap p-4 border rounded-lg bg-card">
      {children}
    </div>
  );
}
