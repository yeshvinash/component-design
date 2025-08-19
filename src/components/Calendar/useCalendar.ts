import type { DateRange, Matcher } from "react-day-picker";

interface useCalendarProps {
  formatFullTime?: boolean;
  selected?: Date | Date[] | DateRange | undefined;
  onSelect?: (date: Date | undefined) => void;
  disabledMinDate?: Date | undefined;
  disabledMaxDate?: Date | undefined;
}

export const useCalendar = ({
  formatFullTime,
  selected,
  onSelect,
  disabledMinDate,
  disabledMaxDate,
}: useCalendarProps) => {
  const hours = Array.from(
    { length: formatFullTime ? 24 : 12 },
    (_, i) => i + 1
  );

  const handleTimeChange = (
    type: "hour" | "minute" | "ampm",
    value: string
  ) => {
    if (selected && selected instanceof Date) {
      const newDate = new Date(selected);
      if (type === "hour") {
        if (formatFullTime) {
          newDate.setHours(parseInt(value));
        } else {
          newDate.setHours(
            (parseInt(value) % 12) + (newDate.getHours() >= 12 ? 12 : 0)
          );
        }
      } else if (type === "minute") {
        newDate.setMinutes(parseInt(value));
      } else if (type === "ampm" && !formatFullTime) {
        const currentHours = newDate.getHours();
        const isPM = currentHours >= 12;
        if ((value === "PM" && !isPM) || (value === "AM" && isPM)) {
          newDate.setHours(currentHours + (isPM ? -12 : 12));
        }
      }
      if (onSelect) onSelect(newDate);
    }
  };

  const disabledDates = [
    disabledMinDate ? { before: disabledMinDate } : undefined,
    disabledMaxDate ? { after: disabledMaxDate } : undefined,
  ].filter(Boolean) as Matcher[];

  return { hours, handleTimeChange, disabledDates };
};
