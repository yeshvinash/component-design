// lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ClassValue } from "clsx";
import { format } from "date-fns";
/**
 * Merges Tailwind classes conditionally and intelligently
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date according to the specified format
 * @param date - Date to format
 * @param format - Format string (e.g., 'MM/DD/YYYY', 'DD-MM-YYYY', 'MM/DD/YYYY hh:mm:ss A')
 * @returns Formatted date string
 */
export function getDateFormat(
  date: Date,
  type?: "date" | "time" | "datetime" | "datetimeFull"
) {
  if (!date) return "";

  switch (type) {
    case "time":
      return format(date, "hh:mm a"); // 12-hour time
    case "datetime":
      return format(date, "MM/dd/yyyy HH:mm");
    case "datetimeFull":
      return format(date, "PPpp"); // full date & time
    default:
      return format(date, "MM/dd/yyyy");
  }
}
