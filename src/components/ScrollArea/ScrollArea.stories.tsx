import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea } from "./ScrollArea";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    "aria-label": { control: "text" },
    orientation: {
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

const sampleContent = Array.from({ length: 20 }, (_, i) => (
  <div
    key={i}
    className="mb-2 rounded border border-gray-300 bg-white p-2 shadow-sm"
  >
    Item {i + 1}
  </div>
));

export const Default: Story = {
  args: {
    className: "h-48 w-64",
    children: <div className="p-4">{sampleContent}</div>,
  },
};

export const HorizontalScroll: Story = {
  args: {
    orientation: "horizontal",
    className: "h-32 w-full",
    children: <div className="flex gap-4 p-4">{sampleContent}</div>,
  },
};

export const CustomLabel: Story = {
  args: {
    className: "h-48 w-64",
    "aria-label": "Custom scrollable product list",
    children: <div className="p-4">{sampleContent}</div>,
  },
};
