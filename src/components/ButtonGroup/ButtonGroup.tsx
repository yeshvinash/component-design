import * as React from "react";
import { cn } from "../../lib/utils";

import { useButtonGroup } from "./useButtonGroup";

interface ButtonGroupProps {
  status?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  buttonOptions?: string[];
  forSelect?: boolean;
  onSelect?: (selected: string) => void;
  className?: string;
  defaultSelected?: number;
}

export function ButtonGroup({
  status = false,
  disabled = false,
  icon = false,
  buttonOptions = ["text", "text"],
  forSelect = false,
  className,
  onSelect,
  defaultSelected,
}: ButtonGroupProps) {
  const { selected, handleSelect } = useButtonGroup(
    defaultSelected,
    forSelect,
    disabled,
    onSelect,
    buttonOptions
  );

  return (
    <div
      className={cn(
        "group flex w-full overflow-hidden rounded-md border border-gray-300",
        className
      )}
    >
      {buttonOptions.map((label, index) => {
        const isSelected = selected === index;

        return (
          <button
            key={index}
            disabled={disabled}
            onClick={
              disabled
                ? undefined
                : (e) => {
                    e.preventDefault();
                    handleSelect(index);
                  }
            }
            className={cn(
              "flex h-8 flex-1 items-center justify-center border-r border-r-gray-300 px-4 py-[7px] text-sm font-semibold transition-all",
              // Base styles
              "text-gray-500 hover:bg-primary-100 hover:text-gray-800 active:bg-transparent active:text-gray-500",
              // Selected state styles
              isSelected ? "bg-primary-100 text-gray-800" : "bg-white",
              // Last button border removal
              index === buttonOptions.length - 1
                ? "border-r-0"
                : `${disabled ? "border-gray-400" : "border-gray-300"}`,
              // Disabled state
              disabled &&
                "cursor-not-allowed bg-gray-200 text-gray-400 hover:bg-gray-200 hover:text-gray-400 active:bg-gray-200 active:text-gray-400",
              className
            )}
          >
            {status && (
              <span className="mr-2 h-2 w-2 rounded-full bg-success-500"></span>
            )}
            {icon && <div className="mr-2 text-gray-500">{icon}</div>}
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
