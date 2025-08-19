// Dialog.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./Dialog";
import { Button } from "../Button";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Default Dialog</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          This is an example of the dialog component. You can place any content
          here.
        </DialogDescription>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithoutCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Without Close Button</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle hideCloseButton>Dialog Without Close Button</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          This dialog does not have the top-right close button.
        </DialogDescription>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const CustomContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Custom Content</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Custom Layout</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>You can put form fields, lists, or any JSX here.</p>
          <input
            type="text"
            placeholder="Example input"
            className="w-full rounded border border-gray-300 px-2 py-1"
          />
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
