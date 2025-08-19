import * as React from "react";

import { cn } from "../../lib/utils";

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
  role?: string;
  "aria-rowcount"?: number;
  "aria-colcount"?: number;
}

interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  id?: string;
  role?: string;
}

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  id?: string;
  role?: string;
}

interface TableFooterProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  id?: string;
  role?: string;
}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
  role?: string;
  "aria-rowindex"?: number;
  "aria-selected"?: boolean;
}

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
  role?: string;
  "aria-sort"?: "ascending" | "descending" | "none" | "other";
  "aria-colindex"?: number;
}

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
  role?: string;
  "aria-colindex"?: number;
  "aria-rowindex"?: number;
}

interface TableCaptionProps
  extends React.HTMLAttributes<HTMLTableCaptionElement> {
  // 508 compliance props
  "aria-label"?: string;
  id?: string;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      className,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      id,
      role,
      "aria-rowcount": ariaRowCount,
      "aria-colcount": ariaColCount,
      ...props
    },
    ref
  ) => (
    <div
      className={cn(
        "relative max-h-full w-full overflow-auto rounded-md",
        className
      )}
    >
      <table
        ref={ref}
        className="w-full caption-bottom border-collapse border-spacing-0 text-sm"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        id={id}
        role={role}
        aria-rowcount={ariaRowCount}
        aria-colcount={ariaColCount}
        {...props}
      />
    </div>
  )
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  (
    {
      className,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      id,
      role,
      ...props
    },
    ref
  ) => (
    <thead
      ref={ref}
      className={cn("border-b border-primary-100 bg-primary-50", className)}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      id={id}
      role={role}
      {...props}
    />
  )
);
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (
    {
      className,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      id,
      role,
      ...props
    },
    ref
  ) => (
    <tbody
      ref={ref}
      className={className}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      id={id}
      role={role}
      {...props}
    />
  )
);
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  (
    {
      className,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      id,
      role,
      ...props
    },
    ref
  ) => (
    <tfoot
      ref={ref}
      className={cn("border-t font-medium [&>tr]:last:border-b-0", className)}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      id={id}
      role={role}
      {...props}
    />
  )
);
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  (
    {
      className,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      id,
      role,
      "aria-rowindex": ariaRowIndex,
      "aria-selected": ariaSelected,
      ...props
    },
    ref
  ) => (
    <tr
      ref={ref}
      className={cn("text-sm", className)}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      id={id}
      role={role}
      aria-rowindex={ariaRowIndex}
      aria-selected={ariaSelected}
      {...props}
    />
  )
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  (
    {
      className,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      id,
      role,
      "aria-sort": ariaSort,
      "aria-colindex": ariaColIndex,
      ...props
    },
    ref
  ) => (
    <th
      ref={ref}
      className={cn(
        "border-spacing-0 px-4 py-[22px] text-left align-middle font-medium [&:has([role=checkbox])]:w-auto [&:has([role=checkbox])]:min-w-max",
        className
      )}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      id={id}
      role={role}
      aria-sort={ariaSort}
      aria-colindex={ariaColIndex}
      {...props}
    />
  )
);
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  (
    {
      className,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      id,
      role,
      "aria-colindex": ariaColIndex,
      "aria-rowindex": ariaRowIndex,
      ...props
    },
    ref
  ) => (
    <td
      ref={ref}
      className={cn(
        "border-b border-primary-100 bg-white p-4 py-[19px] align-middle [&:has([role=checkbox])]:w-auto [&:has([role=checkbox])]:min-w-max [tr:last-child_&]:border-b-0",
        className
      )}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      id={id}
      role={role}
      aria-colindex={ariaColIndex}
      aria-rowindex={ariaRowIndex}
      {...props}
    />
  )
);
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  TableCaptionProps
>(({ className, "aria-label": ariaLabel, id, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-neutral-500", className)}
    aria-label={ariaLabel}
    id={id}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};

export type {
  TableBodyProps,
  TableCaptionProps,
  TableCellProps,
  TableFooterProps,
  TableHeaderProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
};
