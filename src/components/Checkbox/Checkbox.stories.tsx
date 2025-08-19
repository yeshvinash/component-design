// Checkbox.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked",
    },
    disabled: {
      control: "boolean",
      description: "Disable the checkbox",
    },
    variant: {
      control: "select",
      options: ["default", "outline", "filled", "purple"],
      description: "Visual variant of the checkbox",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    variant: "default",
  },
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.checked);
    return (
      <label className="flex items-center gap-2">
        <Checkbox
          {...args}
          checked={isChecked}
          onCheckedChange={setIsChecked}
        />
        <span>Default Checkbox</span>
      </label>
    );
  },
};

export const Outline: Story = {
  args: {
    checked: true,
    variant: "outline",
  },
  render: (args) => (
    <label className="flex items-center gap-2">
      <Checkbox {...args} />
      <span>Outline Checkbox</span>
    </label>
  ),
};

export const Filled: Story = {
  args: {
    checked: "indeterminate",
    variant: "filled",
  },
  render: (args) => (
    <label className="flex items-center gap-2">
      <Checkbox {...args} />
      <span>Indeterminate Filled Checkbox</span>
    </label>
  ),
};

export const Purple: Story = {
  args: {
    checked: false,
    variant: "purple",
  },
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.checked);
    return (
      <label className="flex items-center gap-2">
        <Checkbox
          {...args}
          checked={isChecked}
          onCheckedChange={setIsChecked}
        />
        <span>Purple Checkbox</span>
      </label>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Checkbox variant="default" />
        <span>Default</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox variant="outline" />
        <span>Outline</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox variant="filled" />
        <span>Filled</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox variant="purple" />
        <span>Purple</span>
      </div>
    </div>
  ),
};
