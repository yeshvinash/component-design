// Textarea.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    helperText: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Type your message...",
  },
};

export const WithHelperText: Story = {
  args: {
    placeholder: "Type your message...",
    helperText: "You can write up to 500 characters.",
  },
};

export const WithError: Story = {
  args: {
    placeholder: "Type your message...",
    error: "This field is required.",
    helperText: "This field is required.",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled textarea",
    disabled: true,
  },
};
