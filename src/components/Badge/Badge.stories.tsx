import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";
import { Info, AlertCircle, XCircle, Star } from "lucide-react";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "gray",
        "primary",
        "error",
        "warning",
        "success",
        "info",
        "outline",
        "numbergray",
      ],
    },
    status: { control: "boolean" },
    statusLabel: { control: "text" },
    startIcon: { control: false }, // We'll use sample icons in stories
    endIcon: { control: false },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Info Badge",
    variant: "info",
  },
};

export const WithStatus: Story = {
  args: {
    children: "With Status",
    variant: "success",
    status: true,
    statusLabel: "Online",
  },
};

export const WithStartIcon: Story = {
  args: {
    children: "Start Icon",
    variant: "primary",
    startIcon: <Star size={14} />,
  },
};

export const WithEndIcon: Story = {
  args: {
    children: "End Icon",
    variant: "warning",
    endIcon: <AlertCircle size={14} />,
  },
};

export const WithBothIconsAndStatus: Story = {
  args: {
    children: "Full Feature",
    variant: "error",
    status: true,
    statusLabel: "Error state",
    startIcon: <XCircle size={14} />,
    endIcon: <Info size={14} />,
  },
};
