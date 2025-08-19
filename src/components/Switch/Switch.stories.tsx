import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    onLabel: {
      control: "text",
    },
    offLabel: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.checked ?? false);

    return (
      <Switch
        {...args}
        checked={isChecked}
        onCheckedChange={(state) => setIsChecked(state)}
      />
    );
  },
  args: {
    checked: false,
    disabled: false,
    onLabel: "On",
    offLabel: "Off",
  },
};

export const Disabled: Story = {
  render: () => <Switch checked={true} disabled={true} />,
};

export const CustomLabels: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <Switch
        checked={isChecked}
        onCheckedChange={(state) => setIsChecked(state)}
        onLabel="Enabled"
        offLabel="Disabled"
      />
    );
  },
};

export const AccessibilityProps: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <Switch
        checked={isChecked}
        onCheckedChange={(state) => setIsChecked(state)}
        aria-label="Dark mode switch"
        aria-required
      />
    );
  },
};
