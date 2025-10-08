import type { Meta, StoryObj } from "@storybook/nextjs";
import { Input } from "../components/Input/Input";

const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Input component supporting text, password, and number types, with optional clearable functionality",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter text",
    clearable: false,
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
    clearable: false,
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter number",
    clearable: false,
  },
};
