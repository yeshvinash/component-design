import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const inputVariants = cva(
  "flex h-10 w-full rounded-md px-3 py-2.5 bg-white text-sm font-normal text-gray-900 placeholder:font-normal placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-offset-0 disabled:cursor-not-allowed transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "border border-gray-300 bg-white text-gray-900 focus:ring-primary-500 focus:border-primary-500 disabled:border-gray-200 disabled:text-gray-400 disabled:bg-gray-50",
        outline:
          "border-b rounded-none border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-purple-500",
        danger:
          "border border-red-500 text-gray-900 focus:ring-red-500 focus:border-red-500 disabled:bg-red-50",
        success:
          "border border-green-500 text-gray-900 focus:ring-green-500 focus:border-green-500",
      },
      size: {
        sm: "h-8 px-2.5 py-2 text-xs",
        md: "h-10 px-3 py-2.5 text-sm",
        lg: "h-12 px-4 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const labelVariants = cva("block text-sm font-medium mb-2", {
  variants: {
    variant: {
      default: "text-gray-700",
      required:
        "text-gray-700 after:content-['*'] after:ml-1 after:text-red-500",
      disabled: "text-gray-400",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const helperTextVariants = cva("mt-2 flex items-center text-sm", {
  variants: {
    variant: {
      default: "text-gray-500",
      outline: "text-gray-500",
      danger: "text-red-500",
      success: "text-green-600",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const inputWrapperVariants = cva("relative flex items-center", {
  variants: {
    hasStartIcon: {
      true: "",
      false: "",
    },
    hasEndIcon: {
      true: "",
      false: "",
    },
    hasButton: {
      true: "flex",
      false: "",
    },
  },
  defaultVariants: {
    hasStartIcon: false,
    hasEndIcon: false,
    hasButton: false,
  },
});

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix" | "size">,
    VariantProps<typeof inputVariants> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  helperText?: string;
  helperIcon?: React.ReactNode;
  label?: string;
  required?: boolean;
  variant?: "default" | "outline" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  // Button integration
  buttonText?: string;
  buttonVariant?: "primary" | "secondary" | "outline";
  buttonSize?: "sm" | "md" | "lg";
  onButtonClick?: () => void;
  // 508 compliance additions
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
  "aria-required"?: boolean;
  error?: boolean;
  helperTextId?: string;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      startIcon,
      endIcon,
      helperIcon,
      helperText,
      label,
      required = false,
      min,
      variant,
      size,
      max,
      helperTextId,
      buttonText,
      buttonVariant = "primary",
      buttonSize = "md",
      onButtonClick,
      error,
      ...props
    },
    ref
  ) => {
    const inputId = React.useId();
    const helperId = helperTextId || `${inputId}-helper`;
    const labelId = `${inputId}-label`;

    // Determine if we should show error state
    const currentVariant = error ? "danger" : variant;
    const currentHelperVariant = error ? "danger" : variant;

    return (
      <div className="flex w-full flex-col">
        {label && (
          <label
            htmlFor={inputId}
            id={labelId}
            className={cn(
              labelVariants({
                variant: required ? "required" : "default",
                ...(props.disabled && { variant: "disabled" }),
              })
            )}
          >
            {label}
          </label>
        )}

        <div
          className={cn(
            inputWrapperVariants({
              hasStartIcon: !!startIcon,
              hasEndIcon: !!endIcon,
              hasButton: !!buttonText,
            }),
            buttonText && "gap-2"
          )}
        >
          <div className="relative flex-1">
            {startIcon && (
              <div
                className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center text-gray-500"
                aria-hidden="true"
              >
                {startIcon}
              </div>
            )}
            <input
              id={inputId}
              type={type}
              className={cn(
                inputVariants({ variant: currentVariant, size }),
                startIcon && "pl-10",
                endIcon && "pr-10",
                className
              )}
              ref={ref}
              min={min}
              max={max}
              aria-labelledby={label ? labelId : undefined}
              aria-describedby={helperText ? helperId : undefined}
              aria-invalid={error}
              aria-required={required}
              {...props}
            />
            {endIcon && (
              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-gray-500"
                aria-hidden="true"
              >
                {endIcon}
              </div>
            )}
          </div>

          {buttonText && (
            <button
              type="button"
              onClick={onButtonClick}
              className={cn(
                "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
                buttonVariant === "primary" &&
                  "bg-purple-600 text-white hover:bg-purple-700",
                buttonVariant === "secondary" &&
                  "bg-gray-100 text-gray-900 hover:bg-gray-200",
                buttonVariant === "outline" &&
                  "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
                buttonSize === "sm" && "h-8 px-3 text-xs",
                buttonSize === "md" && "h-10 px-4 text-sm",
                buttonSize === "lg" && "h-12 px-6 text-base"
              )}
            >
              {buttonText}
            </button>
          )}
        </div>

        {(helperText || helperIcon) && (
          <div
            className={cn(
              helperTextVariants({ variant: currentHelperVariant })
            )}
            id={helperId}
          >
            {helperIcon && (
              <span className="mr-2" aria-hidden="true">
                {helperIcon}
              </span>
            )}
            {helperText && <span>{helperText}</span>}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
