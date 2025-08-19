// Tabs.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const DefaultTabs: Story = {
  args: {
    defaultValue: "account",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList variant="default" aria-label="Default Tabs">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4">
        Account settings go here.
      </TabsContent>
      <TabsContent value="password" className="p-4">
        Change your password here.
      </TabsContent>
    </Tabs>
  ),
};

export const WithBadge: Story = {
  args: {
    defaultValue: "notifications",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList variant="underline" aria-label="Tabs with Badge">
        <TabsTrigger
          value="notifications"
          badgeCount={3}
          badgeAriaLabel="3 unread notifications"
        >
          Notifications
        </TabsTrigger>
        <TabsTrigger value="messages" badgeCount={12}>
          Messages
        </TabsTrigger>
      </TabsList>
      <TabsContent value="notifications" className="p-4">
        You have 3 new notifications.
      </TabsContent>
      <TabsContent value="messages" className="p-4">
        You have 12 unread messages.
      </TabsContent>
    </Tabs>
  ),
};

export const ContainedWithMenu: Story = {
  args: {
    defaultValue: "home",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList variant="contained" aria-label="Contained Tabs with Menu">
        <TabsTrigger value="home" withMenu>
          Home
        </TabsTrigger>
        <TabsTrigger value="profile" badgeCount={2}>
          Profile
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home" className="p-4">
        Home content.
      </TabsContent>
      <TabsContent value="profile" className="p-4">
        Profile content.
      </TabsContent>
    </Tabs>
  ),
};
