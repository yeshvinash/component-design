// Sheet.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "./Sheet";
import { Button } from "../Button"; // Adjust path if needed

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    side: {
      control: { type: "radio" },
      options: ["left", "right", "top", "bottom"],
    },
    "aria-label": { control: "text" },
    "aria-labelledby": { control: "text" },
    "aria-describedby": { control: "text" },
    id: { control: "text" },
    role: { control: "text" },
    closeAriaLabel: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  args: {
    side: "right",
    "aria-label": "Default sheet",
    closeAriaLabel: "Close sheet",
  },
  render: (args) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            This is a description of the sheet’s content.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p>Place your main content here.</p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Cancel</Button>
          </SheetClose>
          <Button>Submit</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const FromLeft: Story = {
  args: {
    side: "left",
    "aria-label": "Sheet sliding from left",
  },
  render: (args) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle>Left Sheet</SheetTitle>
          <SheetDescription>Slides in from the left side.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

export const FromBottom: Story = {
  args: {
    side: "bottom",
    "aria-label": "Sheet sliding from bottom",
  },
  render: (args) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Bottom Sheet</Button>
      </SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle>Bottom Sheet</SheetTitle>
          <SheetDescription>Slides in from the bottom.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};
