"use client";
import { FileInput } from "dandy-ui";

export function FileInputChange() {
  return (
    <FileInput
      onFilesChange={(files) => {
        console.log("Selected files:", files);
      }}
      placeholder="Upload your file"
    />
  );
}
