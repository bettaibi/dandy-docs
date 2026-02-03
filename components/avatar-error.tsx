"use client";
import { Avatar } from "dandy-ui";

export function AvatarError() {
  return (
    <Avatar
      src="https://invalid-url.example.com/image.jpg"
      placeholder="JD"
      alt="John Doe"
      onError={() => console.log("Image failed to load")}
    />
  );
}
