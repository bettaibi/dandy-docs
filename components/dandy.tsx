"use client";

import React from "react";
import type { DateRange } from "react-day-picker";
import {
  // Layout
  Container,
  Flex,
  Grid,
  GridItem,
  Paper,
  Section,
  ScrollShadow,
  Table,
  // Typography
  Text,
  Heading,
  Hint,
  Divider,
  Code,
  Kbd,
  // Core
  Button,
  IconButton,
  Input,
  NumberInput,
  TextArea,
  FileInput,
  CheckBox,
  Radio,
  Switch,
  Slider,
  Label,
  Chips,
  Rating,
  Badge,
  Avatar,
  AvatarGroup,
  Icon,
  AspectRatio,
  Select,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  // Feedbacks
  Alert,
  CircularProgress,
  ProgressBar,
  Spinner,
  Skeleton,
  SnackbarProvider,
  useSnackbar,
  // Overlays / Extra (from main entry)
  Dialog,
  Popover,
  InfoTip,
} from "dandy-ui";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  Drawer,
  DatePicker as DatePickerBase,
  MultiDatePicker as MultiDatePickerBase,
  DateRangePicker as DateRangePickerBase,
  MultiSelect,
  SidebarLayout,
  SideBar,
} from "dandy-ui/extra";
import type { DatePickerProps } from "dandy-ui/extra";
import type { DateRangePickerProps } from "dandy-ui/extra";
import type { MultiDatePickerProps } from "dandy-ui/extra";

import { MarkdownViewer } from "dandy-ui/markdown";

const TableHead = Table.Head;
const TableBody = Table.Body;
const TableFooter = Table.Footer;
const TableRow = Table.Row;
const TableColumn = Table.Column;
const TableCell = Table.Cell;

const DialogTrigger = Dialog.Trigger;
const DialogContent = Dialog.Content;
const DialogClose = Dialog.Close;
const DialogOverlay = Dialog.Overlay;
const DialogHeader = Dialog.Header;
const DialogFooter = Dialog.Footer;
const DialogTitle = Dialog.Title;
const DialogDescription = Dialog.Description;

const PopoverTrigger = Popover.Trigger;
const PopoverContent = Popover.Content;

const DrawerTrigger = Drawer.Trigger;
const DrawerContent = Drawer.Content;
const DrawerClose = Drawer.Close;
const DrawerHeader = Drawer.Header;
const DrawerFooter = Drawer.Footer;
const DrawerTitle = Drawer.Title;
const DrawerDescription = Drawer.Description;

const MultiSelectTrigger = MultiSelect.Trigger;
const MultiSelectContent = MultiSelect.Content;
const MultiSelectItem = MultiSelect.Item;
const MultiSelectLabel = MultiSelect.Label;
const MultiSelectSeparator = MultiSelect.Separator;
const MultiSelectGroup = MultiSelect.Group;

const SelectTrigger = Select.Trigger;
const SelectContent = Select.Content;
const SelectItem = Select.Item;
const SelectLabel = Select.Label;
const SelectSeparator = Select.Separator;
const SelectGroup = Select.Group;
const SelectValue = Select.Value;



const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ value, onChange, ...props }, ref) => {
    const [internal, setInternal] = React.useState<Date | undefined>();
    const selected = value ?? internal;
    const handleChange = (date: Date | undefined) => {
      setInternal(date);
      onChange?.(date);
    };
    return (
      <DatePickerBase
        ref={ref}
        value={selected}
        onChange={handleChange}
        {...props}
      />
    );
  },
);
DatePicker.displayName = "DatePicker";

const DateRangePicker = React.forwardRef<
  HTMLInputElement,
  DateRangePickerProps
>(({ value, onChange, ...props }, ref) => {
  const [internal, setInternal] = React.useState<DateRange | undefined>();
  const selected = value ?? internal;
  const handleChange = (range: DateRange | undefined) => {
    setInternal(range);
    onChange?.(range);
  };
  return (
    <DateRangePickerBase
      ref={ref}
      value={selected}
      onChange={handleChange}
      {...props}
    />
  );
});
DateRangePicker.displayName = "DateRangePicker";

const MultiDatePicker = React.forwardRef<
  HTMLInputElement,
  MultiDatePickerProps
>(({ value, onChange, ...props }, ref) => {
  const [internal, setInternal] = React.useState<Date[] | undefined>();
  const selected = value ?? internal;
  const handleChange = (dates: Date[] | undefined) => {
    setInternal(dates);
    onChange?.(dates);
  };
  return (
    <MultiDatePickerBase
      ref={ref}
      value={selected}
      onChange={handleChange}
      {...props}
    />
  );
});
MultiDatePicker.displayName = "MultiDatePicker";

export {
  // Layout
  Container,
  Flex,
  Grid,
  GridItem,
  Paper,
  Section,
  ScrollShadow,
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableColumn,
  TableCell,
  // Typography
  Text,
  Heading,
  Hint,
  Divider,
  Code,
  Kbd,
  // Core
  Button,
  IconButton,
  Input,
  NumberInput,
  TextArea,
  FileInput,
  CheckBox,
  Radio,
  Switch,
  Slider,
  Label,
  Chips,
  Rating,
  Badge,
  Avatar,
  AvatarGroup,
  Icon,
  AspectRatio,
  Select,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  // Feedbacks
  Alert,
  CircularProgress,
  ProgressBar,
  Spinner,
  Skeleton,
  SnackbarProvider,
  useSnackbar,
  // Extra - compound components
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogOverlay,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  Popover,
  PopoverTrigger,
  PopoverContent,
  InfoTip,
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DatePicker,
  MultiDatePicker,
  DateRangePicker,
  MultiSelect,
  MultiSelectTrigger,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectLabel,
  MultiSelectSeparator,
  MultiSelectGroup,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectGroup,
  SelectValue,
  SidebarLayout,
  SideBar,
  MarkdownViewer,
};
