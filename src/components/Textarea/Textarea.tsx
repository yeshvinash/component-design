import * as React from "react";

import { cn } from "../../lib/utils";

export interface TextareaClassNames {
  container?: string;
}

interface TextareaProps extends React.ComponentProps<"textarea"> {
  helperText?: string;
  error?: string;
  classNames?: TextareaClassNames;

  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
  "aria-required"?: any;
  "aria-invalid"?: any;
  helperTextId?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      classNames,
      helperText,
      error,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      id,
      "aria-required": ariaRequired,
      "aria-invalid": ariaInvalid,
      helperTextId,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    const helperId =
      helperTextId || (helperText ? `${textareaId}-helper` : undefined);

    // Combine describedBy with helper text ID
    const describedBy =
      [ariaDescribedBy, helperId].filter(Boolean).join(" ") || undefined;

    return (
      <div className={cn("flex flex-col", classNames?.container)}>
        <textarea
          className={cn(
            "focus-visible:ring-ring flex min-h-[60px] w-full rounded-sm border bg-transparent px-3.5 py-3 !text-sm font-normal text-gray-800 placeholder:!text-sm placeholder:!font-normal placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:bg-gray-200 md:text-xs",
            error ? "border-error-500" : "border-gray-200",
            className
          )}
          ref={ref}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={describedBy}
          id={textareaId}
          aria-required={ariaRequired}
          aria-invalid={ariaInvalid ? ariaInvalid : !!error}
          {...props}
        />
        {helperText && (
          <p
            className={cn(
              "mt-1 text-xs",
              error ? "text-error-500" : "text-gray-500"
            )}
            id={helperId}
            role={error ? "alert" : "status"}
            aria-live={error ? "assertive" : "polite"}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
