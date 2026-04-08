"use client";

import React from "react";
import { SidebarLayout, SideBar, Button } from "../dandy";

export function SidebarOverlayDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative w-full min-h-64 overflow-hidden rounded-lg border">
      <SidebarLayout
        open={open}
        onOpenChange={setOpen}
        mode="overlay"
        layout="inner"
        width="64"
      >
        <SidebarLayout.Sidebar>
          <div className="p-4 space-y-2">
            <span className="text-sm font-semibold block">Navigation</span>
            <span className="text-xs text-muted-foreground block">Dashboard</span>
            <span className="text-xs text-muted-foreground block">Settings</span>
            <span className="text-xs text-muted-foreground block">Profile</span>
          </div>
        </SidebarLayout.Sidebar>
        <SidebarLayout.Content >
          <div className="p-4 min-h-64" >
            <Button size="sm" onClick={() => setOpen(true)}>Toggle Sidebar</Button>
            <span className="text-sm text-muted-foreground mt-4 block">Main content area. The sidebar overlays this content.</span>
          </div>
        </SidebarLayout.Content>
      </SidebarLayout>
    </div>
  );
}

export function SidebarPushDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative w-full min-h-64 overflow-hidden rounded-lg border">
      <SidebarLayout
        open={open}
        onOpenChange={setOpen}
        mode="push"
        layout="inner"
        width="64"
      >
        <SidebarLayout.Sidebar>
          <div className="p-4 space-y-2">
            <span className="text-sm font-semibold block">Menu</span>
            <span className="text-xs text-muted-foreground block">Home</span>
            <span className="text-xs text-muted-foreground block">Reports</span>
          </div>
        </SidebarLayout.Sidebar>
        <SidebarLayout.Content>
          <div className="p-4 min-h-64">
            <Button size="sm" onClick={() => setOpen(!open)}>Toggle Push</Button>
            <span className="text-sm text-muted-foreground mt-4 block">Content shifts when the sidebar opens.</span>
          </div>
        </SidebarLayout.Content>
      </SidebarLayout>
    </div>
  );
}

export function SidebarRightDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative w-full min-h-64 overflow-hidden rounded-lg border">
      <SidebarLayout
        open={open}
        onOpenChange={setOpen}
        placement="right"
        layout="inner"
        width="64"
      >
        <SidebarLayout.Sidebar>
          <div className="p-4">
            <span className="text-sm font-semibold block">Details Panel</span>
            <span className="text-xs text-muted-foreground mt-2 block">Additional info here.</span>
          </div>
        </SidebarLayout.Sidebar>
        <SidebarLayout.Content>
          <div className="p-4 min-h-64">
            <Button size="sm" onClick={() => setOpen(!open)}>Right Sidebar</Button>
          </div>
        </SidebarLayout.Content>
      </SidebarLayout>
    </div>
  );
}

export function StandaloneSideBarDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative w-full h-48 overflow-hidden rounded-lg border">
      <SideBar open={open} onOpenChange={setOpen} layout="inner" width="64">
        <div className="p-4">
          <span className="text-sm font-semibold block">Standalone Sidebar</span>
          <span className="text-xs text-muted-foreground mt-2 block">This renders independently.</span>
        </div>
      </SideBar>
      <div className="p-4">
        <Button size="sm" onClick={() => setOpen(true)}>Open SideBar</Button>
      </div>
    </div>
  );
}
