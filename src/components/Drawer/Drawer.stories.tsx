import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "./Drawer";
import { Button } from "../Button";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle showCloseButton>Default Drawer</DrawerTitle>
          <DrawerDescription>
            This is a simple drawer. You can put any content here.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl
            aliquam enim, eget aliquam nisl nunc euismod nisi.
          </p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
          <Button>Save Changes</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const FromLeft: Story = {
  render: (args) => (
    <Drawer {...args} direction="left">
      <DrawerTrigger asChild>
        <Button>Open Left Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle showCloseButton>Left Drawer</DrawerTitle>
          <DrawerDescription>
            This drawer slides in from the left.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>Content for a left-anchored drawer.</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const FromTop: Story = {
  render: (args) => (
    <Drawer {...args} direction="top">
      <DrawerTrigger asChild>
        <Button>Open Top Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle showCloseButton>Top Drawer</DrawerTitle>
          <DrawerDescription>
            This drawer slides in from the top.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>Content for a top-anchored drawer.</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const FromBottom: Story = {
  render: (args) => (
    <Drawer {...args} direction="bottom">
      <DrawerTrigger asChild>
        <Button>Open Bottom Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle showCloseButton>Bottom Drawer</DrawerTitle>
          <DrawerDescription>
            This drawer slides in from the bottom.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>Content for a bottom-anchored drawer.</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const WithCustomFooter: Story = {
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button>Open Drawer with Custom Footer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle showCloseButton>Drawer with Custom Footer</DrawerTitle>
          <DrawerDescription>
            The footer can contain any custom content.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>
            You can add forms, actions, or any other elements to the footer.
          </p>
        </div>
        <DrawerFooter>
          <div className="flex gap-2">
            <Button variant="secondary">Secondary Action</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
            <Button>Confirm</Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const NonDismissible: Story = {
  render: (args) => (
    <Drawer {...args} dismissible={false}>
      <DrawerTrigger asChild>
        <Button>Open Non-Dismissible Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Non-Dismissible Drawer</DrawerTitle>
          <DrawerDescription>
            This drawer cannot be closed by clicking outside or pressing ESC.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>Only the close button will close this drawer.</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
