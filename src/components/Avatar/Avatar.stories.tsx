import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "Name used for initials and color generation",
    },
    src: {
      control: "text",
      description: "Image URL for the avatar",
    },
    status: {
      control: "select",
      options: ["online", "offline", undefined],
      description: "User status indicator",
    },
    initialsLength: {
      control: "radio",
      options: [1, 2],
      description: "Number of initials to display when using fallback",
    },
    alt: {
      control: "text",
      description: "Alt text for the avatar",
    },
    statusLabel: {
      control: "text",
      description: "Accessible label for the status indicator",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/100?img=3",
    name: "Jane Doe",
    status: "online",
  },
};

export const WithInitials: Story = {
  args: {
    name: "John Smith",
    status: "offline",
    initialsLength: 2,
  },
};

export const SingleInitial: Story = {
  args: {
    name: "Alice Wonderland",
    initialsLength: 1,
  },
};

export const WithoutStatus: Story = {
  args: {
    name: "Charlie Brown",
  },
};

export const CustomAltAndStatusLabel: Story = {
  args: {
    src: "https://i.pravatar.cc/100?img=5",
    name: "David Johnson",
    status: "online",
    alt: "Profile picture of David",
    statusLabel: "Currently Active",
  },
};
