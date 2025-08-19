// Pagination.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Basic: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#" isActive size={"sm"}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size={"sm"}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size={"sm"}>
            3
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const WithNavigation: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#" aria-label="Go to first page">
            First
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="sm">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive size={"sm"}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size={"sm"}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" aria-label="Go to last page">
            Last
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const WithEllipsis: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size={"sm"}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive size="sm">
            10
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size={"sm"}>
            20
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" size={"sm"} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const SmallSize: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" size="sm" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="sm">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="sm" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="sm">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" size="sm" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};
