import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Toggle } from "./Toggle";
import { Bold } from "lucide-react";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "ghost"], // match your toggleVariants options
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"], // match your toggleVariants options
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    "aria-label": "Bold",
    children: <Bold className="h-4 w-4" />,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [pressed, setPressed] = React.useState(false);

    return (
      <Toggle
        {...args}
        pressed={pressed}
        onPressedChange={setPressed}
        aria-label="Bold"
      >
        <Bold className="h-4 w-4" />
      </Toggle>
    );
  },
  args: {
    variant: "default",
    size: "default",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Toggle variant="default" aria-label="Default toggle">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Outline toggle">
        <Bold className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Toggle size="sm" aria-label="Small toggle">
        <Bold className="h-3 w-3" />
      </Toggle>
      <Toggle size="default" aria-label="Default toggle">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle size="lg" aria-label="Large toggle">
        <Bold className="h-5 w-5" />
      </Toggle>
    </div>
  ),
};
