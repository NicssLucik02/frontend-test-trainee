import type { Meta, StoryObj } from "@storybook/nextjs";
import { Toast } from "../components/Toast/Toast";

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    type: "success",
    text: "This is an info message",
    duration: 3000,
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    text: "This is an warning message",
    duration: 5000,
  },
};

export const Success: Story = {
  args: {
    type: "success",
    text: "This is an success message",
    duration: 7000,
  },
};

export const Reject: Story = {
  args: {
    type: "reject",
    text: "This is an reject message",
    duration: 9000,
  },
};
