import React from "react";

import { cn } from "../../lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
  role?: string;
  "aria-busy"?: boolean;
  "aria-live"?: "polite" | "assertive" | "off";
}

function Skeleton({
  className,
  "aria-label": ariaLabel = "Loading content",
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  id,
  role = "status",
  "aria-busy": ariaBusy = true,
  "aria-live": ariaLive = "polite",
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-gray-100",
        className
      )}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      id={id}
      role={role}
      aria-busy={ariaBusy}
      aria-live={ariaLive}
      {...props}
    >
      <div
        className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent"
        aria-hidden="true"
        role="presentation"
      />
    </div>
  );
}

export default Skeleton;
