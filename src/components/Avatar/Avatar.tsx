import * as React from "react";

import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "../../lib/utils";

import { getInitials, stringToColor } from "./utils";

interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  name?: string;
  src?: string;
  status?: "online" | "offline";
  base?: string;
  initialsLength?: 1 | 2;
  alt?: string;
  statusLabel?: string;
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(
  (
    {
      className,
      base,
      name,
      src,
      status,
      initialsLength = 2,
      alt,
      statusLabel,
      ...props
    },
    ref
  ) => (
    <div className="relative inline-block">
      <AvatarPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
          className
        )}
        {...props}
      >
        {src ? (
          <AvatarPrimitive.Image
            className="h-full w-full object-cover"
            src={src}
            alt={alt || name || "User avatar"}
          />
        ) : (
          <AvatarPrimitive.Fallback
            className={cn(
              "flex h-full w-full items-center justify-center rounded-full border-2 border-white text-white",
              base
            )}
            style={{
              backgroundColor: stringToColor(name || ""),
            }}
            aria-label={alt || name || "User avatar"}
            role="img"
          >
            {name ? getInitials(name, initialsLength) : "NA"}
          </AvatarPrimitive.Fallback>
        )}
      </AvatarPrimitive.Root>

      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white",
            status === "online" ? "bg-success-500" : "bg-gray-400"
          )}
          aria-label={
            statusLabel || (status === "online" ? "Online" : "Offline")
          }
          title={statusLabel || (status === "online" ? "Online" : "Offline")}
          role="status"
        />
      )}
    </div>
  )
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

export { Avatar };
