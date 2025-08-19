import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "./Button";
import { Beaker, User } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "md"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    isLoadingButton: { control: "boolean" },
    startIcon: { control: false },
    endIcon: { control: false },
    asChild: { control: "boolean" },
    buttonChildWrapperClasses: { control: "text" },
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "sm",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const LinkText: Story = {
  args: {
    children: "Link Text",
    variant: "linkText",
  },
};

export const Time: Story = {
  args: {
    children: "Time",
    variant: "time",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const WithStartIcon: Story = {
  args: {
    children: "With Start Icon",
    startIcon: <User className="size-4" />,
  },
};

export const WithEndIcon: Story = {
  args: {
    children: "With End Icon",
    endIcon: <Beaker className="size-4" />,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading",
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const IsLoadingButton: Story = {
  args: {
    children: "Loading Button",
    isLoadingButton: true,
  },
};

export const CustomWrapperClasses: Story = {
  args: {
    children: "Custom Wrapper",
    buttonChildWrapperClasses: " px-2 rounded",
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="linkText">
        Link Text
      </Button>
      <Button {...args} variant="time">
        Time
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
    </div>
  ),
};
