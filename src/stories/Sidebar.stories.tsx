import type { Meta, StoryObj } from "@storybook/nextjs";
import { Sidebar } from "../components/Sidebar/Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Navigation/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: { type: "radio" },
      options: ["dark", "light"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    active: false,
    theme: "dark",
  },
};
