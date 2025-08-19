import type { CalendarProps } from "../Calendar/Calendar";

export interface DatePickerProps
  extends Pick<CalendarProps, "endMonth" | "startMonth"> {
  value: Date;
  disabled?: boolean | undefined;
  readOnly?: boolean;
  onChange: (date?: Date) => void;
  showTime?: boolean;
  formatFullTime?: boolean;
  placeholder?: string;
  disabledMinDate?: Date;
  disabledMaxDate?: Date;
  classNames?: {
    contentClass?: string;
  };
  isClear?: boolean;
  onClear?: () => void;
  container?: HTMLElement | null;
  // 508 compliance additions
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
  role?: string;
  triggerAriaLabel?: string;
  popoverAriaLabel?: string;
  clearAriaLabel?: string;
  calendarAriaLabel?: string;
}

export interface UseDatepickerProps {
  value: Date;
  showTime?: boolean;
  formatFullTime?: boolean;
  triggerAriaLabel?: string;
  placeholder?: string;
}
