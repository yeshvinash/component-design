import { cva } from "class-variance-authority";

export const toastVariants = cva(
  "relative w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg p-4 transition-all duration-200 ease-in-out",
  {
    variants: {
      variant: {
        info: "border-blue-200 bg-blue-50/50 [&>div:first-child>div:first-child]:text-blue-500 [&>div:first-child>div:first-child]:bg-blue-100 [&>div:first-child>div:first-child]:rounded-full [&>div:first-child>div:first-child]:p-2 [&>div:first-child>div:first-child]:flex [&>div:first-child>div:first-child]:items-center [&>div:first-child>div:first-child]:justify-center",
        success:
          "border-green-200 bg-green-50/50 [&>div:first-child>div:first-child]:text-green-500 [&>div:first-child>div:first-child]:bg-green-100 [&>div:first-child>div:first-child]:rounded-full [&>div:first-child>div:first-child]:p-2 [&>div:first-child>div:first-child]:flex [&>div:first-child>div:first-child]:items-center [&>div:first-child>div:first-child]:justify-center",
        warning:
          "border-orange-200 bg-orange-50/50 [&>div:first-child>div:first-child]:text-orange-500 [&>div:first-child>div:first-child]:bg-orange-100 [&>div:first-child>div:first-child]:rounded-full [&>div:first-child>div:first-child]:p-2 [&>div:first-child>div:first-child]:flex [&>div:first-child>div:first-child]:items-center [&>div:first-child>div:first-child]:justify-center",
        error:
          "border-red-200 bg-red-50/50 [&>div:first-child>div:first-child]:text-red-500 [&>div:first-child>div:first-child]:bg-red-100 [&>div:first-child>div:first-child]:rounded-full [&>div:first-child>div:first-child]:p-2 [&>div:first-child>div:first-child]:flex [&>div:first-child>div:first-child]:items-center [&>div:first-child>div:first-child]:justify-center",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);
