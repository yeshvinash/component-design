import { useState } from "react";

import { type UseDatepickerProps } from "./types";

export const useDatepicker = ({
  value,
  showTime,
  formatFullTime,
  triggerAriaLabel,
  placeholder,
}: UseDatepickerProps) => {
  const [open, setOpen] = useState(false);

  const isValidDate = (date: Date | string | number | null | undefined) => {
    // If the value is null, undefined, or empty string, it's not valid
    if (date === null || date === undefined || date === "") {
      return false;
    }

    // If it's already a Date object, check if it's valid
    if (date instanceof Date) {
      return !isNaN(date.getTime()) && date.getTime() > 0;
    }

    // If it's a string, try to parse it
    if (typeof date === "string") {
      // Check if it's a valid date string format
      const parsedDate = new Date(date);
      return !isNaN(parsedDate.getTime()) && parsedDate.getTime() > 0;
    }

    // If it's a number, check if it's a valid timestamp
    if (typeof date === "number") {
      const parsedDate = new Date(date);
      return !isNaN(parsedDate.getTime()) && parsedDate.getTime() > 0;
    }

    // For any other type, it's not valid
    return false;
  };

  // 508 compliance: Generate accessible date description
  const getDateAriaLabel = (
    date: Date | null | undefined,
    showTime: boolean,
    formatFullTime: boolean
  ) => {
    if (!date || !isValidDate(date)) {
      return "No date selected";
    }
    const convertedDate = new Date(date);
    const dateStr = convertedDate.toLocaleDateString();
    if (showTime) {
      const timeStr = formatFullTime
        ? convertedDate.toLocaleString()
        : convertedDate.toLocaleTimeString();
      return `Selected date and time: ${dateStr} ${timeStr}`;
    }

    return `Selected date: ${dateStr}`;
  };

  const dateAriaLabel = getDateAriaLabel(
    value,
    showTime || false,
    formatFullTime || false
  );
  const defaultTriggerAriaLabel =
    triggerAriaLabel ||
    (value && isValidDate(value)
      ? `Date picker. ${dateAriaLabel}`
      : `Date picker. ${
          placeholder || (showTime ? "Pick a date and time" : "Pick a date")
        }`);

  return {
    open,
    setOpen,
    isValidDate,
    dateAriaLabel,
    defaultTriggerAriaLabel,
  };
};
