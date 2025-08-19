import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
} from "./TableComponent";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  tags: ["autodocs"],
  component: Table,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

const sampleData = [
  { name: "Alice", age: 28, email: "alice@example.com" },
  { name: "Bob", age: 34, email: "bob@example.com" },
  { name: "Charlie", age: 22, email: "charlie@example.com" },
];

export const Default: Story = {
  render: () => (
    <Table aria-label="Sample user table">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((row, idx) => (
          <TableRow key={row.email}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.age}</TableCell>
            <TableCell>{row.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Table aria-label="User table with footer">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.email}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.age}</TableCell>
            <TableCell>{row.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total users: {sampleData.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const WithAriaProps: Story = {
  render: () => (
    <Table
      aria-label="Accessible user table"
      aria-describedby="table-desc"
      aria-rowcount={sampleData.length}
      aria-colcount={3}
    >
      <caption id="table-desc" className="mb-2 text-sm text-gray-500">
        This table lists users and their information.
      </caption>
      <TableHeader>
        <TableRow>
          <TableHead aria-colindex={1}>Name</TableHead>
          <TableHead aria-colindex={2}>Age</TableHead>
          <TableHead aria-colindex={3}>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((row, idx) => (
          <TableRow key={row.email} aria-rowindex={idx + 2}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.age}</TableCell>
            <TableCell>{row.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
