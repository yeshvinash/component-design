import { CalendarDays, X as CloseIcon } from "lucide-react";

import { cn, getDateFormat } from "../../lib/utils";

import { Button } from "../Button";
import { Calendar } from "../Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";

import { toZonedTime } from "date-fns-tz";
import { type DatePickerProps } from "./types";
import { useDatepicker } from "./useDatePicker";

export function DatePicker({
  classNames,
  value,
  onChange,
  disabled = false,
  readOnly = false,
  showTime = false,
  formatFullTime = false,
  placeholder,
  disabledMinDate,
  disabledMaxDate,
  isClear = false,
  onClear,
  container,
  // 508 compliance props
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  id,
  role = "combobox",
  triggerAriaLabel,
  popoverAriaLabel = "Date picker calendar",
  clearAriaLabel = "Clear selected date",
  calendarAriaLabel,
  ...rest
}: DatePickerProps) {
  const { open, setOpen, isValidDate, defaultTriggerAriaLabel } = useDatepicker(
    {
      value,
      showTime,
      formatFullTime,
      triggerAriaLabel,
      placeholder,
    }
  );

  return (
    <Popover open={open} onOpenChange={!disabled ? setOpen : () => {}}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start border-gray-200 bg-white text-left font-normal hover:border-gray-200 hover:bg-white",
            !value && "text-muted-foreground"
          )}
          disabled={disabled}
          onClick={readOnly ? (e) => e.preventDefault() : undefined}
          aria-label={ariaLabel || defaultTriggerAriaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          aria-haspopup="dialog"
          aria-expanded={open}
          id={id}
          role={role}
        >
          <CalendarDays
            className={cn(
              "h-4 w-4",
              value && isValidDate(value) ? "text-gray-800" : "text-gray-400"
            )}
            aria-hidden="true"
          />
          {value && isValidDate(value) ? (
            <>
              <span className="flex-grow font-semibold text-gray-800">
                {showTime && formatFullTime
                  ? getDateFormat(toZonedTime(value, "UTC"), "datetimeFull")
                  : showTime
                  ? getDateFormat(toZonedTime(value, "UTC"), "datetime")
                  : getDateFormat(toZonedTime(value, "UTC"), "date")}
              </span>
              {!disabled && isClear && (
                <CloseIcon
                  className="ml-2 h-4 w-4 opacity-50 hover:opacity-100"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onClear?.();
                  }}
                  aria-label={clearAriaLabel}
                  aria-hidden="true"
                />
              )}
            </>
          ) : (
            <span className="font-normal text-gray-400">
              {placeholder
                ? placeholder
                : showTime
                ? "Pick a date and time"
                : "MM/DD/YYYY"}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "z-[100] w-auto border-gray-300 p-0",
          classNames?.contentClass
        )}
        align="start"
        container={container}
        aria-label={popoverAriaLabel}
        role="dialog"
      >
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            onChange(date as Date);
            if (!showTime) {
              setOpen(false);
            }
          }}
          showTime={showTime}
          formatFullTime={formatFullTime}
          disabledMinDate={disabledMinDate}
          disabledMaxDate={disabledMaxDate}
          timeZone="UTC"
          aria-label={calendarAriaLabel || "Choose date"}
          role="application"
          {...rest}
        />
      </PopoverContent>
    </Popover>
  );
}
