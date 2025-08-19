import * as React from "react";

import { DayPicker, type DateRange } from "react-day-picker";

import { cn } from "../../lib/utils";

import { Button, buttonVariants } from "../Button";
import { ScrollArea, ScrollBar } from "../ScrollArea";

import { useCalendar } from "./useCalendar";
export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export type ExtendedCalendarProps = CalendarProps & {
  className?: string;
  selected?: Date | Date[] | DateRange | undefined;
  onSelect?: (date: Date | undefined) => void;
  showTime?: boolean;
  formatFullTime?: boolean;
  disabledMinDate?: Date | undefined;
  disabledMaxDate?: Date | undefined;
};

function Calendar({
  mode,
  className,
  classNames,
  showOutsideDays = true,
  selected,
  onSelect,
  showTime,
  formatFullTime,
  disabledMinDate,
  disabledMaxDate,
  ...props
}: ExtendedCalendarProps) {
  const { hours, handleTimeChange, disabledDates } = useCalendar({
    formatFullTime,
    selected,
    onSelect,
    disabledMinDate,
    disabledMaxDate,
  });

  return (
    <div className="flex">
      <DayPicker
        showOutsideDays={showOutsideDays}
        mode={mode}
        captionLayout="dropdown"
        selected={selected}
        onSelect={(date: Date | Date[] | DateRange | undefined) =>
          onSelect?.(date instanceof Date ? date : undefined)
        }
        disabled={disabledDates.length ? disabledDates : undefined}
        className={cn("rounded-md bg-white p-3", className)}
        endMonth={new Date(new Date().getFullYear() + 100, 11)}
        startMonth={new Date(new Date().getFullYear() - 100, 1)}
        classNames={{
          months: "flex flex-col sm:flex-row relative",
          month: "mr-5 last:mr-0 space-y-4",
          week: "flex",
          weeks: "flex flex-col gap-2 mt-2",
          selected: "bg-primary-500 text-white",
          range_middle: "!bg-gray-200 !text-gray-800 !rounded-none",
          range_end: "!rounded-none !rounded-r-md",
          range_start: "!rounded-none !rounded-l-md",
          caption: "flex justify-center pt-1 relative items-center",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          ),
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell: "rounded-md w-8 font-normal text-[0.8rem]",
          row: "flex w-full mt-2",
          cell: cn(
            "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-end)]:rounded-r-md",
            mode === "range"
              ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md "
              : "[&:has([aria-selected])]:rounded-md"
          ),
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-9 w-9 p-0 font-normal aria-selected:opacity-100 cursor-pointer inline-flex items-center justify-center text-sm text-gray-800 hover:bg-gray-200 hover:text-gray-800 [&>button]:w-full [&>button]:h-full"
          ),
          weekdays: "flex justify-between",
          weekday: "text-gray-500 rounded-md w-8 font-normal text-xs",
          day_range_start: "day-range-start",
          day_range_end: "day-range-end",
          day_outside: "day-outside",
          day_disabled: " opacity-50 text-red-500",
          day_hidden: "invisible",
          month_caption: "flex justify-center  relative items-center h-[28px]",
          button_previous:
            "absolute left-0 z-10 border border-gray-300 flex items-center justify-center w-[28px] h-[28px] rounded-sm",
          button_next:
            "absolute right-0  z-10 border border-gray-300 flex items-center justify-center w-[28px] h-[28px] rounded-sm",
          chevron: "fill-gray-600 w-4",
          disabled: "opacity-50",
          dropdowns: cn(
            "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5"
          ),
          dropdown: cn("absolute bg-popover inset-0 opacity-0"),
          dropdown_root: cn(
            "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md"
          ),
          caption_label: cn(
            "select-none font-medium",
            "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5"
          ),
          ...classNames,
        }}
        defaultMonth={
          selected &&
          selected instanceof Date &&
          !isNaN(new Date(selected).getTime())
            ? new Date(selected)
            : new Date()
        }
        {...props}
      />
      {showTime ? (
        <>
          <div className="flex flex-col divide-y sm:h-[332px] sm:flex-row sm:divide-x sm:divide-y-0">
            <ScrollArea className="w-64 sm:w-auto">
              <div className="flex p-2 sm:flex-col [&>button:hover]:bg-gray-200">
                {hours.reverse().map((hour) => (
                  <Button
                    key={hour}
                    variant={
                      selected &&
                      selected instanceof Date &&
                      selected.getHours() % 12 === hour % 12
                        ? "time"
                        : "link"
                    }
                    className="aspect-square h-9 w-9 shrink-0 !px-2 py-2 text-sm font-normal text-gray-800 sm:w-full"
                    onClick={() => handleTimeChange("hour", hour.toString())}
                  >
                    {hour}
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="sm:hidden" />
            </ScrollArea>
            <ScrollArea className="w-64 sm:w-auto">
              <div className="flex p-2 sm:flex-col [&>button:hover]:bg-gray-200">
                {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
                  <Button
                    key={minute}
                    variant={
                      selected &&
                      selected instanceof Date &&
                      selected.getMinutes() === minute
                        ? "time"
                        : "link"
                    }
                    className="aspect-square h-9 w-9 shrink-0 !px-2 py-2 text-sm font-normal text-gray-800 sm:w-full"
                    onClick={() =>
                      handleTimeChange("minute", minute.toString())
                    }
                  >
                    {minute}
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="sm:hidden" />
            </ScrollArea>
            {!formatFullTime ? (
              <ScrollArea className="">
                <div className="flex p-2 sm:flex-col [&>button:hover]:bg-gray-200">
                  {["AM", "PM"].map((ampm) => (
                    <Button
                      key={ampm}
                      variant={
                        selected &&
                        ((ampm === "AM" &&
                          selected instanceof Date &&
                          selected.getHours() < 12) ||
                          (ampm === "PM" &&
                            selected instanceof Date &&
                            selected.getHours() >= 12))
                          ? "time"
                          : "link"
                      }
                      className="aspect-square h-9 w-9 shrink-0 !px-2 py-2 text-sm font-normal text-gray-800 sm:w-full"
                      onClick={() => handleTimeChange("ampm", ampm)}
                    >
                      {ampm}
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
