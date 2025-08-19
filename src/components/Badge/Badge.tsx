import * as React from "react";

import { type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { badgeVariants } from "./badgeVariants";

const statusColors: Record<string, string> = {
  gray: "bg-gray-500",
  primary: "bg-primary-500",
  error: "bg-error-500",
  warning: "bg-warning-500",
  success: "bg-success-500",
  info: "bg-info-500",
};

export type BadgeVariantType = VariantProps<typeof badgeVariants>["variant"];

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  status?: boolean; // Boolean flag to show status indicator
  startIcon?: React.ReactNode; // Icon before text
  endIcon?: React.ReactNode; // Icon after text
  statusLabel?: string; // ARIA label for status indicator
}

function Badge({
  className,
  variant,
  status,
  statusLabel,
  startIcon,
  endIcon,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1",
        badgeVariants({ variant }),
        className
      )}
      {...props}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {status && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full inline-block",
            variant && statusColors[variant]
          )}
          aria-label={statusLabel || "Status"}
          title={statusLabel || "Status"}
          role="status"
        />
      )}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </div>
  );
}

export { Badge };
